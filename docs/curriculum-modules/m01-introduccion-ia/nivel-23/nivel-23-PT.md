# Módulo 1: Introdução à Inteligência Artificial — Nível 23
## Idioma: PT · Dificuldade: Fruto
## Tempo estimado: 6 horas

## 🎯 Objetivo do nível
- Entender o que é um agente autónomo e como se difere de um assistente.
- Conhecer os componentes: objetivo, ferramentas, memória, ciclo de ação.
- Identificar quando um agente é útil e quando é um risco.
- Aprender a supervisionar um agente sem deixar que atue sozinho sem controlo.
- Refletir sobre a responsabilidade quando a IA age por si mesma.

## 📖 Vocabulário essencial
| Termo | Explicação simples |
|---|---|
| Agente autónomo | Uma IA que recebe um objetivo e decide sozinha os passos para o alcançar. |
| Ciclo de ação | O ciclo: observar, planear, agir, aprender, repetir. |
| Ferramentas | O que o agente pode usar: buscador, calculadora, correio, código. |
| Memória | O que o agente lembra do que fez e viu. |
| Supervisão humana | Uma pessoa que revê e aprova o que o agente faz. |
| Alinhamento | Que o agente faça o que queremos, não apenas o que pedimos literalmente. |

## 📚 Lição principal
Até agora a IA esperava a nossa ordem: perguntávamos, ela respondia. Os agentes autónomos dão um passo mais: damos-lhes um objetivo e eles decidem o que fazer, em que ordem, com que ferramentas, e seguem até terminar. É como contratar um estagiário que não precisa que lhe digamos cada passo, só o resultado que queremos.

Um agente tem quatro peças. Primeira: o objetivo, o que queremos alcançar ("procura três receitas de lentilhas sem carne e envia-mas por correio"). Segunda: as ferramentas, o que pode usar (buscador web, correio, calculadora, Python). Terceira: a memória, o que lembra para não repetir erros. Quarta: o ciclo de ação, o motor: observa o que acontece, planeia o próximo passo, age, aprende do resultado, e repete.

Vejamos um exemplo. Diz a um agente: "organiza a minha viagem a Madrid para a semana que vem". O agente procura comboios, compara preços, olha hotéis, revê o tempo, reserva o melhor e manda-te o itinerário. Tu só deste o objetivo; o agente fez o resto. Soa maravilhosos, e é, mas tem riscos.

O primeiro risco é que o agente se engane. Pode reservar o comboio errado, um hotel que não existe, ou gastar mais da conta. Por isso a supervisão humana é obrigatória: o agente propõe, a pessoa dispõe. Antes de reservar, o agente mostra-te a opção e tu dizes sim ou não. Sem esse freio, um erro do agente é um erro teu.

O segundo risco é o alinhamento. Pedes "apaga os correios velhos" e o agente apaga também os importantes porque "eram velhos". Fez o que pediste literalmente, não o que querias. O alinhamento é o problema central da IA avançada: assegurar que o agente entende a intenção, não só a ordem. Por isso os objetivos devem ser precisos e com limites: "arquiva correios de há mais de um ano que não tenham a etiqueta 'importante'".

O terceiro risco é a opacidade. O agente faz muitas coisas em segundo plano e tu não vês o processo. Se algo falha, não sabes porquê. Os bons agentes deixam rasto: um registo do que procuraram, o que decidiram, porquê. Exija rastreabilidade: se não se vê o que fez, não se confia.

O quarto risco é a dependência. Se delegas tudo em agentes, perdes a prática e o critério. Saber procurar, comparar, decidir é uma habilidade que se oxida se não se usa. Use agentes para o tedioso, mas mantenha o controlo do importante.

Quando usar um agente? Para tarefas repetitivas, com passos claros, sob supervisão: "cada segunda resume as atas e envia-as", "vigia o preço deste produto e avisa-me se descer". Quando NÃO? Para decisões de saúde, dinheiro, relações, ou quando o erro dói. Aí decide você.

A responsabilidade é sempre humana. O agente é uma ferramenta potente, mas quem põe o objetivo, quem dá as ferramentas, quem supervisiona e quem responde perante as consequências é a pessoa. Não há "o agente fez". Você fez, usando um agente.

No próximo nível entraremos na IA científica: como a IA está a mudar a forma de fazer ciência, e o problema do alinhamento em grande escala.

## 💡 Exemplos práticos
1. **Agente de compras:** objetivo "compra a lista do supermercado ao melhor preço"; ferramentas: sites de supermercados, comparador; supervisão: tu aprovas o carrinho antes de pagar.
2. **Agente de investigação:** objetivo "procura 10 estudos sobre o sono em maiores de 60"; ferramentas: Google Scholar, resumidor; supervisão: tu revês a lista antes de a usar.
3. **Agente de calendário:** objetivo "procura vagas para a reunião do clube"; ferramentas: calendário, correio; supervisão: tu escolhes a hora final.

## 🛠️ Atividade guiada
Passo 1. Escolha uma tarefa repetitiva sua (procurar preços, resumir correios, procurar citações).
Passo 2. Escreva o objetivo com limites claros: o que sim, o que não, quanto no máximo.
Passo 3. Teste um agente simples: use ChatGPT com "GPT personalizado" ou uma ferramenta como AutoGPT (versão web gratuita).
Passo 4. Dê-lhe o objetivo e observe: o que procura? O que decide? O que propõe?
Passo 5. Antes que execute a ação final (comprar, enviar, apagar), pare-o e reveja.
Passo 6. Anote: poupou tempo? Enganou-se em algo? Que limite faltou?
Passo 7. Reescreva o objetivo com os limites aprendidos e teste-o outra vez.
Passo 8. Decida: esta tarefa merece um agente ou faz você melhor?

## ✍️ Exercícios de autoavaliação
1. Quais são as quatro peças de um agente autónomo?
2. O que é o ciclo de ação e para que serve?
3. Por que a supervisão humana é obrigatória?
4. O que é o alinhamento e por que falha às vezes?
5. Quem é responsável se um agente comete um erro?

**Respostas:** 1) Objetivo, ferramentas, memória, ciclo de ação. 2) O ciclo observar-planear-agir-aprender-repetir; é o motor que faz o agente avançar sozinho. 3) Porque o agente pode enganar-se, gastar a mais ou apagar o importante; a pessoa deve aprovar a ação final. 4) É que o agente faça o que queremos, não só o que pedimos literalmente; falha quando o objetivo é vago ou sem limites. 5) A pessoa que pôs o objetivo, deu as ferramentas e supervisionou: a responsabilidade é sempre humana.

## ⚖️ Dimensão ética
Um agente autónomo amplifica o poder de quem o usa. Pode fazer muito bem (libertar tempo, ajudar quem não sabe) e muito mal (erros em cadeia, opacidade, perda de habilidade). Nunca use um agente para decidir por outros, para agir em nome alheio sem permissão, nem para iludir a sua responsabilidade. A supervisão não é opcional: é o freio que evita que um erro pequeno se converta em grande.

## 🔓 Ferramentas abertas
| Ferramenta | Para que serve | Onde consegui-la |
|---|---|---|
| GPT personalizados (ChatGPT) | Criar agentes com instruções e ferramentas | chat.openai.com |
| Gemini Gems | Agentes personalizados do Google | gemini.google.com |
| AutoGPT (web) | Agentes de código aberto para testar | github.com/Significant-Gravitas/AutoGPT |
| LangChain | Biblioteca para construir agentes (avançado) | github.com/langchain-ai/langchain |

## 🧠 Resumo e ponte
- Um agente autónomo recebe um objetivo e decide os passos sozinho.
- Quatro peças: objetivo, ferramentas, memória, ciclo de ação.
- Supervisão obrigatória: o agente propõe, a pessoa dispõe.
- Alinhamento: objetivo preciso com limites para que faça o que queremos.
- Responsabilidade sempre humana.
No nível 24 veremos como a IA está a transformar a ciência e o desafio do alinhamento em grande escala.