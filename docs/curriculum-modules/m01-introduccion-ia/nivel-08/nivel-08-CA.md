# Mòdul 1: Introducció a la Intel·ligència Artificial — Nivell 08
## Idioma: CA · Dificultat: Arrel
## Temps estimat: 2 hores

## 🎯 Objectiu del nivell
- Entendre què és una xarxa neuronal amb metàfores de la vida quotidiana.
- Comprendre que les xarxes neuronals s'inspiren en el cervell, però no són un cervell.
- Saber què són les capes i per què "més capes" es diu aprenentatge profund.
- Entendre el paper de les connexions (pesos) en l'aprenentatge.
- Veure que una xarxa neuronal es pot visualitzar i experimentar a internet.

## 📖 Vocabulari essencial
| Terme | Explicació senzilla |
|---|---|
| Xarxa neuronal | Un sistema de petits "nodes" connectats que aprèn ajustant la força de les seves connexions. |
| Neurona artificial | Cada peça petita de la xarxa que rep senyals, els transforma i els passa endavant. |
| Capa | Un grup de neurones que processa la informació alhora i la lliura a la següent. |
| Aprenentatge profund | Una xarxa amb moltes capes, capaç d'aprendre coses molt complexes. |
| Pes (connexió) | La "força" de cada connexió, que el sistema ajusta mentre aprèn. |
| Activació | El senyal que una neurona envia a la següent quan "s'encén". |

## 📚 Lliçó principal
Les xarxes neuronals sonen a ciència de laboratori, però es poden entendre amb metàfores de casa. Imagineu que dirigiu una brigada de cuina enorme. Al davant teniu centenars de cuiners en fila. El primer rep la comanda del client, li passa una nota al segon, el segon hi afegeix alguna cosa i la passa al tercer, i així fins a l'últim, que serveix el plat. Cada cuiner fa una petita feina i passa el resultat al següent. Així funciona una xarxa neuronal.

Cada cuiner és una neurona artificial. Rep senyals (les comandes), els transforma una mica i els passa a la següent neurona. Cap neurona, tota sola, no fa res d'impressionant. Però quan són milers organitzades en files, el conjunt és capaç de coses sorprenents: reconèixer la vostra cara, traduir un idioma o entendre el que dieu.

Les files de cuiners es diuen capes. La primera capa rep les dades d'entrada, per exemple els punts de llum d'una foto. Les capes del mig van afinant: una detecta vores, una altra reconeix formes, una altra identifica que aquestes formes juntes semblen un ull. L'última capa dona el resultat: "això és una cara". Com més capes, més detallat és el reconeixement. Això es diu aprenentatge profund.

I com aprèn la brigada? Aquí hi ha la clau: les connexions entre cuiners tenen una "força", que es diu pes. Quan la xarxa encerta, els pesos es mantenen. Quan falla, s'ajusten: es reforça la connexió que va ajudar i es debilita la que va confondre. Amb milions d'exemples, la xarxa va afinant els pesos fins a encertar gairebé sempre. És com quan ajusteu el foc de la cuina: massa fort, el baixeu; massa fluix, el pugeu.

Penseu en les connexions com els fils d'una manta de ganxet. Cada fil aguanta una part. Si un fil és fluix, la manta es desfà; si està molt tibant, deforma el dibuix. La xarxa ajusta cada fil mentre aprèn. Al final, la manta (el model) té exactament la tensió correcta per a cada cas.

És important desmuntar un malentès: les xarxes neuronals s'inspiren en el cervell, però no són un cervell. No pensen, no senten i no tenen consciència. Són matemàtiques imitant una manera d'organitzar el treball que resulta molt eficaç. És com un avió: s'inspira en els ocells, però no és un ocell.

D'on va sortir la idea? Als anys quaranta i cinquanta, els científics van observar que el cervell processa la informació amb milions de cèl·lules connectades, les neurones, que s'encenen i s'apaguen. Van pensar: i si construïm una imitació senzilla d'això? D'aquí va néixer la neurona artificial, un petit dispositiu que rep números, els suma i decideix si "s'encén" o no.

Durant dècades, les xarxes neuronals van ser una curiositat. Faltaven dues coses: potència de càlcul i dades. Sense dades, no hi ha res a aprendre; sense potència, no hi ha manera d'ajustar milions de connexions. Per això el gran enlairament va arribar als anys 2010, quan els ordinadors es van tornar molt ràpids i les dades van abundar. Les xarxes van deixar de ser teoria i es van convertir en el motor de tot.

Avui, les xarxes neuronals profundes són al traductor, al reconeixement de veu, a les fotos, al diagnòstic mèdic i als cotxes que es condueixen sols. Quan dicteu un missatge i el mòbil l'escriu bé, hi ha una xarxa neuronal amb moltes capes treballant en mig segon.

Una manera d'entendre-ho de veritat és veure-ho. A internet hi ha un laboratori gratuït anomenat TensorFlow Playground on es pot jugar amb una xarxa neuronal petita: triar la forma de les dades, afegir capes i veure la xarxa aprenent en directe. És com mirar per la finestra de la cuina i veure la brigada treballar.

El que no s'ha d'esperar és que una xarxa neuronal "raoni". No entén el perquè de les coses. Ha après a encertar, no a comprendre. Per això de vegades encerta per raons equivocades: per exemple, si totes les fotos de gossos en el seu entrenament tenien la gespa al darrere, pot acabar identificant gespa i no gossos. Aquest és un perill important que cal conèixer.

La metàfora final: la xarxa neuronal és com un gran equip de relleus. Ningú corre la cursa sencera; cada rellevista corre el seu tram i passa el testimoni. L'equip complet, coordinat, arriba a la meta. La intel·ligència no està en un sol rellevista: està en com es passen el testimoni. I això, afortunadament, es pot entrenar, corregir i millorar.

En el proper nivell veurem l'altre ingredient imprescindible: les dades d'entrenament.

## 💡 Exemples pràctics
1. **Dictat del mòbil:** quan dicteu i el text surt correcte, una xarxa neuronal de moltes capes ha processat la vostra veu en un instant.
2. **Fotos de família:** la xarxa que agrupa les fotos del vostre nét primer detecta vores, després ulls i nas, i al final "reconeix" la cara completa.
3. **Traducció:** el traductor automàtic fa servir capes que van des de les lletres fins al sentit de la frase completa.

## 🛠️ Activitat guiada
Pas 1. Obriu el navegador i aneu al TensorFlow Playground (playground.tensorflow.org).
Pas 2. Mireu la part dreta: són les dades que la xarxa ha d'aprendre a separar (punts blaus i taronges).
Pas 3. Al centre veureu les capes de la xarxa amb les seves neurones i connexions.
Pas 4. Premeu el botó de "Play" (triangle) a la part superior esquerra.
Pas 5. Observeu com la xarxa aprèn: els colors del fons canvien mentre ajusta les connexions.
Pas 6. Quan acabi, premeu "Reset" i afegiu una capa extra amb el botó "+".
Pas 7. Premeu "Play" de nou i observeu si aprèn més de pressa o de manera diferent.
Pas 8. Canvieu la forma de les dades amb el menú de dalt i vegeu que algunes formes són més fàcils que altres. Ja heu vist una xarxa neuronal treballar.

## ✍️ Exercicis d'autoavaluació
1. Expliqueu amb la metàfora de la brigada de cuina què és una xarxa neuronal.
2. Què és una capa i què vol dir "aprenentatge profund"?
3. Què és un pes (connexió) i com canvia mentre la xarxa aprèn?
4. Les xarxes neuronals són com el cervell humà? Què són realment?
5. Per què una xarxa pot encertar "per raons equivocades"?

**Respostes:** 1) És un equip en fila on cada treballador rep senyals, els transforma i els passa al següent fins a obtenir el resultat. 2) Una capa és un grup de neurones que processa alhora; l'aprenentatge profund és una xarxa amb moltes capes. 3) És la força de cada connexió; la xarxa l'ajusta: reforça el que encerta i debilita el que confon. 4) S'inspiren en el cervell, però són matemàtiques organitzades, sense pensament ni consciència. 5) Perquè va aprendre patrons superficials, com el fons de les fotos, en lloc de l'essencial.

## ⚖️ Dimensió ètica
Les xarxes neuronals poden aprendre el correcte per raons equivocades, i això és un risc silenciós. Un sistema que "encerta" discriminant (per exemple, rebutjant crèdits segons el barri) sembla que funciona, però perpetua injustícies. Per això l'auditoria de models és tan important: no n'hi ha prou que encerti; cal comprovar per què encerta. Com a usuari, desconfieu dels sistemes que no expliquen les seves decisions.

## 🔓 Eines obertes
- **TensorFlow Playground** (playground.tensorflow.org): experimenteu amb xarxes neuronals sense instal·lar res.
- **YouTube** (youtube.com): cerqueu "com funcionen les xarxes neuronals" per a vídeos animats.
- **Teachable Machine** (teachablemachine.withgoogle.com): entreneu la vostra pròpia xarxa en minuts.
- **Google Arts & Culture** (artsandculture.google.com): exploracions visuals sobre IA i creativitat.
- **Viquipèdia** (wikipedia.org): article sobre "xarxa neuronal artificial" per consultar conceptes.

## 🧠 Resum i pont
- Una xarxa neuronal és un equip de relleus que transforma senyals capa a capa.
- Cada neurona fa poc; el conjunt, organitzat, fa meravelles.
- Els pesos són la força de les connexions, i s'ajusten amb l'aprenentatge.
- Les xarxes s'inspiren en el cervell, però no són un cervell.
- De vegades encerten per raons equivocades: cal auditar els models.

En el nivell 09 veurem les dades d'entrenament: d'on surten i per què són la base de tot.
