# Módulo 3: IA Aplicada aos Dados — Nível 18
## Idioma: PT · Dificuldade: Ramo
## Tempo estimado: 4 horas

## 🎯 Objetivo do nível
- Perceber o que é o AutoML: a técnica que automatiza a criação de modelos.
- Conhecer plataformas de AutoML: Teachable Machine, Google Vertex AI e semelhantes.
- Treinar um modelo completo de classificação com imagens próprias.
- Subir um modelo para a nuvem e perceber o que está em jogo aí (dados, custos, responsabilidade).

## 📖 Vocabulário essencial
| Termo | Explicação em palavras simples |
|---|---|
| AutoML | Aprendizagem automática automática: a máquina escolhe o melhor modelo por nós. |
| Conjunto de dados | O grupo completo de exemplos que usamos para treinar. |
| Hiperparâmetros | Os ajustes que o AutoML testa e afina sozinho. |
| Nuvem | Servidores remotos que fazem o cálculo em vez do seu computador. |
| API | A "porta" pela qual outros programas pedem previsões ao modelo. |

## 📚 Lição principal
Até agora vimos as ideias: prever números, prever categorias, treinar, avaliar. Mas você terá pensado: "e eu como é que faço isto sem saber programar?" A resposta é uma das maiores revoluções da IA dos últimos anos: o AutoML. Chama-se assim por "aprendizagem automática automática". Em português: a máquina que treina a máquina.

O que faz exatamente o AutoML? Lembre-se de que treinar um modelo era ensiná-lo com exemplos. Acontece que o treino tem muitos ajustes para escolher: quantas camadas tem a rede, com que rapidez aprende, quantas vezes repassa os dados. Antes, escolher esses ajustes era um ofício de especialistas com doutoramento. O AutoML faz com que o próprio sistema teste milhares de combinações de ajustes, fique com a melhor e nos devolva o modelo vencedor. Você só põe os dados rotulados e o AutoML faz o resto.

As ferramentas de AutoML vêm em dois sabores. O primeiro, para aprender e para pequenos projetos: plataformas visuais e gratuitas como o Teachable Machine, onde já treinámos no nível 17. O segundo, para empresas e projetos sérios: plataformas profissionais na nuvem como o Google Vertex AI, que permitem treinar modelos com milhões de exemplos, guardá-los e pedir-lhes previsões através de uma "API" (uma porta pela qual outros programas fazem perguntas ao modelo). Este curso usa o primeiro sabor; o segundo vamos conhecê-lo para perceber o mundo real.

Neste nível vamos fazer uma coisa muito concreta: treinar um modelo com o Teachable Machine que distinga entre dois ou três objetos da nossa casa. É o mesmo procedimento do nível 17, mas agora com uma diferença: faremo-lo com mais classes, com mais fotos e a verificar a qualidade do modelo como faria um profissional. Porque treinar é fácil; avaliar bem é o ofício.

O primeiro passo de um bom projeto de AutoML é planear o conjunto de dados. A regra de ouro: mais variedade, não mais repetição. Se fizer 100 fotos da chávena sempre igual, do mesmo ângulo e com a mesma luz, o modelo aprende de memória e falha à primeira mudança. Melhor 30 fotos variadas: de perto, de longe, virada, com a chávena cheia e vazia, com luz de dia e de noite. A variedade é a comida do modelo: sem variedade, a máquina não aprende "chávena", aprende "essa chávena exatamente assim".

O segundo passo é equilibrar as classes. Se treinarmos com 100 fotos da chávena e 5 do comando, o modelo será especialista em chávenas e desajeitado com comandos. O número de exemplos por classe deve ser parecido. Esta é a mesma lição da "classe rara" do nível 17, mas agora aplicada desde a origem: a injustiça evita-se na recolha, não se arranja depois.

O terceiro passo, profissional, é reservar uma parte dos dados para a avaliação. Quando carrega em "Treinar modelo" no Teachable Machine, a ferramenta já faz isto por você internamente: guarda umas fotos de cada classe que o modelo nunca vê, e usa só as outras para aprender. Depois testa com as reservadas e diz-lhe quanto acerta. Se você própria separar 10 fotos de cada classe antes de treinar, pode fazer a avaliação à mão: treinar sem essas fotos e depois testar com elas. Esse é o ritual dos profissionais, e você já o percebe.

Agora a pergunta que preocupa toda a gente na nuvem: o que acontece aos meus dados quando treino numa plataforma? Regra simples: em ferramentas gratuitas de aprendizagem como o Teachable Machine, as suas fotos usam-se para treinar o seu modelo; em plataformas profissionais como o Vertex AI, assina-se um contrato que diz quem é dono do quê e onde se guardam os dados. Antes de carregar qualquer coisa, leia onde se armazenam os seus dados e quem os pode ver. Os dados de pessoas —fotos, vozes, nomes— merecem o mesmo cuidado que um documento importante.

Outra coisa que está em jogo na nuvem é o dinheiro. Treinar modelos pequenos no Teachable Machine é grátis; treinar no Vertex AI custa dinheiro por hora de cálculo. A nuvem não é um favor do universo: é alugar o músculo de computadores alheios. Para projetos de aprendizagem, a versão gratuita chega. A lição de gestão: comece sempre no gratuito, e quando o projeto for sério, orçamente o custo da nuvem como mais uma despesa.

Quando terminar de treinar, o Teachable Machine oferece-lhe um botão maravilhoso: "Exportar modelo". Pode descarregar o modelo, ou pedir uma ligação para partilhar. Esse modelo, depois de exportado, funciona sem internet: está no seu computador. Pode até pô-lo numa página web ou num telemóvel. O que treinou já não precisa da plataforma: é um modelo, uma pequena máquina que vive onde você a levar.

Com este nível fechamos a parte prática da banda Ramo. Você já sabe: o que é prever, como se prevê um número, como se prevê uma categoria e como treinar um modelo sem escrever uma linha de código. No próximo nível chega a parte que põe o coração no assunto: a ética dos dados. Porque já tem o poder de criar modelos, e o poder sem responsabilidade é perigoso.

## 💡 Exemplos práticos
### Exemplo 1: A mala da avó
A avó treina um modelo para distinguir "chaves", "óculos" e "nada". Com 40 fotos de cada, o modelo diz-lhe num instante onde está o que procura. AutoML em casa.

### Exemplo 2: A fábrica
Uma fábrica usa o Vertex AI AutoML para classificar peças em "boas" e "defeituosas" a partir de fotos da linha de produção. O modelo treina-se com 10.000 fotos rotuladas por técnicos.

### Exemplo 3: A ONG
Uma ONG treina um modelo para contar carros em fotos de satélite de um acampamento e estimar quantas famílias precisam de ajuda. AutoML gratuito ao serviço de uma causa.

## 🛠️ Atividade guiada
Passo 1. Reúna dois objetos da sua casa (por exemplo, uma chávena e um comando) e escolha um lugar com boa luz.
Passo 2. Abra https://teachablemachine.withgoogle.com e crie um projeto de imagens com 3 classes: chávena, comando e "nada".
Passo 3. Capture 40 fotos variadas da chávena: de perto, de longe, virada, com luz e sem luz. Mova a câmara entre toma e toma.
Passo 4. Capture 40 fotos variadas do comando, igualmente variadas.
Passo 5. Capture 40 fotos do fundo sem objeto para a classe "nada".
Passo 6. Carregue em "Treinar modelo" e espere terminar.
Passo 7. Verifique a qualidade: teste cada objeto a partir de ângulos novos. Anote quantos acertos de cada 10.
Passo 8. Faça o "teste do exame": mostre o objeto com luz diferente ou posição rara. O modelo mantém-se ou fraqueja?
Passo 9. Reflita e escreva: se acrescentar só 5 fotos do comando, o que acha que acontecerá à sua exatidão? Experimente, se quiser.
Passo 10. Carregue em "Exportar modelo" e guarde a opção que preferir. Escreva uma conclusão: "o AutoML permite-me treinar modelos sem programar, mas a qualidade depende da variedade das minhas fotos".

## ✍️ Exercícios de autoavaliação
1. O que significa AutoML?
2. Que dois sabores de ferramentas de AutoML existem?
3. Qual é a regra de ouro do conjunto de dados?
4. Porque é que as classes devem estar equilibradas?
5. O que é preciso ver antes de carregar dados para uma plataforma na nuvem?

Respostas: 1. Aprendizagem automática automática: a máquina escolhe e afina o melhor modelo por nós. 2. Visuais e gratuitas (Teachable Machine) e profissionais na nuvem (Vertex AI AutoML). 3. Mais variedade, não mais repetição: fotos variadas para o modelo generalizar. 4. Porque se uma classe tem muitos mais exemplos, o modelo aprende-a melhor e descuida as outras. 5. Onde se guardam os dados, quem os pode ver e quanto custa o cálculo.

## ⚖️ Dimensão ética
O AutoML baixa a barreira da IA: hoje qualquer pessoa pode treinar modelos que reconhecem caras, vozes ou gestos. Esse poder traz dois deveres. Primeiro, o consentimento: se treinar um modelo com fotos ou vozes de outras pessoas, elas devem saber e aceitar. Segundo, a proporcionalidade: não é preciso reconhecer cada vizinho para contar os carros de uma rua. Pergunte sempre: qual é o mínimo de dados que preciso para alcançar o meu objetivo sem invadir ninguém? O AutoML é uma ferramenta magnífica; a responsabilidade de como se usa continua a ser nossa.

## 🔓 Ferramentas abertas
| Ferramenta | O que é e para que serve | Onde encontrar |
|---|---|---|
| Teachable Machine | AutoML gratuito com fotos, sons e posturas | https://teachablemachine.withgoogle.com |
| Google Vertex AI | AutoML profissional na nuvem | https://cloud.google.com/vertex-ai |
| Machine Learning for Kids | Projetos guiados de AutoML educativo | https://machinelearningforkids.co.uk |
| Hugging Face | Modelos já treinados para testar e usar | https://huggingface.co |

## 🧠 Resumo e ponte
- O AutoML automatiza a criação de modelos: você põe os dados, a máquina põe o ofício.
- A qualidade depende da variedade e do equilíbrio dos seus dados, não da quantidade repetida.
- Na nuvem estão em jogo os seus dados e o seu dinheiro: leia antes de carregar no botão.
- Um modelo treinado exporta-se e vive onde você quiser.
No próximo nível chega a ética dos dados: porque já tem o poder de criar modelos, e o poder sem responsabilidade é perigoso.
