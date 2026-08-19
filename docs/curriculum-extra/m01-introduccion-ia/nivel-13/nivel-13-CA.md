# Mòdul 1: Introducció a la Intel·ligència Artificial — Nivell 13
## Idioma: CA · Dificultat: Tija
## Temps estimat: 2.5 hores

## 🎯 Objectiu del nivell
- Entendre què és un model de llenguatge gran (LLM).
- Comprendre que aquestes màquines prediuen la paraula següent, una darrere de l'altra.
- Reconèixer que de vegades inventen respostes (al·lucinacions) i per què passa.
- Saber què se'ls pot demanar i què convé verificar.
- Provar a la pràctica un assistent de text gratuït.

## 📖 Vocabulari essencial
| Terme | Explicació senzilla |
|---|---|
| Model de llenguatge | Una màquina entrenada per llegir i continuar text, com el corrector del mòbil però molt més gran. |
| Token | Un trosset de text (una paraula o part d'ella) que la màquina tracta com a unitat. |
| Predicció | L'aposta de la màquina per la paraula que té més probabilitat de venir. |
| Al·lucinació | Quan la màquina inventa una resposta falsa amb total seguretat. |
| Context | Tot el que es diu al model perquè respongui; a més context, millor resposta. |
| Paràmetres | Els "cargols" interns que el model va ajustar llegint milions de textos. |

## 📚 Lliçó principal
Segur que coneix el corrector del mòbil: escriu unes lletres i el telèfon li ofereix la paraula següent, o fins i tot completa frases senceres. Ara imaginin aquest corrector multiplicat per milions de llibres, articles, notícies i converses. Això és, en essència, un model de llenguatge gran.

En anglès s'anomenen LLM, per "Large Language Model". "Language" perquè treballen amb paraules i text. "Model" perquè són una versió simplificada d'alguna cosa real (aquí, del llenguatge humà). I "large" perquè es van entrenar amb quantitats de text que no cabrien en aquesta sala.

Com aprenen? De la mateixa manera que el corrector: llegint moltíssim text i aprenent quines paraules solen anar després de quines. Després de "bon dia, com", la paraula més probable és "estàs". La màquina no entén com nosaltres: calcula probabilitats. Però en calcular-les a escala enorme, el resultat s'assembla moltíssim a comprendre.

Pensin en una partida de pòquer amb paraules. Cada vegada que la màquina ha d'escriure, mira les paraules anteriors i aposta per la següent. N'escriu una, torna a mirar i n'aposta una altra. Així, paraula a paraula, construeix frases, paràgrafs i textos sencers. El que sembla un miracle és, en el fons, una aposta rere l'altra.

Aquesta manera de treballar explica les seves dues grans virtuts i el seu defecte més gran. La virtut: poden escriure sobre gairebé qualsevol tema amb un llenguatge natural i fluid. El defecte: com que només aposten per allò "probable", de vegades inventen coses que semblen certes però no ho són. Això s'anomena al·lucinació.

L'al·lucinació és com quan un veí explica una anècdota amb molta seguretat, tot i que no la va viure. El model no té mala intenció: simplement va ajuntar paraules que sonen bé juntes. Si li pregunteu per una cosa poc coneguda, pot "omplir" amb informació falsa que sona versemblant.

Un exemple: pregunteu a un assistent per un esdeveniment inventat, com una "Guerra del Sucre de 1842". Com que sona com una cosa que podria existir, el model pot respondre amb dates, llocs i noms que mai no van passar. No és una mentida amb malícia: és una aposta que va sortir malament.

Per això, la regla d'or amb aquests models és: el que escriuen no és sempre veritat. Serveixen meravellosament per redactar, resumir, traduir, corregir o explicar conceptes. Però per a dades importants (dates, xifres, cites, notícies) cal verificar en una font fiable.

Una altra cosa a tenir en compte: el context. Com més clar i complet sigui el que vostè li diu, millor respon. Si li dona mitja frase, fa mitja aposta; si li dona antecedents i detalls, fa apostes molt més encertades. És com parlar amb una persona molt llesta però que només sap el que vostè li explica.

També convé recordar que el model va aprendre de textos fets per persones, amb els seus encerts i prejudicis. Pot repetir estereotips o errors que hi havia als textos originals. No és una font de veritat suprema: és un mirall del llenguatge que la humanitat ha escrit.

Què se li pot demanar? Moltíssim: resumir un document llarg, explicar un terme mèdic en paraules simples, escriure una carta, traduir una recepta, preparar preguntes per a una reunió, o practicar un idioma. És un ajudant de conversa, no un oracle.

Què convé evitar? Donar-li dades personals o bancàries, explicar-li secrets, o demanar-li consells de salut, diners o lleis esperant que siguin infal·libles. Per a això hi ha els professionals, i el model és només una ajuda per pensar.

Aquests models són als assistents que fem servir cada dia: el xat del mòbil, el corrector, els traductors, els resums automàtics de les reunions. Cada cop són més a prop de la nostra vida, i entendre com funcionen ens treu por i ens dóna poder.

En el pròxim nivell veurem el seu cosí més creatiu: la intel·ligència artificial generativa, que no només escriu paraules, sinó que també crea imatges, sons i vídeos.

## 💡 Exemples pràctics
1. **Corrector del mòbil:** li ofereix la paraula següent segons el que ha escrit; un model de llenguatge és això, però amb milions de textos.
2. **Resum d'un document:** enganxi un text llarg a l'assistent i demani-li un resum de cinc línies; estalvia temps de lectura.
3. **Traducció:** escrigui una recepta en català i l'assistent la hi tradueixi a l'anglès, paraula a paraula.

## 🛠️ Activitat guiada
Pas 1. Obriu el navegador i entreu en un assistent gratuït com ChatGPT (chatgpt.com) o Gemini (gemini.google.com).
Pas 2. Escriviu: "Completa aquesta frase: el sol surt per l'" i observeu com la termina.
Pas 3. Ara demaneu-li: "Què és la fotosíntesi? Explica-m'ho com si tingués 60 anys i mai hagués estudiat ciències."
Pas 4. Comproveu que l'explicació és clara i després verifiqueu-la a la Viquipèdia: s'hi assembla?
Pas 5. Ara la prova de l'al·lucinació. Pregunteu: "Quin va ser el resultat de la Copa del Món de 2075?" (o un esdeveniment futur que no existeix).
Pas 6. Observeu com respon amb seguretat encara que no hagi pogut veure el partit. Això és una al·lucinació.
Pas 7. Demaneu-li que us resumi aquesta mateixa lliçó en tres frases. Compareu amb el que heu entès.
Pas 8. Escriviu una conclusió: quan confiar en l'assistent i quan verificar?

## ✍️ Exercicis d'autoavaluació
1. Què significa LLM i què fa aquesta màquina, en essència?
2. Expliqueu amb la idea del "pòquer de paraules" com escriu el model.
3. Què és una al·lucinació i per què passa?
4. Per què és important donar un bon context al model?
5. Quines dues coses convé evitar en fer servir un assistent de text?

**Respostes:** 1) Large Language Model: un model de llenguatge gran que prediu la paraula següent. 2) Mira les paraules anteriors i aposta per la següent, una rere l'altra. 3) És quan inventa una resposta falsa amb seguretat, perquè només ajunta paraules probables. 4) Perquè com més informació clara, millors són les seves apostes i la seva resposta. 5) Evitar donar-li dades personals o bancàries i no confiar sense verificar en consells de salut, diners o lleis.

## ⚖️ Dimensió ètica
L'al·lucinació converteix l'LLM en una eina poderosa però delicada: pot desinformar amb veu d'autoritat. Per això no s'ha de fer servir com a font per a notícies, cites o dades mèdiques sense verificació. A més, tot el que s'hi escriu es pot fer servir per entrenar models futurs: no compartiu secrets ni dades d'altres persones. I com que repeteix els prejudicis dels textos amb què es va entrenar, convé llegir les seves respostes amb el mateix judici crític que aplicaríem a un desconegut.

## 🔓 Eines obertes
- **ChatGPT** (chatgpt.com): assistent de text gratuït, ideal per practicar.
- **Gemini** (gemini.google.com): assistent de Google, també gratuït.
- **Mistral Le Chat** (chat.mistral.ai): alternativa europea gratuïta.
- **Viquipèdia** (wikipedia.org): la millor font per verificar el que diu l'assistent.
- **YouTube** (youtube.com): cerqueu "què és un LLM?" per veure explicacions animades.

## 🧠 Resum i pont
- Un LLM prediu la paraula següent, una rere l'altra, amb una fluïdesa enorme.
- No entén com nosaltres: aposta per allò més probable.
- Pot inventar respostes falses amb seguretat: són al·lucinacions.
- Com millor context donem, millors respostes obtenim.
- Verificar en fonts fiables és la regla d'or.

En el nivell 14, coneixerem la IA generativa: com les màquines creen imatges, música i vídeo, i com distingir allò real d'allò generat.
