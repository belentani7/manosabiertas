# Módulo 3: IA Aplicada aos Dados — Nível 05
## Idioma: PT · Dificuldade: Raiz
## Tempo estimado: 3 horas

## 🎯 Objetivo do nível
- Perceber o que é uma fórmula e por que a folha de cálculo "faz o trabalho" por nós.
- Escrever as fórmulas básicas de soma, subtração, multiplicação e divisão.
- Usar a função SOMA para totalizar uma coluna inteira com um clique.
- Conhecer o preenchimento automático para repetir cálculos sem escrever à mão.
- Deixar de usar a calculadora para os dados que já estão na tabela.

## 📖 Vocabulário essencial
| Termo | Explicação em palavras simples |
|---|---|
| Fórmula | Uma instrução que damos à folha para que calcule. Começa sempre com =. |
| Função | Uma fórmula já preparada, como SOMA ou MÉDIA, que faz um cálculo completo. |
| Referência de célula | A morada de uma célula (como B3) que se usa dentro de uma fórmula. |
| Intervalo | Um grupo de células seguidas, como B2:B8, que vai da B2 até à B8. |
| Preenchimento automático | Arrastar uma célula com fórmula para baixo para a copiar para as outras. |

## 📚 Lição principal
Lembra-se da avó da nossa história, que somava as despesas do mês com lápis e calculadora? Pois hoje vai descobrir que a folha de cálculo faz esse trabalho por nós. No nível 3 usámo-la como um caderno: escrevíamos dados. Hoje vamos ensinar-lhe a calcular. Uma fórmula é uma instrução que damos à folha para que faça uma operação. Começa sempre com o sinal de igual (=). Se escrever "=2+2" numa célula e premir Enter, a folha mostra 4. Não é magia, é fórmula.

Porque é tão poderosa? Porque a fórmula não guarda o resultado, guarda a receita. Se mais tarde mudar o número 2 para um 5, a folha volta a calcular sozinha e mostra 7. É como se a receita do guisado continuasse a valer mesmo mudando os legumes. Isso não se faz em papel: em papel, se mudar um dado, tem de refazer toda a conta. Na folha de cálculo, o resultado atualiza-se sozinho.

As quatro operações básicas escrevem-se assim: soma com o sinal de mais (+), subtração com o menos (-), multiplicação com o asterisco (*) e divisão com a barra (/). Atenção: a multiplicação não se escreve com um xis nem com um ponto, mas com o asterisco. "=6*7" dá 42. A divisão também não é com dois pontos: "=42/6" dá 7. São pequenos gestos, mas convém conhecê-los, como conhecer onde ficam as gavetas da cozinha.

Agora vem o salto importante: em vez de números, usaremos referências de célula. Em vez de escrever "=2+3", escrevemos "=B2+C2", onde B2 e C2 são as células que contêm o 2 e o 3. O que ganhamos? Que se mudar o valor de B2, a soma atualiza-se sozinha. A fórmula olha para a caixa, não para o conteúdo; se o conteúdo mudar, a conta renova-se. É assim que se trabalha com dados a sério.

A função mais usada do mundo é SOMA. Para somar a coluna de preços da sua tabela, não precisa de escrever "=B2+B3+B4..." até ao infinito. Escreve "=SOMA(B2:B8)" e a folha soma todos os números que estão entre a B2 e a B8. Os dois pontos (:) significam "desde até": B2:B8 é "desde a B2 até à B8". Um intervalo. É como dizer à folha: "soma esta série de números, deste até este".

Escrever uma fórmula é fácil se seguir três passos. Primeiro, faça clique na célula onde quer o resultado. Segundo, escreva o sinal de igual. Terceiro, escreva a fórmula ou faça clique sobre as células que quer usar. Na verdade, pode fazer clique em B2, escrever +, fazer clique em C2 e premir Enter: a folha preenche as referências por si. É como ditar uma receita apontando para os ingredientes.

A função MÉDIA (ou AVERAGE em inglês) calcula a média: soma todos os números e divide-os por quantos são. Se quiser saber o gasto médio por compra, escreva "=MÉDIA(B2:B8)". Outras funções úteis: MÍNIMO e MÁXIMO (o valor mais pequeno e o maior), CONTAR (quantos números há) e ARREDONDAR. Não é preciso saber todas de cor: a folha sugere-as enquanto escreve. Basta conhecer o que existe e o que faz cada uma.

Outro truque maravilhoso: o preenchimento automático. Imagine que tem a coluna "quantidade" e a coluna "preço", e quer saber quanto custa cada produto (quantidade × preço). Escreva a fórmula na primeira linha de dados, por exemplo "=C2*D2". Depois faça clique no canto inferior direito dessa célula: verá um quadradinho. Arraste esse quadradinho para baixo, até à última linha. A folha copia a fórmula para todas as linhas, ajustando as referências. Cada linha fica com a sua própria conta, como uma linha de montagem.

Porque é este nível tão importante para um módulo de IA? Porque as fórmulas são o primeiro passo de "pedir a uma máquina que pense com os nossos dados". A folha de cálculo não é inteligente, mas executa as nossas ordens com uma rapidez e sem erros que nenhum humano iguala. A IA fará coisas parecidas, mas muito mais complexas: procurar padrões, prever, classificar. Se perceber como se pede um cálculo a uma folha, perceberá melhor como se pede uma análise a uma IA.

Cuidado com um erro clássico: começar a fórmula sem o sinal de igual. Se escrever "SOMA(B2:B8)" sem o =, a folha trata-o como texto e não calcula nada. O igual é a chave que abre a porta do cálculo. Outro erro: copiar uma fórmula à mão. Use sempre o preenchimento automático ou o copiar e colar; assim as referências ajustam-se bem. Escrever as mesmas fórmulas uma a uma é perder tempo e arriscar erros.

Hoje, com SOMA, multiplicações e preenchimento automático, a sua tabela de despesas transforma-se numa pequena central de cálculo. No nível 6 daremos o próximo salto: as tabelas dinâmicas, que resumem dados por categorias com um clique. Por agora, celebre o que já sabe: ensinou a folha de cálculo a calcular.

## 💡 Exemplos práticos
### Exemplo 1: Total das compras
Na sua tabela de despesas, escreva na célula abaixo dos preços "=SOMA(D2:D7)" e prima Enter. A folha soma toda a coluna: a sua compra total da semana, sem calculadora.

### Exemplo 2: Preço por quantidade
Se tiver "quantidade" e "preço por unidade", escreva numa coluna nova "=C2*D2" e arraste para baixo. Cada linha mostra quanto custa esse produto.

### Exemplo 3: Gasto médio por compra
Escreva "=MÉDIA(D2:D7)". A folha calcula o gasto médio por compra. Confirme que o número lhe parece razoável para a sua semana.

## 🛠️ Atividade guiada
Passo 1. Abra a folha "As minhas despesas da semana" no Google Sheets.
Passo 2. Garanta que na coluna D (preço) tem pelo menos 5 números, desde D2 até D6.
Passo 3. Faça clique na célula D8 (uma linha vazia abaixo dos preços).
Passo 4. Escreva: =SOMA(D2:D6) e prima Enter. Verá o total da semana.
Passo 5. Escreva em E1 o cabeçalho "total por produto".
Passo 6. Em E2 escreva: =C2*D2 e prima Enter. Aparece o custo do primeiro produto.
Passo 7. Faça clique de novo em E2 e mova o rato até ao canto inferior direito até ver o quadradinho.
Passo 8. Arraste o quadradinho para baixo até E6 e solte. Todas as linhas ficam calculadas.
Passo 9. Mude o preço de D2 para outro número. Observe como mudam sozinhos o total e o "total por produto".
Passo 10. Escreva em E8: =MÉDIA(D2:D6) e prima Enter. Agora sabe qual é o seu gasto médio por compra.

## ✍️ Exercícios de autoavaliação
1. Com que sinal tem de começar toda a fórmula?
2. Como se escreve a multiplicação numa folha de cálculo?
3. O que significa "B2:B8"?
4. O que faz a função SOMA?
5. O que é o preenchimento automático e para que serve?

Respostas: 1. Com o sinal de igual (=). 2. Com o asterisco (*); por exemplo =6*7. 3. Um intervalo: todas as células desde a B2 até à B8. 4. Soma todos os números de um intervalo, como =SOMA(B2:B8). 5. Arrastar o canto de uma célula com fórmula para baixo para a copiar para as outras, ajustando as referências de cada linha.

## ⚖️ Dimensão ética
As fórmulas calculam sem julgar: fazem exatamente o que se lhes pede. Por isso é preciso pedir bem. Um erro comum é calcular sobre dados sujos: se uma linha tem um preço mal escrito, o total sai mal, mesmo que a fórmula seja perfeita. Reveja sempre os seus dados antes de calcular. E quando alguém lhe apresentar um número calculado com uma folha ou uma IA, pergunte-se o que havia dentro dos dados: uma média enganosa é pior do que não ter média.

## 🔓 Ferramentas abertas
| Ferramenta | O que é e para que serve | Onde encontrar |
|---|---|---|
| Google Sheets | Folha de cálculo com fórmulas, funções e preenchimento automático | https://sheets.google.com |
| LibreOffice Calc | O mesmo, instalado no computador e sem ligação | https://pt.libreoffice.org |
| Guia de fórmulas do Google | Lista oficial de todas as funções do Sheets | https://support.google.com/docs/table/25273 |
| Khan Academy (folhas de cálculo) | Cursos gratuitos em vídeo sobre folhas de cálculo | https://pt.khanacademy.org |

## 🧠 Resumo e ponte
- As fórmulas começam com = e guardam a receita, não só o resultado.
- SOMA, MÉDIA, MÍNIMO e MÁXIMO são as funções mais úteis.
- As referências de célula fazem o cálculo atualizar-se sozinho.
- O preenchimento automático copia uma fórmula para uma coluna inteira.
No nível seguinte vamos aprender as tabelas dinâmicas: resumir uma tabela inteira por categorias com um clique, sem escrever fórmulas.
