import {Conversa} from './conversa';
import {EscopoMensagem} from './escopo-mensagem';

export const CONVERSAS: Conversa[] = [
  { id: 1,
    nome: "Homer",
    status: "Online",
    foto: "../../../assets/img/homer.jpg",
    mensagens: [
      new EscopoMensagem(true, "Pai", "09:42"),
      new EscopoMensagem(true, "Socorro", "09:42"),
      new EscopoMensagem(false, "Rosquinhas?", "09:45"),
      new EscopoMensagem(false, "Avisa sua mãe que temos que comprar mais sorvete napolitano", "10:00"),
      new EscopoMensagem(false, "Os de chocolates acabaram", "10:01"),
      new EscopoMensagem(true, "Não é mais fácil comprar só os de chocolate homer?", "10:05"),
      new EscopoMensagem(false, "Faz o que estou mandando logo garoto", "10:07"),
      new EscopoMensagem(true, "Ta bom homer 😒😒", "10:10"),
      new EscopoMensagem(false, "Não me chama de homer", "10:12"),
      new EscopoMensagem(true, "Ta bom homer 😒😒", "12:18"),
      new EscopoMensagem(false, " arghhhhh 😠", "12:27"),
    ]

  },
  { id: 2,
    nome: "Mãe",
    status: "Online",
    foto: "../../../assets/img/marge.jpg",
    mensagens: [
      new EscopoMensagem(false, "Bart", "07:53"),
      new EscopoMensagem(false, "O Diretor Skinner ligou de novo", "07:57"),
      new EscopoMensagem(true, "O que ele disse?", "07:57"),
      new EscopoMensagem(false, "Que você alagou toda a quadra com a água da privada", "08:15"),
      new EscopoMensagem(true, "É mentira mãe, vc acha que eu faria isso?", "08:15"),
      new EscopoMensagem(false, "😐😐😓", "08:15"),
      new EscopoMensagem(true, "😇😇😇😇", "08:15"),
      new EscopoMensagem(false, "Não faça novamente bart, se não o Skinner vai acabar te expulsando", "08:27"),
      new EscopoMensagem(true, "Pode deixar", "08:27"),
      new EscopoMensagem(true, "👌😁😁", "12:18"),
    ]

  },
  { id: 3,
    nome: "Lisa",
    status: "Online",
    foto: "../../../assets/img/lisa.jpg",
    mensagens: [
      new EscopoMensagem(false, "O que você fez com meu Saxofone?", "07:53"),
      new EscopoMensagem(true, "Nada ué", "07:57"),
      new EscopoMensagem(true, "🤣🤣🤣🤣", "07:57"),
      new EscopoMensagem(false, "E com a cabeça das minhas bonecas?", "08:15"),
      new EscopoMensagem(true, "Não faço ideia do que você esteja falando", "08:15"),
      new EscopoMensagem(false, "Tem certeza?", "08:15"),
      new EscopoMensagem(true, "Claro 😆😆", "08:15"),
      new EscopoMensagem(false, "Vou falar com a mamaãe", "08:27"),
      new EscopoMensagem(true, "Pode falar otária", "08:27"),
      new EscopoMensagem(true, "Mas talvez o cachorro esteja brincando com elas", "12:18"),
      new EscopoMensagem(true, "🏃🏼🏃🏼🏃🏼🏃🏼", "12:18"),
    ]

  },
  { id: 4,
    nome: "Milhouse",
    status: "Online",
    foto: "../../../assets/img/milhouse.jpg",
    mensagens: [
      new EscopoMensagem(false, "Barttttt", "07:53"),
      new EscopoMensagem(true, "???", "07:57"),
      new EscopoMensagem(false, "BArttttttt", "07:57"),
      new EscopoMensagem(true, "Oq foi Milhouse?", "08:15"),
      new EscopoMensagem(false, "Vem para loja de quadrinhos agora!!", "08:15"),
      new EscopoMensagem(false, "É urgentee", "08:15"),
      new EscopoMensagem(true, "Oq aconteceu?", "08:15"),
      new EscopoMensagem(true, "Sua Bronquite atacou de novo?", "08:27"),
      new EscopoMensagem(false, "Saíram as revistas novas do Homem Radioativo", "08:27"),
      new EscopoMensagem(true, "😧😧😧😧", "12:18"),
      new EscopoMensagem(false, "Oq foi?", "12:18"),
      new EscopoMensagem(true, "Preciso de dinheiro urgente!!", "12:18"),
      new EscopoMensagem(true, "Vou pedir pro homer!!", "12:18"),
    ]

  },
  { id: 5,
    nome: "Ned Flanders",
    status: "Online",
    foto: "../../../assets/img/ned.jpg",
    mensagens: [
      new EscopoMensagem(false, "Oi meu filho", "07:53"),
      new EscopoMensagem(false, "Ja orou hoje?", "07:57"),
      new EscopoMensagem(false, "A caso queira ir à igreja eu posso te levar", "07:57"),
    ]

  },
  { id: 6,
    nome: "Professora Edna",
    status: "Online",
    foto: "../../../assets/img/edna.jpg",
    mensagens: [
      new EscopoMensagem(true, "Professoraaaa", "07:53"),
      new EscopoMensagem(true, "Meu cachorro comeu meu dever de casa", "07:57"),
      new EscopoMensagem(false, "De novo essa história bart?", "07:57"),
      new EscopoMensagem(true, "Mas agora é verdade!", "08:15"),
      new EscopoMensagem(false, "Ahammm", "08:15"),
      new EscopoMensagem(true, "É sériooo 😤😤", "08:15"),
      new EscopoMensagem(false, "Não quero saber de história Bart", "08:15"),
    ]

  },
  { id: 7,
    nome: "Nelson",
    status: "Online",
    foto: "../../../assets/img/nelson.jpg",
    mensagens: [
      new EscopoMensagem(false, "HAHA", "07:53"),
      new EscopoMensagem(true, "??", "07:57"),
      new EscopoMensagem(false, "HAHA", "07:57"),
      new EscopoMensagem(true, "Oq foi Nelson?", "08:15"),
      new EscopoMensagem(false, "HAHA", "08:15"),
    ]

  },
  { id: 8,
    nome: "Skinner",
    status: "Online",
    foto: "../../../assets/img/skinner.jpg",
    mensagens: [
      new EscopoMensagem(false, "Bart", "07:53"),
      new EscopoMensagem(true, "🥱", "07:57"),
      new EscopoMensagem(false, "Agora é sério", "07:57"),
      new EscopoMensagem(false, "Tem crianças na quadra chorando", "08:15"),
      new EscopoMensagem(true, "🥱", "08:15"),
      new EscopoMensagem(false, "Terei que ligar para os seus pais", "08:15"),
      new EscopoMensagem(true, "🥱", "08:15"),
      new EscopoMensagem(false, "Você não leva nada a sério garoto", "08:27"),
      new EscopoMensagem(true, "🥱", "08:27"),
      new EscopoMensagem(false, "Já chega", "12:18"),
    ]

  },
  { id: 9,
    nome: "Ralph",
    status: "Online",
    foto: "../../../assets/img/ralph.jpg",
    mensagens: [
      new EscopoMensagem(false, "Oi Bart", "07:53"),
      new EscopoMensagem(true, "Oq vc quer Ralph?", "07:57"),
      new EscopoMensagem(false, "Oi Bart", "07:57"),
      new EscopoMensagem(true, "??????", "08:15"),
      new EscopoMensagem(false, "Eu to dentro do Computador", "08:15"),
      new EscopoMensagem(false, "Ta me vendo?", "08:15"),
      new EscopoMensagem(true, "🙄", "08:15"),
      new EscopoMensagem(false, "Como vc fez isso?", "08:27"),
      new EscopoMensagem(false, "🤓", "08:27"),
      new EscopoMensagem(false, "Eu aprendi a enviar figurinhaaaaaaa", "12:18"),
    ]

  },
  { id: 10,
    nome: "Krusty",
    status: "Online",
    foto: "../../../assets/img/krusty.jpg",
    mensagens: [
      new EscopoMensagem(true, "Krustyyy", "07:53"),
      new EscopoMensagem(true, "Eu quero um ingresso pro seu show", "07:57"),
      new EscopoMensagem(true, "Sou seu maior fã", "07:57"),
      new EscopoMensagem(true, "Me respondeeee", "08:15"),
      new EscopoMensagem(true, "Krustyy", "08:15"),
      new EscopoMensagem(true, "Eiiiii", "08:15"),
      new EscopoMensagem(true, "Owwwww", "08:15"),
    ]

  },
  { id: 11,
    nome: "Lenny",
    status: "Online",
    foto: "../../../assets/img/lenny.jpg",
    mensagens: [
      new EscopoMensagem(false, "Bart", "07:53"),
      new EscopoMensagem(false, "Seu pai não vem pro Moe hoje?", "07:57"),
      new EscopoMensagem(true, "Como vou saber?", "07:57"),
      new EscopoMensagem(false, "Ele precisa estar aqui", "07:57"),
      new EscopoMensagem(true, "Mas ainda são 8 da manhã", "08:15"),
      new EscopoMensagem(true, "Ele vai trabalhar", "08:15"),
      new EscopoMensagem(false, "Hoje é dia de bar", "08:15"),
    ]

  },
  { id: 12,
    nome: "Martin",
    status: "Online",
    foto: "../../../assets/img/martin.jpg",
    mensagens: [
      new EscopoMensagem(false, "Bart me ajuda a ser popular?", "07:53"),
      new EscopoMensagem(true, "Não, to tranquilo", "07:57"),
      new EscopoMensagem(false, "Por favorrr", "07:57"),
      new EscopoMensagem(false, "Eu te pago 20 reais por semana", "08:15"),
      new EscopoMensagem(true, "Não, valeu", "08:15"),
      new EscopoMensagem(false, "Eu faço seus trabalhos de casa também", "08:15"),
      new EscopoMensagem(true, "Hmmm, vou pensarrr", "08:15"),
      new EscopoMensagem(false, "Pensa rápido, eu preciso ser popular", "08:27"),
      new EscopoMensagem(true, "Eu não vou fazer nada e você faz tudo", "08:27"),
      new EscopoMensagem(true, "Ai eu te ajudo", "12:18"),
      new EscopoMensagem(false, "Fechado!!!", "12:18"),
    ]

  },
  { id: 13,
    nome: "Tia Patty",
    status: "Online",
    foto: "../../../assets/img/patty.jpg",
    mensagens: [
      new EscopoMensagem(false, "Bart", "07:53"),
      new EscopoMensagem(true, "Oi tia?", "07:57"),
      new EscopoMensagem(false, "Sua mãe ja largou o idiota do seu pai?", "07:57"),
      new EscopoMensagem(true, "😒", "08:15"),
      new EscopoMensagem(false, "Eu não sei porquê ela ainda suporta ele", "08:15"),
      new EscopoMensagem(true, "Oq você quer tia?", "08:15"),
      new EscopoMensagem(false, "Só queria saber isso mesmo", "08:15"),
    ]

  },
  { id: 14,
    nome: "Apu",
    status: "Online",
    foto: "../../../assets/img/apu.jpg",
    mensagens: [
      new EscopoMensagem(false, "Temos promocoes novas aqui na lojinha", "07:55"),
      new EscopoMensagem(true, "Não valeu", "07:59"),
      new EscopoMensagem(false, "Hot-Dog pela metade do preço", "08:10"),
      new EscopoMensagem(true, "Ualll 🤩🤩", "08:15"),
      new EscopoMensagem(false, "Mas não me responsabilizo por morte instantania", "08:17"),
      new EscopoMensagem(true, "😒😒", "08:20"),
    ]

  },
  { id: 15,
    nome: "Kearney",
    status: "Online",
    foto: "../../../assets/img/kearney.jpg",
    mensagens: [
      new EscopoMensagem(false, "Bora bater em uns nerdsss", "07:53"),
      new EscopoMensagem(true, "Não consigo agora", "07:57"),
      new EscopoMensagem(false, "Então você quer apanhar junto?", "07:57"),
      new EscopoMensagem(true, "😬😬😬", "08:15"),
    ]

  }
];
