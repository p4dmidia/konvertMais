import React from 'react';
import { ArrowRight } from 'lucide-react';
import { NINA_WHATSAPP_URL } from '../data/mockData';

export const FinalCTASection: React.FC = () => {
  return (
    <section className="py-24 relative overflow-hidden" id="fechamento">
      {/* Glow background circles */}
      <div className="absolute inset-0 bg-radial-gradient pointer-events-none"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#7C3AED]/20 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center space-y-8">
        {/* Título */}
        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.15]">
          Quantos contatos ficaram sem resposta esta semana?
        </h2>

        {/* Texto */}
        <p className="text-base sm:text-xl text-[#9CA3AF] max-w-2xl mx-auto font-normal leading-relaxed">
          Fale com a Nina, a IA de atendimento do KonvertMais. Ela vai responder do mesmo jeito que responderia os seus clientes e marcar uma conversa de 40 minutos com o nosso time. Você sai sabendo onde a sua venda se perde, mesmo que não contrate.
        </p>

        {/* Final CTA Button */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={NINA_WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="pulse-btn-green w-full sm:w-auto inline-flex items-center justify-center gap-3 px-10 py-5 rounded-2xl text-lg font-bold text-white bg-gradient-to-r from-[#22C55E] to-emerald-600 hover:from-emerald-500 hover:to-emerald-700 shadow-glow-green transition-all duration-300 hover:scale-105 cursor-pointer"
          >
            <i className="fa-brands fa-whatsapp text-2xl"></i>
            <span>Falar com a Nina no WhatsApp</span>
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>

        {/* Linha de apoio */}
        <p className="text-xs sm:text-sm text-[#9CA3AF] max-w-2xl mx-auto leading-relaxed">
          R$ 247 por mês · 7 dias grátis · Implantação grátis · Sem fidelidade · Tráfego com a P4D Mídia por preço de assinante
        </p>
      </div>
    </section>
  );
};
