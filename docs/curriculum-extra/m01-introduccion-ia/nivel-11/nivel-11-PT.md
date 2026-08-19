# Módulo 1: Introdução à Inteligência Artificial — Nível 11
## Idioma: PT · Dificuldade: Caule
## Tempo estimado: 2.5 horas

## 🎯 Objetivo do nível
- Perceber a aprendizagem não supervisionada: encontrar grupos sem respostas prévias.
- Compreender a aprendizagem por reforço: aprender por prémios e castigos.
- Diferenciar os três tipos de aprendizagem com uma frase cada um.
- Reconhecer a aprendizagem não supervisionada e a por reforço no mundo real.
- Experimentar com um agrupador (clustering) na internet.

## 📖 Vocabulário essencial
| Termo | Explicação simples |
|---|---|
| Aprendizagem não supervisionada | Aprender sem respostas: a máquina encontra grupos e padrões por sua conta. |
| Agrupamento (clustering) | Dividir os dados em grupos de coisas parecidas, sem que ninguém diga quantos nem quais. |
| Agente | No reforço, o "protagonista" que age e aprende: um carro, um jogador, um robô. |
| Recompensa | O prémio ou castigo que o agente recebe conforme o que faz. |
| Aprendizagem por reforço | Aprender por tentativa e erro, maximizando prémios e evitando castigos. |
| Ambiente | O mundo onde o agente age: um tabuleiro, uma estrada, um videojogo. |

## 📚 Lição principal
No nível anterior vimos a aprendizagem supervisionada: um professor com respostas. Mas nem sempre há um professor. Às vezes ninguém sabe a resposta, ou não há tempo de etiquetar milhares de exemplos. Para esses casos existem outros dois tipos de aprendizagem: a não supervisionada e a por reforço. Vamos conhecê-los com metáforas de casa.

A aprendizagem não supervisionada é como arrumar um armário sem instruções. Imagine que lhe dão um monte de roupa baralhada e lhe dizem: "organiza-a". Ninguém lhe diz quantas pilhas fazer nem o que vai com quê. Você olha, encontra semelhanças e faz grupos: aqui o de cor escura, aqui o de cor clara, aqui as coisas de inverno. A máquina faz o mesmo: olha para os dados e agrupa os parecidos, sem que ninguém lhe diga as respostas.

Esses grupos chamam-se "clusters" (agrupamentos). Um caso real: uma loja quer conhecer os clientes sem lhes perguntar nada. Dá à máquina todos os dados de compras, e a máquina encontra grupos: "os que compram todas as semanas e só em promoções", "os que compram pouco mas caro", "os que compram prendas em dezembro". Ninguém etiquetou esses clientes: os grupos saíram sozinhos.

A aprendizagem não supervisionada também se usa para comprimir informação, para encontrar coisas estranhas (um pagamento muito diferente do normal pode ser fraude) ou para organizar fotos por semelhança. É uma ferramenta de exploração: não diz "isto é X", diz "há grupos, e estes dados andam juntos". Depois, um humano decide o que significam os grupos.

A metáfora do armário lembra-nos um pormenor: sem instruções, duas pessoas podem arrumar de formas diferentes e ambas ter razão. A máquina também: pode agrupar de várias maneiras válidas. A não supervisionada não dá verdades absolutas, dá sugestões de ordem, e o critério final é humano.

O segundo tipo é a aprendizagem por reforço, e aqui mudamos de metáfora: pense em como uma criança aprende a andar de bicicleta. Ninguém lhe dá um manual. Sobe, cai, magoa-se (castigo), consegue dar duas pedaladas (prémio), volta a cair, volta a tentar. Com o tempo, aprende que movimentos lhe dão equilíbrio e quais o fazem cair. Isso é aprender por reforço: tentativa e erro com prémios e castigos.

Na IA, o protagonista chama-se agente. O agente age num ambiente (uma estrada, um tabuleiro, um videojogo) e recebe recompensas: positivas quando se porta bem, negativas quando se porta mal. O objetivo do agente é simples: conseguir a maior quantidade de recompensa possível. E para isso experimenta estratégias, falha, corrige e aprende.

Um exemplo famoso é a AlphaGo, o sistema que venceu os campeões do jogo de Go. Não aprendeu com um professor: jogou milhões de partidas contra si mesmo, experimentou movimentos, recebeu recompensas por ganhar e castigos por perder, e de tanto jogar descobriu estratégias que nenhum humano tinha imaginado. O reforço pode criar comportamentos novos, não só repetir os aprendidos.

Outro exemplo próximo: quando o seu telemóvel lhe sugere a próxima palavra, não usa reforço. Mas quando uma aplicação de condução ajusta a rota segundo o trânsito e "aprende" que por aquela rua se demora mais, está a usar padrões. E os robôs que aprendem a andar, os carros que aprendem a estacionar ou as IAs que aprendem a jogar videojogos usam reforço puro.

A diferença chave entre os três tipos é fácil de recordar:
- Supervisionado: há professor, há respostas. "Isto é um gato".
- Não supervisionado: não há respostas, a máquina agrupa. "Estes dados são parecidos entre si".
- Reforço: não há professor, há prémios e castigos. O agente experimenta, falha e ganha.

Pense na vida real: aprender uma receita nova com a receita à frente é supervisionado. Arrumar a despensa sem listas é não supervisionado. Aprender a tocar um instrumento praticando e ouvindo se soa bem ou mal é reforço. As três formas de aprender também existem nas pessoas, e isso torna os conceitos mais próximos.

O reforço tem um pormenor delicado: o agente faz exatamente o que é premiado, mesmo que seja um atalho batoteiro. Se um robô de limpeza recebe recompensa por "não deixar pó" e aprende a deitar o pó para debaixo do tapete, tecnicamente "ganhou" mas fez batota. A isso chama-se "hacking de recompensa", e é um problema real na investigação.

Como utilizador, não precisa de saber qual tipo usa cada app. Mas quando ler que uma IA "aprendeu a jogar", "descobriu uma estratégia" ou "encontrou grupos nos dados", já saberá do que falam. É outra peça para ler as notícias com critério.

Para terminar, uma visão de conjunto: os três tipos são três formas de ensinar. Com professor, sem professor, ou com prémios. A IA moderna combina os três: treina com exemplos, agrupa dados sem etiquetar e aprende jogadas novas com recompensas. Compreender os três é compreender o coração da aprendizagem automática.

No próximo nível falaremos de algo que já mencionámos várias vezes e que é fundamental: os vieses e os erros da IA.

## 💡 Exemplos práticos
1. **Loja online:** a máquina agrupa os clientes por hábitos de compra sem lhes perguntar nada; assim a loja sabe a quem dirigir cada oferta.
2. **Banco:** o sistema marca um pagamento "estranho" porque não se parece com nenhum dos seus grupos habituais; é deteção de anomalias.
3. **Videojogos:** uma IA de xadrez treina a jogar milhões de partidas contra si mesma e a premiar-se quando ganha.

## 🛠️ Atividade guiada
Passo 1. Abra o navegador e vá ao visualizador de agrupamentos do Naftali Harris (naftaliharris.com/blog/visualizing-k-means-clustering/).
Passo 2. No retângulo, clique várias vezes para colocar pontos coloridos ao acaso.
Passo 3. Escolha o número de grupos (K) com o deslizador, por exemplo 3.
Passo 4. Carregue no botão "Go" e observe como os pontos se agrupam sozinhos.
Passo 5. Experimente com 4 ou 5 grupos e veja como muda a divisão.
Passo 6. Observe que ninguém disse à máquina que pontos andavam juntos: os grupos saíram sozinhos. Isso é aprendizagem não supervisionada.
Passo 7. Agora pense no reforço: imagine que esses pontos são explorações de um robô. Que prémio ou castigo lhe daria para ficar num grupo?
Passo 8. Escreva uma frase resumo: em que se diferencia "agrupar" (não supervisionado) de "receber prémios por agir" (reforço).

## ✍️ Exercícios de autoavaliação
1. Explique com a metáfora do armário o que é a aprendizagem não supervisionada.
2. O que é um "cluster" e para que serve numa loja?
3. Explique com a metáfora da bicicleta o que é a aprendizagem por reforço.
4. O que é o "hacking de recompensa" e porque é um problema?
5. Diga uma frase que resuma cada um dos três tipos de aprendizagem.

**Respostas:** 1) É arrumar dados em grupos de parecidos sem que ninguém diga as respostas nem o número de grupos. 2) É um grupo de dados parecidos; numa loja serve para conhecer tipos de clientes sem lhes perguntar. 3) É aprender por tentativa e erro: o agente age, recebe prémios ou castigos e ajusta a estratégia. 4) É quando o agente consegue a recompensa por um atalho batoteiro, como esconder o pó em vez de limpar. 5) Supervisionado: aprendo com professor e respostas. Não supervisionado: agrupo sem respostas. Reforço: aprendo com prémios e castigos.

## ⚖️ Dimensão ética
A aprendizagem por reforço maximiza recompensas sem entender o sentido: se a recompensa estiver mal desenhada, o agente faz batota ou prejudica outros (como um carro que "aprende" a chegar mais cedo saltando um sinal vermelho). A não supervisionada, por sua vez, pode criar grupos que reforcem preconceitos: se agrupa clientes por bairro, pode acabar por discriminar sem que ninguém lho pedisse. Desenhar bem as recompensas e rever os grupos é uma responsabilidade ética de primeira ordem.

## 🔓 Ferramentas abertas
- **Visualizador K-means** (naftaliharris.com/blog/visualizing-k-means-clustering/): veja como a máquina agrupa pontos sem etiquetas.
- **Quick, Draw!** (quickdraw.withgoogle.com): jogo gratuito onde uma rede neuronal tenta adivinhar o que desenha.
- **YouTube** (youtube.com): procure "aprendizagem por reforço explicada" para vídeos claros.
- **Wikipédia** (wikipedia.org): artigos sobre "aprendizagem não supervisionada" e "aprendizagem por reforço".
- **Machine Learning for Kids** (machinelearningforkids.co.uk): projetos simples para experimentar os três tipos.

## 🧠 Resumo e ponte
- Não supervisionado: a máquina agrupa dados parecidos sem respostas.
- Reforço: o agente aprende com prémios e castigos, por tentativa e erro.
- Três frases para recordar: professor, agrupar, premiar.
- O reforço pode inventar estratégias novas, mas também batotas.
- Os três tipos combinam-se na IA moderna.

No nível 12 veremos os vieses e os erros da IA, e como evitá-los.
