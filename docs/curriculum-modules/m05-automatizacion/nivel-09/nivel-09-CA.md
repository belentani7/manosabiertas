# Mòdul 5: Automatització i Integració — Nivell 09
## Idioma: CA · Dificultat: Arrel
## Temps estimat: 3 hores

## 🎯 Objectiu del nivell
- Repassar tot el que hem après a la banda Arrel: connectar, avisar i adaptar plantilles.
- Muntar una automatització completa que uneixi diverses peces en una sola.
- Ordenar els passos d'una automatització com una recepta.
- Revisar i depurar un escenari amb diversos passos.
- Celebrar el primer projecte integrat propi.

## 📖 Vocabulari essencial
| Terme | Explicació en paraules senzilles |
|---|---|
| Projecte integrat | Una automatització que uneix diverses aplicacions i passos. |
| Depurar | Trobar i corregir les errades de l'automatització. |
| Pas | Cada peça de l'escenari: disparador, filtre, acció. |
| Cadena | L'ordre en què s'encadenen els passos. |
| Connector | La peça que uneix l'eina amb cada aplicació. |
| Revisió final | La comprovació completa abans de donar la feina per bona. |

## 📚 Lliçó principal
Hem arribat al final de la banda Arrel. En aquests cinc nivells hem après a crear un compte en una eina d'integració, a connectar dues aplicacions, a muntar avisos automàtics i a fer servir plantilles. Avui ho ajuntarem tot en un sol projecte complet, com qui cuina per primera vegada un menú de tres plats sencer.

Una automatització completa sol tenir més de dos passos. No només "si passa això, llavors fes això", sinó una cadena: primer un disparador, després potser un filtre, després una primera acció, després una segona. Cada pas és una baula, i totes juntes formen la cadena de l'automatització.

Tornem a la metàfora de la cuina. Un menú no és un sol plat: és entrant, principal i postres, servits en ordre. L'automatització completa és igual: cada pas es recolza en l'anterior i prepara el següent. Si l'entrant no surt bé, tot el menú es retarda. Per això l'ordre importa tant.

Imaginem un projecte real per a una associació: quan arriba un nou soci. Pas 1, el disparador: una fila nova al full de socis. Pas 2, un filtre: només si la fila està completa (té nom i correu). Pas 3, l'acció: enviar el correu de benvinguda. Pas 4, una altra acció: enviar l'avís al grup de Telegram. Aquest és un projecte integrat de veritat.

La regla d'or dels projectes: primer es construeix, després es prova pas a pas, i només al final s'activa. Provar pas a pas és com provar la sal de cada plat mentre es cuina: si esperem al final per provar, no sabrem quin plat ha sortit malament. L'eina permet provar cada pas per separat.

Quan un pas falla, la depuració és senzilla: llegim el missatge d'error, mirem què diu i corregim. Els errors més habituals són tres: un camp buit, un compte no connectat i una dada escrita amb un altre nom. Amb pràctica, es veuen a l'instant. És com el lampista que escolta la canonada i sap on és el problema.

Una altra costum valuosa: posar noms clars als passos. L'eina permet posar noms a cada part ("Rebre soci nou", "Comprovar dades", "Enviar benvinguda"). Un bon nom ens diu què fa cada peça sense haver-la d'obrir. És com etiquetar els pots del rebost: trobem el que busquem a l'instant.

També convé pensar en els imprevistos. Què passa si arriba una fila sense correu? I si l'aplicació de missatges està caiguda? Una bona automatització preveu aquestes situacions: si la dada falta, el flux s'atura i avisa. Aprendrem més sobre control d'errors a la banda Tija, però ja ho podem deixar preparat.

Arriba el moment de la revisió final. Abans d'activar, repassem la llista completa: estan tots els comptes connectats? Els camps tenen les dades correctes? Hem provat cada pas? Els noms són clars? Aquesta llista de comprovació és la xarxa de seguretat de l'ofici. La revisió final és el que separa una feina bona d'una de descurada.

Quan tot està revisat, s'activa i es prova de veritat, amb una dada real. I aquí hi ha la satisfacció: veure la cadena completa funcionant sola, del primer pas a l'últim. És el moment en què entenem per què aquest mòdul es diu "Automatització i Integració".

En acabar aquest nivell, tanquem la banda Arrel amb un projecte propi complet. Els pròxims nivells seran més profunds: aprendrem la lògica de les condicions, les variables i el control d'errors. Pujarem un esglaó, però ja no des de zero: des de l'experiència que hem guanyat.

## 💡 Exemples pràctics
1. **Alta de socis del club.** Una fila nova amb nom i correu dispara el correu de benvinguda i, alhora, un avís al grup de la directiva.
2. **La incidència al taller.** Quan es registra una incidència urgent, el flux crea un document, avisa l'encarregat i ho apunta al calendari.
3. **La compra del mercat.** Una fila nova al full de compres dispara l'avís al grup de la compra comunitària amb l'article i el repartidor assignat.

## 🛠️ Activitat guiada
Pas 1: Obre la teva eina i crea un escenari nou. Posa-li nom: "Alta de soci" (o el tema que triïs).
Pas 2: Afegeix el disparador: a Google Sheets, l'esdeveniment "Observa files", amb el teu full de socis (crea'n un amb les columnes Nom, Correu, Telèfon).
Pas 3: Afegeix un pas de filtre o condició: que només continuï si el camp "Correu" no està buit. Busca-ho als passos com a "Filtre" o "Router".
Pas 4: Afegeix la primera acció: un correu de benvinguda (busca "Gmail", tria "Envia correu"). Al "Per a", posa la dada de la fila; escriu un assumpte i un text curts.
Pas 5: Afegeix la segona acció: un missatge a Telegram (busca "Telegram", tria "Envia missatge") amb el nom del soci.
Pas 6: Posa nom a cada pas: "Rebre soci", "Comprovar correu", "Enviar benvinguda", "Avisar el grup".
Pas 7: Prova pas a pas amb una dada d'exemple (pots crear una fila de prova amb nom, correu i telèfon falsos).
Pas 8: Fes la revisió final: comptes connectats, camps correctes, passos provats.
Pas 9: Activa l'escenari, crea una fila real (un soci de prova) i mira com es compleix tota la cadena. Esborra després les dades de prova.
Pas 10: Desa l'escenari i escriu al teu paper què has après: quin pas ha estat el més difícil i quina errada has trobat.

## ✍️ Exercicis d'autoavaluació
1. Què és un projecte integrat? a) Una automatització que uneix diverses aplicacions i passos. b) Un únic botó. c) Una carpeta de l'ordinador.
2. En quin ordre es treballa un projecte? a) Activar, construir i provar. b) Construir, provar pas a pas i activar. c) Provar, esborrar i oblidar.
3. Si un pas falla, què faig? a) Activar igualment. b) Llegir el missatge d'error i corregir el pas. c) Reiniciar el telèfon.
4. Per què es posen noms als passos? a) Perquè l'eina ho exigeix. b) Per saber què fa cada peça sense obrir-la. c) Perquè quedi bonic.
5. Què és la revisió final? a) La comprovació completa abans d'activar. b) Una repassada al correu. c) Una lectura ràpida.

Respostes: 1-a, 2-b, 3-b, 4-b, 5-a.

## ⚖️ Dimensió ètica
- Un projecte integrat que toca dades de persones (socis, clients, salut) exigeix cura: no copiïs dades sensibles sense necessitat.
- Si la teva automatització envia correus o missatges reals, que el contingut sigui clar i honest. Ningú no mereix un missatge confús o enganyós.
- Informa les persones afectades que existeix l'automatització: la transparència genera confiança.
- No deixis dades de prova en fulls reals: esborra les files falses per no embrutar les dades de veritat.
- Una errada detectada a la revisió és un èxit, no un fracàs: per això es revisa abans d'activar.

## 🔓 Eines obertes
| Eina | Per a què serveix | On aconseguir-la |
|---|---|---|
| Make | Muntar projectes amb diversos passos | make.com |
| Zapier | Projectes amb múltiples passos i aplicacions | zapier.com |
| Google Sheets | El full on viuen les dades | sheets.google.com (gratuït) |
| Gmail | Enviar correus des del flux | mail.google.com (gratuït) |
| Telegram | Rebre avisos i missatges del flux | telegram.org (gratuït) |

## 🧠 Resum i pont
Un projecte integrat uneix disparador, filtre i diverses accions en una cadena ordenada. Es construeix, es prova pas a pas i es revisa abans d'activar. Tanquem la banda Arrel amb el teu primer projecte complet funcionant. Al següent nivell comencem la banda Tija: la lògica de l'automatització, les condicions si-llavors i els camins que tria el flux segons les dades.
