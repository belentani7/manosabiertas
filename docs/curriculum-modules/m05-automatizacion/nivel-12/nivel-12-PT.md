# Módulo 5: Automatização e Integração — Nível 12
## Idioma: PT · Dificuldade: Haste
## Tempo estimado: 3 horas

## 🎯 Objetivo do nível
- Entender como se integra a inteligência artificial dentro de um fluxo.
- Fazer com que uma automatização envie um texto a um modelo de IA e receba uma resposta.
- Usar a IA para resumir, redigir ou classificar dentro de um fluxo.
- Combinar variáveis, condições e IA numa automatização.
- Ter consciência de que a resposta da IA é sempre revista.

## 📖 Vocabulário essencial
| Termo | Explicação em palavras simples |
|---|---|
| Modelo de IA | O programa que lê e gera textos, como um ajudante que pensa. |
| Pedido (prompt) | A instrução que damos à IA: o que queremos que faça. |
| Resposta | O texto que a IA devolve. |
| Resumir | Fazer um texto mais curto com o essencial. |
| Classificar | Pôr um texto numa categoria: urgente, normal, spam. |
| Rever | Ler e verificar o que a IA fez antes de o usar. |

## 📚 Lição principal
Até agora as nossas automatizações moviam dados de um lado para o outro e decidiam com condições. Hoje vamos ensinar-lhes algo novo: a pensar. Vamos integrar inteligência artificial dentro de um fluxo. É como pôr na cozinha um ajudante que lê, resume e escreve: um ajudante muito rápido que, isso sim, é preciso rever.

A inteligência artificial que usamos hoje são programas que leram muita coisa texto e aprenderam a entendê-lo e gerá-lo. Quando lhes damos uma instrução clara, respondem com texto. No módulo 4 já aprendemos a pedir textos à IA. Agora vamos ensinar à nossa automatização a pedi-los sozinha.

Como encaixa a IA num fluxo? Imagina que todas as manhãs chegam cinquenta correios ao clube. Queremos um resumo de cada um sem os ler todos. A automatização pega em cada correio (variável), envia-o à IA com o pedido "resume este texto em três linhas", recebe a resposta e manda-a para o nosso correio ou mensagem. Esse é o ciclo: pegar, pedir, receber, entregar.

Nas ferramentas de integração, a IA é mais um passo, como outro elo da cadeia. Procura-se a aplicação do modelo de IA (por exemplo, OpenAI, Google Gemini, ou os módulos próprios do Make), escolhe-se o evento "criar texto" ou "responder a um pedido", e escreve-se o pedido. Dentro do pedido podemos pôr variáveis: o texto do correio, o nome do sócio, a pergunta que queremos que responda.

O pedido, chamado "prompt", é a instrução. Uma boa instrução para a IA é clara e concreta: "Resume o seguinte texto em três linhas: [texto do correio]". Quanto melhor lhe explicarmos o que queremos, melhor responderá. É como dar a um ajudante instruções precisas na cozinha: "pica as cebolas em cubinhos", não "faz alguma coisa com as cebolas".

A IA também pode classificar. Podemos pedir-lhe: "Diz-me se esta mensagem é urgente, normal ou publicidade. Responde só com uma palavra: urgente, normal ou publicidade". A resposta é uma única palavra que o fluxo pode usar numa condição. Assim combinamos a inteligência da IA com a lógica se-então do nível 10.

Os resumos são outro grande uso. Uma folha com cem comentários pode ser resumida pela IA: "Diz-me os três temas que mais se repetem". A automatização reúne os comentários, a IA analisa-os e entrega o resultado. Poupanos horas de leitura e levamos a essência.

Mas aqui vem a lição mais importante: a IA engana-se. Pode inventar dados, malinterpretar um tom ou responder com algo absurdo. Por isso, o que a IA produz é sempre revisto antes de ser enviado a outras pessoas ou de tomar decisões. A IA é um ajudante, não o chefe. O critério final é humano.

Os nossos fluxos devem tratar a resposta da IA como mais uma variável, que se guarda, se mostra e se revê. Podemos pôr a resposta num correio para que a leiamos antes de publicar, ou usá-la numa condição. Mas nunca deixemos o fluxo enviar a todos uma resposta de IA sem passar por uma revisão.

Convém começar com usos simples e de baixo risco. Um resumo para nós mesmos, uma classificação para ordenar, um rascunho de mensagem que depois revemos. Não comecemos por enviar respostas de IA a centenas de pessoas sem controlo. A prudência ganha-se com a prática.

As ferramentas de integração oferecem IA com limites gratuitos. Para começar, o plano gratuito costuma bastar. A IA consome um pouco de "combustível" por cada pedido, por isso convém não lhe pedir resumos desnecessários. Cada pedido custa algo, embora seja pequeno.

Ao terminar este nível terás uma automatização que pensa: lê um texto, resume-o ou classifica-o e entrega-to. É o primeiro passo para os agentes com IA que veremos na banda Copa. Lembra-te sempre: a máquina sugere, a pessoa decide.

## 💡 Exemplos práticos
1. **O resumo do dia.** Todas as manhãs, o fluxo reúne os correios novos, a IA resume-os em cinco linhas e o resumo chega ao telemóvel da coordenadora.
2. **A classificação de incidências.** A IA lê cada incidência e responde "urgente", "normal" ou "publicidade". A condição do fluxo envia as urgentes ao encarregado.
3. **O rascunho de resposta.** Quando chega um pedido de informação, a IA redige um rascunho de resposta e o fluxo guarda-o num documento para revisão humana.

## 🛠️ Atividade guiada
Passo 1: Abre a tua ferramenta de integração e cria um cenário novo chamado "Resumo do dia" (ou o teu tema).
Passo 2: Acrescenta o disparador: por exemplo, no Gmail, o evento "Novo correio" ou no Google Sheets "Observar linhas" com uma folha de comentários.
Passo 3: Acrescenta o passo de IA: procura "OpenAI" ou "Inteligência artificial" nos conectores, escolhe o evento "Criar texto" ou "Completar" e liga-te com a tua conta (vai-te pedir uma chave ou iniciar sessão).
Passo 4: No campo do pedido, escreve: "Resume o seguinte texto em três linhas: [insere a variável com o texto]".
Passo 5: No campo de resposta ou modelo, deixa a opção recomendada ou escolhe um modelo simples e barato.
Passo 6: Acrescenta uma ação de mensagem (Telegram): "Resumo: [variável com a resposta da IA]".
Passo 7: Prova com um texto real (um correio de teste ou um comentário). Olha o resumo que chega.
Passo 8: Revê a resposta com olhar crítico: está correta? inventou alguma coisa? Anota o que lhe pedirias de forma diferente.
Passo 9: Ativa o cenário e decide como o vais usar: talvez só para ti, talvez com revisão antes de partilhar.

## ✍️ Exercícios de autoavaliação
1. Que faz a IA dentro de um fluxo? a) Lê e gera textos quando lho pedimos. b) Repara os cabos. c) Liga o computador.
2. O que é o pedido ou prompt? a) O nome da automatização. b) A instrução clara que damos à IA. c) Um tipo de botão.
3. Pode-se usar a resposta da IA numa condição? a) Não, é só texto. b) Sim, por exemplo se responder "urgente" ou "normal". c) Só no Make.
4. A IA acerta sempre? a) Sim, nunca falha. b) Às vezes engana-se ou inventa dados. c) Só falha às segundas.
5. Que fazemos com a resposta da IA antes de a enviar a outros? a) Enviamo-la tal qual. b) Revemo-la sempre. c) Apagamo-la.

Respostas: 1-a, 2-b, 3-b, 4-b, 5-b.

## ⚖️ Dimensão ética
- A IA pode inventar dados ou responder com falsa segurança: nunca a uses para tomar decisões sobre pessoas sem revisão humana.
- Não envies à IA dados pessoais desnecessários: envia só o que faz falta para a tarefa.
- Os textos que a IA gera podem conter preconceitos ou erros: revê-os, sobretudo se forem para muitas pessoas.
- Não faças passar um texto de IA por escrito por uma pessoa real sem o dizer, se o contexto o exigir.
- A IA é uma ferramenta tua: decide tu o que lhe pedes, quando a usas e como revês o seu trabalho.

## 🔓 Ferramentas abertas
| Ferramenta | Para que serve | Onde conseguir |
|---|---|---|
| OpenAI (no Make/Zapier) | Pedir resumos e textos à IA | openai.com (com limites gratuitos) |
| Google Gemini | Modelo de IA com contas gratuitas | gemini.google.com |
| Ollama | IA local e livre, sem internet | ollama.com (grátis) |
| Hugging Face | Modelos de IA abertos | huggingface.co |

## 🧠 Resumo e ponte
A IA integra-se no fluxo como mais um passo: recebe um pedido com variáveis, devolve uma resposta que guardamos e usamos. Resume, classifica e redige, mas é sempre preciso rever o seu trabalho. Já lemos, decidimos e pensamos com a automatização. No próximo nível vamos aprender o controlo de erros: o que faz o fluxo quando algo falha.
