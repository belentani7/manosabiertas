# Módulo 3: IA Aplicada aos Dados — Nível 17
## Idioma: PT · Dificuldade: Ramo
## Tempo estimado: 3 horas

## 🎯 Objetivo do nível
- Perceber o que é a classificação: a técnica que prevê categorias.
- Ver a diferença entre prever números (regressão) e prever rótulos (classificação).
- Compreender o papel dos dados rotulados no treino.
- Aprender a ler a "exatidão" de um classificador e desconfiar das armadilhas.

## 📖 Vocabulário essencial
| Termo | Explicação em palavras simples |
|---|---|
| Classificação | A técnica da IA que decide a que grupo pertence algo. |
| Rótulo | A resposta correta que acompanha cada exemplo no treino. |
| Classe | Cada um dos grupos possíveis: "gato", "spam", "chuva". |
| Exatidão | A percentagem de acertos do classificador. |
| Fronteira de decisão | A linha invisível que separa as classes no mapa dos dados. |

## 📚 Lição principal
No nível anterior aprendemos a prever números com a regressão. Hoje vamos à outra grande família de previsões, talvez a mais visível na sua vida diária: a classificação. A classificação não prevê um número, mas uma categoria. O correio: spam ou não? A foto: cão ou gato? O dia: chuva ou sol? A mensagem: ameaça ou notícia? A classificação é a arte de decidir em que gaveta entra cada coisa.

Comparemos as duas técnicas para que nunca se confundam. A regressão responde a perguntas de "quanto?": quantos gelados, quantos euros, quantos quilos? A classificação responde a perguntas de "qual?": spam ou normal, cão ou gato, seguro ou fraudulento? Uma dá-nos uma medida; a outra dá-nos um rótulo. Se você quer saber quanto vai custar o bilhete, usa regressão. Se quer saber se a mensagem é perigosa, usa classificação.

Como aprende uma máquina a classificar? Com dados rotulados. Voltemos à criança do nível 15: mostramos 100 fotos, cada uma com o seu rótulo ("isto é um cão", "isto é um gato"). Na gíria da IA, essas 100 fotos são "dados rotulados", e os rótulos são as respostas corretas. Sem rótulos não há classificação possível: a máquina não pode aprender o que é cada coisa se nunca lhe dizemos o que é. Por isso, cada exemplo de treino é um par: os dados (a foto) e o rótulo (o que é).

Uma ideia bonita para perceber a classificação é a "fronteira de decisão". Imagine um mapa: num eixo, o peso do animal; noutro, o comprimento das orelhas. Os cães caem numa zona do mapa e os gatos noutra. O classificador desenha uma linha invisível que separa as duas zonas, e quando chega um animal novo, olha para que lado da linha está. Se cai para o lado dos cães, diz "cão". Essa linha invisível é a fronteira de decisão, o equivalente à linha de tendência da regressão, mas a separar grupos.

Como se mede se um classificador funciona? Com a "exatidão": a percentagem de vezes que acerta. Se testar o classificador com 100 animais novos e acertar 92, a exatidão é de 92%. Parece simples, mas é aqui que os fabricantes escondem a maior armadilha. Imagine um detetor de fraudes num banco onde 99% das operações são legítimas. Um sistema que responda sempre "legítima", sem olhar para nada, teria uma exatidão de 99%. Pareceria perfeito e seria inútil! Por isso os profissionais olham para mais do que a exatidão: olham para quantas fraudes reais captura e quantos avisos falsos dispara.

Outra armadilha famosa: a classe maioritária esmaga a minoritária. Se treinar um classificador para detetar um defeito raro em peças, e o defeito só aparece em 1 em cada 1000 peças, o sistema aprende a dizer "está tudo bem" e acerta 99,9%. Aparentemente genial; na verdade não deteta nada. A lição: quando uma categoria é muito rara, um classificador que ignora a categoria rara "parece" excelente. Olhe sempre para quantos casos raros detetou, não só para a percentagem total.

Na vida diária a classificação está em todo o lado e quase sempre sem darmos por ela. O correio eletrónico classifica o spam. O telemóvel classifica a sua voz em "comandos". O banco classifica cada operação em "normal" ou "suspeita". O hospital classifica as radiografias em "limpa" ou "com nódulo". A câmara classifica as suas fotos em "paisagens" e "pessoas". Cada uma dessas decisões é uma fronteira de decisão traçada por uma máquina treinada com milhares de exemplos rotulados.

Para praticar a classificação sem programar, existem ferramentas gratuitas e visuais. Uma muito famosa é o "Machine Learning for Kids", onde se criam "projetos", se carregam fotos ou textos rotulados e a ferramenta treina um modelo com botões. Outra é o "Teachable Machine", da Google, onde se fazem três classes com fotos da câmara (por exemplo, "cabeça", "papel", "nada") e o modelo aprende a distingui-las ao vivo. No nível 18 vamos usá-las a fundo. Hoje só vamos conhecê-las.

Antes de terminar, uma ideia para encadear com o que vem: classificação e regressão combinam-se em quase todos os sistemas reais. O navegador classifica a sua rota ("trajeto normal ou congestionado") e depois regressa o tempo ("chegará em 23 minutos"). O banco classifica a operação ("fraudulenta ou não") e depois prevê quanto se arrisca. Perceber as duas peças dá-lhe o mapa completo de como a IA pensa. No próximo nível, mãos à obra: vai treinar os seus primeiros modelos de classificação com as suas próprias fotos e sons.

## 💡 Exemplos práticos
### Exemplo 1: O correio spam
Chega um correio eletrónico com "GANHE UM PRÉMIO, clique já". O classificador da sua caixa compara-o com milhões de correios rotulados como spam e decide: spam. Não lê o texto: classifica-o.

### Exemplo 2: As fotos da avó
A avó quer uma foto só dos netos. A app classifica cada foto da sua galeria em "pessoa" ou "não pessoa", e de caminho identifica cada neto. Tudo isso é classificação treinada com fotos rotuladas.

### Exemplo 3: A fruta do mercado
Um agricultor fotografa maçãs e peras com a câmara do telemóvel. Um classificador treinado com milhares de frutas rotuladas diz-lhe num instante se é maçã ou pera, e assim evita classificá-las à mão.

## 🛠️ Atividade guiada
Passo 1. Abra o navegador e entre em https://teachablemachine.withgoogle.com (é gratuito e não pede conta).
Passo 2. Carregue em "Começar" e escolha "Projeto de imagens".
Passo 3. Verá três classes: Classe 1, Classe 2 e Classe 3. Dê a cada classe um objeto da sua casa (por exemplo, "chávena", "comando", "nada").
Passo 4. Ative a câmara e capture 20 fotos da chávena mantendo o botão "Manter premido para gravar" enquanto a move.
Passo 5. Capture 20 fotos do comando e 20 do fundo sem objeto (a classe "nada").
Passo 6. Carregue em "Treinar modelo" e espere terminar (alguns segundos).
Passo 7. Na janela de "Pré-visualização", mostre a chávena à câmara: classifica-a bem?
Passo 8. Experimente o comando e depois a classe "nada". Anote quantas vezes acerta em cada dez.
Passo 9. Agora experimente um objeto que NÃO treinou (por exemplo, a sua mão): veja como a IA se confunde. Isso é normal: não aprendeu essa classe.
Passo 10. Escreva num papel: "o meu classificador acerta X em cada 10 vezes" e guarde o projeto. Treinou o seu primeiro modelo de classificação.

## ✍️ Exercícios de autoavaliação
1. Que diferença há entre regressão e classificação?
2. O que são os dados rotulados?
3. O que é a fronteira de decisão?
4. Porque é que a exatidão pode enganar quando uma classe é muito rara?
5. Nomeie duas ferramentas gratuitas para treinar classificadores sem programar.

Respostas: 1. A regressão prevê números ("quanto?") e a classificação prevê categorias ("qual?"). 2. Exemplos que trazem junto aos dados a sua resposta correta (o rótulo). 3. A linha invisível que separa as classes no mapa dos dados. 4. Porque um sistema que diz sempre a classe maioritária acerta quase sempre sem detetar nada. 5. Machine Learning for Kids e Teachable Machine.

## ⚖️ Dimensão ética
Os classificadores enganam-se, e os seus erros não pesam todos o mesmo. Confundir um correio com spam irrita; confundir uma radiografia limpa com uma com nódulo assusta uma pessoa e pode alterar-lhe a vida. Os erros de classificação que afetam pessoas devem ser sempre revistos por pessoas. E há um perigo ético enorme: se os rótulos com que se treinou contêm preconceitos (por exemplo, "estas fotos são de criminosos"), a máquina herda-os e repete-os em grande escala. Treine os seus classificadores com rótulos justos, e nunca os deixe decidir sozinhos sobre vidas humanas.

## 🔓 Ferramentas abertas
| Ferramenta | O que é e para que serve | Onde encontrar |
|---|---|---|
| Teachable Machine | Treinar classificadores com fotos e sons sem programar | https://teachablemachine.withgoogle.com |
| Machine Learning for Kids | Projetos de classificação visuais para aprender | https://machinelearningforkids.co.uk |
| Google Sheets | Classificar dados com filtros e tabelas | https://sheets.google.com |
| Quick, Draw! | Ver como uma IA classifica os seus desenhos | https://quickdraw.withgoogle.com |

## 🧠 Resumo e ponte
- A regressão prevê números; a classificação prevê categorias.
- A classificação treina-se com dados rotulados.
- A fronteira de decisão separa as classes, como a linha de tendência separa tendências.
- A exatidão sozinha engana quando há classes raras: olhe para os acertos reais.
No nível seguinte, mãos à obra: vamos usar o Teachable Machine e o Machine Learning for Kids para treinar os nossos primeiros modelos com fotos, sons e textos.
