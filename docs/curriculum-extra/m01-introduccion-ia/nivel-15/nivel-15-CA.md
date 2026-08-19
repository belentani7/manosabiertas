# Mòdul 1: Introducció a la Intel·ligència Artificial — Nivell 15
## Idioma: CA · Dificultat: Branca
## Temps estimat: 3 hores

## 🎯 Objectiu del nivell
- Entendre que una IA no és només el model, sinó un sistema amb diverses parts.
- Identificar les parts bàsiques: dades d'entrada, processament i resultat.
- Comprendre on es calcula la IA (al telèfon o al núvol).
- Reconèixer el paper de la interfície i de les persones que supervisen.
- Descriure l'arquitectura d'una aplicació que fem servir cada dia.

## 📖 Vocabulari essencial
| Terme | Explicació senzilla |
|---|---|
| Arquitectura | El conjunt de parts i connexions que formen un sistema d'IA, com les peces d'un motor. |
| Entrada | El que entra al sistema: una foto, un missatge, una dada del sensor. |
| Processament | El treball intern: el model rep l'entrada i calcula. |
| Sortida | El que surt del sistema: una resposta, una imatge, una predicció. |
| Núvol | Servidors llunyans on es calcula la IA, en lloc del propi telèfon. |
| Interfície | La pantalla o botons que veieu i toqueu; la part del sistema que parla amb vós. |

## 📚 Lliçó principal
Fins ara hem parlat de la IA com si fos una sola cosa. Però la realitat és més interessant: un sistema d'IA és un conjunt de peces que treballen juntes, com el motor d'un cotxe. Obrir el capó i mirar les peces ens treu el misteri i ens fa usuaris més savis.

Comencem per l'essencial: tota IA té una entrada, un processament i una sortida. L'entrada és el que li donem: una foto, una pregunta, un moviment del sensor. El processament és el treball intern, on el model calcula. La sortida és el resultat: una resposta, una imatge, un avís.

Penseu en un restaurant. L'entrada són els clients que arriben amb gana i els ingredients que entren per la porta del darrere. El processament és la cuina, on es preparen els plats. La sortida és el menjar que arriba a la taula. Sense una de les tres parts, el restaurant no funciona. Amb la IA passa igual.

La peça més famosa és el model, la "cuina". És el conjunt de regles apreses que converteix l'entrada en sortida. Però el model sol no serveix per a res: necessita dades que l'alimentin, una interfície que li permeti parlar amb vós i una infraestructura que el sostingui.

La infraestructura és l'edifici del restaurant: els servidors, l'electricitat, les connexions. Molta IA es calcula al núvol, és a dir, en ordinadors llunyans que responen quan pregunteu. Per això el telèfon pot tenir "intel·ligència": en realitat està demanant ajuda a una cuina enorme que és a quilòmetres.

Això explica dues coses quotidianes. Primera: sense internet, molts assistents queden muts, perquè la cuina és lluny. Segona: quan la resposta triga, és perquè la vostra pregunta viatja fins al núvol i torna. La distància es nota, encara que sigui invisible.

La interfície és la part que veieu: la pantalla, el micròfon, els botons. És el cambrer del restaurant. Moltes vegades pensem que la interfície "és" la IA, però en realitat és només la porta d'entrada. El que escriviu entra per aquí, viatja fins a la cuina, i la resposta torna pel mateix camí.

Hi ha una peça més, sovint oblidada: la persona supervisora. En molts sistemes seriosos hi ha humans que revisen resultats estranys, corregeixen errors i prenen decisions difícils. Es diu "humans al bucle". La IA no està sola: hi ha persones al darrere, i això és una bona notícia.

Vegem un exemple diari: l'aplicació del temps. Les dades d'entrada són les mesures de milers de sensors, satèl·lits i estacions. El processament és un model meteorològic enorme que calcula al núvol. La sortida és la previsió que veieu a la pantalla. I al darrere hi ha meteoròlegs que revisen els avisos importants.

Un altre exemple: el banc. L'entrada són els vostres moviments; el processament és un model que aprèn com gasteu; la sortida és un avís quan passa alguna cosa estranya. I un humà revisa els avisos abans de bloquejar una targeta. Sense aquesta persona, hi hauria més errors i més ensurts.

Conèixer l'arquitectura us dóna poder pràctic. Si una app falla, ja sabeu distingir si el problema és la connexió (el viatge al núvol), la interfície (la pantalla) o el mateix model. I quan us preguntin "on es calcula la IA?", podreu respondre amb sentit.

També us ajuda a entendre els límits. El núvol costa diners i consumeix energia; per això algunes funcions només estan en línia. I com que el model viu al núvol, l'empresa pot millorar-lo o canviar-ne les regles sense que toqueu res: la "intel·ligència" del vostre telèfon pot evolucionar d'un dia per l'altre.

L'ètica també mira l'arquitectura. Quan un sistema s'equivoca, qui n'és responsable: el model, qui el va entrenar, l'empresa que el va instal·lar, o la persona que el supervisa? Pensar en les peces ens ajuda a repartir responsabilitats amb justícia, en lloc de culpar una màquina.

En el pròxim nivell veurem com s'avalua una IA: com saber si un model és bo, dolent o simplement exagerat.

## 💡 Exemples pràctics
1. **Aplicació del temps:** sensors i satèl·lits (entrada), model meteorològic al núvol (processament), previsió a la pantalla (sortida).
2. **Banc:** els vostres moviments (entrada), model de frau (processament), avís de seguretat (sortida), amb un humà que revisa.
3. **Assistent de veu:** la vostra frase (entrada), model de llenguatge al núvol (processament), resposta parlada (sortida).

## 🛠️ Activitat guiada
Pas 1. Agafeu el telèfon i obriu l'aplicació del temps (o una app de mapes).
Pas 2. Observeu la sortida: quina previsió o resultat us mostra a la pantalla.
Pas 3. Apagueu el mòbil o activeu el mode avió i torneu a obrir l'app. Observeu què passa sense connexió.
Pas 4. Torneu a connectar i pregunteu-vos: la resposta va trigar més o menys. Què creieu que va viatjar fins al núvol?
Pas 5. Obriu ara Hugging Face Spaces (huggingface.co/spaces) al navegador i trieu un espai senzill, com un de "text a text".
Pas 6. Escriviu una frase curta i envieu-la. Identifiqueu: quina va ser l'entrada? Quina va ser la sortida?
Pas 7. Penseu on es va calcular: al vostre ordinador o en un servidor llunyà? Com ho sabeu?
Pas 8. Dibuixeu en un paper o escriviu: entrada, processament, sortida, núvol i interfície per a l'app del temps. Poseu el nom de cada peça al costat de la seva part.

## ✍️ Exercicis d'autoavaluació
1. Quines són les tres parts bàsiques de tot sistema d'IA?
2. Expliqueu amb la metàfora del restaurant què fa cada part.
3. Per què molts assistents no funcionen sense internet?
4. Què és la interfície i per què no és la IA en si?
5. Què significa "humans al bucle" i per què és important?

**Respostes:** 1) Entrada, processament i sortida. 2) L'entrada són els clients i ingredients; el processament és la cuina; la sortida és el menjar a la taula. 3) Perquè la vostra pregunta viatja fins al núvol, on és el model, i necessita la connexió per anar i tornar. 4) És la pantalla i els botons, la porta d'entrada; la IA real és al processament, no en el que es veu. 5) Significa que persones revisen i decideixen juntament amb el sistema; evita errors i reparteix responsabilitat.

## ⚖️ Dimensió ètica
Veure la IA com a sistema ens ajuda a repartir responsabilitats: quan falla, cal preguntar qui va dissenyar les dades, qui va entrenar el model i qui el supervisa. A més, el núvol consumeix energia i guarda les nostres dades: saber que la vostra pregunta viatja a servidors llunyans convida a no compartir informació sensible en assistents públics. La transparència (que les empreses expliquin com funciona el seu sistema) és un dret que convé exigir.

## 🔓 Eines obertes
- **Hugging Face Spaces** (huggingface.co/spaces): proveu models de tota mena i observeu entrades i sortides.
- **TensorFlow Playground** (playground.tensorflow.org): vegeu per dins com una xarxa converteix entrades en sortides.
- **Google Colab** (colab.research.google.com): quaderns gratuïts on s'executa IA al núvol.
- **YouTube** (youtube.com): cerqueu "arquitectura d'un sistema d'IA" per veure esquemes animats.
- **Viquipèdia** (wikipedia.org): articles sobre "aprenentatge automàtic" i "computació al núvol".

## 🧠 Resum i pont
- Tota IA té entrada, processament i sortida.
- El model és la cuina; la interfície, el cambrer; el núvol, l'edifici llunyà.
- Sense connexió, molts sistemes es queden sense cuina.
- Hi ha humans que supervisen: la IA no està sola.
- Conèixer les peces ajuda a repartir responsabilitats.

En el nivell 16 veurem com s'avalua una IA: les proves, les mètriques i com saber si un model és digne de confiança.
