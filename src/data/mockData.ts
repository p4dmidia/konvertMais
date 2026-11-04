import { DemoNiche } from '../types';

export const NINA_WHATSAPP_URL =
  'https://wa.me/5531995006891?text=Oi%2C%20vim%20pelo%20site%20do%20KonvertMais';

export const FAQ_ITEMS = [
  {
    question: 'A IA vai falar besteira com o meu cliente?',
    answer:
      'Ela responde só com o que está no material da sua empresa e não inventa preço nem promessa. Quando não sabe, passa a conversa para uma pessoa do time com um resumo. Tudo fica visível no painel.',
  },
  {
    question: 'A IA vai substituir o meu vendedor?',
    answer:
      'Não. Ela atende primeiro, tira os curiosos da frente e entrega para o vendedor quem quer comprar. O vendedor passa o dia com cliente quente.',
  },
  {
    question: 'Meu cliente prefere falar com gente.',
    answer:
      'O humano continua atendendo. A IA só garante que ninguém fique horas sem resposta. Se o cliente pedir uma pessoa, a conversa passa na hora.',
  },
  {
    question: 'Funciona no meu número atual?',
    answer:
      'Sim. Você conecta o número que já usa lendo um QR Code, ou usa a API oficial do WhatsApp.',
  },
  {
    question: 'Corro risco de ter o número bloqueado?',
    answer:
      'Pela API oficial da Meta, não existe o risco da conexão não oficial. Pelo QR Code, o sistema tem proteção de envio: aquecimento, limite diário e janela de horário. Nenhuma ferramenta garante risco zero nessa conexão.',
  },
  {
    question: 'Como funcionam os créditos?',
    answer:
      'O plano já vem com créditos para cerca de 200 conversas por mês, e o que sobra passa para o mês seguinte. Se precisar de mais, você compra uma recarga a partir de R$ 50. O painel mostra o gasto e avisa antes do saldo acabar.',
  },
  {
    question: 'E se eu ainda não tenho leads?',
    answer:
      'A P4D Mídia, nossa parceira, gerencia seus anúncios no Meta e no Google com 30% de desconto para assinantes. Os contatos que chegam já são atendidos pelo KonvertMais.',
  },
  {
    question: 'Tem fidelidade?',
    answer:
      'Não. Você pode cancelar quando quiser, sem taxa de cancelamento. O mês pago continua ativo até o fim.',
  },
  {
    question: 'Preciso configurar tudo sozinho?',
    answer:
      'Não precisa. Você pode configurar sozinho em minutos, seguindo o passo a passo da Konvert Academy, ou deixar com o nosso time, que coloca o seu agente de IA no ar em até 48 horas úteis. A implantação pelo time é grátis: de R$ 1.000 por R$ 0.',
  },
  {
    question: 'Já tenho CRM.',
    answer:
      'O que costuma faltar é quem responda em segundos e faça a triagem. Na conversa de diagnóstico mostramos como o KonvertMais entra no seu processo.',
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
        text: 'Respondido em segundos pelo KonvertMais',
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
        text: 'Respondido em segundos pelo KonvertMais',
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
        text: 'Respondido em segundos pelo KonvertMais',
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
  {
    id: 'clinicas',
    name: 'Clínicas e serviços',
    category: 'Clínicas & Consultórios',
    avatarLetter: 'CS',
    quickReplies: [
      'Oi, quanto custa um clareamento?',
      'Como funciona a avaliação?',
      'Tem horário para esta semana?',
    ],
    messages: [
      {
        id: 'c1',
        sender: 'client',
        text: 'Oi, quanto custa um clareamento?',
        time: '20:41',
      },
      {
        id: 'c2',
        sender: 'agent',
        text: 'Boa noite! O clareamento no consultório sai a partir de R$ 890, e a avaliação é gratuita. Prefere avaliar esta semana ou na próxima?',
        time: '20:41',
      },
      {
        id: 'c3',
        sender: 'client',
        text: 'Essa semana, de manhã.',
        time: '20:42',
      },
      {
        id: 'c4',
        sender: 'agent',
        text: 'Tenho quinta às 9h ou sexta às 10h30 com a Dra. Paula Moreira. Qual fica melhor?',
        time: '20:42',
      },
      {
        id: 'c5',
        sender: 'client',
        text: 'Quinta às 9h.',
        time: '20:43',
      },
      {
        id: 'c6',
        sender: 'agent',
        text: 'Marcado! Quinta, às 9h, na Clínica Sorriso Pleno. Mando um lembrete na quarta à tarde.',
        time: '20:43',
        meta: '✓ Avaliação agendada na agenda da clínica',
      },
    ],
  },
];
