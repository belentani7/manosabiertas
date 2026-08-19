# Módulo 5: Automatização e Integração — Nível 18
## Idioma: PT · Dificuldade: Rama
## Tempo estimado: 3 horas

## 🎯 Objetivo do nível
- Entender o que é o Home Assistant e por que é diferente das apps das marcas.
- Conhecer o conceito de "casa inteligente sem depender da nuvem".
- Aprender o que é um servidor e como o Home Assistant pode viver num aparelho pequeno.
- Descobrir alternativas abertas e gratuitas aos assistentes comerciais.
- Decidir se o Home Assistant é para ti ou se ficas com o simples.

## 📖 Vocabulário essencial
| Termo | Explicação em palavras simples |
|---|---|
| Home Assistant | Um programa livre que reúne todos os aparelhos de casa sob um único controlo. |
| Nuvem | Os computadores das empresas onde se guardam os dados. |
| Servidor | Um computador que trabalha sempre para oferecer um serviço. |
| Local | Dentro da tua própria casa, sem sair para a internet. |
| Integração | A forma de unir um aparelho ao Home Assistant. |
| Painel | O ecrã onde se vê e se controla toda a casa. |

## 📚 Lição principal
No nível anterior ligámos os nossos primeiros aparelhos inteligentes. Cada marca traz a sua própria aplicação, e isso tem um problema: se temos uma lâmpada de uma marca e uma tomada de outra, precisamos de duas aplicações, duas contas e duas formas de pensar. O Home Assistant é a resposta: um programa que reúne todos os aparelhos de casa sob o mesmo teto, sem depender de nenhuma marca.

Pensemos na cozinha. Se cada eletrodoméstico tivesse o seu próprio comando à distância com a sua própria forma de usar, cozinhar seria um caos. Preferimos uma cozinha organizada onde cada coisa tem o seu sítio. O Home Assistant é essa ordem: um único painel a partir do qual se veem e controlam todos os aparelhos da casa.

A grande diferença com as aplicações das marcas é onde vivem os dados. As aplicações enviam os nossos dados para a nuvem, para os computadores da empresa. O Home Assistant funciona em local: tudo vive num pequeno computador de casa. Os dados não saem de casa, a casa funciona mesmo que a internet falhe, e ninguém mais os vê. É como ter a despensa em casa e não num armazém alheio.

Que aparelho precisamos para o Home Assistant? Um pequeno computador que funcione sempre. Pode ser um aparelho comprado de propósito (há caixas pensadas para isso) ou um computador velho que já não usemos. Instala-se o programa uma vez e deixa-se a trabalhar, como um forno que vigia tudo. Não é preciso saber programar para começar: o programa guia pelo ecrã.

Uma vez instalado, o Home Assistant vai "descobrindo" os aparelhos de casa. Acrescentam-se-lhe integrações: cada integração é a forma de falar com uma marca ou um aparelho. No painel, acrescentamos a integração da nossa lâmpada, a da nossa tomada, a do nosso sensor. Pouco a pouco, tudo aparece num único ecrã.

A verdadeira potência chega com as automatizações do Home Assistant. São as mesmas regras se-então de sempre, mas sem limites de marca: podemos dizer "se o sensor de movimento se ativa a partir das nove da noite, então acende a luz do corredor". A condição pode olhar para qualquer aparelho e a ação pode tocar em qualquer outro. A casa inteira transforma-se num único fluxo.

Além disso, o Home Assistant integra-se com os assistentes de voz. Podemos continuar a dizer "OK Google, apaga a luz" e esse comando chega ao nosso Home Assistant. Ou podemos usar assistentes livres, sem as grandes empresas. A casa pode falar a nossa língua, até com voz própria em espanhol.

O Home Assistant não é para toda a gente, e tudo bem. Se tens um único aparelho ou preferes o simples, a aplicação da marca e o assistente bastam. O Home Assistant brilha quando há vários aparelhos, de várias marcas, e queremos controlo total e privacidade. É como escolher entre o comando da televisão ou um comando universal: conforme quantos aparelhos tenhas.

A curva de aprendizagem é um pouco mais alta do que a das aplicações das marcas. Não é difícil, mas pede paciência e vontade de explorar. Por isso se recomenda começar com um aparelho conhecido e uma automatização simples, e ir crescendo. Não há pressa: a casa continuará lá amanhã.

Um ponto a favor do aberto: não depende de uma empresa. Se uma marca fecha ou muda o seu serviço, o Home Assistant continua a funcionar com o que é nosso. E se um aparelho deixa de ter suporte, a comunidade costuma encontrar outra forma de o integrar. É como semear na tua própria horta: não dependes da loja do bairro.

A comunidade do Home Assistant é enorme e amável: fóruns, guias em espanhol e vídeos que explicam cada passo. Quando algo se encrava, há sempre alguém que já o resolveu. Aprender com outros é mais fácil do que aprender sozinho. Esse espírito de partilha faz parte deste curso.

Ao terminar este nível entenderás o que é o Home Assistant, em que se diferencia das aplicações das marcas e se te convém. No nível seguinte vamos passar da casa para as mensagens: vamos criar bots de chat simples que respondem sozinhos.

## 💡 Exemplos práticos
1. **A casa de várias marcas.** Rosa tinha luzes de uma marca e tomadas de outra. Com o Home Assistant controla tudo a partir de um único ecrã, sem contas separadas.
2. **A automatização da noite.** "Se são as dez e o sensor não deteta movimento no corredor, apaga as luzes de toda a casa". Uma regra, toda a casa.
3. **O corte de internet.** A Jorge foi-se a internet e as aplicações das marcas deixaram de funcionar. O seu Home Assistant continuou a acender as luzes: funciona em local.

## 🛠️ Atividade guiada
Passo 1: Informa-te sobre os aparelhos onde vive o Home Assistant: procura na internet "Home Assistant Green" ou "Home Assistant em Raspberry Pi" e lê o que é.
Passo 2: Decide se já tens um computador velho ou se preferes uma caixa pronta a usar. Não compres ainda: só investiga.
Passo 3: Visita a página home-assistant.io e vê os vídeos de introdução que encontrares em espanhol. Anota duas ideias que te chamem a atenção.
Passo 4: Revê a lista de integrações do teu aparelho atual (se tiveres um): procura o nome da tua marca na web de integrações do Home Assistant e verifica que existe.
Passo 5: Escreve no teu papel uma automatização que farias com o Home Assistant e que não possas fazer com a tua aplicação atual.
Passo 6: Procura na internet um fórum ou grupo em espanhol de Home Assistant e lê um tópico de principiantes.
Passo 7: Decide e anota: o Home Assistant é para ti agora, mais adiante, ou preferes ficar com o simples? Não há resposta errada.

## ✍️ Exercícios de autoavaliação
1. O que é o Home Assistant? a) Um programa livre que reúne os aparelhos de casa sob um único controlo. b) Uma marca de lâmpadas. c) Um eletricista.
2. Onde funcionam os dados do Home Assistant? a) Na nuvem de uma empresa. b) Em local, num pequeno computador de casa. c) No telemóvel da vizinha.
3. O que é preciso para instalar o Home Assistant? a) Um computador pequeno que funcione sempre. b) Uma televisão. c) Internet de fibra obrigatória.
4. Pode-se usar com assistentes de voz? a) Não, nunca. b) Sim, com os comerciais e também com assistentes livres. c) Só em inglês.
5. O Home Assistant é para toda a gente? a) Sim, sempre. b) Não, conforme quantos aparelhos tenhas e a tua vontade de explorar. c) Só para técnicos titulados.

Respostas: 1-a, 2-b, 3-a, 4-b, 5-b.

## ⚖️ Dimensão ética
- Ter os dados em casa é mais privado, mas também é tua responsabilidade protegê-los: põe palavras-passe fortes e atualiza o sistema.
- O Home Assistant recolhe informação do teu dia a dia: decide tu quem vê essa informação e quem não.
- Se a tua casa automática gere portas ou alarmes, faz cópias de segurança e revê o sistema: a segurança física depende disso.
- Partilha o que aprendas com a comunidade, mas não subas dados pessoais nem fotos da tua casa para os fóruns.
- A tecnologia livre não significa livre de cuidado: continuas a ser responsável pelo que constróis.

## 🔓 Ferramentas abertas
| Ferramenta | Para que serve | Onde conseguir |
|---|---|---|
| Home Assistant | Reunir e automatizar toda a casa | home-assistant.io (livre) |
| Home Assistant Green | Uma caixa pronta a começar | home-assistant.io |
| Raspberry Pi | Um computador pequeno para o servidor | raspberrypi.com |
| OpenHAB | Outra plataforma aberta de domótica | openhab.org (livre) |

## 🧠 Resumo e ponte
O Home Assistant reúne todos os aparelhos sob um único painel, funciona em local com privacidade e sem depender de uma empresa, e automatiza com regras que cruzam marcas. Não é para toda a gente, mas é uma opção livre e potente. No próximo nível vamos mudar da casa para as mensagens: os bots de chat que respondem sozinhos.
