import concurrent.futures as cf
import json
import os
import sys
import time
from pathlib import Path
import requests

BASE = Path('/home/ubuntu/manosabiertas')
IN_DIR = BASE / 'src/data/curriculum-master-es'
OUT_DIR = BASE / 'src/data/curriculum-localized'
OUT_DIR.mkdir(parents=True, exist_ok=True)

# Priority languages for immigrant communities in Spain
LANGUAGES = {
    'ar': 'Árabe (Estándar Moderno)',
    'ro': 'Rumano',
    'zh': 'Chino Mandarín',
    'en': 'Inglés',
    'fr': 'Francés',
    'uk': 'Ucraniano',
    'pt-BR': 'Portugués (Brasil)',
    'ru': 'Ruso',
    'ur': 'Urdu (Pakistán)',
    'bn': 'Bengalí (Bangladés)',
    'sw': 'Suajili',
    'ber': 'Bereber (Tamazight)',
    'tl': 'Tagalo (Filipinas)'
}

def translate_batch(area_id, lang_code, lang_name, lessons):
    api = os.environ['OPENAI_API_BASE'].rstrip('/') + '/chat/completions'
    prompt = f'''Traduce fielmente las siguientes lecciones educativas del español al {lang_name} ({lang_code}). 
Mantén el tono inclusivo, sencillo y respetuoso. Asegúrate de que los términos técnicos sean comprensibles o explicados.
Conserva exactamente los IDs y la estructura. 

Lecciones a traducir:
{json.dumps(lessons, ensure_ascii=False)}

Devuelve únicamente el array de lecciones traducidas en formato JSON.'''
    
    payload = {
        'model': 'gpt-5-mini',
        'messages': [
            {'role': 'system', 'content': f'Eres un traductor profesional especializado en educación e integración social. Traduces de español a {lang_name}. Devuelves solo JSON.'},
            {'role': 'user', 'content': prompt}
        ],
        'response_format': {'type': 'json_schema', 'json_schema': {'name': 'translation', 'strict': True, 'schema': {
            'type': 'object',
            'properties': {
                'lessons': {
                    'type': 'array',
                    'items': {
                        'type': 'object',
                        'additionalProperties': False,
                        'properties': {
                            'id': {'type': 'string'}, 'title': {'type': 'string'}, 'level': {'type': 'integer'}, 'focus': {'type': 'string'}, 'estimatedMinutes': {'type': 'integer'},
                            'objective': {'type': 'string'}, 'explanation': {'type': 'string'}, 'steps': {'type': 'array', 'items': {'type': 'string'}},
                            'guidedPractice': {'type': 'string'}, 'independentPractice': {'type': 'string'}, 'evidenceOfLearning': {'type': 'string'},
                            'commonErrors': {'type': 'array', 'items': {'type': 'string'}}, 'accessibility': {'type': 'string'}, 'safetyNote': {'type': 'string'}, 'sourceRequirement': {'type': 'string'}
                        },
                        'required': ['id', 'title', 'level', 'focus', 'estimatedMinutes', 'objective', 'explanation', 'steps', 'guidedPractice', 'independentPractice', 'evidenceOfLearning', 'commonErrors', 'accessibility', 'safetyNote', 'sourceRequirement']
                    }
                }
            },
            'required': ['lessons'],
            'additionalProperties': False
        }}},
        'max_completion_tokens': 15000
    }
    
    for attempt in range(3):
        try:
            r = requests.post(api, headers={'Authorization': f'Bearer {os.environ["OPENAI_API_KEY"]}', 'Content-Type': 'application/json'}, json=payload, timeout=300)
            r.raise_for_status()
            translated = json.loads(r.json()['choices'][0]['message']['content'])['lessons']
            return translated
        except Exception as e:
            print(f'Error traduciendo {area_id} a {lang_code} (intento {attempt+1}): {e}')
            if attempt == 2: return None
            time.sleep(5)

def main():
    target_langs = sys.argv[1:] if len(sys.argv) > 1 else list(LANGUAGES.keys())
    
    for lang_code in target_langs:
        lang_name = LANGUAGES.get(lang_code, lang_code)
        lang_dir = OUT_DIR / lang_code
        lang_dir.mkdir(parents=True, exist_ok=True)
        
        print(f'Iniciando traducción masiva al {lang_name} ({lang_code})...')
        
        for area_file in sorted(IN_DIR.glob('A*.json')):
            area_id = area_file.stem
            dest_file = lang_dir / f'{area_id}.json'
            
            if dest_file.exists():
                print(f'Saltando {area_id} para {lang_code} (ya existe).')
                continue
                
            data = json.loads(area_file.read_text(encoding='utf-8'))
            lessons = data['lessons']
            
            # Translate in batches of 5 to stay within token limits
            translated_all = []
            batches = [lessons[i:i+5] for i in range(0, len(lessons), 5)]
            
            with cf.ThreadPoolExecutor(max_workers=2) as ex:
                futures = [ex.submit(translate_batch, area_id, lang_code, lang_name, b) for b in batches]
                for fut in futures:
                    res = fut.result()
                    if res: translated_all.extend(res)
            
            if len(translated_all) == len(lessons):
                output = {
                    'areaId': area_id,
                    'language': lang_code,
                    'areaName': area_name_localized(area_id, lang_code), # Simplified for now
                    'lessons': translated_all,
                    'status': 'machine-translated-pending-review'
                }
                dest_file.write_text(json.dumps(output, ensure_ascii=False, indent=2), encoding='utf-8')
                print(f'  ✓ {area_id} traducido ({len(translated_all)} lecciones).')
            else:
                print(f'  ✗ Error en {area_id}: se esperaban {len(lessons)} lecciones, se obtuvieron {len(translated_all)}.')

def area_name_localized(area_id, lang_code):
    # Mapping of area names for priority languages
    names = {
        'A1': {'ar': 'محو الأمية الرقمية والأجهزة المحmولة', 'ro': 'Alfabetizarea digitală și dispozitivele mobile', 'en': 'Digital Literacy and Mobile Devices'},
        'A2': {'ar': 'اللغة الإسبانية ولغات الإدماج المهني', 'ro': 'Spaniola și limbile de integrare laborală', 'en': 'Spanish and Labour Integration Languages'},
        'A4': {'ar': 'الذكاء الاصطناعي التطبيقي والأخلاقيات', 'ro': 'Inteligența artificială aplicată și etica', 'en': 'Applied AI and Ethics'},
        'A6': {'ar': 'القابلية للتوظيف، إنشاء السيرة الذاتية والمقابلات', 'ro': 'Angajabilitate, crearea CV-ului și interviuri', 'en': 'Employability, CV Creation and Interviews'},
    }
    return names.get(area_id, {}).get(lang_code, f'Area {area_id}')

if __name__ == '__main__':
    main()
