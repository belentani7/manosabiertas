# Módulo 5: Automatização e Integração — Nível 09
## Idioma: PT · Dificuldade: Raiz
## Tempo estimado: 3 horas

## 🎯 Objetivo do nível
- Rever tudo o que aprendemos na banda Raiz: ligar, avisar e adaptar plantilhas.
- Montar uma automatização completa que una várias peças numa só.
- Ordenar os passos de uma automatização como uma receita.
- Rever e depurar um cenário com vários passos.
- Celebrar o primeiro projeto integrado próprio.

## 📖 Vocabulário essencial
| Termo | Explicação em palavras simples |
|---|---|
| Projeto integrado | Uma automatização que une várias aplicações e passos. |
| Depurar | Encontrar e corrigir os falhas da automatização. |
| Passo | Cada peça do cenário: disparador, filtro, ação. |
| Cadeia | A ordem em que os passos se encadeiam. |
| Conector | A peça que une a ferramenta a cada aplicação. |
| Revisão final | A verificação completa antes de dar o trabalho por bom. |

## 📚 Lição principal
Chegámos ao fim da banda Raiz. Nestes cinco níveis aprendemos a criar uma conta numa ferramenta de integração, a ligar duas aplicações, a montar avisos automáticos e a usar plantilhas. Hoje vamos juntar tudo num único projeto completo, como quem cozinha pela primeira vez um menu de três pratos inteiro.

Uma automatização completa costuma ter mais do que dois passos. Não é só "se isto acontece, então faz isto", mas uma cadeia: primeiro um disparador, depois talvez um filtro, depois uma primeira ação, depois uma segunda. Cada passo é um elo, e todos juntos formam a cadeia da automatização.

Voltemos à metáfora da cozinha. Um menu não é um único prato: é entrada, prato principal e sobremesa, servidos por ordem. A automatização completa é igual: cada passo apoia-se no anterior e prepara o seguinte. Se a entrada não sai bem, todo o menu se atrasa. Por isso a ordem importa tanto.

Imaginemos um projeto real para uma associação: quando chega um novo sócio. Passo 1, o disparador: uma linha nova na folha de sócios. Passo 2, um filtro: só se a linha estiver completa (tem nome e correio). Passo 3, a ação: enviar o correio de boas-vindas. Passo 4, outra ação: mandar o aviso ao grupo de Telegram. Esse é um projeto integrado a sério.

A regra de ouro dos projetos: primeiro constrói-se, depois prova-se passo a passo, e só no fim se ativa. Provar passo a passo é como provar o sal de cada prato enquanto se cozinha: se esperarmos pelo fim para provar, não saberemos que prato saiu mal. A ferramenta permite provar cada passo em separado.

Quando um passo falha, a depuração é simples: lemos a mensagem de erro, olhamos o que diz e corrigimos. Os erros mais comuns são três: um campo vazio, uma conta não ligada e um dado escrito com outro nome. Com prática, veem-se no momento. É como o canalizador que ouve a tubagem e sabe onde está o problema.

Outra costume valiosa: nomear bem os passos. A ferramenta permite pôr nomes a cada parte ("Receber sócio novo", "Verificar dados", "Enviar boas-vindas"). Um bom nome diz-nos o que faz cada peça sem a abrir. É como etiquetar os frascos da despensa: encontramos o que procuramos num instante.

Também convém pensar nos imprevistos. Que acontece se chegar uma linha sem correio? E se a aplicação de mensagens estiver em baixo? Uma boa automatização prevê essas situações: se o dado faltar, o fluxo para e avisa. Vamos aprender mais sobre controlo de erros na banda Haste, mas já podemos deixar tudo preparado.

Chega o momento da revisão final. Antes de ativar, repassamos a lista completa: estão todas as contas ligadas? Os campos têm os dados corretos? Provámos cada passo? Os nomes são claros? Essa lista de verificação é a rede de segurança do ofício. A revisão final é o que separa um trabalho bom de um descuidado.

Quando tudo está revisto, ativa-se e prova-se a sério, com um dado real. E aí está a satisfação: ver a cadeia completa a funcionar sozinha, do primeiro ao último passo. É o momento em que percebemos por que este módulo se chama "Automatização e Integração".

Ao terminar este nível, fechamos a banda Raiz com um projeto próprio completo. Os próximos níveis serão mais profundos: vamos aprender a lógica das condições, as variáveis e o controlo de erros. Subimos um degrau, mas já não desde o zero: desde a experiência que ganhámos.

## 💡 Exemplos práticos
1. **Alta de sócios do clube.** Uma linha nova com nome e correio dispara o correio de boas-vindas e, ao mesmo tempo, um aviso ao grupo da direção.
2. **A incidência na oficina.** Quando se regista uma incidência urgente, o fluxo cria um documento, avisa o encarregado e aponta-a no calendário.
3. **A compra do mercado.** Uma linha nova na folha de compras dispara o aviso ao grupo da compra comunitária com o artigo e o distribuidor atribuído.

## 🛠️ Atividade guiada
Passo 1: Abre a tua ferramenta e cria um cenário novo. Põe-lhe um nome: "Alta de sócio" (ou o tema que escolheres).
Passo 2: Acrescenta o disparador: no Google Sheets, o evento "Observar linhas", com a tua folha de sócios (cria uma com as colunas Nome, Correio, Telefone).
Passo 3: Acrescenta um passo de filtro ou condição: que só continue se o campo "Correio" não estiver vazio. Procura-o nos passos como "Filtro" ou "Router".
Passo 4: Acrescenta a primeira ação: um correio de boas-vindas (procura "Gmail", escolhe "Enviar correio"). No "Para", põe o dado da linha; escreve um assunto e um texto curtos.
Passo 5: Acrescenta a segunda ação: uma mensagem para o Telegram (procura "Telegram", escolhe "Enviar mensagem") com o nome do sócio.
Passo 6: Põe nome a cada passo: "Receber sócio", "Verificar correio", "Enviar boas-vindas", "Avisar o grupo".
Passo 7: Prova passo a passo com um dado de exemplo (podes criar uma linha de teste com nome, correio e telefone falsos).
Passo 8: Faz a revisão final: contas ligadas, campos corretos, passos provados.
Passo 9: Ativa o cenário, cria uma linha real (um sócio de teste) e olha como se cumpre toda a cadeia. Apaga depois os dados de teste.
Passo 10: Guarda o cenário e escreve no teu papel o que aprendeste: que passo foi mais difícil e que erro encontraste.

## ✍️ Exercícios de autoavaliação
1. O que é um projeto integrado? a) Uma automatização que une várias aplicações e passos. b) Um único botão. c) Uma pasta do computador.
2. Em que ordem se trabalha um projeto? a) Ativar, construir e provar. b) Construir, provar passo a passo e ativar. c) Provar, apagar e esquecer.
3. Se um passo falhar, que faço? a) Ativar na mesma. b) Ler a mensagem de erro e corrigir o passo. c) Reiniciar o telemóvel.
4. Por que se põem nomes aos passos? a) Porque a ferramenta exige. b) Para saber o que faz cada peça sem a abrir. c) Para que fique bonito.
5. O que é a revisão final? a) A verificação completa antes de ativar. b) Uma passagem pelo correio. c) Uma leitura rápida.

Respostas: 1-a, 2-b, 3-b, 4-b, 5-a.

## ⚖️ Dimensão ética
- Um projeto integrado que toca em dados de pessoas (sócios, clientes, saúde) exige cuidado: não copies dados sensíveis sem necessidade.
- Se a tua automatização envia correios ou mensagens reais, que o conteúdo seja claro e honesto. Ninguém merece uma mensagem confusa ou enganadora.
- Informa as pessoas afetadas de que existe a automatização: a transparência gera confiança.
- Não deixes dados de teste em folhas reais: apaga as linhas falsas para não sujar os dados verdadeiros.
- Um erro detetado na revisão é um sucesso, não um fracasso: por isso se revê antes de ativar.

## 🔓 Ferramentas abertas
| Ferramenta | Para que serve | Onde conseguir |
|---|---|---|
| Make | Montar projetos com vários passos | make.com |
| Zapier | Projetos com múltiplos passos e aplicações | zapier.com |
| Google Sheets | A folha onde vivem os dados | sheets.google.com (grátis) |
| Gmail | Enviar correios a partir do fluxo | mail.google.com (grátis) |
| Telegram | Receber avisos e mensagens do fluxo | telegram.org (grátis) |

## 🧠 Resumo e ponte
Um projeto integrado une disparador, filtro e várias ações numa cadeia ordenada. Constrói-se, prova-se passo a passo e revê-se antes de ativar. Fechamos a banda Raiz com o teu primeiro projeto completo a funcionar. No próximo nível começamos a banda Haste: a lógica da automatização, as condições se-então e os caminhos que o fluxo escolhe conforme os dados.
