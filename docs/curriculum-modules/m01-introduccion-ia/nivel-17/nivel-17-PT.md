# Módulo 1: Introdução à Inteligência Artificial — Nível 17
## Idioma: PT · Dificuldade: Ramo
## Tempo estimado: 3 horas

## 🎯 Objetivo do nível
- Entender o que é um prompt e por que é uma habilidade que se aprende.
- Conhecer as técnicas básicas: contexto, papel, formato e exemplos.
- Aprender a pedir respostas passo a passo.
- Melhorar uma resposta iterando: perguntar de novo, corrigir, refinar.
- Comparar na prática um prompt pobre com um bem construído.

## 📖 Vocabulário essencial
| Termo | Explicação simples |
|---|---|
| Prompt | A mensagem que você escreve para pedir algo a uma IA de texto. |
| Papel | Dizer à IA quem ela deve ser ao responder: um tutor, um médico, um contabilista. |
| Formato | Como quer a resposta: lista, tabela, carta, resumo de três linhas. |
| Exemplos (few-shot) | Mostrar-lhe um ou dois exemplos do tipo de resposta que espera. |
| Cadeia de raciocínio | Pedir que pense passo a passo antes de dar a resposta final. |
| Iterar | Voltar a perguntar, afinando o que pede, para melhorar cada tentativa. |

## 📚 Lição principal
Saber falar com uma IA é uma habilidade, como saber dar indicações a uma pessoa nova que começa a trabalhar consigo. Se você disser "faz-me algo bonito", obterá um resultado improvisado. Se explicar o contexto, o objetivo e o formato, obterá um trabalho de qualidade. Aprender a pedir bem chama-se prompting.

Pense num assistente novo num escritório. É muito capaz, mas não o conhece nem conhece a empresa. Se lhe encarregar "escreve uma carta", escreverá algo genérico. Se lhe disser para quem é, que tom usar, o que deve incluir e como quer que termine, a carta será útil desde a primeira tentativa. Com a IA passa o mesmo.

A primeira técnica é dar contexto. Em vez de "resume isto", diga: "sou um avô que quer entender este artigo médico; resume-o para alguém que não sabe nada de medicina". O modelo usará essas pistas para escolher o tom e o nível. O contexto é a bússola da resposta.

A segunda técnica é atribuir um papel. "Age como um contabilista simpático", "como um professor de história", "como um vizinho que conhece bem o bairro". O papel diz à máquina de que ponto de vista deve responder. Não é magia: é guiar como ela escolhe as palavras.

A terceira técnica é pedir um formato concreto. Se quer comparar opções, peça "uma tabela com três colunas". Se quer decidir, peça "uma lista de prós e contras". Se quer recordar, peça "cinco frases curtas". O formato transforma uma resposta aberta numa ferramenta que lhe serve.

A quarta técnica é dar exemplos. Se espera um tipo concreto de resposta, mostre-lhe um: "Como este exemplo, mas sobre o meu caso: [exemplo]". Um exemplo vale mais do que mil descrições, para pessoas e para máquinas. É como ensinar uma receita: melhor vê-la feita do que ler a teoria.

A quinta técnica é pedir que pense passo a passo. Se pedir um diagnóstico de um problema doméstico, diga: "pensa primeiro o que pode causar este problema, depois descarta as causas menos prováveis e no fim dá-me a causa mais provável com a sua solução". Assim reduz o risco de saltar para uma resposta errada.

A sexta técnica, e talvez a mais valiosa, é iterar. Raramente a primeira resposta é perfeita. A boa notícia é que pode pedir mais: "mais curto", "com um tom mais próximo", "noutro formato", "indica que parte é a mais importante". Cada iteração afina o resultado, como quando um alfaiate ajusta um fato.

Também convém saber que a IA não se lembra entre conversas (a menos que o indiquem) e que cada pergunta nova começa do zero. Por isso convém pôr todo o contexto numa só mensagem, em vez de ir deixando migalhas pelo caminho.

Um erro comum é esperar a resposta perfeita à primeira. Até os profissionais de IA iteram várias vezes. Pense no prompting como numa conversa: você guia, corrige, matiza, e a resposta melhora. Não é adivinhação; é direção.

Outro erro é dar-lhe demasiada liberdade. Se perguntar "o que faço com o meu dinheiro?", receberá conselhos genéricos. Se der um contexto claro e pedir um formato concreto, receberá algo útil. A precisão da pergunta é a precisão da resposta.

Na vida prática, o prompting serve para tudo: escrever cartas formais, preparar perguntas para o médico, resumir documentos, traduzir mensagens, organizar listas de compras ou planear uma refeição de família. É uma ferramenta universal.

E como toda a ferramenta, tem limites: não se deve pedir dados pessoais próprios ou de outros, não se deve confiar nela para decisões graves sem verificar, e é preciso saber que às vezes se engana com muita elegância. O prompting melhora a resposta, mas não a garante.

No próximo nível, veremos a IA multimodal: máquinas que veem imagens, ouvem vozes e entendem vídeos ao mesmo tempo.

## 💡 Exemplos práticos
1. **Carta formal:** em vez de "escreve uma carta", peça: "age como um contabilista, escreve uma carta formal à câmara municipal pedindo um certificado, com tom respeitoso e uma despedida cortês".
2. **Resumo:** em vez de "resume", peça: "resume este documento em 5 pontos, cada um de uma linha, pensado para a minha mãe que não conhece o assunto".
3. **Comparação:** peça: "compara dois telemóveis numa tabela de três colunas: preço, bateria e para quem é melhor".

## 🛠️ Atividade guiada
Passo 1. Abra um assistente gratuito (ChatGPT em chatgpt.com ou Gemini em gemini.google.com).
Passo 2. Escreva um prompt pobre: "escreve algo sobre a saúde". Observe a resposta genérica.
Passo 3. Agora escreva um prompt completo: "Age como um médico de família simpático. Quero uma lista de 5 conselhos para dormir melhor. Cada conselho numa frase simples, sem palavras técnicas, pensada para uma pessoa de 60 anos."
Passo 4. Compare as duas respostas: qual foi mais útil? O que mudou no prompt?
Passo 5. Itera sobre a boa resposta: peça "encurta cada conselho para menos de 10 palavras" e observe como melhora.
Passo 6. Acrescente um exemplo: "Por exemplo, como este: 'Desliga o telemóvel uma hora antes'. Faz-me os outros quatro com o mesmo estilo."
Passo 7. Peça que pense passo a passo: "antes de responder, pensa que causas fazem dormir mal nesta idade e descarta as menos prováveis".
Passo 8. Escreva uma conclusão: que três técnicas lhe deram o melhor resultado?

## ✍️ Exercícios de autoavaliação
1. O que é um prompt e por que é considerado uma habilidade?
2. Explique com o exemplo do assistente novo no escritório por que o contexto importa.
3. O que significa atribuir um papel e dar um formato?
4. O que é iterar e por que é a técnica mais valiosa?
5. Que limites é preciso recordar ao usar prompting?

**Respostas:** 1) É a mensagem que escrevemos para pedir algo a uma IA; é uma habilidade porque quanto melhor pedimos, melhor responde. 2) O assistente não nos conhece nem conhece a empresa; se lhe dermos contexto, a carta é útil desde a primeira tentativa. 3) Atribuir um papel é dizer-lhe quem deve ser ao responder; dar um formato é dizer-lhe como queremos a resposta (lista, tabela, carta). 4) Voltar a perguntar afinando o pedido para melhorar cada tentativa; quase nunca a primeira resposta é perfeita. 5) Não pedir dados pessoais, não confiar sem verificar em decisões graves, e saber que às vezes se engana com muita segurança.

## ⚖️ Dimensão ética
O prompting revela o que partilhamos com a IA: não se devem escrever dados pessoais, bancários nem de outras pessoas. Além disso, cuidado com o "prompt injection": uma página web pode esconder instruções que manipulam o assistente; se algo estranho aparecer, não siga. E lembre-se de que a responsabilidade da resposta final é sempre sua: a IA propõe, você decide e verifica.

## 🔓 Ferramentas abertas
- **ChatGPT** (chatgpt.com): assistente gratuito para praticar técnicas de prompting.
- **Gemini** (gemini.google.com): alternativa gratuita da Google.
- **Mistral Le Chat** (chat.mistral.ai): opção europeia gratuita.
- **Learn Prompting** (learnprompting.org): curso aberto e gratuito de técnicas de prompting.
- **YouTube** (youtube.com): procure "técnicas de prompting" para ver demonstrações.

## 🧠 Resumo e ponte
- Pedir bem é uma habilidade que se aprende.
- Contexto, papel, formato e exemplos guiam a resposta.
- Pedir que pense passo a passo reduz erros.
- Iterar é a técnica mais valiosa: cada tentativa afina.
- A IA propõe; você decide e verifica.

No nível 18, descobriremos a IA multimodal: máquinas que veem, ouvem e leem ao mesmo tempo.
