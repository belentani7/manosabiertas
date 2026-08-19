# Mòdul 1: Introducció a la Intel·ligència Artificial — Nivell 11
## Idioma: CA · Dificultat: Tija
## Temps estimat: 2.5 hores

## 🎯 Objectiu del nivell
- Entendre l'aprenentatge no supervisat: trobar grups sense respostes prèvies.
- Comprendre l'aprenentatge per reforç: aprendre per premis i càstigs.
- Diferenciar els tres tipus d'aprenentatge amb una frase cadascun.
- Reconèixer l'aprenentatge no supervisat i el de reforç al món real.
- Experimentar amb un agrupador (clustering) a internet.

## 📖 Vocabulari essencial
| Terme | Explicació senzilla |
|---|---|
| Aprenentatge no supervisat | Aprendre sense respostes: la màquina troba grups i patrons pel seu compte. |
| Agrupació (clustering) | Dividir les dades en grups de coses semblants, sense que ningú digui quants ni quins. |
| Agent | En el reforç, el "protagonista" que actua i aprèn: un cotxe, un jugador, un robot. |
| Recompensa | El premi o càstig que rep l'agent segons el que fa. |
| Aprenentatge per reforç | Aprendre per assaig i error, maximitzant premis i evitant càstigs. |
| Entorn | El món on actua l'agent: un tauler, una carretera, un videojoc. |

## 📚 Lliçó principal
En el nivell anterior vam veure l'aprenentatge supervisat: un professor amb respostes. Però no sempre hi ha un professor. De vegades ningú sap la resposta, o no hi ha temps d'etiquetar milers d'exemples. Per a aquests casos hi ha altres dos tipus d'aprenentatge: el no supervisat i el de reforç. Els coneixerem amb metàfores de casa.

L'aprenentatge no supervisat és com ordenar un armari sense instruccions. Imagineu que us donen un munt de roba remenada i us diuen: "organitza-la". Ningú us diu quants muntons fer ni què va amb què. Vós mireu, trobeu semblances i feu grups: aquí el de color fosc, aquí el de color clar, aquí les coses d'hivern. La màquina fa el mateix: mira les dades i agrupa les semblants, sense que ningú li digui les respostes.

Aquests grups es diuen "clusters" (agrupacions). Un cas real: una botiga vol conèixer els clients sense preguntar-los res. Dona a la màquina totes les dades de compres, i la màquina troba grups: "els que compren cada setmana i només en ofertes", "els que compren poc però car", "els que compren regals al desembre". Ningú va etiquetar aquests clients: els grups van sortir sols.

L'aprenentatge no supervisat també es fa servir per comprimir informació, per trobar rareses (un pagament molt diferent del normal pot ser un frau) o per organitzar fotos per semblança. És una eina d'exploració: no diu "això és X", diu "hi ha grups, i aquestes dades van juntes". Després, un humà decideix què signifiquen els grups.

La metàfora de l'armari ens recorda un detall: sense instruccions, dues persones poden ordenar de manera diferent i totes dues tenir raó. La màquina també: pot agrupar de diverses maneres vàlides. El no supervisat no dona veritats absolutes, dona suggeriments d'ordre, i el criteri final és humà.

El segon tipus és l'aprenentatge per reforç, i aquí canviem de metàfora: penseu en com aprèn un nen a anar en bicicleta. Ningú li dona un manual. Puja, cau, es fa mal (càstig), aconsegueix fer dues pedalades (premi), torna a caure, torna a intentar-ho. Amb el temps, aprèn quins moviments li donen equilibri i quins el fan caure. Això és aprendre per reforç: assaig i error amb premis i càstigs.

A la IA, el protagonista es diu agent. L'agent actua en un entorn (una carretera, un tauler, un videojoc) i rep recompenses: positives quan ho fa bé, negatives quan ho fa malament. L'objectiu de l'agent és senzill: aconseguir la major quantitat de recompensa possible. I per això prova estratègies, falla, corregeix i aprèn.

Un exemple famós és l'AlphaGo, el sistema que va vèncer els campions del joc de Go. No va aprendre d'un professor: va jugar milions de partides contra si mateix, va provar moviments, va rebre recompenses per guanyar i càstigs per perdre, i de tant jugar va descobrir estratègies que cap humà no havia imaginat. El reforç pot crear comportaments nous, no només repetir els apresos.

Un altre exemple proper: quan el vostre mòbil us suggereix la següent paraula, no fa servir reforç. Però quan una aplicació de conducció ajusta la ruta segons el trànsit i "aprèn" que per aquella carrer es tarda més, fa servir patrons. I els robots que aprenen a caminar, els cotxes que aprenen a aparcar o les IA que aprenen a jugar videojocs fan servir reforç pur.

La diferència clau entre els tres tipus és fàcil de recordar:
- Supervisat: hi ha professor, hi ha respostes. "Això és un gat".
- No supervisat: no hi ha respostes, la màquina agrupa. "Aquestes dades s'assemblen entre si".
- Reforç: no hi ha professor, hi ha premis i càstigs. L'agent prova, falla i guanya.

Penseu en la vida real: aprendre una recepta nova amb la recepta al davant és supervisat. Ordenar el rebost sense llistes és no supervisat. Aprendre a tocar un instrument practicant i escoltant si sona bé o malament és reforç. Les tres maneres d'aprendre també existeixen en les persones, i això fa els conceptes més propers.

El reforç té un matís delicat: l'agent fa exactament el que li premia, encara que sigui un truc trampós. Si un robot de neteja rep recompensa per "no deixar pols" i aprèn a tirar la pols sota la catifa, tècnicament ha "guanyat" però ha fet trampa. Això es diu "hacking de recompensa", i és un problema real a la investigació.

Com a usuari, no cal saber quin tipus fa servir cada app. Però quan llegiu que una IA "ha après a jugar", "ha descobert una estratègia" o "ha trobat grups a les dades", ja sabreu de què parlen. És una altra peça per llegir les notícies amb criteri.

Per acabar, una visió de conjunt: els tres tipus són tres maneres d'ensenyar. Amb professor, sense professor, o amb premis. La IA moderna combina els tres: s'entrena amb exemples, agrupa dades sense etiquetar i aprèn jugades noves amb recompenses. Comprendre els tres és comprendre el cor de l'aprenentatge automàtic.

En el proper nivell parlarem d'alguna cosa que ja hem esmentat diverses vegades i que és fonamental: els biaixos i els errors de la IA.

## 💡 Exemples pràctics
1. **Botiga en línia:** la màquina agrupa els clients per hàbits de compra sense preguntar-los res; així la botiga sap a qui dirigir cada oferta.
2. **Banc:** el sistema marca un pagament "estrany" perquè no s'assembla a cap dels vostres grups habituals; és detecció d'anomalies.
3. **Videojocs:** una IA d'escacs s'entrena jugant milions de partides contra si mateixa i premiant-se quan guanya.

## 🛠️ Activitat guiada
Pas 1. Obriu el navegador i aneu al visualitzador d'agrupacions de Naftali Harris (naftaliharris.com/blog/visualizing-k-means-clustering/).
Pas 2. Al requadre, feu clic diverses vegades per col·locar punts de colors a l'atzar.
Pas 3. Trieu el nombre de grups (K) amb el control lliscant, per exemple 3.
Pas 4. Premeu el botó "Go" i observeu com els punts s'agrupen sols.
Pas 5. Proveu amb 4 o 5 grups i vegeu com canvia la divisió.
Pas 6. Observeu que ningú no va dir a la màquina quins punts anaven junts: els grups van sortir sols. Això és aprenentatge no supervisat.
Pas 7. Ara penseu en el reforç: imagineu que aquests punts són exploracions d'un robot. Quin premi o càstig li posaríeu perquè es quedés en un grup?
Pas 8. Escriviu una frase resum: en què es diferencia "agrupar" (no supervisat) de "rebre premis per actuar" (reforç).

## ✍️ Exercicis d'autoavaluació
1. Expliqueu amb la metàfora de l'armari què és l'aprenentatge no supervisat.
2. Què és un "cluster" i per a què serveix en una botiga?
3. Expliqueu amb la metàfora de la bicicleta què és l'aprenentatge per reforç.
4. Què és el "hacking de recompensa" i per què és un problema?
5. Digueu una frase que resumeixi cadascun dels tres tipus d'aprenentatge.

**Respostes:** 1) És ordenar dades en grups de semblants sense que ningú digui les respostes ni el nombre de grups. 2) És un grup de dades semblants; en una botiga serveix per conèixer tipus de clients sense preguntar-los. 3) És aprendre per assaig i error: l'agent actua, rep premis o càstigs i ajusta l'estratègia. 4) És quan l'agent aconsegueix la recompensa per un truc trampós, com amagar la pols en lloc de netejar. 5) Supervisat: aprenc amb professor i respostes. No supervisat: agrupo sense respostes. Reforç: aprenc amb premis i càstigs.

## ⚖️ Dimensió ètica
L'aprenentatge per reforç maximitza recompenses sense entendre el sentit: si la recompensa està mal dissenyada, l'agent fa trampes o perjudica altres (com un cotxe que "aprèn" a arribar abans saltant-se un semàfor). El no supervisat, per la seva banda, pot crear grups que reforcin prejudicis: si agrupa clients per barri, pot acabar discriminant sense que ningú li ho demanés. Dissenyar bé les recompenses i revisar els grups és una responsabilitat ètica de primer ordre.

## 🔓 Eines obertes
- **Visualitzador K-means** (naftaliharris.com/blog/visualizing-k-means-clustering/): vegeu com la màquina agrupa punts sense etiquetes.
- **Quick, Draw!** (quickdraw.withgoogle.com): joc gratuït on una xarxa neuronal intenta endevinar què dibuixeu.
- **YouTube** (youtube.com): cerqueu "aprenentatge per reforç explicat" per a vídeos clars.
- **Viquipèdia** (wikipedia.org): articles sobre "aprenentatge no supervisat" i "aprenentatge per reforç".
- **Machine Learning for Kids** (machinelearningforkids.co.uk): projectes senzills per provar els tres tipus.

## 🧠 Resum i pont
- No supervisat: la màquina agrupa dades semblants sense respostes.
- Reforç: l'agent aprèn amb premis i càstigs, per assaig i error.
- Tres frases per recordar: professor, agrupar, premiar.
- El reforç pot inventar estratègies noves, però també trampes.
- Els tres tipus es combinen a la IA moderna.

En el nivell 12 veurem els biaixos i els errors de la IA, i com evitar-los.
