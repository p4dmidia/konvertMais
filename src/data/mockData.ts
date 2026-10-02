import { DemoNiche } from '../types';

export const FAQ_ITEMS = [
  {
    question: 'A IA vai falar besteira com meu cliente?',
    answer:
      'Ela segue o roteiro do seu negócio e tem travas: não promete o que você não oferece, não inventa preço e passa para um humano quando não sabe.',
  },
  {
    question: 'Funciona no meu número atual?',
    answer: 'Sim, no WhatsApp comum ou na API oficial.',
  },
  {
    question: 'Preciso configurar alguma coisa?',
    answer: 'Não. Nós implantamos e testamos.',
  },
  {
    question: 'E se eu quiser falar com o cliente?',
    answer: 'Você assume a conversa a qualquer momento pelo painel.',
  },
  {
    question: 'Tem fidelidade?',
    answer: 'Permanência mínima de 3 meses.',
  },
  {
    question: 'Quanto custa?',
    answer:
      'R$ 997/mês só a ferramenta, ou R$ 1.497/mês com gestão de anúncios. O plano certo sai do diagnóstico.',
  },
];

export const DEMO_NICHES: DemoNiche[] = [
  {
    id: 'consorcio',
    name: 'Consórcios & Investimentos',
    category: 'Consórcio Imobiliário e Auto',
    avatarLetter: 'KC',
    quickReplies: [
      'Quero uma cota de R$ 200 mil para imóvel',
      'Qual o valor da parcela mensal?',
      'Vocês aceitam lance embutido?',
    ],
    messages: [
      {
        id: '1',
        sender: 'client',
        text: 'Boa noite, vi o anúncio do consórcio imobiliário. Qual o valor da parcela pra uma carta de 250 mil?',
        time: '22:15',
        isAudio: true,
        audioDuration: '0:12',
      },
      {
        id: '2',
        sender: 'system',
        text: 'Respondido em 1 minuto pelo Konvert Mais',
        time: '22:16',
      },
      {
        id: '3',
        sender: 'agent',
        text: 'Boa noite! Tudo bem? Aqui é o consultor virtual da Nacional Consórcios 😊 Para carta de R$ 250 mil, temos opções a partir de R$ 1.390/mês. Você planeja comprar imóvel pronto, construir ou quitar financiamento?',
        time: '22:16',
      },
      {
        id: '4',
        sender: 'client',
        text: 'Quero comprar pronto no ano que vem. Tenho um valor de FGTS para lance.',
        time: '22:17',
      },
      {
        id: '5',
        sender: 'agent',
        text: 'Excelente! Usar o FGTS como lance livre aumenta muito suas chances de contemplação rápida nos primeiros 6 meses. Quanto você tem disponível para o lance?',
        time: '22:17',
      },
      {
        id: '6',
        sender: 'client',
        text: 'Tenho cerca de 45 mil no FGTS.',
        time: '22:18',
      },
      {
        id: '7',
        sender: 'agent',
        text: 'Perfeito! Com 45 mil seu lance fica na média histórica de corte do nosso grupo. Vou agendar com nosso especialista Roberto para te apresentar a simulação completa. Fica melhor amanhã às 10h ou às 15h?',
        time: '22:18',
        meta: '✓ Lead qualificado transferido para o CRM com tag #ConsorcioImobiliario #LanceFGTS',
      },
    ],
  },
  {
    id: 'seguros',
    name: 'Planos de Saúde & Seguros',
    category: 'Seguros e Benefícios',
    avatarLetter: 'PS',
    quickReplies: [
      'Quero cotação para minha família (3 pessoas)',
      'Aceita MEI ou CNPJ?',
      'Tem carência para exames?',
    ],
    messages: [
      {
        id: 's1',
        sender: 'client',
        text: 'Oi, tenho um MEI e quero saber o valor do plano de saúde para mim, minha esposa e meu filho.',
        time: '23:40',
      },
      {
        id: 's2',
        sender: 'system',
        text: 'Respondido em 1 minuto pelo Konvert Mais',
        time: '23:41',
      },
      {
        id: 's3',
        sender: 'agent',
        text: 'Oi! Tudo bem? Através do CNPJ/MEI você tem até 35% de desconto em relação à pessoa física! 😊 Quais são as idades de vocês três?',
        time: '23:41',
      },
      {
        id: 's4',
        sender: 'client',
        text: 'Eu 38, esposa 35 e meu filho 6 anos.',
        time: '23:42',
      },
      {
        id: 's5',
        sender: 'agent',
        text: 'Legal! Temos planos com cobertura nos principais hospitais e laboratórios da sua região com coparticipação inteligente a partir de R$ 890 total para os três. Vocês já possuem algum plano atualmente para compra de carência?',
        time: '23:42',
      },
      {
        id: 's6',
        sender: 'client',
        text: 'Sim, já temos Unimed há 2 anos, mas aumentou muito.',
        time: '23:43',
      },
      {
        id: 's7',
        sender: 'agent',
        text: 'Ótima notícia! Conseguimos fazer a portabilidade com redução total de carência. Nosso consultor vai montar o comparativo exato. Fica melhor falar por call às 11h ou 16h?',
        time: '23:43',
        meta: '✓ Oportunidade com CNPJ + Portabilidade enviada ao CRM',
      },
    ],
  },
  {
    id: 'assinaturas',
    name: 'Planos & Assinaturas',
    category: 'Planos Funerários e Contratos Recorrentes',
    avatarLetter: 'PF',
    quickReplies: [
      'Como funciona o plano familiar?',
      'Qual o valor da mensalidade?',
      'Inclui atendimento nacional?',
    ],
    messages: [
      {
        id: 'a1',
        sender: 'client',
        text: 'Olá, vi o anúncio do plano funerário familiar. Queria entender o que cobre e o valor.',
        time: '21:05',
        isAudio: true,
        audioDuration: '0:15',
      },
      {
        id: 'a2',
        sender: 'system',
        text: 'Respondido em 1 minuto pelo Konvert Mais',
        time: '21:06',
      },
      {
        id: 'a3',
        sender: 'agent',
        text: 'Olá! Boa noite! O Plano Familiar Proteção Total cobre titular, cônjuge, filhos e até 4 dependentes diretos (como pais e sogros), com assistência 24h nacional e sem taxa de adesão nesta semana. A mensalidade sai por R$ 69,90 fixos. Quantas pessoas você gostaria de incluir?',
        time: '21:06',
      },
      {
        id: 'a4',
        sender: 'client',
        text: 'Seríamos eu, esposa, 2 filhos e minha mãe de 72 anos.',
        time: '21:08',
      },
      {
        id: 'a5',
        sender: 'agent',
        text: 'Perfeito! Sua mãe entra normalmente sem acréscimo de mensalidade. Já preparei a proposta com a primeira mensalidade com 50% de desconto. Posso te enviar o resumo oficial para você conferir agora?',
        time: '21:08',
      },
      {
        id: 'a6',
        sender: 'client',
        text: 'Pode me mandar sim!',
        time: '21:09',
      },
      {
        id: 'a7',
        sender: 'agent',
        text: 'Proposta enviada! Aqui está o link seguro com as coberturas detalhadas. Se você confirmar hoje, a carência já começa a contar a partir de amanhã!',
        time: '21:09',
        meta: '✓ Link de proposta gerado e follow-up automático agendado',
      },
    ],
  },
];

