# Módulo 3: IA Aplicada aos Dados — Nível 10
## Idioma: PT · Dificuldade: Caule
## Tempo estimado: 3 horas

## 🎯 Objetivo do nível
- Perceber a diferença entre correlação e causalidade, a ideia mais importante da análise de dados.
- Reconhecer quando duas coisas "andam juntas" sem que uma cause a outra.
- Aprender a procurar explicações alternativas antes de acreditar numa relação.
- Aplicar estas ideias a notícias, anúncios e rumores quotidianos.
- Usar o Google Sheets para explorar se duas colunas de dados se movem juntas.

## 📖 Vocabulário essencial
| Termo | Explicação em palavras simples |
|---|---|
| Correlação | Duas coisas que mudam ao mesmo tempo, no mesmo sentido ou em sentido contrário. |
| Causalidade | Uma coisa produz a outra: A causa B. |
| Confundidor | Uma terceira coisa que explica as duas e cria a ilusão de relação. |
| Causalidade inversa | B causa A, mas parece que A causa B. |
| Dispersão | Um gráfico de pontos que mostra se duas colunas se movem juntas. |

## 📚 Lição principal
Bem-vindo à banda Caule. Até agora aprendemos a manusear dados: ordená-los, desenhá-los e resumi-los. Agora começamos a pensar como analistas, e a primeira lição dessa forma de pensar é a mais famosa de toda a estatística: que as coisas andarem juntas não significa que uma cause a outra. Os estatísticos dizem-no com uma frase latina: "correlação não implica causalidade". Hoje vamos decifrar essa frase.

Ponhamos um exemplo clássico que aparece em todos os manuais: o gelado e os afogamentos. Quando sobem as vendas de gelado, sobem também os afogamentos na praia. Os dois dados "andam juntos": quando o gelado sobe, o afogamento sobe. Significa isso que o gelado causa afogamentos? Claro que não. A explicação real é uma terceira coisa: o verão. No verão faz calor, as pessoas compram mais gelado e também se banham mais no mar. O verão é o "confundidor".

Esse exemplo parece uma piada, mas é a chave de imensos enganos. Todos os dias, títulos e anúncios usam correlações para vender ideias falsas: "as terras que comem mais iogurte têm menos constipações", "quem dorme oito horas ganha mais dinheiro". Em todos esses casos, uma terceira causa esconde a verdade: quem come iogurte costuma cuidar-se mais; quem dorme oito horas costuma ter melhores empregos. Correlação, sim; causalidade, não demonstrada.

A correlação não é má: é um aviso. Quando duas coisas andam juntas, vale a pena investigar. A correlação diz "olha aqui, há algo interessante". A causalidade diz "isto produz aquilo", e para a afirmar é preciso muito mais do que duas colunas de números: é preciso experimentar, verificar, descartar explicações alternativas. A ciência séria não confunde um aviso com uma prova.

Na nossa vida quotidiana também tropeçamos nesta armadilha. Pense: "fico com dor de cabeça nos dias de chuva". A chuva causa a dor? Talvez nos dias de chuva durma pior, ou saia menos a passear, ou coma diferente. Há dezenas de explicações alternativas. Antes de concluir que A causa B, pergunte-se sempre: o que mais muda ao mesmo tempo que A?

Outra armadilha frequente é a causalidade inversa. Um título diz "quem se reforma mais cedo vive mais". Reformar-se causa viver mais? Pode ser ao contrário: quem goza de boa saúde pode reformar-se mais cedo e vive mais pela saúde, não pela reforma. Ou pode haver um confundidor: quem tem dinheiro reforma-se mais cedo e tem melhor saúde. A direção da seta não está clara.

Como exploramos uma correlação no Google Sheets? Com um gráfico de dispersão. Põem-se duas colunas: por exemplo, "gelados vendidos" e "afogamentos". Selecionam-se e escolhe-se o tipo "Gráfico de dispersão": cada ponto é um mês, com a sua venda de gelado e o seu afogamento. Se os pontos formarem uma nuvem que sobe da esquerda para a direita, as duas coisas andam juntas (correlação positiva). Se a nuvem desce, andam em sentido contrário (correlação negativa). Se for uma nuvem sem forma, não há relação.

O gráfico de dispersão é a ferramenta do caçador de correlações. Mas atenção: o gráfico só mostra que andam juntas, não porquê. Ver a nuvem de pontos é o primeiro passo; procurar o confundidor é o segundo, e esse segundo passo é o que distingue o analista do que engole qualquer título. A dispersão levanta a mão para dizer "aqui há qualquer coisa"; a investigação decide o que é.

Vamos praticar com um exemplo saudável: a idade e o risco de doença. Há uma correlação clara: quanto mais idade, mais risco de muitas doenças. Mas a idade causa as doenças? Não exatamente: a idade é um "marcador" que agrupa muitos outros fatores que passam com o tempo. A medicina moderna sabe separar o que correlaciona do que causa, e por isso não trata as pessoas pela idade mas pelos seus fatores reais.

Uma regra prática para a vida diária: perante qualquer relação que lhe apresentem, faça três perguntas. Primeira, andam realmente juntas ou é coincidência? Segunda, que outra coisa poderia explicar ambas? Terceira, quem beneficia de eu acreditar nesta relação? Essas três perguntas transformam qualquer pessoa num leitor crítico de títulos, anúncios e rumores.

No nível seguinte aplicaremos estas ideias ao mundo real: limpar dados para que as correlações não saiam falseadas por erros. Porque há outra armadilha: se os dados estão sujos, as correlações que saem são mentira. Um dado mal copiado pode criar uma nuvem de pontos que não existe. A correlação honesta começa por dados limpos.

## 💡 Exemplos práticos
### Exemplo 1: Gelado e afogamentos
Anote em duas colunas as vendas de gelado e os afogamentos de 6 meses (invente dados: no verão sobem os dois). Desenhe a dispersão: os pontos sobem. Agora explique com as suas palavras porque não é causalidade.

### Exemplo 2: A sesta e a produtividade
Chega-lhe um título: "quem dorme a sesta ganha mais dinheiro". Antes de acreditar, procure explicações alternativas: será que quem tem mais dinheiro pode dormir a sesta no trabalho? Essa é uma possível causalidade inversa.

### Exemplo 3: Os guarda-chuvas e a gripe
Na sua cidade, nos dias em que se vendem mais guarda-chuvas há mais casos de gripe. Aplique as três perguntas: andam juntas? O que as une (o mau tempo)? Quem ganha com eu acreditar que o guarda-chuva causa a gripe?

## 🛠️ Atividade guiada
Passo 1. Abra o Google Sheets e crie uma folha nova chamada "Gelados e afogamentos".
Passo 2. Escreva em A1 "mês" e em B1 "gelados" e em C1 "afogamentos".
Passo 3. Preencha 6 linhas com dados que sobem ao mesmo tempo (exemplo: janeiro 10 e 2, abril 30 e 5, julho 80 e 12).
Passo 4. Selecione as colunas B e C com o cabeçalho.
Passo 5. Prima "Inserir" e "Gráfico". Em "Tipo de gráfico", escolha "Gráfico de dispersão".
Passo 6. Observe a nuvem de pontos: sobe da esquerda para a direita. Há correlação positiva.
Passo 7. Numa célula ao lado, escreva a pergunta-chave: "que terceira coisa explica as duas?".
Passo 8. Escreva a resposta: "o verão e o calor". Esse é o confundidor.
Passo 9. Mude agora os dados da coluna C para que DESÇAM quando sobe B (exemplo: janeiro 12, julho 2). Olhe para a nuvem: agora desce. Isso é correlação negativa.
Passo 10. Escreva uma conclusão: "a dispersão mostra que andam juntas, não que uma cause a outra". Guarde a folha.

## ✍️ Exercícios de autoavaliação
1. Qual é a diferença entre correlação e causalidade?
2. No exemplo do gelado, qual é o confundidor?
3. O que é a causalidade inversa? Dê um exemplo.
4. Que gráfico do Google Sheets mostra se duas colunas andam juntas?
5. Que três perguntas convém fazer perante qualquer relação que nos apresentem?

Respostas: 1. Correlação é que duas coisas mudam ao mesmo tempo; causalidade é que uma produz a outra. 2. O verão (o calor), que explica que se comprem mais gelados e que haja mais banhistas. 3. Quando parece que A causa B mas é B que causa A; por exemplo, quem se reforma mais cedo vive mais porque já tinha boa saúde. 4. O gráfico de dispersão. 5. Andam realmente juntas? Que outra coisa explica ambas? Quem ganha com eu acreditar?

## ⚖️ Dimensão ética
A confusão entre correlação e causalidade não é um erro inocente: é uma ferramenta de manipulação. Os anúncios de cremes, de seguros e até de partidos políticos usam correlações para vender. Quando comunicar dados, diga sempre com honestidade se há uma relação demonstrada ou só uma coincidência. E quando alguém usar uma correlação para o convencer, lembre-se do gelado e do afogamento: não coma a história com a colher.

## 🔓 Ferramentas abertas
| Ferramenta | O que é e para que serve | Onde encontrar |
|---|---|---|
| Google Sheets | Gráficos de dispersão para explorar correlações | https://sheets.google.com |
| Gapminder | Dados mundiais reais para ver correlações a sério | https://www.gapminder.org |
| "Spurious Correlations" | Site que mostra correlações absurdas mas reais | https://www.tylervigen.com/spurious-correlations |
| LibreOffice Calc | Os mesmos gráficos de dispersão, sem ligação | https://pt.libreoffice.org |

## 🧠 Resumo e ponte
- Correlação é que duas coisas andam juntas; causalidade é que uma produz a outra.
- Um confundidor é uma terceira coisa que explica ambas.
- A causalidade inversa inverte a direção da seta.
- O gráfico de dispersão mostra se andam juntas, não porquê.
No nível seguinte vamos aprender a limpar dados, porque uma correlação honesta só pode sair de dados sem erros.
