# Mòdul 5: Automatització i Integració — Nivell 22
## Idioma: CA · Dificultat: Capçada
## Temps estimat: 3 hores

## 🎯 Objectiu del nivell
- Entendre què és el RPA: robots que repeteixen les tasques que fem a la pantalla.
- Reconèixer quan una tasca manual es pot passar a un robot.
- Conèixer eines de RPA senzilles i gratuïtes.
- Gravar una tasca repetitiva i deixar-la en mans del robot.
- Conèixer els límits i els riscos del RPA.

## 📖 Vocabulari essencial
| Terme | Explicació en paraules senzilles |
|---|---|
| RPA | Automatització Robòtica de Processos: robots que imiten clics i tecles. |
| Robot | Un programa que es mou per la pantalla com nosaltres. |
| Gravar | Ensenyar al robot la tasca gravant els nostres clics i tecles. |
| Reproduir | Fer que el robot repeteixi la tasca gravada. |
| Interfície | La pantalla del programa on fem clics. |
| Excepció | Un cas rar que el robot no sap gestionar i necessita una persona. |

## 📚 Lliçó principal
Tanquem la banda Capçada amb una eina molt concreta i molt útil: el RPA. Les sigles volen dir "Automatització Robòtica de Processos". En paraules senzilles: un robot que imita el que fem amb les mans a la pantalla de l'ordinador: obrir una aplicació, escriure en una casella, prémer un botó, copiar una dada, desar un fitxer. Tota aquesta rutina que fem a mà, la pot fer un robot.

Pensem en com omplíem els formularis en paper antigament: agafar el bolígraf, escriure, passar a la casella següent. A la pantalla, omplir formularis és igual: tocar una casella, escriure, passar a la següent. És una tasca repetitiva amb els dits. El RPA la converteix en automàtica: el robot toca les mateixes caselles, escriu les mateixes lletres i prem el mateix botó, a la mateixa velocitat i sense cansar-se.

La gran diferència del RPA amb tot l'anterior és que no necessita que les aplicacions estiguin connectades. Les integracions dels nivells anteriors (Make, Zapier) necessiten que les aplicacions "parlin" entre elles. El RPA no: imita una persona. Si nosaltres podem fer la tasca amb clics i tecles, el robot també pot. És com la diferència entre tenir un cambrer que entén tots els cuiners (integració) o un robot que copia els plats tal com es fan (RPA).

El RPA brilla en tasques que són: repetitives, iguals cada vegada, lentes de fer a mà i sense necessitat de decidir. Copiar dades d'un full a un altre, omplir un formulari, canviar el nom de molts fitxers, passar números d'una pantalla a una altra, descarregar informes i desar-los en carpetes. Són tasques de "copiar i enganxar" que el robot fa mil vegades millor que nosaltres.

Les eines de RPA funcionen en dos temps. Primer, el robot ens mira fer la tasca una vegada: això es diu gravar. Mentre nosaltres fem clics i escrivim, el programa ho anota tot. Segon, el robot reprodueix la tasca: repeteix exactament el que hem gravat, a la seva velocitat, quan li diguem o a una hora fixa. Gravar i reproduir, com el vídeo.

Començar amb el RPA és fàcil perquè hi ha eines gratuïtes que graven tasques sense programar. A la pantalla es prem "gravar", es fa la tasca una vegada, es prem "parar", i el robot ja té la recepta. Després es dona al botó de reproduir i el robot l'executa. És com ensenyar algú a fer la tasca mostrant-li-ho una vegada.

Però el RPA té un punt feble important: el robot fa exactament el que li hem ensenyat, i si la pantalla canvia, es perd. Si el botó s'ha mogut, si l'aplicació s'ha actualitzat o si la casella té un altre nom, el robot falla. Per això les tasques de RPA han d'estar ben definides i els robots es revisen quan alguna cosa canvia. És un robot rígid: bo en el seu, maldestre en els imprevistos.

Les excepcions són el gran límit del RPA. Quan el cas no és l'habitual, quan el formulari té un camp estrany o la dada no existeix, el robot no sap què fer. El correcte és que el robot s'aturi i avisi una persona. Un bon robot no s'inventa solucions: para i truca. La persona decideix el cas rar; el robot fa el normal.

El RPA tampoc no és per a tasques que canvien o que exigeixen entendre. Un robot no entén, imita. Si la tasca requereix interpretar un text, comprendre una situació o prendre una decisió, millor un agent amb IA o una persona. Cada eina a la seva tasca: la integració per connectar, el RPA per imitar, la IA per pensar, la persona per decidir.

A la feina quotidiana, el RPA és una gran aliada de les persones que fan tasques repetitives a l'oficina: converteix hores de copiar i enganxar en minuts de cafè. Però convé començar amb una tasca petita i que es faci sovint, no amb la tasca perfecta. Una tasca petita que funciona dona confiança per abordar-ne d'altres més grans.

Cal anar amb compte amb un perill: deixar que un robot faci tasques delicades sense vigilància. Si el robot gestiona dades de persones o diners, necessita supervisió, avisos i revisió. Un robot que envia un correu amb dades personals per error és un problema ràpid. El RPA no elimina la responsabilitat: la trasllada.

En acabar aquest nivell, tanques la banda Capçada. Saps connectar aplicacions, construir agents amb IA, automatitzar processos i ara imitar tasques manuals amb robots. A la banda Fruit, els últims nivells del mòdul, aprendrem a dissenyar sistemes grans: l'arquitectura de l'automatització empresarial.

## 💡 Exemples pràctics
1. **El bolcat de dades.** Cada dia, en Lluís copia les comandes del matí des del web del proveïdor al full de control. El robot de RPA ho fa sol a les tres.
2. **El canvi de nom dels fitxers.** La Carme descarrega cinquanta factures i els canvia el nom amb el número de comanda. El robot reprodueix la tasca en un minut.
3. **L'informe del tancament.** El robot entra a l'aplicació del banc, descarrega l'extracte del dia, el desa a la carpeta i avisa l'encarregada.

## 🛠️ Activitat guiada
Pas 1: Tria una tasca teva a l'ordinador que facis sovint i que sigui sempre igual: copiar unes dades, canviar el nom de fitxers, omplir un formulari.
Pas 2: Descarrega una eina de RPA gratuïta (per exemple, el Power Automate Desktop de Microsoft, o una alternativa lliure com el tagUI).
Pas 3: Obre l'eina i busca el botó de gravar o "Grava l'acció".
Pas 4: Prem gravar i fes la teva tasca una vegada, a poc a poc i en ordre, sense pauses llargues. No facis res d'estrany: el robot copiarà cada gest.
Pas 5: Prem parar en acabar. L'eina et mostrarà la llista de passos gravats.
Pas 6: Revisa la llista: té sentit? Hi ha passos de més? Si hi ha un pas estrany, esborra'l o repeteix la gravació.
Pas 7: Prem reproduir i observa: el robot farà la tasca. Comprova el resultat amb els teus ulls.
Pas 8: Si alguna cosa falla, mira en quin pas s'ha aturat i corregeix. Repeteix fins que funcioni.
Pas 9: Escriu al teu paper la tasca automatitzada, cada quan l'usaries i què faries si la pantalla canvia.

## ✍️ Exercicis d'autoavaluació
1. Què vol dir RPA? a) Robots que imiten les tasques que fem a la pantalla. b) Reparació d'aparells. c) Una marca de cafè.
2. Què fa el robot de RPA? a) Imita clics i tecles com una persona. b) Connecta aplicacions entre si. c) Pensa com una persona.
3. Com s'ensenya una tasca al robot? a) Explicant-l'hi amb paraules. b) Gravant-la: fer la tasca una vegada mentre el robot anota. c) No s'ensenya.
4. Què passa si la pantalla canvia? a) El robot s'adapta sol. b) El robot pot fallar perquè repeteix el gravat. c) Res, continua igual.
5. Què fa el robot amb un cas rar? a) Se l'inventa. b) S'atura i avisa una persona. c) L'ignora.

Respostes: 1-a, 2-a, 3-b, 4-b, 5-b.

## ⚖️ Dimensió ètica
- No deixis que un robot gestioni dades personals o diners sense supervisió: els errors del robot són responsabilitat teva.
- Avisa l'equip que una tasca ara la fa un robot: la transparència evita confusions.
- El RPA treu el repetitiu, però no elimina la persona: assegura't que ningú no queda desatès.
- Prova sempre el robot amb dades de prova abans de les tasques reals.
- Si el robot s'equivoca amb dades de tercers, avisa i corregeix de seguida, sense amagar-ho.

## 🔓 Eines obertes
| Eina | Per a què serveix | On aconseguir-la |
|---|---|---|
| Power Automate Desktop | RPA gratuït de Microsoft | powerautomate.microsoft.com |
| tagUI | RPA de codi obert | github.com/kelaberetiv |
| SikuliX | RPA per imatge, gratuït i lliure | sikulix.com |
| OpenRPA | Plataforma de RPA oberta | openrpa.openrpa.dk |

## 🧠 Resum i pont
El RPA ensenya un robot a imitar les nostres tasques de pantalla: es grava una vegada i es reprodueix sempre. És ideal per a tasques repetitives, però rígid davant els canvis, i les excepcions es deixen per a les persones. Tanquem la banda Capçada. Al següent nivell comencem la Fruit: l'arquitectura de l'automatització empresarial, com es dissenyen els sistemes grans.
