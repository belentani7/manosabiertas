# NOIACORE 2060 · QUICK START (60 SEGUNDOS)

## 🚀 ABRE YA

### Opción 1: Sin nada (doble clic)
```
Abre: C:\Users\USER\Desktop\noiacore\public\noiacore-2060-v3-mega.html
Listo. Espera 2.2 seg (CRT boot).
```

### Opción 2: Con servidor
```bash
cd C:\Users\USER\Desktop\noiacore\public
python -m http.server 8091 --bind 127.0.0.1
```
Luego abre: **http://127.0.0.1:8091**

---

## ⚡ QUÉ PUEDES HACER AHORA

| Acción | Tecla / Botón |
|---|---|
| **Buscar** | Escribe en buscador o presiona `/` |
| **Chat IA** | Botón `💬 IA` (te sugiere bancos) |
| **Federar** | Navega a "FEDERAR" (consulta 50+ APIs) |
| **Tema oscuro/claro** | Botón `◐` |
| **Modo LITE** | Botón en header |
| **Atajo meta** | Presiona `m` |
| **Cerrar modal** | Presiona `Esc` |

---

## 🧪 TEST RÁPIDO (1 min)

```
1. Escribe "bach" en buscador
2. Presiona Enter
   → Verás fichas de música/teoría
3. Haz clic "💭 Sugiere bancos"
   → Chat abre, IA sugiere: IMSLP, Freesound, YouTube, MusicBrainz
4. Navega a "FEDERAR"
5. Escribe "machine learning"
6. Presiona "Federar"
   → Resultados de Crossref, Open Library, IA, Wikidata, etc.
   → Total estimado: ≈100M+ registros
```

---

## 📚 ARCHIVOS

| Archivo | Qué es |
|---|---|
| `noiacore-2060-v3-mega.html` | **App principal** (abre esto) |
| `index.html` | Índice (links a todo) |
| `README-v3-MEGA.md` | Documentación completa |
| `BANCOS-EXPANDED.md` | 150+ bancos (referencia) |
| `VALIDACION-CHECKLIST.md` | Tests de calidad |
| `RESUMEN-EJECUTIVO.md` | Resumen para presentar |

---

## 🎨 PERSONALIZAR (2 min)

### Cambiar color (azul → rojo)
Edita `<style>:root` en el HTML:
```css
--blue:#ff3b5c;  /* cambiar azul a rojo */
```

### Añadir fichas
Edita `<script id="catalog-data">`:
```json
{
  "cat":"libros",
  "title":"Mi Libro",
  "source":"Fuente",
  "url":"https://...",
  "langs":["es"],
  "lic":"CC",
  "desc":"Descripción",
  "emb":1
}
```

---

## 💡 RESPUESTAS RÁPIDAS

**¿Funciona sin internet?**  
Sí (catálogo + chat IA). No (metabuscador necesita APIs).

**¿Se guardan mis búsquedas?**  
No. Solo tema/modo en localStorage.

**¿Lento?**  
No. Modo LITE auto-se-activa en móviles viejos. 50+ FPS.

**¿Seguro?**  
Sí. 0 almacenamiento en servidor, HTTPS solo, respeta privacidad.

---

## 🎯 PRÓXIMOS PASOS

1. **Explora:** Busca temas que te importan
2. **Personaliza:** Añade tus propios bancos/fichas
3. **Comparte:** Copia URL, envía a amigos
4. **Expande:** Lee README completo para roadmap

---

```
NOIACORE 2060 · Aparato vivo · Cero almacenamiento · 150+ bancos
```

¡Bienvenido! 🚀
