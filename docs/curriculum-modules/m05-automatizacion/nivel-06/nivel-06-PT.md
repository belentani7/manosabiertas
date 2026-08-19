# Módulo 5: Automatização e Integração — Nível 06
## Idioma: PT · Dificuldade: Raiz
## Tempo estimado: 3 horas

## 🎯 Objetivo do nível
- Construir uma primeira automatização real entre duas aplicações.
- Ligar a tua conta de uma aplicação à ferramenta de integração.
- Escolher um disparador e uma ação de verdade.
- Testar a automatização com um dado real.
- Entender o que é "testar" em automatização e por que se faz.

## 📖 Vocabulário essencial
| Termo | Explicação em palavras simples |
|---|---|
| Ligar uma conta | Autorizar a ferramenta a usar uma aplicação tua. |
| Autorização | A permissão que dás para que dois programas falem entre si. |
| Testar | Fazer uma prova real para ver se a automatização funciona. |
| Cenário | A automatização completa: disparador, passos e ação. |
| Conector | A peça que une a ferramenta a uma aplicação. |
| Dados | A informação que viaja: um nome, uma data, uma mensagem. |

## 📚 Lição principal
No nível anterior criámos a nossa conta e percebemos as duas peças de toda a automatização: o disparador e a ação. Hoje vamos construir a nossa primeira automatização real, de princípio a fim. Vamos unir duas aplicações e vê-las trabalhar juntas. É um momento bonito, como ver a primeira planta que semeámos.

Escolheremos um exemplo simples e útil: uma folha de cálculo onde apontamos algo (por exemplo, a lista de compras do clube) e, sempre que acrescentamos uma linha, a ferramenta envia uma mensagem para outra aplicação (por exemplo, o grupo de mensagens da associação). Isso é ligar duas aplicações: a folha e as mensagens.

O primeiro passo é escolher as duas aplicações. Uma será o disparador, a que "acorda" a automatização; a outra será a ação, a que faz algo. No nosso exemplo: a folha de cálculo dispara e a mensagem atua. Não há regras fixas: qualquer uma das duas pode ser qualquer uma das partes.

Antes de começar, precisamos que a ferramenta "conheça" as nossas aplicações. Isso chama-se ligar uma conta ou autorizar. É como dar a chave de uma divisão concreta ao empregado: só dessa divisão, não de toda a casa. Faz-se carregando em "Ligar conta" e iniciando sessão na aplicação quando nos pedir.

É normal sentir um pouco de receio ao dar permissões. Tranquilidade: nestas ferramentas pode-se tirar a ligação quando quisermos, desde as definições. E podemos rever que permissões demos. Dar permissão não é dar poder para sempre; é abrir uma porta que podemos fechar.

Assim que as contas estiverem ligadas, escolhemos o disparador. A ferramenta mostra-nos uma lista de eventos de cada aplicação. Procuramos o nosso: "nova linha", "nova mensagem", "novo correio". Carregamos e a ferramenta pede-nos que confirmemos com qual das nossas contas e em que folha ou pasta trabalhar.

Depois vem a ação. Escolhemos a segunda aplicação e o evento: "enviar mensagem", "enviar correio", "criar ficheiro". A ferramenta mostra-nos os campos que podemos preencher e, o mais maravilhoso, oferece-nos pôr dados que vêm do disparador. Assim, a mensagem pode dizer "Nova compra: [nome da linha]" sem que nós escrevamos nada.

Essa possibilidade de "pegar em dados de um lado e pô-los no outro" é o que torna a integração mágica. A ferramenta deixa-nos escolher, com um clique, o dado que vem da folha e pô-lo dentro da mensagem. É como o empregado que traz a nota do cozinheiro e a copia na conta do cliente.

Antes de ativar, testa-se. Testar é fazer uma simulação: a ferramenta executa o fluxo com dados de exemplo e mostra-nos o que saiu. Se algo falhar, vemo-lo e corrigimo-lo sem incomodar ninguém. Testar é grátis e evita erros reais. Ninguém envia uma mensagem para o grupo sem a testar antes.

Quando o teste corre bem, ativa-se a automatização. A partir daí, sempre que acrescentarmos uma linha nova à folha, a mensagem será enviada sozinha. Sem carregar em nada. É uma emoção ver isso pela primeira vez: a máquina trabalha enquanto nós olhamos.

Convém deixar claro que as automatizações destas ferramentas revêem as mudanças com alguma frequência: não é instantâneo como um raio, mas como o correio, que chega em minutos. Se o teste demorar um pouco a aparecer, é normal. A paciência faz parte do ofício.

Se algo correr mal, não há drama. O erro costuma estar nas permissões, nos campos vazios ou num dado escrito de forma diferente. A ferramenta diz-nos onde está o problema e nós arranjamo-lo. Cada erro que corrigimos ensina-nos uma lição que não esquecemos.

Ao terminar este nível terás a tua primeira automatização a funcionar: duas aplicações unidas, a trabalhar juntas. É a base de tudo o que vem. Se hoje ligaste uma folha a uma mensagem, amanhã ligarás coisas maiores.

## 💡 Exemplos práticos
1. **A lista do clube.** Cada compra nova que se aponta na folha do clube envia uma mensagem ao grupo da associação com o valor e o artigo.
2. **O formulário de contacto.** Quando alguém preenche o formulário da associação na internet, os seus dados guardam-se sozinhos na folha e avisa-se a coordenadora.
3. **O aviso de pagamento.** Quando o tesoureiro marca uma quota como paga na folha, o sócio recebe automaticamente um correio de agradecimento.

## 🛠️ Atividade guiada
Passo 1: Abre o Make (ou o Zapier) no navegador e entra na tua conta.
Passo 2: Carrega no botão "Criar cenário" (Make) ou "Create from scratch" (Zapier).
Passo 3: Acrescenta o disparador: procura a aplicação "Google Sheets" e escolhe o evento "Observar linhas" ou "New spreadsheet row".
Passo 4: Carrega em "Ligar" e autoriza a tua conta Google: vai aparecer a janela do Google, carrega em "Permitir" ou "Continuar".
Passo 5: Escolhe a folha de cálculo e o separador que usarás (podes criar uma folha de teste com uma linha: nome, artigo, valor).
Passo 6: Acrescenta a ação: procura a aplicação de mensagens que tenhas (por exemplo, "Telegram" ou "WhatsApp Business") e escolhe "Enviar mensagem".
Passo 7: No campo da mensagem, escreve algo como "Nova compra:" e carrega para acrescentar o dado da folha (o nome da linha). A ferramenta vai inserí-lo.
Passo 8: Carrega em "Testar" ou "Run". Olha o resultado: deveria aparecer uma mensagem com os teus dados de teste.
Passo 9: Se correr bem, ativa o cenário com o interruptor. Acrescenta uma linha nova à folha e espera: a mensagem chegará sozinha. Se algo falhar, lê o aviso de erro e corrige os campos.

## ✍️ Exercícios de autoavaliação
1. O que é ligar uma conta? a) Dar permissão à ferramenta para usar uma aplicação tua. b) Comprar outra conta. c) Apagar a aplicação.
2. Qual é a ordem do fluxo? a) Ação e depois disparador. b) Disparador e depois ação. c) Não importa.
3. Por que se testa antes de ativar? a) Porque é obrigatório por lei. b) Para ver se funciona sem incomodar ninguém. c) Para gastar dados.
4. Uma automatização envia a mensagem na hora? a) Sim, sempre. b) Não, pode demorar uns minutos, como o correio. c) Só à noite.
5. Se uma automatização falhar, o que faço? a) Deito o computador fora. b) Leio o aviso de erro, corrijo os campos e testo outra vez. c) Ignoro-a.

Respostas: 1-a, 2-b, 3-b, 4-b, 5-b.

## ⚖️ Dimensão ética
- Revê sempre que permissões dás e a que contas. Tira o acesso quando deixares de usar uma automatização.
- Não ligues contas que guardam dados pessoais de outras pessoas (saúde, dinheiro) sem um motivo claro.
- Se a tua automatização envia mensagens para um grupo, avisa antes o grupo e verifica o conteúdo.
- Não testes automatizações que enviem correios ou mensagens reais a desconhecidos: usa endereços ou conversas de teste.
- As automatizações que crias são tuas: sê responsável pelo que fazem e pelos dados que movem.

## 🔓 Ferramentas abertas
| Ferramenta | Para que serve | Onde conseguir |
|---|---|---|
| Google Sheets | A folha de cálculo onde porás os teus dados | sheets.google.com (grátis) |
| Make | Criar e testar os teus cenários | make.com |
| Zapier | Alternativa com muitas plantillas | zapier.com |
| Telegram | Aplicação de mensagens para receber avisos | telegram.org (grátis) |

## 🧠 Resumo e ponte
Construímos a nossa primeira automatização real: um disparador numa folha que desencadeia uma ação noutra aplicação. Ligámos contas, escolhemos eventos, testámos e ativámos. Esse é o método que usaremos sempre. No próximo nível vamos aprender a criar notificações automáticas, avisos que chegam sozinhos quando algo importante acontece.
