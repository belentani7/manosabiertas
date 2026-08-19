# Mòdul 3: IA Aplicada a les Dades — Nivell 12
## Idioma: CA · Dificultat: Tija
## Temps estimat: 3 hores

## 🎯 Objectiu del nivell
- Entendre què és un quadre de comandament o "dashboard" i per a què serveix.
- Conèixer dues eines gratuïtes: Looker Studio (de Google) i Power BI (de Microsoft).
- Connectar dades netes a un quadre i triar el gràfic adequat per a cada pregunta.
- Muntar un primer quadre senzill amb tres gràfics i un títol.

## 📖 Vocabulari essencial
| Terme | Explicació en paraules simples |
|---|---|
| Quadre de comandament | Una pàgina amb diversos gràfics que respon preguntes d'una ullada. |
| Font de dades | El full o fitxer del qual el quadre treu els números. |
| Quadre de control | Sinònim de quadre de comandament, del món empresarial. |
| Panell | Cada gràfic o targeta dins del quadre. |
| Actualitzar | Refrescar les dades perquè el quadre mostri les últimes. |

## 📚 Lliçó principal
Als dos nivells anteriors vam aprendre a sospitar de les relacions falses i a netejar les dades perquè les conclusions siguin honestes. Ara toca la part bonica: ajuntar diversos gràfics en una sola pàgina que expliqui la història completa d'una ullada. Això és un quadre de comandament, que en anglès s'anomena "dashboard" i en el món de l'empresa "quadre de control".

Què fa un quadre? Imaginem que sou la presidenta d'una petita associació de comerciants del vostre barri. Teniu dades de 12 botigues: vendes de cada mes, despeses, dies oberts i clients nous. Si us ensenyen un full de 500 files, què en treu en clar? Molt poc. Si us ensenyen un quadre amb tres gràfics —vendes per mes, despeses per botiga i clients nous per trimestre—, en deu segons sabeu com va el barri. El quadre converteix dades en comprensió.

Les dues eines més usades i gratuïtes són el Looker Studio (de Google, funciona al navegador) i el Power BI (de Microsoft, s'instal·la a l'ordinador i té versió gratuïta). El Looker Studio és ideal per començar perquè es connecta directament amb Google Sheets, que ja coneixem. El Power BI és més potent i molt usat a les empreses. Aquesta setmana aprendrem amb el Looker Studio, i el concepte val per a les dues.

El quadre es construeix en tres passos. Primer, la font de dades: es connecta el full net de Google Sheets que ja tenim. Segon, el llenç: una pàgina blanca on es col·loquen els elements. Tercer, els panells: cada gràfic s'afegeix triant el seu tipus. L'important no és el clic, sinó decidir bé: quina pregunta vull respondre amb cada gràfic?

Cada tipus de gràfic respon a una pregunta diferent, i aquesta és la part de disseny que cal cuidar. El gràfic de barres compara categories: "quina botiga ven més?". El de línies mostra l'evolució en el temps: "pugen les vendes de març a setembre?". El de sectors (la "tarta") reparteix un total: "quin percentatge de despesa correspon a cada rúbrica?". La targeta de número gran respon "quant?" amb una sola xifra: 12.450 euros. Si fem servir el gràfic equivocat, la pregunta queda sense respondre.

Regla d'or dels quadres: menys és més. Un quadre de deu gràfics no es llegeix; un quadre de tres o quatre ben triats s'entén. La disciplina del dissenyador consisteix a preguntar-se, davant de cada gràfic que vol afegir: "aquesta imatge respon a una pregunta que algú ha fet?". Si no la respon, no entra al quadre. L'absència de soroll és disseny.

Una altra decisió important: l'ordre. El quadre es llegeix com un diari: de dalt a baix i d'esquerra a dreta. A dalt, el títol i el número més important, el resum general. Al centre, els dos o tres gràfics que expliquen la història principal. A baix, els detalls per a qui vulgui aprofundir. Un bon quadre explica una història amb un principi (el resum), un desenvolupament (els gràfics) i un final (la conclusió o el detall).

I un avís tècnic: les dades del quadre no s'actualitzen soles. Si la setmana que ve afegiu dades al full, el quadre de Looker Studio continua mostrant les de sempre fins que es prem el botó d'actualitzar. Aquest botó és com el reg d'una planta: si no es rega, la planta (i el quadre) s'asseca i deixa de servir. Acostumeu-vos a actualitzar.

Una capacitat dels quadres que val or és el filtre. Al Looker Studio es pot afegir un "control de data" o una llista desplegable de botigues: amb un clic, tot el quadre mostra només un trimestre o només una botiga. Els filtres permeten fer moltes preguntes amb un sol quadre, sense dibuixar res de nou. Això és el que els professionals anomenen "explorar les dades".

Al nivell següent entrarem a la part d'IA pròpiament dita: començarem amb l'anàlisi predictiva, que fa servir les dades passades per endevinar el futur. El quadre que aprengueu a muntar avui serà el lloc on aquesta predicció es mostra. El quadre no prediu, però ensenya; la IA prediu, però necessita que algú (vós) comprovi que les seves prediccions són honestes. Els dos es necessiten.

## 💡 Exemples pràctics
### Exemple 1: El barri de les 12 botigues
Amb el full de vendes mensuals de 12 botigues, un quadre amb tres panells respon: targeta (total de l'any), barres (botiga per botiga), línies (evolució mensual). En deu segons se sap com va el barri.

### Exemple 2: El gimnàs
Un gimnàs registra socis nous i baixes cada mes. Un quadre amb línies mostra les dues corbes: si les baixes superen les altes, el negoci s'encongeix. El quadre no opina, només ho mostra.

### Exemple 3: L'hort comunitari
Un hort anota quilos de tomàquets per parcel·la. El gràfic de sectors reparteix el total: "la parcel·la 3 produeix el 40% de tot". Aquesta dada convida a preguntar-se per què aquesta parcel·la funciona millor.

## 🛠️ Activitat guiada
Pas 1. Obriu el full net del nivell anterior (o creeu-ne un amb 12 mesos de vendes i despeses d'una botiga).
Pas 2. Entreu a https://lookerstudio.google.com i premeu "Crea un informe".
Pas 3. Connecteu la font: "Google Sheets", seleccioneu el full i "Afegeix".
Pas 4. Poseu un títol a dalt: "Quadre de la botiga — 2026".
Pas 5. Afegiu una targeta de número: menú "Afegeix un gràfic", "Targeta de puntuació", trieu la columna de vendes i la funció SUMA.
Pas 6. Afegiu un gràfic de barres amb les vendes per mes: la categoria és el mes, la mètrica la suma de vendes.
Pas 7. Afegiu un gràfic de línies amb les despeses per mes.
Pas 8. Afegiu un control de filtre: "Afegeix un control", "Llista desplegable", i trieu el camp "mes". Proveu de triar només un mes i vegeu com canvien els panells.
Pas 9. Ordeneu-lo: número a dalt, barres i línies al centre, control a baix.
Pas 10. Compartiu l'informe amb el botó "Comparteix" (només lectura) i deseu l'enllaç. Felicitats: ja teniu el vostre primer quadre.

## ✍️ Exercicis d'autoavaluació
1. Què és un quadre de comandament?
2. Digueu dues eines gratuïtes per fer quadres.
3. Quina pregunta respon cada tipus: barres, línies, sectors, targeta de número?
4. Quina és la regla d'or dels quadres?
5. Què cal fer amb les dades noves perquè el quadre les mostri?

Respostes: 1. Una pàgina amb diversos gràfics que respon preguntes d'una ullada. 2. Looker Studio (de Google) i Power BI (de Microsoft). 3. Barres: comparar categories. Línies: evolució en el temps. Sectors: repartir un total. Targeta: respondre "quant?" amb una xifra. 4. Menys és més: només hi entra el gràfic que respon a una pregunta real. 5. Prémer el botó d'actualitzar.

## ⚖️ Dimensió ètica
Un quadre pot ser honest o manipulador. És fàcil triar un gràfic que exagera: començar l'eix a 100.000 en comptes de 0 fa que una pujada petita sembli enorme. També es poden amagar dades incòmodes deixant-les fora. El quadre honest mostra l'escala completa, no enganya amb els eixos i no amaga el que no convé. Quan feu quadres, recordeu que algú prendrà decisions basant-s'hi: això mereix dibuixar-los amb veritat.

## 🔓 Eines obertes
| Eina | Què és i per a què serveix | On trobar-la |
|---|---|---|
| Looker Studio | Quadres gratuïts connectats a Google Sheets | https://lookerstudio.google.com |
| Power BI | Quadres potents amb versió gratuïta | https://powerbi.microsoft.com |
| Google Sheets | La vostra font de dades: el full net | https://sheets.google.com |
| Rawgraphs | Gràfics rars i curiosos sense programar | https://rawgraphs.io |

## 🧠 Resum i pont
- Un quadre ajunta diversos gràfics que responen preguntes d'una ullada.
- Looker Studio i Power BI són les eines gratuïtes més usades.
- Cada tipus de gràfic respon a una pregunta: barres, línies, sectors, targeta.
- Menys és més, i les dades s'han d'actualitzar.
Al nivell següent entrarem a la IA de debò: l'anàlisi predictiva, que fa servir el passat per anticipar el futur.
