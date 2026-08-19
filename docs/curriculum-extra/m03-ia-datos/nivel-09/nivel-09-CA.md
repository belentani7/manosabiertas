# Mòdul 3: IA Aplicada a les Dades — Nivell 09
## Idioma: CA · Dificultat: Arrel
## Temps estimat: 3 hores

## 🎯 Objectiu del nivell
- Entendre què és l'estadística i per a què serveix a la vida diària.
- Calcular la mitjana (promig) d'un conjunt de números.
- Calcular la mediana (el valor del centre) sense confondre's.
- Identificar la moda (el valor que més es repeteix).
- Saber quan fer servir cadascuna i per què la mitjana pot enganyar.

## 📖 Vocabulari essencial
| Terme | Explicació en paraules simples |
|---|---|
| Estadística | La ciència de resumir moltes dades en poques xifres. |
| Mitjana | El promig: sumar tots i dividir entre quants n'hi ha. |
| Mediana | El valor que queda al centre un cop ordenades les dades. |
| Moda | El valor que més vegades es repeteix. |
| Dada atípica | Un valor molt diferent dels altres, que descol·loca els resums. |

## 📚 Lliçó principal
Als nivells anteriors vam dibuixar dades: barres, línies i sectors. Però de vegades no volem un dibuix, volem una xifra. "Quina és la despesa mitjana de la meva família al mes?" "Quant guanya de mitjana un veí del meu poble?" "Quina edat té el grup de la meva classe de gimnàstica?" Per a això existeix l'estadística: la ciència de resumir moltes dades en una sola xifra. I les seves tres eines bàsiques es diuen mitjana, mediana i moda.

La mitjana és la més famosa. Per calcular-la, se sumen tots els valors i es divideix entre quants n'hi ha. Cinc compres de 2, 4, 6, 8 i 10 euros: sumem 2+4+6+8+10 = 30, i dividim entre 5, que és 6. La mitjana és 6 euros. La mitjana respon "si repartim el total a parts iguals, quant toca a cadascú?". És com repartir un pastís entre tots: la mitjana és el tros que li tocaria a cada comensal.

La mediana és la germana més seriosa. Per calcular-la, s'ordenen les dades de menor a major i s'agafa la que queda al centre. Amb les mateixes compres ordenades: 2, 4, 6, 8, 10. La del centre és el 6. Curiosament, la mitjana i la mediana coincideixen aquí. Però no sempre. La mediana respon "quin és el valor del mig?". És la persona que, en una fila ordenada de menor a major, es queda al lloc central.

La moda és la més simple: és el valor que més vegades es repeteix. A les notes de la família, si tres néts van treure un 7, la moda és 7. La moda serveix per a dades que no són números: el gust de gelat més demanat, el color de cotxe més venut, el nom més repetit. No es pot calcular "la mitjana" dels gusts de gelat, però sí la moda: el gust preferit. La moda és "el que més es veu".

Quan fer servir cadascuna? Depèn de les dades. Si les dades són ordenades i sense rareses, la mitjana és perfecta. Si hi ha una dada atípica (un valor enorme o diminut que no encaixa), la mitjana es descol·loca i la mediana és més honesta. Pensi en els sous d'una empresa: si hi ha un cap que guanya 10.000 euros i nou empleats que en guanyen 1.000, la mitjana dóna 1.900 euros. Però cap dels nou no guanya això: la mediana (1.000) explica la realitat millor.

Aquest exemple del sou és clau per a la vida d'un ciutadà de 40+. Quan les notícies diuen "el salari mitjà és X", pregunteu-vos: aquesta xifra inclou dades atípiques? Uns quants sous altíssims poden pujar la mitjana i donar una impressió falsa. La mediana, en canvi, resisteix aquests valors estranys. Per això els organismes seriosos solen publicar la mediana quan parlen de rendes o de preus d'habitatge.

Un altre exemple quotidià: els preus de les cases. En un barri, si la majoria de cases valen 150.000 però hi ha un xalet de 900.000, la mitjana sortirà molt alta i donarà la impressió que tot és caríssim. La mediana (150.000) explica la realitat del barri. En comprar o vendre, fixeu-vos si us parlen de mitjana o de mediana: la diferència pot ser enorme.

La moda també té el seu ús pràctic. El forner vol saber quin pa ven més (la moda de les seves vendes) per no quedar-se sense existències. L'ajuntament vol saber quina reclamació rep més (la moda de les queixes) per arreglar el més urgent. La moda respon "què és el més freqüent?", que moltes vegades és exactament la pregunta que importa.

A Google Sheets, les tres es calculen amb funcions que ja coneixem del nivell 5: MITJANA per a la mitjana, MEDIANA per a la mediana i MODA per a la moda. Escriviu "=MITJANA(A2:A10)", "=MEDIANA(A2:A10)" o "=MODA(A2:A10)" i el full calcula. És un bon moment per comprovar el truc de la mitjana enganyosa: poseu una dada atípica a la vostra taula i vegeu com la mitjana canvia molt més que la mediana.

I què hi té a veure tot això amb la intel·ligència artificial? Moltíssim. La IA, al fons, és una gran estadística: busca resums i patrons en dades enormes. La mitjana, la mediana i la moda són les seves eines més simples. Quan en nivells avançats la IA "prediu" alguna cosa, estarà fent servir idees estadístiques semblants, però amb milers de variables i càlculs que un humà no pot fer a mà. Entendre l'estadística bàsica és entendre l'idioma de la IA.

Amb aquest nivell tanquem la banda Arrel (nivells 5-9). Ja hem après a calcular, resumir, dibuixar i mesurar les dades. A la banda Tija (nivells 10-14) farem el salt de qualitat: aprendrem a distingir el que és correlació del que és causalitat, a netejar dades, i a construir dashboards amb eines professionals. L'estadística d'avui és el fonament de tot el que ve.

## 💡 Exemples pràctics
### Exemple 1: La mitjana de la despesa familiar
Amb la vostra taula de despeses del mes, calculeu amb "=MITJANA" la despesa mitjana per compra. Comenteu amb la vostra família si la xifra s'assembla a la realitat.

### Exemple 2: La mediana dels sous del barri
Anoteu els sous aproximats de 9 veïns. Ordeneu-los i trobeu el del centre: aquesta és la mediana. Ara sumeu-ho tot i dividiu entre 9: aquesta és la mitjana. Són semblants o molt diferents? Per què?

### Exemple 3: La moda dels gusts de gelat
Pregunteu a 10 persones el seu gust de gelat preferit. Apunteu-los i conteu quin es repeteix més. Aquesta és la moda. Veureu que no es pot calcular la "mitjana" dels gusts, només la moda.

## 🛠️ Activitat guiada
Pas 1. Obriu Google Sheets i creeu un full nou anomenat "La meva estadística".
Pas 2. Escriviu a A1 "despesa" i a sota 9 despeses de la vostra setmana (per exemple: 5, 8, 3, 12, 6, 4, 9, 7, 5).
Pas 3. A B1 escriviu "mitjana" i a B2 la fórmula =MITJANA(A2:A10). Premeu Enter.
Pas 4. A C1 escriviu "mediana" i a C2 la fórmula =MEDIANA(A2:A10). Premeu Enter.
Pas 5. A D1 escriviu "moda" i a D2 la fórmula =MODA(A2:A10). Premeu Enter.
Pas 6. Compareu les tres xifres. Són semblants? Normalment ho seran amb dades normals.
Pas 7. Afegiu una dada atípica: escriviu a A11 el número 100 (una compra enorme).
Pas 8. Canvieu les fórmules perquè arribin fins a A11: =MITJANA(A2:A11), etc.
Pas 9. Observeu: la mitjana haurà pujat molt; la mediana gairebé res. Això és l'efecte de la dada atípica.
Pas 10. Escriviu una conclusió a E1: "la mitjana es descol·loca amb valors rars; la mediana resisteix". Deseu el full.

## ✍️ Exercicis d'autoavaluació
1. Com es calcula la mitjana i què significa?
2. Com es calcula la mediana?
3. Què és la moda i per a quin tipus de dades serveix?
4. Per què la mitjana pot enganyar quan hi ha una dada atípica?
5. Quina funció fa servir Google Sheets per a la mediana?

Respostes: 1. Se sumen tots els valors i es divideix entre quants n'hi ha; és el valor que tocaria a cadascú si es repartís el total. 2. S'ordenen les dades de menor a major i s'agafa la del centre. 3. El valor que més es repeteix; serveix també per a dades que no són números (gustos, colors, noms). 4. Perquè un valor molt alt o molt baix desplaça la suma i la mitjana deixa de representar la majoria; la mediana resisteix millor. 5. MEDIANA, amb la forma =MEDIANA(interval).

## ⚖️ Dimensió ètica
Les xifres que resumeixen dades poden fer-se servir per enganyar. Un polític o un anunci poden triar entre mitjana i mediana segons el que els convingui. Apreneu a preguntar sempre: "quina mesura és aquesta i quines dades la componen?". I quan presenteu xifres, digueu amb claredat si parleu de mitjana o de mediana. Resumir amb honestedat no és només una tècnica: és un compromís amb la veritat.

## 🔓 Eines obertes
| Eina | Què és i per a què serveix | On trobar-la |
|---|---|---|
| Google Sheets | Funcions MITJANA, MEDIANA i MODA gratuïtes | https://sheets.google.com |
| LibreOffice Calc | Les mateixes funcions, sense connexió | https://ca.libreoffice.org |
| Khan Academy (estadística) | Cursos gratuïts d'estadística en vídeo | https://ca.khanacademy.org/math/statistics-probability |
| Gapminder | Dades reals del món per practicar resums | https://www.gapminder.org |

## 🧠 Resum i pont
- La mitjana reparteix el total; la mediana és el valor central; la moda és el que més es repeteix.
- La mitjana es descol·loca amb dades atípiques; la mediana resisteix.
- A Sheets: MITJANA, MEDIANA i MODA.
- En rebre xifres alienes, pregunteu sempre quina mesura és i quines dades la formen.
Amb aquest nivell tanquem la banda Arrel. A la banda Tija aprendrem a distingir correlació de causalitat, a netejar dades i a construir dashboards: comencem a pensar com analistes.
