# Mòdul 5: Automatització i Integració — Nivell 19
## Idioma: CA · Dificultat: Rama
## Temps estimat: 3 hores

## 🎯 Objectiu del nivell
- Entendre què és un bot de xat i per a què serveix.
- Conèixer els bots de missatges com Telegram i WhatsApp.
- Crear un bot senzill que respongui preguntes bàsiques.
- Connectar el bot amb una eina d'integració.
- Aprendre les normes de cortesia i seguretat en fer servir bots.

## 📖 Vocabulari essencial
| Terme | Explicació en paraules senzilles |
|---|---|
| Bot | Un programa que respon missatges sol, com un robot de xat. |
| Xat | La conversa escrita: el bot i nosaltres. |
| Ordre | Una paraula o frase especial que el bot entén. |
| Resposta automàtica | El missatge que el bot envia sense que ningú no l'escrigui. |
| Bot de Telegram | Un bot que viu dins de l'aplicació de missatges Telegram. |
| Humà | Una persona real, que és diferent del bot. |

## 📚 Lliçó principal
Tanquem la banda Rama amb una peça molt útil: els bots de xat. Un bot és un programa que respon missatges per nosaltres, com un robot de conversa. Li escrivim i contesta; li demanem una cosa i la fa. És com tenir un recepcionista automàtic que mai no es cansa ni s'empipen.

On viuen els bots? A les aplicacions de missatges. El lloc més senzill per començar és Telegram, una aplicació gratuïta de missatges molt popular. Dins de Telegram, un bot és un contacte especial: té el seu propi nom, la seva pròpia icona i respon al que li escrivim. No és una persona: és un programa amb nom.

Què pot fer un bot? El bàsic és respondre amb un missatge preparat. Escrivim "hola" i respon "Hola! En què et puc ajudar?". Escrivim "horari" i respon amb l'horari de l'associació. Són respostes que nosaltres escrivim una vegada i que el bot repeteix quan toca. És com la contestadora del telèfon, però per escrit i amb molta més memòria.

Els bots s'entenen amb nosaltres a través d'ordres. Una ordre és una paraula especial que el bot reconeix: "/horari", "/preus", "/ajuda". Quan escrivim l'ordre, el bot fa la seva feina. És una manera molt clara de parlar amb una màquina: en lloc d'explicar, premem la paraula màgica.

El bot també pot lliurar informació que ve d'altres llocs. Aquí s'uneix amb tot el que hem après: el bot pot preguntar al nostre full de càlcul, a la nostra base de dades o a la nostra automatització, i portar la resposta. "Quants socis hi ha?" i el bot mira el full i contesta amb el nombre real. El bot és la boca; l'automatització, la memòria.

Per crear un bot es fa servir una aplicació anomenada BotFather (el "pare dels bots") dins de Telegram. Se li escriu per crear un bot nou, se li posa un nom i s'obté una clau secreta, com la clau de la porta. Aquesta clau es guarda amb cura: amb ella es controla el bot. Després, l'eina d'integració fa servir aquesta clau perquè el bot respongui.

Un cop creat el bot, es connecta a l'eina d'integració. Podem configurar-lo perquè, quan algú escrigui una ordre, el flux faci alguna cosa: buscar una dada, enviar un avís, registrar una petició. O a l'inrevés: que el flux enviï missatges al bot perquè els lliuri al grup. El bot es converteix en un punt d'entrada i sortida de l'automatització.

Cal anar amb compte amb el que els bots no poden fer. Un bot no entén matisos: si escrivim una frase llarga i confusa, no sabrà què fer. Per això els bots funcionen millor amb preguntes clares i ordres definides. Quan alguna cosa surt del previst, el bot ha de tenir una resposta de respecte: "No ho he entès, prova amb /ajuda".

Una regla d'or: el bot mai no s'ha de fer passar per una persona. El bot ha de dir des del principi "sóc un robot". L'honestedat evita confusions i enganys. Si algú creu que parla amb una persona i descobreix que és un bot, perd la confiança. El clar és l'honest.

Els bots són molt útils per a les associacions: atenen les preguntes repetides, donen informació a qualsevol hora i recullen peticions sense cansar-se. Però el que no poden fer és substituir el tracte humà quan cal: una persona que necessita ajuda de veritat mereix una persona real. El bot obre la porta; l'humà atén.

En acabar aquest nivell, tanquem la banda Rama havent automatitzat la veu, la casa i els missatges. A la banda Capçada pujarem un esglaó més: els agents amb IA, que no només responen, sinó que també fan tasques completes.

## 💡 Exemples pràctics
1. **El bot de l'associació.** El bot respon automàticament a les preguntes freqüents: horaris, quotes, adreces. Els voluntaris ja no repeteixen el mateix mil vegades.
2. **El bot de reserves.** Escrivim "/reserva" i el bot consulta el full de disponibilitat i confirma o rebutja la reserva.
3. **El bot d'avisos.** Quan l'automatització detecta una incidència urgent, li envia el missatge al bot, que el lliura al grup de la directiva.

## 🛠️ Activitat guiada
Pas 1: Descarrega i instal·la Telegram al telèfon (telegram.org). Crea el teu compte amb el teu número si no el tens.
Pas 2: Busca l'usuari "@BotFather" dins de Telegram i obre el xat amb ell.
Pas 3: Escriu /newbot i prem enviar. BotFather et preguntarà el nom del bot: posa-li un de clar, per exemple "Atenció del Club".
Pas 4: BotFather et demanarà un nom d'usuari que acabi en "bot" (per exemple, "atencio_club_bot"). Escriu-lo.
Pas 5: BotFather et donarà una clau (token) llarga. Copia-la i guarda-la en un lloc segur del teu paper: és la clau del teu bot, no la comparteixis.
Pas 6: Busca el teu bot a Telegram pel seu nom d'usuari i obre'l. Prem "Inicia" o escriu /start. Et saludarà.
Pas 7: A la teva eina d'integració, busca el connector "Telegram Bot" o "Telegram Bot API" i enganxa la teva clau per connectar.
Pas 8: Crea una automatització senzilla: quan el bot rebi el missatge "hola", que respongui "Hola! Sóc el bot del club. Escriu /horari per veure els horaris".
Pas 9: Afegeix l'ordre /horari amb el teu horari real. Prova d'escriure-li els dos missatges i comprova les respostes.
Pas 10: Recorda: al final del missatge de benvinguda, posa "Sóc un robot, no una persona".

## ✍️ Exercicis d'autoavaluació
1. Què és un bot de xat? a) Un programa que respon missatges sol. b) Una persona que treballa de nit. c) Un tipus de telèfon.
2. On es crea un bot de Telegram? a) A la botiga. b) Escrivint-li a BotFather. c) No es pot crear.
3. Què és una ordre? a) Una paraula especial que el bot reconeix, com /horari. b) Un crit. c) Un fitxer.
4. Un bot ha de dir que és un robot? a) No, millor dissimular. b) Sí, sempre, per ser honest. c) Només si pregunta.
5. Pot un bot substituir el tracte humà? a) Sí, sempre. b) No: obre la porta, però les persones atenen les persones. c) Només en dies festius.

Respostes: 1-a, 2-b, 3-a, 4-b, 5-b.

## ⚖️ Dimensió ètica
- Un bot mai no s'ha de fer passar per una persona: anuncia sempre que és un robot.
- No demanis al bot dades personals dels usuaris ni les guardis sense permís.
- Supervisa els bots: revisa de tant en tant quins missatges reben i si les respostes continuen sent correctes.
- Si un usuari necessita ajuda real (un problema seriós, una emergència), el bot l'ha de derivar a una persona.
- La clau del bot és com la clau de casa teva: guarda-la, no la comparteixis i canvia-la si sospites.

## 🔓 Eines obertes
| Eina | Per a què serveix | On aconseguir-la |
|---|---|---|
| Telegram | L'aplicació on viuen els bots | telegram.org (gratuït) |
| BotFather | Crear i administrar el teu bot | @BotFather a Telegram |
| Make (Telegram) | Connectar el bot als teus fluxos | make.com |
| Chatwoot | Atenció al client lliure amb bots | chatwoot.com (codi obert) |

## 🧠 Resum i pont
Un bot respon missatges sol, amb ordres i respostes preparades, i pot portar dades de les nostres automatitzacions. Es crea amb BotFather, es connecta amb una clau i mai no es fa passar per una persona. Tanquem la banda Rama. Al següent nivell comencem la Capçada: els agents amb IA, que no només responen, sinó que també fan tasques senceres.
