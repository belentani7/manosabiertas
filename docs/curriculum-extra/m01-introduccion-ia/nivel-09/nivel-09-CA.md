# Mòdul 1: Introducció a la Intel·ligència Artificial — Nivell 09
## Idioma: CA · Dificultat: Arrel
## Temps estimat: 2 hores

## 🎯 Objectiu del nivell
- Entendre què són les dades d'entrenament i d'on surten.
- Comprendre per què la quantitat i la qualitat de les dades importen més que la tècnica.
- Conèixer la feina d'etiquetar dades i qui la fa.
- Reflexionar sobre la privacitat i els drets d'autor de les dades.
- Crear a mà un petit conjunt de dades per veure com funciona l'aprenentatge.

## 📖 Vocabulari essencial
| Terme | Explicació senzilla |
|---|---|
| Conjunt de dades | Una col·lecció ordenada d'exemples amb què s'entrena un model. |
| Etiqueta | La "resposta correcta" que es posa a cada exemple perquè la màquina aprengui. |
| Etiquetador | La persona que revisa i classifica els exemples, sovint sense aparèixer enlloc. |
| Qualitat de les dades | Com de bé representen els exemples la realitat que volem ensenyar. |
| Drets d'autor | Els drets del creador sobre la seva obra; les dades també en tenen. |
| Consentiment | El permís d'una persona per fer servir les seves dades; sense ell, no s'haurien de fer servir. |

## 📚 Lliçó principal
Ja sabem que les màquines aprenen d'exemples. Però d'on surten aquests exemples? En aquest nivell obrirem la capsa i mirarem la matèria primera: les dades d'entrenament. Són la base de tot, i entendre-les és entendre els punts forts i febles de la IA actual.

Un conjunt de dades és, en essència, una llista ordenada d'exemples amb la seva resposta correcta. Per exemple, per ensenyar a un sistema a distingir pomes de peres, el conjunt tindria milers de fotos, cadascuna amb la seva etiqueta: "poma" o "pera". El model estudia la llista, troba els patrons i aprèn. Sense llista, no hi ha aprenentatge.

Qui posa les etiquetes? Darrere de gairebé tota la IA moderna hi ha un exèrcit invisible de persones que miren imatges, àudios i textos i els classifiquen. Són els etiquetadors. És una feina real, repetitiva i de vegades mal pagada, que gairebé mai no surt a les notícies. Cada vegada que un sistema reconeix la vostra veu o un senyal de trànsit, algú va passar hores ensenyant-li amb exemples.

És bo saber-ho per dues raons. Primer, per justícia: la IA que admirem no neix sola; neix del treball humà. Segon, per humilitat: si les etiquetes tenen errors, la màquina aprendrà aquests errors. Els etiquetadors, per molt acurats que siguin, no són perfectes, i les seves fallades es colen als models.

D'on surten les dades? De moltes parts. Els científics fan servir conjunts públics com l'ImageNet, amb milions de fotos classificades. Les empreses fan servir les seves pròpies dades: compres, cerques, missatges. I els grans models de llenguatge s'entrenen amb una quantitat gegantina de text tret d'internet: pàgines web, llibres, fòrums. Tot aquest text és la seva "biblioteca".

Aquí apareix un debat important: els drets d'autor. Pot una empresa entrenar un model amb els llibres i articles d'altri sense pagar? És una discussió oberta en tribunals i parlaments. El punt clau per a nosaltres és aquest: les dades no són gratuïtes ni neutres. Algú les va crear, i fer servir les dades d'altri sense permís té conseqüències.

Una altra cosa que heu de saber: la quantitat importa, però la qualitat importa més. Un conjunt petit i net acostuma a produir millors models que un de gegantí ple d'errors. És com estudiar: memoritzar deu mil apunts confusos és pitjor que estudiar bé cent pàgines clares. Les millors empreses inverteixen molt a netejar i revisar les seves dades.

La qualitat inclou la varietat. Si entrenem un reconeixedor de fruites només amb fotos perfectes, fallarà amb fotos reals: amb ombres, poca llum, de costat. El món real és variat, i el model ha de veure aquesta varietat per no fallar. Per això es diu que les dades han de representar el món que volem gestionar, amb tota la seva diversitat.

I aquí ve la part més delicada: la privacitat. Moltes dades personals — fotos, veus, missatges — es fan servir per entrenar models, de vegades sense que la persona ho sàpiga o ho consenti. La vostra cara pot haver "ajudat" a entrenar un sistema de reconeixement sense que ho sabéssiu. El consentiment hauria de ser la regla, no l'excepció.

Pensem en la vostra vida diària. Quan el mòbil us suggereix respostes, quan el banc decideix si us dona un crèdit, quan el metge fa servir un sistema de diagnòstic: al darrere hi ha dades d'entrenament que poden incloure persones com vosaltres. Preguntar-se d'on van sortir aquestes dades no és paranoia: és ciutadania digital.

Hi ha un detall curiós i preocupant alhora: els models s'entrenen amb dades del passat, però viuen en el present. Si el món canvia — una moda, una llei, una tecnologia nova — el model es queda desactualitzat. És com un empleat que va aprendre l'ofici fa vint anys i no s'ha actualitzat. Mantenir els models al dia és una feina constant.

També hi ha un cercle curiós: la IA genera contingut nou, i aquest contingut es pot fer servir com a dades per entrenar la IA següent. És com fotocopiar fotocòpies: cada còpia perd qualitat. Els experts ja parlen del risc que les IA entrenades amb contingut d'altres IA degradin els seus resultats. La matèria primera es contamina.

Conèixer les dades d'entrenament canvia la mirada: la IA no és una capsa màgica, és una esponja que absorbeix el que li donem. Si li donem bones dades, bones respostes; si li donem dades brutes, respostes brutes. Per això la responsabilitat de qui crea els models és enorme, i la curiositat de qui els fa servir també.

En el proper nivell canviarem de banda: deixarem l'Arrel i entrarem a la Tija, veient com aprenen les màquines segons el tipus d'aprenentatge.

## 💡 Exemples pràctics
1. **Al supermercat:** el lector de preus de fruita per imatge es va entrenar amb milers de fotos etiquetades per persones reals.
2. **Al banc:** el sistema de crèdits es va entrenar amb dades històriques de préstecs; si aquestes dades tenien biaixos, el sistema els hereta.
3. **Amb el metge:** un sistema que llegeix radiografies es va entrenar amb milers de plaques anotades per radiòlegs.

## 🛠️ Activitat guiada
Pas 1. Agafeu un paper i un bolígraf.
Pas 2. Dibuixeu una taula amb quatre columnes: "Exemple", "Color", "Forma", "És poma?".
Pas 3. Escriviu sis files: tres pomes i tres peres, amb característiques senzilles (vermell, verd, rodona, allargada...).
Pas 4. Repasseu: quines característiques veieu que separen pomes de peres en els vostres exemples?
Pas 5. Afegiu una fila "estranya": una poma verda amb forma allargada. Què creieu que respondria el model?
Pas 6. Penseu: què passaria si els vostres sis exemples fossin totes pomes vermelles? El model no sabria reconèixer peres.
Pas 7. Compareu amb el món real: a la vida hi ha més varietat que als vostres exemples, per això calen milers de fotos.
Pas 8. Opcional: obriu el Kaggle (kaggle.com), cerqueu "fruits" i vegeu com són els conjunts de dades reals amb milers d'etiquetes.

## ✍️ Exercicis d'autoavaluació
1. Què és un conjunt de dades i què conté cada exemple?
2. Qui fa la major part de l'etiquetatge de dades i per què importa conèixer-ho?
3. Què és més important, la quantitat o la qualitat de les dades? Per què?
4. Quina relació tenen els drets d'autor amb les dades d'entrenament?
5. Quin risc té entrenar una IA amb contingut generat per altres IA?

**Respostes:** 1) És una llista d'exemples amb la seva resposta correcta (etiqueta) amb què s'entrena un model. 2) Persones etiquetadores, una feina real i sovint invisible; conèixer-la ajuda a entendre d'on ve la IA i a valorar la seva feina. 3) La qualitat: un conjunt petit i net ensenya millor que un de gegantí i brut. 4) Les dades creades per altres (llibres, articles, fotos) tenen drets; fer-les servir sense permís és un debat obert als tribunals. 5) Que el contingut es degrada, com fotocopiar fotocòpies: els models entrenats amb contingut d'altres IA perden qualitat.

## ⚖️ Dimensió ètica
Les dades d'entrenament amaguen decisions ètiques de gran abast. Es van fer servir dades de persones sense el seu consentiment? Es va pagar amb justícia els etiquetadors? Les dades representen tota la societat o només uns quants? Darrere de cada model hi ha eleccions humanes que poden discriminar o excloure. Exigir transparència sobre les dades no és tècnica: és exigir que la IA es construeixi amb dignitat i justícia.

## 🔓 Eines obertes
- **Kaggle** (kaggle.com): milers de conjunts de dades públics i gratuïts per explorar.
- **Google Dataset Search** (datasetsearch.research.google.com): cercador de conjunts de dades públics.
- **ImageNet** (image-net.org): el famós conjunt de milions d'imatges classificades.
- **OpenML** (openml.org): plataforma oberta de dades d'aprenentatge automàtic.
- **Common Crawl** (commoncrawl.org): l'arxiu obert de pàgines web usat per entrenar molts models.

## 🧠 Resum i pont
- Les dades d'entrenament són la llista d'exemples amb etiquetes de què la màquina aprèn.
- Al darrere hi ha una feina humana invisible: els etiquetadors.
- La qualitat i la varietat importen més que la quantitat.
- Les dades tenen drets d'autor i plantegen dubtes de privacitat.
- La IA és una esponja: absorbeix el que li donem.

En el nivell 10 entrem a la banda "Tija": com aprenen les màquines (supervisat, no supervisat i reforç).
