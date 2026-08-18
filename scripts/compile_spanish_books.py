import json
from pathlib import Path

BASE = Path('/home/ubuntu/manosabiertas')
IN_DIR = BASE / 'src/data/curriculum-master-es'
BOOKS_DIR = BASE / 'books-es'
BOOKS_DIR.mkdir(parents=True, exist_ok=True)

def main():
    for json_file in sorted(IN_DIR.glob('A*.json')):
        data = json.loads(json_file.read_text(encoding='utf-8'))
        area_id = data['areaId']
        area_name = data.get('areaName', area_id)
        lessons = data['lessons']
        
        md_lines = [
            f"# Área {area_id}: {area_name}",
            f"\n> **Plataforma Educativa Manos Abiertas** — Currículo Oficial de Nivel 0 a Experto\n",
            f"---",
            f"\n## Índice de Módulos y Puntos ({len(lessons)} puntos)\n"
        ]
        
        for lesson in lessons:
            md_lines.append(f"- **{lesson['id']}** ({lesson['title']}) - Nivel {lesson['level']} ({lesson['estimatedMinutes']} min)")
            
        md_lines.append("\n---\n\n# Contenido Detallado de las Lecciones\n")
        
        for lesson in lessons:
            md_lines.append(f"## [{lesson['id']}] {lesson['title']}")
            md_lines.append(f"\n- **Nivel**: {lesson['level']}")
            md_lines.append(f"- **Foco**: {lesson['focus']}")
            md_lines.append(f"- **Duración estimada**: {lesson['estimatedMinutes']} minutos")
            md_lines.append(f"\n### Objetivo\n{lesson['objective']}")
            md_lines.append(f"\n### Explicación Pedagógica\n{lesson['explanation']}")
            md_lines.append(f"\n### Pasos Prácticos")
            for idx, step in enumerate(lesson['steps'], 1):
                md_lines.append(f"{idx}. {step}")
            md_lines.append(f"\n### Práctica Guiada\n{lesson['guidedPractice']}")
            md_lines.append(f"\n### Práctica Independiente\n{lesson['independentPractice']}")
            md_lines.append(f"\n### Evidencia de Aprendizaje\n{lesson['evidenceOfLearning']}")
            md_lines.append(f"\n### Errores Frecuentes")
            for err in lesson['commonErrors']:
                md_lines.append(f"- {err}")
            md_lines.append(f"\n### Accesibilidad\n{lesson['accessibility']}")
            md_lines.append(f"\n### Notas de Seguridad\n{lesson['safetyNote']}")
            md_lines.append(f"\n### Requisito de Fuente Oficial\n{lesson['sourceRequirement']}")
            md_lines.append("\n---\n")
            
        out_md = BOOKS_DIR / f'Area_{area_id}_Espanol.md'
        out_md.write_text('\n'.join(md_lines), encoding='utf-8')
        print(f'Compiled book for Area {area_id} -> {out_md.name}')

if __name__ == '__main__':
    main()
