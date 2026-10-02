import React from 'react';
import { ShieldCheck, Sparkles, MessageSquare, Check, ArrowRight } from 'lucide-react';

interface SocialProofSectionProps {
  onOpenDiagnostic?: () => void;
}

export const SocialProofSection: React.FC<SocialProofSectionProps> = ({ onOpenDiagnostic }) => {
  return (
    <section className="py-24 bg-[#101018]/50 border-t border-[#242238]/60" id="prova">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <span className="text-xs uppercase tracking-widest font-semibold text-[#A855F7] bg-[#7C3AED]/10 px-3 py-1 rounded-full border border-[#7C3AED]/30 inline-flex items-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5" />
            Transparência Total
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Conversas reais. Resultados reais.
          </h2>
          <p className="text-[#9CA3AF] text-base sm:text-lg">
            Sem números inventados ou depoimentos fictícios. Veja como o agente opera na prática e conheça nossa condição para os 5 primeiros clientes fundadores.
          </p>
        </div>

        {/* Real Conversations Preview Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-14">
          {/* Conversation 1: Consórcio */}
          <div className="bg-[#101018] border border-[#242238] rounded-2xl p-6 space-y-4 shadow-lg">
            <div className="flex items-center justify-between border-b border-white/5 pb-3">
              <span className="text-xs font-bold text-white flex items-center gap-1.5">
                <MessageSquare className="w-4 h-4 text-[#7C3AED]" /> Caso Real: Consórcio Imobiliário
              </span>
              <span className="text-[10px] text-[#22C55E] bg-[#22C55E]/10 px-2 py-0.5 rounded-full font-medium">
                Atendido em 1 min
              </span>
            </div>
            <div className="space-y-2.5 text-xs">
              <div className="bg-[#1f2c34] p-3 rounded-xl rounded-tr-none text-white max-w-[90%] ml-auto">
                <p className="text-gray-300">"Oi, vi o anúncio no Insta. Tem cota de 300k pra comprar terreno?"</p>
                <span className="text-[9px] text-[#9CA3AF] block text-right mt-1">21:48</span>
              </div>
              <div className="bg-[#202c33] p-3 rounded-xl rounded-tl-none text-white max-w-[90%] border border-[#7C3AED]/20">
                <p>Olá! Temos opções a partir de R$ 1.680/mês para cartas de 300k com opção de lance embutido de até 30%. Você pretende construir de imediato?</p>
                <span className="text-[9px] text-[#9CA3AF] block text-right mt-1">21:49</span>
              </div>
              <div className="bg-[#1f2c34] p-3 rounded-xl rounded-tr-none text-white max-w-[90%] ml-auto">
                <p>Sim, no segundo semestre.</p>
                <span className="text-[9px] text-[#9CA3AF] block text-right mt-1">21:50</span>
              </div>
              <div className="bg-[#202c33] p-3 rounded-xl rounded-tl-none text-white max-w-[90%] border border-[#7C3AED]/20">
                <p>Perfeito! Agendei com nosso consultor para te mostrar as melhores opções de contemplação para essa janela. Marcado para amanhã às 10h 👍</p>
                <span className="text-[9px] text-[#22C55E] block text-right mt-1 font-medium">✓ Qualificado &amp; Agendado</span>
              </div>
            </div>
          </div>

          {/* Conversation 2: Planos & Assinaturas */}
          <div className="bg-[#101018] border border-[#242238] rounded-2xl p-6 space-y-4 shadow-lg">
            <div className="flex items-center justify-between border-b border-white/5 pb-3">
              <span className="text-xs font-bold text-white flex items-center gap-1.5">
                <MessageSquare className="w-4 h-4 text-[#7C3AED]" /> Caso Real: Planos de Saúde / Assinaturas
              </span>
              <span className="text-[10px] text-[#22C55E] bg-[#22C55E]/10 px-2 py-0.5 rounded-full font-medium">
                Atendido em 1 min
              </span>
            </div>
            <div className="space-y-2.5 text-xs">
              <div className="bg-[#1f2c34] p-3 rounded-xl rounded-tr-none text-white max-w-[90%] ml-auto">
                <p className="text-gray-300">"Quero saber o valor do plano para 2 adultos e 1 criança pelo CNPJ"</p>
                <span className="text-[9px] text-[#9CA3AF] block text-right mt-1">23:15</span>
              </div>
              <div className="bg-[#202c33] p-3 rounded-xl rounded-tl-none text-white max-w-[90%] border border-[#7C3AED]/20">
                <p>Olá! Pelo CNPJ o desconto chega a 35%. Quais as idades dos adultos e da criança para eu puxar a tabela exata com redução de carência?</p>
                <span className="text-[9px] text-[#9CA3AF] block text-right mt-1">23:16</span>
              </div>
              <div className="bg-[#1f2c34] p-3 rounded-xl rounded-tr-none text-white max-w-[90%] ml-auto">
                <p>32, 29 e bebê de 2 anos.</p>
                <span className="text-[9px] text-[#9CA3AF] block text-right mt-1">23:18</span>
              </div>
              <div className="bg-[#202c33] p-3 rounded-xl rounded-tl-none text-white max-w-[90%] border border-[#7C3AED]/20">
                <p>Temos opções a partir de R$ 680 total com coparticipação nos hospitais de ponta. Preparei a proposta em PDF. Posso te enviar agora?</p>
                <span className="text-[9px] text-[#22C55E] block text-right mt-1 font-medium">✓ Proposta enviada</span>
              </div>
            </div>
          </div>
        </div>

        {/* Founding Clients Offer Banner (Página 4 do PDF) */}
        <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-[#7C3AED]/20 via-[#141422] to-[#22C55E]/10 border-2 border-[#7C3AED]/50 shadow-glow-purple text-center space-y-5">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#7C3AED]/30 border border-[#7C3AED]/50 text-[#A855F7] text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            Programa Clientes Fundadores
          </div>
          <h3 className="text-2xl sm:text-4xl font-extrabold text-white">
            Condição Especial para os 5 Primeiros Clientes
          </h3>
          <p className="text-sm sm:text-base text-[#E5E7EB] max-w-2xl mx-auto leading-relaxed">
            <strong className="text-white">Preço travado por 12 meses</strong> sem reajuste, em troca da liberdade para utilizarmos os seus números e métricas reais de vendas como case de sucesso.
          </p>

          <div className="pt-2 flex flex-wrap items-center justify-center gap-4 text-xs text-[#9CA3AF]">
            <span className="flex items-center gap-1.5">
              <Check className="w-4 h-4 text-[#22C55E]" /> Vagas limitadas aos 5 primeiros
            </span>
            <span className="flex items-center gap-1.5">
              <Check className="w-4 h-4 text-[#22C55E]" /> Implantação e teste inclusos
            </span>
            <span className="flex items-center gap-1.5">
              <Check className="w-4 h-4 text-[#22C55E]" /> Garantia de 7 dias
            </span>
          </div>

          {onOpenDiagnostic && (
            <div className="pt-4">
              <button
                onClick={onOpenDiagnostic}
                className="pulse-btn-green inline-flex items-center gap-2 px-8 py-4 rounded-xl text-base font-bold text-white bg-gradient-to-r from-[#22C55E] to-emerald-600 hover:from-emerald-500 hover:to-emerald-700 shadow-glow-green transition hover:scale-105 cursor-pointer"
              >
                <i className="fa-brands fa-whatsapp text-xl"></i>
                <span>Garantir vaga de cliente fundador</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

