import React from 'react';
import { Building2, Briefcase, Repeat, CalendarCheck } from 'lucide-react';

export const TargetAudienceSection: React.FC = () => {
  const pillars = [
    {
      title: 'Alto Ticket & Vendas Consultivas',
      badge: 'Imóveis, Veículos & B2B',
      icon: <Building2 className="w-6 h-6" />,
      color: 'purple',
      borderColor: 'border-[#7C3AED]/40 hover:border-[#7C3AED]',
      iconBg: 'bg-[#7C3AED]/15 text-[#A855F7]',
      badgeBg: 'bg-[#7C3AED]/15 text-[#A855F7] border-[#7C3AED]/30',
      description:
        'Imobiliárias, corretores, loteamentos, incorporadoras, consórcios e soluções B2B.',
      action:
        'A IA entende o perfil (orçamento, entrada, localização), filtra curiosos sem poder de compra e entrega para o corretor com a visita ou simulação engatilhada.',
    },
    {
      title: 'Serviços Especializados & Agências',
      badge: 'Agências & Consultorias',
      icon: <Briefcase className="w-6 h-6" />,
      color: 'green',
      borderColor: 'border-[#22C55E]/40 hover:border-[#22C55E]',
      iconBg: 'bg-[#22C55E]/15 text-[#22C55E]',
      badgeBg: 'bg-[#22C55E]/15 text-[#22C55E] border-[#22C55E]/30',
      description:
        'Agências de marketing e publicidade, consultorias, escritórios de advocacia, engenharia e contabilidade.',
      action:
        'A IA tira as dúvidas iniciais de escopo, qualifica o momento do cliente e agenda reuniões de apresentação direto na agenda do especialista.',
    },
    {
      title: 'Contratos, Planos & Assinaturas',
      badge: 'Recorrência & Proteção',
      icon: <Repeat className="w-6 h-6" />,
      color: 'green',
      borderColor: 'border-[#22C55E]/40 hover:border-[#22C55E]',
      iconBg: 'bg-[#22C55E]/15 text-[#22C55E]',
      badgeBg: 'bg-[#22C55E]/15 text-[#22C55E] border-[#22C55E]/30',
      description:
        'Planos de saúde, seguros, planos funerários, clubes de benefícios, provedores e mensalidades.',
      action:
        'Apresenta tabelas e faixas de preço/idade, tira dúvidas de cobertura e carência, recolhe dados cadastrais e entrega pronto para o fechamento.',
    },
    {
      title: 'Saúde, Estética & Agendamentos',
      badge: 'Clínicas & Consultórios',
      icon: <CalendarCheck className="w-6 h-6" />,
      color: 'purple',
      borderColor: 'border-[#7C3AED]/40 hover:border-[#7C3AED]',
      iconBg: 'bg-[#7C3AED]/15 text-[#A855F7]',
      badgeBg: 'bg-[#7C3AED]/15 text-[#A855F7] border-[#7C3AED]/30',
      description:
        'Clínicas odontológicas, dermatologia, estética, cirurgias, barbearias e centros de saúde.',
      action:
        'Informa valores de procedimentos, explica como funciona a avaliação, consulta horários livres em tempo real e envia lembretes para evitar faltas.',
    },
  ];

  return (
    <section className="py-20 bg-[#101018]/40 border-y border-[#242238]/60" id="para-quem-e">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <span className="text-xs uppercase tracking-widest font-semibold text-[#A855F7] bg-[#7C3AED]/10 px-3.5 py-1.5 rounded-full border border-[#7C3AED]/30 inline-block">
            Para quem é
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Feito para quem vende e atende pelo WhatsApp
          </h2>
          <p className="text-sm sm:text-base text-[#9CA3AF] max-w-2xl mx-auto leading-relaxed">
            Seja em vendas de alto ticket, contratos recorrentes ou agendamentos, o KonvertMais se adapta à dinâmica comercial exata do seu negócio.
          </p>
        </div>

        {/* Grid com os 4 Pilares por Dinâmica de Venda */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {pillars.map((pillar, idx) => (
            <div
              key={idx}
              className={`p-7 sm:p-8 rounded-3xl bg-[#101018] border ${pillar.borderColor} transition duration-300 flex flex-col justify-between space-y-5`}
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className={`w-12 h-12 rounded-2xl ${pillar.iconBg} flex items-center justify-center`}>
                    {pillar.icon}
                  </div>
                  <span className={`text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full border ${pillar.badgeBg}`}>
                    {pillar.badge}
                  </span>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-white mb-2">{pillar.title}</h3>
                  <p className="text-xs sm:text-sm text-[#A855F7] font-medium leading-relaxed">
                    {pillar.description}
                  </p>
                </div>

                <p className="text-xs sm:text-sm text-[#9CA3AF] leading-relaxed pt-1 border-t border-white/5">
                  <strong className="text-white font-semibold">O que a IA faz: </strong>
                  {pillar.action}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Linha sob os cartões */}
        <div className="mt-12 text-center max-w-3xl mx-auto space-y-3">
          <div className="p-5 rounded-2xl bg-[#101018] border border-[#242238] space-y-2">
            <p className="text-sm text-[#9CA3AF]">
              Não é para quem procura um robô de menu ("digite 1"). O KonvertMais conversa de verdade, entende o que a pessoa precisa e só passa para o seu time quem vale o seu tempo.
            </p>
            <p className="text-xs sm:text-sm font-semibold text-white pt-1">
              💡 Em resumo: se o seu cliente te chama no WhatsApp antes de fechar e a rapidez da resposta decide a venda, o KonvertMais foi feito para você.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
