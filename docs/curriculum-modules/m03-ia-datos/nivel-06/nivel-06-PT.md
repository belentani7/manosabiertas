# Módulo 3: IA Aplicada aos Dados — Nível 06
## Idioma: PT · Dificuldade: Raiz
## Tempo estimado: 3 horas

## 🎯 Objetivo do nível
- Perceber o que é uma tabela dinâmica e que problema resolve.
- Criar uma tabela dinâmica no Google Sheets a partir da tabela de despesas.
- Agrupar dados por categorias e ver totais por grupo sem escrever fórmulas.
- Mudar linhas e colunas para responder a perguntas diferentes com um clique.
- Saber ler uma tabela dinâmica como quem lê a ementa de um restaurante.

## 📖 Vocabulário essencial
| Termo | Explicação em palavras simples |
|---|---|
| Tabela dinâmica | Um resumo automático de uma tabela: agrupa dados e calcula totais por categoria. |
| Linha (do resumo) | Por onde se reparte o resumo, por exemplo uma linha por categoria. |
| Coluna (do resumo) | Uma agrupamento adicional, para cruzar categorias. |
| Valor | O número que se calcula no resumo: total, média, contagem. |
| Segmentador | Um filtro com botões que mostra apenas uma parte dos dados. |

## 📚 Lição principal
Imagine que tem uma caixa enorme de fotografias da família. Tirá-las uma a uma e contá-las é uma tortura. Mas se as classificar por ano e por pessoa, de repente sabe quantas fotografias há de cada um e de cada ano. A tabela dinâmica faz exatamente isso com os seus dados: pega numa tabela comprida e resume-a por categorias, calculando totais com um clique. É como ter um assistente que arruma a caixa de fotografias por si.

No nível anterior vimos fórmulas para somar uma coluna. Mas e se quisermos saber quanto gastamos em cada categoria: fruta, pão, limpeza? Com fórmulas teríamos de escrever uma SOMA para cada categoria, e enganar-nos é fácil. A tabela dinâmica faz isso sozinha: pega na coluna "categoria", agrupa-a e soma os preços de cada grupo. Uma tabela completa resumida em segundos, sem uma única fórmula.

Vamos construir uma com a nossa folha "As minhas despesas da semana". O processo é sempre o mesmo e aprende-se uma vez para sempre. Primeiro, selecionamos a tabela toda (com o cabeçalho). Depois, no menu "Inserir", escolhemos "Tabela dinâmica". A folha pergunta onde a colocar: escolhemos uma folha nova. E aparece um ecrã com casinhas que podemos marcar ou arrastar: "linhas", "colunas", "valores" e "filtros".

A ideia é simples: você decide onde põe cada parte da tabela. Se arrastar "categoria" para "linhas" e "preço" para "valores", a folha agrupa os produtos por categoria e soma os preços de cada uma. Resultado: uma pequena tabela que diz "fruta: 12 euros, pão: 5 euros, limpeza: 8 euros". Isto, que à mão levaria vários minutos e muitas somas, a tabela dinâmica faz num instante.

E para que servem as "colunas" e os "filtros"? As colunas cruzam outra categoria: se puser "categoria" em linhas e "mês" em colunas, vemos uma grelha com categorias nas linhas, meses nas colunas, e os totais em cada cruzamento. É como a grelha de um supermercado que comparasse vendas por categoria e por mês. Os filtros (ou segmentadores) servem para mostrar só uma parte: por exemplo, só as compras da farmácia.

Um conceito novo: o "valor" não tem de ser uma soma. Na casinha dos "valores" podemos escolher se queremos o total, a média, o máximo ou a contagem (quantas linhas há). É como perguntar ao resumo que número queremos: quanto gastei (soma)? Qual é a compra mais cara (máximo)? Quantas vezes comprei pão (contagem)? A mesma tabela dinâmica responde a perguntas diferentes consoante o valor escolhido.

A tabela dinâmica é um pequeno salto de poder. Com as folhas de cálculo básicas, olhávamos para os dados um a um. Com a tabela dinâmica, olhamos para os dados de cima, como um mapa: já não vemos cada compra, vemos os padrões. Ver os dados "de cima" é exatamente o que a IA fará mais adiante, mas com técnicas muito mais avançadas. A tabela dinâmica é a sua primeira ferramenta de "vista de pássaro".

Vamos ler uma tabela dinâmica como se lê a ementa de um restaurante. A ementa tem secções (entradas, pratos, sobremesas) e preços. A nossa tabela dinâmica tem categorias (em linhas) e valores (somas). Você olha para a categoria, olha para o número e compara-o com os outros. Qual é a categoria mais cara? Qual a mais barata? Com uma tabela dinâmica bem feita, essas perguntas respondem-se em dois segundos.

Um erro comum é esquecer que a tabela dinâmica se atualiza. Se adicionar linhas novas à tabela original, o resumo não as inclui até ser refrescado. No Google Sheets, é preciso voltar à tabela dinâmica e atualizá-la (às vezes com o botão direito ou com o menu). Lembre-se: a tabela dinâmica é uma fotografia do momento; se os dados mudam, é preciso renovar a fotografia.

Outra coisa importante: a tabela dinâmica precisa de dados limpos. Se na coluna "categoria" umas células dizem "fruta" e outras "Fruta" ou "frutas", a tabela tratá-las-á como categorias diferentes e o resumo sairá fragmentado. Por isso, antes de criar uma tabela dinâmica, reveja que as categorias se escrevem sempre igual. É como garantir que todas as caixas de fotografias têm a mesma etiquetagem.

Com a tabela dinâmica termina a primeira metade da banda Raiz. Já sabemos: escrever dados, ordená-los, classificá-los, desenhá-los e resumi-los. No nível seguinte aprofundaremos a visualização, com barras, linhas e setores mais polidos, e aprenderemos a lê-los com critério. A tabela dinâmica e os gráficos são os dois grandes resumos que nos preparam para a estatística.

## 💡 Exemplos práticos
### Exemplo 1: Gasto por categoria
Na sua tabela de despesas, crie uma tabela dinâmica com "categoria" em linhas e "preço" (soma) em valores. Saberá quanto gasta em fruta, pão e limpeza, sem uma única fórmula.

### Exemplo 2: Compras por mês
Se a sua tabela tem uma coluna "mês", ponha "categoria" em linhas e "mês" em colunas. Verá a grelha de despesas por categoria e por mês, ideal para detetar meses caros.

### Exemplo 3: Quantas vezes compro cada coisa
Mude o valor de "preço" para "contagem" (count). A tabela dirá quantas vezes comprou pão ou fruta esta semana. Isso revela hábitos de compra.

## 🛠️ Atividade guiada
Passo 1. Abra a folha "As minhas despesas da semana" no Google Sheets.
Passo 2. Garanta que a coluna "categoria" existe e está preenchida em todas as linhas (fruta, pão, limpeza, farmácia).
Passo 3. Selecione toda a tabela com o rato, desde o cabeçalho até à última linha.
Passo 4. No menu "Inserir", escolha "Tabela dinâmica".
Passo 5. Na janela que aparece, marque "Nova folha" e prima "Criar".
Passo 6. À direita verá o editor da tabela dinâmica, com zonas "Linhas", "Colunas", "Valores" e "Filtros".
Passo 7. Em "Linhas", prima "Adicionar" e escolha "categoria".
Passo 8. Em "Valores", prima "Adicionar" e escolha "preço". Por defeito aparecerá "SOMA de preço".
Passo 9. Olhe para a folha: verá uma tabela resumida por categorias com os seus totais. Compare: que categoria gasta mais?
Passo 10. Em "Valores", mude "SOMA" para "MÉDIA" no menu pendente e observe como muda o resumo. Experimente também "MÁX" e "CONTAR". A mesma tabela dinâmica, respostas diferentes.

## ✍️ Exercícios de autoavaliação
1. Que problema resolve uma tabela dinâmica?
2. O que se põe em "Linhas" e em "Valores" para somar o gasto por categoria?
3. Para que servem as "Colunas" numa tabela dinâmica?
4. O que acontece se adicionar dados novos à tabela original mas não atualizar a tabela dinâmica?
5. Porque é preciso escrever as categorias sempre igual (sem "fruta" e "Fruta" ao mesmo tempo)?

Respostas: 1. Resume uma tabela comprida por categorias e calcula totais sem escrever fórmulas. 2. Em "Linhas", "categoria"; em "Valores", "preço" com a operação SOMA. 3. Cruzam outra categoria, criando uma grelha (por exemplo, categoria por mês). 4. Que o resumo não inclui os dados novos até ser atualizado/refrescado. 5. Porque a tabela trataria "fruta" e "Fruta" como categorias distintas e o resumo sairia fragmentado.

## ⚖️ Dimensão ética
Resumir dados por categorias é poderoso, mas também pode simplificar em excesso. Uma categoria "família" pode esconder diferenças enormes entre pessoas. Quando alguém lhe apresentar um resumo por grupos (por exemplo, "os maiores de 40 compram X"), pergunte-se quem está dentro desse grupo e o que se perde ao agrupá-los. Os resumos são úteis, mas não devem apagar a diversidade das pessoas reais.

## 🔓 Ferramentas abertas
| Ferramenta | O que é e para que serve | Onde encontrar |
|---|---|---|
| Google Sheets | Tabelas dinâmicas gratuitas no navegador | https://sheets.google.com |
| LibreOffice Calc | Tabelas dinâmicas sem ligação | https://pt.libreoffice.org |
| Tutorial oficial de tabelas dinâmicas do Google | Guia passo a passo do Google | https://support.google.com/docs/answer/1272900 |

## 🧠 Resumo e ponte
- A tabela dinâmica resume uma tabela por categorias com um clique.
- "Linhas" reparte o resumo, "Valores" diz que número se calcula.
- "Colunas" cruzam categorias e os filtros mostram apenas uma parte.
- A tabela dinâmica deve ser atualizada e precisa de categorias bem escritas.
No nível seguinte vamos polir a visualização: barras, linhas e setores com detalhe, e aprenderemos a lê-los com critério para que os gráficos contem histórias honestas.
