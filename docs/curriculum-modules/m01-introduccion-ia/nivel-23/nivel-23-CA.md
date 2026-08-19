# Mòdul 1: Introducció a la Intel·ligència Artificial — Nivell 23
## Idioma: CA · Dificultat: Fruit
## Temps estimat: 6 hores

## 🎯 Objectiu del nivell
- Entendre què és un agent autònom i com es diferencia d'un assistent.
- Conèixer els components: objectiu, eines, memòria, bucle d'acció.
- Identificar quan un agent és útil i quan és un risc.
- Aprendre a supervisar un agent sense deixar que actuï sol sense control.
- Refletir sobre la responsabilitat quan la IA actua per si mateixa.

## 📖 Vocabulari essencial
| Terme | Explicació simple |
|---|---|
| Agent autònom | Una IA que rep un objectiu i decideix ella sola els passos per aconseguir-ho. |
| Bucle d'acció | El cicle: observar, planificar, actuar, aprendre, repetir. |
| Eines | El que l'agent pot usar: cercador, calculadora, correu, codi. |
| Memòria | El que l'agent recorda del que ha fet i vist. |
| Supervisió humana | Una persona que revisa i aprova el que l'agent fa. |
| Alineació | Que l'agent faci el que volem, no només el que demanem literalment. |

## 📚 Llició principal
Fins ara l'IA esperava la nostra ordre: preguntàvem, ella respondia. Els agents autònoms donen un pas més: se'ls dona un objectiu i ells decideixen què fer, en quin ordre, amb quines eines, i continua fins a acabar. És com contractar un becari que no necessita que li diguis cada pas, només el resultat que vols.

Un agent té quatre peces. Primera: l'objectiu, el que volem assolir ("busca tres receptes de llenties sense carn i envia'm-les per correu"). Segona: les eines, el que pot usar (cercador web, correu, calculadora, Python). Tercera: la memòria, el que recorda per no repetir errors. Quarta: el bucle d'acció, el motor: observa què passa, planifica el proper pas, actua, aprèn del resultat, i repeteix.

Veiem un exemple. Li dius a un agent: "organitza el meu viatge a Madrid la setmana que ve". L'agent busca trens, compara preus, mira hotels, revisa el temps, reserva el millor i t'envia l'itinerari. Tu sols vas donar l'objectiu; l'agent va fer la resta. Sona meravellós, i ho és, però té riscos.

El primer risc és que l'agent s'equivoqui. Pot reservar l'equivocat, un hotel que no existeix, o gastar més del compte. Per això la supervisió humana és obligatòria: l'agent proposa, la persona disposa. Abans de reservar, l'agent t'ensenya l'opció i tu dius sí o no. Sense aquest fre, un error de l'agent és un error teu.

El segon risc és l'alineació. Demanes "elimina els correus vells" i l'agent elimina també els importants perquè "eren vells". Vas fer el que vas demanar literalment, no el que volies. L'alineació és el problema central de l'IA avançada: assegurar que l'agent entén la intenció, no només l'ordre. Per això els objectius han de ser precisos i amb límits: "arxiva correus de fa més d'un any que no tinguin l'etiqueta 'important'".

El tercer risc és l'opacitat. L'agent fa moltes coses en segon pla i tu no veus el procés. Si alguna cosa falla, no saps per què. Els bons agents deixen rastre: un registre del que van buscar, el que van decidir, per què. Exigiu traçabilitat: si no es veu què va fer, no es confia.

El quart risc és la dependència. Si delegueu tot en agents, perdeu la pràctica i el criteri. Saber buscar, comparar, decidir és una habilitat que s'oxida si no s'usa. Useu agents per al tediós, però mantingueu el control del important.

Quan usar un agent? Per a tasques repetitives, amb passos clars, sota supervisió: "cada dilluns resumeix les actes i envia-les", "vigila el preu d'aquest producte i avisa'm si baixa". Quan NO? Per a decisions de salut, diners, relacions, o quan l'error fa mal. Allà decideixes tu.

La responsabilitat sempre és humana. L'agent és una eina potent, però qui posa l'objectiu, qui dona les eines, qui supervisa i qui respon davant les conseqüències és la persona. No hi ha "l'agent ho va fer". Tu ho vas fer, usant un agent.

Al proper nivell entrarem en la IA científica: com la IA està change la forma de fer ciència, i el problema de l'alineació a gran escala.

## 💡 Exemples pràctics
1. **Agent de compres:** objectiu "compra la llista del supermercat al millor preu"; eines: webs de supermercats, comparador; supervisió: tu aproves el carret abans de pagar.
2. **Agent d'investigació:** objectiu "busca 10 estudis sobre el son en majors de 60"; eines: Google Scholar, resumidor; supervisió: tu revises la llista abans d'usar-la.
3. **Agent de calendari:** objectiu "busca buits per a la reunió del club"; eines: calendari, correu; supervisió: tu triis l'hora final.

## 🛠️ Activitat guiada
Pas 1. Trieu una tasca repetitiva vostra (cercar preus, resumir correus, cercar cites).
Pas 2. Escriviu l'objectiu amb límits clars: què sí, què no, quant com a màxim.
Pas 3. Proveu un agent senzill: useu ChatGPT amb "GPT personalitzat" o una eina com AutoGPT (versió web gratuïta).
Pas 4. Doneu-li l'objectiu i observeu: què cerca? Què decideix? Què proposa?
Pas 5. Abans que execuçi l'acció final (comprar, enviar, esborrar), atureu-lo i reviseu.
Pas 6. Anoteu: va estalviar temps? Es va equivocar en alguna cosa? Quin limit va faltar?
Pas 7. Reescriviu l'objectiu amb els límits apresos i proveu-ho una altra vegada.
Pas 8. Decidiu: aquesta tasca mereix un agent o la feu millor vosaltres?

## ✍️ Exercicis d'autoavaluació
1. Quines són les quatre peces d'un agent autònom?
2. Què és el bucle d'acció i per a què serveix?
3. Per què la supervisió humana és obligatòria?
4. Què és l'alineació i per què falla a vegades?
5. Qui és responsable si un agent comete un error?

**Respostes:** 1) Objectiu, eines, memòria, bucle d'acció. 2) El cicle observar-planificar-actuar-aprendre-repetir; és el motor que fa que l'agent avanči sol. 3) Perquè l'agent pot equivocar-se, gastar més o esborrar el important; la persona ha d'aprovar l'acció final. 4) És que l'agent faci el que volem, no només el que demanem literalment; falla quan l'objectiu és vagu o sense límits. 5) La persona que va posar l'objectiu, va donar les eines i va supervisar: la responsabilitat sempre és humana.

## ⚖️ Dimensió ètica
Un agent autònom amplifica el poder de qui l'usa. Pot fer molt de bé (alliberar temps, ajudar qui no sap) i molt de mal (errors en cadena, opacitat, pèrdua d'habilitat). No useu mai un agent per decidir per altres, per actuar en nom d'altri sense permís, ni per eludir la vostra responsabilitat. La supervisió no és opcional: és el fre que evita que un error petit es converteixi en gran.

## 🔓 Eines obertes
| Eina | Per a què serveix | On aconseguir-la |
|---|---|---|
| GPT personalitzats (ChatGPT) | Crear agents amb instruccions i eines | chat.openai.com |
| Gemini Gems | Agents personalitzats de Google | gemini.google.com |
| AutoGPT (web) | Agents de codi obert per provar | github.com/Significant-Gravitas/AutoGPT |
| LangChain | Llibreria per construir agents (avançat) | github.com/langchain-ai/langchain |

## 🧠 Resum i pont
- Un agent autònom rep un objectiu i decideix els passos sol.
- Quatre peces: objectiu, eines, memòria, bucle d'acció.
- Supervisió obligatòria: l'agent proposa, la persona disposa.
- Alineació: objectiu precís amb límits per què faci el que volem.
- Responsabilitat sempre humana.
Al nivell 24 veurem com la IA està transformant la ciència i el repte de l'alineació a gran escala.