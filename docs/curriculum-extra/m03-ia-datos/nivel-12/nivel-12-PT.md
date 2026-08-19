# Módulo 3: IA Aplicada aos Dados — Nível 12
## Idioma: PT · Dificuldade: Caule
## Tempo estimado: 3 horas

## 🎯 Objetivo do nível
- Perceber o que é um painel de controlo ou "dashboard" e para que serve.
- Conhecer duas ferramentas gratuitas: Looker Studio (do Google) e Power BI (da Microsoft).
- Ligar dados limpos a um painel e escolher o gráfico adequado para cada pergunta.
- Montar um primeiro painel simples com três gráficos e um título.

## 📖 Vocabulário essencial
| Termo | Explicação em palavras simples |
|---|---|
| Painel de controlo | Uma página com vários gráficos que responde a perguntas num relance. |
| Fonte de dados | A folha ou ficheiro de onde o painel tira os números. |
| Quadro de gestão | Sinónimo de painel de controlo, do mundo empresarial. |
| Painel (gráfico) | Cada gráfico ou cartão dentro do painel. |
| Atualizar | Refrescar os dados para o painel mostrar o mais recente. |

## 📚 Lição principal
Nos dois níveis anteriores aprendemos a desconfiar das relações falsas e a limpar os dados para que as conclusões sejam honestas. Agora chega a parte bonita: juntar vários gráficos numa só página que conta a história completa num relance. Isso é um painel de controlo, que em inglês se chama "dashboard" e no mundo da empresa "quadro de gestão".

O que faz um painel? Imaginemos que é a presidente de uma pequena associação de comerciantes do seu bairro. Tem dados de 12 lojas: vendas de cada mês, despesas, dias abertos e clientes novos. Se lhe mostrarem uma folha de 500 linhas, o que tira em claro? Muito pouco. Se lhe mostrarem um painel com três gráficos —vendas por mês, despesas por loja e clientes novos por trimestre—, em dez segundos sabe como está o bairro. O painel transforma dados em compreensão.

As duas ferramentas mais usadas e gratuitas são o Looker Studio (do Google, funciona no navegador) e o Power BI (da Microsoft, instala-se no computador e tem versão gratuita). O Looker Studio é ideal para começar porque se liga diretamente ao Google Sheets, que já conhecemos. O Power BI é mais potente e muito usado nas empresas. Esta semana vamos aprender com o Looker Studio, e o conceito vale para as duas.

O painel constrói-se em três passos. Primeiro, a fonte de dados: liga-se a folha limpa do Google Sheets que já temos. Segundo, a tela: uma página branca onde se colocam os elementos. Terceiro, os painéis: cada gráfico acrescenta-se escolhendo o seu tipo. O importante não é o clique, é decidir bem: que pergunta quero responder com cada gráfico?

Cada tipo de gráfico responde a uma pergunta diferente, e esta é a parte de design que é preciso cuidar. O gráfico de barras compara categorias: "que loja vende mais?". O de linhas mostra a evolução no tempo: "sobem as vendas de março a setembro?". O de setores (a "tarte") reparte um total: "que percentagem de despesa corresponde a cada rubrica?". O cartão de número grande responde "quanto?" com uma só cifra: 12.450 euros. Se usarmos o gráfico errado, a pergunta fica por responder.

Regra de ouro dos painéis: menos é mais. Um painel de dez gráficos não se lê; um painel de três ou quatro bem escolhidos entende-se. A disciplina do designer consiste em perguntar-se, perante cada gráfico que quer acrescentar: "esta imagem responde a uma pergunta que alguém fez?". Se não responde, não entra no painel. A ausência de ruído é design.

Outra decisão importante: a ordem. O painel lê-se como um jornal: de cima para baixo e da esquerda para a direita. Em cima, o título e o número mais importante, o resumo geral. No centro, os dois ou três gráficos que contam a história principal. Em baixo, os detalhes para quem quiser aprofundar. Um bom painel conta uma história com um princípio (o resumo), um desenvolvimento (os gráficos) e um fim (a conclusão ou o detalhe).

E um aviso técnico: os dados do painel não se atualizam sozinhos. Se na próxima semana acrescentar dados à folha, o painel do Looker Studio continua a mostrar o de antes até se carregar no botão de atualizar. Esse botão é como a rega de uma planta: se não se rega, a planta (e o painel) seca e deixa de servir. Acostume-se a atualizar.

Uma capacidade dos painéis que vale ouro é o filtro. No Looker Studio pode-se acrescentar um "controlo de data" ou uma lista pendente de lojas: com um clique, todo o painel mostra só um trimestre ou só uma loja. Os filtros permitem fazer muitas perguntas com um só painel, sem desenhar nada de novo. Isso é o que os profissionais chamam "explorar os dados".

No nível seguinte entraremos na parte de IA propriamente dita: começaremos com a análise preditiva, que usa os dados passados para adivinhar o futuro. O painel que aprender a montar hoje será o lugar onde essa previsão se mostra. O painel não prevê, mas ensina; a IA prevê, mas precisa que alguém (você) verifique que as suas previsões são honestas. Os dois precisam um do outro.

## 💡 Exemplos práticos
### Exemplo 1: O bairro das 12 lojas
Com a folha de vendas mensais de 12 lojas, um painel com três painéis responde: cartão (total do ano), barras (loja a loja), linhas (evolução mensal). Em dez segundos sabe-se como está o bairro.

### Exemplo 2: O ginásio
Um ginásio regista sócios novos e saídas todos os meses. Um painel com linhas mostra as duas curvas: se as saídas ultrapassam as entradas, o negócio encolhe. O painel não opina, só mostra.

### Exemplo 3: A horta comunitária
Uma horta anota quilos de tomates por parcela. O gráfico de setores reparte o total: "a parcela 3 produz 40% de tudo". Esse dado convida a perguntar porque é que essa parcela funciona melhor.

## 🛠️ Atividade guiada
Passo 1. Abra a folha limpa do nível anterior (ou crie uma com 12 meses de vendas e despesas de uma loja).
Passo 2. Entre em https://lookerstudio.google.com e carregue em "Criar relatório".
Passo 3. Ligue a fonte: "Google Sheets", selecione a folha e "Adicionar".
Passo 4. Ponha um título em cima: "Painel da loja — 2026".
Passo 5. Adicione um cartão de número: menu "Adicionar um gráfico", "Cartão de pontuação", escolha a coluna de vendas e a função SOMA.
Passo 6. Adicione um gráfico de barras com as vendas por mês: a categoria é o mês, a métrica a soma das vendas.
Passo 7. Adicione um gráfico de linhas com as despesas por mês.
Passo 8. Adicione um controlo de filtro: "Adicionar um controlo", "Lista pendente", e escolha o campo "mês". Experimente escolher só um mês e veja como mudam os painéis.
Passo 9. Ordene: número em cima, barras e linhas no centro, controlo em baixo.
Passo 10. Partilhe o relatório com o botão "Partilhar" (só leitura) e guarde a ligação. Parabéns: já tem o seu primeiro painel.

## ✍️ Exercícios de autoavaliação
1. O que é um painel de controlo?
2. Nomeie duas ferramentas gratuitas para fazer painéis.
3. Que pergunta responde cada tipo: barras, linhas, setores, cartão de número?
4. Qual é a regra de ouro dos painéis?
5. O que é preciso fazer com os dados novos para o painel os mostrar?

Respostas: 1. Uma página com vários gráficos que responde a perguntas num relance. 2. Looker Studio (do Google) e Power BI (da Microsoft). 3. Barras: comparar categorias. Linhas: evolução no tempo. Setores: repartir um total. Cartão: responder "quanto?" com uma cifra. 4. Menos é mais: só entra o gráfico que responde a uma pergunta real. 5. Carregar no botão de atualizar.

## ⚖️ Dimensão ética
Um painel pode ser honesto ou manipulador. É fácil escolher um gráfico que exagera: começar o eixo em 100.000 em vez de 0 faz uma subida pequena parecer enorme. Também se podem ocultar dados incómodos deixando-os de fora. O painel honesto mostra a escala completa, não engana com os eixos e não esconde o que não convém. Quando fizer painéis, lembre-se de que alguém vai tomar decisões baseadas neles: isso merece desenhá-los com verdade.

## 🔓 Ferramentas abertas
| Ferramenta | O que é e para que serve | Onde encontrar |
|---|---|---|
| Looker Studio | Painéis gratuitos ligados ao Google Sheets | https://lookerstudio.google.com |
| Power BI | Painéis potentes com versão gratuita | https://powerbi.microsoft.com |
| Google Sheets | A sua fonte de dados: a folha limpa | https://sheets.google.com |
| Rawgraphs | Gráficos raros e curiosos sem programar | https://rawgraphs.io |

## 🧠 Resumo e ponte
- Um painel junta vários gráficos que respondem a perguntas num relance.
- Looker Studio e Power BI são as ferramentas gratuitas mais usadas.
- Cada tipo de gráfico responde a uma pergunta: barras, linhas, setores, cartão.
- Menos é mais, e os dados têm de ser atualizados.
No nível seguinte entraremos na IA a sério: a análise preditiva, que usa o passado para antecipar o futuro.
