# Módulo 5: Automatização e Integração — Nível 10
## Idioma: PT · Dificuldade: Haste
## Tempo estimado: 2 horas

## 🎯 Objetivo do nível
- Entender a fundo a lógica se-então que move toda a automatização.
- Reconhecer as condições como "caminhos" que o fluxo escolhe.
- Criar um filtro ou condição na tua ferramenta de integração.
- Compreender o que significa "se não" (o ramo alternativo).
- Aplicar a lógica a uma tarefa real com várias possibilidades.

## 📖 Vocabulário essencial
| Termo | Explicação em palavras simples |
|---|---|
| Condição | A pergunta que o fluxo faz a si próprio: "cumpre-se isto?". |
| Se-então | A estrutura lógica: "se se cumpre a condição, então faz isto". |
| Se não | A alternativa: "se não se cumpre, faz isto outro". |
| Ramo | Cada caminho que o fluxo toma conforme a condição. |
| Verdadeiro/Falso | A resposta à condição: cumpre-se ou não se cumpre. |
| Operador | A palavra que compara: "maior que", "igual a", "contém". |

## 📚 Lição principal
Hoje subimos ao primeiro nível da banda Haste, onde a automatização se torna mais inteligente. Até agora os fluxos faziam sempre o mesmo: se chegava um dado, agiam. Mas a vida real não é tão simples: às vezes é preciso decidir. A lógica se-então é precisamente a forma de ensinar a máquina a decidir.

Imaginemos a cozinha quando cozinhamos para a família. Se os miúdos vêm comer, fazemos mais quantidade; se não, menos. Se faz frio, sopa; se não, salada. A nossa cabeça toma essas decisões sem pensar. Na automatização, essas decisões escrevem-se como condições: "se acontece isto, faz o um; se não, faz o outro".

A estrutura é muito simples e pode escrever-se assim: "SE se cumpre a condição, ENTÃO fazer A; SE NÃO, fazer B". É como uma encruzilhada no caminho: conforme o que vemos, viramos à direita ou à esquerda. O fluxo chega à encruzilhada, faz a pergunta e toma um caminho ou outro.

Nas ferramentas de integração, essa encruzilhada chama-se filtro, condição ou router. O fluxo pergunta algo sobre os dados que leva: "está o correio vazio?", "é o valor maior do que 100?", "contém a mensagem a palavra urgente?". A resposta é sempre verdadeiro ou falso: sim ou não. Não há termos médios.

Cada resposta abre um ramo. Se é verdadeiro, o fluxo vai por um caminho e faz umas ações. Se é falso, vai pelo outro. É como a rega da horta: se chove, não regamos; se não chove, regamos. A condição "choveu?" decide entre dois caminhos.

Para escrever condições usamos os operadores, que são as palavras que comparam. "Maior que" compara números: se o valor é maior do que cem. "Igual a" compara textos ou números: se o estado é igual a "pago". "Contém" procura palavras dentro de um texto: se a mensagem contém "urgente". Cada operador é uma ferramenta de comparação.

Aprender a ler uma condição é como aprender a ler um sinal de trânsito. O sinal diz "proibido passar se pesas mais de 3 toneladas". Isso é uma condição com um operador. A nossa automatização faz o mesmo com os dados: põe sinais que os dados têm de respeitar para passar.

Um exemplo real: a folha de incidências do bairro. Se a incidência diz "urgente", o fluxo avisa o encarregado de imediato. Se não, guarda-a para a reunião semanal. Uma única condição divide o fluxo em dois caminhos com dois destinos distintos. Essa é a inteligência que acrescentamos à máquina.

As condições podem encadear-se. Depois de uma primeira pergunta, pode vir uma segunda: "é urgente? Se sim, é deste bairro ou de outro?". Encadear condições permite afinar muito, como o médico que faz perguntas até chegar ao diagnóstico. Cada pergunta descarta caminhos.

É preciso cuidado com um erro típico: escrever condições demasiado complicadas. Uma condição que junta muitas perguntas ao mesmo tempo é difícil de rever e de corrigir. Melhor várias condições simples encadeadas do que uma só complicada. É como partir uma tarefa longa em passos curtos: entende-se e arranja-se melhor.

Outro costume bom: que o fluxo nunca fique sem resposta. Se nenhuma condição se cumpre, que faz? Convém ter um ramo de "se não" que recolha o que não encaixa. É como a gaveta das "coisas várias" de casa: tudo o que não tem sítio próprio vai para lá, e nunca se perde.

Ao terminar este nível saberás ler e escrever condições, e entenderás que a automatização não só repete: decide. Esse é o salto da banda Haste. No nível seguinte vamos aprender as variáveis: os dados que mudam e que a máquina pode guardar, comparar e usar.

## 💡 Exemplos práticos
1. **As incidências do bairro.** Se a incidência leva a etiqueta "urgente", o fluxo avisa o encarregado na hora; se não, deixa-a para o relatório semanal.
2. **O orçamento do clube.** Se o gasto de uma compra ultrapassa os 50 euros, o fluxo avisa o tesoureiro para que o aprove; se não, regista-o sozinho.
3. **A reserva da sala.** Se a sala está livre, o fluxo confirma a reserva; se não, envia uma mensagem com as horas alternativas disponíveis.

## 🛠️ Atividade guiada
Passo 1: Abre a tua ferramenta de integração e cria um cenário novo com o nome "Incidências do bairro" (ou o tema que preferires).
Passo 2: Acrescenta o disparador: no Google Sheets, o evento "Observar linhas", com uma folha que tenha as colunas: Descrição, Prioridade (urgente/normal), Pessoa.
Passo 3: Acrescenta um passo de condição: procura "Filtro" ou "Router". A condição será: a coluna "Prioridade" é igual a "urgente".
Passo 4: No ramo verdadeiro (se é urgente): acrescenta a ação de enviar uma mensagem para o Telegram com o texto "URGENTE: [descrição]".
Passo 5: No ramo falso (se não é urgente): acrescenta uma ação que envie um correio para a tua direção com o texto "Nova incidência normal: [descrição]".
Passo 6: Põe nomes aos ramos: "Caminho urgente" e "Caminho normal".
Passo 7: Prova com duas linhas: uma com prioridade "urgente" e outra com "normal". Verifica que cada uma toma o seu caminho.
Passo 8: Acrescenta uma terceira condição se quiseres: por exemplo, que as incidências vazias não façam nada (se a descrição estiver vazia, parar).
Passo 9: Revê, ativa e apaga as linhas de teste.

## ✍️ Exercícios de autoavaliação
1. Que estrutura tem a lógica se-então? a) "Se se cumpre, então faz A; se não, faz B". b) "Faz sempre o mesmo". c) "Pergunta a outra pessoa".
2. Qual é a resposta a uma condição? a) Verdadeiro ou falso. b) Depende do dia. c) Número ou letra.
3. O que é um ramo? a) Uma árvore. b) Cada caminho que o fluxo toma conforme a condição. c) Um botão de cor.
4. Que faz o operador "contém"? a) Compara tamanhos. b) Procura uma palavra dentro de um texto. c) Apaga dados.
5. O que convém fazer com o que não encaixa em nenhuma condição? a) Deixá-lo fora e perdê-lo. b) Recolhê-lo no ramo "se não". c) Apagar a condição.

Respostas: 1-a, 2-a, 3-b, 4-b, 5-b.

## ⚖️ Dimensão ética
- Uma condição mal escrita pode discriminar sem querer: revê que as tuas regras não excluam pessoas por erro.
- As decisões automáticas sobre pessoas (aprovações, altas) devem poder ser revistas por um humano.
- Não uses condições para ocultar informação a quem tem direito de a ver.
- Se o fluxo decide por ti, assegura-te de que as regras são tuas e de que as entendes.
- Um "se não" bem desenhado evita que as pessoas fiquem sem resposta: faz com que ninguém fique de fora.

## 🔓 Ferramentas abertas
| Ferramenta | Para que serve | Onde conseguir |
|---|---|---|
| Make (módulo Router) | Criar ramos e condições | make.com |
| Zapier (Filtros) | Condições dentro dos zaps | zapier.com |
| Google Sheets (SE) | Praticar se-então numa folha | sheets.google.com |
| Node-RED | Lógica visual de código aberto | nodered.org (grátis) |

## 🧠 Resumo e ponte
A lógica se-então ensina a máquina a decidir: se se cumpre uma condição, vai por um caminho; se não, por outro. Usamos operadores para comparar dados e ramos para separar os caminhos. Já não só repetimos: decidimos. No próximo nível vamos aprender as variáveis, os dados que mudam e que o fluxo guarda, compara e reutiliza.
