# Mòdul 3: IA Aplicada a les Dades — Nivell 07
## Idioma: CA · Dificultat: Arrel
## Temps estimat: 3 hores

## 🎯 Objectiu del nivell
- Dominar el gràfic de barres, el més utilitzat de tots.
- Aprendre a llegir barres comparant alçades amb precisió.
- Crear gràfics de barres verticals i horitzontals segons convingui.
- Descobrir els errors visuals que fan que un gràfic menteixi.
- Decidir quan el gràfic de barres és la millor opció.

## 📖 Vocabulari essencial
| Terme | Explicació en paraules simples |
|---|---|
| Gràfic de columnes | Barres verticals, dretes. Es comparen d'esquerra a dreta. |
| Gràfic de barres | Barres horitzontals, ajagudes. Es comparen de dalt a baix. |
| Escala | Els valors que marquen l'eix, com els traços d'un regle. |
| Línia base | El punt de partida de l'eix, normalment el zero. |
| Etiqueta | El text que identifica cada barra o cada eix. |

## 📚 Lliçó principal
De tots els gràfics, el de barres és el rei. Apareix als telenotícies, als informes del banc, a les notícies del mòbil i als cartells de l'ajuntament. I hi ha una raó: l'ull humà compara alçades d'una manera rapidíssima i precisa. Quan dues barres són l'una al costat de l'altra, el nostre cervell diu a l'instant quina és més alta. El gràfic de barres aprofita aquesta habilitat natural.

Hi ha dues presentacions del mateix gràfic. El de columnes té les barres dretes, verticals; és ideal quan hi ha poques categories i noms curts. El de barres té les barres horitzontals, ajagudes; és millor quan hi ha moltes categories o els noms són llargs. Penseu en la carta d'un restaurant: els plats són noms llargs, per això les llistes van de dalt a baix. Amb noms llargs, barres horitzontals.

Quina pregunta respon el gràfic de barres? "Quant hi ha de cada cosa?" i "què és més i què és menys?". La despesa per categoria, les vendes per botiga, els habitants per ciutat, les notes per assignatura. Sempre que hi hagi categories per comparar, les barres funcionen. No serveix, en canvi, per mostrar canvis al llarg del temps amb molts punts (això és la línia, nivell 8) ni parts d'un tot (això és el sector, nivell 8 també).

Llegir un gràfic de barres correctament és un procés de tres mirades. Primera mirada: els títols dels eixos. Què mesura l'eix horitzontal i què el vertical? Segona mirada: l'escala de l'eix dels valors. Comença en zero o en un altre número? Tercera mirada: les alçades relatives. Quina és la barra més alta i quina la més baixa? Amb aquestes tres mirades, ja heu entès el gràfic sense que ningú us ho expliqui.

Aquí arriba el moment més important d'aquest nivell: el truc de la línia base. Un gràfic honest comença la seva escala en zero. Si l'eix comença en zero, una barra amb el doble d'alçada significa un valor el doble de gran. Però si algú "retalla" l'eix i el fa començar en 40, una petita diferència de 45 a 50 semblarà una muntanya. És el truc favorit dels gràfics enganyosos. Mireu sempre d'on parteix l'eix.

Un exemple quotidià: el banc us envia un fullet amb el gràfic dels vostres estalvis. Les barres pugen i pugen, sembla que els vostres diners creixen enormement. Però si mireu l'escala, l'eix comença en 4.500 euros, no en zero. La pujada real és petita; el gràfic l'ha fet semblar enorme. Ara sabeu mirar l'escala abans d'emocionar-vos. Aquesta mirada crítica val diners.

Quan creeu les vostres pròpies barres, seguiu tres regles d'honestedat. Primer, deixeu que l'eix comenci en zero (Google Sheets ho fa per defecte; no ho canvieu sense motiu). Segon, poseu etiquetes clares: cada barra amb el seu nom i l'eix amb la seva unitat (euros, quilos, persones). Tercer, no feu servir efectes decoratius que distreguin: tres dimensions, ombres o colors cridaners no afegeixen informació, la treuen.

A Google Sheets, crear un gràfic de columnes és qüestió de tres clics, com vam veure al nivell 4. Seleccioneu les dades amb capçalera, premeu "Insereix" i "Gràfic", i al panell trieu "Gràfic de columnes". Si voleu barres horitzontals, trieu "Gràfic de barres" al mateix panell. El canvi entre vertical i horitzontal és un clic: proveu els dos i quedeu-vos amb el que es llegeixi millor.

Com triar entre columnes i barres? Si les categories són poques (menys de vuit) i els noms curts, columnes. Si són moltes o els noms llargs, barres horitzontals. Penseu en les prestatgeries: els llibres amb lloms amples es llegeixen millor ajaguts. El mateix passa amb les etiquetes del vostre gràfic: si no hi caben dretes, poseu-les horitzontals.

Un altre detall: no abuseu de les barres. Si teniu cinquanta categories, cinquanta barres són una pinta, no un gràfic. Millor agrupar les petites en "d'altres" o triar un altre gràfic. Un gràfic ha de cabre en una mirada; si obliga a fer esforç, no està complint la seva feina. La senzillesa és l'elegància de les dades.

En aquest mòdul, les barres són la nostra eina de comparació. Amb la taula dinàmica del nivell 6 resumim i amb les barres d'aquest nivell dibuixem el resum. Al nivell següent completarem el trio de gràfics bàsics: la línia per a les evolucions en el temps i el sector per a les parts d'un tot. Amb barra, línia i sector tindrem el llenguatge visual complet per a l'estadística del nivell 9.

## 💡 Exemples pràctics
### Exemple 1: Despeses per categoria en barres
Amb la taula dinàmica del nivell 6 (despesa per categoria), creeu un gràfic de columnes. Veuràs d'una ullada quina categoria domina el vostre cistell de la compra.

### Exemple 2: Les temperatures de la setmana
Anoteu les temperatures màximes de la setmana (dilluns a diumenge) i dibuixeu columnes. La comparació per dies salta a la vista.

### Exemple 3: Detectar un gràfic trampós
Busqueu a internet un gràfic de barres d'una notícia i mireu amb lupa d'on parteix l'eix dels valors. Si no comença en zero, la notícia està exagerant alguna cosa. Anoteu la vostra troballa.

## 🛠️ Activitat guiada
Pas 1. Obriu el full "Les meves despeses de la setmana" a Google Sheets.
Pas 2. Creeu una taula dinàmica amb "categoria" a files i "preu" a valors (repasseu el nivell 6 si cal).
Pas 3. Al costat de la taula dinàmica, deixeu un espai i escriviu la capçalera "categoria" i "total" (o feu servir la mateixa taula dinàmica com a origen).
Pas 4. Seleccioneu les cel·les de la taula dinàmica (categories i totals, amb capçalera).
Pas 5. Premeu "Insereix" i trieu "Gràfic".
Pas 6. Al panell de la dreta, a "Tipus de gràfic", trieu "Gràfic de columnes".
Pas 7. Mireu l'escala de l'eix vertical: ha de començar en zero. Si no és així, busqueu-ho a "Personalitza" i corregiu-ho.
Pas 8. A "Personalitza", trieu un color únic per a les barres i activeu les etiquetes de dades perquè es vegi el valor exacte de cada barra.
Pas 9. Canvieu ara el tipus a "Gràfic de barres" i observeu la versió horitzontal. Quina es llegeix millor amb els vostres noms?
Pas 10. Poseu un títol clar al gràfic, per exemple "Despesa setmanal per categoria". Deseu i compartiu amb un familiar: demaneu-li que us digui què veu. Si ell ho entén, el vostre gràfic funciona.

## ✍️ Exercicis d'autoavaluació
1. Quina pregunta respon millor un gràfic de barres?
2. Quan convé fer servir barres horitzontals en lloc de columnes?
3. Per què és important que l'escala comenci en zero?
4. Quines són les tres mirades per llegir un gràfic de barres?
5. Què hauríeu de fer si teniu cinquanta categories?

Respostes: 1. "Quant hi ha de cada cosa?" i comparar què és més gran i què és més petit. 2. Amb moltes categories o noms llargs. 3. Perquè si l'eix es "retalla", les diferències semblen més grans del que són i el gràfic menteix. 4. Títols dels eixos, escala de l'eix dels valors i alçades relatives (quina és la més alta i la més baixa). 5. Agrupar les petites en "d'altres" o triar un altre tipus de gràfic.

## ⚖️ Dimensió ètica
El gràfic de barres és una arma de doble fil. Ben fet, aclareix; mal fet, enganya. Els anuncis, els partits polítics i fins i tot els informes oficials han fet servir barres amb eixos retallats per exagerar resultats. En crear barres, respecteu la línia base en zero. En llegir barres, mireu sempre l'escala abans de creure. L'honestedat visual és part de l'honestedat ciutadana: qui sap llegir barres no es deixa manipular.

## 🔓 Eines obertes
| Eina | Què és i per a què serveix | On trobar-la |
|---|---|---|
| Google Sheets | Gràfics de columnes i barres a partir de qualsevol taula | https://sheets.google.com |
| LibreOffice Calc | Els mateixos gràfics, sense connexió | https://ca.libreoffice.org |
| Datawrapper | Barres boniques i honestes en minuts, gratis | https://www.datawrapper.de |
| RAWGraphs | Visualització de dades lliure, per curiosar | https://www.rawgraphs.io |

## 🧠 Resum i pont
- El gràfic de barres compara quantitats; l'ull compara alçades en un instant.
- Columnes per a poques categories i noms curts; barres horitzontals per a moltes o llargs.
- La línia base ha d'estar en zero; si no, sospiteu.
- Tres mirades per llegir barres: eixos, escala i alçades relatives.
Al nivell següent completarem el trio de gràfics: la línia per a les evolucions en el temps i el sector per a les parts d'un tot, amb la seva lectura crítica inclosa.
