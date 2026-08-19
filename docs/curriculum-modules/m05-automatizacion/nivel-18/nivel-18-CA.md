# Mòdul 5: Automatització i Integració — Nivell 18
## Idioma: CA · Dificultat: Rama
## Temps estimat: 3 hores

## 🎯 Objectiu del nivell
- Entendre què és Home Assistant i per què és diferent de les apps de les marques.
- Conèixer el concepte de "casa intel·ligent sense dependre del núvol".
- Aprendre què és un servidor i com Home Assistant pot viure en un aparell petit.
- Descobrir alternatives obertes i gratuïtes als assistents comercials.
- Decidir si Home Assistant és per a tu o si et quedes amb el senzill.

## 📖 Vocabulari essencial
| Terme | Explicació en paraules senzilles |
|---|---|
| Home Assistant | Un programa lliure que reuneix tots els aparells de casa sota un sol control. |
| Núvol | Els ordinadors de les empreses on es guarden les dades. |
| Servidor | Un ordinador que treballa sempre per oferir un servei. |
| Local | Dins de la teva pròpia casa, sense sortir a internet. |
| Integració | La manera d'unir un aparell amb Home Assistant. |
| Tauler | La pantalla on es veu i es controla tota la casa. |

## 📚 Lliçó principal
Al nivell anterior vam connectar els nostres primers aparells intel·ligents. Cada marca porta la seva pròpia aplicació, i això té un problema: si tenim una bombeta d'una marca i un endoll d'una altra, necessitem dues aplicacions, dos comptes i dues maneres de pensar. Home Assistant és la resposta: un programa que reuneix tots els aparells de casa sota el mateix sostre, sense dependre de cap marca.

Pensem en la cuina. Si cada electrodomèstic tingués el seu propi comandament a distància amb la seva pròpia manera d'usar-se, cuinar seria un caos. Preferim una cuina organitzada on cada cosa té el seu lloc. Home Assistant és aquest ordre: un únic tauler des d'on es veuen i es controlen tots els aparells de la casa.

La gran diferència amb les aplicacions de les marques és on viuen les dades. Les aplicacions envien les nostres dades al núvol, als ordinadors de l'empresa. Home Assistant funciona en local: tot viu en un petit ordinador de casa. Les dades no surten de casa, la casa funciona encara que falli internet, i ningú més no les veu. És com tenir el rebost a casa i no en un magatzem aliè.

Quin aparell necessitem per a Home Assistant? Un petit ordinador que funcioni sempre. Pot ser un aparell comprat a propòsit (hi ha caixes pensades per a això) o un ordinador vell que ja no fem servir. S'instal·la el programa una vegada i es deixa treballant, com un forn que vigila tot. No cal saber programar per començar: el programa guia per pantalla.

Un cop instal·lat, Home Assistant va "descobrint" els aparells de casa. S'hi afegeixen integracions: cada integració és la manera de parlar amb una marca o un aparell. Al tauler, afegim la integració de la nostra bombeta, la del nostre endoll, la del nostre sensor. A poc a poc, tot apareix en una sola pantalla.

La veritable potència arriba amb les automatitzacions de Home Assistant. Són les mateixes regles si-llavors de sempre, però sense límits de marca: podem dir "si el sensor de moviment s'activa a partir de les nou de la nit, llavors encén el llum del passadís". La condició pot mirar qualsevol aparell i l'acció pot tocar qualsevol altre. Tota la casa es converteix en un sol flux.

A més, Home Assistant s'integra amb els assistents de veu. Podem continuar dient "OK Google, apaga el llum" i que aquesta ordre arribi al nostre Home Assistant. O podem fer servir assistents lliures, sense les grans empreses. La casa pot parlar el nostre idioma, fins i tot amb veu pròpia en castellà.

Home Assistant no és per a tothom, i això està bé. Si tens un sol aparell o prefereixes el senzill, l'aplicació de la marca i l'assistent són suficients. Home Assistant brilla quan hi ha diversos aparells, de diverses marques, i volem control total i privacitat. És com triar entre el comandament de la tele o un comandament universal: segons quants aparells tinguis.

La corba d'aprenentatge és una mica més alta que la de les aplicacions de les marques. No és difícil, però demana paciència i ganes d'explorar. Per això es recomana començar amb un aparell conegut i una automatització simple, i anar creixent. No hi ha pressa: la casa seguirà allà demà.

Un punt a favor de l'obert: no depèn d'una empresa. Si una marca tanca o canvia el seu servei, Home Assistant continua funcionant amb el nostre. I si un aparell deixa de tenir suport, la comunitat sol trobar una altra manera d'integrar-lo. És com sembrar al teu propi hort: no depens de la botiga del barri.

La comunitat de Home Assistant és enorme i amable: fòrums, guies en castellà i vídeos que expliquen cada pas. Quan alguna cosa s'encalla, sempre hi ha algú que ja ho ha resolt. Aprendre amb altres és més fàcil que aprendre sol. Aquest esperit de compartir és part d'aquest curs.

En acabar aquest nivell entendràs què és Home Assistant, en què es diferencia de les aplicacions de les marques i si et convé. Al següent nivell passarem de la casa als missatges: crearem bots de xat senzills que responen sols.

## 💡 Exemples pràctics
1. **La casa de diverses marques.** Rosa tenia llums d'una marca i endolls d'una altra. Amb Home Assistant els controla tots des d'una sola pantalla, sense comptes separats.
2. **L'automatització de la nit.** "Si són les deu i el sensor no detecta moviment al passadís, apaga els llums de tota la casa". Una regla, tota la casa.
3. **El tall d'internet.** A Jordi se li va anar internet i les aplicacions de les marques van deixar de funcionar. El seu Home Assistant va continuar encenent els llums: funciona en local.

## 🛠️ Activitat guiada
Pas 1: Informa't sobre els aparells on viu Home Assistant: busca a internet "Home Assistant Green" o "Home Assistant a Raspberry Pi" i llegeix què és.
Pas 2: Decideix si ja tens un ordinador vell o si prefereixes una caixa a punt per usar. No compris encara: només investiga.
Pas 3: Visita la pàgina home-assistant.io i mira els vídeos d'introducció que trobis en castellà. Anota dues idees que et cridin l'atenció.
Pas 4: Revisa la llista d'integracions del teu aparell actual (si en tens un): busca el nom de la teva marca al web d'integracions de Home Assistant i comprova que existeix.
Pas 5: Escriu al teu paper una automatització que faries amb Home Assistant i que no puguis fer amb la teva aplicació actual.
Pas 6: Busca a internet un fòrum o grup en castellà de Home Assistant i llegeix un fil de principiants.
Pas 7: Decideix i anota: és Home Assistant per a tu ara, més endavant, o prefereixes quedar-te amb el senzill? No hi ha resposta equivocada.

## ✍️ Exercicis d'autoavaluació
1. Què és Home Assistant? a) Un programa lliure que reuneix els aparells de casa sota un sol control. b) Una marca de bombetes. c) Un electricista.
2. On funcionen les dades de Home Assistant? a) Al núvol d'una empresa. b) En local, en un petit ordinador de casa. c) Al mòbil de la veïna.
3. Què es necessita per instal·lar Home Assistant? a) Un ordinador petit que funcioni sempre. b) Una televisió. c) Internet de fibra obligatori.
4. Es pot fer servir amb assistents de veu? a) No, mai. b) Sí, amb els comercials i també amb assistents lliures. c) Només en anglès.
5. Home Assistant és per a tothom? a) Sí, sempre. b) No, segons quants aparells tinguis i les teves ganes d'explorar. c) Només per a tècnics titulats.

Respostes: 1-a, 2-b, 3-a, 4-b, 5-b.

## ⚖️ Dimensió ètica
- Tenir les dades a casa és més privat, però també és la teva responsabilitat protegir-les: posa contrasenyes fortes i actualitza el sistema.
- Home Assistant recopila informació del teu dia a dia: decideix tu qui veu aquesta informació i qui no.
- Si la teva casa automàtica gestiona portes o alarmes, fes còpies de seguretat i revisa el sistema: la seguretat física en depèn.
- Comparteix el que aprenguis amb la comunitat, però no pugis dades personals ni fotos de la teva casa als fòrums.
- La tecnologia lliure no vol dir lliure de cura: continues sent responsable del que construeixes.

## 🔓 Eines obertes
| Eina | Per a què serveix | On aconseguir-la |
|---|---|---|
| Home Assistant | Reunir i automatitzar tota la casa | home-assistant.io (lliure) |
| Home Assistant Green | Una caixa a punt per començar | home-assistant.io |
| Raspberry Pi | Un ordinador petit per al servidor | raspberrypi.com |
| OpenHAB | Una altra plataforma oberta de domòtica | openhab.org (lliure) |

## 🧠 Resum i pont
Home Assistant reuneix tots els aparells sota un sol tauler, funciona en local amb privacitat i sense dependre d'una empresa, i automatitza amb regles que creuen marques. No és per a tothom, però és una opció lliure i potent. Al següent nivell canviarem de casa a missatges: els bots de xat que responen sols.
