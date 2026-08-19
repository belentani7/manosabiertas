# Mòdul 5: Automatització i Integració — Nivell 07
## Idioma: CA · Dificultat: Arrel
## Temps estimat: 2 hores

## 🎯 Objectiu del nivell
- Entendre què és una notificació automàtica i per a què serveix.
- Crear avisos que arriben sols al telèfon o al correu quan passa alguna cosa.
- Triar quins esdeveniments mereixen un avís i quins no.
- Configurar un avís d'una dada important (un pagament, una data, una resposta).
- Evitar la sobrecàrrega d'avisos que cansen i no ajuden.

## 📖 Vocabulari essencial
| Terme | Explicació en paraules senzilles |
|---|---|
| Notificació | L'avís que apareix a la pantalla del telèfon o al correu. |
| Avís automàtic | Un missatge que s'envia sol quan passa alguna cosa. |
| Esdeveniment | El fet que posa en marxa l'avís: un pagament, un missatge, una data. |
| Sobrecàrrega d'avisos | Massa avisos que arriben alhora i aclaparen. |
| Canal | El camí per on arriba l'avís: telèfon, correu, missatges. |
| Important | El que de veritat mereix la nostra atenció. |

## 📚 Lliçó principal
Al nivell anterior vam connectar dues aplicacions i vam veure com treballen juntes. Avui ens centrem en una de les coses més útils que es poden automatitzar: les notificacions. Un avís automàtic és un missatge que arriba sol quan passa alguna cosa important, sense que hàgim d'estar mirant la pantalla.

Pensem en l'olla de pressió de la cuina. Nosaltres no estem tot el temps mirant si ja està a punt: l'olla avisa amb un xiulet quan assoleix la pressió. Aquest xiulet és una notificació. L'automatització de l'avís ens deixa fer altres coses mentre l'olla treballa.

Al món digital és igual. Hi ha centenars de moments que ens interessa conèixer: quan arriba un correu important, quan algú omple un formulari, quan es fa un pagament, quan es compleix una data. Si haguéssim d'estar mirant tot l'estona, no faríem res més. L'avís automàtic mira per nosaltres.

La gràcia està a triar bé què ens avisa. No tots els esdeveniments mereixen un xiulet. L'important, l'urgent o el que costa diners mereix avís. El que és soroll, no. Una bona notificació és com la trucada d'un amic que només truca quan importa, no el que truca per qualsevol cosa.

Quan muntem una notificació a la nostra eina d'integració, seguim el mateix esquema de sempre. El disparador és l'esdeveniment que volem vigilar: "correu nou d'aquesta persona", "fila nova en aquest full", "pagament fet". L'acció és l'enviament de l'avís: un missatge al telèfon, un correu, una notificació.

Quin canal triar? Depèn del moment. Per a alguna cosa urgent, un missatge al telèfon (Telegram o WhatsApp). Per a alguna cosa que pot esperar, un correu. Per a un recordatori de calendari, la mateixa aplicació del calendari. Triar el canal és com triar entre trucar per telèfon o enviar una carta: segons la importància, el camí.

Moltes aplicacions ja avisen soles sense necessitat de l'eina d'integració. El banc avisa de cada moviment, el correu de cada missatge nou. El que aporta la integració és avisar de coses que cap aplicació vigila: creuar dades, unir dues aplicacions, avisar de condicions concretes.

Un exemple: volem que ens avisin només si la temperatura de la nevera puja per sobre de cert nivell, o només si arriba un correu del banc amb la paraula "rebut". Això és una condició. Aprendrem condicions a fons a la banda Tija; avui veiem com encaixa: la notificació pot dependre d'una condició triada.

La sobrecàrrega d'avisos és un perill real. Si activem quinze notificacions, el telèfon sona tot el dia i acabem ignorant-les totes, fins i tot les importants. És com el pastor que crida "llop!" tantes vegades que ningú no li fa cas. La regla d'or: pocs avisos i bons.

Cada vegada que activem un avís, preguntem-nos: "de veritat necessito saber-ho en el moment que passa?". Si la resposta és dubtosa, millor no activar-lo. Podem començar sense avís i afegir-lo més tard si de veritat el trobem a faltar. És més fàcil afegir que treure el soroll.

També convé posar apagades: hi ha moments del dia en què no volem avisos. El telèfon ja té modes de silenci (nivell 4) i les eines permeten que els avisos només s'enviïn en certes hores. Una notificació que arriba de matinada no és una ajuda, és una molèstia.

En acabar aquest nivell sabràs muntar avisos que et conten només el que és important i, sobretot, sabràs dir "això no mereix un avís". Aquest criteri val més que tota la tecnologia junta.

## 💡 Exemples pràctics
1. **El pagament del lloguer.** Quan el full del club registra el pagament d'un soci, el tresorer rep un missatge al telèfon: "Pagament rebut de [nom]".
2. **La resposta del formulari.** Quan algú demana informació a la web de l'associació, arriba un avís al correu de la coordinadora en menys d'un minut.
3. **L'avís de manteniment.** L'eina vigila el full d'incidències i avisa l'encarregat quan algú escriu "urgent" a la columna d'estat.

## 🛠️ Activitat guiada
Pas 1: Obre la teva eina d'integració (Make o Zapier) i entra al teu compte.
Pas 2: Crea un escenari nou i tria el disparador. Per exemple: a Google Sheets, l'esdeveniment "Observa files" amb el teu full de pagaments del club.
Pas 3: Afegeix l'acció: busca l'aplicació de missatges (Telegram) i tria "Envia missatge".
Pas 4: Connecta el teu compte de Telegram si no està connectat (et demanarà un codi breu).
Pas 5: Al missatge, escriu: "Pagament rebut de [camp nom] per [camp import]". L'eina t'ofereix els camps del full per inserir-los.
Pas 6: Prem "Prova". L'eina enviarà un missatge de prova al teu Telegram. Obre'l i mira'l.
Pas 7: Si vols que només avisi quan l'import sigui més gran que zero, busca l'opció "Filtre" o "Condició" i posa aquesta regla (o espera al nivell 10).
Pas 8: Activa l'escenari. Afegeix una fila de prova al full i comprova que arriba el missatge. Esborra després la fila de prova.
Pas 9: Escriu al teu paper una llista de tres esdeveniments que vols vigilar i decideix, per a cada un, si mereix avís o no.

## ✍️ Exercicis d'autoavaluació
1. Què és una notificació automàtica? a) Un missatge que s'envia sol quan passa alguna cosa. b) Un missatge que escrivim a mà. c) Un tipus de lletra.
2. Quins esdeveniments mereixen un avís? a) Tots, com més millor. b) Només el que és important, urgent o costa diners. c) Cap.
3. Quin canal és millor per a una cosa urgent? a) Una carta en paper. b) Un missatge al telèfon. c) Apuntar-ho a l'agenda.
4. Què és la sobrecàrrega d'avisos? a) Massa avisos que arriben i s'ignoren tots. b) Un avís que arriba tard. c) Un avís en anglès.
5. Quina regla d'or apliquem a les notificacions? a) Com més avisos, millor. b) Pocs avisos i bons. c) Cap avís mai.

Respostes: 1-a, 2-b, 3-b, 4-a, 5-b.

## ⚖️ Dimensió ètica
- No enviïs avisos automàtics a altres persones sense el seu consentiment: cada avís que arriba a un telèfon aliè interromp.
- Els avisos sobre diners o salut han de ser discrets: no escriguis dades sensibles al mateix missatge.
- Respecta els horaris de descans dels altres: programa els avisos per a hores raonables.
- Treu els avisos que ja no serveixen: un avís antic és soroll i confusió.
- Ets amo de la teva atenció: decideix tu què t'avisa, no les aplicacions.

## 🔓 Eines obertes
| Eina | Per a què serveix | On aconseguir-la |
|---|---|---|
| Telegram | Rebre avisos al telèfon | telegram.org (gratuït) |
| Pushbullet | Avisos de l'ordinador al telèfon | pushbullet.com (gratuït) |
| ntfy | Avisos propis, sense dependre d'altres apps | ntfy.sh (gratuït i lliure) |
| Google Alerts | Avís quan apareix alguna cosa nova a internet | google.com/alerts (gratuït) |

## 🧠 Resum i pont
Les notificacions automàtiques ens avisen només del que és important, sense que hi estiguem mirant. Triem l'esdeveniment, el canal i el moment, i evitem la sobrecàrrega d'avisos. Ja hem connectat aplicacions i muntat avisos. Al següent nivell aprendrem a fer servir plantilles d'automatització: receptes ja fetes que podem copiar i adaptar en minuts.
