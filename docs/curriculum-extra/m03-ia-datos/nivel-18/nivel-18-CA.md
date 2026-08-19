# Mòdul 3: IA Aplicada a les Dades — Nivell 18
## Idioma: CA · Dificultat: Branca
## Temps estimat: 4 hores

## 🎯 Objectiu del nivell
- Entendre què és l'AutoML: la tècnica que automatitza la creació de models.
- Conèixer plataformes d'AutoML: Teachable Machine, Google Vertex AI i similars.
- Entrenar un model complet de classificació amb imatges pròpies.
- Pujar un model al núvol i entendre què s'hi juga (dades, costos, responsabilitat).

## 📖 Vocabulari essencial
| Terme | Explicació en paraules simples |
|---|---|
| AutoML | Aprenentatge automàtic automàtic: la màquina tria el millor model per nosaltres. |
| Conjunt de dades | El grup complet d'exemples que fem servir per entrenar. |
| Hiperparàmetres | Els ajustos que l'AutoML prova i afina sol. |
| Núvol | Servidors remots que fan el càlcul en comptes del vostre ordinador. |
| API | La "porta" per la qual altres programes demanen prediccions al model. |

## 📚 Lliçó principal
Fins ara hem vist les idees: predir números, predir categories, entrenar, avaluar. Però potser heu pensat: "i jo com ho faig això sense saber programar?" La resposta és una de les revolucions més grans de la IA dels últims anys: l'AutoML. S'anomena així per "aprenentatge automàtic automàtic". En català: la màquina que entrena la màquina.

Què fa exactament l'AutoML? Recordeu que entrenar un model era ensenyar-lo amb exemples. Resulta que l'entrenament té molts ajustos per triar: quantes capes té la xarxa, amb quina rapidesa aprèn, quantes vegades repassa les dades. Abans, triar aquests ajustos era un ofici d'experts amb doctorat. L'AutoML fa que el mateix sistema provi milers de combinacions d'ajustos, es quedi amb la millor i ens torni el model guanyador. Vós només poseu les dades etiquetades i l'AutoML fa la resta.

Les eines d'AutoML vénen en dos gustos. El primer, per aprendre i per a projectes petits: plataformes visuals i gratuïtes com Teachable Machine, on ja vam entrenar al nivell 17. El segon, per a empreses i projectes seriosos: plataformes professionals al núvol com Google Vertex AI, que permeten entrenar models amb milions d'exemples, guardar-los i demanar-los prediccions a través d'una "API" (una porta per la qual altres programes fan preguntes al model). Aquest curs fa servir el primer gust; el segon el coneixerem per entendre el món real.

En aquest nivell farem una cosa molt concreta: entrenar un model amb Teachable Machine que distingeixi entre dos o tres objectes de casa nostra. És el mateix procediment del nivell 17, però ara amb una diferència: ho farem amb més classes, amb més fotos i comprovant la qualitat del model com faria un professional. Perquè entrenar és fàcil; avaluar bé és l'ofici.

El primer pas d'un bon projecte d'AutoML és planificar el conjunt de dades. La regla d'or: més varietat, no més repetició. Si feu 100 fotos de la tassa sempre igual, des del mateix angle i amb la mateixa llum, el model aprèn de memòria i falla al primer canvi. Millor 30 fotos variades: de prop, de lluny, girada, amb la tassa plena i buida, amb llum de dia i de nit. La varietat és el menjar del model: sense varietat, la màquina no aprèn "tassa", aprèn "aquesta tassa exactament així".

El segon pas és equilibrar les classes. Si entrenem amb 100 fotos de la tassa i 5 del comandament, el model serà expert en tasses i toix amb comandaments. El nombre d'exemples per classe ha de ser semblant. Aquesta és la mateixa lliçó de la "classe rara" del nivell 17, però ara aplicada des de l'origen: la injustícia s'evita a la recollida, no s'arregla després.

El tercer pas, professional, és reservar una part de les dades per a l'avaluació. Quan premeu "Entrena el model" a Teachable Machine, l'eina ja fa això per vós internament: guarda unes fotos de cada classe que el model mai no veu, i fa servir només les altres per aprendre. Després prova amb les reservades i us diu quant encerta. Si vós mateix separeu 10 fotos de cada classe abans d'entrenar, podríeu fer l'avaluació a mà: entrenar sense aquestes fotos i després provar-hi. Aquest és el ritual dels professionals, i ja l'enteneu.

Ara la pregunta que preocupa tothom al núvol: què passa amb les meves dades quan entreno en una plataforma? Regla senzilla: en eines gratuïtes d'aprenentatge com Teachable Machine, les vostres fotos s'usen per entrenar el vostre model; en plataformes professionals com Vertex AI, signeu un contracte que diu qui és el propietari de què i on es guarden les dades. Abans de pujar qualsevol cosa, llegiu on s'emmagatzemen les vostres dades i qui les pot veure. Les dades de persones —fotos, veus, noms— mereixen la mateixa cura que un document important.

Una altra cosa que s'hi juga al núvol és els diners. Entrenar models petits a Teachable Machine és gratuït; entrenar a Vertex AI costa diners per hora de càlcul. El núvol no és un favor de l'univers: és llogar el múscul d'uns ordinadors aliens. Per a projectes d'aprenentatge, la versió gratuïta n'hi ha prou. La lliçó de gestió: comenceu sempre pel gratuït, i quan el projecte sigui seriós, pressuposteu el cost del núvol com una despesa més.

Quan acabeu d'entrenar, Teachable Machine us ofereix un botó meravellós: "Exporta el model". Podeu descarregar el model, o demanar un enllaç per compartir-lo. Aquest model, un cop exportat, funciona sense internet: és al vostre ordinador. Podeu fins i tot posar-lo en una pàgina web o en un telèfon. El que heu entrenat ja no necessita la plataforma: és un model, una petita màquina que viu on vós la porteu.

Amb aquest nivell tanquem la part pràctica de la banda Branca. Vós ja sabeu: què és predir, com es prediu un número, com es prediu una categoria i com entrenar un model sense escriure una línia de codi. Al proper nivell ve la part que posa el cor en l'assumpte: l'ètica de les dades. Perquè ja teniu el poder de crear models, i el poder sense responsabilitat és perillós.

## 💡 Exemples pràctics
### Exemple 1: El necesser de l'àvia
L'àvia entrena un model per distingir "claus", "ulleres" i "res". Amb 40 fotos de cada, el model li diu a l'instant on és el que busca. AutoML a casa.

### Exemple 2: La fàbrica
Una fàbrica fa servir Vertex AI AutoML per classificar peces en "bones" i "defectuoses" a partir de fotos de la línia de producció. El model s'entrena amb 10.000 fotos etiquetades per tècnics.

### Exemple 3: L'ONG
Una ONG entrena un model per comptar cotxes en fotos de satèl·lit d'un campament i estimar quantes famílies necessiten ajuda. AutoML gratuït servint una causa.

## 🛠️ Activitat guiada
Pas 1. Reuneix dos objectes de casa teva (per exemple, una tassa i un comandament) i tria un lloc amb bona llum.
Pas 2. Obriu https://teachablemachine.withgoogle.com i creeu un projecte d'imatges amb 3 classes: tassa, comandament i "res".
Pas 3. Captureu 40 fotos variades de la tassa: de prop, de lluny, girada, amb llum i sense llum. Moveu la càmera entre toma i toma.
Pas 4. Captureu 40 fotos variades del comandament, igual de variades.
Pas 5. Captureu 40 fotos del fons sense objecte per a la classe "res".
Pas 6. Premeu "Entrena el model" i espereu que acabi.
Pas 7. Comproveu la qualitat: proveu cada objecte des d'angles nous. Anoteu quants encerts de cada 10.
Pas 8. Feu la "prova de l'examen": mostreu l'objecte amb llum diferent o posició rara. El model es manté o trontolla?
Pas 9. Reflexioneu i escriviu: si afegiu només 5 fotos del comandament, què creieu que passarà amb la seva exactitud? Proveu-ho si voleu.
Pas 10. Premeu "Exporta el model" i deseu l'opció que preferiu. Escriviu una conclusió: "l'AutoML em permet entrenar models sense programar, però la qualitat depèn de la varietat de les meves fotos".

## ✍️ Exercicis d'autoavaluació
1. Què vol dir AutoML?
2. Quins dos gustos d'eines d'AutoML existeixen?
3. Quina és la regla d'or del conjunt de dades?
4. Per què les classes s'han d'equilibrar?
5. Què cal mirar abans de pujar dades a una plataforma al núvol?

Respostes: 1. Aprenentatge automàtic automàtic: la màquina tria i afina el millor model per nosaltres. 2. Visuals i gratuïtes (Teachable Machine) i professionals al núvol (Vertex AI AutoML). 3. Més varietat, no més repetició: fotos variades perquè el model generalitzi. 4. Perquè si una classe té molts més exemples, el model l'aprèn millor i descuida les altres. 5. On es guarden les dades, qui les pot veure i quant costa el càlcul.

## ⚖️ Dimensió ètica
L'AutoML abaixa la barrera de la IA: avui qualsevol persona pot entrenar models que reconeixen cares, veus o gestos. Aquest poder comporta dos deures. Primer, el consentiment: si entreneu un model amb fotos o veus d'altres persones, elles ho han de saber i acceptar. Segon, la proporcionalitat: no cal reconèixer cada veí per comptar els cotxes d'un carrer. Pregunteu sempre: quin mínim de dades necessito per assolir el meu objectiu sense envair ningú? L'AutoML és una eina magnífica; la responsabilitat de com s'usa continua sent nostra.

## 🔓 Eines obertes
| Eina | Què és i per a què serveix | On trobar-la |
|---|---|---|
| Teachable Machine | AutoML gratuït amb fotos, sons i postures | https://teachablemachine.withgoogle.com |
| Google Vertex AI | AutoML professional al núvol | https://cloud.google.com/vertex-ai |
| Machine Learning for Kids | Projectes guiats d'AutoML educatiu | https://machinelearningforkids.co.uk |
| Hugging Face | Models ja entrenats per provar i fer servir | https://huggingface.co |

## 🧠 Resum i pont
- L'AutoML automatitza la creació de models: vós poseu les dades, la màquina posa l'ofici.
- La qualitat depèn de la varietat i l'equilibri de les vostres dades, no de la quantitat repetida.
- Al núvol s'hi juguen les vostres dades i els vostres diners: llegiu-ho abans de prémer el botó.
- Un model entrenat s'exporta i viu on vós vulgueu.
Al proper nivell arriba l'ètica de les dades: perquè ja teniu el poder de crear models, i el poder sense responsabilitat és perillós.
