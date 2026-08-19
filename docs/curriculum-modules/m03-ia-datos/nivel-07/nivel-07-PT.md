# Módulo 3: IA Aplicada aos Dados — Nível 07
## Idioma: PT · Dificuldade: Raiz
## Tempo estimado: 3 horas

## 🎯 Objetivo do nível
- Dominar o gráfico de barras, o mais usado de todos.
- Aprender a ler barras comparando alturas com precisão.
- Criar gráficos de barras verticais e horizontais conforme convém.
- Descobrir os erros visuais que fazem um gráfico mentir.
- Decidir quando o gráfico de barras é a melhor opção.

## 📖 Vocabulário essencial
| Termo | Explicação em palavras simples |
|---|---|
| Gráfico de colunas | Barras verticais, de pé. Comparam-se da esquerda para a direita. |
| Gráfico de barras | Barras horizontais, deitadas. Comparam-se de cima para baixo. |
| Escala | Os valores que marcam o eixo, como os traços de uma régua. |
| Linha de base | O ponto de partida do eixo, normalmente o zero. |
| Etiqueta | O texto que identifica cada barra ou cada eixo. |

## 📚 Lição principal
De todos os gráficos, o de barras é o rei. Aparece nos telejornais, nos relatórios do banco, nas notícias do telemóvel e nos cartazes da câmara. E há uma razão: o olho humano compara alturas de uma forma rapidíssima e precisa. Quando duas barras estão lado a lado, o nosso cérebro diz no instante qual é mais alta. O gráfico de barras aproveita essa habilidade natural.

Há duas apresentações do mesmo gráfico. O de colunas tem as barras de pé, verticais; é ideal quando há poucas categorias e nomes curtos. O de barras tem as barras horizontais, deitadas; é melhor quando há muitas categorias ou os nomes são longos. Pense na ementa de um restaurante: os pratos são nomes longos, por isso as listas vão de cima para baixo. Com nomes longos, barras horizontais.

Que pergunta responde o gráfico de barras? "Quanto há de cada coisa?" e "o que é mais e o que é menos?". O gasto por categoria, as vendas por loja, os habitantes por cidade, as notas por disciplina. Sempre que houver categorias para comparar, as barras funcionam. Já não serve para mostrar mudanças ao longo do tempo com muitos pontos (isso é a linha, nível 8) nem partes de um todo (isso é o setor, nível 8 também).

Ler um gráfico de barras corretamente é um processo de três olhares. Primeiro olhar: os títulos dos eixos. O que mede o eixo horizontal e o que mede o vertical? Segundo olhar: a escala do eixo dos valores. Começa em zero ou noutro número? Terceiro olhar: as alturas relativas. Qual é a barra mais alta e qual a mais baixa? Com esses três olhares, já entendeu o gráfico sem que ninguém lho explique.

Aqui chega o momento mais importante deste nível: o truque da linha de base. Um gráfico honesto começa a sua escala em zero. Se o eixo começa em zero, uma barra com o dobro da altura significa um valor duas vezes maior. Mas se alguém "corta" o eixo e o faz começar em 40, uma pequena diferença de 45 para 50 parecerá uma montanha. É o truque favorito dos gráficos enganosos. Olhe sempre para onde parte o eixo.

Um exemplo quotidiano: o banco envia-lhe um folheto com o gráfico das suas poupanças. As barras sobem e sobem, parece que o seu dinheiro cresce imenso. Mas se olhar para a escala, o eixo começa em 4.500 euros, não em zero. A subida real é pequena; o gráfico fez com que parecesse enorme. Agora você sabe olhar para a escala antes de se entusiasmar. Esse olhar crítico vale dinheiro.

Quando criar as suas próprias barras, siga três regras de honestidade. Primeiro, deixe o eixo começar em zero (o Google Sheets faz isso por defeito; não o mude sem motivo). Segundo, ponha etiquetas claras: cada barra com o seu nome e o eixo com a sua unidade (euros, quilos, pessoas). Terceiro, não use efeitos decorativos que distraiam: três dimensões, sombras ou cores berrantes não acrescentam informação, tiram-na.

No Google Sheets, criar um gráfico de colunas é questão de três cliques, como vimos no nível 4. Selecione os dados com cabeçalho, prima "Inserir" e "Gráfico", e no painel escolha "Gráfico de colunas". Se quiser barras horizontais, escolha "Gráfico de barras" no mesmo painel. A mudança entre vertical e horizontal é um clique: experimente os dois e fique com o que se ler melhor.

Como escolher entre colunas e barras? Se as categorias são poucas (menos de oito) e os nomes curtos, colunas. Se são muitas ou os nomes longos, barras horizontais. Pense nas estantes: os livros com lombadas largas leem-se melhor deitados. O mesmo acontece com as etiquetas do seu gráfico: se não cabem de pé, ponha-as horizontais.

Outro pormenor: não abuse das barras. Se tiver cinquenta categorias, cinquenta barras são um pente, não um gráfico. Melhor agrupar as pequenas em "outros" ou escolher outro gráfico. Um gráfico deve caber numa olhada; se obriga a fazer esforço, não está a cumprir o seu trabalho. A simplicidade é a elegância dos dados.

Neste módulo, as barras são a nossa ferramenta de comparação. Com a tabela dinâmica do nível 6 resumimos e com as barras deste nível desenhamos o resumo. No nível seguinte completaremos o trio de gráficos básicos: a linha para as evoluções no tempo e o setor para as partes de um todo. Com barra, linha e setor teremos a linguagem visual completa para a estatística do nível 9.

## 💡 Exemplos práticos
### Exemplo 1: Despesas por categoria em barras
Com a tabela dinâmica do nível 6 (gasto por categoria), crie um gráfico de colunas. Verá numa olhada que categoria domina o seu cesto de compras.

### Exemplo 2: As temperaturas da semana
Anote as temperaturas máximas da semana (segunda a domingo) e desenhe colunas. A comparação por dias salta à vista.

### Exemplo 3: Detetar um gráfico trapaceiro
Procure na internet um gráfico de barras de uma notícia e olhe com lupa de onde parte o eixo dos valores. Se não começa em zero, a notícia está a exagerar algo. Anote a sua descoberta.

## 🛠️ Atividade guiada
Passo 1. Abra a folha "As minhas despesas da semana" no Google Sheets.
Passo 2. Crie uma tabela dinâmica com "categoria" em linhas e "preço" em valores (repasse o nível 6 se precisar).
Passo 3. Ao lado da tabela dinâmica, deixe um espaço e escreva o cabeçalho "categoria" e "total" (ou use a própria tabela dinâmica como origem).
Passo 4. Selecione as células da tabela dinâmica (categorias e totais, com cabeçalho).
Passo 5. Prima "Inserir" e escolha "Gráfico".
Passo 6. No painel da direita, em "Tipo de gráfico", escolha "Gráfico de colunas".
Passo 7. Olhe para a escala do eixo vertical: deve começar em zero. Se não for assim, procure em "Personalizar" e corrija.
Passo 8. Em "Personalizar", escolha uma cor única para as barras e ative as etiquetas de dados para se ver o valor exato de cada barra.
Passo 9. Mude agora o tipo para "Gráfico de barras" e observe a versão horizontal. Qual se lê melhor com os seus nomes?
Passo 10. Ponha um título claro ao gráfico, por exemplo "Gasto semanal por categoria". Guarde e partilhe com um familiar: peça-lhe que diga o que vê. Se ele entender, o seu gráfico funciona.

## ✍️ Exercícios de autoavaliação
1. Que pergunta responde melhor um gráfico de barras?
2. Quando convém usar barras horizontais em vez de colunas?
3. Porque é importante que a escala comece em zero?
4. Quais são os três olhares para ler um gráfico de barras?
5. O que devia fazer se tiver cinquenta categorias?

Respostas: 1. "Quanto há de cada coisa?" e comparar o que é maior e o que é menor. 2. Com muitas categorias ou nomes longos. 3. Porque se o eixo for "cortado", as diferenças parecem maiores do que são e o gráfico mente. 4. Títulos dos eixos, escala do eixo dos valores e alturas relativas (qual é a mais alta e a mais baixa). 5. Agrupar as pequenas em "outros" ou escolher outro tipo de gráfico.

## ⚖️ Dimensão ética
O gráfico de barras é uma arma de dois gumes. Bem usado, esclarece; mal usado, engana. Os anúncios, os partidos políticos e até os relatórios oficiais já usaram barras com eixos cortados para exagerar resultados. Ao criar barras, respeite a linha de base em zero. Ao ler barras, olhe sempre para a escala antes de acreditar. A honestidade visual é parte da honestidade cívica: quem sabe ler barras não se deixa manipular.

## 🔓 Ferramentas abertas
| Ferramenta | O que é e para que serve | Onde encontrar |
|---|---|---|
| Google Sheets | Gráficos de colunas e barras a partir de qualquer tabela | https://sheets.google.com |
| LibreOffice Calc | Os mesmos gráficos, sem ligação | https://pt.libreoffice.org |
| Datawrapper | Barras bonitas e honestas em minutos, grátis | https://www.datawrapper.de |
| RAWGraphs | Visualização de dados livre, para curiosear | https://www.rawgraphs.io |

## 🧠 Resumo e ponte
- O gráfico de barras compara quantidades; o olho compara alturas num instante.
- Colunas para poucas categorias e nomes curtos; barras horizontais para muitas ou longos.
- A linha de base deve estar em zero; se não, desconfie.
- Três olhares para ler barras: eixos, escala e alturas relativas.
No nível seguinte completaremos o trio de gráficos: a linha para as evoluções no tempo e o setor para as partes de um todo, com a sua leitura crítica incluída.
