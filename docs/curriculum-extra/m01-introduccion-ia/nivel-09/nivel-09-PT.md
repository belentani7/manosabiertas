# Módulo 1: Introdução à Inteligência Artificial — Nível 09
## Idioma: PT · Dificuldade: Raiz
## Tempo estimado: 2 horas

## 🎯 Objetivo do nível
- Perceber o que são os dados de treino e de onde vêm.
- Compreender porque a quantidade e a qualidade dos dados importam mais do que a técnica.
- Conhecer o trabalho de etiquetar dados e quem o faz.
- Refletir sobre a privacidade e os direitos de autor dos dados.
- Criar à mão um pequeno conjunto de dados para ver como funciona a aprendizagem.

## 📖 Vocabulário essencial
| Termo | Explicação simples |
|---|---|
| Conjunto de dados | Uma coleção ordenada de exemplos com que se treina um modelo. |
| Etiqueta | A "resposta correta" que se põe em cada exemplo para a máquina aprender. |
| Etiquetador | A pessoa que revê e classifica os exemplos, muitas vezes sem aparecer em lado nenhum. |
| Qualidade dos dados | O quão bem os exemplos representam a realidade que queremos ensinar. |
| Direitos de autor | Os direitos do criador sobre a sua obra; os dados também os têm. |
| Consentimento | A autorização de uma pessoa para usar os seus dados; sem ela, não deviam ser usados. |

## 📚 Lição principal
Já sabemos que as máquinas aprendem com exemplos. Mas de onde vêm esses exemplos? Neste nível vamos abrir a caixa e olhar para a matéria-prima: os dados de treino. São a base de tudo, e percebê-los é perceber os pontos fortes e fracos da IA atual.

Um conjunto de dados é, na essência, uma lista ordenada de exemplos com a sua resposta correta. Por exemplo, para ensinar um sistema a distinguir maçãs de peras, o conjunto teria milhares de fotos, cada uma com a sua etiqueta: "maçã" ou "pera". O modelo estuda a lista, encontra os padrões e aprende. Sem lista, não há aprendizagem.

Quem põe as etiquetas? Atrás de quase toda a IA moderna há um exército invisível de pessoas que olham para imagens, áudios e textos e os classificam. São os etiquetadores. É um trabalho real, repetitivo e às vezes mal pago, que quase nunca aparece nas notícias. Cada vez que um sistema reconhece a sua voz ou um sinal de trânsito, alguém passou horas a ensinar-lhe com exemplos.

É bom sabê-lo por duas razões. Primeiro, por justiça: a IA que admiramos não nasce sozinha; nasce do trabalho humano. Segundo, por humildade: se as etiquetas têm erros, a máquina aprenderá esses erros. Os etiquetadores, por muito cuidadosos que sejam, não são perfeitos, e as suas falhas passam para os modelos.

De onde vêm os dados? De muitas partes. Os cientistas usam conjuntos públicos como o ImageNet, com milhões de fotos classificadas. As empresas usam os seus próprios dados: compras, pesquisas, mensagens. E os grandes modelos de linguagem treinam-se com uma quantidade gigantesca de texto retirado da internet: páginas web, livros, fóruns. Todo esse texto é a sua "biblioteca".

Aqui aparece um debate importante: os direitos de autor. Pode uma empresa treinar um modelo com os livros e artigos de outros sem pagar? É uma discussão aberta em tribunais e parlamentos. O ponto chave para nós é este: os dados não são grátis nem neutros. Alguém os criou, e usar os dados de outros sem autorização tem consequências.

Outro aspeto que deve conhecer: a quantidade importa, mas a qualidade importa mais. Um conjunto pequeno e limpo costuma produzir melhores modelos do que um gigante cheio de erros. É como estudar: memorizar dez mil apontamentos confusos é pior do que estudar bem cem páginas claras. As melhores empresas investem muito em limpar e rever os seus dados.

A qualidade inclui a variedade. Se treinarmos um reconhecedor de frutas só com fotos perfeitas, falhará com fotos reais: com sombras, pouca luz, de lado. O mundo real é variado, e o modelo deve ver essa variedade para não falhar. Por isso se diz que os dados devem representar o mundo que queremos gerir, com toda a sua diversidade.

E aqui vem a parte mais delicada: a privacidade. Muitos dados pessoais — fotos, vozes, mensagens — usam-se para treinar modelos, às vezes sem que a pessoa saiba ou consinta. A sua cara pode ter "ajudado" a treinar um sistema de reconhecimento sem que você soubesse. O consentimento devia ser a regra, não a exceção.

Pensemos na sua vida diária. Quando o telemóvel lhe sugere respostas, quando o banco decide se lhe dá um crédito, quando o médico usa um sistema de diagnóstico: por trás há dados de treino que podem incluir pessoas como você. Perguntar-se de onde vieram esses dados não é paranoia: é cidadania digital.

Há um pormenor curioso e preocupante ao mesmo tempo: os modelos treinam-se com dados do passado, mas vivem no presente. Se o mundo muda — uma moda, uma lei, uma tecnologia nova — o modelo fica desatualizado. É como um empregado que aprendeu o ofício há vinte anos e não se atualizou. Manter os modelos em dia é um trabalho constante.

Também há um círculo curioso: a IA gera conteúdo novo, e esse conteúdo pode usar-se como dados para treinar a IA seguinte. É como fotocopiar fotocópias: cada cópia perde qualidade. Os especialistas já falam do risco de as IAs treinadas com conteúdo de outras IAs degradarem os seus resultados. A matéria-prima contamina-se.

Conhecer os dados de treino muda o olhar: a IA não é uma caixa mágica, é uma esponja que absorve o que lhe damos. Se lhe dermos bons dados, boas respostas; se lhe dermos dados sujos, respostas sujas. Por isso a responsabilidade de quem cria os modelos é enorme, e a curiosidade de quem os usa também.

No próximo nível mudamos de banda: deixamos a Raiz e entramos no Caule, vendo como as máquinas aprendem consoante o tipo de aprendizagem.

## 💡 Exemplos práticos
1. **No supermercado:** o leitor de preços de fruta por imagem treinou-se com milhares de fotos etiquetadas por pessoas reais.
2. **No banco:** o sistema de créditos treinou-se com dados históricos de empréstimos; se esses dados tinham vieses, o sistema herda-os.
3. **Com o médico:** um sistema que lê radiografias treinou-se com milhares de placas anotadas por radiologistas.

## 🛠️ Atividade guiada
Passo 1. Pegue num papel e numa caneta.
Passo 2. Desenhe uma tabela com quatro colunas: "Exemplo", "Cor", "Forma", "É maçã?".
Passo 3. Escreva seis linhas: três maçãs e três peras, com características simples (vermelho, verde, redonda, alongada...).
Passo 4. Reveja: que características vê que separam maçãs de peras nos seus exemplos?
Passo 5. Acrescente uma linha "estranha": uma maçã verde com forma alongada. O que acha que o modelo responderia?
Passo 6. Pense: o que aconteceria se os seus seis exemplos fossem todos maçãs vermelhas? O modelo não saberia reconhecer peras.
Passo 7. Compare com o mundo real: na vida há mais variedade do que nos seus exemplos, por isso são precisas milhares de fotos.
Passo 8. Opcional: abra o Kaggle (kaggle.com), procure "fruits" e veja como são os conjuntos de dados reais com milhares de etiquetas.

## ✍️ Exercícios de autoavaliação
1. O que é um conjunto de dados e o que contém cada exemplo?
2. Quem faz a maior parte da etiquetagem de dados e porque importa conhecê-lo?
3. O que é mais importante, a quantidade ou a qualidade dos dados? Porquê?
4. Que relação têm os direitos de autor com os dados de treino?
5. Que risco tem treinar uma IA com conteúdo gerado por outras IAs?

**Respostas:** 1) É uma lista de exemplos com a sua resposta correta (etiqueta) com que se treina um modelo. 2) Pessoas etiquetadoras, um trabalho real e muitas vezes invisível; conhecê-lo ajuda a entender de onde vem a IA e a valorizar o seu trabalho. 3) A qualidade: um conjunto pequeno e limpo ensina melhor do que um gigante e sujo. 4) Os dados criados por outros (livros, artigos, fotos) têm direitos; usá-los sem autorização é um debate aberto em tribunais. 5) Que o conteúdo se degrada, como fotocopiar fotocópias: os modelos treinados com conteúdo de outras IAs perdem qualidade.

## ⚖️ Dimensão ética
Os dados de treino escondem decisões éticas de grande alcance. Usaram-se dados de pessoas sem o seu consentimento? Pagou-se com justiça aos etiquetadores? Os dados representam toda a sociedade ou só alguns? Atrás de cada modelo há escolhas humanas que podem discriminar ou excluir. Exigir transparência sobre os dados não é técnica: é exigir que a IA se construa com dignidade e justiça.

## 🔓 Ferramentas abertas
- **Kaggle** (kaggle.com): milhares de conjuntos de dados públicos e gratuitos para explorar.
- **Google Dataset Search** (datasetsearch.research.google.com): motor de busca de conjuntos de dados públicos.
- **ImageNet** (image-net.org): o famoso conjunto de milhões de imagens classificadas.
- **OpenML** (openml.org): plataforma aberta de dados de aprendizagem automática.
- **Common Crawl** (commoncrawl.org): o arquivo aberto de páginas web usado para treinar muitos modelos.

## 🧠 Resumo e ponte
- Os dados de treino são a lista de exemplos com etiquetas de que a máquina aprende.
- Por trás há um trabalho humano invisível: os etiquetadores.
- A qualidade e a variedade importam mais do que a quantidade.
- Os dados têm direitos de autor e levantam dúvidas de privacidade.
- A IA é uma esponja: absorve o que lhe damos.

No nível 10 entramos na banda "Caule": como as máquinas aprendem (supervisionado, não supervisionado e reforço).
