# Mòdul 3: IA Aplicada a les Dades — Nivell 06
## Idioma: CA · Dificultat: Arrel
## Temps estimat: 3 hores

## 🎯 Objectiu del nivell
- Entendre què és una taula dinàmica i quin problema resol.
- Crear una taula dinàmica a Google Sheets a partir de la taula de despeses.
- Agrupar dades per categories i veure totals per grup sense escriure fórmules.
- Canviar files i columnes per respondre preguntes diferents amb un clic.
- Saber llegir una taula dinàmica com qui llegeix la carta d'un restaurant.

## 📖 Vocabulari essencial
| Terme | Explicació en paraules simples |
|---|---|
| Taula dinàmica | Un resum automàtic d'una taula: agrupa dades i calcula totals per categoria. |
| Fila (del resum) | Per on es reparteix el resum, per exemple una fila per categoria. |
| Columna (del resum) | Una agrupació addicional, per creuar categories. |
| Valor | El número que es calcula al resum: total, mitjana, compte. |
| Segmentador | Un filtre amb botons que mostra només una part de les dades. |

## 📚 Lliçó principal
Imagina que tens una capsa enorme de fotos de la família. Treure-les una a una i comptar-les és una tortura. Però si les classifiques per any i per persona, de cop saps quantes fotos hi ha de cadascú i de cada any. La taula dinàmica fa exactament això amb les vostres dades: agafa una taula llarga i la resumeix per categories, calculant totals amb un clic. És com tenir un assistent que us ordena la capsa de fotos.

Al nivell anterior vam veure fórmules per sumar una columna. Però i si volem saber quant gastem en cada categoria: fruita, pa, neteja? Amb fórmules caldria escriure una SUMA per a cada categoria, i equivocar-se és fàcil. La taula dinàmica ho fa tot sola: agafa la columna "categoria", l'agrupa i suma els preus de cada grup. Una taula completa resumida en segons, sense una sola fórmula.

Construirem una amb el nostre full "Les meves despeses de la setmana". El procés és sempre el mateix i s'aprèn una vegada per sempre. Primer, seleccionem tota la taula (amb la capçalera). Després, al menú "Insereix", triem "Taula dinàmica". El full pregunta on posar-la: triem un full nou. I apareix una pantalla amb caselles que podem marcar o arrossegar: "files", "columnes", "valors" i "filtres".

La idea és senzilla: vostè decideix on posa cada part de la taula. Si arrossega "categoria" a "files" i "preu" a "valors", el full agrupa els productes per categoria i suma els preus de cadascuna. Resultat: una petita taula que diu "fruita: 12 euros, pa: 5 euros, neteja: 8 euros". Això, que a mà portaria diversos minuts i moltes sumes, la taula dinàmica ho fa en un instant.

I per a què serveixen les "columnes" i els "filtres"? Les columnes creuen una altra categoria: si posem "categoria" a files i "mes" a columnes, veiem una graella amb categories a les files, mesos a les columnes, i els totals a cada cruïlla. És com la graella d'un supermercat que comparés vendes per categoria i per mes. Els filtres (o segmentadors) serveixen per mostrar només una part: per exemple, només les compres de farmàcia.

Un concepte nou: el "valor" no ha de ser una suma. A la casella dels "valors" podem triar si volem el total, la mitjana, el màxim o el compte (quantes files hi ha). És com preguntar al resum quin número volem: quant vaig gastar (suma)? Quina és la compra més cara (màxim)? Quantes vegades vaig comprar pa (compte)? La mateixa taula dinàmica respon preguntes diferents segons el valor triat.

La taula dinàmica és un petit salt de poder. Amb els fulls de càlcul bàsics, miràveu les dades una a una. Amb la taula dinàmica, mireu les dades des de dalt, com un mapa: ja no veieu cada compra, veieu els patrons. Veure les dades "des de dalt" és exactament el que farà la IA més endavant, però amb tècniques molt més avançades. La taula dinàmica és la vostra primera eina de "vista d'ocell".

Llegirem una taula dinàmica com es llegeix la carta d'un restaurant. La carta té seccions (entrants, plats, postres) i preus. La nostra taula dinàmica té categories (a les files) i valors (sumes). Mireu la categoria, mireu el número i compareu-lo amb les altres. Quina és la categoria més cara? Quina la més barata? Amb una taula dinàmica ben feta, aquestes preguntes es responen en dos segons.

Un error comú és oblidar que la taula dinàmica s'actualitza. Si afegiu files noves a la taula original, el resum no les inclou fins que es refresca. A Google Sheets, cal tornar a la taula dinàmica i actualitzar-la (de vegades amb el botó dret o amb el menú). Recordeu: la taula dinàmica és una foto del moment; si les dades canvien, cal renovar la foto.

Una altra cosa important: la taula dinàmica necessita dades netes. Si a la columna "categoria" unes cel·les diuen "fruita" i altres "Fruita" o "fruites", la taula les tractarà com a categories diferents i el resum sortirà fragmentat. Per això, abans de crear una taula dinàmica, reviseu que les categories s'escriuen sempre igual. És com assegurar-se que totes les capses de fotos porten la mateixa etiquetatge.

Amb la taula dinàmica acaba la primera meitat de la banda Arrel. Ja sabem: escriure dades, ordenar-les, classificar-les, dibuixar-les i resumir-les. Al nivell següent aprofundirem en la visualització, amb barres, línies i sectors més polits, i aprendrem a llegir-los amb criteri. La taula dinàmica i els gràfics són els dos grans resums que ens preparen per a l'estadística.

## 💡 Exemples pràctics
### Exemple 1: Despesa per categoria
A la vostra taula de despeses, creeu una taula dinàmica amb "categoria" a files i "preu" (suma) a valors. Sabreu quant gasteu en fruita, pa i neteja, sense una sola fórmula.

### Exemple 2: Compres per mes
Si la vostra taula té una columna "mes", poseu "categoria" a files i "mes" a columnes. Veuràs la graella de despeses per categoria i per mes, ideal per detectar mesos cars.

### Exemple 3: Quantes vegades compro cada cosa
Canvieu el valor de "preu" a "compte" (count). La taula dirà quantes vegades vau comprar pa o fruita aquesta setmana. Això revela hàbits de compra.

## 🛠️ Activitat guiada
Pas 1. Obriu el full "Les meves despeses de la setmana" a Google Sheets.
Pas 2. Assegureu-vos que la columna "categoria" existeix i està omplerta a totes les files (fruita, pa, neteja, farmàcia).
Pas 3. Seleccioneu tota la taula amb el ratolí, des de la capçalera fins a l'última fila.
Pas 4. Al menú "Insereix", trieu "Taula dinàmica".
Pas 5. A la finestra que apareix, marqueu "Full nou" i premeu "Crea".
Pas 6. A la dreta veureu l'editor de la taula dinàmica, amb zones "Files", "Columnes", "Valors" i "Filtres".
Pas 7. A "Files", premeu "Afegeix" i trieu "categoria".
Pas 8. A "Valors", premeu "Afegeix" i trieu "preu". Per defecte apareixerà "SUMA de preu".
Pas 9. Mireu el full: veureu una taula resumida per categories amb els seus totals. Compareu: quina categoria gasta més?
Pas 10. A "Valors", canvieu "SUMA" per "MITJANA" al menú desplegable i observeu com canvia el resum. Proveu també "MÀX" i "COMPTA". La mateixa taula dinàmica, respostes diferents.

## ✍️ Exercicis d'autoavaluació
1. Quin problema resol una taula dinàmica?
2. Què cal posar a "Files" i a "Valors" per sumar la despesa per categoria?
3. Per a què serveixen les "Columnes" en una taula dinàmica?
4. Què passa si afegeixo dades noves a la taula original però no actualitzo la taula dinàmica?
5. Per què cal escriure les categories sempre igual (sense "fruita" i "Fruita" alhora)?

Respostes: 1. Resumeix una taula llarga per categories i calcula totals sense escriure fórmules. 2. A "Files", "categoria"; a "Valors", "preu" amb l'operació SUMA. 3. Creuen una altra categoria, creant una graella (per exemple, categoria per mes). 4. Que el resum no inclou les dades noves fins que s'actualitza/refresca. 5. Perquè la taula tractaria "fruita" i "Fruita" com a categories diferents i el resum sortiria fragmentat.

## ⚖️ Dimensió ètica
Resumir dades per categories és potent, però també pot simplificar en excés. Una categoria "família" pot amagar diferències enormes entre persones. Quan algú us presenti un resum per grups (per exemple, "els més grans de 40 compren X"), pregunteu-vos qui és dins d'aquest grup i què es perd en agrupar-los. Els resums són útils, però no han d'esborrar la diversitat de les persones reals.

## 🔓 Eines obertes
| Eina | Què és i per a què serveix | On trobar-la |
|---|---|---|
| Google Sheets | Taules dinàmiques gratuïtes al navegador | https://sheets.google.com |
| LibreOffice Calc | Taules dinàmiques sense connexió | https://ca.libreoffice.org |
| Tutorial oficial de taules dinàmiques de Google | Guia pas a pas de Google | https://support.google.com/docs/answer/1272900 |

## 🧠 Resum i pont
- La taula dinàmica resumeix una taula per categories amb un clic.
- "Files" reparteix el resum, "Valors" diu quin número es calcula.
- "Columnes" creuen categories i els filtres mostren només una part.
- La taula dinàmica s'ha d'actualitzar i necessita categories ben escrites.
Al nivell següent polirem la visualització: barres, línies i sectors amb detall, i aprendrem a llegir-los amb criteri perquè els gràfics expliquin històries honestes.
