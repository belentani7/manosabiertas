# Módulo 5: Automatização e Integração — Nível 19
## Idioma: PT · Dificuldade: Rama
## Tempo estimado: 3 horas

## 🎯 Objetivo do nível
- Entender o que é um bot de chat e para que serve.
- Conhecer os bots de mensagens como o Telegram e o WhatsApp.
- Criar um bot simples que responda a perguntas básicas.
- Ligar o bot a uma ferramenta de integração.
- Aprender as normas de cortesia e segurança ao usar bots.

## 📖 Vocabulário essencial
| Termo | Explicação em palavras simples |
|---|---|
| Bot | Um programa que responde a mensagens sozinho, como um robô de chat. |
| Chat | A conversa escrita: o bot e nós. |
| Comando | Uma palavra ou frase especial que o bot entende. |
| Resposta automática | A mensagem que o bot envia sem que ninguém a escreva. |
| Bot de Telegram | Um bot que vive dentro da aplicação de mensagens Telegram. |
| Humano | Uma pessoa real, que é diferente do bot. |

## 📚 Lição principal
Terminamos a banda Rama com uma peça muito útil: os bots de chat. Um bot é um programa que responde a mensagens por nós, como um robô de conversa. Escrevemos-lhe e ele contesta; pedimos-lhe algo e ele faz. É como ter um rececionista automático que nunca se cansa nem se aborrece.

Onde vivem os bots? Nas aplicações de mensagens. O lugar mais simples para começar é o Telegram, uma aplicação gratuita de mensagens muito popular. Dentro do Telegram, um bot é um contacto especial: tem o seu próprio nome, o seu próprio ícone e responde ao que lhe escrevemos. Não é uma pessoa: é um programa com nome.

Que pode fazer um bot? O básico é responder com uma mensagem preparada. Escrevemos "olá" e ele responde "Olá! Em que posso ajudar?". Escrevemos "horário" e ele responde com o horário da associação. São respostas que nós escrevemos uma vez e que o bot repete quando calha. É como o atendedor de chamadas do telefone, mas por escrito e com muito mais memória.

Os bots entendem-se connosco através de comandos. Um comando é uma palavra especial que o bot reconhece: "/horario", "/precos", "/ajuda". Quando escrevemos o comando, o bot faz a sua parte. É uma forma muito clara de falar com uma máquina: em vez de explicar, carregamos na palavra mágica.

O bot também pode entregar informação que vem de outros lados. Aqui une-se com tudo o que aprendemos: o bot pode perguntar à nossa folha de cálculo, à nossa base de dados ou à nossa automatização, e trazer a resposta. "Quantos sócios há?" e o bot olha para a folha e contesta com o número real. O bot é a boca; a automatização, a memória.

Para criar um bot usa-se uma aplicação chamada BotFather (o "pai dos bots") dentro do Telegram. Escreve-se-lhe para criar um bot novo, põe-se-lhe um nome e obtém-se uma chave secreta, como a chave da porta. Essa chave guarda-se com cuidado: com ela controla-se o bot. Depois, a ferramenta de integração usa essa chave para o bot responder.

Uma vez criado o bot, liga-se à ferramenta de integração. Podemos configurá-lo para que, quando alguém escrever um comando, o fluxo faça algo: procurar um dado, enviar um aviso, registar um pedido. Ou ao contrário: que o fluxo envie mensagens ao bot para que as entregue ao grupo. O bot transforma-se num ponto de entrada e saída da automatização.

É preciso ter cuidado com o que os bots não conseguem fazer. Um bot não entende nuances: se escrevermos uma frase longa e confusa, não saberá o que fazer. Por isso os bots funcionam melhor com perguntas claras e comandos definidos. Quando algo sai do previsto, o bot deve ter uma resposta de respeito: "Não entendi, tenta com /ajuda".

Uma regra de ouro: o bot nunca se deve fazer passar por uma pessoa. O bot deve dizer desde o início "sou um robô". A honestidade evita confusões e enganos. Se alguém pensa que fala com uma pessoa e descobre que é um bot, perde a confiança. O claro é o honesto.

Os bots são muito úteis para as associações: atendem as perguntas repetidas, dão informação a qualquer hora e recolhem pedidos sem se cansar. Mas o que não podem fazer é substituir o trato humano quando é preciso: uma pessoa que precisa de ajuda de verdade merece uma pessoa real. O bot abre a porta; o humano atende.

Ao terminar este nível, fechamos a banda Rama tendo automatizado a voz, a casa e as mensagens. Na banda Copa vamos subir mais um degrau: os agentes com IA, que não só respondem, mas também realizam tarefas completas.

## 💡 Exemplos práticos
1. **O bot da associação.** O bot responde automaticamente às perguntas frequentes: horários, quotas, moradas. Os voluntários já não repetem o mesmo mil vezes.
2. **O bot de reservas.** Escrevemos "/reservar" e o bot consulta a folha de disponibilidade e confirma ou recusa a reserva.
3. **O bot de avisos.** Quando a automatização deteta uma incidência urgente, envia a mensagem ao bot, que a entrega ao grupo da direção.

## 🛠️ Atividade guiada
Passo 1: Descarrega e instala o Telegram no telemóvel (telegram.org). Cria a tua conta com o teu número se não a tiveres.
Passo 2: Procura o utilizador "@BotFather" dentro do Telegram e abre o chat com ele.
Passo 3: Escreve /newbot e carrega em enviar. O BotFather vai perguntar o nome do bot: põe-lhe um claro, por exemplo "Atenção do Clube".
Passo 4: O BotFather vai pedir um nome de utilizador que termine em "bot" (por exemplo, "atencao_clube_bot"). Escreve-o.
Passo 5: O BotFather vai dar-te uma chave (token) longa. Copia-a e guarda-a num sítio seguro do teu papel: é a chave do teu bot, não a partilhes.
Passo 6: Procura o teu bot no Telegram pelo seu nome de utilizador e abre-o. Carrega em "Iniciar" ou escreve /start. Ele vai cumprimentar-te.
Passo 7: Na tua ferramenta de integração, procura o conector "Telegram Bot" ou "Telegram Bot API" e cola a tua chave para ligar.
Passo 8: Cria uma automatização simples: quando o bot receber a mensagem "olá", que responda "Olá! Sou o bot do clube. Escreve /horario para veres os horários".
Passo 9: Acrescenta o comando /horario com o teu horário real. Prova a escrever-lhe as duas mensagens e verifica as respostas.
Passo 10: Lembra-te: no fim da mensagem de boas-vindas, põe "Sou um robô, não uma pessoa".

## ✍️ Exercícios de autoavaliação
1. O que é um bot de chat? a) Um programa que responde a mensagens sozinho. b) Uma pessoa que trabalha de noite. c) Um tipo de telefone.
2. Onde se cria um bot de Telegram? a) Na loja. b) Escrevendo ao BotFather. c) Não se pode criar.
3. O que é um comando? a) Uma palavra especial que o bot reconhece, como /horario. b) Um grito. c) Um ficheiro.
4. Um bot deve dizer que é um robô? a) Não, melhor disfarçar. b) Sim, sempre, para ser honesto. c) Só se perguntar.
5. Um bot pode substituir o trato humano? a) Sim, sempre. b) Não: abre a porta, mas as pessoas atendem as pessoas. c) Só em dias festivos.

Respostas: 1-a, 2-b, 3-a, 4-b, 5-b.

## ⚖️ Dimensão ética
- Um bot nunca se deve fazer passar por uma pessoa: anuncia sempre que é um robô.
- Não peças ao bot dados pessoais dos utilizadores nem os guardes sem permissão.
- Supervisiona os bots: revê de vez em quando que mensagens recebem e se as respostas continuam corretas.
- Se um utilizador precisar de ajuda real (um problema sério, uma emergência), o bot deve encaminhá-lo para uma pessoa.
- A chave do bot é como a chave da tua casa: guarda-a, não a partilhes e muda-a se suspeitares.

## 🔓 Ferramentas abertas
| Ferramenta | Para que serve | Onde conseguir |
|---|---|---|
| Telegram | A aplicação onde vivem os bots | telegram.org (grátis) |
| BotFather | Criar e administrar o teu bot | @BotFather no Telegram |
| Make (Telegram) | Ligar o bot aos teus fluxos | make.com |
| Chatwoot | Atendimento ao cliente livre com bots | chatwoot.com (código aberto) |

## 🧠 Resumo e ponte
Um bot responde a mensagens sozinho, com comandos e respostas preparadas, e pode trazer dados das nossas automatizações. Cria-se com o BotFather, liga-se com uma chave e nunca se faz passar por uma pessoa. Fechamos a banda Rama. No próximo nível começamos a Copa: os agentes com IA, que não só respondem, mas também realizam tarefas inteiras.
