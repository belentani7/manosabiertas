# Mòdul 1: Introducció a la Intel·ligència Artificial — Nivell 16
## Idioma: CA · Dificultat: Branca
## Temps estimat: 3 hores

## 🎯 Objectiu del nivell
- Entendre per què cal provar una IA abans de confiar-hi.
- Distingir entre dades d'entrenament i dades de prova.
- Comprendre què és la precisió i per què no ho diu tot.
- Reconèixer el sobreajust: quan la màquina memoritza en comptes d'aprendre.
- Avaluar a la pràctica un model senzill amb casos nous.

## 📖 Vocabulari essencial
| Terme | Explicació senzilla |
|---|---|
| Avaluació | El procés de provar la IA amb casos que mai no ha vist per veure si encerta. |
| Conjunt d'entrenament | Els exemples amb què la màquina aprèn. |
| Conjunt de prova | Exemples nous, diferents dels d'entrenament, amb què s'examina la màquina. |
| Precisió | El percentatge d'encerts: de cada 100 casos, quants va resoldre bé. |
| Sobreajust | Quan la màquina memoritza els exemples d'entrenament i falla amb qualsevol novetat. |
| Comparativa (benchmark) | Proves estàndard que s'usen per comparar models entre si. |

## 📚 Lliçó principal
Imaginem que contractem un cuiner. Li demanaríem el currículum i ja està? No: li demanaríem que cuinés un plat nou i el provaríem. Això és avaluar. Amb la IA passa igual: abans de confiar en un sistema, cal provar-lo. I la manera de provar-lo té un truc.

El truc és aquest: no es pot examinar la màquina amb les mateixes preguntes amb què va estudiar. Penseu en un examen escolar. Si l'alumne s'aprèn les respostes de memòria i l'examen és exactament igual, treu un deu però no ha après res. Per saber si va aprendre de veritat, l'examen ha de portar preguntes noves.

Amb la IA passa exactament el mateix. Els exemples amb què aprèn s'anomenen conjunt d'entrenament. Els exemples nous, que mai no ha vist, s'anomenen conjunt de prova. Un bon model aprova l'examen amb preguntes noves. Un model trampós només memoritza les velles.

Per què és tan important? Perquè a la vida real la IA es troba sempre amb casos nous. Un filtre de correu brossa, per exemple, mai no ha vist el correu que li arribarà demà. Si només hagués memoritzat els correus de la setmana passada, seria inútil. Ha de generalitzar: aprendre la regla, no el cas.

La precisió és el número que resumeix quant encerta: si resol bé 95 de cada 100 casos, té una precisió del 95%. Sona bé, però cal mirar-hi amb lupa. Un model que sempre respon "no hi ha malaltia" pot tenir una precisió altíssima si les malalties són rares, i tot i així ser perillosíssim.

Aquest és el gran engany de les xifres: una precisió alta no garanteix que la IA sigui bona. Depèn de quins casos s'hi hagin posat a la prova i de què decideix. Per això els experts fan servir diverses mesures i, sobretot, proven amb dades que representin la vida real.

Un altre concepte clau és el sobreajust. Imagineu un alumne que s'aprèn les respostes de memòria. A l'examen de memòria treu un deu; a l'examen de veritat, un zero. La màquina sobreajustada és igual: amb els exemples d'entrenament encerta tot, però amb qualsevol novetat s'ensorra. Memoritzar no és aprendre.

Com es detecta el sobreajust? Comparant: si la màquina encerta el 99% a l'entrenament i només el 60% a la prova, alguna cosa fa mala olor. Aquesta diferència és el senyal que va memoritzar en comptes d'entendre. Al món professional, verificar aquesta diferència és el pa de cada dia.

També existeix el problema contrari, el subajust: quan el model és tan simple que no aprèn ni els exemples d'entrenament. És com un cuiner que només sap fer pa, sigui el que sigui el que li demanin. Ni memoritza ni generalitza: és directament fluix.

A la pràctica, les empreses i els investigadors fan servir comparatives (benchmarks): bateries de proves estàndard que permeten comparar models entre si. "Aquest model rendeix millor en aquestes proves" és una frase amb sentit perquè tots han fet el mateix examen.

Però compte: una comparativa tampoc no és la veritat absoluta. Els exàmens es poden preparar, i alguns models milloren a les proves però fallen al carrer. La realitat sempre guanya el laboratori. Per això l'avaluació no es fa una vegada, sinó de manera contínua, amb dades reals i amb supervisió humana.

I quin paper hi teniu vós? Ser crítics amb les xifres. Quan una empresa anunciï "la nostra IA encerta el 99%", pregunteu-vos: amb quins casos la van provar? Representen la meva realitat? Un 99% amb casos fàcils no val el mateix que un 90% amb casos difícils.

L'avaluació també és una qüestió ètica. Un sistema de diagnòstic mèdic que falla més amb uns que amb altres no és acceptable, encara que la seva precisió global sigui alta. Per això les proves han de mirar no només la mitjana, sinó cada grup. La justícia es mesura en els detalls.

En el pròxim nivell veurem l'art de parlar amb la IA: el prompting avançat, per treure'n el màxim profit als assistents.

## 💡 Exemples pràctics
1. **Filtre de correu brossa:** s'entrena amb correus antics i es prova amb correus nous que mai no ha vist; així se sap si aprendrà a la vida real.
2. **Diagnòstic mèdic:** un model es prova amb casos de diferents grups de persones; la precisió per grups importa més que la mitjana.
3. **Previsió del temps:** s'entrena amb les dades de l'any passat i s'avalua amb les d'aquest any, que no va conèixer.

## 🛠️ Activitat guiada
Pas 1. Obriu Teachable Machine (teachablemachine.withgoogle.com) al navegador.
Pas 2. Creeu dues classes: "mà oberta" i "puny tancat". Feu servir la càmera de l'ordinador per ensenyar-li 5 exemples de cadascuna.
Pas 3. Entreneu el model i proveu amb la mateixa mà que vau fer servir per ensenyar-li: encertarà gairebé sempre.
Pas 4. Ara la prova de veritat: feu gestos que no vau ensenyar, com una mà girada o a una altra distància. Observeu com baixa l'encert.
Pas 5. Afegiu 20 exemples més de cada classe, variant distància i angle. Torneu a entrenar.
Pas 6. Repetiu la prova amb gestos nous. Compareu: va millorar l'encert amb més i millors exemples?
Pas 7. Reflexioneu: quin va ser el conjunt d'entrenament i quin el conjunt de prova?
Pas 8. Escriviu una conclusió sobre per què els exemples nous són la prova de foc d'una IA.

## ✍️ Exercicis d'autoavaluació
1. Per què no es pot examinar la màquina amb les mateixes preguntes amb què va estudiar?
2. Quina diferència hi ha entre el conjunt d'entrenament i el conjunt de prova?
3. Què és el sobreajust i com es detecta?
4. Per què una precisió alta no garanteix que la IA sigui bona?
5. Quin paper té l'usuari davant les xifres que anuncien les empreses?

**Respostes:** 1) Perquè memoritzaria i no aprendria; l'examen ha de portar preguntes noves per comprovar que generalitza. 2) El d'entrenament són els exemples amb què aprèn; el de prova són casos nous que mai no va veure i amb què se l'examina. 3) És quan la màquina memoritza els exemples d'entrenament i falla amb novetats; es detecta quan encerta molt a l'entrenament i molt menys a la prova. 4) Perquè depèn de quins casos es van provar i de què decideix; pot encertar molt en casos fàcils i fallar en els importants. 5) Ser crític: preguntar-se amb quins casos la van provar i si representen la seva realitat, en comptes de creure el número.

## ⚖️ Dimensió ètica
Avaluar és una manera de protegir les persones: un model no provat és un risc. Però l'avaluació també pot enganyar si es fa amb dades que no representen tothom. Els sistemes que decideixen sobre salut, diners o feina s'han d'avaluar per grups, no només per mitjana, i de manera independent. Exigir transparència en les proves és exigir justícia.

## 🔓 Eines obertes
- **Teachable Machine** (teachablemachine.withgoogle.com): entreneu i proveu models amb les vostres fotos o gestos.
- **TensorFlow Playground** (playground.tensorflow.org): vegeu la diferència entre encert a l'entrenament i a la prova.
- **Kaggle** (kaggle.com): conjunts de dades reals per practicar avaluacions.
- **Hugging Face** (huggingface.co): lideratges (leaderboards) on es comparen models amb proves estàndard.
- **YouTube** (youtube.com): cerqueu "sobreajust explicat" per veure animacions del concepte.

## 🧠 Resum i pont
- Abans de confiar, cal provar amb casos que la IA mai no va veure.
- Entrenar és estudiar; la prova és l'examen amb preguntes noves.
- Memoritzar no és aprendre: compte amb el sobreajust.
- Una precisió alta pot amagar injustícies.
- Les xifres es miren amb lupa, no es creuen a cegues.

En el nivell 17 dominarem el prompting avançat: l'art de demanar a la IA exactament el que volem.
