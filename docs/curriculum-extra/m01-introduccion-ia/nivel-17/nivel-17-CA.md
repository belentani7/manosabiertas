# Mòdul 1: Introducció a la Intel·ligència Artificial — Nivell 17
## Idioma: CA · Dificultat: Branca
## Temps estimat: 3 hores

## 🎯 Objectiu del nivell
- Entendre què és un prompt i per què és una habilitat que s'aprèn.
- Conèixer les tècniques bàsiques: context, rol, format i exemples.
- Aprendre a demanar respostes pas a pas.
- Millorar una resposta iterant: tornar a preguntar, corregir, refinar.
- Comparar a la pràctica un prompt pobre amb un de ben construït.

## 📖 Vocabulari essencial
| Terme | Explicació senzilla |
|---|---|
| Prompt | El missatge que escriviu per demanar alguna cosa a una IA de text. |
| Rol | Dir a la IA qui ha de ser en respondre: un tutor, un metge, un comptable. |
| Format | Com voleu la resposta: llista, taula, carta, resum de tres línies. |
| Exemples (few-shot) | Mostrar-li un o dos exemples del tipus de resposta que espereu. |
| Cadena de raonament | Demanar que pensi pas a pas abans de donar la resposta final. |
| Iterar | Tornar a preguntar afinant el que demaneu, per millorar cada intent. |

## 📚 Lliçó principal
Saber parlar amb una IA és una habilitat, com saber donar indicacions a una persona nova que comença a treballar amb vós. Si li dieu "fes-me alguna cosa bonica", obtindreu un resultat improvisat. Si li expliqueu el context, l'objectiu i el format, obtindreu una feina de qualitat. Aprendre a demanar bé s'anomena prompting.

Penseu en un assistent nou en una oficina. És molt capaç, però no us coneix ni coneix l'empresa. Si li encarregueu "escriu una carta", escriurà una cosa genèrica. Si li dieu per a qui és, quin to ha de fer servir, què ha d'incloure i com voleu que acabi, la carta serà útil des del primer intent. Amb la IA passa igual.

La primera tècnica és donar context. En comptes de "resume això", digueu: "sóc un avi que vol entendre aquest article mèdic; resumeix-lo per a algú que no sap res de medicina". El model farà servir aquestes pistes per triar el to i el nivell. El context és la brúixola de la resposta.

La segona tècnica és assignar un rol. "Actua com un comptable amable", "com un professor d'història", "com un veí que coneix bé el barri". El rol diu a la màquina des de quin punt de vista ha de respondre. No és màgia: és guiar com tria les paraules.

La tercera tècnica és demanar un format concret. Si voleu comparar opcions, demaneu "una taula amb tres columnes". Si voleu decidir, demaneu "una llista de pros i contres". Si voleu recordar, demaneu "cinc frases curtes". El format transforma una resposta oberta en una eina que us serveix.

La quarta tècnica és donar exemples. Si espereu un tipus concret de resposta, mostreu-li un: "Com aquest exemple, però sobre el meu cas: [exemple]". Un exemple val més que mil descripcions, per a persones i per a màquines. És com ensenyar una recepta: millor veure-la feta que llegir la teoria.

La cinquena tècnica és demanar que pensi pas a pas. Si demaneu un diagnòstic d'un problema domèstic, digueu: "pensa primer què pot causar aquest problema, després descarta les causes menys probables i al final dóna'm la causa més probable amb la seva solució". Així reduïu el risc de saltar a una resposta equivocada.

La sisena tècnica, i potser la més valuosa, és iterar. Rarament la primera resposta és perfecta. La bona notícia és que podeu demanar més: "més curt", "amb un to més proper", "en un altre format", "senyala quina part és la més important". Cada iteració afina el resultat, com quan un sastre ajusta un vestit.

També convé saber que la IA no recorda entre converses (llevat que ho indiquin) i que cada pregunta nova comença de zero. Per això convé posar tot el context en un sol missatge, en comptes d'anar deixant engrunes pel camí.

Un error comú és esperar la resposta perfecta a la primera. Fins i tot els professionals de la IA iteren diverses vegades. Penseu en el prompting com en una conversa: vós guieu, corregiu, matiseu, i la resposta millora. No és endevinació; és direcció.

Un altre error és donar-li massa llibertat. Si pregunteu "què faig amb els meus diners?", rebreu consells genèrics. Si doneu un context clar i demaneu un format concret, rebreu alguna cosa útil. La precisió de la pregunta és la precisió de la resposta.

A la vida pràctica, el prompting us serveix per a tot: escriure cartes formals, preparar preguntes per al metge, resumir documents, traduir missatges, organitzar llistes de la compra o planificar un àpat de família. És una eina universal.

I com tota eina, té límits: no s'hi han de demanar dades personals pròpies ni d'altri, no s'hi ha de confiar per a decisions greus sense verificar, i cal saber que de vegades s'equivoca amb molta elegància. El prompting millora la resposta, però no la garanteix.

En el pròxim nivell veurem la IA multimodal: màquines que veuen imatges, senten veus i entenen vídeos alhora.

## 💡 Exemples pràctics
1. **Carta formal:** en comptes de "escriu una carta", demaneu: "actua com un comptable, escriu una carta formal a l'ajuntament demanant un certificat, amb to respectuós i una comiat cortès".
2. **Resum:** en comptes de "resumeix", demaneu: "resumeix aquest document en 5 vinyetes, cadascuna d'una línia, pensat per a la meva mare que no coneix el tema".
3. **Comparació:** demaneu: "compara'm dos mòbils en una taula de tres columnes: preu, bateria i per a qui és millor".

## 🛠️ Activitat guiada
Pas 1. Obriu un assistent gratuït (ChatGPT a chatgpt.com o Gemini a gemini.google.com).
Pas 2. Escriviu un prompt pobre: "escriu alguna cosa sobre la salut". Observeu la resposta genèrica.
Pas 3. Ara escriviu un prompt complet: "Actua com un metge de família amable. Vull una llista de 5 consells per dormir millor. Cada consell en una frase senzilla, sense paraules tècniques, pensada per a una persona de 60 anys."
Pas 4. Compareu les dues respostes: quina va ser més útil? Què va canviar al prompt?
Pas 5. Iteu sobre la bona resposta: demaneu "escurça cada consell a menys de 10 paraules" i observeu com millora.
Pas 6. Afegiu un exemple: "Per exemple, com aquest: 'Apaga el mòbil una hora abans'. Fes-me els altres quatre amb el mateix estil."
Pas 7. Demaneu que pensi pas a pas: "abans de respondre, pensa quines causes fan que dormi malament a aquesta edat i descarta les menys probables".
Pas 8. Escriviu una conclusió: quines tres tècniques us van donar el millor resultat?

## ✍️ Exercicis d'autoavaluació
1. Què és un prompt i per què es considera una habilitat?
2. Expliqueu amb l'exemple de l'assistent nou a l'oficina per què el context importa.
3. Què significa assignar un rol i donar un format?
4. Què és iterar i per què és la tècnica més valuosa?
5. Quins límits cal recordar en fer servir prompting?

**Respostes:** 1) És el missatge que escrivim per demanar alguna cosa a una IA; és una habilitat perquè com millor demanem, millor respon. 2) L'assistent no ens coneix ni coneix l'empresa; si li donem context, la carta és útil des del primer intent. 3) Assignar un rol és dir-li qui ha de ser en respondre; donar un format és dir-li com volem la resposta (llista, taula, carta). 4) Tornar a preguntar afinant el que es demana per millorar cada intent; gairebé mai la primera resposta és perfecta. 5) No demanar dades personals, no confiar sense verificar en decisions greus, i saber que de vegades s'equivoca amb molta seguretat.

## ⚖️ Dimensió ètica
El prompting revela el que compartim amb la IA: no s'hi han d'escriure dades personals, bancàries ni d'altres persones. A més, compte amb el "prompt injection": una pàgina web pot amagar instruccions que manipulen l'assistent; si apareix alguna cosa estranya, no la seguiu. I recordeu que la responsabilitat de la resposta final és sempre vostra: la IA proposa, vós decidiu i verifiqueu.

## 🔓 Eines obertes
- **ChatGPT** (chatgpt.com): assistent gratuït per practicar tècniques de prompting.
- **Gemini** (gemini.google.com): alternativa gratuïta de Google.
- **Mistral Le Chat** (chat.mistral.ai): opció europea gratuïta.
- **Learn Prompting** (learnprompting.org): curs obert i gratuït de tècniques de prompting.
- **YouTube** (youtube.com): cerqueu "tècniques de prompting" per veure demostracions.

## 🧠 Resum i pont
- Demanar bé és una habilitat que s'aprèn.
- Context, rol, format i exemples guien la resposta.
- Demanar que pensi pas a pas redueix errors.
- Iterar és la tècnica més valuosa: cada intent afina.
- La IA proposa; vós decidiu i verifiqueu.

En el nivell 18 descobrirem la IA multimodal: màquines que veuen, senten i llegeixen alhora.
