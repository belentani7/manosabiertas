# Mòdul 5: Automatització i Integració — Nivell 12
## Idioma: CA · Dificultat: Tija
## Temps estimat: 3 hores

## 🎯 Objectiu del nivell
- Entendre com s'integra la intel·ligència artificial dins d'un flux.
- Fer que una automatització enviï un text a un model d'IA i rebi una resposta.
- Fer servir la IA per resumir, redactar o classificar dins d'un flux.
- Combinar variables, condicions i IA en una automatització.
- Ser conscient que la resposta de la IA sempre es revisa.

## 📖 Vocabulari essencial
| Terme | Explicació en paraules senzilles |
|---|---|
| Model d'IA | El programa que llegeix i genera textos, com un ajudant que pensa. |
| Petició (prompt) | La instrucció que donem a la IA: què volem que faci. |
| Resposta | El text que la IA retorna. |
| Resumir | Fer un text més curt amb l'essencial. |
| Classificar | Posar un text en una categoria: urgent, normal, spam. |
| Revisar | Llegir i comprovar el que ha fet la IA abans de fer-lo servir. |

## 📚 Lliçó principal
Fins ara les nostres automatitzacions movien dades d'un lloc a un altre i decidien amb condicions. Avui els ensenyarem una cosa nova: a pensar. Integrarem intel·ligència artificial dins d'un flux. És com posar a la cuina un ajudant que llegeix, resumeix i escriu: un ajudant molt ràpid que, això sí, cal revisar.

La intel·ligència artificial que fem servir avui són programes que han llegit moltíssim text i han après a entendre'l i generar-lo. Quan els donem una instrucció clara, responen amb text. Al mòdul 4 ja vam aprendre a demanar textos a la IA. Ara ensenyarem a la nostra automatització a demanar-los sola.

Com encaixa la IA en un flux? Imagina que cada matí arriben cinquanta correus al club. Volem un resum de cada un sense llegir-los tots. L'automatització agafa cada correu (variable), l'envia a la IA amb la petició "resumeix aquest text en tres línies", rep la resposta i l'envia al nostre correu o missatge. Aquest és el cicle: agafar, demanar, rebre, entregar.

A les eines d'integració, la IA és un pas més, com una altra baula de la cadena. Es busca l'aplicació del model d'IA (per exemple, OpenAI, Google Gemini, o els mòduls propis de Make), es tria l'esdeveniment "crea text" o "respon a una petició", i s'escriu la petició. Dins de la petició hi podem posar variables: el text del correu, el nom del soci, la pregunta que volem que respongui.

La petició, anomenada "prompt", és la instrucció. Una bona instrucció per a la IA és clara i concreta: "Resumeix el següent text en tres línies: [text del correu]". Com millor li expliquem què volem, millor respondrà. És com donar a un ajudant instruccions precises a la cuina: "pica les cebes a dauets", no "fes alguna cosa amb les cebes".

La IA també pot classificar. Podem demanar-li: "Digues si aquest missatge és urgent, normal o publicitat. Respon només amb una paraula: urgent, normal o publicitat". La resposta és una sola paraula que el flux pot fer servir en una condició. Així combinem la intel·ligència de la IA amb la lògica si-llavors del nivell 10.

Els resums són un altre gran ús. Un full amb cent comentaris es pot resumir amb la IA: "Digues-me els tres temes que més es repeteixen". L'automatització reuneix els comentaris, la IA els analitza i lliura el resultat. Estalviem hores de lectura i ens n'emportem l'essència.

Però aquí ve la lliçó més important: la IA s'equivoca. Pot inventar-se dades, malinterpretar un to o respondre amb una cosa absurda. Per això, el que produeix la IA sempre es revisa abans d'enviar-lo a altres persones o de prendre decisions. La IA és un ajudant, no el cap. El criteri final és humà.

Els nostres fluxos han de tractar la resposta de la IA com una variable més, que es guarda, es mostra i es revisa. Podem posar la resposta en un correu perquè la llegim abans de publicar, o fer-la servir en una condició. Però mai no deixem que el flux enviï a tothom una resposta d'IA sense passar per una revisió.

Convé començar amb usos senzills i de baix risc. Un resum per a un mateix, una classificació per ordenar, un esborrany de missatge que després revisem. No comencem enviant respostes d'IA a centenars de persones sense control. La prudència es guanya amb la pràctica.

Les eines d'integració ofereixen IA amb límits gratuïts. Per començar, el pla gratuït sol ser suficient. La IA consumeix una mica de "combustible" per cada petició, així que convé no demanar-li resums innecessaris. Cada petició costa alguna cosa, encara que sigui petita.

En acabar aquest nivell tindràs una automatització que pensa: llegeix un text, el resumeix o el classifica i te l'entrega. És el primer pas cap als agents amb IA que veurem a la banda Capçada. Recorda sempre: la màquina suggereix, la persona decideix.

## 💡 Exemples pràctics
1. **El resum del dia.** Cada matí, el flux reuneix els correus nous, la IA els resumeix en cinc línies i el resum arriba al telèfon de la coordinadora.
2. **La classificació d'incidències.** La IA llegeix cada incidència i respon "urgent", "normal" o "publicitat". La condició del flux envia les urgents a l'encarregat.
3. **L'esborrany de resposta.** Quan arriba una sol·licitud d'informació, la IA redacta un esborrany de resposta i el flux el guarda en un document per a revisió humana.

## 🛠️ Activitat guiada
Pas 1: Obre la teva eina d'integració i crea un escenari nou anomenat "Resum del dia" (o el teu tema).
Pas 2: Afegeix el disparador: per exemple, a Gmail, l'esdeveniment "Correu nou" o a Google Sheets "Observa files" amb un full de comentaris.
Pas 3: Afegeix el pas d'IA: busca "OpenAI" o "Intel·ligència artificial" als connectors, tria l'esdeveniment "Crea text" o "Completa" i connecta't amb el teu compte (et demanarà una clau o iniciarà sessió).
Pas 4: Al camp de la petició, escriu: "Resumeix el següent text en tres línies: [insereix la variable amb el text]".
Pas 5: Al camp de resposta o model, deixa l'opció recomanada o tria un model senzill i barat.
Pas 6: Afegeix una acció de missatge (Telegram): "Resum: [variable amb la resposta de la IA]".
Pas 7: Prova amb un text real (un correu de prova o un comentari). Mira el resum que arriba.
Pas 8: Revisa la resposta amb ull crític: és correcta? s'ha inventat alguna cosa? Apunta què li demanaries de manera diferent.
Pas 9: Activa l'escenari i decideix com el faràs servir: potser només per a tu, potser amb revisió abans de compartir.

## ✍️ Exercicis d'autoavaluació
1. Què fa la IA dins d'un flux? a) Llegeix i genera textos quan li ho demanem. b) Repara els cables. c) Encén l'ordinador.
2. Què és la petició o prompt? a) El nom de l'automatització. b) La instrucció clara que donem a la IA. c) Un tipus de botó.
3. Es pot fer servir la resposta de la IA en una condició? a) No, és només text. b) Sí, per exemple si respon "urgent" o "normal". c) Només a Make.
4. La IA sempre encerta? a) Sí, mai no falla. b) De vegades s'equivoca o s'inventa dades. c) Només falla els dilluns.
5. Què fem amb la resposta de la IA abans d'enviar-la a altres? a) L'enviem tal qual. b) La revisem sempre. c) L'esborrem.

Respostes: 1-a, 2-b, 3-b, 4-b, 5-b.

## ⚖️ Dimensió ètica
- La IA pot inventar-se dades o respondre amb falsa seguretat: mai no la facis servir per prendre decisions sobre persones sense revisió humana.
- No enviïs a la IA dades personals innecessàries: envia només el que cal per a la tasca.
- Els textos que genera la IA poden contenir biaixos o errors: revisa'ls, sobretot si van a moltes persones.
- No facis passar un text d'IA per escrit per una persona real sense dir-ho, si el context ho exigeix.
- La IA és una eina teva: decideix tu què li demanes, quan la fas servir i com revises la seva feina.

## 🔓 Eines obertes
| Eina | Per a què serveix | On aconseguir-la |
|---|---|---|
| OpenAI (a Make/Zapier) | Demanar resums i textos a la IA | openai.com (amb límits gratuïts) |
| Google Gemini | Model d'IA amb comptes gratuïts | gemini.google.com |
| Ollama | IA local i lliure, sense internet | ollama.com (gratuït) |
| Hugging Face | Models d'IA oberts | huggingface.co |

## 🧠 Resum i pont
La IA s'integra en el flux com un pas més: rep una petició amb variables, retorna una resposta que guardem i fem servir. Resumeix, classifica i redacta, però sempre cal revisar la seva feina. Ja llegim, decidim i pensem amb l'automatització. Al següent nivell aprendrem el control d'errors: què fa el flux quan alguna cosa falla.
