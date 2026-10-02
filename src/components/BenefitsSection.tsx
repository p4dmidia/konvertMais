import React from 'react';
import {
  Clock,
  Filter,
  CreditCard,
  Repeat,
  UserCheck,
  LayoutGrid,
} from 'lucide-react';

export const BenefitsSection: React.FC = () => {
  const actions = [
    {
      icon: <Clock className="w-6 h-6" />,
      title: 'Resposta em cerca de 1 minuto',
      description: 'Atendimento instantâneo 24h por dia, inclusive à noite, de madrugada e no fim de semana.',
    },
    {
      icon: <Filter className="w-6 h-6" />,
      title: 'Qualificação ativa do lead',
      description: 'Descobre quem vai usar, o que precisa e quanto pode pagar antes de avançar a negociação.',
    },
    {
      icon: <CreditCard className="w-6 h-6" />,
      title: 'Apresentação com preço e link',
      description: 'Apresenta o plano certo, com valores transparentes, e manda o link de pagamento ou checkout.',
    },
    {
      icon: <Repeat className="w-6 h-6" />,
      title: 'Follow-up por estágio',
      description: 'Quem recebeu o link e não pagou, quem pediu para pagar depois e quem sumiu recebem contato no momento certo.',
    },
    {
      icon: <UserCheck className="w-6 h-6" />,
      title: 'Transbordo inteligente',
      description: 'Passa para o seu time quem pede um humano, faz reclamação ou já está pronto para fechar.',
    },
    {
      icon: <LayoutGrid className="w-6 h-6" />,
      title: 'Organização completa no CRM',
      description: 'Tudo registrado automaticamente: funil de vendas, etiquetas, tarefas e histórico de conversas.',
    },
  ];

  return (
    <section className="py-24" id="o-que-faz">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="text-xs uppercase tracking-widest font-semibold text-[#A855F7] bg-[#7C3AED]/10 px-3 py-1 rounded-full border border-[#7C3AED]/30">
            Capacidades Reais
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            O que o agente faz
          </h2>
          <p className="text-[#9CA3AF] text-base sm:text-lg">
            Um vendedor incansável no seu WhatsApp executando todas as etapas comerciais com perfeição.
          </p>
        </div>

        {/* 6 Actions Grid (Copy exata do PDF) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {actions.map((item, i) => (
            <div
              key={i}
              className="p-6 rounded-2xl bg-[#101018] border border-[#242238] hover:border-[#7C3AED]/50 transition duration-300 flex flex-col justify-between group hover:shadow-lg"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#7C3AED]/15 text-[#A855F7] group-hover:scale-105 transition-transform flex items-center justify-center shrink-0 text-xl mb-4">
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                <p className="text-sm text-[#9CA3AF] leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

