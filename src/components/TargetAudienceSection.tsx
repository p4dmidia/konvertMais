import React from 'react';
import { CheckCircle2, XCircle } from 'lucide-react';

export const TargetAudienceSection: React.FC = () => {
  return (
    <section className="py-20 bg-[#101018]/40 border-y border-[#242238]/60" id="para-quem-e">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <span className="text-xs uppercase tracking-widest font-semibold text-[#A855F7] bg-[#7C3AED]/10 px-3 py-1 rounded-full border border-[#7C3AED]/30">
            Perfil Ideal
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Para quem é
          </h2>
          <p className="text-[#9CA3AF] text-base sm:text-lg">
            O Konvert Mais foi desenhado especificamente para negócios que investem em anúncios e vendem por contrato ou assinatura.
          </p>
        </div>

        {/* 2 Column Comparison: É para você / Não é para você */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* É para você se: */}
          <div className="p-8 rounded-3xl bg-[#101018] border border-[#22C55E]/40 shadow-glow-green/10 space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#22C55E]/20 text-[#22C55E] flex items-center justify-center text-xl">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white">É para você se:</h3>
            </div>

            <ul className="space-y-4 text-sm sm:text-base text-[#E5E7EB]">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#22C55E] shrink-0 mt-0.5" />
                <span>
                  Você vende <strong>consórcio, seguro, plano funerário, plano de saúde, assinatura</strong> ou outro produto por contrato.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#22C55E] shrink-0 mt-0.5" />
                <span>
                  Já <strong>investe em anúncio</strong> e recebe pelo menos <strong>20 leads por dia</strong> no WhatsApp.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#22C55E] shrink-0 mt-0.5" />
                <span>
                  Seu time <strong>não dá conta</strong> de responder todo mundo rápido.
                </span>
              </li>
            </ul>
          </div>

          {/* Não é para você se: */}
          <div className="p-8 rounded-3xl bg-[#101018] border border-rose-500/40 space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-rose-500/20 text-rose-400 flex items-center justify-center text-xl">
                <XCircle className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white">Não é para você se:</h3>
            </div>

            <ul className="space-y-4 text-sm sm:text-base text-[#9CA3AF]">
              <li className="flex items-start gap-3">
                <XCircle className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" />
                <span>
                  Ainda não gera leads e não investe em tráfego ou anúncios para o WhatsApp.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <XCircle className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" />
                <span>
                  Procura apenas uma ferramenta barata para tentar configurar e programar sozinho.
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Tag */}
        <div className="mt-10 text-center">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-[#7C3AED]/10 border border-[#7C3AED]/30 text-white font-medium text-sm sm:text-base">
            <i className="fa-brands fa-whatsapp text-[#22C55E] text-lg"></i>
            <span>
              Entregamos o agente pronto e testado com o <strong>modelo validado do seu nicho</strong>.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

