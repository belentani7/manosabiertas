import concurrent.futures as cf
import json
import os
import sys
import time
from pathlib import Path
import requests

BASE = Path('/home/ubuntu/manosabiertas')
OUT = BASE / 'src/data/curriculum-master-es'
OUT.mkdir(parents=True, exist_ok=True)

areas = [
('A1','Alfabetización digital y dispositivos móviles','0 a 2',['encendido y carga','pantalla táctil y gestos','teclado y escritura','archivos y carpetas','navegadores y búsquedas','correo electrónico','mensajería y videollamadas','fotografías y documentos','instalación y permisos','contraseñas y autenticación','fraudes y phishing','privacidad en redes','copias de seguridad','actualizaciones','accesibilidad del dispositivo','conectividad Wi-Fi y datos','mapas y transporte','formularios digitales','descargas seguras','resolución de problemas']),
('A2','Español e idiomas de integración laboral','0 a 4',['saludos y presentación','datos personales','números y fechas','direcciones y horarios','comprensión de instrucciones','citas y turnos','llamadas telefónicas','correo profesional','formularios básicos','vocabulario laboral','prevención de riesgos','contrato y nómina','entrevista de trabajo','atención al público','reclamaciones respetuosas','relato de experiencia','lectura de anuncios','escritura clara','pronunciación y escucha','autonomía comunicativa']),
('A3','Ofimática práctica y productividad en la nube','1 a 5',['documentos de texto','formato y estilos','tablas','plantillas','presentaciones','hojas de cálculo','fórmulas básicas','filtros y ordenación','gráficos','presupuestos','correo profesional','calendario','almacenamiento en nube','compartir archivos','coedición','versiones','PDF y exportación','automatización sencilla','organización del trabajo','proyecto integrado']),
('A4','Inteligencia artificial aplicada y ética','1 a 5',['qué es la IA','datos y modelos','límites y errores','prompts claros','resumen y reformulación','traducción asistida','búsqueda con verificación','CV y cartas','aprendizaje personalizado','hojas de cálculo asistidas','automatización de tareas','imágenes y derechos','voz y accesibilidad','sesgos','privacidad','seguridad','citación y procedencia','evaluación de respuestas','uso profesional','proyecto responsable']),
('A5','Derechos fundamentales, extranjería y trámites','0 a 4',['derechos y deberes','empadronamiento','identificación digital','citas oficiales','carpeta ciudadana','residencia','trabajo','renovaciones','reagrupación familiar','protección internacional','nacionalidad','sanidad','educación','vivienda','servicios sociales','consumo y reclamaciones','igualdad y no discriminación','violencia y protección','asistencia jurídica','verificación de fuentes oficiales']),
('A6','Empleabilidad, creación de CV y entrevistas','1 a 4',['autodiagnóstico','competencias','logros','experiencia internacional','CV cronológico','CV funcional','CV compatible con ATS','carta de presentación','perfil profesional','portales de empleo','red profesional','candidatura espontánea','entrevista','entrevista telefónica','entrevista por vídeo','preguntas difíciles','derechos laborales básicos','negociación responsable','plan de búsqueda','portafolio de evidencias']),
('A7','Emprendimiento, autónomos y cooperativismo','2 a 5',['problema y oportunidad','cliente y comunidad','propuesta de valor','investigación de mercado','modelo de negocio','costes e ingresos','precios','tesorería','facturación','fiscalidad orientativa','alta y obligaciones','protección de datos','marca y contenidos','ventas responsables','comunicación','cooperativas','economía social','financiación','riesgos','plan de negocio']),
('A8','Salud, bienestar y navegación sanitaria','0 a 3',['urgencias y emergencias','centro de salud','tarjeta sanitaria','cita previa','intérprete y comunicación','medicación segura','prevención','salud mental','estrés migratorio','sueño y descanso','alimentación','actividad física','salud sexual','embarazo','infancia','personas mayores','discapacidad','confidencialidad','violencia y ayuda','información sanitaria fiable']),
('A9','Participación comunitaria, vivienda y servicios','0 a 3',['búsqueda de vivienda','anuncios y estafas','visita y preguntas','contrato de alquiler','fianza y pagos','suministros','convivencia','mantenimiento','consumo responsable','servicios municipales','transporte','bibliotecas','escuela y familia','asociaciones','voluntariado','mediación','participación cívica','seguridad vecinal','recursos para cuidados','proyecto comunitario']),
('A10','Especialización técnica avanzada y liderazgo','4 a 5',['HTML semántico','CSS responsive','TypeScript','React','Next.js','APIs','bases de datos','Git','pruebas','seguridad web','accesibilidad WCAG','PWA y offline','internacionalización','arquitectura','documentación','contribución open source','revisión de código','liderazgo técnico','gobernanza comunitaria','proyecto final'])
]

langs = ['es','ca','pt-BR','pt','en','zh','hi','qu','ar','fr','de','it','ru','uk','pl','ro','bg','nl','sv','da','fi','no','el','tr','ur','fa','bn','pa','ta','te','mr','gu','sw','am','ber','tl','vi','ja','ko']

lesson_schema = {'type':'object','additionalProperties':False,'properties':{
    'id':{'type':'string'},'title':{'type':'string'},'level':{'type':'integer'},'focus':{'type':'string'},'estimatedMinutes':{'type':'integer'},
    'objective':{'type':'string'},'explanation':{'type':'string'},'steps':{'type':'array','items':{'type':'string'}},
    'guidedPractice':{'type':'string'},'independentPractice':{'type':'string'},'evidenceOfLearning':{'type':'string'},
    'commonErrors':{'type':'array','items':{'type':'string'}},'accessibility':{'type':'string'},'safetyNote':{'type':'string'},'sourceRequirement':{'type':'string'}
},'required':['id','title','level','focus','estimatedMinutes','objective','explanation','steps','guidedPractice','independentPractice','evidenceOfLearning','commonErrors','accessibility','safetyNote','sourceRequirement']}


def call_batch(area, batch_index, focuses, min_level, max_level):
    area_id, area_name, _, _ = area
    api = os.environ['OPENAI_API_BASE'].rstrip('/') + '/chat/completions'
    point_ids = [f'{area_id}-P{batch_index*len(focuses)+i+1:03d}' for i in range(len(focuses))]
    prompt = f'''Crea {len(focuses)} lecciones didácticas completas para Manos Abiertas. Área: {area_id} {area_name}. Rango de niveles: {min_level}-{max_level}. Cada foco corresponde a una lección y debe conservarse exactamente en este orden: {json.dumps(focuses, ensure_ascii=False)}. IDs obligatorios en el mismo orden: {json.dumps(point_ids)}.

Devuelve una lección distinta y concreta por foco. Usa una explicación de 70-110 palabras, 4-6 pasos prácticos, una práctica guiada, una práctica independiente y una evidencia observable. Ajusta dificultad: distribuye niveles dentro del rango según el foco, sin usar nivel inferior al mínimo ni superior al máximo. Redacta en español claro, inclusivo y útil para personas migrantes, familias y docentes con dispositivos modestos. No inventes leyes, plazos, estadísticas, teléfonos, organismos concretos ni URLs. Para trámites, salud o empleo enseña procedimientos de verificación y preparación, no asesoramiento individual. `sourceRequirement` debe decir qué documento o fuente oficial debe revisar el equipo editorial antes de publicar. Cada `safetyNote` debe indicar límites o cuándo derivar a una persona profesional. Devuelve solo JSON válido.'''
    payload = {'model':'gpt-5-mini','messages':[{'role':'system','content':'Eres un diseñador instruccional riguroso. Produce únicamente JSON válido y no inventes datos normativos o clínicos.'},{'role':'user','content':prompt}], 'response_format':{'type':'json_schema','json_schema':{'name':f'{area_id}_batch_{batch_index}','strict':True,'schema':{'type':'object','properties':{'lessons':{'type':'array','items':lesson_schema}},'required':['lessons'],'additionalProperties':False}}},'max_completion_tokens':12000}
    for attempt in range(4):
        try:
            r = requests.post(api, headers={'Authorization':f'Bearer {os.environ["OPENAI_API_KEY"]}','Content-Type':'application/json'}, json=payload, timeout=180)
            if r.status_code >= 400:
                raise RuntimeError(f'HTTP {r.status_code}: {r.text[:1200]}')
            content = r.json()['choices'][0]['message']['content']; lessons = json.loads(content)['lessons']
            if len(lessons) != len(focuses): raise ValueError(f'wrong batch size {len(lessons)}')
            if [x['id'] for x in lessons] != point_ids: raise ValueError('ids/order mismatch')
            for lesson in lessons:
                if not (70 <= len(lesson['explanation']) <= 1200): raise ValueError('explanation length invalid')
                if not (4 <= len(lesson['steps']) <= 6): raise ValueError('steps count invalid')
            return lessons
        except Exception as exc:
            print(f'RETRY {area_id} batch {batch_index}: {exc}', flush=True)
            if attempt == 3: raise
            time.sleep(2**attempt)


def main():
    wanted = set(sys.argv[1:]) if len(sys.argv) > 1 else {a[0] for a in areas}
    selected = [a for a in areas if a[0] in wanted]
    for area in selected:
        area_id, area_name, level_range, focuses = area
        min_level, max_level = map(int, level_range.split(' a '))
        batches = [focuses[i:i+5] for i in range(0,20,5)]
        all_lessons=[]
        with cf.ThreadPoolExecutor(max_workers=2) as ex:
            futures = [ex.submit(call_batch, area, idx, b, min_level, max_level) for idx,b in enumerate(batches)]
            for fut in futures: all_lessons.extend(fut.result())
        result={'areaId':area_id,'language':'es','areaName':area_name,'lessons':all_lessons,'status':'machine-generated-pending-human-review'}
        (OUT/f'{area_id}.json').write_text(json.dumps(result, ensure_ascii=False, indent=2), encoding='utf-8')
        print(f'generated {area_id}: {len(all_lessons)} substantive lessons', flush=True)
    files=[OUT/f'{a[0]}.json' for a in areas if (OUT/f'{a[0]}.json').exists()]
    manifest={'language':'es','areas':[a[0] for a in areas if (OUT/f'{a[0]}.json').exists()],'lessons':sum(len(json.loads(p.read_text())['lessons']) for p in files),'status':'machine-generated-pending-human-review'}
    (OUT/'manifest.json').write_text(json.dumps(manifest,ensure_ascii=False,indent=2),encoding='utf-8')
    print(json.dumps(manifest,ensure_ascii=False), flush=True)

if __name__=='__main__': main()
