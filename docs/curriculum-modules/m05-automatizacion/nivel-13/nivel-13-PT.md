# Módulo 5: Automatização e Integração — Nível 13
## Idioma: PT · Dificuldade: Haste
## Tempo estimado: 2 horas

## 🎯 Objetivo do nível
- Entender que as automatizações podem falhar e que isso é normal.
- Conhecer os tipos de erros mais comuns num fluxo.
- Aprender a ler uma mensagem de erro sem assustar.
- Acrescentar passos que avisem quando algo falha.
- Montar um fluxo que continue ou se detenha conforme o erro.

## 📖 Vocabulário essencial
| Termo | Explicação em palavras simples |
|---|---|
| Erro | Uma falha: algo não saiu como esperávamos. |
| Mensagem de erro | O aviso que a ferramenta mostra para explicar a falha. |
| Provar de novo | Voltar a executar o passo que falhou. |
| Exceção | O caso especial que não cumpre o habitual e faz o fluxo falhar. |
| Registo | O histórico onde ficam anotados os passos e os erros. |
| Aviso de falha | Uma notificação que se envia quando algo se parte. |

## 📚 Lição principal
Hoje vamos falar de algo que ninguém menciona no início e que todos encontram logo no primeiro dia: os erros. As automatizações falham. Enganam-se, partem-se, detêm-se. E isso não é um problema nosso: faz parte da vida de toda a máquina. O importante não é que não falhe, mas saber o que fazer quando falha.

Pensemos na cozinha. Mesmo que sigamos a receita à risca, às vezes o pudim talha-se, o forno apaga-se ou falta um ingrediente. Um bom cozinheiro não deita fora os pratos: sabe por que aconteceu e arranja-o. Com as automatizações é igual. O erro é informação, não um castigo.

A primeira habilidade é ler a mensagem de erro. As ferramentas de integração guardam um histórico ou registo de cada execução: quem disparou o fluxo, que passos se fizeram e onde parou. Quando algo falha, a mensagem de erro costuma dizer a causa: "campo vazio", "aplicação não ligada", "dado incorreto". É como o diagnóstico do médico: para curar, primeiro é preciso saber o que dói.

Os erros mais comuns são poucos e aprendem-se rápido. Um: os campos vazios, quando chega um dado por preencher. Dois: as contas desligadas, quando a autorização expirou ou foi retirada. Três: os dados com formato diferente, quando esperávamos um número e chega um texto. Quatro: os limites de uso, quando o plano gratuito se esgota.

Para cada erro há uma solução. Se o campo está vazio, usamos uma condição (nível 10) para não continuar quando falta o dado. Se a conta se desligou, voltamos a ligar. Se o formato é diferente, revemos a folha ou a aplicação de origem. Se se esgotou o limite, esperamos pelo próximo mês ou usamos menos o fluxo.

Mas a verdadeira mestria está noutra coisa: em que o fluxo saiba avisar quando falha. Em vez de falhar em silêncio, a nossa automatização pode enviar-nos uma mensagem: "o passo de enviar correio falhou". Assim, mesmo que se parta, nós sabemos e arranjamo-lo. Uma falha que avisa é uma falha a meio.

As ferramentas permitem acrescentar um passo especial, às vezes chamado "controlo de erros" ou "gestão de erros", que se executa só quando algo falha. Nesse passo podemos enviar o aviso, guardar o dado que falhou ou deter o fluxo com calma. É como ter um detetor de fumo: não apaga o fogo, mas avisa a tempo.

Também podemos decidir se uma falha detém tudo ou se salta. Às vezes o melhor é deter: se o pagamento não é processado, que não continue. Outras vezes o melhor é continuar: se o envio da mensagem falha, que o resto siga e depois revemos. Cada fluxo escolhe a sua atitude conforme a importância de cada passo.

Convém rever o registo de vez em quando, como quem olha as faturas do mês. O registo conta-nos o que aconteceu na nossa automatização: quantas vezes se executou, quando falhou e porquê. Ler o registo é a forma de cuidar da automatização, de a manter saudável. É a higiene do ofício.

Um erro que se repete muito é sinal de que o fluxo está mal desenhado ou de que a origem dos dados mudou. Não o tapemos com remendos: olhemos a causa e arranjemo-la pela raiz. É como a gota de água: arranja-se o telhado, não se põe um balde todas as vezes.

Quando provas uma automatização e ela falha, respira: é o melhor momento para aprender. Cada falha que encontras e entendes torna-te mais dono do teu sistema. O medo dos erros desaparece quando os conhecemos. E conhecê-los é precisamente o que estamos a fazer hoje.

Ao terminar este nível saberás ler uma mensagem de erro, saber o que fazer com as falhas típicas e montar avisos que te contem quando algo se parte. A tua automatização já não é frágil: está vigiada e cuidada.

## 💡 Exemplos práticos
1. **A conta desligada.** O fluxo do clube deixou de funcionar porque o Google fez expirar a autorização. O aviso de falha chegou à coordenadora, que voltou a ligar em um minuto.
2. **A linha vazia.** Chegou um sócio sem correio. A condição do fluxo (nível 10) parou-o antes de enviar, e o registo guardou o caso para rever à mão.
3. **O limite de IA.** O plano gratuito da IA esgotou-se num mês. O fluxo avisou e continuou a trabalhar com o resumo manual até ao mês seguinte.

## 🛠️ Atividade guiada
Passo 1: Abre a tua ferramenta de integração e escolhe um cenário que já tenhas criado (por exemplo, o de incidências ou o de resumos).
Passo 2: Entra no registo ou histórico do cenário (costuma ser o separador "Histórico", "History" ou "Execuções"). Olha as últimas execuções.
Passo 3: Procura uma execução que tenha falhado ou faz falhar uma de propósito: desliga a conta do Telegram ou deixa um campo vazio na folha.
Passo 4: Lê a mensagem de erro. Escreve-a no teu papel e anota o que achas que significa. Verifica com a guia deste nível qual é o erro típico.
Passo 5: Corrige o erro: volta a ligar a conta ou completa o campo.
Passo 6: Acrescenta o controlo de erros: procura na configuração do cenário a opção "Controlo de erros", "Error handling" ou "Gestão de erros".
Passo 7: Configura o aviso: quando falhar, envia uma mensagem para o Telegram com o texto "Falhou o cenário [nome]: [mensagem de erro]".
Passo 8: Prova a falhar outra vez e verifica que chega o aviso.
Passo 9: Ativa o cenário e habitua-te a rever o registo uma vez por semana.

## ✍️ Exercícios de autoavaliação
1. É normal que uma automatização falhe? a) Não, se estiver bem feita nunca falha. b) Sim, falhar faz parte da vida de toda a máquina. c) Só as baratas.
2. O que fazemos primeiro perante um erro? a) Apagar o cenário. b) Ler a mensagem de erro e olhar o registo. c) Comprar outro computador.
3. Qual é um erro típico? a) Um campo vazio. b) Uma mudança de letra. c) A hora do pequeno-almoço.
4. Que faz o controlo de erros? a) Evita que falhe tudo. b) Executa-se quando algo falha, para avisar ou deter com calma. c) Apaga os erros do passado.
5. Para que serve rever o registo? a) Para cuidar da automatização e saber o que aconteceu. b) Para preencher o tempo. c) Para que fique bonito.

Respostas: 1-b, 2-b, 3-a, 4-b, 5-a.

## ⚖️ Dimensão ética
- Uma falha silenciosa é perigosa: se uma automatização que processa dados de pessoas falha sem avisar, perde-se informação. O aviso é responsabilidade.
- Se o fluxo falhar ao tratar dados pessoais, avisa de imediato e não o oculte: a transparência protege as pessoas.
- Não uses o controlo de erros para "tapar" um desenho mal feito: arranja a causa, não só o alerta.
- Os avisos de falha devem chegar à pessoa adequada, não ao correio de toda a gente.
- Perante um erro que afeta dinheiro ou saúde, detém a automatização e revê à mão antes de continuar.

## 🔓 Ferramentas abertas
| Ferramenta | Para que serve | Onde conseguir |
|---|---|---|
| Make (controlo de erros) | Avisar quando falha um passo | make.com |
| Zapier (filtros e retry) | Configurar tentativas e continuações | zapier.com |
| UptimeRobot | Vigiar que as tuas automatizações web respondam | uptimerobot.com (grátis) |
| Logseq ou notas | Levar um diário de erros e arranjos | logseq.com (grátis) |

## 🧠 Resumo e ponte
Os erros fazem parte do ofício: leem-se, entendem-se e arranjam-se. O controlo de erros avisa quando algo falha e o registo conta a história do fluxo. A tua automatização já está vigiada. No próximo nível fechamos a banda Haste: vamos montar uma automatização completa que use condições, variáveis, IA e controlo de erros juntos.
