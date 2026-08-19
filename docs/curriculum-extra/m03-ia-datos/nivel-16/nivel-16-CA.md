# Mòdul 3: IA Aplicada a les Dades — Nivell 16
## Idioma: CA · Dificultat: Branca
## Temps estimat: 3 hores

## 🎯 Objectiu del nivell
- Entendre què és la regressió: la tècnica per predir números.
- Veure la "línia de tendència" com el cor de la regressió.
- Dibuixar una línia de tendència a Google Sheets.
- Aprendre els perills de predir massa lluny (extrapolar).

## 📖 Vocabulari essencial
| Terme | Explicació en paraules simples |
|---|---|
| Regressió | La tècnica de la IA per predir un número amb dades passades. |
| Línia de tendència | La línia recta que millor resumeix com pugen o baixen els punts. |
| Dades històriques | Els valors passats que el model fa servir per aprendre. |
| Extrapolar | Predir més enllà de les dades que tenim, amb compte. |
| Error | La diferència entre el que el model va predir i el que va passar. |

## 📚 Lliçó principal
Al nivell anterior vam veure la idea general de la predicció. Avui anem a la primera tècnica concreta, i és la més útil de totes quan volem endevinar un número: la regressió. Que no us espanti el nom, que sembla de bata i laboratori. La regressió és la tècnica que dibuixa una línia recta entre els punts d'un gràfic per poder dir: "per aquí van les coses, i així continuaran".

Recordeu el gràfic de dispersió del nivell 10: un núvol de punts que puja d'esquerra a dreta quan dues coses van juntes. La regressió fa una cosa meravellosa amb aquest núvol: traça la línia recta que passa el més a prop possible de tots els punts alhora. No és una línia qualsevol: és la "millor" línia, la que deixa els punts el més a prop possible, per sobre i per sota. Aquesta línia s'anomena "línia de tendència".

Per què serveix una línia? Perquè un cop la teniu, podeu allargar-la. Si el núvol mostra que amb 20 graus es venen 40 gelats i amb 25 graus se'n venen 55, la línia hi passa per sobre i continua recta. Llavors mireu quina alçada té la línia als 28 graus i dieu: "probablement se'n vendran uns 65". Acabeu de fer una predicció per regressió. La màquina no pensa: la màquina dibuixa la línia i llegeix l'alçada.

Google Sheets fa aquesta línia per nosaltres amb un parell de clics. Se selecciona el gràfic de dispersió, s'obre la configuració ("Personalitza", "Sèrie", "Línia de tendència"), i la línia apareix màgicament. Al costat es pot activar l'"etiqueta" que mostra la fórmula, i també el "coeficient de determinació", un número entre 0 i 1 que diu com de bé s'ajusta la línia als punts. Com més a prop d'1, més fiable la línia; prop de 0, la línia no serveix per a res.

Entendrem aquest coeficient amb un exemple quotidià. Si els punts de la vostra dispersió estan gairebé enganxats a la línia, com les vendes d'un quiosc segons la temperatura, el coeficient s'acosta a 1: la línia resumeix molt bé la realitat, i les seves prediccions mereixen confiança. Si els punts estan escampats com un grapat d'arròs, el coeficient s'acosta a 0: no hi ha patró clar, i cap línia recta no pot salvar la situació. El coeficient és el "semàfor" de la regressió.

Ara ve la lliçó més important del dia: l'extrapolació. Extrapolar és fer servir la línia per predir més enllà de les dades que tenim. És temptador i perillós. Si només teniu dades de temperatures entre 10 i 30 graus, podeu predir sense por els gelats a 25 graus: és dins del conegut, les dades ho sostenen. Però si prediu els gelats a 50 graus, esteu viatjant a un territori que mai no heu vist: la línia potser continua pujant, però a la realitat, a 50 graus, ningú no surt a comprar gelats i les vendes s'enfonsen. La línia no ho sap: la línia només sap perllongar-se.

Els professionals anomenen això "no extrapolar més enllà de les dades". És la causa dels errors més sonats de la història de la IA. Es va predir el comportament de l'economia, de les epidèmies i del clima allargant línies sense preguntar-se si el món continuava sent el mateix. Una línia és un resum del passat, no una llei de l'univers. Com més lluny del passat, menys fiable.

Una altra idea útil: la regressió no entén el significat dels números, només la seva forma. Si li doneu els quilos de tomàquets i els dies de pluja, la màquina troba la línia que millor encaixa. Però no sap que els tomàquets necessiten aigua, ni quanta. La interpretació la posa la persona. Per això la regressió és una eina excel·lent, però sempre acompanyada de criteri humà: el criteri és vostre, la línia és de la màquina.

Al món real, la regressió és a tot arreu disfressada de producte. Els preus dels vols es prediuen amb regressió sobre milions de reserves passades. El valor d'una casa s'estima amb regressió sobre els preus de vendes anteriors. La despesa elèctrica del mes que ve s'anticipa amb la línia dels mesos passats. Cada vegada que un sistema us diu un número "probable", el més segur és que al darrere hi hagi una regressió.

Al proper nivell veurem la segona gran tècnica de la predicció: la classificació, que no prediu un número sinó una categoria: serà pluja o sol? És spam o no? Mentrestant, guardeu aquesta idea: predir números és dibuixar la millor línia entre els punts i llegir-la amb humilitat, sabent que la línia és memòria, no profecia.

## 💡 Exemples pràctics
### Exemple 1: Els gelats del quiosc
Amb 10 dies de dades (temperatura i gelats venuts), la línia de tendència permet estimar quants gelats es vendran demà. A 28 graus, uns 65. La regressió feta amb els ulls.

### Exemple 2: El preu del vol
Una aerolínia guarda milions de reserves passades. Una regressió troba la línia que relaciona preu amb dies d'antelació i us cobra "el que l'algorisme sap que pagareu".

### Exemple 3: L'aigua de l'edifici
Amb 12 mesos de consum, la línia de tendència mostra si la despesa d'aigua puja. Si la línia puja, alguna cosa s'està trencant o malbaratant: la regressió avisa abans que la factura.

## 🛠️ Activitat guiada
Pas 1. Obriu el full "La meva primera predicció" del nivell 15 (o creeu-ne un amb 10 dies de temperatura i gelats).
Pas 2. Seleccioneu les dues columnes i feu un gràfic de dispersió (Insereix, Gràfic, dispersió).
Pas 3. Premeu els tres punts del gràfic i obriu "Edita el gràfic".
Pas 4. Aneu a "Personalitza", "Sèrie" i activeu "Línia de tendència".
Pas 5. Activeu també "Etiqueta" (per veure la fórmula) i, si apareix, "R²" (el coeficient de determinació).
Pas 6. Observeu el R²: és a prop d'1? Doncs la línia resumeix bé els punts.
Pas 7. Llegiu a la fórmula el número: la fórmula té la forma "y = a·x + b". En ella, "x" és la temperatura i "y" els gelats.
Pas 8. Substituïu x per 28 i calculeu y amb la calculadora. Aquest és el número que prediu la línia.
Pas 9. Escriviu a sota: "predicció a 28 graus: y gelats". Comproveu que coincideix amb el que veieu a la línia.
Pas 10. Pregunteu-vos i escriviu: "m'atreviria a predir a 50 graus? Per què sí o per què no?".

## ✍️ Exercicis d'autoavaluació
1. Què és la regressió?
2. Com s'anomena la línia que dibuixa la regressió?
3. Què indica el coeficient R²?
4. Què és extrapolar i per què és perillós?
5. Qui posa el significat als números que prediu la regressió?

Respostes: 1. La tècnica de la IA per predir un número amb dades passades. 2. Línia de tendència. 3. Com de bé s'ajusta la línia als punts: prop d'1 és fiable, prop de 0 no serveix. 4. Predir més enllà de les dades que tenim; perillós perquè el món pot canviar i la línia no ho sap. 5. La persona: la màquina veu la forma, la persona entén el significat.

## ⚖️ Dimensió ètica
Una regressió pot servir per ajudar o per esprémer. La mateixa tècnica que prediu el consum d'aigua per evitar malbarataments també s'usa per cobrar més al que té menys opcions. I hi ha una trampa ètica subtil: si les dades històriques contenen injustícies (per exemple, un barri al qual se li va vendre menys), la línia les hereta i les perpetua. Abans de creure un número predit, pregunteu-vos: les dades de les quals neix són justes? La regressió no és culpable ni innocent: hereta la veritat o el prejudici de les seves dades.

## 🔓 Eines obertes
| Eina | Què és i per a què serveix | On trobar-la |
|---|---|---|
| Google Sheets | Línia de tendència i R² amb dos clics | https://sheets.google.com |
| LibreOffice Calc | Les mateixes línies de tendència, sense connexió | https://ca.libreoffice.org |
| Gapminder | Dades reals per practicar línies de tendència | https://www.gapminder.org |
| Desmos | Calculadora gràfica que dibuixa línies sobre punts | https://www.desmos.com |

## 🧠 Resum i pont
- La regressió prediu números dibuixant la millor línia entre els punts.
- El coeficient R² diu si la línia és fiable.
- Extrapolar més enllà de les dades és la causa d'errors famosos.
- La màquina dibuixa la línia; la persona posa el significat.
Al nivell següent veurem la classificació: predir categories (pluja o sol? spam o no?) en comptes de números.
