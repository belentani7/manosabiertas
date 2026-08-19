# Módulo 1: Introdução à Inteligência Artificial — Nível 16
## Idioma: PT · Dificuldade: Ramo
## Tempo estimado: 3 horas

## 🎯 Objetivo do nível
- Entender por que é preciso testar uma IA antes de confiar nela.
- Distinguir entre dados de treinamento e dados de teste.
- Compreender o que é a precisão e por que não diz tudo.
- Reconhecer o sobrequiste: quando a máquina memoriza em vez de aprender.
- Avaliar na prática um modelo simples com casos novos.

## 📖 Vocabulário essencial
| Termo | Explicação simples |
|---|---|
| Avaliação | O processo de testar a IA com casos que nunca viu para ver se acerta. |
| Conjunto de treinamento | Os exemplos com que a máquina aprende. |
| Conjunto de teste | Exemplos novos, diferentes dos de treinamento, com que se examina a máquina. |
| Precisão | A percentagem de acertos: de cada 100 casos, quantos resolveu bem. |
| Sobreajuste | Quando a máquina memoriza os exemplos de treinamento e falha com qualquer novidade. |
| Comparativo (benchmark) | Testes padrão usados para comparar modelos entre si. |

## 📚 Lição principal
Imaginemos que contratamos um cozinheiro. Pediríamos o currículo e pronto? Não: pediríamos que cozinhasse um prato novo e provávamos. Isso é avaliar. Com a IA passa o mesmo: antes de confiar num sistema, é preciso testá-lo. E a forma de o testar tem um truque.

O truque é este: não se pode examinar a máquina com as mesmas perguntas com que ela estudou. Pense num exame escolar. Se o aluno decora as respostas e o exame é exatamente igual, tira um dez mas não aprendeu nada. Para saber se aprendeu mesmo, o exame deve trazer perguntas novas.

Com a IA acontece exatamente o mesmo. Os exemplos com que aprende chamam-se conjunto de treinamento. Os exemplos novos, que nunca viu, chamam-se conjunto de teste. Um bom modelo passa no exame com perguntas novas. Um modelo trapaceiro só memoriza as velhas.

Por que é tão importante? Porque na vida real a IA encontra sempre casos novos. Um filtro de spam, por exemplo, nunca viu o correio que vai chegar amanhã. Se tivesse apenas memorizado os correios da semana passada, seria inútil. Tem de generalizar: aprender a regra, não o caso.

A precisão é o número que resume quanto acerta: se resolve bem 95 de cada 100 casos, tem uma precisão de 95%. Parece bom, mas é preciso olhar com lupa. Um modelo que responde sempre "não há doença" pode ter uma precisão altíssima se as doenças forem raras, e mesmo assim ser perigosíssimo.

Esse é o grande engano das cifras: uma precisão alta não garante que a IA seja boa. Depende de que casos se puseram no teste e do que está a decidir. Por isso os especialistas usam várias medidas e, sobretudo, testam com dados que representem a vida real.

Outro conceito-chave é o sobrequiste. Imagine um aluno que decora as respostas. No exame de memória tira um dez; no exame de verdade, um zero. A máquina sobrequistada é igual: com os exemplos de treinamento acerta tudo, mas com qualquer novidade desaba. Decorar não é aprender.

Como se deteta o sobrequiste? Comparando: se a máquina acerta 99% no treinamento e só 60% no teste, algo cheira mal. Essa diferença é o sinal de que memorizou em vez de entender. No mundo profissional, verificar essa diferença é o pão de cada dia.

Também existe o problema contrário, o subajuste: quando o modelo é tão simples que não aprende nem os exemplos de treinamento. É como um cozinheiro que só sabe fazer pão, seja o que for que lhe peçam. Nem memoriza nem generaliza: é simplesmente fraco.

Na prática, as empresas e os investigadores usam comparativos (benchmarks): baterias de testes padrão que permitem comparar modelos entre si. "Este modelo rende melhor nestes testes" é uma frase com sentido porque todos fizeram o mesmo exame.

Mas atenção: um comparativo também não é a verdade absoluta. Os exames podem preparar-se, e alguns modelos melhoram nos testes mas falham na rua. A realidade vence sempre o laboratório. Por isso a avaliação não se faz uma vez, mas de forma contínua, com dados reais e com supervisão humana.

E que papel tem você? Ser crítico com as cifras. Quando uma empresa anunciar "a nossa IA acerta 99%", pergunte-se: com que casos a testaram? Representam a minha realidade? Um 99% com casos fáceis não vale o mesmo que um 90% com casos difíceis.

A avaliação também é uma questão ética. Um sistema de diagnóstico médico que falha mais com uns do que com outros não é aceitável, ainda que a precisão global seja alta. Por isso os testes devem olhar não só para a média, mas para cada grupo. A justiça mede-se nos detalhes.

No próximo nível, veremos a arte de falar com a IA: o prompting avançado, para tirar o máximo proveito dos assistentes.

## 💡 Exemplos práticos
1. **Filtro de correio lixo:** treina-se com correios antigos e testa-se com correios novos que nunca viu; assim se sabe se aprenderá na vida real.
2. **Diagnóstico médico:** um modelo testa-se com casos de diferentes grupos de pessoas; a precisão por grupos importa mais do que a média.
3. **Previsão do tempo:** treina-se com os dados do ano passado e avalia-se com os deste ano, que não conheceu.

## 🛠️ Atividade guiada
Passo 1. Abra o Teachable Machine (teachablemachine.withgoogle.com) no navegador.
Passo 2. Crie duas classes: "mão aberta" e "punho fechado". Use a câmera do computador para lhe ensinar 5 exemplos de cada.
Passo 3. Treine o modelo e teste com a mesma mão que usou para ensinar: acertará quase sempre.
Passo 4. Agora o teste de verdade: faça gestos que não ensinou, como uma mão virada ou a outra distância. Observe como cai o acerto.
Passo 5. Acrescente mais 20 exemplos de cada classe, variando distância e ângulo. Volte a treinar.
Passo 6. Repita o teste com gestos novos. Compare: melhorou o acerto com mais e melhores exemplos?
Passo 7. Reflita: qual foi o conjunto de treinamento e qual foi o conjunto de teste?
Passo 8. Escreva uma conclusão sobre por que os exemplos novos são a prova de fogo de uma IA.

## ✍️ Exercícios de autoavaliação
1. Por que não se pode examinar a máquina com as mesmas perguntas com que estudou?
2. Que diferença há entre o conjunto de treinamento e o conjunto de teste?
3. O que é o sobrequiste e como se deteta?
4. Por que uma precisão alta não garante que a IA seja boa?
5. Que papel tem o utilizador perante as cifras que as empresas anunciam?

**Respostas:** 1) Porque memorizaria e não aprenderia; o exame deve trazer perguntas novas para comprovar que generaliza. 2) O de treinamento são os exemplos com que aprende; o de teste são casos novos que nunca viu e com que é examinada. 3) É quando a máquina memoriza os exemplos de treinamento e falha com novidades; deteta-se quando acerta muito no treinamento e muito menos no teste. 4) Porque depende de que casos se testaram e do que decide; pode acertar muito em casos fáceis e falhar nos importantes. 5) Ser crítico: perguntar-se com que casos a testaram e se representam a sua realidade, em vez de acreditar no número.

## ⚖️ Dimensão ética
Avaliar é uma forma de proteger as pessoas: um modelo não testado é um risco. Mas a avaliação também pode enganar se for feita com dados que não representam todos. Os sistemas que decidem sobre saúde, dinheiro ou trabalho devem ser avaliados por grupos, não só pela média, e de forma independente. Exigir transparência nos testes é exigir justiça.

## 🔓 Ferramentas abertas
- **Teachable Machine** (teachablemachine.withgoogle.com): treine e teste modelos com as suas próprias fotos ou gestos.
- **TensorFlow Playground** (playground.tensorflow.org): veja a diferença entre acerto no treinamento e no teste.
- **Kaggle** (kaggle.com): conjuntos de dados reais para praticar avaliações.
- **Hugging Face** (huggingface.co): rankings (leaderboards) onde se comparam modelos com testes padrão.
- **YouTube** (youtube.com): procure "sobreajuste explicado" para ver animações do conceito.

## 🧠 Resumo e ponte
- Antes de confiar, é preciso testar com casos que a IA nunca viu.
- Treinamento é estudar; teste é o exame com perguntas novas.
- Decorar não é aprender: cuidado com o sobrequiste.
- Uma precisão alta pode esconder injustiças.
- As cifras olham-se com lupa, não se acreditam às cegas.

No nível 17, dominaremos o prompting avançado: a arte de pedir à IA exatamente o que queremos.
