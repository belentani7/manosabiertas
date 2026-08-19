# Mòdul 3: IA Aplicada a les Dades — Nivell 15
## Idioma: CA · Dificultat: Branca
## Temps estimat: 3 hores

## 🎯 Objectiu del nivell
- Entendre què és l'anàlisi predictiva i per què és la part més "màgica" de la IA.
- Comprendre que predir no és endevinar: és calcular probabilitats amb dades passades.
- Distingir entre predicció bona i predicció dolenta.
- Aprendre la idea d'"entrenar" i "avaluar" un model.

## 📖 Vocabulari essencial
| Terme | Explicació en paraules simples |
|---|---|
| Anàlisi predictiva | Fer servir dades passades per anticipar què passarà en el futur. |
| Model | La regla que la IA aprèn per fer prediccions. |
| Entrenar | Ensenyar al model amb exemples de dades passades. |
| Avaluar | Comprovar si les prediccions del model són correctes. |
| Probabilitat | La mesura de quanta confiança té una predicció, de 0 a 100%. |

## 📚 Lliçó principal
Benvingut a la banda Branca. És la banda més esperada del curs, perquè aquí la IA fa el que sembla màgia: mirar cap al futur. Fins ara hem après a mirar cap al passat: ordenar dades, dibuixar-les, netejar-les, trobar correlacions. Tot això era l'entrenament d'un detectiu. Ara arriba l'hora de l'oracle: fer servir el que sabem per anticipar el que ve.

Què és l'anàlisi predictiva? És la disciplina que fa servir dades passades per calcular què passarà en el futur. No és endevinació ni superstició: és estadística aplicada. Quan el meteoròleg diu "demà hi ha un 70% de probabilitat de pluja", no està llançant una moneda: està comparant el dia d'avui amb milers de dies semblants del passat i comptant quantes vegades va ploure després. Això és anàlisi predictiva.

La peça central és el "model". Un model és una regla que la màquina aprèn sola a partir d'exemples. Imagineu-vos un nen que mai no ha vist gossos ni gats. Li ensenyem 100 fotos: "això és un gos", "això és un gat". Amb aquestes 100 fotos, el nen interioritza la regla: "quatre potes, orelles caigudes, morro llarg... gos; orelles punxegudes, miola... gat". Després li ensenyem una foto nova i l'encerta. El nen acaba d'entrenar un model. La IA fa exactament el mateix, però amb milions d'exemples.

El procés té dues fases que cal conèixer molt bé perquè les farem servir sempre: entrenar i avaluar. Entrenar és ensenyar al model amb dades del passat, com el nen amb les 100 fotos. Avaluar és comprovar si ha après bé: se li donen preguntes la resposta de les quals ja coneixem, se'l deixa respondre sense ajuda, i es compten els encerts. Si encerta el 95%, el model és bo. Si encerta el 40%, no serveix.

Aquí hi ha la trampa més perillosa del món de la IA: un model pot encertar de memòria. Si el nen memoritza les 100 fotos exactes i li ensenyem una d'aquestes mateixes 100, encerta sempre... però no sap generalitzar: la foto 101, que mai no ha vist, la falla. Els professionals anomenen això "memoritzar en comptes d'aprendre". Per això l'avaluació sempre es fa amb dades que el model NO ha vist durant l'entrenament. Aquest detall separa els bons dels xarnegos.

Hi ha una altra idea que cal endur-se a casa: les prediccions de la IA mai no són certeses, són probabilitats. Una IA que prediu malalties mai no diu "vós teniu això"; diu "hi ha un 80% de probabilitat que...". El percentatge importa. Una predicció amb un 95% de confiança i una amb un 55% no mereixen el mateix tracte. Desconfieu de qualsevol sistema que doni respostes sense dir quant s'equivoca. L'honestedat del model és el seu percentatge.

On trobem l'anàlisi predictiva a la vida diària? A tot arreu. El correu que prediu el spam, el banc que detecta targetes robades, la botiga que us suggereix "potser també us agradarà", el navegador que calcula quant trigareu a arribar a l'hospital, la televisió que endevina quina sèrie us agradarà. Tots aquests sistemes, cada dia, fan anàlisi predictiva amb les seves dades i amb les vostres. Ja viviu envoltats d'oracles; avui heu après com funcionen.

Per a aquest curs, la bona notícia és que no cal programar per fer anàlisi predictiva. Als propers nivells farem servir eines visuals i gratuïtes on "entrenar" vol dir arrossegar carpetes i prémer botons. Vós ja teniu les bases que altres no tenen: sabeu que darrere de tota predicció hi ha dades netes (nivell 11), correlacions sospitoses (nivell 10) i decisions responsables (nivell 13). La màquina prediu; vós jutgeu.

Al nivell següent veurem el primer tipus de predicció: la regressió, que s'usa quan volem predir un número. Quants quilos de tomàquets donarà l'hort, quant costarà el bitllet d'avió, quants clients vindran al mercat. Per ara, recordeu això: predir no és endevinar, entrenar no és memoritzar i la confiança de tota predicció es mesura amb un percentatge.

## 💡 Exemples pràctics
### Exemple 1: El meteoròleg
Quan el pronòstic diu "70% de probabilitat de pluja", està comparant el dia actual amb milers de dies semblants del passat. Això és anàlisi predictiva pura.

### Exemple 2: El nen i els animals
Amb 100 fotos etiquetades, el nen aprèn la regla que separa gossos de gats. Després encerta amb una foto nova. Entrenar i generalitzar, en una frase.

### Exemple 3: El banc
El banc detecta que la vostra targeta s'usa en una ciutat llunyana alhora que s'usa a la vostra. És improbable, així que el sistema prediu frau i la bloqueja. Basa la decisió en una probabilitat calculada amb milions d'operacions passades.

## 🛠️ Activitat guiada
Pas 1. Obriu un full nou de Google Sheets i escriviu el títol "La meva primera predicció".
Pas 2. Feu una llista amb 10 dies i el nombre de gelats que va vendre un quiosc (inventeu dades que pugin quan fa calor).
Pas 3. Afegiu una columna amb la temperatura de cada dia (si voleu, feu servir dades reals del nivell 14).
Pas 4. Feu un gràfic de dispersió amb temperatura (X) i gelats (Y), com al nivell 10.
Pas 5. Observeu: els punts formen una línia ascendent? Doncs temperatura i gelats estan correlacionats.
Pas 6. Imagineu-vos que la IA traça la "millor línia" que passa entre els punts. Això s'anomena regressió i és el tema del nivell 16.
Pas 7. Escriviu una predicció: "si demà fan 28 graus, quants gelats es vendran?".
Pas 8. Estimeu un número amb els ulls (mirant el núvol de punts) i escriviu-lo.
Pas 9. Ara penseu: aquesta predicció és una certesa o una probabilitat? Escriviu-ho a sota.
Pas 10. Deseu el full. Heu fet el vostre primer pas en l'anàlisi predictiva.

## ✍️ Exercicis d'autoavaluació
1. Què és l'anàlisi predictiva?
2. Què és un model?
3. Quines són les dues fases del procés de la IA?
4. Per què s'avalua amb dades que el model no ha vist?
5. Les prediccions de la IA són certeses o probabilitats?

Respostes: 1. Fer servir dades passades per anticipar què passarà en el futur. 2. La regla que la IA aprèn a partir d'exemples per fer prediccions. 3. Entrenar (ensenyar amb exemples) i avaluar (comprovar amb dades noves). 4. Perquè si s'avalua amb dades ja vistes, el model pot estar memoritzant en comptes d'aprenent. 5. Són probabilitats, amb un percentatge de confiança que cal mirar.

## ⚖️ Dimensió ètica
L'anàlisi predictiva pot ajudar o perjudicar. Un banc que prediu impagaments amb dades esbiaixades pot negar crèdit a gent que sí que podria pagar; un algorisme policial mal entrenat pot assenyalar barris sencers. La pregunta ètica central és: qui respon quan la predicció s'equivoca? La resposta honesta: sempre una persona. La IA proposa, les persones disposen. I qualsevol model que afecti persones s'ha de poder explicar: si ningú no sap per què la màquina ha decidit alguna cosa, aquesta màquina no hauria de decidir res.

## 🔓 Eines obertes
| Eina | Què és i per a què serveix | On trobar-la |
|---|---|---|
| Google Sheets | Per explorar dades i veure correlacions que prediuen | https://sheets.google.com |
| Teachable Machine | Entrenar el vostre primer model sense programar | https://teachablemachine.withgoogle.com |
| Machine Learning for Kids | Introducció visual a l'aprenentatge automàtic | https://machinelearningforkids.co.uk |
| Gapminder | Dades reals per practicar prediccions | https://www.gapminder.org |

## 🧠 Resum i pont
- L'anàlisi predictiva fa servir el passat per anticipar el futur amb probabilitats.
- Un model és una regla apresa a partir d'exemples.
- Les dues fases són entrenar i avaluar; l'avaluació sempre fa servir dades noves.
- Cap predicció no és certesa: mireu sempre el percentatge.
Al nivell següent veurem la regressió: predir números com vendes, quilos o temperatures.
