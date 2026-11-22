/**
 * Plano grátis "Comece pelo Novo Testamento" — textos da página /plano.
 *
 * ESTE É O ARQUIVO PARA EDITAR OS TEXTOS. A página (src/pages/plano.astro)
 * só lê daqui. Para corrigir um título, passagem, contexto, ideia-chave,
 * pergunta ou aplicação, altere o dia correspondente abaixo.
 *
 * Fonte: guia oficial "Comece pelo Novo Testamento" (plano-7-dias.html),
 * com a estrutura do artifact interativo. Conteúdo ainda em revisão teológica.
 *
 * Regras: a passagem é só a referência (o guia não reproduz o texto bíblico);
 * não acrescentar aspas nem rótulo de versão por conta própria;
 * citações inseridas na revisão teológica mantêm aspas e rótulo exatamente como revisados.
 */

export interface DiaPlano {
  numero: number;
  titulo: string;
  passagem: string;
  /** Parágrafos do contexto. */
  contexto: string[];
  ideiaChave: string;
  /** Exatamente duas perguntas. */
  perguntas: [string, string];
  aplicacao: string;
  /** Nota opcional exibida ao fim do dia. */
  nota?: string;
}

export const PLANO_STORAGE_KEY = 'biblia-teologia:plano-nt:v1';

export const PLANO_EBOOK = {
  texto:
    'Se quiser ir além destas sete leituras, há um ebook complementar por R$19,90.',
  preco: 'R$19,90',
  botao: 'Conhecer o ebook',
  url: 'https://eliomarmarcolino22-s2417v.systeme.io/cdf65900',
};

export const PLANO_CAPA = {
  kicker: 'Guia gratuito · Eliomar Marcolino',
  tituloAntes: 'Comece pelo',
  tituloDestaque: 'Novo Testamento',
  lead: 'Um guia simples para quem quer entender a Bíblia começando por Jesus, sem pressa e sem complicação.',
  chips: ['7 dias', '10–15 min por dia', 'Marcos a Filipenses'],
  duracao: '10–15 minutos',
  checkbox: 'Li o texto de hoje na minha Bíblia',
};

export const PLANO_PROGRESSO = {
  inicioTitulo: 'Seu plano começa aqui',
  inicioTexto: 'Seu progresso fica salvo neste aparelho.',
  /** {n} = dias concluídos */
  andamentoTitulo: 'Você concluiu {n} de 7 leituras',
  andamentoTexto: 'Continue no seu ritmo. Seu progresso fica salvo neste aparelho.',
  fimTitulo: 'Plano concluído',
  fimTexto: 'Você concluiu as 7 leituras. Seu progresso fica salvo neste aparelho.',
  botaoInicio: 'Começar o Dia 1',
  /** {n} = próximo dia não concluído */
  botaoContinuar: 'Continuar o Dia {n}',
  botaoFim: 'Rever o Dia 1',
};

export const PLANO_COMO_USAR = [
  'Reserve de 10 a 15 minutos em um lugar tranquilo.',
  'Ore com simplicidade: “Senhor, ajuda-me a entender a tua Palavra e a vivê-la hoje.”',
  'Abra a passagem na sua Bíblia e leia com calma. Este guia não reproduz o texto sagrado — a Bíblia é o centro.',
  'Leia o contexto e a ideia-chave. Depois, responda às duas perguntas.',
  'Marque o quadro, pratique a aplicação do dia e anote o que Deus colocou no coração.',
];

export const PLANO_POR_QUE = [
  'Os Evangelhos — Mateus, Marcos, Lucas e João — apresentam Jesus: quem Ele é, o que fez e o que isso significa para nós. Começar por Jesus é o caminho mais seguro para entender o restante da Escritura.',
  'No sétimo dia, daremos um passo além, rumo a Filipenses — uma carta curta e prática para a vida cristã no cotidiano.',
];

export const PLANO_DIAS: DiaPlano[] = [
  {
    numero: 1,
    titulo: 'O começo das boas-novas',
    passagem: 'Marcos 1.1–15',
    contexto: [
      'Marcos escreveu o Evangelho mais curto e direto, provavelmente para cristãos em Roma que precisavam de ânimo. Ele não começa com uma genealogia longa: vai direto a Jesus, o Filho de Deus, e às boas-novas que Ele anuncia.',
    ],
    ideiaChave:
      'O Evangelho não começa com o que nós fazemos, mas com quem Jesus é. João Batista prepara o caminho, e Jesus proclama que o Reino de Deus está próximo. O convite é claro: arrepender-se e crer nas boas-novas.',
    perguntas: [
      'O que este texto revela sobre quem Jesus é?',
      'O que significaria, na sua vida hoje, arrepender-se e crer nas boas-novas?',
    ],
    aplicacao:
      'Antes de pegar o celular pela manhã, reserve um momento e diga a Deus: “Quero começar este dia com Jesus.”',
  },
  {
    numero: 2,
    titulo: 'Nascer de novo',
    passagem: 'João 3.1–21',
    contexto: [
      'João escreve para que o leitor creia que Jesus é o Cristo, o Filho de Deus, e tenha vida nEle. Nicodemos — um líder religioso respeitado — procura Jesus à noite e descobre que saber muita coisa sobre Deus não é o mesmo que nascer de novo.',
    ],
    ideiaChave:
      'Entrar no Reino de Deus não depende de esforço moral nem de status religioso. É um novo começo que o Espírito de Deus opera em nós, pela fé em Jesus. No centro do diálogo está o amor de Deus, que enviou o Filho para que todo aquele que nEle crê tenha vida.',
    perguntas: [
      'Por que Nicodemos, mesmo sendo mestre, precisava nascer de novo?',
      'Como você descreveria, com suas palavras, o amor de Deus revelado neste texto?',
    ],
    aplicacao:
      'Agradeça a Deus, por escrito ou em voz alta, pelo amor que enviou Jesus. Se ficou com alguma dúvida, anote-a e converse com um irmão ou líder de confiança.',
  },
  {
    numero: 3,
    titulo: 'Sal e luz',
    passagem: 'Mateus 5.1–16',
    contexto: [
      'Mateus apresenta Jesus como o Messias prometido. No início do Sermão do Monte, Jesus descreve o caráter de quem pertence ao Reino — não uma lista de privilégios, mas um jeito de viver que contrasta com o do mundo.',
    ],
    ideiaChave:
      'Deus chama de bem-aventurados os que o mundo muitas vezes ignora: os pobres de espírito, os que choram, os mansos, os que têm fome e sede de justiça, os misericordiosos. Quem segue Jesus é chamado a ser sal e luz: preservar o que é bom e viver de modo que outros vejam as boas obras e glorifiquem o Pai (Mt 5:16).',
    perguntas: [
      'Qual das bem-aventuranças mais fala à sua vida nesta semana?',
      'O que seria, de forma concreta, ser sal e luz no seu lar ou no seu trabalho?',
    ],
    aplicacao:
      'Escolha uma pessoa próxima e pratique hoje um gesto simples de misericórdia ou encorajamento — sem buscar elogio para você, para que Deus seja glorificado (Mt 5:16).',
  },
  {
    numero: 4,
    titulo: 'O Deus que busca o perdido',
    passagem: 'Lucas 15',
    contexto: [
      'Lucas destaca a compaixão de Jesus pelos que estavam à margem. Publicanos e pecadores se aproximavam para ouvi-lo, e os fariseus e escribas murmuravam: “Este recebe pecadores e come com eles” (Lc 15:1-2, ARC). Ele responde com três parábolas: a ovelha perdida, a moeda perdida e o pai com dois filhos.',
      'Leia o capítulo inteiro: são três histórias curtas que se complementam.',
    ],
    ideiaChave:
      'Deus não espera o perdido se achar sozinho. Ele busca, encontra e celebra. O pai corre ao encontro do filho que volta — e também sai para o filho mais velho, que estava perto de casa, mas com o coração longe do pai, como os que murmuravam contra Jesus (v. 2, 28-32).',
    perguntas: [
      'Com qual personagem você mais se identifica hoje: o que se afastou, o que ficou, ou quem observa de fora?',
      'O que estas parábolas revelam sobre o coração de Deus em relação a você?',
    ],
    aplicacao:
      'Ore hoje por alguém que esteja afastado — de você ou de Deus. Se for possível e sábio, dê um passo concreto de reconciliação.',
  },
  {
    numero: 5,
    titulo: 'O convite ao descanso',
    passagem: 'Mateus 11.28–30',
    contexto: [
      'Depois de confrontar cidades que viram seus milagres e não se arrependeram, Jesus faz um convite surpreendente. Não chama primeiro os fortes e autossuficientes, mas os cansados e sobrecarregados.',
    ],
    ideiaChave:
      'O descanso que Jesus oferece não é fuga da vida. É um jugo diferente: aprender com Aquele que é “manso e humilde de coração” (Mt 11:29, ARA). Seguir Jesus alivia o peso que nós — e uma religião sem graça — colocamos sobre os próprios ombros.',
    perguntas: [
      'Quais pesos você tem carregado sozinho nestes dias?',
      'O que mudaria se você trouxesse esses pesos a Jesus, em vez de tentar sustentá-los só com as próprias forças?',
    ],
    aplicacao:
      'Escreva em uma frase o que mais tem cansado você. Ore entregando isso a Jesus e peça o descanso que só Ele pode dar.',
  },
  {
    numero: 6,
    titulo: 'A videira e os ramos',
    passagem: 'João 15.1–11',
    contexto: [
      'Na última noite antes da cruz, Jesus conversa com os discípulos. Usa a imagem da videira — bem conhecida no Israel antigo — para explicar como a vida com Deus funciona: não por esforço isolado, mas por permanência nEle.',
    ],
    ideiaChave:
      'O fruto — amor, obediência, alegria — não nasce de quem tenta produzir sozinho. Nasce de quem permanece em Cristo, como o ramo na videira. Sem Ele, nada podemos fazer. Com Ele, a alegria se completa.',
    perguntas: [
      'O que tem ajudado você a permanecer em Jesus — e o que tem afastado?',
      'Que “fruto” você tem tentado produzir por conta própria, sem permanecer nEle?',
    ],
    aplicacao:
      'Marque amanhã um horário fixo — nem que sejam dez minutos — só para permanecer: ler um trecho curto, orar e ficar em silêncio diante de Deus.',
  },
  {
    numero: 7,
    titulo: 'Alegria e contentamento em Cristo',
    passagem: 'Filipenses 4.4–13',
    contexto: [
      'Paulo escreve aos cristãos de Filipos de uma prisão, não de um palco de sucesso. Mesmo assim, a carta transborda alegria. Neste trecho, ele ensina uma fé que se pratica na ansiedade, na necessidade e também na fartura.',
    ],
    ideiaChave:
      'A alegria cristã não depende das circunstâncias. A paz de Deus guarda o coração de quem ora com gratidão. E o contentamento de Paulo — “tudo posso naquele que me fortalece” (Fp 4:13, ARA) — não é autoajuda: é dependência de Cristo em qualquer situação.',
    perguntas: [
      'Em que área da sua vida a ansiedade tem falado mais alto do que a oração?',
      'O que significaria aprender o contentamento que Paulo descreve — tanto na falta quanto na fartura?',
    ],
    aplicacao:
      'Faça hoje o que Paulo ensina: apresente a Deus, com gratidão, aquilo que tem deixado você ansioso. Anote uma coisa pela qual você pode agradecer agora.',
    nota: 'Este texto é um gostinho de Filipenses — uma carta curta e poderosa para quem quer viver a fé no cotidiano.',
  },
];
