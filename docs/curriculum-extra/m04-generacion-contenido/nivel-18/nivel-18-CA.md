# Mòdul 4: Generació de Contingut — Nivell 18
## Idioma: CA · Dificultat: Branca
## Temps estimat: 4 hores

## 🎯 Objectiu del nivell
- Entendre què és la locució: donar veu a un text.
- Conèixer el doblatge: posar una veu nova en un vídeo existent.
- Utilitzar la IA per generar veus amb diferents tons i estils.
- Aplicar una veu generada a un vídeo propi.
- Sincronitzar la veu amb les imatges i el text.

## 📖 Vocabulari essencial
| Terme | Explicació en paraules simples |
|---|---|
| Locució | La veu que llegeix un text per a un vídeo o presentació. |
| Doblatge | Substituir la veu d'un vídeo per una altra veu. |
| To | El caràcter de la veu: seriós, alegre, càlid, ferm. |
| Sincronització | Que la veu coincideixi amb els llavis, la imatge o el text. |
| Entonació | La música de la veu: pujar i baixar per expressar. |
| Veu sintètica | La veu generada per l'ordinador, com la del Piper. |

## 📚 Lliçó principal
La veu és l'ànima de l'audiovisual. Un mateix text llegit amb veu seriosa o amb veu alegre diu coses diferents. La locució és aquest art de donar veu a un text, i avui la IA ens permet generar veus variades, en diversos idiomes i amb tons diferents, sense estudis de gravació. És com tenir un equip de locutors a mà.

La locució s'utilitza en moltes coses de la vida: vídeos de receptes, presentacions del club, missatges de felicitació, contes per als néts. Abans calia gravar amb un micròfon, repetir si t'equivocaves i vigilar el soroll de fons. Amb la veu sintètica del Piper podem generar la locució en segons i repetir-la tantes vegades com vulguem.

Els tons de veu importen. El Piper ofereix veus diferents i podem triar el to amb les paraules del guió: frases curtes donen energia; frases llargues i suaus donen calma. L'entonació, el pujar i baixar de la veu, és la música que dóna vida a les paraules. La IA proposa la veu; nosaltres triem el sentiment.

El doblatge és un pas més: posar una veu nova en un vídeo que ja existeix. Podem doblar un vídeo casolà a l'altre idioma perquè la família que viu a fora l'entengui, o donar veu a una presentació sense so. Amb les eines que coneixem (extreure àudio, generar nova veu, tornar a unir) el doblatge és al nostre abast.

El procés de doblatge és senzill si el dividim en passos. Primer, traiem l'àudio del vídeo original. Segon, el transcrivim amb el Whisper per tenir el text (nivell 11). Tercer, corregim el text i el traduïm si cal. Quart, generem la nova veu amb el Piper. Cinquè, unim la nova veu amb el vídeo fent servir el FFmpeg (nivell 17). Cinc passos, i el vídeo parla en una altra veu o en un altre idioma.

La sincronització és el repte del doblatge. Idealment la veu nova ha d'encaixar amb el moviment dels llavis o amb el ritme del vídeo. No sempre és perfecte, però amb la pràctica ajustem la durada. Per a vídeos sense persones parlant (paisatges, receptes, presentacions) la sincronització és més fàcil i el resultat és molt bo.

El doblatge també és una eina d'accés. Un vídeo de l'ajuntament o del club es pot doblar a altres idiomes perquè més persones l'entenguin. Donar veu en l'idioma de qui escolta és un gest de respecte i d'inclusió. La tecnologia ens ajuda a fer ponts.

L'ètica del doblatge és especialment important. Doblar un vídeo aliè i fer-lo passar per original és engany. Doblar un vídeo d'una persona real amb una veu que diu coses que no va dir és manipulació. La IA dóna poder: fem-lo servir per crear, no per suplantar. Abans de doblar, preguntem: qui és l'autor, qui hi apareix, tinc permís?

Els vídeos de la nostra vida, els del club i els projectes propis són territori segur per al doblatge. A partir d'aquí, cura i permís. La regla és la mateixa de sempre: no facis als altres el que no vols que et facin.

La pràctica fa el mestre. Començarem doblant vídeos senzills i curts: una salutació, una recepta, un anunci del club. Amb cada doblatge aprenem a ajustar el to, la velocitat i la sincronització. La primera vegada costa; la desena surt rodada.

En acabar aquest nivell, sabrem donar veu a un text amb la IA, doblar un vídeo propi a un altre idioma i respectar els límits ètics del doblatge. La veu, la narració i el doblatge ja no tenen secrets per a nosaltres.

## 💡 Exemples pràctics
1. **El conte amb veu.** Carme genera amb el Piper la locució d'un conte per a la seva néta, amb to càlid i pausat, i l'uneix a les il·lustracions.
2. **L'anunci del club.** Pere dobla a l'anglès el vídeo de la festa del club perquè el germà que viu a Londres l'entengui.
3. **La presentació sense veu.** Lluís genera la locució de la seva presentació de l'hort i l'uneix al vídeo que va gravar en silenci.

## 🛠️ Activitat guiada
Pas 1: Tria un text curt teu (per exemple, la recepta del nivell 12 o una salutació).
Pas 2: Obre el Piper i genera la veu amb un to que encaixi amb el text (seriós o alegre).
Pas 3: Escolta la veu i, si no et convenç, canvia les paraules o la velocitat i torna a generar.
Pas 4: Tingues a punt un vídeo curt teu sense veu (per exemple, unes fotos amb moviment).
Pas 5: Obre la línia d'ordres i uneix la veu amb el vídeo fent servir el FFmpeg (ffmpeg -i video.mp4 -i veu.mp3 -c:v copy -c:a aac video_amb_veu.mp4).
Pas 6: Reprodueix el resultat i comprova que la veu se sent bé i va amb les imatges.
Pas 7: Si el vídeo original té so i el vols canviar, fes servir el FFmpeg per treure l'àudio vell abans (ffmpeg -i video.mp4 -an video_sense_so.mp4) i repeteix el pas 5.
Pas 8: Comparteix el vídeo doblat amb un familiar i explica-li com ho vas fer.

## ✍️ Exercicis d'autoavaluació
1. Què és la locució? a) La veu que llegeix un text per a un vídeo. b) La càmera. c) El muntatge.
2. Què és el doblatge? a) Posar una veu nova en un vídeo. b) Duplicar un fitxer. c) Pujar el volum.
3. Què és la sincronització en el doblatge? a) Que la veu coincideixi amb les imatges o els llavis. b) Que el vídeo sigui curt. c) Que no hi hagi veu.
4. Puc doblar un vídeo d'una altra persona sense permís? a) Sí, sempre. b) No, cal demanar permís i respectar l'autor. c) Només si és gratuït.
5. Per a què serveix doblar a l'altre idioma? a) Perquè més persones entenguin el vídeo. b) Per esborrar l'original. c) Per a res.

Respostes: 1-a, 2-a, 3-a, 4-b, 5-a.

## ⚖️ Dimensió ètica
- No doblis vídeos d'altres persones sense permís ni els facis passar per originals.
- No facis servir la veu generada per fer dir a algú coses que no va dir.
- Demana consentiment abans de doblar vídeos on apareixen persones reals.
- Indica quan un vídeo està doblat amb IA: la transparència genera confiança.
- Fes servir el doblatge per crear, incloure i traduir, mai per enganyar.

## 🔓 Eines obertes
| Eina | Per a què serveix | On aconseguir-la |
|---|---|---|
| Piper | Generar veus sintètiques en diversos idiomes | github.com/rhasspy/piper (gratuït) |
| FFmpeg | Treure l'àudio i unir la nova veu | ffmpeg.org (gratuït) |
| Whisper | Transcriure el vídeo original | github.com/openai/whisper (gratuït) |
| Audacity | Ajustar la durada i el to de la veu | audacityteam.org (gratuït) |

## 🧠 Resum i pont
La locució dóna veu a un text i el doblatge posa una veu nova en un vídeo. Amb el Piper, el Whisper i el FFmpeg generem veus amb tons diferents, traduïm i dob lem vídeos propis, sempre amb respecte i permís. En el següent nivell crearem el nostre primer pòdcast, unint narrativa, veu i música.
