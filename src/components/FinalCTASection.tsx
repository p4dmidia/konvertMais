import React from 'react';
import { MessageCircle, ArrowRight } from 'lucide-react';

interface FinalCTASectionProps {
  onOpenDiagnostic: () => void;
}

export const FinalCTASection: React.FC<FinalCTASectionProps> = ({ onOpenDiagnostic }) => {
  return (
    <section className="py-24 relative overflow-hidden" id="fechamento">
      {/* Glow background circles */}
      <div className="absolute inset-0 bg-radial-gradient pointer-events-none"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#7C3AED]/20 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center space-y-8">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#7C3AED]/20 border border-[#7C3AED]/40 text-[#A855F7] text-xs md:text-sm font-semibold">
          <span>🚀 Diagnóstico Comercial Gratuito de 30 Minutos</span>
        </div>

        {/* Título (Texto exato do PDF) */}
        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.15]">
          Quantos leads você perdeu esta semana?
        </h2>

        {/* Texto (Texto exato do PDF) */}
        <p className="text-base sm:text-xl text-[#9CA3AF] max-w-2xl mx-auto font-normal leading-relaxed">
          Agende o diagnóstico gratuito. Em 30 minutos você sabe onde a sua venda se perde, mesmo que não contrate.
        </p>

        {/* Final CTA Buttons */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={onOpenDiagnostic}
            className="pulse-btn-green w-full sm:w-auto inline-flex items-center justify-center gap-3 px-10 py-5 rounded-2xl text-lg font-bold text-white bg-gradient-to-r from-[#22C55E] to-emerald-600 hover:from-emerald-500 hover:to-emerald-700 shadow-glow-green transition-all duration-300 hover:scale-105 cursor-pointer"
          >
            <i className="fa-brands fa-whatsapp text-2xl"></i>
            <span>Quero meu diagnóstico gratuito</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>

        <p className="text-xs sm:text-sm text-[#9CA3AF] flex items-center justify-center gap-2">
          <MessageCircle className="w-4 h-4 text-[#22C55E]" />
          <span>Atendimento 24h via IA · Implantação sem custo · Relatórios de funil inclusos</span>
        </p>
      </div>
    </section>
  );
};

