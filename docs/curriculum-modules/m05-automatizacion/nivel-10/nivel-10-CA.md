# Mòdul 5: Automatització i Integració — Nivell 10
## Idioma: CA · Dificultat: Tija
## Temps estimat: 2 hores

## 🎯 Objectiu del nivell
- Entendre a fons la lògica si-llavors que mou tota automatització.
- Reconèixer les condicions com a "camins" que tria el flux.
- Crear un filtre o condició a la teva eina d'integració.
- Comprendre què vol dir "si no" (la branca alternativa).
- Aplicar la lògica a una tasca real amb diverses possibilitats.

## 📖 Vocabulari essencial
| Terme | Explicació en paraules senzilles |
|---|---|
| Condició | La pregunta que el flux es fa: "es compleix això?". |
| Si-llavors | L'estructura lògica: "si es compleix la condició, llavors fes això". |
| Si no | L'alternativa: "si no es compleix, fes això altre". |
| Branca | Cada camí que pren el flux segons la condició. |
| Veritable/Fals | La resposta a la condició: es compleix o no es compleix. |
| Operador | La paraula que compara: "més gran que", "igual a", "conté". |

## 📚 Lliçó principal
Avui pugem al primer nivell de la banda Tija, on l'automatització es torna més intel·ligent. Fins ara els fluxos feien sempre el mateix: si arribava una dada, actuaven. Però la vida real no és tan simple: de vegades cal decidir. La lògica si-llavors és justament la manera d'ensenyar a la màquina a decidir.

Imaginem la cuina quan cuinem per a la família. Si els nens vénen a dinar, en fem més quantitat; si no, menys. Si fa fred, sopa; si no, amanida. El nostre cap pren aquestes decisions sense pensar-ho. A l'automatització, aquestes decisions s'escriuen com a condicions: "si passa això, fes això; si no, fes allò altre".

L'estructura és molt senzilla i es pot escriure així: "SI es compleix la condició, LLAVORS fer A; SI NO, fer B". És com una cruïlla al camí: segons el que veiem, girem a la dreta o a l'esquerra. El flux arriba a la cruïlla, es fa la pregunta i pren un camí o un altre.

A les eines d'integració, aquesta cruïlla s'anomena filtre, condició o router. El flux es pregunta alguna cosa sobre les dades que porta: "el correu és buit?", "l'import és més gran que 100?", "el missatge conté la paraula urgent?". La resposta és sempre veritable o fals: sí o no. No hi ha termes mitjans.

Cada resposta obre una branca. Si és veritable, el flux va per un camí i fa unes accions. Si és fals, va per l'altre. És com el reg de l'hort: si plou, no reguem; si no plou, reguem. La condició "ha plogut?" decideix entre dos camins.

Per escriure condicions fem servir els operadors, que són les paraules que comparen. "Més gran que" compara nombres: si l'import és més gran que cent. "Igual a" compara textos o nombres: si l'estat és igual a "pagat". "Conté" busca paraules dins d'un text: si el missatge conté "urgent". Cada operador és una eina de comparació.

Aprendre a llegir una condició és com aprendre a llegir un senyal de trànsit. El senyal diu "prohibit passar si peses més de 3 tones". Això és una condició amb un operador. La nostra automatització fa el mateix amb les dades: posa senyals que les dades han de respectar per passar.

Un exemple real: el full d'incidències del barri. Si la incidència diu "urgent", el flux avisa l'encarregat de seguida. Si no, la guarda per a la reunió setmanal. Una sola condició divideix el flux en dos camins amb dues destinacions diferents. Aquesta és la intel·ligència que hi afegim a la màquina.

Les condicions es poden encadenar. Després d'una primera pregunta, pot venir una segona: "és urgent? Si sí, és d'aquest barri o d'un altre?". Encadenar condicions permet afinar molt, com el metge que fa preguntes fins a arribar al diagnòstic. Cada pregunta descarta camins.

Cal anar amb compte amb un error típic: escriure condicions massa complicades. Una condició que ajunta moltes preguntes alhora és difícil de revisar i de corregir. Millor diverses condicions simples encadenades que una sola de complicada. És com partir una tasca llarga en passos curts: s'entén i s'arregla millor.

Una altra bona costum: que el flux mai no es quedi sense resposta. Si cap condició es compleix, què fa? Convé tenir una branca de "si no" que reculli el que no encaixa. És com el calaix de les "coses vàries" de casa: tot el que no té lloc propi, hi va, i mai no es perd.

En acabar aquest nivell sabràs llegir i escriure condicions, i entendràs que l'automatització no només repeteix: decideix. Aquest és el salt de la banda Tija. Al nivell següent aprendrem les variables: les dades que canvien i que la màquina pot guardar, comparar i fer servir.

## 💡 Exemples pràctics
1. **Les incidències del barri.** Si la incidència porta l'etiqueta "urgent", el flux avisa l'encarregat al moment; si no, la deixa per a l'informe setmanal.
2. **El pressupost del club.** Si la despesa d'una compra supera els 50 euros, el flux avisa el tresorer perquè l'aprovi; si no, ho registra sol.
3. **La reserva de la sala.** Si la sala és lliure, el flux confirma la reserva; si no, envia un missatge amb les hores alternatives disponibles.

## 🛠️ Activitat guiada
Pas 1: Obre la teva eina d'integració i crea un escenari nou amb el nom "Incidències del barri" (o el tema que prefereixis).
Pas 2: Afegeix el disparador: a Google Sheets, l'esdeveniment "Observa files", amb un full que tingui les columnes: Descripció, Prioritat (urgent/normal), Persona.
Pas 3: Afegeix un pas de condició: busca "Filtre" o "Router". La condició serà: la columna "Prioritat" és igual a "urgent".
Pas 4: A la branca veritable (si és urgent): afegeix l'acció d'enviar un missatge a Telegram amb el text "URGENT: [descripció]".
Pas 5: A la branca falsa (si no és urgent): afegeix una acció que enviï un correu a la teva adreça amb el text "Nova incidència normal: [descripció]".
Pas 6: Posa noms a les branques: "Camí urgent" i "Camí normal".
Pas 7: Prova amb dues files: una amb prioritat "urgent" i una altra amb "normal". Comprova que cadascuna pren el seu camí.
Pas 8: Afegeix una tercera condició si vols: per exemple, que les incidències buides no facin res (si la descripció és buida, aturar).
Pas 9: Revisa, activa i esborra les files de prova.

## ✍️ Exercicis d'autoavaluació
1. Quina estructura té la lògica si-llavors? a) "Si es compleix, llavors fes A; si no, fes B". b) "Fes sempre el mateix". c) "Pregunta a una altra persona".
2. Quina és la resposta a una condició? a) Veritable o fals. b) Depèn del dia. c) Número o lletra.
3. Què és una branca? a) Un arbre. b) Cada camí que pren el flux segons la condició. c) Un botó de color.
4. Què fa l'operador "conté"? a) Compara mides. b) Busca una paraula dins d'un text. c) Esborra dades.
5. Què convé fer amb el que no encaixa en cap condició? a) Deixar-ho fora i perdre-ho. b) Recollir-ho a la branca "si no". c) Esborrar la condició.

Respostes: 1-a, 2-a, 3-b, 4-b, 5-b.

## ⚖️ Dimensió ètica
- Una condició mal escrita pot discriminar sense voler: revisa que les teves regles no excloguin persones per error.
- Les decisions automàtiques sobre persones (aprovacions, altes) han de poder ser revisades per un humà.
- No facis servir condicions per ocultar informació a qui té dret a veure-la.
- Si el flux decideix per tu, assegura't que les regles són teves i que les entens.
- Un "si no" ben dissenyat evita que la gent es quedi sense resposta: fes que ningú no quedi fora.

## 🔓 Eines obertes
| Eina | Per a què serveix | On aconseguir-la |
|---|---|---|
| Make (mòdul Router) | Crear branques i condicions | make.com |
| Zapier (Filtres) | Condicions dins dels zaps | zapier.com |
| Google Sheets (SI) | Practicar si-llavors en un full | sheets.google.com |
| Node-RED | Lògica visual de codi obert | nodered.org (gratuït) |

## 🧠 Resum i pont
La lògica si-llavors ensenya a la màquina a decidir: si es compleix una condició, va per un camí; si no, per un altre. Fem servir operadors per comparar dades i branques per separar els camins. Ja no només repetim: decidim. Al següent nivell aprendrem les variables, les dades que canvien i que el flux guarda, compara i reutilitza.
