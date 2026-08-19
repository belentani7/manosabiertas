# Mòdul 5: Automatització i Integració — Nivell 13
## Idioma: CA · Dificultat: Tija
## Temps estimat: 2 hores

## 🎯 Objectiu del nivell
- Entendre que les automatitzacions poden fallar i que això és normal.
- Conèixer els tipus d'errors més habituals en un flux.
- Aprendre a llegir un missatge d'error sense espantar-se.
- Afegir passos que avisin quan alguna cosa falla.
- Muntar un flux que continuï o s'aturi segons l'error.

## 📖 Vocabulari essencial
| Terme | Explicació en paraules senzilles |
|---|---|
| Error | Una fallada: alguna cosa no ha sortit com esperàvem. |
| Missatge d'error | L'avís que l'eina mostra per explicar la fallada. |
| Tornar a provar | Executar de nou el pas que ha fallat. |
| Excepció | El cas especial que no compleix l'habitual i fa fallar el flux. |
| Registre | L'historial on queden anotats els passos i els errors. |
| Avís de fallada | Una notificació que s'envia quan alguna cosa es trenca. |

## 📚 Lliçó principal
Avui parlarem d'una cosa que ningú no menciona al principi i que tothom troba el primer dia: els errors. Les automatitzacions fallen. S'equivoquen, es trenquen, s'aturen. I això no és un problema nostre: és part de la vida de tota màquina. L'important no és que no falli, sinó saber què fer quan falla.

Pensem en la cuina. Encara que seguim la recepta al peu de la lletra, de vegades el flam es talla, el forn s'apaga o falta un ingredient. Un bon cuiner no llença els plats: sap per què ha passat i ho arregla. Amb les automatitzacions és igual. L'error és informació, no un càstig.

La primera habilitat és llegir el missatge d'error. Les eines d'integració guarden un historial o registre de cada execució: qui ha disparat el flux, quins passos s'han fet i on s'ha aturat. Quan alguna cosa falla, el missatge d'error sol dir la causa: "camp buit", "aplicació no connectada", "dada incorrecta". És com el diagnòstic del metge: per curar, primer cal saber què fa mal.

Els errors més habituals són pocs i s'aprenen de pressa. Un: els camps buits, quan arriba una dada sense omplir. Dos: els comptes desconnectats, quan l'autorització ha caducat o s'ha retirat. Tres: les dades amb format diferent, quan esperàvem un nombre i arriba un text. Quatre: els límits d'ús, quan el pla gratuït s'esgota.

Per a cada error hi ha una solució. Si el camp és buit, fem servir una condició (nivell 10) per no continuar quan falta la dada. Si el compte s'ha desconnectat, el tornem a connectar. Si el format és diferent, revisem el full o l'aplicació d'origen. Si s'ha esgotat el límit, esperem al mes següent o fem servir menys el flux.

Però la veritable mestria és en una altra cosa: que el flux sàpiga avisar quan falla. En lloc de fallar en silenci, la nostra automatització ens pot enviar un missatge: "el pas d'enviar correu ha fallat". Així, encara que es trenqui, nosaltres ho sabem i ho arreglem. Una fallada que avisa és una fallada a mitges.

Les eines permeten afegir un pas especial, de vegades anomenat "control d'errors" o "gestió d'errors", que s'executa només quan alguna cosa falla. En aquest pas podem enviar l'avís, guardar la dada que ha fallat o aturar el flux amb calma. És com tenir un detector de fum: no apaga el foc, però avisa a temps.

També podem decidir si una fallada ho atura tot o ho salta. De vegades el millor és aturar: si el pagament no es processa, que no continuï. Altres vegades el millor és continuar: si l'enviament del missatge falla, que la resta segueixi i després ho revisem. Cada flux tria la seva actitud segons la importància de cada pas.

Convé revisar el registre de tant en tant, com qui mira les factures del mes. El registre ens explica què ha passat a la nostra automatització: quantes vegades s'ha executat, quan ha fallat i per què. Llegir el registre és la manera de tenir cura de l'automatització, de mantenir-la sana. És la higiene de l'ofici.

Un error que es repeteix molt és senyal que el flux està mal dissenyat o que l'origen de les dades ha canviat. No ho tapem amb pedaços: mirem la causa i arreglem-ho d'arrel. És com la gotera: s'arregla la teulada, no es posa una galleda cada vegada.

Quan proves una automatització i falla, respira: és el millor moment per aprendre. Cada fallada que trobes i entens et fa més amo del teu sistema. La por als errors desapareix quan els coneixem. I conèixer-los és justament el que estem fent avui.

En acabar aquest nivell sabràs llegir un missatge d'error, saber què fer amb les fallades típiques i muntar avisos que et diguin quan alguna cosa es trenca. La teva automatització ja no és fràgil: està vigilada i cuidada.

## 💡 Exemples pràctics
1. **El compte desconnectat.** El flux del club va deixar de funcionar perquè Google va fer caducar l'autorització. L'avís de fallada va arribar a la coordinadora, que el va tornar a connectar en un minut.
2. **La fila buida.** Va arribar un soci sense correu. La condició del flux (nivell 10) el va aturar abans d'enviar, i el registre va guardar el cas per revisar-lo a mà.
3. **El límit d'IA.** El pla gratuït de la IA es va esgotar un mes. El flux va avisar i va continuar treballant amb el resum manual fins al mes següent.

## 🛠️ Activitat guiada
Pas 1: Obre la teva eina d'integració i tria un escenari que ja tinguis creat (per exemple, el d'incidències o el de resums).
Pas 2: Entra al registre o historial de l'escenari (sol ser la pestanya "Historial", "History" o "Execucions"). Mira les últimes execucions.
Pas 3: Busca una execució que hagi fallat o fes fallar-ne una a propòsit: desconnecta el compte de Telegram o deixa un camp buit al full.
Pas 4: Llegeix el missatge d'error. Escriu-lo al teu paper i apunta què creus que vol dir. Comprova amb la guia d'aquest nivell quin és l'error típic.
Pas 5: Corregeix l'error: torna a connectar el compte o completa el camp.
Pas 6: Afegeix el control d'errors: busca a la configuració de l'escenari l'opció "Control d'errors", "Error handling" o "Gestió d'errors".
Pas 7: Configura l'avís: quan falli, envia un missatge a Telegram amb el text "Ha fallat l'escenari [nom]: [missatge d'error]".
Pas 8: Prova de fallar una altra vegada i comprova que arriba l'avís.
Pas 9: Activa l'escenari i acostuma't a revisar el registre un cop per setmana.

## ✍️ Exercicis d'autoavaluació
1. És normal que una automatització falli? a) No, si està ben feta mai no falla. b) Sí, fallar és part de la vida de tota màquina. c) Només les barates.
2. Què és el primer que fem davant d'un error? a) Esborrar l'escenari. b) Llegir el missatge d'error i mirar el registre. c) Comprar un altre ordinador.
3. Quin és un error típic? a) Un camp buit. b) Un canvi de lletra. c) L'hora de l'esmorzar.
4. Què fa el control d'errors? a) Evita que falli tot. b) S'executa quan alguna cosa falla, per avisar o aturar-se amb calma. c) Esborra els errors del passat.
5. Per a què serveix revisar el registre? a) Per tenir cura de l'automatització i saber què ha passat. b) Per omplir el temps. c) Perquè quedi bonic.

Respostes: 1-b, 2-b, 3-a, 4-b, 5-a.

## ⚖️ Dimensió ètica
- Una fallada silenciosa és perillosa: si una automatització que processa dades de persones falla sense avisar, es perd informació. L'avís és responsabilitat.
- Si el flux falla en tractar dades personals, avisa de seguida i no ho amaguis: la transparència protegeix les persones.
- No facis servir el control d'errors per "tapar" un disseny mal fet: arregla la causa, no només l'alerta.
- Els avisos de fallada han d'arribar a la persona adequada, no al correu de tothom.
- Davant d'un error que afecta diners o salut, atura l'automatització i revisa a mà abans de continuar.

## 🔓 Eines obertes
| Eina | Per a què serveix | On aconseguir-la |
|---|---|---|
| Make (control d'errors) | Avisar quan falla un pas | make.com |
| Zapier (filtres i retry) | Configurar reintents i continuacions | zapier.com |
| UptimeRobot | Vigilar que les teves automatitzacions web responguin | uptimerobot.com (gratuït) |
| Logseq o notes | Portar un diari d'errors i arranjaments | logseq.com (gratuït) |

## 🧠 Resum i pont
Els errors són part de l'ofici: es llegeixen, s'entenen i s'arreglen. El control d'errors avisa quan alguna cosa falla i el registre explica la història del flux. La teva automatització ja està vigilada. Al següent nivell tanquem la banda Tija: muntarem una automatització completa que faci servir condicions, variables, IA i control d'errors junts.
