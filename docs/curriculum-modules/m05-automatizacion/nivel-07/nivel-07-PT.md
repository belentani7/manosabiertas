# Módulo 5: Automatização e Integração — Nível 07
## Idioma: PT · Dificuldade: Raiz
## Tempo estimado: 2 horas

## 🎯 Objetivo do nível
- Entender o que é uma notificação automática e para que serve.
- Criar avisos que chegam sozinhos ao telemóvel ou ao correio quando algo acontece.
- Escolher que eventos merecem um aviso e quais não.
- Configurar um aviso de um dado importante (um pagamento, uma data, uma resposta).
- Evitar a sobrecarga de avisos que cansam e não ajudam.

## 📖 Vocabulário essencial
| Termo | Explicação em palavras simples |
|---|---|
| Notificação | O aviso que aparece no ecrã do telemóvel ou no correio. |
| Aviso automático | Uma mensagem que se envia sozinha quando algo ocorre. |
| Evento | O sucesso que põe em marcha o aviso: um pagamento, uma mensagem, uma data. |
| Sobrecarga de avisos | Demasiados avisos que chegam ao mesmo tempo e agobiam. |
| Canal | O caminho por onde chega o aviso: telemóvel, correio, mensagens. |
| Importante | O que de verdade merece a nossa atenção. |

## 📚 Lição principal
No nível anterior ligámos duas aplicações e vimos como trabalham juntas. Hoje focamo-nos numa das coisas mais úteis que se podem automatizar: as notificações. Um aviso automático é uma mensagem que chega sozinha quando algo importante acontece, sem que tenhamos de estar a olhar para o ecrã.

Pensemos na panela de pressão da cozinha. Nós não estamos o tempo todo a ver se já está pronta: a panela avisa com um apito quando atinge a pressão. Esse apito é uma notificação. A automatização do aviso deixa-nos fazer outras coisas enquanto a panela trabalha.

No mundo digital é igual. Há centenas de momentos que nos interessa conhecer: quando chega um correio importante, quando alguém preenche um formulário, quando se faz um pagamento, quando se cumpre uma data. Se tivéssemos de estar a olhar o tempo todo, não faríamos outra coisa. O aviso automático olha por nós.

A graça está em escolher bem o que nos avisa. Nem todos os eventos merecem um apito. O importante, o urgente ou o que custa dinheiro merece aviso. O que é ruído, não. Uma boa notificação é como a chamada de um amigo que só liga quando importa, não o que liga por qualquer coisa.

Quando montamos uma notificação na nossa ferramenta de integração, seguimos o mesmo esquema de sempre. O disparador é o evento que queremos vigiar: "novo correio desta pessoa", "linha nova nesta folha", "pagamento realizado". A ação é o envio do aviso: uma mensagem para o telemóvel, um correio, uma notificação.

Que canal escolher? Depende do momento. Para algo urgente, uma mensagem para o telemóvel (Telegram ou WhatsApp). Para algo que pode esperar, um correio. Para um lembrete de calendário, a própria aplicação do calendário. Escolher o canal é como escolher entre ligar por telefone ou enviar uma carta: conforme a importância, o caminho.

Muitas aplicações já avisam sozinhas sem necessidade da ferramenta de integração. O banco avisa de cada movimento, o correio de cada mensagem nova. O que a integração traz é avisar de coisas que nenhuma aplicação vigia: cruzar dados, unir duas aplicações, avisar de condições concretas.

Um exemplo: queremos que nos avisem só se a temperatura do frigorífico subir acima de certo nível, ou só se chegar um correio do banco com a palavra "recibo". Isso é uma condição. Vamos aprender condições a fundo na banda Haste; hoje vemos como encaixa: a notificação pode depender de uma condição escolhida.

A sobrecarga de avisos é um perigo real. Se ativarmos quinze notificações, o telemóvel toca o dia todo e acabamos por ignorá-las todas, até as importantes. É como o pastor que grita "lobo!" tantas vezes que ninguém lhe liga. A regra de ouro: poucos avisos e bons.

Sempre que ativarmos um aviso, perguntemo-nos: "de verdade preciso de saber isto no momento em que acontece?". Se a resposta for duvidosa, melhor não o ativar. Podemos começar sem aviso e acrescentá-lo mais tarde se de facto sentirmos falta. É mais fácil acrescentar do que tirar o ruído.

Também convém pôr apagões: há momentos do dia em que não queremos avisos. O telemóvel já tem modos de silêncio (nível 4) e as ferramentas permitem que os avisos só se enviem em certas horas. Uma notificação que chega de madrugada não é uma ajuda, é um incómodo.

Ao terminar este nível saberás montar avisos que te contam só o importante e, sobretudo, saberás dizer "isto não merece um aviso". Esse critério vale mais do que toda a tecnologia junta.

## 💡 Exemplos práticos
1. **O pagamento da renda.** Quando a folha do clube regista o pagamento de um sócio, o tesoureiro recebe uma mensagem no telemóvel: "Pagamento recebido de [nome]".
2. **A resposta do formulário.** Quando alguém pede informação na web da associação, chega um aviso ao correio da coordenadora em menos de um minuto.
3. **O aviso de manutenção.** A ferramenta vigia a folha de incidências e avisa o encarregado quando alguém escreve "urgente" na coluna de estado.

## 🛠️ Atividade guiada
Passo 1: Abre a tua ferramenta de integração (Make ou Zapier) e entra na tua conta.
Passo 2: Cria um cenário novo e escolhe o disparador. Por exemplo: no Google Sheets, o evento "Observar linhas" com a tua folha de pagamentos do clube.
Passo 3: Acrescenta a ação: procura a aplicação de mensagens (Telegram) e escolhe "Enviar mensagem".
Passo 4: Liga a tua conta de Telegram se não estiver ligada (vai-te pedir um código breve).
Passo 5: Na mensagem, escreve: "Pagamento recebido de [campo nome] por [campo valor]". A ferramenta oferece-te os campos da folha para inserir.
Passo 6: Carrega em "Testar". A ferramenta enviará uma mensagem de teste para o teu Telegram. Abre-a e olha-a.
Passo 7: Se quiseres que só avise quando o valor for maior do que zero, procura a opção "Filtro" ou "Condição" e põe essa regra (ou espera pelo nível 10).
Passo 8: Ativa o cenário. Acrescenta uma linha de teste à folha e verifica que chega a mensagem. Apaga depois a linha de teste.
Passo 9: Escreve no teu papel uma lista de três eventos que queres vigiar e decide, para cada um, se merece aviso ou não.

## ✍️ Exercícios de autoavaliação
1. O que é uma notificação automática? a) Uma mensagem que se envia sozinha quando algo ocorre. b) Uma mensagem que escrevemos à mão. c) Um tipo de letra.
2. Que eventos merecem um aviso? a) Todos, quanto mais melhor. b) Só o importante, o urgente ou o que custa dinheiro. c) Nenhum.
3. Que canal é melhor para algo urgente? a) Uma carta em papel. b) Uma mensagem para o telemóvel. c) Apontar na agenda.
4. O que é a sobrecarga de avisos? a) Demasiados avisos que chegam e se ignoram todos. b) Um aviso que chega tarde. c) Um aviso em inglês.
5. Que regra de ouro aplicamos às notificações? a) Quanto mais avisos, melhor. b) Poucos avisos e bons. c) Nenhum aviso nunca.

Respostas: 1-a, 2-b, 3-b, 4-a, 5-b.

## ⚖️ Dimensão ética
- Não envies avisos automáticos a outras pessoas sem o seu consentimento: cada aviso que chega a um telemóvel alheio interrompe.
- Os avisos sobre dinheiro ou saúde devem ser discretos: não escrevas dados sensíveis na própria mensagem.
- Respeita os horários de descanso dos outros: programa os avisos para horas razoáveis.
- Tira os avisos que já não servem: um aviso antigo é ruído e confusão.
- Tu és dono da tua atenção: decide tu o que te avisa, não as aplicações.

## 🔓 Ferramentas abertas
| Ferramenta | Para que serve | Onde conseguir |
|---|---|---|
| Telegram | Receber avisos no telemóvel | telegram.org (grátis) |
| Pushbullet | Avisos do computador para o telemóvel | pushbullet.com (grátis) |
| ntfy | Avisos próprios, sem depender de outras apps | ntfy.sh (grátis e livre) |
| Google Alerts | Aviso quando aparece algo novo na internet | google.com/alerts (grátis) |

## 🧠 Resumo e ponte
As notificações automáticas avisam-nos só do importante, sem que estejamos a olhar. Escolhemos o evento, o canal e o momento, e evitamos a sobrecarga de avisos. Já ligámos aplicações e montámos avisos. No próximo nível vamos aprender a usar modelos de automatização: receitas já feitas que podemos copiar e adaptar em minutos.
