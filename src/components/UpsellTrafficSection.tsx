import React from 'react';
import { ShieldCheck, Clock, CheckCircle2 } from 'lucide-react';

export const UpsellTrafficSection: React.FC = () => {
  return (
    <section className="py-16 bg-[#101018]/40 border-y border-[#242238]" id="garantia">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-[#22C55E]/10 via-[#141422] to-[#7C3AED]/10 rounded-3xl border border-[#22C55E]/30 p-8 sm:p-10 text-center space-y-4">
          <div className="w-14 h-14 rounded-2xl bg-[#22C55E]/20 text-[#22C55E] flex items-center justify-center mx-auto text-2xl shadow-glow-green/30">
            <ShieldCheck className="w-8 h-8" />
          </div>

          <span className="text-xs uppercase tracking-widest font-semibold text-[#22C55E] bg-[#22C55E]/10 px-3.5 py-1.5 rounded-full border border-[#22C55E]/20 inline-block">
            Garantia de Implantação
          </span>

          <h3 className="text-2xl sm:text-4xl font-extrabold text-white">
            No ar em até 7 dias, ou devolvemos a primeira mensalidade.
          </h3>

          <p className="text-sm sm:text-base text-[#9CA3AF] max-w-xl mx-auto leading-relaxed">
            Nosso compromisso é velocidade e resultado. Conectamos seu número, inserimos o roteiro validado do seu nicho e colocamos para rodar. Se não estiver no ar em até 7 dias úteis, seu dinheiro é 100% devolvido.
          </p>

          <div className="pt-2 flex flex-wrap items-center justify-center gap-6 text-xs text-[#E5E7EB]">
            <span className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-[#A855F7]" /> Entrega expressa em 7 dias
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#22C55E]" /> Risco zero para a sua empresa
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

