import subprocess
from pathlib import Path

BOOKS_DIR = Path('/home/ubuntu/manosabiertas/books-es')
PDF_DIR = Path('/home/ubuntu/manosabiertas/pdfs-es')
PDF_DIR.mkdir(parents=True, exist_ok=True)

def main():
    for md_file in sorted(BOOKS_DIR.glob('*.md')):
        pdf_file = PDF_DIR / f'{md_file.stem}.pdf'
        print(f'Converting {md_file.name} to {pdf_file.name}...')
        cmd = ['manus-md-to-pdf', str(md_file), str(pdf_file)]
        res = subprocess.run(cmd, capture_output=True, text=True)
        if res.returncode == 0:
            print(f'  ✓ Successfully generated {pdf_file.name}')
        else:
            print(f'  ✗ Error generating {pdf_file.name}: {res.stderr}')

if __name__ == '__main__':
    main()
