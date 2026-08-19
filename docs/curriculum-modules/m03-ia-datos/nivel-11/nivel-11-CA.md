# Mòdul 3: IA Aplicada a les Dades — Nivell 11
## Idioma: CA · Dificultat: Tija
## Temps estimat: 3 hores

## 🎯 Objectiu del nivell
- Entendre que les dades brutes (errors, duplicats, buits) falsegen qualsevol anàlisi.
- Aprendre a detectar els cinc problemes típics: duplicats, mancants, errors de picar, formats barrejats i valors impossibles.
- Netejar un full de càlcul real pas a pas a Google Sheets.
- Comprovar la neteja amb les eines de "validació" del mateix full.

## 📖 Vocabulari essencial
| Terme | Explicació en paraules simples |
|---|---|
| Dades brutes | Dades amb errors, duplicats o buits que enganyen l'anàlisi. |
| Dada duplicada | La mateixa informació repetida dues vegades al full. |
| Valor mancant | Una casella buida on hi hauria d'haver una dada. |
| Valor impossible | Una dada que no pot ser certa, com una edat de 400 anys. |
| Neteja de dades | El procés de revisar i corregir les dades abans d'analitzar-les. |

## 📚 Lliçó principal
Al nivell anterior vam aprendre que la correlació més bonica pot ser mentida. Avui veurem la causa més avorrida i perillosa que això passi: les dades brutes. Els estadístics tenen un refrany: "brossa entra, brossa surt". Si les dades estan malament, totes les conclusions que en surtin estaran malament, per molt bonics que siguin els gràfics.

Què és una dada bruta? És qualsevol dada que no reflecteix la realitat. Imagineu que la vostra associació de veïns vol saber quants arbres hi ha al carrer per demanar a l'ajuntament que en planti més. Recull dades de 50 veïns: cadascú escriu el nombre d'arbres que veu des de la seva finestra. Què pot sortir malament? Tot. Algú escriu "1er" en comptes de "12"; un altre escriu el mateix carrer dues vegades; a un altre se li oblida contestar; algú escriu "molts" en comptes d'un número. Això és un full brut.

Els problemes més comuns s'agrupen en cinc tipus. Primer, els duplicats: la mateixa fila apareix dues vegades, i en sumar els arbres la comptem dues vegades. Segon, els mancants: caselles buides que trenquen els càlculs. Tercer, els errors de picar: "12" escrit com a "12o" o amb una coma decimal al lloc equivocat. Quart, els formats barrejats: unes dates en format català (12/06/2026) i altres en format anglès (06/12/2026), que signifiquen mesos diferents. Cinquè, els valors impossibles: una edat de 400 anys o una temperatura de 500 graus.

Per què ens importa això en un curs d'IA? Perquè la intel·ligència artificial s'alimenta de dades. Una IA s'entrena amb la història de milers de pacients per predir malalties; si aquesta història conté errors de picar, la IA aprèn patrons falsos i comet errors greus. Els científics de dades dediquen entre el 60% i el 80% del seu temps a netejar dades, no a construir la IA. Aquesta dada sorprèn tothom i és veritat.

La neteja no és màgia: és paciència. Es treballa per passos. Pas u, mirar el full: obrir els ulls i recórrer-lo. Pas dos, treure duplicats: a Google Sheets, "Dades" i "Depurar dades" i "Elimina duplicats". Pas tres, buscar buits: l'eina "Cerca i substitueix" (Ctrl+H) serveix per localitzar les caselles buides si escrivim un espai. Pas quatre, corregir els formats: una columna ha de tenir un únic format; si les dates estan barrejades, cal unificar-les. Pas cinc, eliminar valors impossibles: un filtre mostra d'una vegada el nombre més gran i el més petit de cada columna, i si el màxim és absurd, cal revisar aquesta fila.

Com es comprova que la neteja ha funcionat? Amb tres mesures de resum que ja coneixem: el total, la mitjana i el màxim. Abans de netejar, una suma amb duplicats dóna un resultat inflat. Després de netejar, el total canvia i s'acosta a la realitat. També podem fer servir la funció "COMPTA" per veure quants valors té cada columna: si una columna de 50 veïns només té 47 números, ja sabem que hi ha tres buits.

Hi ha un hàbit d'or que els professionals apliquen sempre: fer una còpia del full abans de netejar. Mai no es neteja sobre l'original. Si ens equivoquem o si volem veure com era la dada abans, la còpia ens salva. A Google Sheets això és fàcilíssim: botó dret sobre el nom del full, "Duplica", i llest.

Un altre hàbit important: anotar quins canvis s'han fet. Els professionals mantenen una columna o un document a part amb les correccions: "files 12 i 40 duplicades, eliminades; casella 33 buida, omplerta amb 0; data de la fila 20, corregida de format anglès a català". Això s'anomena "registre de neteja" i serveix perquè qualsevol pugui comprovar la nostra feina. L'honestedat també és neteja.

Al nivell següent farem servir aquestes dades netes per construir el nostre primer quadre de comandament, que en anglès s'anomena "dashboard". Recordeu això: el quadre bonic amb dades brutes és com una casa bonica amb fonaments de sorra. Primer es netegen les dades, després es dibuixen els gràfics. La neteja no és un pas avorrit: és el pas que fa que totes les altres coses funcionin.

## 💡 Exemples pràctics
### Exemple 1: El cens d'arbres
La vostra associació recull 50 respostes. En revisar, trobeu la fila de la senyora del 3r duplicada, la casella 33 buida i un veí que va escriure "1er" en comptes de "12". Apliqueu els cinc passos i expliqueu què canvia al total.

### Exemple 2: Les dates barrejades
Una taula de compres té dates en format català i anglès. La compra del 12 de juny apareix com a 12/06 i com a 06/12, que en anglès és el 6 de desembre. Si se sumen les vendes de juny, aquest error canvia el resultat.

### Exemple 3: El valor impossible
A la llista d'edats d'un club hi ha una fila amb "234". El màxim de la columna delata l'error. Amb un filtre es localitza la fila i es truca al soci per corregir la dada a "34".

## 🛠️ Activitat guiada
Pas 1. Creeu a Google Sheets un full anomenat "Arbres bruts" i copieu les dades següents: 12, 7, 12, 5, "1er", 9, (buit), 12, 3, 8.
Pas 2. Feu una còpia de seguretat: botó dret sobre el nom del full i "Duplica". Anomeneu la còpia "Arbres nets".
Pas 3. Al full net, sumeu amb =SUMA(A1:A10) i anoteu el resultat (està inflat pel duplicat).
Pas 4. Elimineu duplicats: "Dades", "Depurar dades", "Elimina duplicats". Comproveu quantes files queden.
Pas 5. Localitzeu els buits: "Edita", "Cerca i substitueix", busqueu un espai i marqueu "coincidir amb el contingut de la cel·la".
Pas 6. Corregiu el "1er": canvieu-lo per "12" consultant el veí que el va escriure.
Pas 7. Busqueu el valor impossible: feu servir "Dades" i "Filtre" i mireu el màxim. Corregiu el que calgui.
Pas 8. Torneu a sumar amb =SUMA(...) i compareu amb el resultat del pas 3. Què ha canviat i per què?
Pas 9. Afegiu una columna D anomenada "Registre" i anoteu cada correcció feta amb la seva data.
Pas 10. Deseu el full i escriviu una conclusió: "dades netes, totals fiables".

## ✍️ Exercicis d'autoavaluació
1. Què vol dir el refrany "brossa entra, brossa surt"?
2. Digueu tres dels cinc problemes típics de les dades brutes.
3. Per què els duplicats inflen les sumes?
4. Què cal fer abans de començar a netejar un full?
5. Quin percentatge del temps dediquen els científics de dades a netejar dades?

Respostes: 1. Que si les dades estan malament, les conclusions estaran malament per molt bonics que siguin els gràfics. 2. Duplicats, mancants, errors de picar, formats barrejats i valors impossibles. 3. Perquè la mateixa fila es compta dues vegades. 4. Fer una còpia del full (mai no es neteja sobre l'original). 5. Entre el 60% i el 80% del seu temps.

## ⚖️ Dimensió ètica
Les dades brutes no causen només errors tècnics: causen mal a persones. Un historial mèdic mal picat pot portar a un tractament equivocat; un cens amb buits deixa fora els veïns que no van contestar. Netejar dades és un acte de respecte: vol dir cuidar que les decisions que es prenen sobre les persones es basin en informació veraç. I ser honest en el registre de neteja permet que altres comprovin i confiïn en la nostra feina.

## 🔓 Eines obertes
| Eina | Què és i per a què serveix | On trobar-la |
|---|---|---|
| Google Sheets | Eines de depuració: elimina duplicats, cerca, filtra | https://sheets.google.com |
| OpenRefine | Programa gratuït especialitzat a netejar dades | https://openrefine.org |
| LibreOffice Calc | Les mateixes funcions de depuració, sense connexió | https://ca.libreoffice.org |
| Open Data Kit | Recollida de dades de camp amb menys errors | https://getodk.org |

## 🧠 Resum i pont
- Les dades brutes falsegen qualsevol anàlisi: brossa entra, brossa surt.
- Els cinc problemes típics: duplicats, mancants, errors de picar, formats barrejats i valors impossibles.
- Sempre es neteja sobre una còpia i s'anota cada correcció en un registre.
- El 60-80% del temps dels científics de dades és netejar dades.
Al nivell següent convertirem les dades ja netes en el nostre primer quadre de comandament o "dashboard".
