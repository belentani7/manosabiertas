import concurrent.futures as cf
import json
import os
from pathlib import Path
import requests

BASE = Path('/home/ubuntu/manosabiertas')
IN_DIR = BASE / 'src/data/curriculum-master-es'
OUT_DIR = BASE / 'src/data/curriculum-master-pt'
OUT_DIR.mkdir(parents=True, exist_ok=True)

def translate_lesson_batch(lessons):
    api = os.environ['OPENAI_API_BASE'].rstrip('/') + '/chat/completions'
    prompt = f'''Traduza fielmente as seguintes lições educacionais do espanhol para o português (Brasil). 
Mantenha o tom inclusivo, simples e respeitoso. Preserve exatamente os IDs e a estrutura JSON.

Lições:
{json.dumps(lessons, ensure_ascii=False)}

Retorne exclusivamente um objeto JSON com a chave "lessons" contendo a lista traduzida.'''

    payload = {
        'model': 'gpt-5-mini',
        'messages': [
            {'role': 'system', 'content': 'Você é um tradutor profissional especializado em educação e inclusão social. Retorne apenas JSON válido.'},
            {'role': 'user', 'content': prompt}
        ],
        'response_format': {'type': 'json_schema', 'json_schema': {'name': 'pt_batch', 'strict': True, 'schema': {
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
            if r.status_code >= 400:
                raise RuntimeError(f"HTTP {r.status_code}: {r.text[:500]}")
            res_json = r.json()
            if 'choices' not in res_json:
                raise RuntimeError(f"No choices in response: {res_json}")
            return json.loads(res_json['choices'][0]['message']['content'])['lessons']
        except Exception as e:
            if attempt == 2: raise
            import time; time.sleep(3)

def process_area(file_path):
    data = json.loads(file_path.read_text(encoding='utf-8'))
    lessons = data['lessons']
    batches = [lessons[i:i+10] for i in range(0, len(lessons), 10)]
    translated = []
    with cf.ThreadPoolExecutor(max_workers=3) as ex:
        futures = [ex.submit(translate_lesson_batch, b) for b in batches]
        for fut in futures:
            translated.extend(fut.result())
    
    out_data = {
        'areaId': data['areaId'],
        'language': 'pt-BR',
        'areaName': data['areaName'], # We can keep or translate areaName
        'lessons': translated,
        'status': 'machine-translated-pending-review'
    }
    out_path = OUT_DIR / file_path.name
    out_path.write_text(json.dumps(out_data, ensure_ascii=False, indent=2), encoding='utf-8')
    print(f'Translated area {data["areaId"]} to Portuguese ({len(translated)} lessons).')

def main():
    files = sorted(IN_DIR.glob('A*.json'))
    for f in files:
        process_area(f)
    print('All areas translated to Portuguese.')

if __name__ == '__main__':
    main()
