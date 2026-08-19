# Mòdul 1: Introducció a la Intel·ligència Artificial — Nivell 10
## Idioma: CA · Dificultat: Tija
## Temps estimat: 2.5 hores

## 🎯 Objectiu del nivell
- Entendre què és l'aprenentatge supervisat amb la metàfora del professor.
- Distingir classificació i regressió amb exemples de la vida real.
- Comprendre com la màquina corregeix els seus errors durant l'entrenament.
- Reconèixer l'aprenentatge supervisat en aplicacions quotidianes.
- Fer una petita "regressió" manual en un full de càlcul.

## 📖 Vocabulari essencial
| Terme | Explicació senzilla |
|---|---|
| Aprenentatge supervisat | Aprendre amb un "professor": la màquina rep exemples amb la seva resposta correcta. |
| Classificació | Decidir en quin grup entra alguna cosa: brossa o no, gat o gos. |
| Regressió | Predir un número, com el preu d'una casa o la temperatura de demà. |
| Professor (supervisor) | Qui etiqueta els exemples i corregeix la màquina durant l'entrenament. |
| Error | La diferència entre el que la màquina va respondre i la resposta correcta. |
| Entrenar i validar | Entrenar és aprendre amb exemples; validar és comprovar amb exemples nous. |

## 📚 Lliçó principal
Imagineu una classe de primària. Un professor ensenya als nens a distingir fruites: mostra una poma i diu "això és una poma", mostra una pera i diu "això és una pera". Després fa un examen: ensenya una fruita i pregunta. Si el nen encerta, genial; si falla, el professor el corregeix. Amb la pràctica, el nen acaba encertant gairebé sempre. Així funciona l'aprenentatge supervisat.

"Supervisat" vol dir que hi ha un supervisor: algú o alguna cosa que coneix les respostes correctes. Al món de la IA, el supervisor és el conjunt de dades etiquetades. Cada exemple porta la seva resposta. La màquina no endevina a cegues: al final del procés té una "correcció del professor" que li diu si ha encertat o no.

El procés és un cercle: la màquina mira un exemple, fa una predicció, compara amb l'etiqueta correcta, calcula el seu error i ajusta les connexions per fallar menys la propera vegada. Després passa a l'exemple següent, i al següent, milions de vegades. Cada volta és com un examen rere l'altre, i cada correcció la fa una mica millor.

Hi ha dos grans tipus de tasques supervisades. La primera és la classificació: decidir en quin grup entra alguna cosa. Aquest correu és brossa o important? Aquesta foto té un gat o un gos? Aquest pagament és normal o sospitós? La resposta és una etiqueta, una categoria. És com posar cada cosa a la seva capsa.

La segona és la regressió: predir un número. Quant valdrà aquesta casa? Quina temperatura farà demà? Quants passos fareu avui? No hi ha capses, hi ha una escala. És com estimar quants quilos pesa un sac mirant-lo: no diu "és pesat o lleuger", diu "aproximadament 25 quilos".

Un exemple de regressió molt proper: el preu dels pisos. Si mostrem a la màquina milers d'exemples de "metres quadrats → preu", aprendrà a estimar el preu d'un pis que mai no ha vist. Vostè fa això intuïtivament cada dia: "un pis més gran sol costar més". La màquina ho fa amb milers de dades i amb més precisió.

La diferència entre classificació i regressió és més senzilla del que sembla: classificar és dir "sí o no, aquest o aquell"; regressió és dir "quant". El banc classifica si un pagament és frau; prediu (regressió) quant gastareu el mes que ve. Comprendre aquesta diferència us ajudarà a llegir qualsevol notícia sobre IA.

Ara, un punt important: la màquina pot aprendre "de memòria" i enganyar-nos. Si el professor examina els nens amb les mateixes fruites que ja van veure a classe, tots treuen deu. Per això a la IA se separa l'entrenament de la validació: s'entrena amb uns exemples i es comprova amb uns altres que la màquina no ha vist. Si encerta amb els nous, és que ha après de veritat.

Això té un nom tècnic que val la pena conèixer: sobreajust. És quan la màquina memoritza els exemples d'entrenament en lloc d'aprendre el patró general. És com un alumne que memoritza les preguntes de l'examen però no entén la matèria: aprova l'examen conegut i suspèn el desconegut. Els bons models es proven sempre amb dades noves.

L'aprenentatge supervisat és a gairebé totes les aplicacions que ja coneixem. El correu que filtra brossa, el reconeixement de cares, la detecció de fraus, el diagnòstic per imatge: tots són supervisats, tots van aprendre amb exemples etiquetats. És el tipus d'aprenentatge més usat i el més fàcil d'entendre.

I per què cal tanta quantitat de dades? Perquè cada exemple és una oportunitat de corregir. Un model necessita veure moltes variacions del món real per no confondre's. Igual que un nen necessita veure molts gossos (blancs, negres, grans, petits) per no creure que només hi ha una classe de gos.

No cal saber matemàtiques per fer servir això. L'important és el concepte: hi ha un professor (les dades etiquetades), la màquina fa exàmens (prediccions), s'equivoca, corregeix i millora. I després es prova amb exàmens nous per assegurar-se que de veritat ha après.

A l'activitat d'aquest nivell fareu la vostra pròpia regressió amb un full de càlcul: dibuixareu punts de "mida de pis → preu" i una línia que els resumeix. Aquesta línia és, en miniatura, el que fa la regressió amb milers de dades. Veureu amb els vostres ulls com la màquina "veu" la tendència.

En el proper nivell veurem els altres dos tipus d'aprenentatge: el no supervisat i el de reforç.

## 💡 Exemples pràctics
1. **Correu:** marqueu missatges com a "important" o "brossa"; la màquina classifica els nous igual que vosaltres.
2. **El banc:** classifica cada pagament com a "normal" o "sospitós", amb exemples etiquetats de milions de moviments.
3. **El preu de l'habitatge:** un web us estima el preu d'un pis comparant-lo amb milers de vendes reals (regressió).

## 🛠️ Activitat guiada
Pas 1. Obriu el navegador i aneu a Google Sheets (sheets.google.com) o obriu el vostre programa de fulls de càlcul.
Pas 2. A la columna A escriviu mides de pis: 40, 55, 70, 85, 100.
Pas 3. A la columna B escriviu preus inventats que creixin amb la mida: 80000, 100000, 130000, 160000, 190000.
Pas 4. Seleccioneu les dues columnes amb el ratolí.
Pas 5. Premeu "Insereix" i després "Gràfic".
Pas 6. Al gràfic, busqueu l'opció "Línia de tendència" i activeu-la.
Pas 7. Observeu: la línia resumeix la relació "més metres, més preu". Això és una regressió.
Pas 8. Penseu: amb aquesta línia, quin preu estimaríeu per a un pis de 60 metres? Aquesta estimació és exactament el que fa la IA amb milers de dades.

## ✍️ Exercicis d'autoavaluació
1. Expliqueu amb la metàfora del professor què és l'aprenentatge supervisat.
2. Quina és la diferència entre classificació i regressió?
3. Què és l'error i per a què serveix durant l'entrenament?
4. Què és el sobreajust i per què es prova el model amb dades noves?
5. Poseu un exemple quotidià de classificació i un altre de regressió.

**Respostes:** 1) És aprendre amb exemples que porten la seva resposta correcta, com un professor que corregeix els exàmens. 2) Classificar és decidir en quin grup entra alguna cosa (categoria); regressió és predir un número (quantitat). 3) És la diferència entre el que la màquina va predir i la resposta correcta; serveix per ajustar i millorar. 4) És quan la màquina memoritza els exemples en lloc d'aprendre el patró; per això es prova amb dades que no ha vist. 5) Classificació: filtrar brossa o reconèixer una cara; regressió: estimar el preu d'un pis o la temperatura de demà.

## ⚖️ Dimensió ètica
L'aprenentatge supervisat hereta les decisions del supervisor humà que etiqueta. Si les etiquetes són injustes (per exemple, crèdits aprovats segons el barri), la màquina aprèn aquesta injustícia i l'aplica a milers de persones. A més, un model que només es prova amb dades semblants pot semblar perfecte i fallar al món real. Exigir que els models es validin amb dades diverses és una responsabilitat ètica, no un luxe tècnic.

## 🔓 Eines obertes
- **Teachable Machine** (teachablemachine.withgoogle.com): entreneu un classificador supervisat amb les vostres pròpies fotos.
- **TensorFlow Playground** (playground.tensorflow.org): vegeu en directe com s'entrena una xarxa amb dades etiquetades.
- **Google Sheets** (sheets.google.com): gratuït, amb gràfics i línies de tendència per fer regressions simples.
- **Kaggle** (kaggle.com): concursos i dades per practicar classificació i regressió.
- **YouTube** (youtube.com): cerqueu "aprenentatge supervisat explicat" per a més vídeos.

## 🧠 Resum i pont
- L'aprenentatge supervisat aprèn amb exemples etiquetats: hi ha un professor.
- Classificar és posar en capses; regressió és predir números.
- La màquina corregeix l'error en cada exemple i millora.
- El sobreajust enganya: cal validar amb dades noves.
- Ja feu servir aprenentatge supervisat cada dia sense saber-ho.

En el nivell 11 veurem l'aprenentatge no supervisat i l'aprenentatge per reforç.
