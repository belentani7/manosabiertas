# Mòdul 5: Automatització i Integració — Nivell 11
## Idioma: CA · Dificultat: Tija
## Temps estimat: 2 hores

## 🎯 Objectiu del nivell
- Entendre què és una variable amb metàfores del món físic.
- Reconèixer les dades que canvien dins d'un flux.
- Guardar i reutilitzar una dada al llarg de l'automatització.
- Fer servir variables de text i de nombre en una automatització.
- Muntar un flux que combini condicions i variables.

## 📖 Vocabulari essencial
| Terme | Explicació en paraules senzilles |
|---|---|
| Variable | Una "caixa" amb nom on es guarda una dada que canvia. |
| Valor | La dada que hi ha dins de la caixa en aquell moment. |
| Nom de variable | L'etiqueta de la caixa, per saber què conté. |
| Text | Un valor fet de lletres, nombres i símbols, com un nom. |
| Nombre | Un valor que es pot sumar, restar o comparar. |
| Guardar | Deixar un valor a la variable per fer-lo servir més endavant. |

## 📚 Lliçó principal
Al nivell anterior vam aprendre la lògica si-llavors. Avui hi afegim una altra peça fonamental: les variables. La paraula sona tècnica, però les variables són una cosa que fem servir tota la vida. Una variable és una caixa amb nom que guarda una dada, i aquesta dada pot canviar. És així de senzill.

Pensem en el rebost de casa. La capsa de sucre té una etiqueta que diu "sucre". El que hi ha a dins canvia: avui és plena, demà a mitges, demà passat buida. Però l'etiqueta és la mateixa. A les variables passa igual: el nom no canvia, el valor sí. La variable "sucre" pot contenir avui 2 quilos i demà 1.

En una automatització, les dades viatgen pel flux com els ingredients per la cuina. Quan arriba una fila nova del full, porta dades: el nom del soci, l'import, la data. Aquestes dades es poden guardar en variables amb noms clars: "nom", "import", "data". A partir d'aquí, el flux les pot fer servir en qualsevol pas.

Per què són tan útils les variables? Perquè permeten reutilitzar. Sense variables, cada pas hauria de tornar a buscar la dada. Amb variables, guardem la dada una vegada i la fem servir al correu, al missatge i a la condició. És com apuntar el número de telèfon un cop a l'agenda i trucar sempre des d'allà.

A les eines d'integració, les variables apareixen gairebé soles. Quan triem un camp del full per posar-lo en un missatge, estem fent servir una variable, encara que l'eina no faci servir aquesta paraula. El nom de la variable és el nom de la columna: "Nom", "Import". La caixa és la columna; el valor, el que hi ha en aquella fila.

Les variables poden ser de diferents tipus, igual que al rebost hi ha capses de coses diferents. Dos tipus ens importen molt: el text i el nombre. El text són lletres i paraules: un nom, un missatge, una adreça. El nombre són quantitats: imports, quantitats, temperatures. Amb els nombres es pot sumar; amb el text, no.

Aquesta diferència és important. Podem fer "el total és el preu més l'enviament" si tots dos són nombres. No podem sumar dos noms. Saber el tipus de cada variable evita errors estranys. És com no posar sal al cafè: cada cosa va amb el seu tipus.

Les variables també permeten construir missatges llargs. En lloc d'escriure el missatge sencer a mà, el muntem amb peces: "Hola [nom], la teva comanda de [article] per [import] euros és a punt". Cada claudàtor és una variable que s'omple amb el valor de cada fila. El mateix missatge serveix per a cent comandes diferents.

La combinació de variables i condicions és molt potent. La condició pot preguntar pel valor d'una variable: "si l'import és més gran que 50". I el resultat de la condició pot portar a accions que fan servir aquesta mateixa variable: "el correu diu: ha superat els 50 euros". La variable és la informació; la condició, la pregunta; les accions, la resposta.

Un consell d'ofici: posa noms clars a les variables. "Import" és clar; "x" o "dada3" no ho és. Quan revisem l'automatització d'aquí a un mes, agrairem llegir "import" i no haver de desxifrar "dada3". Els bons noms són l'ordre de la cuina digital.

Un altre consell: no guardis en variables dades que no faràs servir. Cada variable que afegim és una peça més a mantenir. Guardem el necessari i poca cosa més. Menys és més també en les variables.

En acabar aquest nivell entendràs que les variables són les capses que porten les dades pel flux, que tenen nom i valor, i que poden ser text o nombre. Amb condicions i variables, l'automatització ja pot llegir, decidir i construir missatges. Al següent nivell la farem encara més llesta: li ensenyarem a pensar amb intel·ligència artificial.

## 💡 Exemples pràctics
1. **El missatge de comanda.** El flux guarda el nom, l'article i l'import de cada fila, i munta el missatge: "Hola Marta, la teva comanda de 3 quilos de tomàquets per 9 euros és a punt".
2. **L'avís de despesa.** Si la variable "import" és més gran que 50, el flux envia l'avís d'aprovació al tresorer amb el valor inclòs.
3. **La llista d'aniversaris.** El flux guarda els noms i les dates d'aniversari, i cada mes construeix un missatge amb els que fan anys aquell mes.

## 🛠️ Activitat guiada
Pas 1: Obre la teva eina d'integració i crea un escenari nou anomenat "Comandes del club" (o el teu tema).
Pas 2: Crea a Google Sheets un full amb les columnes: Nom, Article, Import. Omple dues files de prova.
Pas 3: Afegeix el disparador: l'esdeveniment "Observa files" de Google Sheets amb el teu full.
Pas 4: Afegeix una acció de missatge (Telegram). Al text, escriu "Hola " i prem per inserir la variable "Nom"; escriu " la teva " i insereix "Article"; escriu " per " i insereix "Import"; acaba amb " euros". Mira com es munta el text.
Pas 5: Afegeix un pas de condició: si "Import" és més gran que 50, llavors envia un avís al tresorer (una altra acció); si no, no fa res més.
Pas 6: A l'avís al tresorer, fes servir de nou les variables Nom i Import perquè el missatge digui "Aprovació: [nom], [import] euros".
Pas 7: Prova el flux amb les teves dues files: una amb import inferior a 50 i una altra de superior. Observa que el primer missatge arriba sempre i el del tresorer només quan toca.
Pas 8: Escriu al teu paper una llista de les variables del teu flux, amb el seu nom, el tipus (text o nombre) i per a què serveixen.
Pas 9: Activa l'escenari i esborra les files de prova.

## ✍️ Exercicis d'autoavaluació
1. Què és una variable? a) Una caixa amb nom que guarda una dada que canvia. b) Un botó del telèfon. c) Un tipus de full de càlcul.
2. Què té tota variable? a) Només un valor. b) Només un nom. c) Un nom i un valor.
3. Amb quin tipus de variable es pot sumar? a) Amb el text. b) Amb el nombre. c) Amb tots dos.
4. Per a què serveixen els bons noms de variable? a) Perquè l'automatització quedi bonica. b) Per saber què conté cada capsa en revisar-la. c) Per estalviar espai.
5. Es pot fer servir la mateixa variable en diversos passos? a) No, un cop utilitzada s'esborra. b) Sí, es guarda i es reutilitza. c) Només dues vegades.

Respostes: 1-a, 2-c, 3-b, 4-b, 5-b.

## ⚖️ Dimensió ètica
- Les variables poden contenir dades personals: tracta el valor com tractaries el paper original, amb respecte i cura.
- No posis contrasenyes, números de compte o dades mèdiques en variables que viatgen a missatges o correus.
- Anomena les variables de manera honesta: un nom enganyós pot portar a fer servir una dada amb mal criteri.
- Si la variable prové de dades aportades per persones, verifica que siguin certes abans de fer-les servir per decidir.
- Revisa de tant en tant quines variables guardes: esborra les que ja no utilitzes i les dades que no necessites.

## 🔓 Eines obertes
| Eina | Per a què serveix | On aconseguir-la |
|---|---|---|
| Make (variables i mòduls) | Guardar i reutilitzar dades | make.com |
| Zapier (tokens de dades) | Inserir variables a les accions | zapier.com |
| Google Sheets | Practicar amb columnes com a variables | sheets.google.com |
| LibreOffice Calc | Fulls de càlcul lliures | libreoffice.org (gratuït) |

## 🧠 Resum i pont
Les variables són capses amb nom i valor que porten les dades pel flux. Poden ser text o nombre, es guarden una vegada i es reutilitzen en condicions, missatges i correus. Amb condicions i variables, l'automatització llegeix i decideix. Al següent nivell integrarem intel·ligència artificial en els fluxos: la màquina llegirà, resumirà i generarà textos.
