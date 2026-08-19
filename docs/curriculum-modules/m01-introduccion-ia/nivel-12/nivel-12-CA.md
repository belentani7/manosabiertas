# Mòdul 1: Introducció a la Intel·ligència Artificial — Nivell 12
## Idioma: CA · Dificultat: Tija
## Temps estimat: 2.5 hores

## 🎯 Objectiu del nivell
- Entendre què és un biaix i d'on ve.
- Comprendre que la IA aprèn els prejudicis i errors de les seves pròpies dades.
- Reconèixer exemples de discriminació algorítmica a la vida real.
- Distingir entre una fallada de la màquina i una fallada que ve de les dades.
- Comprovar a la pràctica que unes dades desequilibrades produeixen respostes esbiaixades.

## 📖 Vocabulari essencial
| Terme | Explicació senzilla |
|---|---|
| Biaix | Una inclinació o prejudici: quan el sistema afavoreix un grup o una idea sense motiu. |
| Dades d'entrenament | La informació que es dona a la màquina perquè aprengui. |
| Discriminació algorítmica | Quan el sistema tracta de manera injusta un grup de persones. |
| Error del model | Una resposta equivocada que el sistema dona encara que estigui ben programat. |
| Verificació | Comprovar si una resposta és correcta abans de creure-la. |
| Equilibri de dades | Que tots els grups estiguin representats de manera justa en la informació. |

## 📚 Lliçó principal
En el nivell anterior vam veure com aprenen les màquines. Però hi ha un tema que no podem deixar enrere: les màquines també s'equivoquen i, de vegades, repeteixen els nostres propis prejudicis sense saber-ho. Aquest nivell tracta d'això: dels biaixos i dels errors de la IA.

Penseu en una recepta de bescuit. Si la farina està en mal estat, el bescuit sortirà malament, encara que el cuiner sigui el millor del món. Amb la IA passa el mateix: la màquina aprèn de les dades que li donem. Si les dades porten prejudicis, la màquina els repetirà com si fossin veritat.

Un biaix és una inclinació cap a un costat sense motiu. No és dolent tenir preferències; el que és dolent és quan una decisió important afavoreix un grup sense raó. I això pot passar sense que ningú ho vulgui, només perquè les dades estaven desequilibrades.

Posem un exemple del món laboral. Si durant anys una empresa ha contractat més homes que dones per a un lloc, les dades dels seus arxius ho reflecteixen. Si entrena una IA per seleccionar currículums, la màquina aprendrà que "els bons currículums" són els que s'assemblen als dels homes, i acabarà descartant dones amb les mateixes qualificacions. Ningú no va programar aquella discriminació: la va aprendre de les dades.

Un altre exemple, al banc. Si un sistema de préstecs aprèn amb dades d'una època en què a un barri se li negaven crèdits, continuarà negant-los a la gent d'aquell barri, encara que avui tinguin solvència. El sistema no té mala intenció: té males dades.

També passa amb el reconeixement facial. Hi ha estudis que van mostrar que algunes càmeres fallaven més en identificar cares de pell fosca que de pell clara. La raó no és la càmera: és que es van entrenar sobretot amb fotos de persones de pell clara. La màquina coneix millor qui més ha vist.

Fins i tot en la salut s'han vist biaixos. Hi ha sistemes que ajuden els metges i que, entrenats amb dades d'una sola part de la població, no detecten bé malalties en altres persones. El que val per a uns no val per a tots, i les dades han de representar tothom.

La idea central d'aquest nivell es pot resumir amb una imatge: la IA és un mirall de les seves dades. Si la societat té prejudicis, les dades els tenen, i la màquina els torna com si fossin lleis. No és que la màquina sigui racista o injusta per decisió pròpia: és que aprèn el que li mostrem.

Per això es diu "escombraries a dins, escombraries a fora". Si la informació d'entrada és dolenta o incompleta, la resposta també ho serà. Això no és un defecte estrany: és la regla. Saber-ho us dona un avantatge enorme a l'hora de llegir notícies i de fer servir qualsevol eina.

A més dels biaixos, les màquines tenen errors normals. De vegades les dades estan mal etiquetades, com una foto d'un gat marcada com a "gos". Altres vegades el cas és tan poc freqüent que la màquina no el va veure mai, i en trobar-se'l s'equivoca. I altres vegades el sistema "inventa" informació per respondre, com veurem amb detall quan parlem dels models de llenguatge.

Llavors, què podem fer? Primer, no creure tot el que diu una màquina. Segon, verificar la informació important amb altres fonts. Tercer, quan una eina doni un resultat estrany o injust, preguntar: de quines dades ha après? Representen tothom?

En el costat dels creadors, cada cop hi ha més cura: s'equilibren les dades, s'auditen els sistemes i es formen equips diversos per revisar-los. No és perfecte, però ja hi ha més consciència que fa deu anys. I la pressió dels usuaris ajuda.

Vós, com a persona, teniu un paper senzill i poderós: desconfiar amb educació. Quan un sistema us sembli injust, comenteu-ho, pregunteu, escriviu. Les empreses canvien quan els clients ho demanen. La IA millora quan exigim que sigui justa per a tothom.

Per acabar, una frase per recordar: la IA no té prejudicis propis; repeteix els nostres. Per això netejar les dades és gairebé tan important com construir la màquina. En el pròxim nivell farem el salt a una de les intel·ligències més famoses: els models de llenguatge grans, com els que hi ha darrere dels assistents de text.

## 💡 Exemples pràctics
1. **Selecció de personal:** una empresa va entrenar el seu filtre de currículums amb arxius antics i la IA descartava dones; el problema era a les dades, no al programa.
2. **Concessió de crèdits:** un banc negava préstecs a un barri perquè les dades històriques els hi negaven; el sistema repetia el passat.
3. **Reconeixement facial:** una càmera fallava més amb cares de pell fosca perquè es va entrenar amb poques fotos d'aquest tipus de pell.

## 🛠️ Activitat guiada
Pas 1. Prepareu un bol amb mongetes: 90 d'un color i 10 d'un altre color. Aquest bol serà el vostre "conjunt de dades".
Pas 2. Traieu 20 mongetes a l'atzar, una a una, i anoteu el color. N'haureu tret sobretot del color majoritari.
Pas 3. Ara actueu vós com a màquina: si us mostren una mongeta nova, quin color direu que és? Gairebé sempre direu el majoritari.
Pas 4. Comproveu que la "màquina" no té prejudicis: només ha après que el color majoritari és el normal. El prejudici era al bol.
Pas 5. Obriu el navegador i aneu a un cercador d'imatges gratuït (per exemple, bing.com/images).
Pas 6. Escriviu la paraula "director" i observeu les fotos. Ara escriviu "secretària" i observeu de nou.
Pas 7. Compareu: les imatges mostren com són les dades que la societat ha produït. Què ha après "la màquina" de nosaltres?
Pas 8. Escriviu una frase de conclusió: com influeix el desequilibri de les dades en les respostes de la IA?

## ✍️ Exercicis d'autoavaluació
1. Expliqueu amb la metàfora del bescuit per què un sistema esbiaixat no és culpa només de la màquina.
2. Què és la discriminació algorítmica? Poseu un exemple.
3. Per què fallaven algunes càmeres amb cares de pell fosca?
4. Què significa "escombraries a dins, escombraries a fora"?
5. Quines tres coses podeu fer vós com a usuari davant d'un resultat estrany o injust d'una IA?

**Respostes:** 1) Si la farina (les dades) està en mal estat, el bescuit (el resultat) surt malament: la màquina repeteix el que aprèn. 2) És quan el sistema tracta injustament un grup per culpa de les dades; per exemple, descartar currículums de dones. 3) Perquè es van entrenar sobretot amb fotos de pell clara i coneixen millor qui més han vist. 4) Que si la informació d'entrada és dolenta o incompleta, la resposta també ho serà. 5) No creure tot el que diu la màquina, verificar amb altres fonts i preguntar de quines dades ha après o denunciar la injustícia.

## ⚖️ Dimensió ètica
El biaix no és un defecte tècnic menor: pot negar un préstec, una feina o un diagnòstic a persones concretes. La responsabilitat no és de la màquina, sinó de qui la construeix i de la societat que produeix les dades. Per això cal exigir transparència (que expliquin de què ha après), dades equilibrades i auditories independents. Com a ciutadà, preguntar i reclamar quan un sistema sigui injust també és una forma de cura.

## 🔓 Eines obertes
- **Bing Images** (bing.com/images): per comprovar visualment quines dades ha après la societat.
- **Teachable Machine** (teachablemachine.withgoogle.com): entreneu amb conjunts desequilibrats i observeu com s'equivoca.
- **MIT Moral Machine** (moralmachine.net): experimenteu amb decisions difícils de la IA.
- **Viquipèdia** (wikipedia.org): cerqueu "biaix algorítmic" i "discriminació algorítmica" per aprofundir.
- **YouTube** (youtube.com): cerqueu "biaix en intel·ligència artificial" per veure exemples reals.

## 🧠 Resum i pont
- La IA repeteix els prejudicis que hi ha a les seves dades.
- Un sistema sense mala intenció pot discriminar sense saber-ho.
- "Escombraries a dins, escombraries a fora": dades dolentes, respostes dolentes.
- Verificar i preguntar són les vostres millors eines com a usuari.
- Les dades equilibrades i les auditories ajuden a reduir el biaix.

En el nivell 13, coneixerem els models de llenguatge grans (LLM): com els assistents de text aprenen a escriure i per què de vegades inventen respostes.
