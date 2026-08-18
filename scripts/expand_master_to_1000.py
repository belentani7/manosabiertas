import json
from pathlib import Path

OUT = Path('/home/ubuntu/manosabiertas/src/data/curriculum-master-es')
LEVEL_NAMES = {0:'iniciación',1:'fundamentos',2:'autonomía',3:'aplicación profesional',4:'análisis y diseño',5:'especialización'}

# Additional learning design for each level. The base lesson supplies the strand-specific explanation;
# these additions make each point actionable and progressively harder rather than an empty placeholder.
LEVEL_GUIDANCE = {
    0: ('Reconoce y nombra la idea principal. Trabaja con una demostración lenta y una sola decisión cada vez.',
        ['Observa una demostración de la tarea.', 'Repite el primer paso con apoyo.', 'Señala o describe qué ha cambiado.', 'Repite la tarea una vez más sin ayuda.']),
    1: ('Realiza la tarea siguiendo una guía breve y comprueba cada resultado antes de continuar.',
        ['Lee la guía y prepara lo necesario.', 'Realiza la tarea con una lista de comprobación.', 'Compara el resultado con el ejemplo.', 'Corrige un error sencillo y vuelve a guardar el trabajo.']),
    2: ('Elige una estrategia, ejecuta la tarea de principio a fin y explica por qué tomaste cada decisión.',
        ['Define el resultado que necesitas.', 'Selecciona la herramienta o procedimiento adecuado.', 'Ejecuta la tarea sin instrucciones paso a paso.', 'Explica qué decisión fue más importante y por qué.']),
    3: ('Aplica la competencia a una situación real, teniendo en cuenta el contexto, la comunicación y la seguridad.',
        ['Describe la situación y a quién afecta.', 'Planifica la tarea con prioridades y límites.', 'Realiza el trabajo y registra las decisiones.', 'Revisa el resultado con una rúbrica y propone una mejora.']),
    4: ('Analiza alternativas, identifica riesgos y diseña una solución que pueda ser revisada por otra persona.',
        ['Define criterios de calidad y de seguridad.', 'Compara al menos dos alternativas.', 'Construye una solución documentada.', 'Pide revisión, incorpora cambios y justifica el resultado.']),
    5: ('Integra la competencia en un proyecto complejo, forma a otra persona y deja una documentación reutilizable.',
        ['Formula el problema y los criterios de éxito.', 'Diseña un plan con dependencias y riesgos.', 'Implementa, prueba y documenta la solución.', 'Forma a otra persona y recoge una revisión crítica.'])
}

def level_for(base_level, variant):
    # Keep valid progression inside the six-level framework. Variant 0..4 is the learning stage.
    return min(5, max(0, base_level + variant))

def main():
    all_lessons=[]
    for path in sorted(OUT.glob('A[1-9].json')) + sorted(OUT.glob('A10.json')):
        if path.name == 'manifest.json': continue
        data=json.loads(path.read_text(encoding='utf-8'))
        base=data.get('lessons',[])
        if len(base) == 100:
            all_lessons.extend(base)
            continue
        if len(base) != 20:
            raise SystemExit(f'{path.name}: expected 20 strand lessons before expansion, got {len(base)}')
        expanded=[]
        for strand_index, lesson in enumerate(base):
            for variant in range(5):
                level=level_for(lesson.get('level',0), variant)
                focus=lesson['focus']
                new_id=f"{data['areaId']}-P{strand_index*5+variant+1:03d}"
                guidance, steps=LEVEL_GUIDANCE[level]
                expanded.append({
                    **lesson,
                    'id':new_id,
                    'title':f"{lesson['title']} — Nivel {level}: {LEVEL_NAMES[level]}",
                    'level':level,
                    'estimatedMinutes': max(10, min(90, int(lesson.get('estimatedMinutes',20)) + variant*10)),
                    'objective':f"{lesson['objective']} En esta etapa, la persona {guidance.lower()}",
                    'explanation':lesson['explanation'] + '\n\n**Progresión de nivel:** ' + guidance,
                    'steps':steps,
                    'guidedPractice':lesson['guidedPractice'] + f" Trabaja en modo {LEVEL_NAMES[level]} y contrasta tu resultado con la guía.",
                    'independentPractice':lesson['independentPractice'] + f" Documenta una decisión y una mejora propia de nivel {level}.",
                    'evidenceOfLearning':lesson['evidenceOfLearning'] + f" Para superar este punto, entrega una evidencia que muestre {LEVEL_NAMES[level]}.",
                    'commonErrors':lesson['commonErrors'] + [f"Intentar resolver una tarea de nivel {level} sin comprobar el resultado."],
                    'accessibility':lesson['accessibility'] + ' Permite realizar la evidencia mediante texto, audio transcrito, demostración o apoyo de otra persona.',
                    'status':'machine-generated-pending-human-review'
                })
        out={'areaId':data['areaId'],'language':'es','areaName':data['areaName'],'lessons':expanded,'status':'machine-generated-pending-human-review'}
        path.write_text(json.dumps(out,ensure_ascii=False,indent=2),encoding='utf-8')
        all_lessons.extend(expanded)
    manifest={'language':'es','areas':sorted({x['areaId'] for x in all_lessons}) if all_lessons and 'areaId' in all_lessons[0] else sorted([p.stem for p in OUT.glob('A*.json') if p.stem != 'manifest']),'lessons':len(all_lessons),'status':'machine-generated-pending-human-review'}
    (OUT/'manifest.json').write_text(json.dumps(manifest,ensure_ascii=False,indent=2),encoding='utf-8')
    print(json.dumps(manifest,ensure_ascii=False))

if __name__=='__main__': main()
