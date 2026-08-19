# Módulo 3: IA Aplicada aos Dados — Nível 11
## Idioma: PT · Dificuldade: Caule
## Tempo estimado: 3 horas

## 🎯 Objetivo do nível
- Perceber que os dados sujos (erros, duplicados, buracos) falsificam qualquer análise.
- Aprender a detetar os cinco problemas típicos: duplicados, em falta, erros de escrita, formatos misturados e valores impossíveis.
- Limpar uma folha de cálculo real passo a passo no Google Sheets.
- Verificar a limpeza com as ferramentas de "validação" da própria folha.

## 📖 Vocabulário essencial
| Termo | Explicação em palavras simples |
|---|---|
| Dados sujos | Dados com erros, duplicados ou buracos que enganam a análise. |
| Dado duplicado | A mesma informação repetida duas vezes na folha. |
| Valor em falta | Uma caixa vazia onde deveria estar um dado. |
| Valor impossível | Um dado que não pode ser verdade, como uma idade de 400 anos. |
| Limpeza de dados | O processo de rever e corrigir os dados antes de os analisar. |

## 📚 Lição principal
No nível anterior aprendemos que a correlação mais bonita pode ser mentira. Hoje vamos ver a causa mais aborrecida e perigosa de isso acontecer: os dados sujos. Os estatísticos têm um ditado: "lixo entra, lixo sai". Se os dados estão maus, todas as conclusões que saírem deles estarão erradas, por muito bonitos que sejam os gráficos.

O que é um dado sujo? É qualquer dado que não reflete a realidade. Imagine que a sua associação de moradores quer saber quantas árvores há na rua para pedir à câmara que plante mais. Recolhe dados de 50 vizinhos: cada um escreve o número de árvores que vê da sua janela. O que pode correr mal? Tudo. Alguém escreve "1ª" em vez de "12"; outro escreve a mesma rua duas vezes; outro esquece-se de responder; alguém escreve "muitas" em vez de um número. Isso é uma folha suja.

Os problemas mais comuns agrupam-se em cinco tipos. Primeiro, os duplicados: a mesma linha aparece duas vezes, e ao somar as árvores contamo-la duas vezes. Segundo, os em falta: caixas vazias que partem os cálculos. Terceiro, os erros de escrita: "12" escrito como "12o" ou com uma vírgula decimal no lugar errado. Quarto, os formatos misturados: umas datas em formato português (12/06/2026) e outras em formato inglês (06/12/2026), que significam meses diferentes. Quinto, os valores impossíveis: uma idade de 400 anos ou uma temperatura de 500 graus.

Porque é que isto nos interessa num curso de IA? Porque a inteligência artificial alimenta-se de dados. Uma IA treina com a história de milhares de pacientes para prever doenças; se essa história contém erros de escrita, a IA aprende padrões falsos e comete erros graves. Os cientistas de dados dedicam entre 60% e 80% do seu tempo a limpar dados, não a construir a IA. Esse dado surpreende toda a gente e é verdade.

A limpeza não é magia: é paciência. Trabalha-se por passos. Passo um, olhar para a folha: abrir os olhos e percorrê-la. Passo dois, tirar duplicados: no Google Sheets, "Dados" e "Depurar dados" e "Remover duplicados". Passo três, procurar buracos: a ferramenta "Localizar e substituir" (Ctrl+H) serve para localizar as caixas vazias se escrevermos um espaço. Passo quatro, corrigir os formatos: uma coluna deve ter um único formato; se as datas estão misturadas, é preciso unificá-las. Passo cinco, eliminar valores impossíveis: um filtro mostra de uma vez o número maior e o menor de cada coluna, e se o máximo é absurdo, é preciso rever essa linha.

Como se verifica que a limpeza funcionou? Com três medidas de resumo que já conhecemos: o total, a média e o máximo. Antes de limpar, uma soma com duplicados dá um resultado inflado. Depois de limpar, o total muda e aproxima-se da realidade. Também podemos usar a função "CONTAR" para ver quantos valores tem cada coluna: se uma coluna de 50 vizinhos só tem 47 números, já sabemos que há três buracos.

Há um hábito de ouro que os profissionais aplicam sempre: fazer uma cópia da folha antes de limpar. Nunca se limpa sobre o original. Se nos enganarmos ou se quisermos ver como era o dado antes, a cópia salva-nos. No Google Sheets isto é facílimo: botão direito sobre o nome da folha, "Duplicar", e pronto.

Outro hábito importante: anotar que alterações foram feitas. Os profissionais mantêm uma coluna ou um documento à parte com as correções: "linhas 12 e 40 duplicadas, eliminadas; caixa 33 vazia, preenchida com 0; data da linha 20, corrigida de formato inglês para português". Isso chama-se "registo de limpeza" e serve para que qualquer pessoa possa verificar o nosso trabalho. A honestidade também é limpeza.

No nível seguinte usaremos estes dados limpos para construir o nosso primeiro painel de controlo, o que em inglês se chama "dashboard". Lembre-se disto: o painel bonito com dados sujos é como uma casa bonita com alicerces de areia. Primeiro limpam-se os dados, depois desenham-se os gráficos. A limpeza não é um passo aborrecido: é o passo que faz funcionar tudo o resto.

## 💡 Exemplos práticos
### Exemplo 1: O censo das árvores
A sua associação recolhe 50 respostas. Ao rever, encontra a linha da senhora do 3º duplicada, a caixa 33 vazia e um vizinho que escreveu "1ª" em vez de "12". Aplique os cinco passos e explique o que muda no total.

### Exemplo 2: As datas misturadas
Uma tabela de compras tem datas em formato português e inglês. A compra de 12 de junho aparece como 12/06 e como 06/12, que em inglês é 6 de dezembro. Se se somarem as vendas de junho, esse erro muda o resultado.

### Exemplo 3: O valor impossível
Na lista de idades de um clube há uma linha com "234". O máximo da coluna denuncia o erro. Com um filtro localiza-se a linha e chama-se o sócio para corrigir o dado para "34".

## 🛠️ Atividade guiada
Passo 1. Crie no Google Sheets uma folha chamada "Árvores sujas" e copie os seguintes dados: 12, 7, 12, 5, "1ª", 9, (vazio), 12, 3, 8.
Passo 2. Faça uma cópia de segurança: botão direito sobre o nome da folha e "Duplicar". Chame à cópia "Árvores limpas".
Passo 3. Na folha limpa, some com =SOMA(A1:A10) e anote o resultado (está inflado pelo duplicado).
Passo 4. Remova duplicados: "Dados", "Depurar dados", "Remover duplicados". Verifique quantas linhas ficam.
Passo 5. Localize os buracos: "Editar", "Localizar e substituir", procure um espaço e marque "coincidir conteúdo de célula".
Passo 6. Corrija o "1ª": mude-o para "12" consultando o vizinho que o escreveu.
Passo 7. Procure o valor impossível: use "Dados" e "Filtrar" e olhe para o máximo. Corrija o que for preciso.
Passo 8. Volte a somar com =SOMA(...) e compare com o resultado do passo 3. O que mudou e porquê?
Passo 9. Acrescente uma coluna D chamada "Registo" e anote cada correção feita com a sua data.
Passo 10. Guarde a folha e escreva uma conclusão: "dados limpos, totais fiáveis".

## ✍️ Exercícios de autoavaliação
1. O que significa o ditado "lixo entra, lixo sai"?
2. Nomeie três dos cinco problemas típicos dos dados sujos.
3. Porque é que os duplicados inflam as somas?
4. O que é preciso fazer antes de começar a limpar uma folha?
5. Que percentagem do tempo dedicam os cientistas de dados a limpar dados?

Respostas: 1. Que se os dados estão maus, as conclusões estarão erradas por muito bonitos que sejam os gráficos. 2. Duplicados, em falta, erros de escrita, formatos misturados e valores impossíveis. 3. Porque a mesma linha se conta duas vezes. 4. Fazer uma cópia da folha (nunca se limpa sobre o original). 5. Entre 60% e 80% do seu tempo.

## ⚖️ Dimensão ética
Os dados sujos não causam só erros técnicos: causam dano a pessoas. Um historial médico mal escrito pode levar a um tratamento errado; um censo com buracos deixa de fora os vizinhos que não responderam. Limpar dados é um ato de respeito: significa cuidar que as decisões que se tomam sobre as pessoas se baseiem em informação verdadeira. E ser honesto no registo de limpeza permite que outros verifiquem e confiem no nosso trabalho.

## 🔓 Ferramentas abertas
| Ferramenta | O que é e para que serve | Onde encontrar |
|---|---|---|
| Google Sheets | Ferramentas de depuração: remover duplicados, localizar, filtrar | https://sheets.google.com |
| OpenRefine | Programa gratuito especializado em limpar dados | https://openrefine.org |
| LibreOffice Calc | As mesmas funções de depuração, sem ligação | https://pt.libreoffice.org |
| Open Data Kit | Recolha de dados de campo com menos erros | https://getodk.org |

## 🧠 Resumo e ponte
- Os dados sujos falsificam qualquer análise: lixo entra, lixo sai.
- Os cinco problemas típicos: duplicados, em falta, erros de escrita, formatos misturados e valores impossíveis.
- Limpa-se sempre sobre uma cópia e anota-se cada correção num registo.
- 60-80% do tempo dos cientistas de dados é limpar dados.
No nível seguinte vamos transformar os dados já limpos no nosso primeiro painel de controlo ou "dashboard".
