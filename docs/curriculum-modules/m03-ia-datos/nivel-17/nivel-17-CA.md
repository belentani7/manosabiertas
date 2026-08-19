# Mòdul 3: IA Aplicada a les Dades — Nivell 17
## Idioma: CA · Dificultat: Branca
## Temps estimat: 3 hores

## 🎯 Objectiu del nivell
- Entendre què és la classificació: la tècnica que prediu categories.
- Veure la diferència entre predir números (regressió) i predir etiquetes (classificació).
- Comprendre el paper de les dades etiquetades en l'entrenament.
- Aprendre a llegir la "exactitud" d'un classificador i desconfiar de les trampes.

## 📖 Vocabulari essencial
| Terme | Explicació en paraules simples |
|---|---|
| Classificació | La tècnica de la IA que decideix a quin grup pertany alguna cosa. |
| Etiqueta | La resposta correcta que acompanya cada exemple en l'entrenament. |
| Classe | Cadascun dels grups possibles: "gat", "spam", "pluja". |
| Exactitud | El percentatge d'encerts del classificador. |
| Frontera de decisió | La línia invisible que separa les classes al mapa de les dades. |

## 📚 Lliçó principal
Al nivell anterior vam aprendre a predir números amb la regressió. Avui anem a l'altra gran família de prediccions, potser la més visible a la vostra vida diària: la classificació. La classificació no prediu un número, sinó una categoria. El correu: spam o no? La foto: gos o gat? El dia: pluja o sol? El missatge: amenaça o notícia? La classificació és l'art de decidir en quina casella entra cada cosa.

Comparem les dues tècniques perquè no es confonguin mai. La regressió respon a preguntes de "quant?": quants gelats, quants euros, quants quilos? La classificació respon a preguntes de "quin?": spam o normal, gos o gat, segur o fraudulent? Una et dona una mesura; l'altra et dona una etiqueta. Si voleu saber quant costarà el bitllet, feu servir regressió. Si voleu saber si el missatge és perillós, feu servir classificació.

Com aprèn una màquina a classificar? Amb dades etiquetades. Tornem al nen del nivell 15: li ensenyem 100 fotos, cadascuna amb la seva etiqueta ("això és un gos", "això és un gat"). A l'argot de la IA, aquestes 100 fotos són "dades etiquetades", i les etiquetes són les respostes correctes. Sense etiquetes no hi ha classificació possible: la màquina no pot aprendre què és cada cosa si mai no li diem què és. Per això, cada exemple d'entrenament és una parella: les dades (la foto) i l'etiqueta (el que és).

Una idea bonica per entendre la classificació és la "frontera de decisió". Imagineu un mapa: en un eix, el pes de l'animal; en un altre, la llargada de les orelles. Els gossos cauen en una zona del mapa i els gats en una altra. El classificador dibuixa una línia invisible que separa les dues zones, i quan arriba un animal nou, mira de quin costat de la línia està. Si cau al costat dels gossos, diu "gos". Aquesta línia invisible és la frontera de decisió, l'equivalent a la línia de tendència de la regressió, però separant grups.

Com es mesura si un classificador funciona? Amb l'"exactitud": el percentatge de vegades que encerta. Si proveu el classificador amb 100 animals nous i encerta 92, la seva exactitud és del 92%. Sembla simple, però aquí és on els fabricants amaguen la trampa més gran. Imagineu-vos un detector de fraus en un banc on el 99% de les operacions són legítimes. Un sistema que sempre respongui "legítima", sense mirar res, tindria una exactitud del 99%. Semblaria perfecte i seria inútil! Per això els professionals miren més coses que l'exactitud: miren quants fraus reals captura i quants avisos falsos dispara.

Una altra trampa famosa: la classe majoritària aixafa la minoritària. Si entreneu un classificador per detectar un defecte rar en unes peces, i el defecte només apareix en 1 de cada 1000 peces, el sistema aprèn a dir "tot està bé" i encerta el 99,9%. Aparentment genial; a la realitat no detecta res. La lliçó: quan una categoria és molt rara, un classificador que ignora la categoria rara "sembla" excel·lent. Mireu sempre quants casos rars ha detectat, no només el percentatge total.

A la vida diària la classificació és a tot arreu i gairebé sempre sense que ho notem. El correu electrònic classifica el spam. El telèfon classifica la vostra veu en "ordres". El banc classifica cada operació en "normal" o "sospitosa". L'hospital classifica les radiografies en "neta" o "amb nòdul". La càmera classifica les vostres fotos en "paisatges" i "persones". Cadascuna d'aquestes decisions és una frontera de decisió traçada per una màquina entrenada amb milers d'exemples etiquetats.

Per practicar la classificació sense programar, hi ha eines gratuïtes i visuals. Una de molt famosa és "Machine Learning for Kids", on es creen "projectes", es pugen fotos o textos etiquetats i l'eina entrena un model amb botons. Una altra és "Teachable Machine", de Google, on es fan tres classes amb fotos de la càmera (per exemple, "cap", "paper", "res") i el model aprèn a distingir-les en viu. Al nivell 18 les farem servir a fons. Avui només les coneixerem.

Abans de acabar, una idea per encadenar amb el que ve: classificació i regressió es combinen en gairebé tots els sistemes reals. El navegador classifica la vostra ruta ("trajecte normal o embussat") i després regressa el temps ("hi arribareu en 23 minuts"). El banc classifica l'operació ("fraudulenta o no") i després prediu quant s'arrisca. Entendre les dues peces us dóna el mapa complet de com pensa la IA. Al proper nivell, mans a l'obra: entrenareu els vostres primers models de classificació amb les vostres pròpies fotos i sons.

## 💡 Exemples pràctics
### Exemple 1: El correu spam
Un correu electrònic arriba amb "GUANYEU UN PREMI, feu clic ja". El classificador de la vostra bústia el compara amb milions de correus etiquetats com a spam i decideix: spam. No llegeix el text: el classifica.

### Exemple 2: Les fotos de l'àvia
L'àvia vol una foto només dels néts. L'app classifica cada foto de la seva galeria en "persona" o "no persona", i de pas identifica cada nét. Tot això és classificació entrenada amb fotos etiquetades.

### Exemple 3: La fruita del mercat
Un pagès fotografia pomes i peres amb la càmera del mòbil. Un classificador entrenat amb milers de fruites etiquetades li diu a l'instant si és poma o pera, i així s'estalvia classificar-les a mà.

## 🛠️ Activitat guiada
Pas 1. Obriu el navegador i entreu a https://teachablemachine.withgoogle.com (és gratuït i no demana compte).
Pas 2. Premeu "Comença" i trieu "Projecte d'imatges".
Pas 3. Veureu tres classes: Classe 1, Classe 2 i Classe 3. Anoteu cada classe amb un objecte de casa vostra (per exemple, "tassa", "comandament", "res").
Pas 4. Activeu la càmera i captureu 20 fotos de la tassa mantenint el botó "Mantén premut per enregistrar" mentre la moveu.
Pas 5. Captureu 20 fotos del comandament i 20 del fons sense objecte (la classe "res").
Pas 6. Premeu "Entrena el model" i espereu que acabi (uns segons).
Pas 7. A la finestra de "Previsualització", mostreu la tassa a la càmera: la classifica bé?
Pas 8. Proveu el comandament i després la classe "res". Anoteu quantes vegades encerta de cada deu.
Pas 9. Ara proveu un objecte que NO heu entrenat (per exemple, la vostra mà): vegeu com la IA es confon. Això és normal: no va aprendre aquesta classe.
Pas 10. Escriviu en un paper: "el meu classificador encerta X de cada 10 vegades" i deseu el projecte. Heu entrenat el vostre primer model de classificació.

## ✍️ Exercicis d'autoavaluació
1. Quina diferència hi ha entre regressió i classificació?
2. Què són les dades etiquetades?
3. Què és la frontera de decisió?
4. Per què l'exactitud pot enganyar quan una classe és molt rara?
5. Digueu dues eines gratuïtes per entrenar classificadors sense programar.

Respostes: 1. La regressió prediu números ("quant?") i la classificació prediu categories ("quin?"). 2. Exemples que porten juntament amb les dades la seva resposta correcta (l'etiqueta). 3. La línia invisible que separa les classes al mapa de les dades. 4. Perquè un sistema que sempre diu la classe majoritària encerta gairebé sempre sense detectar res. 5. Machine Learning for Kids i Teachable Machine.

## ⚖️ Dimensió ètica
Els classificadors s'equivoquen, i els seus errors no pesen tots igual. Confondre un correu amb spam molesta; confondre una radiografia neta amb una amb nòdul espanta una persona i pot alterar-li la vida. Els errors de classificació que afecten persones sempre els han de revisar persones. I hi ha un perill ètic enorme: si les etiquetes amb què s'ha entrenat contenen prejudicis (per exemple, "aquestes fotos són de delinqüents"), la màquina els hereta i els repeteix a gran escala. Entreneu els vostres classificadors amb etiquetes justes, i no deixeu mai que decideixin sols sobre vides humanes.

## 🔓 Eines obertes
| Eina | Què és i per a què serveix | On trobar-la |
|---|---|---|
| Teachable Machine | Entrenar classificadors amb fotos i sons sense programar | https://teachablemachine.withgoogle.com |
| Machine Learning for Kids | Projectes de classificació visuals per aprendre | https://machinelearningforkids.co.uk |
| Google Sheets | Classificar dades amb filtres i taules | https://sheets.google.com |
| Quick, Draw! | Veure com una IA classifica els vostres dibuixos | https://quickdraw.withgoogle.com |

## 🧠 Resum i pont
- La regressió prediu números; la classificació prediu categories.
- La classificació s'entrena amb dades etiquetades.
- La frontera de decisió separa les classes, com la línia de tendència separa tendències.
- L'exactitud sola enganya quan hi ha classes rares: mireu els encerts reals.
Al nivell següent, mans a l'obra: farem servir Teachable Machine i Machine Learning for Kids per entrenar els nostres primers models amb fotos, sons i textos.
