# Módulo 3: IA Aplicada aos Dados — Nível 15
## Idioma: PT · Dificuldade: Ramo
## Tempo estimado: 3 horas

## 🎯 Objetivo do nível
- Perceber o que é a análise preditiva e porque é a parte mais "mágica" da IA.
- Compreender que prever não é adivinhar: é calcular probabilidades com dados passados.
- Distinguir entre previsão boa e previsão má.
- Aprender a ideia de "treinar" e "avaliar" um modelo.

## 📖 Vocabulário essencial
| Termo | Explicação em palavras simples |
|---|---|
| Análise preditiva | Usar dados passados para antecipar o que vai acontecer no futuro. |
| Modelo | A regra que a IA aprende para fazer previsões. |
| Treinar | Ensinar o modelo com exemplos de dados passados. |
| Avaliar | Verificar se as previsões do modelo estão corretas. |
| Probabilidade | A medida de quanta confiança tem uma previsão, de 0 a 100%. |

## 📚 Lição principal
Bem-vindo à banda Ramo. É a banda mais esperada do curso, porque aqui a IA faz o que parece magia: olhar para o futuro. Até agora aprendemos a olhar para o passado: ordenar dados, desenhá-los, limpá-los, encontrar correlações. Tudo isso era o treino de um detetive. Agora chega a hora do oráculo: usar o que sabemos para antecipar o que vem.

O que é a análise preditiva? É a disciplina que usa dados passados para calcular o que vai acontecer no futuro. Não é adivinhação nem superstição: é estatística aplicada. Quando o meteorologista diz "amanhã há 70% de probabilidade de chuva", não está a lançar uma moeda: está a comparar o dia de hoje com milhares de dias parecidos do passado e a contar quantas vezes choveu depois. Isso é análise preditiva.

A peça central é o "modelo". Um modelo é uma regra que a máquina aprende sozinha a partir de exemplos. Imagine uma criança que nunca viu cães nem gatos. Ensinamos-lhe 100 fotos: "isto é um cão", "isto é um gato". Com essas 100 fotos, a criança interioriza a regra: "quatro patas, orelhas caídas, focinho comprido... cão; orelhas pontiagudas, mia... gato". Depois mostramos uma foto nova e ela acerta. A criança acabou de treinar um modelo. A IA faz exatamente o mesmo, mas com milhões de exemplos.

O processo tem duas fases que é preciso conhecer bem porque vamos usá-las sempre: treinar e avaliar. Treinar é ensinar o modelo com dados do passado, como a criança com as 100 fotos. Avaliar é verificar se aprendeu bem: dão-se-lhe perguntas cuja resposta já conhecemos, deixa-se responder sem ajuda, e conta-se quantas acerta. Se acertar 95%, o modelo é bom. Se acertar 40%, não serve.

Aqui está a armadilha mais perigosa do mundo da IA: um modelo pode acertar de memória. Se a criança memorizar as 100 fotos exatas e lhe mostrarmos uma dessas mesmas 100, acerta sempre... mas não sabe generalizar: a foto 101, que nunca viu, falha-a. Os profissionais chamam a isto "memorizar em vez de aprender". Por isso a avaliação faz-se sempre com dados que o modelo NÃO viu durante o treino. Esse detalhe separa os bons dos amadores.

Há outra ideia que é preciso levar para casa: as previsões da IA nunca são certezas, são probabilidades. Uma IA que prevê doenças nunca diz "você tem isto"; diz "há 80% de probabilidade de...". A percentagem importa. Uma previsão com 95% de confiança e uma com 55% não merecem o mesmo trato. Desconfie de qualquer sistema que dê respostas sem dizer quanto se engana. A honestidade do modelo é a sua percentagem.

Onde encontramos a análise preditiva na vida diária? Em todo o lado. O correio que prevê o spam, o banco que deteta cartões roubados, a loja que sugere "talvez também goste", o navegador que calcula quanto tempo vai demorar a chegar ao hospital, a televisão que adivinha que série vai gostar. Todos esses sistemas, todos os dias, fazem análise preditiva com os seus dados e com os seus. Já vive rodeado de oráculos; hoje aprendeu como funcionam.

Para este curso, a boa notícia é que não é preciso programar para fazer análise preditiva. Nos próximos níveis usaremos ferramentas visuais e gratuitas onde "treinar" significa arrastar pastas e carregar em botões. Você já tem as bases que outros não têm: sabe que atrás de toda a previsão há dados limpos (nível 11), correlações suspeitas (nível 10) e decisões responsáveis (nível 13). A máquina prevê; você julga.

No nível seguinte veremos o primeiro tipo de previsão: a regressão, que se usa quando queremos prever um número. Quantos quilos de tomates dará a horta, quanto custará o bilhete de avião, quantos clientes virão ao mercado. Por agora, lembre-se disto: prever não é adivinhar, treinar não é memorizar e a confiança de toda a previsão mede-se com uma percentagem.

## 💡 Exemplos práticos
### Exemplo 1: O meteorologista
Quando a previsão diz "70% de probabilidade de chuva", está a comparar o dia atual com milhares de dias parecidos do passado. Isso é análise preditiva pura.

### Exemplo 2: A criança e os animais
Com 100 fotos etiquetadas, a criança aprende a regra que separa cães de gatos. Depois acerta com uma foto nova. Treinar e generalizar, numa frase.

### Exemplo 3: O banco
O banco deteta que o seu cartão se usa numa cidade distante ao mesmo tempo que se usa na sua. É improvável, por isso o sistema prevê fraude e bloqueia-o. Baseia a decisão numa probabilidade calculada com milhões de operações passadas.

## 🛠️ Atividade guiada
Passo 1. Abra uma folha nova do Google Sheets e escreva o título "A minha primeira previsão".
Passo 2. Faça uma lista com 10 dias e o número de gelados que um quiosque vendeu (invente dados que sobem quando faz calor).
Passo 3. Acrescente uma coluna com a temperatura de cada dia (se quiser, use dados reais do nível 14).
Passo 4. Faça um gráfico de dispersão com temperatura (X) e gelados (Y), como no nível 10.
Passo 5. Observe: os pontos formam uma linha ascendente? Então temperatura e gelados estão correlacionados.
Passo 6. Imagine que a IA traça a "melhor linha" que passa entre os pontos. Isso chama-se regressão e é o tema do nível 16.
Passo 7. Escreva uma previsão: "se amanhã fizerem 28 graus, quantos gelados se venderão?".
Passo 8. Estime um número com os olhos (olhando para a nuvem de pontos) e escreva-o.
Passo 9. Agora pense: essa previsão é uma certeza ou uma probabilidade? Escreva-o por baixo.
Passo 10. Guarde a folha. Deu o seu primeiro passo na análise preditiva.

## ✍️ Exercícios de autoavaliação
1. O que é a análise preditiva?
2. O que é um modelo?
3. Quais são as duas fases do processo da IA?
4. Porque é que se avalia com dados que o modelo não viu?
5. As previsões da IA são certezas ou probabilidades?

Respostas: 1. Usar dados passados para antecipar o que vai acontecer no futuro. 2. A regra que a IA aprende a partir de exemplos para fazer previsões. 3. Treinar (ensinar com exemplos) e avaliar (verificar com dados novos). 4. Porque se se avaliar com dados já vistos, o modelo pode estar a memorizar em vez de a aprender. 5. São probabilidades, com uma percentagem de confiança que é preciso olhar.

## ⚖️ Dimensão ética
A análise preditiva pode ajudar ou prejudicar. Um banco que prevê incumprimentos com dados enviesados pode negar crédito a gente que até podia pagar; um algoritmo policial mal treinado pode apontar bairros inteiros. A pergunta ética central é: quem responde quando a previsão se engana? A resposta honesta: sempre uma pessoa. A IA propõe, as pessoas dispõem. E qualquer modelo que afete pessoas deve poder explicar-se: se ninguém sabe porque é que a máquina decidiu algo, essa máquina não deveria decidir nada.

## 🔓 Ferramentas abertas
| Ferramenta | O que é e para que serve | Onde encontrar |
|---|---|---|
| Google Sheets | Para explorar dados e ver correlações que preveem | https://sheets.google.com |
| Teachable Machine | Treinar o seu primeiro modelo sem programar | https://teachablemachine.withgoogle.com |
| Machine Learning for Kids | Introdução visual à aprendizagem automática | https://machinelearningforkids.co.uk |
| Gapminder | Dados reais para praticar previsões | https://www.gapminder.org |

## 🧠 Resumo e ponte
- A análise preditiva usa o passado para antecipar o futuro com probabilidades.
- Um modelo é uma regra aprendida a partir de exemplos.
- As duas fases são treinar e avaliar; a avaliação usa sempre dados novos.
- Nenhuma previsão é certeza: olhe sempre para a percentagem.
No nível seguinte veremos a regressão: prever números como vendas, quilos ou temperaturas.
