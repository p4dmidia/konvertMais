import React from 'react';
import { Check, Sparkles, ArrowRight, ShieldCheck, Zap } from 'lucide-react';

interface PricingSectionProps {
  onOpenDiagnostic: () => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({ onOpenDiagnostic }) => {
  return (
    <section className="py-24 relative" id="planos">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="text-xs uppercase tracking-widest font-semibold text-[#A855F7] bg-[#7C3AED]/10 px-3.5 py-1.5 rounded-full border border-[#7C3AED]/30 inline-flex items-center gap-2">
            <Sparkles className="w-3.5 h-3.5" />
            Transparência Comercial
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Dois planos. Sem taxa de implantação.
          </h2>
          <p className="text-[#9CA3AF] text-base sm:text-lg">
            A implantação está incluída: aplicamos o modelo pronto do seu nicho, conectamos o número e testamos.
          </p>
        </div>

        {/* 2 Plans Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto items-stretch">
          {/* Plan 1: Konvert Comercial */}
          <div className="bg-[#101018] rounded-3xl border border-[#242238] hover:border-[#7C3AED]/50 p-8 sm:p-10 flex flex-col justify-between transition-all duration-300">
            <div className="space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#A855F7] bg-[#7C3AED]/10 px-3 py-1 rounded-full border border-[#7C3AED]/20">
                  Para quem já anuncia
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-white mt-3">Konvert Comercial</h3>
                <p className="text-sm text-[#9CA3AF] mt-1">
                  O agente de IA, o CRM e o acompanhamento para atender todos os seus leads.
                </p>
              </div>

              <div className="border-y border-white/5 py-5">
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl sm:text-5xl font-black text-white tabular-nums">R$ 997</span>
                  <span className="text-[#9CA3AF] text-sm">/mês</span>
                </div>
                <p className="text-xs text-[#22C55E] mt-1 font-medium">Sem taxa de implantação</p>
              </div>

              {/* Highlights */}
              <ul className="space-y-3.5 text-sm text-[#E5E7EB]">
                <li className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#22C55E]/20 text-[#22C55E] flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span><strong>Até 600 leads</strong> atendidos pela IA por mês</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#22C55E]/20 text-[#22C55E] flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span><strong>3 usuários</strong> inclusos no painel</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#22C55E]/20 text-[#22C55E] flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span><strong>1 canal / número</strong> (WhatsApp ou API oficial)</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#22C55E]/20 text-[#22C55E] flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span>Chamada de voz integrada</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#22C55E]/20 text-[#22C55E] flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span>Agente com modelo pronto do nicho (roteiro, qualificação, funil)</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#22C55E]/20 text-[#22C55E] flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span>Relatório mensal do funil e 1 ajuste de roteiro/mês</span>
                </li>
              </ul>
            </div>

            <div className="pt-8">
              <button
                onClick={onOpenDiagnostic}
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl text-sm font-bold text-white bg-[#1a1829] border border-[#7C3AED]/40 hover:bg-[#7C3AED]/20 transition cursor-pointer"
              >
                <i className="fa-brands fa-whatsapp text-lg"></i>
                <span>Agendar meu diagnóstico</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Plan 2: Konvert Comercial + Tráfego (Featured) */}
          <div className="bg-[#141422] rounded-3xl border-2 border-[#7C3AED] shadow-glow-purple-lg p-8 sm:p-10 flex flex-col justify-between relative">
            <div className="absolute -top-4 right-8 bg-gradient-to-r from-[#7C3AED] to-[#A855F7] text-white text-xs font-bold uppercase tracking-wider py-1 px-4 rounded-full shadow-md flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" /> Funil Completo
            </div>

            <div className="space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#22C55E] bg-[#22C55E]/10 px-3 py-1 rounded-full border border-[#22C55E]/20">
                  Do anúncio à venda
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-white mt-3">Konvert Comercial + Tráfego</h3>
                <p className="text-sm text-[#9CA3AF] mt-1">
                  Tudo do plano comercial mais a gestão dos seus anúncios feita pela <strong className="text-white">P4D Mídia</strong>.
                </p>
              </div>

              <div className="border-y border-white/10 py-5">
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl sm:text-5xl font-black text-white tabular-nums">R$ 1.497</span>
                  <span className="text-[#9CA3AF] text-sm">/mês</span>
                </div>
                <p className="text-xs text-[#22C55E] mt-1 font-medium">Gestão de Tráfego Meta e Google inclusa</p>
              </div>

              {/* Highlights */}
              <ul className="space-y-3.5 text-sm text-[#E5E7EB]">
                <li className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#22C55E]/20 text-[#22C55E] flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span><strong>Até 800 leads</strong> atendidos pela IA por mês</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#22C55E]/20 text-[#22C55E] flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span><strong>5 usuários</strong> inclusos no painel</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#22C55E]/20 text-[#22C55E] flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span><strong>2 números ou canais</strong> simultâneos</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#22C55E]/20 text-[#22C55E] flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span><strong>Gestão de tráfego (Meta e Google)</strong> pela parceira P4D Mídia</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#22C55E]/20 text-[#22C55E] flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span>Relatório mensal do funil e <strong>2 ajustes de roteiro/mês</strong></span>
                </li>
              </ul>
            </div>

            <div className="pt-8">
              <button
                onClick={onOpenDiagnostic}
                className="pulse-btn-green w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl text-base font-bold text-white bg-gradient-to-r from-[#22C55E] to-emerald-600 hover:from-emerald-500 hover:to-emerald-700 shadow-glow-green transition hover:scale-[1.02] cursor-pointer"
              >
                <i className="fa-brands fa-whatsapp text-xl"></i>
                <span>Agendar meu diagnóstico</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Supporting text & transparency note (Copy exata do PDF) */}
        <div className="mt-12 text-center max-w-2xl mx-auto space-y-2">
          <p className="text-sm text-[#9CA3AF] leading-relaxed">
            Sem taxa de implantação. Verba de anúncio paga direto à Meta e ao Google. Na call de diagnóstico mostramos qual plano faz sentido para o seu volume.
          </p>
          <div className="pt-2 flex items-center justify-center gap-2 text-xs text-[#9CA3AF]">
            <ShieldCheck className="w-4 h-4 text-[#22C55E]" />
            <span>Garantia de implantação no ar em até 7 dias ou devolvemos a primeira mensalidade</span>
          </div>
        </div>
      </div>
    </section>
  );
};

