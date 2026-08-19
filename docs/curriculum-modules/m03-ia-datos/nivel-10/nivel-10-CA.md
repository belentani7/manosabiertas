# Mòdul 3: IA Aplicada a les Dades — Nivell 10
## Idioma: CA · Dificultat: Tija
## Temps estimat: 3 hores

## 🎯 Objectiu del nivell
- Entendre la diferència entre correlació i causalitat, la idea més important de l'anàlisi de dades.
- Reconèixer quan dues coses "van juntes" sense que una causi l'altra.
- Aprendre a buscar explicacions alternatives abans de creure una relació.
- Aplicar aquestes idees a notícies, anuncis i rumors quotidians.
- Fer servir Google Sheets per explorar si dues columnes de dades es mouen juntes.

## 📖 Vocabulari essencial
| Terme | Explicació en paraules simples |
|---|---|
| Correlació | Dues coses que canvien alhora, en el mateix sentit o en sentit contrari. |
| Causalitat | Una cosa produeix l'altra: A causa B. |
| Confusor | Una tercera cosa que explica les dues i crea la il·lusió de relació. |
| Causalitat inversa | B causa A, però sembla que A causa B. |
| Dispersió | Un gràfic de punts que mostra si dues columnes es mouen juntes. |

## 📚 Lliçó principal
Benvingut a la banda Tija. Fins ara hem après a manejar dades: ordenar-les, dibuixar-les i resumir-les. Ara comencem a pensar com analistes, i la primera lliçó d'aquesta manera de pensar és la més famosa de tota l'estadística: que les coses vagin juntes no vol dir que una causi l'altra. Els estadístics ho diuen amb una frase llatina: "correlació no implica causalitat". Avui descifrarem aquesta frase.

Posem un exemple clàssic que apareix a tots els manuals: el gelat i els ofegaments. Quan pugen les vendes de gelat, pugen també els ofegaments a la platja. Les dues dades "van juntes": quan el gelat puja, l'ofegament puja. Vol dir això que el gelat causa ofegaments? És clar que no. L'explicació real és una tercera cosa: l'estiu. A l'estiu fa calor, la gent compra més gelat i també es banya més al mar. L'estiu és el "confusor".

Aquest exemple sembla una acudit, però és la clau de moltsíssims enganys. Cada dia, titulars i anuncis fan servir correlacions per vendre idees falses: "els pobles que mengen més iogurt tenen menys refredats", "la gent que dorm vuit hores guanya més diners". En tots aquests casos, una tercera causa amaga la veritat: els que mengen iogurt solen cuidar-se més; els que dormen vuit hores solen tenir millors feines. Correlació, sí; causalitat, no demostrada.

La correlació no és dolenta: és un avís. Quan dues coses van juntes, val la pena investigar. La correlació diu "mira aquí, hi ha alguna cosa interessant". La causalitat diu "això produeix allò", i per afirmar-la cal molt més que dues columnes de números: cal experimentar, comprovar, descartar explicacions alternatives. La ciència seriosa no confon un avís amb una prova.

A la nostra vida quotidiana també ensopeguem amb aquesta trampa. Pensi: "em fa mal el cap els dies que plou". La pluja causa el dolor? Potser els dies de pluja dorms pitjor, o surts menys a passejar, o menges diferent. Hi ha desenes d'explicacions alternatives. Abans de concloure que A causa B, pregunta't sempre: què més canvia alhora que A?

Una altra trampa freqüent és la causalitat inversa. Un titular diu "la gent que es jubila abans viu més". Jubilar-se causa viure més? Pot ser al revés: la gent que gaudeix de bona salut es pot jubilar abans i viu més per la salut, no per la jubilació. O pot haver-hi un confusor: la gent amb diners es jubila abans i té millor sanitat. La direcció de la fletxa no està clara.

Com podem explorar una correlació a Google Sheets? Amb un gràfic de dispersió. Es posen dues columnes: per exemple, "gelats venuts" i "ofegaments". Es seleccionen i es tria el tipus "Gràfic de dispersió": cada punt és un mes, amb la seva venda de gelat i el seu ofegament. Si els punts formen un núvol que puja d'esquerra a dreta, les dues coses van juntes (correlació positiva). Si el núvol baixa, van en sentit contrari (correlació negativa). Si és un núvol sense forma, no hi ha relació.

El gràfic de dispersió és l'eina del caçador de correlacions. Però compte: el gràfic només mostra que van juntes, no per què. Veure el núvol de punts és el primer pas; buscar el confusor és el segon, i aquest segon pas és el que distingeix l'analista del que s'empassa qualsevol titular. La dispersió aixeca la mà per dir "aquí passa alguna cosa"; la investigació decideix què és.

Practiquem amb un exemple saludable: l'edat i el risc de malaltia. Hi ha una correlació clara: com més edat, més risc de moltes malalties. Però l'edat causa les malalties? No exactament: l'edat és un "marcador" que agrupa molts altres factors que passen amb el temps. La medicina moderna sap separar el que correlaciona del que causa, i per això no tracta les persones per l'edat sinó pels seus factors reals.

Una regla pràctica per a la vida diària: davant de qualsevol relació que us presentin, feu tres preguntes. Primera, van realment juntes o és casualitat? Segona, quina altra cosa podria explicar-les totes dues? Tercera, qui surt guanyant si jo em crec aquesta relació? Aquestes tres preguntes converteixen qualsevol persona en un lector crític de titulars, anuncis i rumors.

Al nivell següent aplicarem aquestes idees al món real: netejar dades perquè les correlacions no surtin falsejades per errors. Perquè hi ha una altra trampa: si les dades són brutes, les correlacions que surten són mentida. Una dada mal copiada pot crear un núvol de punts que no existeix. La correlació honesta comença per dades netes.

## 💡 Exemples pràctics
### Exemple 1: Gelat i ofegaments
Anoteu en dues columnes les vendes de gelat i els ofegaments de 6 mesos (inventeu dades: a l'estiu pugen els dos). Dibuixeu la dispersió: els punts pugen. Ara expliqueu amb les vostres paraules per què no és causalitat.

### Exemple 2: La migdiada i la productivitat
Us arriba un titular: "qui dorm migdiada guanya més diners". Abans de creure'l, busqueu explicacions alternatives: potser la gent amb més diners pot dormir la migdiada a la feina? Aquesta és una possible causalitat inversa.

### Exemple 3: Els paraigües i la grip
A la vostra ciutat, els dies que es venen més paraigües hi ha més casos de grip. Apliqueu les tres preguntes: van juntes? Què les uneix (el mal temps)? Qui guanya amb que jo em cregui que el paraigua causa la grip?

## 🛠️ Activitat guiada
Pas 1. Obriu Google Sheets i creeu un full nou anomenat "Gelats i ofegaments".
Pas 2. Escriviu a A1 "mes" i a B1 "gelats" i a C1 "ofegaments".
Pas 3. Ompliu 6 files amb dades que pugin alhora (exemple: gener 10 i 2, abril 30 i 5, juliol 80 i 12).
Pas 4. Seleccioneu les columnes B i C amb la capçalera.
Pas 5. Premeu "Insereix" i "Gràfic". A "Tipus de gràfic", trieu "Gràfic de dispersió".
Pas 6. Observeu el núvol de punts: puja d'esquerra a dreta. Hi ha correlació positiva.
Pas 7. En una cel·la al costat, escriviu la pregunta clau: "quina tercera cosa explica les dues?".
Pas 8. Escriviu la resposta: "l'estiu i la calor". Aquest és el confusor.
Pas 9. Canvieu ara les dades de la columna C perquè BAIXIN quan puja B (exemple: gener 12, juliol 2). Mireu el núvol: ara baixa. Això és correlació negativa.
Pas 10. Escriviu una conclusió: "la dispersió mostra que van juntes, no que una causi l'altra". Deseu el full.

## ✍️ Exercicis d'autoavaluació
1. Quina diferència hi ha entre correlació i causalitat?
2. A l'exemple del gelat, quin és el confusor?
3. Què és la causalitat inversa? Dóna un exemple.
4. Quin gràfic de Google Sheets mostra si dues columnes van juntes?
5. Quines tres preguntes convé fer-se davant de qualsevol relació que us presentin?

Respostes: 1. Correlació és que dues coses canvien alhora; causalitat és que una produeix l'altra. 2. L'estiu (la calor), que explica que es comprin més gelats i que hi hagi més banyistes. 3. Quan sembla que A causa B però és B la que causa A; per exemple, la gent que es jubila abans viu més perquè ja tenia bona salut. 4. El gràfic de dispersió. 5. Van realment juntes? Quina altra cosa explica les dues? Qui surt guanyant amb que jo ho cregui?

## ⚖️ Dimensió ètica
La confusió entre correlació i causalitat no és un error innocent: és una eina de manipulació. Els anuncis de cremes, d'assegurances i fins i tot de partits polítics fan servir correlacions per vendre. Quan comuniqueu dades, digueu sempre amb honestedat si hi ha una relació demostrada o només una coincidència. I quan algú faci servir una correlació per convèncer-vos, recordeu el gelat i l'ofegament: no us empasseu el conte amb la cullera.

## 🔓 Eines obertes
| Eina | Què és i per a què serveix | On trobar-la |
|---|---|---|
| Google Sheets | Gràfics de dispersió per explorar correlacions | https://sheets.google.com |
| Gapminder | Dades mundials reals per veure correlacions de veritat | https://www.gapminder.org |
| "Spurious Correlations" | Web que mostra correlacions absurdes però reals | https://www.tylervigen.com/spurious-correlations |
| LibreOffice Calc | Els mateixos gràfics de dispersió, sense connexió | https://ca.libreoffice.org |

## 🧠 Resum i pont
- Correlació és que dues coses van juntes; causalitat és que una produeix l'altra.
- Un confusor és una tercera cosa que les explica totes dues.
- La causalitat inversa inverteix la direcció de la fletxa.
- El gràfic de dispersió mostra si van juntes, no per què.
Al nivell següent aprendrem a netejar dades, perquè una correlació honesta només pot sortir de dades sense errors.
