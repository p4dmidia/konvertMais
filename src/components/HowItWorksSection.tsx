import React from 'react';
import { Search, Wrench, BarChart3, ArrowRight } from 'lucide-react';

interface HowItWorksSectionProps {
  onOpenDiagnostic: () => void;
}

export const HowItWorksSection: React.FC<HowItWorksSectionProps> = ({ onOpenDiagnostic }) => {
  return (
    <section className="py-24 relative" id="como-funciona">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs uppercase tracking-widest font-semibold text-[#A855F7] bg-[#7C3AED]/10 px-3 py-1 rounded-full border border-[#7C3AED]/30">
            Processo Simples
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Como funciona
          </h2>
          <p className="text-[#9CA3AF] text-base sm:text-lg">
            Do diagnóstico ao agente no ar gerando vendas no seu WhatsApp.
          </p>
        </div>

        {/* 3 Steps Grid (Copy exata do PDF) */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Step 1 */}
          <div className="relative bg-[#101018] border border-[#242238] p-8 rounded-2xl flex flex-col justify-between hover:border-[#7C3AED]/60 transition group shadow-lg">
            <div className="space-y-4">
              <span className="text-5xl font-black text-[#7C3AED]/30 group-hover:text-[#A855F7] transition">01</span>
              <div className="w-12 h-12 rounded-xl bg-[#7C3AED]/20 text-[#A855F7] flex items-center justify-center text-xl">
                <Search className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white">1. Diagnóstico</h3>
              <p className="text-sm text-[#9CA3AF] leading-relaxed">
                Lemos as conversas da sua empresa e mostramos onde a venda se perde.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-[#242238]/50 text-xs text-[#A855F7] font-semibold">
              Análise real das conversas
            </div>
          </div>

          {/* Step 2 */}
          <div className="relative bg-[#101018] border border-[#7C3AED]/50 p-8 rounded-2xl flex flex-col justify-between shadow-glow-purple group">
            <div className="space-y-4">
              <span className="text-5xl font-black text-[#A855F7]/40 group-hover:text-[#A855F7] transition">02</span>
              <div className="w-12 h-12 rounded-xl bg-[#7C3AED] text-white flex items-center justify-center text-xl shadow-glow-purple">
                <Wrench className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white">2. Implantação</h3>
              <p className="text-sm text-[#9CA3AF] leading-relaxed">
                Montamos o agente com o roteiro do seu nicho, os follow-ups e o funil. <strong className="text-white">Em até 7 dias está no ar.</strong>
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-[#242238]/50 text-xs text-[#A855F7] font-semibold">
              No ar em até 7 dias
            </div>
          </div>

          {/* Step 3 */}
          <div className="relative bg-[#101018] border border-[#242238] p-8 rounded-2xl flex flex-col justify-between hover:border-[#7C3AED]/60 transition group shadow-lg">
            <div className="space-y-4">
              <span className="text-5xl font-black text-[#7C3AED]/30 group-hover:text-[#A855F7] transition">03</span>
              <div className="w-12 h-12 rounded-xl bg-[#22C55E]/20 text-[#22C55E] flex items-center justify-center text-xl">
                <BarChart3 className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white">3. Acompanhamento</h3>
              <p className="text-sm text-[#9CA3AF] leading-relaxed">
                Todo mês você recebe o relatório do funil (chegaram, responderam, receberam proposta, compraram), e ajustamos o roteiro.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-[#242238]/50 text-xs text-[#22C55E] font-semibold">
              Relatório mensal e melhoria contínua
            </div>
          </div>
        </div>

        {/* Section CTA */}
        <div className="mt-14 text-center">
          <button
            onClick={onOpenDiagnostic}
            className="pulse-btn-green inline-flex items-center gap-3 px-8 py-4 rounded-xl text-base font-bold text-white bg-gradient-to-r from-[#22C55E] to-emerald-600 hover:from-emerald-500 hover:to-emerald-700 shadow-glow-green transition hover:scale-105 cursor-pointer"
          >
            <i className="fa-brands fa-whatsapp text-xl"></i>
            <span>Quero meu diagnóstico gratuito</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};

