# Módulo 4: Geração de Conteúdo — Nível 18
## Idioma: PT · Dificuldade: Ramo
## Tempo estimado: 4 horas

## 🎯 Objetivo do nível
- Compreender o que é a locução: dar voz a um texto.
- Conhecer a dobragem: pôr uma voz nova num vídeo existente.
- Usar a IA para gerar vozes com diferentes tons e estilos.
- Aplicar uma voz gerada a um vídeo próprio.
- Sincronizar a voz com as imagens e o texto.

## 📖 Vocabulário essencial
| Termo | Explicação em palavras simples |
|---|---|
| Locução | A voz que lê um texto para um vídeo ou apresentação. |
| Dobragem | Substituir a voz de um vídeo por outra voz. |
| Tom | O caráter da voz: sério, alegre, quente, firme. |
| Sincronização | Que a voz coincida com os lábios, a imagem ou o texto. |
| Entoação | A música da voz: subir e descer para expressar. |
| Voz sintética | A voz gerada pelo computador, como a do Piper. |

## 📚 Lição principal
A voz é a alma do audiovisual. O mesmo texto lido com voz séria ou com voz alegre diz coisas diferentes. A locução é essa arte de dar voz a um texto, e hoje a IA permite-nos gerar vozes variadas, em várias línguas e com diferentes tons, sem estúdios de gravação. É como ter uma equipa de locutores à mão.

A locução usa-se em muitas coisas da vida: vídeos de receitas, apresentações do clube, mensagens de parabéns, contos para os netos. Antes havia que gravar com um microfone, repetir se te enganasses e cuidar do ruído de fundo. Com a voz sintética do Piper podemos gerar a locução em segundos e repeti-la tantas vezes quanto quisermos.

Os tons de voz importam. O Piper oferece vozes diferentes e podemos escolher o tom com as palavras do guião: frases curtas dão energia; frases longas e suaves dão calma. A entoação, o subir e descer da voz, é a música que dá vida às palavras. A IA propõe a voz; nós escolhemos o sentimento.

A dobragem é um passo a mais: pôr uma voz nova num vídeo que já existe. Podemos dobrar um vídeo caseiro para outra língua para que a família que vive fora o entenda, ou dar voz a uma apresentação sem som. Com as ferramentas que conhecemos (extrair áudio, gerar nova voz, voltar a juntar) a dobragem está ao nosso alcance.

O processo de dobragem é simples se o dividirmos em passos. Primeiro, tiramos o áudio do vídeo original. Segundo, transcrevemo-lo com o Whisper para ter o texto (nível 11). Terceiro, corrigimos o texto e traduzimo-lo se for preciso. Quarto, geramos a nova voz com o Piper. Quinto, juntamos a nova voz com o vídeo usando o FFmpeg (nível 17). Cinco passos, e o vídeo fala noutra voz ou noutra língua.

A sincronização é o desafio da dobragem. Idealmente a voz nova deve encaixar com o movimento dos lábios ou com o ritmo do vídeo. Nem sempre é perfeito, mas com a prática ajustamos a duração. Para vídeos sem pessoas a falar (paisagens, receitas, apresentações) a sincronização é mais fácil e o resultado é muito bom.

A dobragem também é uma ferramenta de acesso. Um vídeo da câmara municipal ou do clube pode ser dobrado para outras línguas para que mais pessoas o entendam. Dar voz na língua de quem ouve é um gesto de respeito e de inclusão. A tecnologia ajuda-nos a construir pontes.

A ética da dobragem é especialmente importante. Dobrar um vídeo alheio e fazê-lo passar por original é engano. Dobrar um vídeo de uma pessoa real com uma voz que diz coisas que ela não disse é manipulação. A IA dá poder: usemo-lo para criar, não para suplantar. Antes de dobrar, perguntamos: quem é o autor, quem aparece, tenho permissão?

Os vídeos da nossa vida, os do clube e os projetos próprios são território seguro para a dobragem. A partir daí, cuidado e permissão. A regra é a mesma de sempre: não faças aos outros o que não queres que te façam.

A prática faz o mestre. Começaremos por dobrar vídeos simples e curtos: uma saudação, uma receita, um anúncio do clube. Com cada dobragem aprendemos a ajustar o tom, a velocidade e a sincronização. A primeira vez custa; a décima sai bem.

Ao terminar este nível, saberemos dar voz a um texto com a IA, dobrar um vídeo próprio para outra língua e respeitar os limites éticos da dobragem. A voz, a narração e a dobragem já não têm segredos para nós.

## 💡 Exemplos práticos
1. **O conto com voz.** A Carmen gera com o Piper a locução de um conto para a sua neta, com tom quente e pausado, e junta-a às ilustrações.
2. **O anúncio do clube.** O Pedro dobra para inglês o vídeo da festa do clube para que o irmão que vive em Londres o entenda.
3. **A apresentação sem voz.** O Luís gera a locução da sua apresentação da horta e junta-a ao vídeo que gravou em silêncio.

## 🛠️ Atividade guiada
Passo 1: Escolhe um texto curto teu (por exemplo, a receita do nível 12 ou uma saudação).
Passo 2: Abre o Piper e gera a voz com um tom que encaixe com o texto (sério ou alegre).
Passo 3: Ouve a voz e, se não te convencer, muda as palavras ou a velocidade e volta a gerar.
Passo 4: Tem preparado um vídeo curto teu sem voz (por exemplo, umas fotografias com movimento).
Passo 5: Abre a linha de comandos e junta a voz com o vídeo usando o FFmpeg (ffmpeg -i video.mp4 -i voz.mp3 -c:v copy -c:a aac video_com_voz.mp4).
Passo 6: Reproduz o resultado e verifica que a voz se ouve bem e vai com as imagens.
Passo 7: Se o vídeo original tem som e queres mudá-lo, usa o FFmpeg para tirar o áudio antigo antes (ffmpeg -i video.mp4 -an video_sem_som.mp4) e repete o passo 5.
Passo 8: Partilha o vídeo dobrado com um familiar e conta-lhe como o fizeste.

## ✍️ Exercícios de autoavaliação
1. O que é a locução? a) A voz que lê um texto para um vídeo. b) A câmara. c) A montagem.
2. O que é a dobragem? a) Pôr uma voz nova num vídeo. b) Duplicar um ficheiro. c) Aumentar o volume.
3. O que é a sincronização na dobragem? a) Que a voz coincida com as imagens ou os lábios. b) Que o vídeo seja curto. c) Que não haja voz.
4. Posso dobrar um vídeo de outra pessoa sem permissão? a) Sim, sempre. b) Não, é preciso pedir permissão e respeitar o autor. c) Só se for grátis.
5. Para que serve dobrar para outra língua? a) Para que mais pessoas entendam o vídeo. b) Para apagar o original. c) Para nada.

Respostas: 1-a, 2-a, 3-a, 4-b, 5-a.

## ⚖️ Dimensão ética
- Não dobes vídeos de outras pessoas sem permissão nem os faças passar por originais.
- Não uses a voz gerada para fazer dizer a alguém coisas que não disse.
- Pede consentimento antes de dobrar vídeos onde aparecem pessoas reais.
- Indica quando um vídeo está dobrado com IA: a transparência gera confiança.
- Usa a dobragem para criar, incluir e traduzir, nunca para enganar.

## 🔓 Ferramentas abertas
| Ferramenta | Para que serve | Onde a obter |
|---|---|---|
| Piper | Gerar vozes sintéticas em várias línguas | github.com/rhasspy/piper (gratuito) |
| FFmpeg | Tirar o áudio e juntar a nova voz | ffmpeg.org (gratuito) |
| Whisper | Transcrever o vídeo original | github.com/openai/whisper (gratuito) |
| Audacity | Ajustar a duração e o tom da voz | audacityteam.org (gratuito) |

## 🧠 Resumo e ponte
A locução dá voz a um texto e a dobragem põe uma voz nova num vídeo. Com o Piper, o Whisper e o FFmpeg geramos vozes com tons diferentes, traduzimos e dobramos vídeos próprios, sempre com respeito e permissão. No próximo nível vamos criar o nosso primeiro podcast, juntando narrativa, voz e música.
