# Módulo 3: IA Aplicada aos Dados — Nível 16
## Idioma: PT · Dificuldade: Ramo
## Tempo estimado: 3 horas

## 🎯 Objetivo do nível
- Perceber o que é a regressão: a técnica para prever números.
- Ver a "linha de tendência" como o coração da regressão.
- Desenhar uma linha de tendência no Google Sheets.
- Aprender os perigos de prever demasiado longe (extrapolar).

## 📖 Vocabulário essencial
| Termo | Explicação em palavras simples |
|---|---|
| Regressão | A técnica da IA para prever um número com dados passados. |
| Linha de tendência | A linha reta que melhor resume como sobem ou descem os pontos. |
| Dados históricos | Os valores passados que o modelo usa para aprender. |
| Extrapolar | Prever para além dos dados que temos, com cuidado. |
| Erro | A diferença entre o que o modelo previu e o que aconteceu. |

## 📚 Lição principal
No nível anterior vimos a ideia geral da previsão. Hoje vamos à primeira técnica concreta, e é a mais útil de todas quando queremos adivinhar um número: a regressão. Não se assuste com o nome, que parece de bata e laboratório. A regressão é a técnica que desenha uma linha reta entre os pontos de um gráfico para poder dizer: "as coisas vão por aqui, e assim continuarão".

Lembre-se do gráfico de dispersão do nível 10: uma nuvem de pontos que sobe da esquerda para a direita quando duas coisas andam juntas. A regressão faz algo maravilhoso com essa nuvem: traça a linha reta que passa o mais perto possível de todos os pontos ao mesmo tempo. Não é uma linha qualquer: é a "melhor" linha, a que deixa os pontos o mais perto possível, por cima e por baixo. Essa linha chama-se "linha de tendência".

Porque é que uma linha serve? Porque quando a tem, pode estendê-la. Se a nuvem mostra que com 20 graus se vendem 40 gelados e com 25 graus se vendem 55, a linha cruza por ali e continua reta. Então olha para a altura da linha aos 28 graus e diz: "provavelmente vender-se-ão uns 65 gelados". Acabou de fazer uma previsão por regressão. A máquina não pensa: a máquina desenha a linha e lê a altura.

O Google Sheets faz esta linha por nós com dois cliques. Seleciona-se o gráfico de dispersão, abre-se a configuração ("Personalizar", "Série", "Linha de tendência"), e a linha aparece magicamente. Ao lado pode-se ativar a "etiqueta" que mostra a fórmula, e também o "coeficiente de determinação", um número entre 0 e 1 que diz quão bem a linha se ajusta aos pontos. Quanto mais perto de 1, mais fiável a linha; perto de 0, a linha não serve para nada.

Vamos perceber esse coeficiente com um exemplo quotidiano. Se os pontos da sua dispersão estiverem quase colados à linha, como as vendas de um quiosque conforme a temperatura, o coeficiente aproxima-se de 1: a linha resume muito bem a realidade, e as suas previsões merecem confiança. Se os pontos estiverem espalhados como um punhado de arroz, o coeficiente aproxima-se de 0: não há padrão claro, e nenhuma linha reta pode salvar a situação. O coeficiente é o "semáforo" da regressão.

Agora vem a lição mais importante do dia: a extrapolação. Extrapolar é usar a linha para prever para além dos dados que temos. É tentador e perigoso. Se só tem dados de temperaturas entre 10 e 30 graus, pode prever sem medo os gelados a 25 graus: está dentro do conhecido, os dados sustentam-no. Mas se previr os gelados a 50 graus, está a viajar para um território que nunca viu: a linha talvez continue a subir, mas na realidade, a 50 graus, ninguém sai para comprar gelados e as vendas afundam. A linha não sabe isso: a linha só sabe prolongar-se.

Os profissionais chamam a isto "não extrapolar para além dos dados". É a causa dos erros mais famosos da história da IA. Previu-se o comportamento da economia, das epidemias e do clima estendendo linhas sem perguntar se o mundo continuava o mesmo. Uma linha é um resumo do passado, não uma lei do universo. Quanto mais longe do passado, menos fiável.

Outra ideia útil: a regressão não entende o significado dos números, só a sua forma. Se você lhe der os quilos de tomates e os dias de chuva, a máquina encontra a linha que melhor encaixa. Mas não sabe que os tomates precisam de água, nem quanta. A interpretação é da pessoa. Por isso a regressão é uma excelente ferramenta, mas sempre acompanhada de critério humano: o critério é seu, a linha é da máquina.

No mundo real, a regressão está em todo o lado disfarçada de produto. Os preços dos voos preveem-se com regressão sobre milhões de reservas passadas. O valor de uma casa estima-se com regressão sobre os preços de vendas anteriores. O gasto elétrico do mês que vem antecipa-se com a linha dos meses passados. Sempre que um sistema lhe diz um número "provável", o mais certo é que atrás haja uma regressão.

No próximo nível veremos a segunda grande técnica da previsão: a classificação, que não prevê um número mas uma categoria: será chuva ou sol? É spam ou não? Entretanto, guarde esta ideia: prever números é desenhar a melhor linha entre os pontos e lê-la com humildade, sabendo que a linha é memória, não profecia.

## 💡 Exemplos práticos
### Exemplo 1: Os gelados do quiosque
Com 10 dias de dados (temperatura e gelados vendidos), a linha de tendência permite estimar quantos gelados se venderão amanhã. A 28 graus, uns 65. A regressão feita com os olhos.

### Exemplo 2: O preço do voo
Uma companhia aérea guarda milhões de reservas passadas. Uma regressão encontra a linha que liga preço a dias de antecedência e cobra-lhe "o que o algoritmo sabe que você vai pagar".

### Exemplo 3: A água do prédio
Com 12 meses de consumo, a linha de tendência mostra se o gasto de água sobe. Se a linha sobe, algo se está a partir ou a desperdiçar: a regressão avisa antes da fatura.

## 🛠️ Atividade guiada
Passo 1. Abra a folha "A minha primeira previsão" do nível 15 (ou crie uma com 10 dias de temperatura e gelados).
Passo 2. Selecione as duas colunas e faça um gráfico de dispersão (Inserir, Gráfico, dispersão).
Passo 3. Carregue nos três pontos do gráfico e abra "Editar gráfico".
Passo 4. Vá a "Personalizar", "Série" e ative "Linha de tendência".
Passo 5. Ative também "Rótulo" (para ver a fórmula) e, se aparecer, "R²" (o coeficiente de determinação).
Passo 6. Observe o R²: está perto de 1? Então a linha resume bem os pontos.
Passo 7. Leia na fórmula o número: a fórmula tem a forma "y = a·x + b". Nela, "x" é a temperatura e "y" os gelados.
Passo 8. Substitua x por 28 e calcule y com a calculadora. Esse é o número que prevê a linha.
Passo 9. Escreva por baixo: "previsão a 28 graus: y gelados". Verifique se coincide com o que vê na linha.
Passo 10. Pergunte-se e escreva: "ousaria prever a 50 graus? Porquê sim ou porquê não?".

## ✍️ Exercícios de autoavaliação
1. O que é a regressão?
2. Como se chama a linha que a regressão desenha?
3. O que indica o coeficiente R²?
4. O que é extrapolar e porque é perigoso?
5. Quem põe o significado nos números que a regressão prevê?

Respostas: 1. A técnica da IA para prever um número com dados passados. 2. Linha de tendência. 3. Quão bem a linha se ajusta aos pontos: perto de 1 é fiável, perto de 0 não serve. 4. Prever para além dos dados que temos; perigoso porque o mundo pode mudar e a linha não sabe. 5. A pessoa: a máquina vê a forma, a pessoa entende o significado.

## ⚖️ Dimensão ética
Uma regressão pode servir para ajudar ou para espremer. A mesma técnica que prevê o consumo de água para evitar desperdícios também se usa para cobrar mais a quem tem menos opções. E há uma armadilha ética subtil: se os dados históricos contêm injustiças (por exemplo, um bairro a quem se vendeu menos), a linha herda-as e perpetua-as. Antes de acreditar num número previsto, pergunte-se: os dados de que nasce são justos? A regressão não é culpada nem inocente: herda a verdade ou o preconceito dos seus dados.

## 🔓 Ferramentas abertas
| Ferramenta | O que é e para que serve | Onde encontrar |
|---|---|---|
| Google Sheets | Linha de tendência e R² com dois cliques | https://sheets.google.com |
| LibreOffice Calc | As mesmas linhas de tendência, sem ligação | https://pt.libreoffice.org |
| Gapminder | Dados reais para praticar linhas de tendência | https://www.gapminder.org |
| Desmos | Calculadora gráfica que desenha linhas sobre pontos | https://www.desmos.com |

## 🧠 Resumo e ponte
- A regressão prevê números desenhando a melhor linha entre os pontos.
- O coeficiente R² diz se a linha é fiável.
- Extrapolar para além dos dados é a causa de erros famosos.
- A máquina desenha a linha; a pessoa põe o significado.
No nível seguinte veremos a classificação: prever categorias (chuva ou sol? spam ou não?) em vez de números.
