# Mòdul 3: IA Aplicada a les Dades — Nivell 05
## Idioma: CA · Dificultat: Arrel
## Temps estimat: 3 hores

## 🎯 Objectiu del nivell
- Entendre què és una fórmula i per què el full de càlcul "fa la feina" per nosaltres.
- Escriure les fórmules bàsiques de suma, resta, multiplicació i divisió.
- Fer servir la funció SUMA per totalitzar una columna sencera amb un clic.
- Conèixer l'ompliment automàtic per repetir càlculs sense escriure a mà.
- Deixar de fer servir la calculadora per a les dades que ja són a la taula.

## 📖 Vocabulari essencial
| Terme | Explicació en paraules simples |
|---|---|
| Fórmula | Una instrucció que donem al full perquè calculi. Sempre comença amb =. |
| Funció | Una fórmula ja preparada, com SUMA o MITJANA, que fa un càlcul complet. |
| Referència de cel·la | L'adreça d'una cel·la (com B3) que es fa servir dins d'una fórmula. |
| Interval | Un grup de cel·les seguides, com B2:B8, que va de la B2 fins a la B8. |
| Ompliment automàtic | Arrossegar una cel·la amb fórmula cap avall per copiar-la a les altres. |

## 📚 Lliçó principal
Recorda l'àvia de la nostra història, que sumava les despeses del mes amb llapis i calculadora? Doncs avui descobrirà que el full de càlcul fa aquesta feina per nosaltres. Al nivell 3 el vam fer servir com un quadern: escrivíem dades. Avui li ensenyarem a calcular. Una fórmula és una instrucció que donem al full perquè faci una operació. Sempre comença amb el signe igual (=). Si escriviu "=2+2" en una cel·la i premeu Enter, el full mostra 4. No és màgia, és fórmula.

Per què és tan potent? Perquè la fórmula no guarda el resultat, guarda la recepta. Si més tard canvieu el número 2 per un 5, el full torna a calcular tot sol i mostra 7. És com si la recepta de l'estofat continués valent encara que canviem les verdures. Això no es pot fer en paper: en paper, si canvia una dada, cal refer tot el compte. Al full de càlcul, el resultat s'actualitza tot sol.

Les quatre operacions bàsiques s'escriuen així: suma amb el signe més (+), resta amb el menys (-), multiplicació amb l'asterisc (*) i divisió amb la barra (/). Atenció: la multiplicació no s'escriu amb una ics ni amb un punt, sinó amb l'asterisc. "=6*7" dóna 42. La divisió tampoc no és amb dos punts: "=42/6" dóna 7. Són petits gestos, però convé conèixer-los, com conèixer on són els calaixos de la cuina.

Ara ve el salt important: en lloc de números, farem servir referències de cel·la. En lloc d'escriure "=2+3", escrivim "=B2+C2", on B2 i C2 són les cel·les que contenen el 2 i el 3. Què guanyem? Que si canvia el valor de B2, la suma s'actualitza tota sola. La fórmula mira la capsa, no el contingut; si el contingut canvia, el compte es renova. Així és com es treballa amb dades de veritat.

La funció més utilitzada del món és SUMA. Per sumar la columna de preus de la vostra taula, no cal escriure "=B2+B3+B4..." fins a l'infinit. Escriviu "=SUMA(B2:B8)" i el full suma tots els números que hi ha entre la B2 i la B8. Els dos punts (:) volen dir "des de fins a": B2:B8 és "des de la B2 fins a la B8". Un interval. És com dir-li al full: "suma aquesta tongada de números, d'aquest fins a aquest".

Escriure una fórmula és fàcil si seguiu tres passos. Primer, feu clic a la cel·la on voleu el resultat. Segon, escriviu el signe igual. Tercer, escriviu la fórmula o feu clic sobre les cel·les que voleu fer servir. De fet, podeu fer clic a B2, escriure +, fer clic a C2 i prémer Enter: el full omple les referències per vosaltres. És com dictar una recepta assenyalant els ingredients.

La funció MITJANA (o AVERAGE en anglès) calcula la mitjana: suma tots els números i els divideix entre quants n'hi ha. Si voleu saber la despesa mitjana per compra, escriviu "=MITJANA(B2:B8)". Altres funcions útils: MÍNIM i MÀXIM (el valor més petit i el més gran), COMPTA (quants números hi ha) i RODONA. No cal aprendre-les totes de memòria: el full les suggereix mentre escriviu. N'hi ha prou amb saber què existeix i què fa cadascuna.

Un altre truc meravellós: l'ompliment automàtic. Imagineu que teniu la columna "quantitat" i la columna "preu", i voleu saber quant costa cada producte (quantitat × preu). Escriviu la fórmula a la primera fila de dades, per exemple "=C2*D2". Després feu clic a la cantonada inferior dreta d'aquesta cel·la: veureu un quadradet. Arrossegueu aquest quadradet cap avall, fins a l'última fila. El full copia la fórmula a totes les files, ajustant les referències. Cada fila queda amb el seu propi compte, com una cadena de muntatge.

Per què és tan important aquest nivell en un mòdul d'IA? Perquè les fórmules són el primer pas de "demanar a una màquina que pensi amb les nostres dades". El full de càlcul no és intel·ligent, però executa les nostres ordres amb una rapidesa i sense errors que cap humà iguala. La IA farà coses semblants, però molt més complexes: buscar patrons, predir, classificar. Si enteneu com es demana un càlcul a un full, entendreu millor com es demana una anàlisi a una IA.

Compte amb un error clàssic: començar la fórmula sense el signe igual. Si escriviu "SUMA(B2:B8)" sense el =, el full ho tracta com a text i no calcula res. L'igual és la clau que obre la porta del càlcul. Un altre error: copiar una fórmula a mà. Feu servir sempre l'ompliment automàtic o el copiar i enganxar; així les referències s'ajusten bé. Escriure les mateixes fórmules una a una és perdre temps i arriscar-se a errors.

Avui, amb SUMES, multiplicacions i ompliment automàtic, la vostra taula de despeses es converteix en una petita central de càlcul. Al nivell 6 farem el següent salt: les taules dinàmiques, que resumeixen dades per categories amb un clic. Per ara, celebreu el que ja sabeu: heu ensenyat a calcular al full de càlcul.

## 💡 Exemples pràctics
### Exemple 1: Total de la compra
A la vostra taula de despeses, escriviu a la cel·la de sota dels preus "=SUMA(D2:D7)" i premeu Enter. El full suma tota la columna: la vostra compra total de la setmana, sense calculadora.

### Exemple 2: Preu per quantitat
Si teniu "quantitat" i "preu per unitat", escriviu en una columna nova "=C2*D2" i arrossegueu cap avall. Cada fila mostra quant costa aquest producte.

### Exemple 3: Despesa mitjana per compra
Escriviu "=MITJANA(D2:D7)". El full calcula la despesa mitjana per compra. Comproveu que la xifra us sembla raonable per a la vostra setmana.

## 🛠️ Activitat guiada
Pas 1. Obriu el full "Les meves despeses de la setmana" a Google Sheets.
Pas 2. Assegureu-vos que a la columna D (preu) teniu com a mínim 5 números, des de D2 fins a D6.
Pas 3. Feu clic a la cel·la D8 (una fila buida a sota dels preus).
Pas 4. Escriviu: =SUMA(D2:D6) i premeu Enter. Veureu el total de la setmana.
Pas 5. Escriviu a E1 la capçalera "total per producte".
Pas 6. A E2 escriviu: =C2*D2 i premeu Enter. Apareix el cost del primer producte.
Pas 7. Feu clic de nou a E2 i moveu el ratolí fins a la cantonada inferior dreta fins a veure el quadradet.
Pas 8. Arrossegueu el quadradet cap avall fins a E6 i deixeu-lo anar. Totes les files queden calculades.
Pas 9. Canvieu el preu de D2 per un altre número. Observeu com canvien sols el total i el "total per producte".
Pas 10. Escriviu a E8: =MITJANA(D2:D6) i premeu Enter. Ara sabeu quina és la vostra despesa mitjana per compra.

## ✍️ Exercicis d'autoavaluació
1. Amb quin signe ha de començar tota fórmula?
2. Com s'escriu la multiplicació en un full de càlcul?
3. Què vol dir "B2:B8"?
4. Què fa la funció SUMA?
5. Què és l'ompliment automàtic i per a què serveix?

Respostes: 1. Amb el signe igual (=). 2. Amb l'asterisc (*); per exemple =6*7. 3. Un interval: totes les cel·les des de la B2 fins a la B8. 4. Suma tots els números d'un interval, com =SUMA(B2:B8). 5. Arrossegar la cantonada d'una cel·la amb fórmula cap avall per copiar-la a les altres, ajustant les referències de cada fila.

## ⚖️ Dimensió ètica
Les fórmules calculen sense jutjar: fan exactament el que se'ls demana. Per això cal demanar bé. Un error comú és calcular sobre dades brutes: si una fila té un preu mal escrit, el total surt malament, encara que la fórmula sigui perfecta. Reviseu sempre les vostres dades abans de calcular. I quan algú us presenti una xifra calculada amb un full o una IA, pregunteu-vos què hi havia dins de les dades: una mitjana enganyosa és pitjor que no tenir mitjana.

## 🔓 Eines obertes
| Eina | Què és i per a què serveix | On trobar-la |
|---|---|---|
| Google Sheets | Full de càlcul amb fórmules, funcions i ompliment automàtic | https://sheets.google.com |
| LibreOffice Calc | El mateix, instal·lat a l'ordinador i sense connexió | https://ca.libreoffice.org |
| Guia de fórmules de Google | Llista oficial de totes les funcions de Sheets | https://support.google.com/docs/table/25273 |
| Khan Academy (fulls de càlcul) | Cursos gratuïts en vídeo sobre fulls de càlcul | https://ca.khanacademy.org |

## 🧠 Resum i pont
- Les fórmules comencen amb = i guarden la recepta, no només el resultat.
- SUMA, MITJANA, MÍNIM i MÀXIM són les funcions més útils.
- Les referències de cel·la fan que el càlcul s'actualitzi tot sol.
- L'ompliment automàtic copia una fórmula a tota una columna.
Al nivell següent aprendrem les taules dinàmiques: resumir una taula sencera per categories amb un clic, sense escriure fórmules.
