# Mòdul 5: Automatització i Integració — Nivell 23
## Idioma: CA · Dificultat: Fruit
## Temps estimat: 3 hores

## 🎯 Objectiu del nivell
- Entendre què és l'arquitectura d'una automatització empresarial.
- Veure l'organització com un conjunt de processos connectats.
- Conèixer les capes d'un sistema: dades, processos, presentació.
- Aprendre a dissenyar un sistema gran per parts petites.
- Saber que un bon sistema es dissenya abans de construir-se.

## 📖 Vocabulari essencial
| Terme | Explicació en paraules senzilles |
|---|---|
| Arquitectura | El plànol general de com s'organitza el sistema sencer. |
| Capa | Una part del sistema: les dades, la lògica, la pantalla. |
| Dades | La informació que el sistema guarda i mou. |
| Procés | Cada cadena de passos dins del sistema. |
| Sistema | El conjunt de totes les peces treballant juntes. |
| Escalable | Que creix sense trencar-se quan augmenta la feina. |

## 📚 Lliçó principal
Entrem a la banda Fruit, l'última del mòdul, on veurem el conjunt complet. Fins ara hem construït automatitzacions soltes: un flux aquí, un bot allà, un robot per a una altra tasca. En aquests tres nivells aprendrem a veure-ho tot junt, com una casa sencera i no com maons solts. A això se li diu arquitectura d'automatització.

Pensem en una casa. Una casa no és una pila de maons: és una estructura pensada, on cada habitació té el seu lloc, els cables passen pels murs i l'aigua arriba a totes les aixetes. Si posem maons sense plànol, tenim un munt, no una casa. L'arquitectura de l'automatització és el plànol de l'organització: com s'ordenen les peces perquè tot funcioni junt.

Una organització, sigui una empresa, una associació o una cooperativa, fa moltes coses alhora: atén les persones, gestiona diners, guarda papers, avisa, informa. Cadascuna d'aquestes activitats és un procés, i els processos es toquen entre ells: l'alta d'un soci genera un pagament, que genera un rebut, que es guarda a la comptabilitat. L'arquitectura dibuixa aquestes connexions.

Per ordenar tanta feina, es fan servir capes. La capa de dades és el soterrani: el full, la base, la memòria on viu la informació. La capa de processos és el primer pis: les automatitzacions que mouen les dades i fan les coses. La capa de presentació és la façana: les pantalles, els bots i els avisos que veuen les persones. Separar capes és com separar el rebost de la cuina i de la taula: cada cosa al seu lloc, i cap no n'estorba una altra.

La gran lliçó de l'arquitectura és que un sistema gran no es construeix d'un cop: es dissenya i es construeix per parts. Primer es dibuixa el plànol sencer, amb les seves capes i els seus processos. Després es construeix una peça, es prova, i s'afegeix la següent. És com la casa: es posa primer l'estructura, després es va moblant habitació a habitació.

Una idea clau de l'arquitectura és que les dades es guarden una sola vegada i s'usen en molts llocs. Si el full de socis és un de sol, tots els processos llegeixen de la mateixa font i tots diuen el mateix. Si cada procés tingués la seva còpia, aviat hi hauria tres versions de la veritat. La regla és: una dada, una casa, moltes portes.

També es pensa en el futur. Un bon sistema és escalable: pot créixer sense trencar-se. Si avui l'associació té cent socis i demà mil, el sistema ha d'aguantar. Per això es dissenyen processos que no depenen d'una persona, que es revisen sols i que tenen avisos de fallada. Escalable és que la casa admeti més habitacions sense enderrocar els murs.

Dissenyar un sistema sencer pot semblar cosa d'especialistes, i en part ho és. Però el que ens importa en aquest curs és el criteri: saber mirar l'organització amb ulls d'arquitecte, preguntar-se quines capes existeixen, com es connecten els processos i on és el punt feble. Amb aquest criteri, parlem amb els especialistes d'igual a igual i demanem el correcte.

Una bona arquitectura d'automatització es recolza en tres pilars. Primer, la claredat: cada procés s'entén, es documenta i té responsable. Segon, la robustesa: les fallades s'avisen i no trenquen tot el sistema. Tercer, la humanitat: les decisions importants i el tracte amb les persones queden en mans humanes. Un sistema sense aquests pilars és un castell de cartes.

Un altre principi: no automatitzar per automatitzar. L'arquitectura pregunta primer "quin problema resolem?" i només després "amb quina eina?". De vegades la resposta és no automatitzar res: el paper i la conversa són perfectes. El bon arquitecte diu no més vegades que sí. És la regla del valor portada a tota l'organització.

La documentació del sistema sencer és l'últim toc: un plànol general on es veu tot, amb els processos, els responsables i les eines. Aquest plànol s'actualitza quan canvia alguna cosa. És la memòria de l'organització, la que permet que un voluntari nou entengui com funciona tot sense preguntar a cada moment.

En acabar aquest nivell sabràs mirar una organització com un sistema: capes, processos i connexions, dissenyat per parts i amb pilars clars. Al següent nivell veurem l'orquestració: com es coordinen diversos agents d'IA perquè treballin junts com un equip.

## 💡 Exemples pràctics
1. **L'associació completa.** El plànol de l'associació: un sol full de socis (dades), fluxos per a altes, pagaments i avisos (processos), i un bot que atén els veïns (presentació).
2. **El petit negoci.** Les comandes entren pel web, la facturació s'automatitza, l'inventari s'actualitza sol i la comptabilitat llegeix de la mateixa font.
3. **El taller comunitari.** Un sistema d'inscripcions amb capes separades: les dades dels alumnes, el procés de places i la pantalla on la gent s'apunta.

## 🛠️ Activitat guiada
Pas 1: Tria una organització que coneguis bé: la teva associació, el teu negoci o la teva comunitat.
Pas 2: En un paper, dibuixa tres calaixos apilats: a baix "Dades", al mig "Processos", a dalt "Presentació".
Pas 3: Escriu al calaix de Dades tot el que l'organització guarda: socis, pagaments, actes, inventari.
Pas 4: Escriu al calaix de Processos les cadenes que ja hem construït en aquest mòdul: altes, avisos, filtres, resums.
Pas 5: Escriu al calaix de Presentació el que veuen les persones: el bot, les notificacions, els correus, el panell.
Pas 6: Dibuixa fletxes entre els calaixos: quin procés fa servir quina dada i quina pantalla mostra quin procés.
Pas 7: Busca al teu dibuix el punt feble: una dada guardada en dos llocs? Un procés sense responsable?
Pas 8: Escriu al teu paper una millora d'arquitectura: què connectaries, què centralitzaries o què deixaries en paper.
Pas 9: Guarda el plànol: el farem servir en els dos pròxims nivells.

## ✍️ Exercicis d'autoavaluació
1. Què és l'arquitectura de l'automatització? a) El plànol general de com s'organitza el sistema sencer. b) Un dibuix de la façana. c) Un tipus d'ordinador.
2. Quines són les capes d'un sistema? a) Dades, processos i presentació. b) Sostre, parets i terra. c) No hi ha capes.
3. Com es construeix un sistema gran? a) D'un cop, tot alhora. b) Per parts, dissenyant primer i construint després. c) Sense plànol.
4. On es guarda una dada perquè tots diguin el mateix? a) A cada procés, per separat. b) Una sola vegada, en una sola font. c) En paper.
5. Què vol dir que un sistema sigui escalable? a) Que creix sense trencar-se. b) Que puja escales. c) Que és petit.

Respostes: 1-a, 2-a, 3-b, 4-b, 5-a.

## ⚖️ Dimensió ètica
- Una arquitectura s'ha de posar al servei de les persones, no al revés: primer es pensa en les persones i després en els processos.
- Centralitzar dades facilita la feina, però concentra el poder: protegeix aquesta informació amb contrasenyes i permisos.
- Que el sistema no es converteixi en un laberint que ningú entén: la claredat és també un dret.
- L'arquitectura no ha d'eliminar llocs de feina, ha d'alliberar temps: decideix amb l'equip, no a les seves esquenes.
- Un sistema ben dissenyat inclou sempre les persones: qui el fa servir ha de poder opinar i corregir-lo.

## 🔓 Eines obertes
| Eina | Per a què serveix | On aconseguir-la |
|---|---|---|
| draw.io | Dibuixar el plànol de l'arquitectura | drawio.com (gratuït) |
| n8n | Construir els processos del sistema | n8n.io (gratuït) |
| Nextcloud | Centralitzar dades a casa o a l'organització | nextcloud.com (gratuït) |
| Baserow | Base de dades oberta per a la capa de dades | baserow.io (gratuït) |

## 🧠 Resum i pont
L'arquitectura és el plànol general: capes de dades, processos i presentació, dissenyades per parts, amb les dades una sola vegada i amb pilars de claredat, robustesa i humanitat. Ja mires l'organització amb ulls d'arquitecte. Al següent nivell veurem l'orquestració d'agents: coordinar diversos agents d'IA perquè treballin en equip.
