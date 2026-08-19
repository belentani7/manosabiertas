# Mòdul 3: IA Aplicada a les Dades — Nivell 21
## Idioma: CA · Dificultat: Capçada
## Temps estimat: 3 hores

## 🎯 Objectiu del nivell
- Organitzar les dades del projecte final abans d'analitzar-les.
- Aprofundir la neteja de dades del nivell 11 amb dades de la nostra pròpia vida.
- Deixar el full a punt perquè una eina d'IA el pugui entendre.
- Anotar què es corregeix i per què, perquè el resultat sigui digne de confiança.

## 📖 Vocabulari essencial
| Terme | Explicació en paraules simples |
|---|---|
| Dades netes | Dades sense duplicats, buits ni errors que enganyen l'anàlisi. |
| Estructura | La forma de la taula: files per als casos, columnes per a les característiques. |
| Format | El tipus de cada dada (número, text, data); ha de ser el mateix a tota la columna. |
| Capçalera | La primera fila, que dóna nom a cada columna amb claredat. |
| Duplicat | La mateixa fila repetida dues vegades, que compta doble si no es treu. |

## 📚 Lliçó principal
Benvingut de nou a la banda Capçada. En el nivell 20 vam triar la pregunta del nostre projecte final i el vam planificar: abast, lliurable i cronograma. Avui baixem del mapa a la terra i ens arremanguem: arriba el moment de posar les dades en ordre. És com abans de cuinar un gran àpat per a la família: primer es neteja i s'organitza la cuina, i només després s'encén el foc.

Les dades del nostre projecte poden venir de moltes fonts. Dels rebuts i factures de casa, d'una enquesta als veïns, de les dades obertes que vam aprendre a baixar en el nivell 14. Vinguin d'on vinguin, gairebé mai arriben perfectes. Porten repeticions, buits i errors de tecleig. La nostra feina avui és aquesta: ordenar la casa abans de convidar la IA.

Recordem la regla d'or del nivell 11: les dades brutes enganyen. Si un full té files repetides, una compra pot comptar dues vegades. Si falten cel·les, els totals surten falsos. Si una despesa apareix com a número i una altra com a text, no es poden sumar. Tot error petit es converteix en un error gran quan la màquina el multiplica. Per això els professionals diuen: brossa entra, brossa surt.

Primer, l'estructura. Una bona taula és com un armari endreçat: cada cosa al seu lloc. Cada fila és un cas: una compra, una persona, un mes. Cada columna és una característica d'aquest cas: data, import, concepte. Si barregem coses diferents a la mateixa fila, el full es torna il·legible per a nosaltres i també per a la IA. Estructura abans d'analitzar.

Segon, la capçalera. La primera fila ha de dir què hi ha a cada columna: "data", "import", "concepte", "categoria". Sense capçalera, ni un humà ni una màquina saben què significa cada número. La capçalera és l'etiqueta del pot: sense ella, no sabem què conté. Dediqui temps a anomenar bé les columnes; és temps guanyat.

Tercer, el format. Els números han de ser números, les dates dates i el text text. Un "05/03" es pot llegir com el 5 de març o com el 3 de maig segons el país; la IA no ho endevina. A Google Sheets pot fixar el format de cada columna amb "Format" i "Nombre". Quan tota la columna parla el mateix idioma, les fórmules i les preguntes a la IA funcionen.

Quart, els cinc problemes clàssics que ja coneixem del nivell 11: duplicats, mancances, errors de tecleig, formats barrejats i valors impossibles. Un duplicat es treu amb "Dades" i "Elimina els duplicats". Una manca s'omple o es marca amb claredat. Un valor impossible, com una despesa de mil milions d'euros o una edat de 400 anys, es revisa i es corregeix. Cada problema té el seu remei.

La bona notícia és que les eines d'avui ens ajuden a netejar. El mateix full té eines de validació: pot avisar quan una dada no encaixa. I la IA també serveix aquí: podem pujar la nostra taula a un xat i demanar-li "veus errors o dades estranyes en aquesta taula?". La IA troba patrons que l'ull cansat passa per alt. Però recordi el criteri del nivell 19: la resposta de la màquina es revisa, no es copia.

I per què tanta cura amb les dades del propi projecte? Perquè el que s'analitza amb IA val el que valen les dades que rep. Una taula neta és com donar a la IA un encàrrec clar: entén la pregunta, entén la taula i respon millor. Una taula bruta és com demanar un plat sense rentar els ingredients: el resultat, per bonic que sembli, no es pot menjar.

Aquest ordre també serveix fora de la pantalla. Organitzar els papers del NIE, del SEPE o del banc en carpetes clares, amb noms i dates, és la mateixa disciplina que netejar un full. L'immigrant que té els papers ordenats resol tràmits en minuts el que a altres els costa hores. L'ordre en les dades i en els papers és un superpoder pràctic i molt valuós.

En el nivell 22 arribarà el moment dolç: preguntar a la IA sobre les nostres dades sense programar ni una línia. Però aquesta conversa només donarà bons fruits si avui deixem la taula parada. Dediqui aquest nivell a deixar el seu full net, clar i honest. La Capçada es construeix sobre fonaments que no es veuen, i avui estem cimentant.

## 💡 Exemples pràctics
### Exemple 1: El pressupost de la Rosa
La Rosa va anotar un mes de compres en un full. Troba dues files repetides (el mateix rebut apuntat dues vegades), un buit on no va escriure l'import del pa i una cel·la amb "25.5,60" impossible de sumar. Corregeix els tres problemes i el seu total mensual canvia: ara sí que és de veritat.

### Exemple 2: La llista de socis del Joan
En Joan porta la llista de socis de la seva associació. Un soci apareix dues vegades amb el telèfon escrit de manera diferent ("612 34 56" i "6123456"), i un altre sense nom. Unifica els formats, treu el duplicat i marca el buit. La llista queda a punt per a l'assemblea.

### Exemple 3: L'enquesta del barri de la Carme
La Carme va baixar un CSV de dades obertes (nivell 14) sobre habitatge del barri. En revisar-lo troba edats de 180 anys i barris escrits de tres maneres. Corregeix l'impossible i unifica els noms. El seu gràfic final ja no menteix.

## 🛠️ Activitat guiada
Pas 1. Obri el full del seu projecte final del nivell 20, o creï'n un de nou anomenat "Les meves dades".
Pas 2. Organitzi l'estructura: una columna per característica i una fila per cas.
Pas 3. Comprovi la capçalera: la primera fila dóna nom a cada columna amb claredat?
Pas 4. Fixi el format de cada columna (número, data, text) a Google Sheets.
Pas 5. Utilitzi "Elimina els duplicats" i anoti quants n'hi havia.
Pas 6. Busqui buits i valors impossibles; corregeixi-los o marqui-los amb claredat.
Pas 7. Pugi la taula a un xat d'IA i pregunti: "veus errors en aquesta taula?". Revisi les respostes.
Pas 8. Desa la versió neta com a "Les meves dades netes" i escrigui quins problemes va trobar i com els va arreglar.

## ✍️ Exercicis d'autoavaluació
1. Què és una bona capçalera? a) Una fila de colors. b) La primera fila que dóna nom a cada columna amb claredat. c) Un títol en majúscules.
2. Per què importa el format? a) Perquè queda bonic. b) Perquè números, dates i textos han de ser coherents per analitzar bé. c) No importa gens.
3. Què és un duplicat i per què s'ha de treure? a) Una fila repetida que compta doble i enganya. b) Una dada que falta. c) Un valor impossible.
4. Un "valor impossible" és... a) Una dada molt cara. b) Una dada que no pot ser certa, com una edat de 400 anys. c) Un número molt gran.
5. Què es fa primer en un projecte de dades? a) Visualitzar. b) Netejar i ordenar les dades abans d'analitzar. c) Preguntar a la IA.

Respostes: 1-b, 2-b, 3-a, 4-b, 5-b.

## ⚖️ Dimensió ètica
- Netejar no és maquillar: corregim errors reals, no canviem dades perquè diguin el que volem.
- Honestedat amb els buits: si una dada falta, es diu i es marca; no s'inventa per omplir.
- Cura amb les dades alienes: si la taula té dades d'altres persones, no es comparteix sense permís.
- Documentar la neteja: anotar què es va canviar i per què permet que altres confiïn en el resultat.
- La taula neta és un regal per a qui la faci servir després: la transparència del nivell 19 també es practica aquí.

## 🔓 Eines obertes
| Eina | Què és i per a què serveix | On trobar-la |
|---|---|---|
| Google Sheets | Treure duplicats, ordenar, validar i netejar la taula | https://sheets.google.com |
| LibreOffice Calc | Full de càlcul lliure, gratuït i sense compte | https://www.libreoffice.org |
| OpenRefine | Neteja avançada de dades, gratuïta i oberta | https://openrefine.org |
| Gemini | Demanar-li que revisi la taula i detecti errors | https://gemini.google.com |

## 🧠 Resum i pont
- La capçalera clara, l'estructura ordenada i el format únic són la base d'una taula neta.
- Els cinc problemes clàssics: duplicats, mancances, errors de tecleig, formats barrejats i valors impossibles.
- La IA també ajuda a netejar, però les seves respostes es revisen (criteri del nivell 19).
- Les dades netes són la condició perquè la IA entengui el nostre projecte.
En el nivell 22 aprendrem a fer preguntes a les nostres dades amb IA, sense programar ni una línia.
