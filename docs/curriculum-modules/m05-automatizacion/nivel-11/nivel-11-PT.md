# Módulo 5: Automatização e Integração — Nível 11
## Idioma: PT · Dificuldade: Haste
## Tempo estimado: 2 horas

## 🎯 Objetivo do nível
- Entender o que é uma variável com metáforas do mundo físico.
- Reconhecer os dados que mudam dentro de um fluxo.
- Guardar e reutilizar um dado ao longo da automatização.
- Usar variáveis de texto e de número numa automatização.
- Montar um fluxo que combine condições e variáveis.

## 📖 Vocabulário essencial
| Termo | Explicação em palavras simples |
|---|---|
| Variável | Uma "caixa" com nome onde se guarda um dado que muda. |
| Valor | O dado que está dentro da caixa nesse momento. |
| Nome da variável | A etiqueta da caixa, para saber o que contém. |
| Texto | Um valor feito de letras, números e símbolos, como um nome. |
| Número | Um valor que se pode somar, subtrair ou comparar. |
| Guardar | Deixar um valor na variável para o usar mais tarde. |

## 📚 Lição principal
No nível anterior aprendemos a lógica se-então. Hoje acrescentamos outra peça fundamental: as variáveis. A palavra soa técnica, mas as variáveis são algo que usamos a vida toda. Uma variável é uma caixa com nome que guarda um dado, e esse dado pode mudar. É assim de simples.

Pensemos na despensa de casa. A caixa de açúcar tem uma etiqueta que diz "açúcar". O que está dentro muda: hoje está cheia, amanhã a meio, depois de amanhã vazia. Mas a etiqueta continua a mesma. Nas variáveis passa o mesmo: o nome não muda, o valor muda. A variável "açúcar" pode conter hoje 2 quilos e amanhã 1.

Numa automatização, os dados viajam pelo fluxo como os ingredientes pela cozinha. Quando chega uma linha nova da folha, traz dados: o nome do sócio, o valor, a data. Esses dados podem guardar-se em variáveis com nomes claros: "nome", "valor", "data". A partir daí, o fluxo pode usá-los em qualquer passo.

Por que são tão úteis as variáveis? Porque permitem reutilizar. Sem variáveis, cada passo teria de voltar a procurar o dado. Com variáveis, guardamos o dado uma vez e usamo-lo no correio, na mensagem e na condição. É como apontar o número de telefone uma vez na agenda e ligar sempre a partir dele.

Nas ferramentas de integração, as variáveis aparecem quase sozinhas. Quando escolhemos um campo da folha para o pôr numa mensagem, estamos a usar uma variável, mesmo que a ferramenta não use essa palavra. O nome da variável é o nome da coluna: "Nome", "Valor". A caixa é a coluna; o valor, o que está nessa linha.

As variáveis podem ser de tipos diferentes, tal como na despensa há caixas de coisas diferentes. Dois tipos importam-nos muito: o texto e o número. O texto são letras e palavras: um nome, uma mensagem, um endereço. O número são quantidades: valores, quantidades, temperaturas. Com os números pode-se somar; com o texto, não.

Esta diferença é importante. Podemos fazer "o total é o preço mais o envio" se ambos forem números. Não podemos somar dois nomes. Saber o tipo de cada variável evita erros estranhos. É como não deitar sal no café: cada coisa vai com o seu tipo.

As variáveis também permitem construir mensagens longas. Em vez de escrever a mensagem inteira à mão, montamo-la com peças: "Olá [nome], o teu pedido de [artigo] por [valor] euros está pronto". Cada parêntesis reto é uma variável que se preenche com o valor de cada linha. A mesma mensagem serve para cem pedidos diferentes.

A combinação de variáveis e condições é muito poderosa. A condição pode perguntar pelo valor de uma variável: "se o valor é maior do que 50". E o resultado da condição pode levar a ações que usam essa mesma variável: "o correio diz: ultrapassou os 50 euros". A variável é a informação; a condição, a pergunta; as ações, a resposta.

Um conselho de ofício: põe nomes claros às variáveis. "Valor" é claro; "x" ou "dado3" não é. Quando revermos a automatização daqui a um mês, agradeceremos ler "valor" e não descodificar "dado3". Os bons nomes são a ordem da cozinha digital.

Outro conselho: não guardes em variáveis dados que não vais usar. Cada variável que acrescentamos é mais uma peça para manter. Guardamos o necessário e pouco mais. Menos é mais também nas variáveis.

Ao terminar este nível entenderás que as variáveis são as caixas que levam os dados pelo fluxo, que têm nome e valor, e que podem ser texto ou número. Com condições e variáveis, a automatização já pode ler, decidir e construir mensagens. No nível seguinte vamos torná-la ainda mais esperta: vamos ensinar-lhe a pensar com inteligência artificial.

## 💡 Exemplos práticos
1. **A mensagem de pedido.** O fluxo guarda o nome, o artigo e o valor de cada linha, e monta a mensagem: "Olá Marta, o teu pedido de 3 quilos de tomates por 9 euros está pronto".
2. **O aviso de gasto.** Se a variável "valor" for maior do que 50, o fluxo envia o aviso de aprovação ao tesoureiro com o valor incluído.
3. **A lista de aniversários.** O fluxo guarda os nomes e as datas de aniversário, e todos os meses constrói uma mensagem com os que fazem anos nesse mês.

## 🛠️ Atividade guiada
Passo 1: Abre a tua ferramenta de integração e cria um cenário novo chamado "Pedidos do clube" (ou o teu tema).
Passo 2: Cria no Google Sheets uma folha com as colunas: Nome, Artigo, Valor. Preenche duas linhas de teste.
Passo 3: Acrescenta o disparador: o evento "Observar linhas" do Google Sheets com a tua folha.
Passo 4: Acrescenta uma ação de mensagem (Telegram). No texto, escreve "Olá " e carrega para inserir a variável "Nome"; escreve " o teu " e insere "Artigo"; escreve " por " e insere "Valor"; termina com " euros". Olha como se monta o texto.
Passo 5: Acrescenta um passo de condição: se "Valor" for maior do que 50, então envia um aviso ao tesoureiro (outra ação); se não, não faz nada extra.
Passo 6: No aviso ao tesoureiro, usa de novo as variáveis Nome e Valor para que a mensagem diga "Aprovação: [nome], [valor] euros".
Passo 7: Prova o fluxo com as tuas duas linhas: uma com valor inferior a 50 e outra superior. Observa que a primeira mensagem chega sempre e a do tesoureiro só quando toca.
Passo 8: Escreve no teu papel uma lista das variáveis do teu fluxo, com o nome, o tipo (texto ou número) e para que servem.
Passo 9: Ativa o cenário e apaga as linhas de teste.

## ✍️ Exercícios de autoavaliação
1. O que é uma variável? a) Uma caixa com nome que guarda um dado que muda. b) Um botão do telemóvel. c) Um tipo de folha de cálculo.
2. O que tem toda a variável? a) Só um valor. b) Só um nome. c) Um nome e um valor.
3. Com que tipo de variável se pode somar? a) Com o texto. b) Com o número. c) Com ambos.
4. Para que servem os bons nomes de variável? a) Para que a automatização fique bonita. b) Para saber o que contém cada caixa ao revê-la. c) Para poupar espaço.
5. Pode-se usar a mesma variável em vários passos? a) Não, uma vez usada apaga-se. b) Sim, guarda-se e reutiliza-se. c) Só duas vezes.

Respostas: 1-a, 2-c, 3-b, 4-b, 5-b.

## ⚖️ Dimensão ética
- As variáveis podem conter dados pessoais: trata o valor como tratarias o papel original, com respeito e cuidado.
- Não ponhas palavras-passe, números de conta ou dados médicos em variáveis que viajam para mensagens ou correios.
- Nomeia as variáveis de forma honesta: um nome enganador pode levar a usar um dado com mau critério.
- Se a variável vier de dados dados por pessoas, verifica que são verdadeiros antes de os usar para decidir.
- Revê de vez em quando que variáveis guardas: apaga as que já não usas e os dados que não precisas.

## 🔓 Ferramentas abertas
| Ferramenta | Para que serve | Onde conseguir |
|---|---|---|
| Make (variáveis e módulos) | Guardar e reutilizar dados | make.com |
| Zapier (tokens de dados) | Inserir variáveis nas ações | zapier.com |
| Google Sheets | Praticar com colunas como variáveis | sheets.google.com |
| LibreOffice Calc | Folhas de cálculo livres | libreoffice.org (grátis) |

## 🧠 Resumo e ponte
As variáveis são caixas com nome e valor que levam os dados pelo fluxo. Podem ser texto ou número, guardam-se uma vez e reutilizam-se em condições, mensagens e correios. Com condições e variáveis, a automatização lê e decide. No próximo nível vamos integrar inteligência artificial nos fluxos: a máquina vai ler, resumir e gerar textos.
