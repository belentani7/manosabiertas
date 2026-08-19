# Módulo 1: Introdução à Inteligência Artificial — Nível 10
## Idioma: PT · Dificuldade: Caule
## Tempo estimado: 2.5 horas

## 🎯 Objetivo do nível
- Perceber o que é a aprendizagem supervisionada com a metáfora do professor.
- Distinguir classificação e regressão com exemplos da vida real.
- Compreender como a máquina corrige os seus erros durante o treino.
- Reconhecer a aprendizagem supervisionada em aplicações do dia a dia.
- Fazer uma pequena "regressão" manual numa folha de cálculo.

## 📖 Vocabulário essencial
| Termo | Explicação simples |
|---|---|
| Aprendizagem supervisionada | Aprender com um "professor": a máquina recebe exemplos com a sua resposta correta. |
| Classificação | Decidir em que grupo entra algo: spam ou não, gato ou cão. |
| Regressão | Prever um número, como o preço de uma casa ou a temperatura de amanhã. |
| Professor (supervisor) | Quem etiqueta os exemplos e corrige a máquina durante o treino. |
| Erro | A diferença entre o que a máquina respondeu e a resposta correta. |
| Treinar e validar | Treinar é aprender com exemplos; validar é verificar com exemplos novos. |

## 📚 Lição principal
Imagine uma aula do ensino básico. Um professor ensina as crianças a distinguir frutas: mostra uma maçã e diz "isto é uma maçã", mostra uma pera e diz "isto é uma pera". Depois faz um exame: mostra uma fruta e pergunta. Se a criança acertar, ótimo; se falhar, o professor corrige. Com a prática, a criança acaba por acertar quase sempre. Assim funciona a aprendizagem supervisionada.

"Supervisionada" significa que há um supervisor: alguém ou algo que conhece as respostas corretas. No mundo da IA, o supervisor é o conjunto de dados etiquetados. Cada exemplo traz a sua resposta. A máquina não adivinha às cegas: no fim do processo tem uma "correção do professor" que lhe diz se acertou ou não.

O processo é um círculo: a máquina olha para um exemplo, faz uma previsão, compara com a etiqueta correta, calcula o seu erro e ajusta as suas ligações para falhar menos na próxima. Depois passa ao exemplo seguinte, e ao seguinte, milhões de vezes. Cada volta é como um exame atrás do outro, e cada correção a torna um pouco melhor.

Há dois grandes tipos de tarefas supervisionadas. O primeiro é a classificação: decidir em que grupo entra algo. Este correio é spam ou importante? Esta foto tem um gato ou um cão? Este pagamento é normal ou suspeito? A resposta é uma etiqueta, uma categoria. É como pôr cada coisa na sua caixa.

O segundo é a regressão: prever um número. Quanto valerá esta casa? Que temperatura fará amanhã? Quantos passos dará hoje? Não há caixas, há uma escala. É como estimar quantos quilos pesa um saco ao olhar para ele: não diz "é pesado ou leve", diz "aproximadamente 25 quilos".

Um exemplo de regressão muito próximo: o preço das casas. Se mostrarmos à máquina milhares de exemplos de "metros quadrados → preço", ela aprenderá a estimar o preço de uma casa que nunca viu. Você faz isso intuitivamente todos os dias: "uma casa maior costuma custar mais". A máquina fá-lo com milhares de dados e com mais precisão.

A diferença entre classificação e regressão é mais simples do que parece: classificar é dizer "sim ou não, este ou aquele"; regressão é dizer "quanto". O banco classifica se um pagamento é fraude; prevê (regressão) quanto gastará no próximo mês. Compreender esta diferença ajuda-o a ler qualquer notícia sobre IA.

Agora, um ponto importante: a máquina pode aprender "de cor" e enganar-nos. Se o professor examinar as crianças com as mesmas frutas que já viram na aula, todos tiram dez. Por isso na IA se separa o treino da validação: treina-se com uns exemplos e verifica-se com outros que a máquina não viu. Se acertar com os novos, é porque aprendeu mesmo.

Isto tem um nome técnico que vale a pena conhecer: sobreajuste. É quando a máquina memoriza os exemplos de treino em vez de aprender o padrão geral. É como um aluno que memoriza as perguntas do exame mas não percebe a matéria: passa no exame conhecido e chumba no desconhecido. Os bons modelos testam-se sempre com dados novos.

A aprendizagem supervisionada está em quase todas as aplicações que já conhecemos. O correio que filtra spam, o reconhecimento de caras, a deteção de fraudes, o diagnóstico por imagem: todos são supervisionados, todos aprenderam com exemplos etiquetados. É o tipo de aprendizagem mais usado e o mais fácil de entender.

E porque é que é preciso tanta quantidade de dados? Porque cada exemplo é uma oportunidade de corrigir. Um modelo precisa de ver muitas variações do mundo real para não se confundir. Tal como uma criança precisa de ver muitos cães (brancos, pretos, grandes, pequenos) para não pensar que só existe uma classe de cães.

Não precisa de saber matemática para usar isto. O importante é o conceito: há um professor (os dados etiquetados), a máquina faz exames (previsões), engana-se, corrige e melhora. E depois testa-se com exames novos para garantir que aprendeu mesmo.

Na atividade deste nível vai fazer a sua própria regressão com uma folha de cálculo: vai desenhar pontos de "tamanho de casa → preço" e uma linha que os resume. Essa linha é, em miniatura, o que a regressão faz com milhares de dados. Vai ver com os seus próprios olhos como a máquina "vê" a tendência.

No próximo nível veremos os outros dois tipos de aprendizagem: a não supervisionada e a por reforço.

## 💡 Exemplos práticos
1. **Correio:** você marca mensagens como "importante" ou "spam"; a máquina classifica as novas tal como você.
2. **O banco:** classifica cada pagamento como "normal" ou "suspeito", com exemplos etiquetados de milhões de movimentos.
3. **O preço da habitação:** um site estima o preço de uma casa comparando-a com milhares de vendas reais (regressão).

## 🛠️ Atividade guiada
Passo 1. Abra o navegador e vá ao Google Sheets (sheets.google.com) ou abra o seu programa de folhas de cálculo.
Passo 2. Na coluna A escreva tamanhos de casa: 40, 55, 70, 85, 100.
Passo 3. Na coluna B escreva preços inventados que cresçam com o tamanho: 80000, 100000, 130000, 160000, 190000.
Passo 4. Selecione as duas colunas com o rato.
Passo 5. Carregue em "Inserir" e depois em "Gráfico".
Passo 6. No gráfico, procure a opção "Linha de tendência" e ative-a.
Passo 7. Observe: a linha resume a relação "mais metros, mais preço". Isso é uma regressão.
Passo 8. Pense: com esta linha, que preço estimaria para uma casa de 60 metros? Essa estimativa é exatamente o que a IA faz com milhares de dados.

## ✍️ Exercícios de autoavaliação
1. Explique com a metáfora do professor o que é a aprendizagem supervisionada.
2. Qual é a diferença entre classificação e regressão?
3. O que é o erro e para que serve durante o treino?
4. O que é o sobreajuste e porque se testa o modelo com dados novos?
5. Dê um exemplo do dia a dia de classificação e outro de regressão.

**Respostas:** 1) É aprender com exemplos que trazem a sua resposta correta, como um professor que corrige os exames. 2) Classificar é decidir em que grupo entra algo (categoria); regressão é prever um número (quantidade). 3) É a diferença entre o que a máquina previu e a resposta correta; serve para ajustar e melhorar. 4) É quando a máquina memoriza os exemplos em vez de aprender o padrão; por isso se testa com dados que não viu. 5) Classificação: filtrar spam ou reconhecer uma cara; regressão: estimar o preço de uma casa ou a temperatura de amanhã.

## ⚖️ Dimensão ética
A aprendizagem supervisionada herda as decisões do supervisor humano que etiqueta. Se as etiquetas forem injustas (por exemplo, créditos aprovados consoante o bairro), a máquina aprende essa injustiça e aplica-a a milhares de pessoas. Além disso, um modelo que só se testa com dados parecidos pode parecer perfeito e falhar no mundo real. Exigir que os modelos se validem com dados diversos é uma responsabilidade ética, não um luxo técnico.

## 🔓 Ferramentas abertas
- **Teachable Machine** (teachablemachine.withgoogle.com): treine um classificador supervisionado com as suas próprias fotos.
- **TensorFlow Playground** (playground.tensorflow.org): veja ao vivo como se treina uma rede com dados etiquetados.
- **Google Sheets** (sheets.google.com): grátis, com gráficos e linhas de tendência para fazer regressões simples.
- **Kaggle** (kaggle.com): concursos e dados para praticar classificação e regressão.
- **YouTube** (youtube.com): procure "aprendizagem supervisionada explicada" para mais vídeos.

## 🧠 Resumo e ponte
- A aprendizagem supervisionada aprende com exemplos etiquetados: há um professor.
- Classificar é pôr em caixas; regressão é prever números.
- A máquina corrige o erro em cada exemplo e melhora.
- O sobreajuste engana: é preciso validar com dados novos.
- Já usa aprendizagem supervisionada todos os dias sem saber.

No nível 11 veremos a aprendizagem não supervisionada e a aprendizagem por reforço.
