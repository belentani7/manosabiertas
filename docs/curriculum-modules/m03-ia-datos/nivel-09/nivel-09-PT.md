# Módulo 3: IA Aplicada aos Dados — Nível 09
## Idioma: PT · Dificuldade: Raiz
## Tempo estimado: 3 horas

## 🎯 Objetivo do nível
- Perceber o que é a estatística e para que serve na vida diária.
- Calcular a média (promédio) de um conjunto de números.
- Calcular a mediana (o valor do centro) sem confusões.
- Identificar a moda (o valor que mais se repete).
- Saber quando usar cada uma e por que a média pode enganar.

## 📖 Vocabulário essencial
| Termo | Explicação em palavras simples |
|---|---|
| Estatística | A ciência de resumir muitos dados em poucas cifras. |
| Média | A média: somar todos e dividir por quantos são. |
| Mediana | O valor que fica no centro depois de ordenar os dados. |
| Moda | O valor que mais vezes se repete. |
| Dado atípico | Um valor muito diferente dos outros, que desarruma os resumos. |

## 📚 Lição principal
Nos níveis anteriores desenhámos dados: barras, linhas e setores. Mas às vezes não queremos um desenho, queremos uma cifra. "Qual é o gasto médio da minha família por mês?" "Quanto ganha em média um vizinho da minha terra?" "Que idade tem o grupo na minha aula de ginástica?" Para isso existe a estatística: a ciência de resumir muitos dados numa só cifra. E as suas três ferramentas básicas chamam-se média, mediana e moda.

A média é a mais famosa. Para a calcular, somam-se todos os valores e divide-se por quantos são. Cinco compras de 2, 4, 6, 8 e 10 euros: somamos 2+4+6+8+10 = 30, e dividimos por 5, que dá 6. A média é 6 euros. A média responde "se repartirmos o total em partes iguais, quanto calha a cada um?". É como repartir uma tarte por todos: a média é o pedaço que calharia a cada comensal.

A mediana é a irmã mais séria. Para a calcular, ordenam-se os dados do menor para o maior e pega-se no que fica no centro. Com as mesmas compras ordenadas: 2, 4, 6, 8, 10. O do centro é o 6. Curiosamente, a média e a mediana coincidem aqui. Mas nem sempre. A mediana responde "qual é o valor do meio?". É a pessoa que, numa fila ordenada do menor para o maior, fica no posto central.

A moda é a mais simples: é o valor que mais vezes se repete. Nas notas da família, se três netos tiveram 7, a moda é 7. A moda serve para dados que não são números: o sabor de gelado mais pedido, a cor de carro mais vendida, o nome mais repetido. Não se pode calcular "a média" dos sabores de gelado, mas pode-se a moda: o sabor favorito. A moda é "o que mais se vê".

Quando usar cada uma? Depende dos dados. Se os dados são ordenados e sem esquisitices, a média é perfeita. Se há um dado atípico (um valor enorme ou minúsculo que não encaixa), a média desarruma-se e a mediana é mais honesta. Pense nos salários de uma empresa: se há um chefe que ganha 10.000 euros e nove empregados que ganham 1.000, a média dá 1.900 euros. Mas nenhum dos nove ganha isso: a mediana (1.000) conta a realidade melhor.

Esse exemplo do salário é chave para a vida de um cidadão de 40+. Quando as notícias dizem "o salário médio é X", pergunte-se: essa cifra inclui dados atípicos? Poucos salários altíssimos podem subir a média e dar uma impressão falsa. A mediana, pelo contrário, resiste a esses valores raros. Por isso os organismos sérios costumam publicar a mediana quando falam de rendimentos ou preços de habitação.

Outro exemplo quotidiano: os preços das casas. Num bairro, se a maioria das casas vale 150.000 mas há uma vivenda de 900.000, a média sairá muito alta e dará a impressão de que tudo é caríssimo. A mediana (150.000) conta a realidade do bairro. Ao comprar ou vender, repare se lhe falam de média ou de mediana: a diferença pode ser enorme.

A moda também tem o seu uso prático. O padeiro quer saber que pão vende mais (a moda das suas vendas) para não ficar sem stock. A câmara quer saber que reclamação recebe mais (a moda das queixas) para arranjar o mais urgente. A moda responde "o que é mais frequente?", que muitas vezes é exatamente a pergunta que importa.

No Google Sheets, as três calculam-se com funções que já conhecemos do nível 5: MÉDIA para a média, MEDIANA para a mediana e MODO para a moda. Escreva "=MÉDIA(A2:A10)", "=MEDIANA(A2:A10)" ou "=MODO(A2:A10)" e a folha calcula. É um bom momento para verificar o truque da média enganosa: ponha um dado atípico na sua tabela e veja como a média muda muito mais do que a mediana.

E o que tem isto a ver com a inteligência artificial? Muitíssimo. A IA, no fundo, é uma grande estatística: procura resumos e padrões em dados enormes. A média, a mediana e a moda são as suas ferramentas mais simples. Quando em níveis avançados a IA "prevê" algo, estará a usar ideias estatísticas parecidas, mas com milhares de variáveis e cálculos que um humano não pode fazer à mão. Entender a estatística básica é entender o idioma da IA.

Com este nível fechamos a banda Raiz (níveis 5-9). Já aprendemos a calcular, resumir, desenhar e medir os dados. Na banda Caule (níveis 10-14) daremos o salto de qualidade: aprenderemos a distinguir o que é correlação do que é causalidade, a limpar dados, e a construir dashboards com ferramentas profissionais. A estatística de hoje é o alicerce de tudo o que vem.

## 💡 Exemplos práticos
### Exemplo 1: A média do gasto familiar
Com a sua tabela de despesas do mês, calcule com "=MÉDIA" o gasto médio por compra. Comente com a sua família se a cifra se parece com a realidade.

### Exemplo 2: A mediana dos salários do bairro
Anote os salários aproximados de 9 vizinhos. Ordene-os e encontre o do centro: essa é a mediana. Agora some tudo e divida por 9: essa é a média. São parecidas ou muito diferentes? Porquê?

### Exemplo 3: A moda dos sabores de gelado
Pergunte a 10 pessoas o seu sabor de gelado favorito. Apunte-os e conte qual se repete mais. Essa é a moda. Verá que não se pode calcular a "média" dos sabores, só a moda.

## 🛠️ Atividade guiada
Passo 1. Abra o Google Sheets e crie uma folha nova chamada "A minha estatística".
Passo 2. Escreva em A1 "gasto" e abaixo 9 gastos da sua semana (por exemplo: 5, 8, 3, 12, 6, 4, 9, 7, 5).
Passo 3. Em B1 escreva "média" e em B2 a fórmula =MÉDIA(A2:A10). Prima Enter.
Passo 4. Em C1 escreva "mediana" e em C2 a fórmula =MEDIANA(A2:A10). Prima Enter.
Passo 5. Em D1 escreva "moda" e em D2 a fórmula =MODO(A2:A10). Prima Enter.
Passo 6. Compare as três cifras. São parecidas? Normalmente serão com dados normais.
Passo 7. Adicione um dado atípico: escreva em A11 o número 100 (uma compra enorme).
Passo 8. Mude as fórmulas para abrangerem até A11: =MÉDIA(A2:A11), etc.
Passo 9. Observe: a média terá subido muito; a mediana quase nada. Isso é o efeito do dado atípico.
Passo 10. Escreva uma conclusão em E1: "a média desarruma-se com valores raros; a mediana resiste". Guarde a folha.

## ✍️ Exercícios de autoavaliação
1. Como se calcula a média e o que significa?
2. Como se calcula a mediana?
3. O que é a moda e para que tipo de dados serve?
4. Porque é que a média pode enganar quando há um dado atípico?
5. Que função usa o Google Sheets para a mediana?

Respostas: 1. Somam-se todos os valores e divide-se por quantos são; é o valor que calharia a cada um se se repartisse o total. 2. Ordenam-se os dados do menor para o maior e pega-se no do centro. 3. O valor que mais se repete; serve também para dados que não são números (sabores, cores, nomes). 4. Porque um valor muito alto ou muito baixo desloca a soma e a média deixa de representar a maioria; a mediana resiste melhor. 5. MEDIANA, com a forma =MEDIANA(intervalo).

## ⚖️ Dimensão ética
As cifras que resumem dados podem ser usadas para enganar. Um político ou um anúncio podem escolher entre média e mediana conforme lhes convém. Aprenda a perguntar sempre: "que medida é esta e que dados a compõem?". E quando apresentar cifras, diga com clareza se fala de média ou de mediana. Resumir com honestidade não é só uma técnica: é um compromisso com a verdade.

## 🔓 Ferramentas abertas
| Ferramenta | O que é e para que serve | Onde encontrar |
|---|---|---|
| Google Sheets | Funções MÉDIA, MEDIANA e MODO gratuitas | https://sheets.google.com |
| LibreOffice Calc | As mesmas funções, sem ligação | https://pt.libreoffice.org |
| Khan Academy (estatística) | Cursos gratuitos de estatística em vídeo | https://pt.khanacademy.org/math/statistics-probability |
| Gapminder | Dados reais do mundo para praticar resumos | https://www.gapminder.org |

## 🧠 Resumo e ponte
- A média reparte o total; a mediana é o valor central; a moda é o que mais se repete.
- A média desarruma-se com dados atípicos; a mediana resiste.
- No Sheets: MÉDIA, MEDIANA e MODO.
- Ao receber cifras alheias, pergunte sempre que medida é e que dados a formam.
Com este nível fechamos a banda Raiz. Na banda Caule vamos aprender a distinguir correlação de causalidade, a limpar dados e a construir dashboards: começamos a pensar como analistas.
