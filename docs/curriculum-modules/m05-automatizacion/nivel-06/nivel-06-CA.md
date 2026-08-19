# Mòdul 5: Automatització i Integració — Nivell 06
## Idioma: CA · Dificultat: Arrel
## Temps estimat: 3 hores

## 🎯 Objectiu del nivell
- Construir una primera automatització real entre dues aplicacions.
- Connectar el teu compte d'una aplicació a l'eina d'integració.
- Triar un disparador i una acció de veritat.
- Provar l'automatització amb una dada real.
- Entendre què és "provar" en automatització i per què es fa.

## 📖 Vocabulari essencial
| Terme | Explicació en paraules senzilles |
|---|---|
| Connectar un compte | Autoritzar l'eina a fer servir una aplicació teva. |
| Autorització | El permís que dónes perquè dos programes es parlin. |
| Provar | Fer una prova real per veure si l'automatització funciona. |
| Escenari | L'automatització completa: disparador, passos i acció. |
| Connector | La peça que uneix l'eina amb una aplicació. |
| Dades | La informació que viatja: un nom, una data, un missatge. |

## 📚 Lliçó principal
Al nivell anterior vam crear el nostre compte i vam entendre les dues peces de tota automatització: el disparador i l'acció. Avui construirem la nostra primera automatització real, de principi a fi. Unirem dues aplicacions i les veurem treballar juntes. És un moment bonic, com veure la primera planta que hem sembrat.

Triarem un exemple senzill i útil: un full de càlcul on apuntem alguna cosa (per exemple, la llista de la compra del club) i, cada vegada que hi afegim una fila, l'eina envia un missatge a una altra aplicació (per exemple, el grup de missatges de l'associació). Això és connectar dues aplicacions: el full i els missatges.

El primer pas és triar les dues aplicacions. Una serà el disparador, la que "desperta" l'automatització; l'altra serà l'acció, la que fa alguna cosa. En el nostre exemple: el full de càlcul dispara i el missatge actua. No hi ha regles fixes: qualsevol de les dues pot ser qualsevol de les parts.

Abans de començar, necessitem que l'eina "conegui" les nostres aplicacions. Això s'anomena connectar un compte o autoritzar. És com donar la clau d'una habitació concreta al cambrer: només d'aquesta habitació, no de tota la casa. Es fa prement "Connecta el compte" i iniciant sessió a l'aplicació quan ens ho demani.

És normal sentir una mica de recel en donar permisos. Tranquil·litat: en aquestes eines es pot treure la connexió quan vulguem, des dels ajustos. I podem revisar quins permisos hem donat. Donar permís no és donar poder per sempre; és obrir una porta que podem tancar.

Un cop connectats els comptes, triem el disparador. L'eina ens mostra una llista d'esdeveniments de cada aplicació. Busquem el nostre: "fila nova", "missatge nou", "correu nou". Premem i l'eina ens demana que confirmem amb quin dels nostres comptes i en quin full o carpeta treballar.

Després ve l'acció. Triem la segona aplicació i l'esdeveniment: "enviar missatge", "enviar correu", "crear fitxer". L'eina ens mostra els camps que podem omplir i, el més meravellós, ens ofereix posar dades que venen del disparador. Així, el missatge pot dir "Compra nova: [nom de la fila]" sense que nosaltres escriguem res.

Aquesta possibilitat de "prendre dades d'un lloc i posar-les en un altre" és el que fa màgica la integració. L'eina ens deixa triar, amb un clic, la dada que ve del full i posar-la dins del missatge. És com el cambrer que porta la nota del cuiner i la copia al compte del client.

Abans d'activar, es prova. Provar és fer una simulació: l'eina executa el flux amb dades d'exemple i ens mostra què ha sortit. Si alguna cosa falla, la veiem i la corregim sense molestar ningú. Provar és gratuït i evita errors reals. Ningú envia un missatge al grup sense provar-ho abans.

Quan la prova surt bé, s'activa l'automatització. A partir d'aquí, quan afegim una fila nova al full, el missatge s'enviarà sol. Sense prémer res. És una emoció veure-ho per primera vegada: la màquina treballa mentre nosaltres mirem.

Convé deixar clar que les automatitzacions d'aquestes eines revisen els canvis amb certa freqüència: no és instantani com un llamp, sinó com el correu, que arriba en minuts. Si la prova triga una mica a aparèixer, és normal. La paciència forma part de l'ofici.

Si alguna cosa surt malament, no passa res. L'error sol ser als permisos, als camps buits o a una dada escrita de manera diferent. L'eina ens diu on és el problema i ho arreglem. Cada error que corregim ens ensenya una lliçó que no oblidem.

En acabar aquest nivell tindràs la teva primera automatització funcionant: dues aplicacions unides, treballant juntes. És la base de tot el que ve. Si avui has connectat un full amb un missatge, demà connectaràs coses més grans.

## 💡 Exemples pràctics
1. **La llista del club.** Cada compra nova que s'apunta al full del club envia un missatge al grup de l'associació amb l'import i l'article.
2. **El formulari de contacte.** Quan algú omple el formulari de l'associació a internet, les seves dades es guarden soles al full i s'avisa la coordinadora.
3. **L'avís de pagament.** Quan el tresorer marca una quota com a pagada al full, el soci rep automàticament un correu d'agraïment.

## 🛠️ Activitat guiada
Pas 1: Obre Make (o Zapier) al navegador i entra al teu compte.
Pas 2: Prem el botó "Crea un escenari" (Make) o "Create from scratch" (Zapier).
Pas 3: Afegeix el disparador: busca l'aplicació "Google Sheets" i tria l'esdeveniment "Observa files" o "New spreadsheet row".
Pas 4: Prem "Connecta" i autoritza el teu compte de Google: apareixerà la finestra de Google, prem "Permet" o "Continua".
Pas 5: Tria el full de càlcul i la pestanya que faràs servir (pots crear un full de prova amb una fila: nom, article, import).
Pas 6: Afegeix l'acció: busca l'aplicació de missatges que tinguis (per exemple, "Telegram" o "WhatsApp Business") i tria "Envia missatge".
Pas 7: Al camp del missatge, escriu alguna cosa com "Compra nova:" i prem per afegir la dada del full (el nom de la fila). L'eina la inserirà.
Pas 8: Prem "Prova" o "Run". Mira el resultat: hauria d'aparèixer un missatge amb les teves dades de prova.
Pas 9: Si surt bé, activa l'escenari amb l'interruptor. Afegeix una fila nova al full i espera: el missatge arribarà sol. Si alguna cosa falla, llegeix l'avís d'error i corregeix els camps.

## ✍️ Exercicis d'autoavaluació
1. Què és connectar un compte? a) Donar permís a l'eina per fer servir una aplicació teva. b) Comprar un altre compte. c) Esborrar l'aplicació.
2. Quina és l'ordre del flux? a) Acció i després disparador. b) Disparador i després acció. c) No importa.
3. Per què es prova abans d'activar? a) Perquè és obligatori per llei. b) Per veure si funciona sense molestar ningú. c) Per gastar dades.
4. Una automatització envia el missatge a l'instant? a) Sí, sempre. b) No, pot trigar uns minuts, com el correu. c) Només de nit.
5. Si una automatització falla, què faig? a) Llence l'ordinador. b) Llegeixo l'avís d'error, corregeixo els camps i torno a provar. c) La ignoro.

Respostes: 1-a, 2-b, 3-b, 4-b, 5-b.

## ⚖️ Dimensió ètica
- Revisa sempre quins permisos dónes i a quins comptes. Treu l'accés quan deixis de fer servir una automatització.
- No connectis comptes que guarden dades personals d'altres persones (salut, diners) sense un motiu clar.
- Si la teva automatització envia missatges a un grup, avisa abans el grup i comprova el contingut.
- No provis automatitzacions que enviïn correus o missatges reals a desconeguts: fes servir adreces o xats de prova.
- Les automatitzacions que crees són teves: sigues responsable del que fan i de les dades que mouen.

## 🔓 Eines obertes
| Eina | Per a què serveix | On aconseguir-la |
|---|---|---|
| Google Sheets | El full de càlcul on posaràs les teves dades | sheets.google.com (gratuït) |
| Make | Crear i provar els teus escenaris | make.com |
| Zapier | Alternativa amb moltes plantilles | zapier.com |
| Telegram | Aplicació de missatges per rebre avisos | telegram.org (gratuït) |

## 🧠 Resum i pont
Hem construït la nostra primera automatització real: un disparador en un full que desencadena una acció en una altra aplicació. Hem connectat comptes, triat esdeveniments, provat i activat. Aquest és el mètode que farem servir sempre. Al següent nivell aprendrem a crear notificacions automàtiques, avisos que arriben sols quan passa alguna cosa important.
