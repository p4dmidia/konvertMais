import React from 'react';
import {
  Search,
  Wrench,
  ShieldCheck,
  BarChart3,
  Bot,
  Kanban,
  Inbox,
  Repeat,
  Calendar,
  LineChart,
} from 'lucide-react';

export const HowItWorksSection: React.FC = () => {
  const steps = [
    {
      num: '01',
      title: 'Conversa de diagnóstico.',
      desc: 'Em 40 minutos pelo Google Meet, entendemos como seus clientes chegam e onde a venda se perde. Você sai sabendo o que fazer, mesmo que não contrate.',
      icon: <Search className="w-6 h-6" />,
      tag: '40 min no Google Meet',
    },
    {
      num: '02',
      title: 'Implantação.',
      desc: 'Você escolhe: configure sozinho em minutos, seguindo o passo a passo da Konvert Academy, ou conte com o nosso time, que conecta o seu WhatsApp, cadastra o material da empresa e deixa o agente de IA no ar e funcionando em até 48 horas úteis.',
      icon: <Wrench className="w-6 h-6" />,
      tag: 'No ar em até 48h úteis',
    },
    {
      num: '03',
      title: 'Teste com segurança.',
      desc: 'O agente começa respondendo só os números que você escolher. Quando estiver satisfeito, libera para todos os clientes.',
      icon: <ShieldCheck className="w-6 h-6" />,
      tag: 'Validação controlada',
    },
    {
      num: '04',
      title: 'Acompanhamento.',
      desc: 'Você vê cada conversa, o funil e o gasto de IA no painel, e ajusta o agente quando quiser.',
      icon: <BarChart3 className="w-6 h-6" />,
      tag: 'Painel transparente',
    },
  ];

  const features = [
    {
      title: 'Agente de IA no WhatsApp.',
      desc: 'Responde em segundos, entende áudio e pode responder falando.',
      icon: <Bot className="w-6 h-6" />,
    },
    {
      title: 'Funil de vendas (CRM).',
      desc: 'Cada interessado vira um cartão que anda pelas etapas até a venda ou a desistência.',
      icon: <Kanban className="w-6 h-6" />,
    },
    {
      title: 'Caixa de entrada da equipe.',
      desc: 'Você e a IA atendem lado a lado. Com um clique, você assume a conversa e depois devolve.',
      icon: <Inbox className="w-6 h-6" />,
    },
    {
      title: 'Retornos automáticos.',
      desc: 'Quem parou de responder recebe uma nova mensagem na hora certa.',
      icon: <Repeat className="w-6 h-6" />,
    },
    {
      title: 'Agenda.',
      desc: 'A IA consulta os horários livres e marca a reunião ou a visita com o seu time.',
      icon: <Calendar className="w-6 h-6" />,
    },
    {
      title: 'Desempenho.',
      desc: 'Veja quantos contatos chegaram, quantos foram atendidos e quantos compraram.',
      icon: <LineChart className="w-6 h-6" />,
    },
  ];

  return (
    <section className="py-24 relative" id="como-funciona">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Título: Do primeiro papo ao agente no ar */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs uppercase tracking-widest font-semibold text-[#A855F7] bg-[#7C3AED]/10 px-3 py-1 rounded-full border border-[#7C3AED]/30 inline-block">
            Como funciona
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Do primeiro papo ao agente no ar
          </h2>
        </div>

        {/* 4 Etapas */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="relative bg-[#101018] border border-[#242238] p-6 rounded-2xl flex flex-col justify-between hover:border-[#7C3AED]/60 transition group shadow-lg"
            >
              <div className="space-y-4">
                <span className="text-4xl font-black text-[#7C3AED]/30 group-hover:text-[#A855F7] transition">
                  {step.num}
                </span>
                <div className="w-12 h-12 rounded-xl bg-[#7C3AED]/20 text-[#A855F7] flex items-center justify-center text-xl">
                  {step.icon}
                </div>
                <h3 className="text-lg font-bold text-white">{step.title}</h3>
                <p className="text-sm text-[#9CA3AF] leading-relaxed">{step.desc}</p>
              </div>
              <div className="mt-6 pt-4 border-t border-[#242238]/50 text-xs text-[#A855F7] font-semibold">
                {step.tag}
              </div>
            </div>
          ))}
        </div>

        {/* Bloco: Tudo o que vem no KonvertMais */}
        <div className="mt-24 pt-16 border-t border-[#242238]/60">
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <span className="text-xs uppercase tracking-widest font-semibold text-[#22C55E] bg-[#22C55E]/10 px-3 py-1 rounded-full border border-[#22C55E]/30 inline-block">
              Recursos Inclusos
            </span>
            <h3 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
              Tudo o que vem no KonvertMais
            </h3>
            <p className="text-sm sm:text-base text-[#9CA3AF]">
              Todos inclusos no plano, sem versão básica ou premium.
            </p>
          </div>

          {/* Seis cartões */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((item, i) => (
              <div
                key={i}
                className="p-6 rounded-2xl bg-[#101018] border border-[#242238] hover:border-[#7C3AED]/50 transition duration-300 flex flex-col justify-between group hover:shadow-lg"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#7C3AED]/15 text-[#A855F7] group-hover:scale-105 transition-transform flex items-center justify-center shrink-0 text-xl mb-4">
                    {item.icon}
                  </div>
                  <h4 className="text-lg font-bold text-white mb-2">{item.title}</h4>
                  <p className="text-sm text-[#9CA3AF] leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Linha sob os cartões */}
          <div className="mt-10 text-center max-w-2xl mx-auto">
            <p className="text-sm text-[#9CA3AF] leading-relaxed bg-[#101018] p-4 rounded-2xl border border-[#242238]">
              Também atende Instagram e Messenger, e tem a Konvert Academy, com cada tela explicada passo a passo.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
