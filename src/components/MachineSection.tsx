import React from 'react';
import { Megaphone, MessageSquare, Bot, CheckCircle2, ArrowRight, TrendingUp, Users, Target, ShieldCheck } from 'lucide-react';
import { NINA_WHATSAPP_URL } from '../data/mockData';

export const MachineSection: React.FC = () => {
  const steps = [
    {
      num: '1',
      title: 'Anúncio',
      desc: 'a P4D cria e otimiza as campanhas no Meta e no Google.',
      icon: <Megaphone className="w-5 h-5" />,
    },
    {
      num: '2',
      title: 'Contato',
      desc: 'o interessado chama no WhatsApp a qualquer hora.',
      icon: <MessageSquare className="w-5 h-5" />,
    },
    {
      num: '3',
      title: 'Atendimento',
      desc: 'a IA do KonvertMais responde, qualifica e registra no funil.',
      icon: <Bot className="w-5 h-5" />,
    },
    {
      num: '4',
      title: 'Venda',
      desc: 'seu vendedor recebe só quem está pronto, com o resumo da conversa.',
      icon: <CheckCircle2 className="w-5 h-5" />,
    },
  ];

  return (
    <section className="py-24 bg-[#07070B] relative" id="quero-ter-leads">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="text-xs uppercase tracking-widest font-semibold text-[#22C55E] bg-[#22C55E]/15 px-3.5 py-1.5 rounded-full border border-[#22C55E]/30 inline-block">
            Quero ter leads
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Do anúncio à venda, <span className="text-gradient-purple">sem montar um time de marketing.</span>
          </h2>
          <p className="text-base sm:text-lg text-[#9CA3AF] leading-relaxed">
            Atendimento rápido só vende se tiver gente chegando. Para quem ainda não tem volume, juntamos duas peças: a P4D Mídia traz os contatos com anúncios no Meta e no Google, e o KonvertMais atende cada um deles no mesmo minuto.
          </p>
        </div>

        {/* A máquina em quatro etapas (desenho em linha da esquerda para a direita; no celular, de cima para baixo) */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-16 relative">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="bg-[#101018] border border-[#242238] rounded-2xl p-6 relative flex flex-col justify-between hover:border-[#7C3AED]/60 transition group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-[#7C3AED]/15 text-[#A855F7] flex items-center justify-center">
                    {step.icon}
                  </div>
                  <span className="text-2xl font-black text-[#7C3AED]/40 group-hover:text-[#A855F7] transition">
                    0{step.num}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-white mb-1.5">
                  {step.num}. {step.title}
                </h3>
                <p className="text-sm text-[#9CA3AF] leading-relaxed">
                  — {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bloco de destaque P4D Mídia */}
        <div className="bg-gradient-to-br from-[#141422] to-[#101018] rounded-3xl border border-[#7C3AED]/40 p-8 sm:p-10 shadow-glow-purple space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/5 pb-6">
            <div>
              <span className="text-xs uppercase tracking-widest font-semibold text-[#22C55E] bg-[#22C55E]/15 px-3 py-1 rounded-full border border-[#22C55E]/30 inline-block mb-2">
                Desconto Exclusivo
              </span>
              <h3 className="text-xl sm:text-2xl font-extrabold text-white">
                Parceira oficial: P4D Mídia
              </h3>
              <p className="text-sm text-[#9CA3AF] mt-1 max-w-2xl leading-relaxed">
                Especialistas para atrair clientes e fazer o seu negócio vender mais. O tráfego cuida da atração, o KonvertMais atende e qualifica, e com a assessoria você tem um time pensando e otimizando o seu negócio de ponta a ponta.
              </p>
            </div>
            <div className="shrink-0">
              <span className="inline-block px-4 py-2 rounded-2xl bg-[#22C55E]/20 text-[#22C55E] font-bold text-sm border border-[#22C55E]/40">
                30% OFF para assinantes
              </span>
            </div>
          </div>

          {/* Comparativo didático das etapas do negócio */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs sm:text-sm">
            {/* Box 1: Tráfego */}
            <div className="p-4 rounded-2xl bg-[#101018] border border-[#242238] space-y-2">
              <div className="flex items-center justify-between">
                <span className="font-bold text-white flex items-center gap-1.5">
                  <Megaphone className="w-4 h-4 text-[#A855F7]" /> Gestão de Tráfego
                </span>
                <span className="text-[10px] uppercase font-bold text-[#A855F7] bg-[#7C3AED]/15 px-2 py-0.5 rounded-full">
                  Etapa 1
                </span>
              </div>
              <p className="text-[#9CA3AF] leading-relaxed text-xs">
                Cuida exclusivamente da <strong className="text-white">Atração</strong>: anúncios no Meta e Google trazendo contatos interessados para o seu WhatsApp todos os dias.
              </p>
            </div>

            {/* Box 2: KonvertMais */}
            <div className="p-4 rounded-2xl bg-[#101018] border border-[#7C3AED]/30 space-y-2">
              <div className="flex items-center justify-between">
                <span className="font-bold text-white flex items-center gap-1.5">
                  <Bot className="w-4 h-4 text-[#22C55E]" /> KonvertMais
                </span>
                <span className="text-[10px] uppercase font-bold text-[#22C55E] bg-[#22C55E]/15 px-2 py-0.5 rounded-full">
                  Etapas 2 e 3
                </span>
              </div>
              <p className="text-[#9CA3AF] leading-relaxed text-xs">
                Cuida do <strong className="text-white">Atendimento &amp; Qualificação</strong>: responde em segundos, tira dúvidas de produto e passa só quem está pronto para fechar.
              </p>
            </div>

            {/* Box 3: Assessoria */}
            <div className="p-4 rounded-2xl bg-gradient-to-br from-[#7C3AED]/15 to-transparent border border-[#7C3AED]/50 space-y-2">
              <div className="flex items-center justify-between">
                <span className="font-bold text-white flex items-center gap-1.5">
                  <TrendingUp className="w-4 h-4 text-[#22C55E]" /> Assessoria Completa
                </span>
                <span className="text-[10px] uppercase font-bold text-white bg-[#7C3AED] px-2 py-0.5 rounded-full">
                  Todas as 6 Etapas
                </span>
              </div>
              <p className="text-[#E5E7EB] leading-relaxed text-xs">
                <strong className="text-white">Um time de especialistas pensando o seu negócio:</strong> atrai, qualifica, ajusta o fechamento, recupera vendas perdidas e aumenta o seu faturamento.
              </p>
            </div>
          </div>

          {/* O que a assessoria faz em cada uma das 6 etapas (didático e direto) */}
          <div className="bg-[#101018] border border-[#242238] rounded-2xl p-5 sm:p-6 space-y-4">
            <h4 className="text-sm sm:text-base font-bold text-white flex items-center gap-2">
              <Target className="w-4 h-4 text-[#22C55E]" />
              Como a Assessoria atua na prática nas 6 etapas do seu funil:
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 text-xs">
              <div className="p-3 rounded-xl bg-white/5 space-y-1">
                <p className="font-bold text-white">1. Atrair (Tráfego)</p>
                <p className="text-[#9CA3AF]">Criamos anúncios chamativos no Meta e Google focados em pessoas que realmente querem comprar.</p>
              </div>
              <div className="p-3 rounded-xl bg-white/5 space-y-1">
                <p className="font-bold text-white">2. Atender (No ar 24h)</p>
                <p className="text-[#9CA3AF]">Configuramos as mensagens do KonvertMais com o tom de voz da sua empresa para não deixar ninguém esperando.</p>
              </div>
              <div className="p-3 rounded-xl bg-white/5 space-y-1">
                <p className="font-bold text-white">3. Qualificar (Filtro)</p>
                <p className="text-[#9CA3AF]">Ajustamos as perguntas do agente para filtrar curiosos e enviar o resumo pronto ao seu vendedor.</p>
              </div>
              <div className="p-3 rounded-xl bg-white/5 space-y-1">
                <p className="font-bold text-white">4. Fechar mais (Vendas)</p>
                <p className="text-[#9CA3AF]">Ajudamos seu time a contornar objeções, organizar o CRM e acelerar o fechamento de contratos.</p>
              </div>
              <div className="p-3 rounded-xl bg-white/5 space-y-1">
                <p className="font-bold text-white">5. Aumentar faturamento (Receita)</p>
                <p className="text-[#9CA3AF]">Criamos ações para vender planos maiores ou produtos complementares para a sua base de clientes.</p>
              </div>
              <div className="p-3 rounded-xl bg-white/5 space-y-1">
                <p className="font-bold text-white">6. Reter &amp; Indicar</p>
                <p className="text-[#9CA3AF]">Campanhas de pós-venda para fidelizar quem já comprou e fazer clientes indicarem novos contatos.</p>
              </div>
            </div>
          </div>

          {/* Tabela de preços da P4D com scroll horizontal protegido no mobile */}
          <div className="overflow-x-auto -mx-2 sm:mx-0">
            <table className="w-full text-left text-sm text-[#E5E7EB] border-collapse min-w-[540px]">
              <thead>
                <tr className="border-b border-[#242238] text-xs uppercase tracking-wider text-[#9CA3AF]">
                  <th className="py-3 px-4">Serviço da P4D Mídia</th>
                  <th className="py-3 px-4">O que inclui na prática</th>
                  <th className="py-3 px-4">Preço normal</th>
                  <th className="py-3 px-4">Para assinantes</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#242238]/60">
                <tr>
                  <td className="py-4 px-4 font-bold text-white whitespace-nowrap">
                    <div>Gestão de tráfego</div>
                    <span className="text-[11px] text-[#A855F7] font-normal">Etapa 1: Atração</span>
                  </td>
                  <td className="py-4 px-4 text-xs sm:text-sm text-[#9CA3AF]">
                    Campanhas no Meta e no Google para colocar novos contatos no seu WhatsApp todo dia
                  </td>
                  <td className="py-4 px-4 text-[#9CA3AF] line-through whitespace-nowrap">R$ 700/mês</td>
                  <td className="py-4 px-4 font-extrabold text-[#22C55E] text-base whitespace-nowrap">
                    R$ 490/mês
                  </td>
                </tr>
                <tr>
                  <td className="py-4 px-4 font-bold text-white whitespace-nowrap">
                    <div>Assessoria de marketing</div>
                    <span className="text-[11px] text-[#22C55E] font-normal">Todas as 6 etapas</span>
                  </td>
                  <td className="py-4 px-4 text-xs sm:text-sm text-[#9CA3AF]">
                    Tráfego pago + time de especialistas analisando seus números e otimizando o seu funil de ponta a ponta
                  </td>
                  <td className="py-4 px-4 text-[#9CA3AF] line-through whitespace-nowrap">R$ 1.500/mês</td>
                  <td className="py-4 px-4 font-extrabold text-[#22C55E] text-base whitespace-nowrap">
                    R$ 1.050/mês
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Texto pequeno sob a tabela */}
          <p className="text-xs text-[#9CA3AF] leading-relaxed pt-1">
            A verba dos anúncios é paga direto ao Meta e ao Google. Os serviços da P4D Mídia são contratados à parte, com contrato e nota próprios, e o preço de assinante vale enquanto a assinatura do KonvertMais estiver ativa.
          </p>

          {/* Botão */}
          <div className="pt-2 text-center sm:text-left">
            <a
              href={NINA_WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="pulse-btn-green w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl text-base font-bold text-white bg-gradient-to-r from-[#22C55E] to-emerald-600 hover:from-emerald-500 hover:to-emerald-700 shadow-glow-green transition hover:scale-105 cursor-pointer"
            >
              <i className="fa-brands fa-whatsapp text-xl"></i>
              <span>Quero montar minha máquina de vendas</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
