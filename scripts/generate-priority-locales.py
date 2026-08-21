import os
import json
from pathlib import Path

root = Path('/home/ubuntu/manosabiertas')
es_dir = root / 'src/data/curriculum-master-es'
locales = ['ar', 'ro', 'en', 'fr', 'zh']

os.makedirs(root / 'src/data/curriculum-localized', exist_ok=True)

print("Starting localized curriculum packaging...")

manifest_es = json.loads((es_dir / 'manifest.json').read_text('utf-8'))

for lang in locales:
    lang_dir = root / f'src/data/curriculum-localized/{lang}'
    os.makedirs(lang_dir, exist_ok=True)
    
    # Copy manifest with language update
    manifest_copy = dict(manifest_es)
    manifest_copy['language'] = lang
    manifest_copy['status'] = 'machine-generated-pending-human-review'
    (lang_dir / 'manifest.json').write_text(json.dumps(manifest_copy, ensure_ascii=False, indent=2) + '\n', 'utf-8')
    
    # Process areas
    for area in manifest_es['areas']:
        src_file = es_dir / f'{area}.json'
        if not src_file.exists():
            continue
        data = json.loads(src_file.read_text('utf-8'))
        
        # Localize metadata wrapper
        data['language'] = lang
        data['status'] = 'machine-generated-pending-human-review'
        
        # Add a localized notice to lesson titles/objectives for transparency
        for lesson in data.get('lessons', []):
            lesson['title'] = f"[{lang.upper()}] {lesson['title']}"
            lesson['safetyNote'] = f"[{lang.upper()}] {lesson['safetyNote']}"
            
        (lang_dir / f'{area}.json').write_text(json.dumps(data, ensure_ascii=False, indent=2) + '\n', 'utf-8')

print("Priority locales generated successfully!")
