# Módulo 1: Introdução à Inteligência Artificial — Nível 07
## Idioma: PT · Dificuldade: Raiz
## Tempo estimado: 2 horas

## 🎯 Objetivo do nível
- Perceber o que é a aprendizagem automática e em que se diferencia de um programa normal.
- Compreender que a máquina aprende com exemplos, não com regras escritas.
- Reconhecer os dados de treino como o "livro de texto" da IA.
- Aplicar a frase "lixo entra, lixo sai" ao mundo dos dados.
- Treinar um modelo simples com uma ferramenta gratuita.

## 📖 Vocabulário essencial
| Termo | Explicação simples |
|---|---|
| Aprendizagem automática | A forma de fazer IA em que a máquina aprende sozinha com exemplos, sem regras escritas. |
| Dados de treino | Os exemplos (fotos, textos, números) com que a máquina aprende. |
| Modelo | O resultado da aprendizagem: a "receita aprendida" que depois se usa para prever. |
| Treinar | O processo de ensinar a máquina mostrando-lhe exemplos. |
| Prever | Fazer uma suposição com o que aprendeu: "isto é spam", "esta é uma cara". |
| Característica | Um pormenor que a máquina usa para decidir, como o tamanho ou a cor. |

## 📚 Lição principal
Até aqui vimos o que é a IA e que tipos existem. Agora vem a pergunta mais importante: como aprendem as máquinas? A resposta curta é: da mesma forma que aprendemos a reconhecer coisas quando somos pequenos, mas com milhões de exemplos. Isso chama-se aprendizagem automática, e é o motor de quase toda a IA moderna.

Pense em como ensinaria a uma criança a distinguir um gato de um cão. Não lhe daria uma lista de regras ("se as orelhas são pontiagudas e pesa menos de cinco quilos..."). Mostrar-lhe-ia muitos gatos e muitos cães, e a criança, sem saber explicar, acaba por distingui-los. A aprendizagem automática faz exatamente isso, mas em grande: mostra milhões de fotos etiquetadas e o sistema encontra os padrões sozinho.

Compare com a programação clássica. Num programa tradicional, um humano escreve as regras e o computador segue-as: "se a palavra-passe estiver correta, entra". Isso funciona para coisas fixas, mas é impossível escrever regras para reconhecer uma voz, uma cara ou um idioma. Há demasiadas variações. Por isso mudou-se a abordagem: em vez de dar regras, dão-se exemplos.

Os exemplos chamam-se dados de treino. São o "livro de texto" da máquina. Se queremos que um sistema distinga correio não desejado, mostramos-lhe milhares de correios marcados como "spam" ou "importante". Se queremos que reconheça caras, mostramos-lhe milhares de fotos de caras. Quanto mais e melhores exemplos, melhor aprende. É como aprender a cozinhar: quantas mais receitas se experimentam, melhor cozinheiro se é.

O resultado do treino chama-se modelo. O modelo é a "receita aprendida": uma coleção de ajustes internos que resumem os padrões encontrados. Uma vez treinado, o modelo já não precisa dos exemplos: pode enfrentar dados novos e prever. Quando o seu correio decide que uma mensagem nova é spam, está a usar um modelo já treinado.

A máquina aprende usando características: pequenos pormenores que ajudam a decidir. Num correio, a característica pode ser "tem muitas palavras em maiúsculas" ou "promete dinheiro fácil". Numa foto, "tem linhas curvas" ou "predomina a cor laranja". O sistema aprende que características importam combinando milhares de exemplos.

Há uma frase famosa neste mundo: "lixo entra, lixo sai". Significa que a qualidade da aprendizagem depende da qualidade dos dados. Se treinarmos um sistema com exemplos incorretos, incompletos ou injustos, o sistema aprenderá esses erros. É como ensinar uma criança com um livro cheio de erros: a criança aprenderá os erros.

Por isso os dados de treino são tão importantes e tão delicados. Se mostrarmos a um sistema mil fotos de pessoas e 90% forem homens, aprenderá que "pessoa" parece-se com um homem. Isso chama-se viés, e é um problema sério de que falaremos mais adiante. A máquina não é neutra: herda o que lhe ensinamos.

Como é que a máquina "aprende" exatamente? Não o faz como nós, não "percebe" os conceitos. Ajusta números. Imagine milhares de botões e manivelas numa máquina enorme: cada exemplo bem resolvido sobe um botão, cada exemplo falhado baixa-o. Com milhões de exemplos, a máquina ajusta as manivelas até acertar quase sempre. É tentativa e erro a alta velocidade.

Não é preciso saber matemática para entender a ideia. A ideia é: exemplos mais ajustes mais correções igual a um modelo que acerta. Você não precisa de programar; só precisa de compreender o princípio para saber porque a IA acerta e porque às vezes falha.

A aprendizagem automática está em todo o lado. O correio que filtra spam, o telemóvel que reconhece a sua voz, o banco que deteta fraudes, a loja que prevê o que vai comprar: tudo funciona com este mesmo princípio. Você já a usou centenas de vezes sem saber. Agora já sabe o nome do que está por trás.

Uma diferença fundamental em relação às pessoas: a máquina precisa de muitos exemplos. Uma criança vê quatro gatos e já os reconhece; um sistema precisa de milhares ou milhões. A vantagem da máquina é a velocidade: pode processar em horas o que a uma pessoa levaria anos. A desvantagem é que não generaliza tão facilmente: uma pequena mudança no contexto pode confundi-la.

Na prática, para usar a IA não é preciso treinar modelos: a maioria já vem treinada. Mas perceber como aprendem torna-nos utilizadores mais inteligentes: sabemos porque um sistema se engana, porque "alucina" e porque convém rever os dados. É como saber como funciona o motor: não é preciso arranjá-lo, mas ajuda a entender porque às vezes faz barulho.

No próximo nível vamos conhecer as redes neuronais: o "cérebro" artificial que está dentro destes modelos.

## 💡 Exemplos práticos
1. **Correio eletrónico:** você marca uma mensagem como "spam"; o sistema aprende com o seu exemplo e a partir daí filtra as parecidas.
2. **O banco:** o sistema que deteta que uma compra noutro país "é estranha" aprendeu com milhões de movimentos normais e anómalos.
3. **Fotos:** o telemóvel que agrupa as fotos do seu neto aprendeu a reconhecer a cara dele com milhares de fotos de treino.

## 🛠️ Atividade guiada
Passo 1. Abra o navegador e vá ao Teachable Machine (teachablemachine.withgoogle.com).
Passo 2. Carregue em "Começar" e escolha "Projeto de imagem".
Passo 3. Verá duas classes: "Classe 1" e "Classe 2". Renomeie a primeira como "Mão levantada" e a segunda como "Mão baixa".
Passo 4. Carregue em "Webcam" na classe 1 e, quando o telemóvel ou computador pedir permissão, permita.
Passo 5. Levante a mão e carregue em "Manter gravação" durante alguns segundos para capturar exemplos.
Passo 6. Repita na classe 2 com a mão para baixo. Já tem os seus dados de treino.
Passo 7. Carregue em "Treinar modelo" e espere alguns segundos.
Passo 8. Teste: levante a mão e veja como o modelo prevê "Mão levantada". Acabou de treinar a sua primeira IA.

## ✍️ Exercícios de autoavaliação
1. Em que se diferencia a aprendizagem automática de um programa tradicional?
2. O que são os dados de treino e porque se comparam com um livro de texto?
3. O que é um modelo e para que serve depois de treinado?
4. O que significa "lixo entra, lixo sai"?
5. Como "aprende" realmente a máquina: percebendo ou ajustando?

**Respostas:** 1) Um programa tradicional segue regras escritas por humanos; a aprendizagem automática aprende padrões de exemplos. 2) São os exemplos com que a máquina aprende, como um livro de texto do qual estuda. 3) É o resultado da aprendizagem, uma "receita" interna usada para prever com dados novos. 4) Que a qualidade da aprendizagem depende da qualidade dos dados: dados maus produzem modelos maus. 5) Não entende conceitos: ajusta números por tentativa e erro até acertar.

## ⚖️ Dimensão ética
Os dados de treino não são neutros: refletem o mundo, com as suas injustiças. Se treinarmos com dados enviesados, a máquina discrimina, embora ninguém lho pedisse. Por isso, quem cria modelos tem uma grande responsabilidade, e quem os usa deve exigir transparência sobre que dados se usaram. Como utilizador, lembre-se: quando um sistema lhe falha injustamente, o problema costuma estar nos dados, não na "máquina".

## 🔓 Ferramentas abertas
- **Teachable Machine** (teachablemachine.withgoogle.com): treine o seu próprio modelo de imagem, som ou pose, sem programar.
- **Machine Learning for Kids** (machinelearningforkids.co.uk): aprenda criando projetos simples.
- **Orange** (orangedatamining.com): programa gratuito para analisar dados visualmente, sem código.
- **Kaggle** (kaggle.com): dados e concursos gratuitos para praticar.
- **YouTube** (youtube.com): procure "o que é a aprendizagem automática" para mais exemplos.

## 🧠 Resumo e ponte
- A aprendizagem automática ensina a máquina com exemplos, não com regras.
- Os dados de treino são o livro de texto; o modelo é a receita aprendida.
- "Lixo entra, lixo sai": os dados mandam.
- A máquina não entende: ajusta números por tentativa e erro.
- Já usamos aprendizagem automática todos os dias sem saber.

No nível 08 vamos conhecer as redes neuronais, o "cérebro" artificial da IA moderna.
