# Mòdul 1: Introducció a la Intel·ligència Artificial — Nivell 07
## Idioma: CA · Dificultat: Arrel
## Temps estimat: 2 hores

## 🎯 Objectiu del nivell
- Entendre què és l'aprenentatge automàtic i en què es diferencia d'un programa normal.
- Comprendre que la màquina aprèn d'exemples, no de regles escrites.
- Reconèixer les dades d'entrenament com el "llibre de text" de la IA.
- Aplicar la frase "brossa entra, brossa surt" al món de les dades.
- Entrenar un model senzill amb una eina gratuïta.

## 📖 Vocabulari essencial
| Terme | Explicació senzilla |
|---|---|
| Aprenentatge automàtic | La manera de fer IA en què la màquina aprèn sola d'exemples, sense regles escrites. |
| Dades d'entrenament | Els exemples (fotos, textos, números) amb què la màquina aprèn. |
| Model | El resultat de l'aprenentatge: la "recepta apresa" que després es fa servir per predir. |
| Entrenar | El procés d'ensenyar la màquina mostrant-li exemples. |
| Predir | Fer una suposició amb el que ha après: "això és brossa", "aquesta és una cara". |
| Característica | Un detall que la màquina fa servir per decidir, com la mida o el color. |

## 📚 Lliçó principal
Fins ara hem vist què és la IA i de quins tipus existeix. Ara toca la pregunta més important: com aprenen les màquines? La resposta curta és: de la mateixa manera que aprenem a reconèixer coses quan som petits, però amb milions d'exemples. Això es diu aprenentatge automàtic, i és el motor de gairebé tota la IA moderna.

Penseu en com ensenyaríeu a un nen a distingir un gat d'un gos. No li donaríeu una llista de regles ("si les orelles són punxegudes i pesa menys de cinc quilos..."). Li mostraríeu molts gats i molts gossos, i el nen, sense saber-ho explicar, acaba distingint-los. L'aprenentatge automàtic fa exactament això, però en gran: li mostra milions de fotos etiquetades i el sistema troba els patrons tot sol.

Compareu amb la programació clàssica. En un programa tradicional, un humà escriu les regles i l'ordinador les segueix: "si la contrasenya és correcta, entra". Això funciona per a coses fixes, però és impossible escriure regles per reconèixer una veu, una cara o un idioma. Hi ha massa variacions. Per això es va canviar l'enfocament: en lloc de donar regles, es donen exemples.

Els exemples es diuen dades d'entrenament. Són el "llibre de text" de la màquina. Si volem que un sistema distingeixi correu brossa, li mostrem milers de correus marcats com a "brossa" o "important". Si volem que reconegui cares, li mostrem milers de fotos de cares. Com més i millors exemples, millor aprèn. És com aprendre a cuinar: com més receptes es proven, millor cuiner es és.

El resultat de l'entrenament es diu model. El model és la "recepta apresa": una col·lecció d'ajustos interns que resumeixen els patrons trobats. Un cop entrenat, el model ja no necessita els exemples: pot enfrontar-se a dades noves i predir. Quan el vostre correu decideix que un missatge nou és brossa, està fent servir un model ja entrenat.

La màquina aprèn fent servir característiques: petits detalls que ajuden a decidir. En un correu, la característica pot ser "té moltes paraules en majúscules" o "promet diners fàcils". En una foto, "té línies corbes" o "predomina el color taronja". El sistema aprèn quines característiques importen combinant milers d'exemples.

Hi ha una frase famosa en aquest món: "brossa entra, brossa surt". Vol dir que la qualitat de l'aprenentatge depèn de la qualitat de les dades. Si entrenem un sistema amb exemples incorrectes, incomplets o injustos, el sistema aprendrà aquests errors. És com ensenyar un nen amb un llibre de text ple d'errors: el nen aprendrà els errors.

Per això les dades d'entrenament són tan importants i tan delicades. Si mostrem a un sistema mil fotos de persones i el 90% són homes, aprendrà que "persona" s'assembla a un home. Això es diu biaix, i és un problema seriós del qual parlarem més endavant. La màquina no és neutra: hereta el que li ensenyem.

Com "aprèn" exactament la màquina? No ho fa com nosaltres, no "entén" els conceptes. Ajusta números. Imagineu milers de botons i manetes en una màquina enorme: cada exemple ben resolt puja un botó, cada exemple fallit el baixa. Amb milions d'exemples, la màquina ajusta les manetes fins que encerta gairebé sempre. És assaig i error a gran velocitat.

No cal saber matemàtiques per entendre la idea. La idea és: exemples més ajustos més correccions igual a un model que encerta. Vostè no necessita programar; només necessita comprendre el principi per saber per què la IA encerta i per què de vegades falla.

L'aprenentatge automàtic és a tot arreu. El correu que filtra brossa, el mòbil que reconeix la vostra veu, el banc que detecta fraus, la botiga que prediu què comprareu: tot funciona amb aquest mateix principi. Ja l'heu fet servir centenars de vegades sense saber-ho. Ara ja sabeu el nom del que hi ha al darrere.

Una diferència clau amb les persones: la màquina necessita molts exemples. Un nen veu quatre gats i ja els reconeix; un sistema necessita milers o milions. L'avantatge de la màquina és la velocitat: pot processar en hores el que a una persona li costaria anys. El desavantatge és que no generalitza tan fàcilment: un petit canvi en el context pot confondre-la.

A la pràctica, per fer servir la IA no cal entrenar models: la majoria ja vénen entrenats. Però entendre com aprenen ens fa usuaris més intel·ligents: sabem per què un sistema s'equivoca, per què "al·lucina" i per què convé revisar les dades. És com saber com funciona el motor: no cal arreglar-lo, però ajuda a entendre per què de vegades fa soroll.

En el proper nivell coneixerem les xarxes neuronals: el "cervell" artificial que hi ha dins d'aquests models.

## 💡 Exemples pràctics
1. **Correu electrònic:** marqueu un missatge com a "brossa"; el sistema aprèn del vostre exemple i a partir d'aleshores filtra els semblants.
2. **El banc:** el sistema que detecta que una compra en un altre país "és estranya" ha après de milions de moviments normals i anòmals.
3. **Fotos:** el mòbil que agrupa les fotos del vostre nét ha après a reconèixer la seva cara amb milers de fotos d'entrenament.

## 🛠️ Activitat guiada
Pas 1. Obriu el navegador i aneu a Teachable Machine (teachablemachine.withgoogle.com).
Pas 2. Premeu "Comença" i trieu "Projecte d'imatge".
Pas 3. Veureu dues classes: "Classe 1" i "Classe 2". Reanomeneu la primera com a "Mà aixecada" i la segona com a "Mà baixa".
Pas 4. Premeu "Webcam" a la classe 1 i, quan el mòbil o l'ordinador demani permís, permeteu-ho.
Pas 5. Aixecau la mà i premeu "Mantenir la gravació" uns segons per capturar exemples.
Pas 6. Repetiu a la classe 2 amb la mà avall. Ja teniu les vostres dades d'entrenament.
Pas 7. Premeu "Entrena el model" i espereu uns segons.
Pas 8. Proveu: aixecau la mà i vegeu com el model prediu "Mà aixecada". Acabeu d'entrenar la vostra primera IA.

## ✍️ Exercicis d'autoavaluació
1. En què es diferencia l'aprenentatge automàtic d'un programa tradicional?
2. Què són les dades d'entrenament i per què es comparen amb un llibre de text?
3. Què és un model i per a què serveix un cop entrenat?
4. Què vol dir "brossa entra, brossa surt"?
5. Com "aprèn" realment la màquina: entenent o ajustant?

**Respostes:** 1) Un programa tradicional segueix regles escrites per humans; l'aprenentatge automàtic aprèn patrons d'exemples. 2) Són els exemples amb què la màquina aprèn, com un llibre de text del qual estudia. 3) És el resultat de l'aprenentatge, una "recepta" interna que es fa servir per predir amb dades noves. 4) Que la qualitat de l'aprenentatge depèn de la qualitat de les dades: dades dolentes produeixen models dolents. 5) No entén conceptes: ajusta números mitjançant assaig i error fins a encertar.

## ⚖️ Dimensió ètica
Les dades d'entrenament no són neutres: reflecteixen el món, amb les seves injustícies. Si entrenem amb dades esbiaixades, la màquina discrimina, encara que ningú no li ho demanés. Per això, qui crea models té una gran responsabilitat, i qui els fa servir ha d'exigir transparència sobre quines dades es van fer servir. Com a usuari, recordeu: quan un sistema us falla injustament, el problema sol ser a les dades, no a la "màquina".

## 🔓 Eines obertes
- **Teachable Machine** (teachablemachine.withgoogle.com): entreneu el vostre propi model d'imatge, so o posa, sense programar.
- **Machine Learning for Kids** (machinelearningforkids.co.uk): apreneu creant projectes senzills.
- **Orange** (orangedatamining.com): programa gratuït per analitzar dades visualment, sense codi.
- **Kaggle** (kaggle.com): dades i concursos gratuïts per practicar.
- **YouTube** (youtube.com): cerqueu "què és l'aprenentatge automàtic" per a més exemples.

## 🧠 Resum i pont
- L'aprenentatge automàtic ensenya la màquina amb exemples, no amb regles.
- Les dades d'entrenament són el llibre de text; el model és la recepta apresa.
- "Brossa entra, brossa surt": les dades manen.
- La màquina no entén: ajusta números per assaig i error.
- Ja fem servir aprenentatge automàtic cada dia sense saber-ho.

En el nivell 08 coneixerem les xarxes neuronals, el "cervell" artificial de la IA moderna.
