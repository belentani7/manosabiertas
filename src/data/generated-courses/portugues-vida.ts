export type GeneratedQuestion = {
  q: string;
  options: string[];
  correct: number;
  explain: string;
};

export type GeneratedLesson = {
  id: string;
  courseId: string;
  title: string;
  level: 0 | 1 | 2 | 3;
  summary: string;
  content: string;
  slides?: string[];
  audio: boolean;
  sources: { title: string; url: string; license: string }[];
  quiz: GeneratedQuestion[];
  xp: number;
};

export type GeneratedCourse = {
  id: string;
  title: string;
  description: string;
  level: 0 | 1 | 2 | 3;
  category: string;
  language: string;
  estimatedMinutes: number;
  objectives: string[];
  lessons: GeneratedLesson[];
};

export const portuguesVida: GeneratedCourse = {
  id: "portugues-vida",
  title: "Português para a vida (nivel 0)",
  description:
    "Frases simples e palavras úteis para o dia a dia em Portugal: saudar, comprar, viajar, ir ao médico e muito mais. Em português simples, com pequenas explicações em espanhol. / Frases y palabras útiles para el día a día en Portugal, en portugués sencillo con explicaciones en español.",
  level: 0,
  category: "Idiomas",
  language: "pt",
  estimatedMinutes: 120,
  objectives: [
    "Saudar e apresentar-se em português",
    "Fazer compras e usar os transportes",
    "Pedir ajuda em situações de saúde e de casa",
    "Conhecer os seus direitos básicos",
  ],
  lessons: [
    {
      id: "pt-01",
      courseId: "portugues-vida",
      title: "Cumprimentar e apresentar-se",
      level: 0,
      summary:
        "Olá, bom dia, o meu nome é... As primeiras palavras para começar.",
      content:
        "Olá e bom dia são as primeiras palavras. Diga Olá quando chegar e Adeus quando sair. Para se apresentar diga: O meu nome é... e Sou de... Pergunte: Como se chama? e De onde é? Diga Muito prazer quando conhece alguém. Aprenda: Bom dia de manhã, Boa tarde à tarde e Boa noite à noite. Pratique todos os dias com as pessoas. (En español: saludo y presentación básica. Repite cada frase en voz alta.)",
      audio: true,
      sources: [
        {
          title: "Instituto Camões: aprender português",
          url: "https://www.instituto-camoes.pt",
          license: "público",
        },
        {
          title: "ePortugal: portal oficial de serviços",
          url: "https://eportugal.gov.pt",
          license: "público",
        },
        {
          title: "ACM: integração de imigrantes",
          url: "https://www.acm.gov.pt",
          license: "público",
        },
      ],
      quiz: [
        {
          q: "A pessoa diz Bom dia. Que horas são?",
          options: [
            "De manhã",
            "À noite",
            "De madrugada",
            "A qualquer hora",
          ],
          correct: 0,
          explain:
            "Bom dia se diz de manhã. (En español: Bom dia se dice por la mañana.)",
        },
        {
          q: "Para dizer o seu nome diz...",
          options: [
            "O meu nome é...",
            "Adeus",
            "Obrigado",
            "Desculpe",
          ],
          correct: 0,
          explain:
            "O meu nome é... serve para se apresentar. (En español: O meu nome é... significa Mi nombre es...).",
        },
        {
          q: "Quando conhece uma pessoa, diz...",
          options: [
            "Muito prazer",
            "Tenho pressa",
            "Não falo",
            "Vá embora",
          ],
          correct: 0,
          explain:
            "Muito prazer é o que se diz quando conhece alguém. (En español: Mucho gusto.)",
        },
        {
          q: "Para saber o nome da outra pessoa pergunta...",
          options: [
            "Como se chama?",
            "Quanto custa?",
            "Onde é o banco?",
            "Que horas são?",
          ],
          correct: 0,
          explain:
            "Como se chama? serve para perguntar o nome. (En español: ¿Cómo te llamas?)",
        },
      ],
      xp: 20,
    },
    {
      id: "pt-02",
      courseId: "portugues-vida",
      title: "No supermercado",
      level: 0,
      summary:
        "Perguntar onde estão as coisas e pagar as compras.",
      content:
        "Quando chega ao supermercado, pegue um carrinho ou um cesto. Pergunte: Onde fica o pão? ou Onde está o leite? Para pagar, vá à caixa. O empregado diz o preço: São cinco euros. Diga: Quero pagar. Pode pagar com cartão ou dinheiro. Diga Obrigado e Adeus. (En español: frases para comprar y pagar en el supermercado.)",
      audio: true,
      sources: [
        {
          title: "Instituto Camões: aprender português",
          url: "https://www.instituto-camoes.pt",
          license: "público",
        },
        {
          title: "ePortugal: portal oficial de serviços",
          url: "https://eportugal.gov.pt",
          license: "público",
        },
        {
          title: "ACM: integração de imigrantes",
          url: "https://www.acm.gov.pt",
          license: "público",
        },
      ],
      quiz: [
        {
          q: "Para saber onde está o leite pergunta...",
          options: [
            "Onde está o leite?",
            "Quem é você?",
            "Onde fica Portugal?",
            "Quanto ganha?",
          ],
          correct: 0,
          explain:
            "Onde está o leite? serve para localizar as coisas. (En español: ¿Dónde está la leche?)",
        },
        {
          q: "O empregado diz São cinco euros. Isso é...",
          options: [
            "O preço da sua compra",
            "A sua morada",
            "O seu nome",
            "Um desconto",
          ],
          correct: 0,
          explain:
            "São cinco euros é o preço que tem de pagar. (En español: Son cinco euros.)",
        },
        {
          q: "Para pagar, pode usar...",
          options: [
            "Cartão ou dinheiro",
            "Só a voz",
            "Uma folha de papel",
            "Nada",
          ],
          correct: 0,
          explain:
            "No supermercado pode pagar com cartão ou dinheiro. (En español: tarjeta o efectivo.)",
        },
        {
          q: "Quando termina a compra, diz...",
          options: [
            "Obrigado e adeus",
            "Quero o meu dinheiro de volta",
            "Onde fica o banco?",
            "Não quero pagar",
          ],
          correct: 0,
          explain:
            "No final agradecemos: obrigado e adeus. (En español: gracias y adiós.)",
        },
      ],
      xp: 20,
    },
    {
      id: "pt-03",
      courseId: "portugues-vida",
      title: "Os transportes",
      level: 0,
      summary:
        "Autocarros, metro, bilhetes e pedir ajuda quando se perde.",
      content:
        "Os autocarros e o metro levam-no pela cidade. Para entrar, mostre o bilhete ou o passe. Pergunte: Este autocarro vai para o centro? e Quanto custa o bilhete? Desça na paragem certa. No metro, siga as setas para a linha que precisa. Se se perder, pergunte a um funcionário. Diga: Estou perdido, pode ajudar-me? (En español: transporte público, billetes y pedir ayuda.)",
      audio: true,
      sources: [
        {
          title: "Instituto Camões: aprender português",
          url: "https://www.instituto-camoes.pt",
          license: "público",
        },
        {
          title: "ePortugal: mobilidade e transportes",
          url: "https://eportugal.gov.pt",
          license: "público",
        },
        {
          title: "ACM: integração de imigrantes",
          url: "https://www.acm.gov.pt",
          license: "público",
        },
      ],
      quiz: [
        {
          q: "Para saber se o autocarro vai para o centro pergunta...",
          options: [
            "Este autocarro vai para o centro?",
            "Quem é o motorista?",
            "Onde é o supermercado?",
            "Que horas são?",
          ],
          correct: 0,
          explain:
            "Esta pergunta ajuda a saber o destino do autocarro. (En español: ¿Este autobús va al centro?)",
        },
        {
          q: "O passe ou bilhete serve para...",
          options: [
            "Entrar nos transportes",
            "Comprar pão",
            "Assinar documentos",
            "Pedir ajuda",
          ],
          correct: 0,
          explain:
            "O bilhete ou passe permite viajar. (En español: el billete o abono sirve para viajar.)",
        },
        {
          q: "Perdeu-se. O que diz?",
          options: [
            "Estou perdido, pode ajudar-me?",
            "Não falo com ninguém",
            "Adeus",
            "Muito prazer",
          ],
          correct: 0,
          explain:
            "Estou perdido, pode ajudar-me? é a frase para pedir ajuda. (En español: estoy perdido, ¿puede ayudarme?)",
        },
        {
          q: "No metro, para saber onde ir, siga...",
          options: [
            "As setas e os sinais da estação",
            "O cheiro da comida",
            "A cor das roupas",
            "A voz da rádio",
          ],
          correct: 0,
          explain:
            "As setas e os sinais mostram a direção certa. (En español: sigue las flechas y señales de la estación.)",
        },
      ],
      xp: 20,
    },
    {
      id: "pt-04",
      courseId: "portugues-vida",
      title: "Na farmácia",
      level: 0,
      summary:
        "Explicar o que sente e comprar medicamentos com segurança.",
      content:
        "A farmácia é o lugar para medicamentos e conselhos. Se se sente mal, explique o que sente. Diga: Estou doente ou Tenho dores de cabeça. O farmacêutico pergunta: Tem receita médica? Mostre a receita se tiver. Compre só o que o farmacêutico recomendar. Peça: Pode explicar como tomar este medicamento? (En español: explicar síntomas y comprar medicinas.)",
      audio: true,
      sources: [
        {
          title: "Instituto Camões: aprender português",
          url: "https://www.instituto-camoes.pt",
          license: "público",
        },
        {
          title: "ePortugal: saúde",
          url: "https://eportugal.gov.pt",
          license: "público",
        },
        {
          title: "ACM: integração de imigrantes",
          url: "https://www.acm.gov.pt",
          license: "público",
        },
      ],
      quiz: [
        {
          q: "Sente-se mal. Diz...",
          options: [
            "Estou doente",
            "Estou bem",
            "Quero um bilhete",
            "Adeus",
          ],
          correct: 0,
          explain:
            "Estou doente explica que não se sente bem. (En español: estoy enfermo.)",
        },
        {
          q: "O farmacêutico pergunta Tem receita?. Você deve...",
          options: [
            "Mostrar a receita se tiver",
            "Dizer que sim sempre",
            "Comprar sem ouvir",
            "Sair a correr",
          ],
          correct: 0,
          explain:
            "A receita é o papel do médico para comprar medicamentos. (En español: muestra la receta si la tienes.)",
        },
        {
          q: "Para entender como tomar o remédio, peça...",
          options: [
            "Pode explicar como tomar este medicamento?",
            "Quanto custa a casa?",
            "Onde fica a escola?",
            "Quem é o médico?",
          ],
          correct: 0,
          explain:
            "Esta frase pede explicação clara sobre o remédio. (En español: ¿puede explicar cómo tomar este medicamento?)",
        },
        {
          q: "A farmácia serve para...",
          options: [
            "Comprar medicamentos e pedir conselhos de saúde",
            "Comprar roupa",
            "Pagar impostos",
            "Comer",
          ],
          correct: 0,
          explain:
            "Na farmácia encontramos medicamentos e conselhos de saúde. (En español: en la farmacia se compran medicinas.)",
        },
      ],
      xp: 20,
    },
    {
      id: "pt-05",
      courseId: "portugues-vida",
      title: "A escola dos filhos",
      level: 0,
      summary:
        "Matricular as crianças e falar com a escola.",
      content:
        "Matricular os filhos na escola é um direito. Vá à escola mais próxima com os documentos. Pergunte: Onde posso matricular o meu filho? Leve a identificação e a morada. A escola explica os horários e os materiais. Se houver problemas, fale com o diretor. Diga: Preciso de ajuda para entender. As crianças aprendem português depressa na escola. (En español: matricular a los hijos y hablar con la escuela.)",
      audio: true,
      sources: [
        {
          title: "Instituto Camões: aprender português",
          url: "https://www.instituto-camoes.pt",
          license: "público",
        },
        {
          title: "ePortugal: educação",
          url: "https://eportugal.gov.pt",
          license: "público",
        },
        {
          title: "ACM: integração de imigrantes",
          url: "https://www.acm.gov.pt",
          license: "público",
        },
      ],
      quiz: [
        {
          q: "Para matricular o seu filho, vá...",
          options: [
            "À escola mais próxima com os documentos",
            "Ao supermercado",
            "À farmácia",
            "A uma festa",
          ],
          correct: 0,
          explain:
            "A matrícula faz-se na escola, com os documentos. (En español: la matrícula se hace en la escuela.)",
        },
        {
          q: "Se não entende algo na escola, diga...",
          options: [
            "Preciso de ajuda para entender",
            "Não quero saber",
            "Vou embora",
            "Obrigado",
          ],
          correct: 0,
          explain:
            "Esta frase pede ajuda para compreender. (En español: necesito ayuda para entender.)",
        },
        {
          q: "Com problemas na escola, fale com...",
          options: [
            "O diretor",
            "Um estranho na rua",
            "Ninguém",
            "O motorista do autocarro",
          ],
          correct: 0,
          explain:
            "O diretor da escola ajuda a resolver problemas. (En español: el director de la escuela.)",
        },
        {
          q: "Para a matrícula, leve...",
          options: [
            "A identificação e a morada",
            "Só dinheiro",
            "Uma carta de um amigo",
            "Nada",
          ],
          correct: 0,
          explain:
            "A escola pede identificação e morada. (En español: identificación y domicilio.)",
        },
      ],
      xp: 20,
    },
    {
      id: "pt-06",
      courseId: "portugues-vida",
      title: "O banco",
      level: 0,
      summary:
        "Abrir conta, receber o ordenado e proteger a sua senha.",
      content:
        "O banco guarda o seu dinheiro e recebe o seu ordenado. Para abrir conta, leve o passaporte e a morada. Pergunte: Como abro uma conta? Diga: Quero receber o meu ordenado aqui. Pergunte se há custos. Leia antes de assinar. Guarde os papéis do banco. Nunca dê a sua senha a ninguém. (En español: abrir cuenta y datos básicos de banca. Nunca des tu clave.)",
      audio: true,
      sources: [
        {
          title: "Instituto Camões: aprender português",
          url: "https://www.instituto-camoes.pt",
          license: "público",
        },
        {
          title: "ePortugal: finanças",
          url: "https://eportugal.gov.pt",
          license: "público",
        },
        {
          title: "ACM: integração de imigrantes",
          url: "https://www.acm.gov.pt",
          license: "público",
        },
      ],
      quiz: [
        {
          q: "Para abrir uma conta, leve...",
          options: [
            "O passaporte e a morada",
            "Um bolo",
            "Os brinquedos",
            "Só a senha",
          ],
          correct: 0,
          explain:
            "O banco pede passaporte e morada para abrir conta. (En español: pasaporte y domicilio.)",
        },
        {
          q: "A sua senha bancária deve ser...",
          options: [
            "Só sua. Nunca a dê a ninguém",
            "Para todos os amigos",
            "Escrita no cartão",
            "Dita ao telefone",
          ],
          correct: 0,
          explain:
            "A senha é pessoal e secreta. (En español: tu clave es personal y secreta. Nunca la des.)",
        },
        {
          q: "Antes de assinar um papel no banco, deve...",
          options: [
            "Ler o que está escrito",
            "Assinar depressa",
            "Não ler nunca",
            "Assinar várias vezes",
          ],
          correct: 0,
          explain:
            "Leia antes de assinar. Se não perceber, pergunte. (En español: lee antes de firmar.)",
        },
        {
          q: "Se alguém do banco pedir a sua senha por telefone...",
          options: [
            "Desconfie e não dê. É uma fraude",
            "Dê a senha",
            "Diga o código completo",
            "Escreva a senha num papel",
          ],
          correct: 0,
          explain:
            "Nenhum banco pede senhas por telefone. (En español: ningún banco pide claves por teléfono. Es un fraude.)",
        },
      ],
      xp: 20,
    },
    {
      id: "pt-07",
      courseId: "portugues-vida",
      title: "O médico e as urgências",
      level: 0,
      summary:
        "Marcar consulta, explicar sintomas e saber o número de emergência.",
      content:
        "Em caso de doença, vá ao centro de saúde. Precisa de marcação: Quero marcar uma consulta. Nas urgências, não precisa de marcação. Diga: É uma emergência. Explique o que sente: Tenho dor no peito ou Tenho febre. O médico pergunta: Que sintomas tem? Se não entender, peça: Pode repetir, por favor? (En español: salud, síntomas y urgencias. En emergencias llame al 112.)",
      audio: true,
      sources: [
        {
          title: "Instituto Camões: aprender português",
          url: "https://www.instituto-camoes.pt",
          license: "público",
        },
        {
          title: "ePortugal: saúde",
          url: "https://eportugal.gov.pt",
          license: "público",
        },
        {
          title: "ACM: integração de imigrantes",
          url: "https://www.acm.gov.pt",
          license: "público",
        },
      ],
      quiz: [
        {
          q: "Nas urgências, não precisa de...",
          options: [
            "Marcação",
            "Dinheiro",
            "Documentos",
            "Falar",
          ],
          correct: 0,
          explain:
            "Nas urgências não há marcação prévia. (En español: en urgencias no hay que pedir cita.)",
        },
        {
          q: "Para marcar consulta diga...",
          options: [
            "Quero marcar uma consulta",
            "Quero um café",
            "Onde é a escola?",
            "Adeus",
          ],
          correct: 0,
          explain:
            "Esta frase serve para pedir hora no médico. (En español: quiero pedir una cita.)",
        },
        {
          q: "Se não entender o médico, peça...",
          options: [
            "Pode repetir, por favor?",
            "Vá embora",
            "Não quero ouvir",
            "Bom dia",
          ],
          correct: 0,
          explain:
            "Pedir que repita é normal e ajuda a entender. (En español: ¿puede repetir, por favor?)",
        },
        {
          q: "O número de emergência em Portugal é...",
          options: ["112", "999", "100", "911"],
          correct: 0,
          explain:
            "Em Portugal e na Europa ligue 112. (En España también es el 112.)",
        },
      ],
      xp: 20,
    },
    {
      id: "pt-08",
      courseId: "portugues-vida",
      title: "Procurar casa",
      level: 0,
      summary:
        "Perguntas para alugar e sinais de fraude no arrendamento.",
      content:
        "Para procurar casa, veja anúncios em sites e lojas. Pergunte: Quanto é a renda? e Está mobilada? e Onde fica a casa? Antes de assinar, veja a casa com cuidado. Pergunte o que está incluído: água, luz, gás. Leia o contrato antes de assinar. Peça ajuda a uma pessoa de confiança. Desconfie se pedirem dinheiro antes de ver a casa. (En español: buscar vivienda, alquiler y señales de estafa.)",
      audio: true,
      sources: [
        {
          title: "Instituto Camões: aprender português",
          url: "https://www.instituto-camoes.pt",
          license: "público",
        },
        {
          title: "ePortugal: habitação",
          url: "https://eportugal.gov.pt",
          license: "público",
        },
        {
          title: "ACM: integração de imigrantes",
          url: "https://www.acm.gov.pt",
          license: "público",
        },
      ],
      quiz: [
        {
          q: "Antes de assinar o contrato da casa, deve...",
          options: [
            "Ler e ver a casa com cuidado",
            "Assinar depressa",
            "Pagar sem ver",
            "Não perguntar nada",
          ],
          correct: 0,
          explain:
            "Veja e leia tudo antes de assinar. (En español: mira la casa y lee el contrato antes de firmar.)",
        },
        {
          q: "Para saber o preço pergunta...",
          options: [
            "Quanto é a renda?",
            "Quem é o dono?",
            "Que horas são?",
            "Onde é o banco?",
          ],
          correct: 0,
          explain:
            "Quanto é a renda? pergunta o preço do aluguel. (En español: ¿cuánto es el alquiler?)",
        },
        {
          q: "Se pedirem dinheiro antes de ver a casa...",
          options: [
            "Desconfie. Pode ser uma fraude",
            "Pague já",
            "Envie por mensagem",
            "Dê a senha",
          ],
          correct: 0,
          explain:
            "Pagamentos antes de ver a casa são um sinal de fraude. (En español: desconfía si piden dinero antes de ver la casa.)",
        },
        {
          q: "No contrato deve saber o que está incluído: ...",
          options: [
            "Água, luz e gás",
            "Só a mobília",
            "Nada",
            "A comida",
          ],
          correct: 0,
          explain:
            "Pergunte sempre o que está incluído na renda. (En español: pregunta qué incluye el alquiler.)",
        },
      ],
      xp: 20,
    },
    {
      id: "pt-09",
      courseId: "portugues-vida",
      title: "Procurar emprego",
      level: 0,
      summary:
        "Currículo, ofertas, o IEFP e como evitar fraudes de emprego.",
      content:
        "Para encontrar trabalho, prepare o seu currículo. Diga o seu nome, formação e experiência. Procure ofertas em sites de emprego e no IEFP. O IEFP é o serviço público de emprego em Portugal. Inscreva-se e marque uma reunião. Nas entrevistas, seja pontual e simples. Diga: Tenho vontade de aprender. Não pague para conseguir trabalho. Ninguém sério cobra por um emprego. (En español: buscar empleo y el IEFP. Nunca pagues por un trabajo.)",
      audio: true,
      sources: [
        {
          title: "IEFP: serviço público de emprego",
          url: "https://www.iefp.pt",
          license: "público",
        },
        {
          title: "Instituto Camões: aprender português",
          url: "https://www.instituto-camoes.pt",
          license: "público",
        },
        {
          title: "AIMA: apoio a imigrantes",
          url: "https://www.aima.gov.pt",
          license: "público",
        },
      ],
      quiz: [
        {
          q: "O serviço público de emprego em Portugal é...",
          options: [
            "O IEFP",
            "O supermercado",
            "A farmácia",
            "O banco",
          ],
          correct: 0,
          explain:
            "O IEFP ajuda a encontrar trabalho em Portugal. (En español: el IEFP es el servicio público de empleo.)",
        },
        {
          q: "Se alguém pedir dinheiro por um emprego...",
          options: [
            "Não pague. É uma fraude",
            "Pague depressa",
            "Dê o dinheiro em segredo",
            "É normal",
          ],
          correct: 0,
          explain:
            "Ninguém cobra por um emprego. É uma fraude. (En español: nadie cobra por un trabajo. Es un fraude.)",
        },
        {
          q: "No currículo deve dizer...",
          options: [
            "Nome, formação e experiência",
            "A cor do carro",
            "O que come",
            "Onde dorme",
          ],
          correct: 0,
          explain:
            "O currículo mostra o seu nome, formação e experiência. (En español: el currículum lleva nombre, formación y experiencia.)",
        },
        {
          q: "Numa entrevista, deve ser...",
          options: [
            "Pontual e simples",
            "Atrasado",
            "Rude",
            "Em silêncio sempre",
          ],
          correct: 0,
          explain:
            "Ser pontual e claro causa boa impressão. (En español: sé puntual y claro en la entrevista.)",
        },
      ],
      xp: 20,
    },
    {
      id: "pt-10",
      courseId: "portugues-vida",
      title: "Os seus direitos básicos",
      level: 0,
      summary:
        "Saúde, escola, igualdade e onde pedir ajuda.",
      content:
        "Em Portugal, todos têm direitos. Você tem direito a saúde, escola, trabalho e igualdade. Ninguém pode discriminar por origem, cor ou religião. Se sofrer discriminação, peça ajuda. Pode contactar a ACM, a comissão contra a discriminação. A AIMA ajuda imigrantes com os seus processos. Peça informação no ePortugal, o portal oficial. Você tem o direito de saber e de perguntar. (En español: tus derechos básicos como inmigrante en Portugal.)",
      audio: true,
      sources: [
        {
          title: "ACM: igualdade e não discriminação",
          url: "https://www.acm.gov.pt",
          license: "público",
        },
        {
          title: "AIMA: apoio a imigrantes",
          url: "https://www.aima.gov.pt",
          license: "público",
        },
        {
          title: "ePortugal: portal oficial de serviços",
          url: "https://eportugal.gov.pt",
          license: "público",
        },
        {
          title: "Instituto Camões: aprender português",
          url: "https://www.instituto-camoes.pt",
          license: "público",
        },
      ],
      quiz: [
        {
          q: "Em Portugal, todos têm direito a...",
          options: [
            "Saúde, escola, trabalho e igualdade",
            "Só a pagar impostos",
            "Nada",
            "Só a sair",
          ],
          correct: 0,
          explain:
            "Saúde, escola, trabalho e igualdade são direitos de todos. (En español: salud, escuela, trabajo e igualdad.)",
        },
        {
          q: "Se sofrer discriminação, pode pedir ajuda a...",
          options: [
            "A ACM",
            "O motorista",
            "O vendedor",
            "Ninguém",
          ],
          correct: 0,
          explain:
            "A ACM combate a discriminação e pode ajudar. (En español: la ACM ayuda contra la discriminación.)",
        },
        {
          q: "A AIMA ajuda imigrantes com...",
          options: [
            "Os seus processos",
            "Receitas de comida",
            "Jogos",
            "Roupas",
          ],
          correct: 0,
          explain:
            "A AIMA acompanha os processos de imigração. (En español: la AIMA ayuda con los trámites de inmigración.)",
        },
        {
          q: "O portal oficial de informação é...",
          options: [
            "O ePortugal",
            "O instagram",
            "Um site de jogos",
            "O correio",
          ],
          correct: 0,
          explain:
            "O ePortugal é o portal oficial de serviços. (En español: ePortugal es el portal oficial de servicios.)",
        },
      ],
      xp: 20,
    },
  ],
};

export default portuguesVida;
