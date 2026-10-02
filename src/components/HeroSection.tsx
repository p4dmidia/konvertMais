import React, { useState } from 'react';
import { Play, Pause, CheckCheck, TrendingUp, Sparkles, Check, Phone, MoreVertical } from 'lucide-react';

interface HeroSectionProps {
  onOpenDiagnostic: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenDiagnostic }) => {
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);

  return (
    <section className="relative pt-10 pb-20 md:pt-16 md:pb-28 overflow-hidden" id="hero">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Hero Left Column: Copy & Actions */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-6">
            {/* Badge Glow Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#7C3AED]/10 border border-[#7C3AED]/30 text-[#A855F7] text-xs md:text-sm font-medium">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#A855F7] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#7C3AED]"></span>
              </span>
              <span>⚡ Nenhum lead morre no WhatsApp</span>
            </div>

            {/* Main Headline (Copy exata do PDF) */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.12]">
              Você paga pelo lead. <br className="hidden sm:inline" />
              <span className="text-gradient-purple">Quem está respondendo ele?</span>
            </h1>

            {/* Subheadline (Copy exata do PDF) */}
            <p className="text-base sm:text-lg text-[#9CA3AF] max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
              O <strong className="text-white font-semibold">Konvert Mais</strong> coloca um agente de IA no WhatsApp da sua empresa. Ele responde em 1 minuto, 24 horas por dia, qualifica, faz o follow-up e entrega para o seu time só quem está pronto para comprar.
            </p>

            {/* CTA Buttons & Sub-button copy */}
            <div className="pt-2 space-y-3">
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <button
                  onClick={onOpenDiagnostic}
                  className="pulse-btn-green w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl text-base font-bold text-white bg-gradient-to-r from-[#22C55E] to-emerald-600 hover:from-emerald-500 hover:to-emerald-700 shadow-glow-green transition-all duration-200 hover:scale-[1.02] cursor-pointer"
                >
                  <i className="fa-brands fa-whatsapp text-2xl"></i>
                  <span>Quero meu diagnóstico gratuito</span>
                </button>
                <a
                  href="#demonstracao"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl text-sm font-semibold text-white bg-[#101018] border border-[#242238] hover:border-[#7C3AED]/50 transition cursor-pointer"
                >
                  <Sparkles className="w-4 h-4 text-[#A855F7]" />
                  <span>Ver conversa com o agente</span>
                </a>
              </div>

              {/* Abaixo do botão (Texto exato do PDF) */}
              <p className="text-xs sm:text-sm text-[#9CA3AF] font-medium pt-1">
                Para empresas de consórcio, seguros, planos e assinaturas · Planos a partir de <strong className="text-white">R$ 997/mês</strong>
              </p>

              {/* Badges de garantia */}
              <div className="text-xs text-[#9CA3AF] flex flex-wrap items-center justify-center lg:justify-start gap-y-1 gap-x-4 pt-2 border-t border-white/5">
                <span className="flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-[#22C55E]" /> Sem taxa de implantação
                </span>
                <span className="flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-[#22C55E]" /> No ar em até 7 dias
                </span>
                <span className="flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-[#22C55E]" /> Modelo pronto do seu nicho
                </span>
              </div>
            </div>

            {/* Stats Bar Minimal */}
            <div className="pt-6 border-t border-[#242238]/70 grid grid-cols-3 gap-4 max-w-lg mx-auto lg:mx-0">
              <div>
                <p className="text-2xl font-extrabold text-[#22C55E] tabular-nums">1 min</p>
                <p className="text-xs text-[#9CA3AF]">Tempo de resposta</p>
              </div>
              <div>
                <p className="text-2xl font-extrabold text-[#A855F7]">24/7</p>
                <p className="text-xs text-[#9CA3AF]">Noite e fim de semana</p>
              </div>
              <div>
                <p className="text-2xl font-extrabold text-white tabular-nums">100%</p>
                <p className="text-xs text-[#9CA3AF]">Leads atendidos e no CRM</p>
              </div>
            </div>
          </div>

          {/* Hero Right Column: Device Mockup */}
          <div className="lg:col-span-5 relative flex justify-center">
            {/* Smartphone Realistic Frame */}
            <div className="relative w-full max-w-[340px] bg-[#111116] rounded-[42px] p-3.5 border-2 border-[#242238] shadow-glow-purple-lg">
              {/* Notch */}
              <div className="absolute top-5 left-1/2 -translate-x-1/2 w-28 h-4 bg-black rounded-full z-20 flex items-center justify-center">
                <div className="w-2.5 h-2.5 rounded-full bg-[#1e1e24] ml-auto mr-3"></div>
              </div>

              {/* Screen Container */}
              <div className="relative bg-[#0d0f12] rounded-[34px] overflow-hidden border border-white/5 pt-8 pb-4 text-xs font-sans">
                {/* Chat App Header */}
                <div className="px-4 py-2.5 bg-[#17191f] border-b border-white/5 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-full bg-[#7C3AED] flex items-center justify-center text-white font-bold text-xs shadow-sm">
                      K
                    </div>
                    <div>
                      <div className="flex items-center gap-1.5">
                        <span className="font-semibold text-white text-xs">Nacional Consórcios • IA</span>
                        <i className="fa-solid fa-circle-check text-[#A855F7] text-[11px]"></i>
                      </div>
                      <p className="text-[10px] text-[#22C55E] font-medium flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#22C55E]"></span> Online 24h
                      </p>
                    </div>
                  </div>
                  <div className="text-[#9CA3AF] text-xs flex gap-3">
                    <Phone className="w-3.5 h-3.5" />
                    <MoreVertical className="w-3.5 h-3.5" />
                  </div>
                </div>

                {/* Chat Feed */}
                <div className="p-3.5 space-y-3 min-h-[360px] flex flex-col justify-end bg-gradient-to-b from-[#0d0f12] via-[#0d0f12] to-[#12131a]">
                  {/* Time tag */}
                  <div className="text-center">
                    <span className="text-[10px] bg-white/5 text-[#9CA3AF] px-2 py-0.5 rounded-md">Hoje • 22:15</span>
                  </div>

                  {/* Client Audio Message */}
                  <div className="flex justify-end">
                    <div className="bg-[#1f2c34] text-white p-2.5 rounded-2xl rounded-tr-none max-w-[85%] border border-white/5 space-y-1">
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => setIsPlayingAudio(!isPlayingAudio)}
                          className="w-6 h-6 rounded-full bg-[#22C55E] flex items-center justify-center text-white text-[10px] hover:scale-105 transition cursor-pointer"
                        >
                          {isPlayingAudio ? <Pause className="w-3 h-3" /> : <Play className="w-3 h-3 ml-0.5" />}
                        </button>
                        <div className="w-24 h-4 flex items-center gap-0.5">
                          <span className={`w-1 h-3 rounded-full ${isPlayingAudio ? 'bg-[#22C55E] animate-pulse' : 'bg-[#9CA3AF]'}`}></span>
                          <span className={`w-1 h-5 rounded-full ${isPlayingAudio ? 'bg-white animate-bounce' : 'bg-white'}`}></span>
                          <span className="w-1 h-2 bg-[#9CA3AF] rounded-full"></span>
                          <span className="w-1 h-4 bg-white rounded-full"></span>
                          <span className="w-1 h-6 bg-[#22C55E] rounded-full"></span>
                          <span className="w-1 h-3 bg-[#9CA3AF] rounded-full"></span>
                          <span className="w-1 h-5 bg-white rounded-full"></span>
                        </div>
                        <span className="text-[9px] text-[#9CA3AF]">0:12</span>
                      </div>
                      <p className="text-[10px] text-gray-300">"Quanto fica a parcela da carta de 250 mil?"</p>
                      <div className="text-[9px] text-right text-[#9CA3AF] flex items-center justify-end gap-1">
                        <span>22:15</span>
                        <CheckCheck className="w-3 h-3 text-sky-400" />
                      </div>
                    </div>
                  </div>

                  {/* AI Fast Answer Tag */}
                  <div className="flex items-center justify-center gap-1.5 py-0.5">
                    <span className="text-[9px] font-semibold text-[#A855F7] bg-[#7C3AED]/20 px-2 py-0.5 rounded-full border border-[#7C3AED]/30">
                      ⚡ Respondeu em 1 minuto
                    </span>
                  </div>

                  {/* Agent Immediate Reply */}
                  <div className="flex justify-start">
                    <div className="bg-[#242238]/70 text-white p-2.5 rounded-2xl rounded-tl-none max-w-[88%] border border-[#7C3AED]/20 space-y-1">
                      <p className="text-[11px] leading-relaxed">
                        Boa noite! Tudo bem? Aqui é o consultor virtual da Nacional 😊 Para carta de R$ 250 mil, temos opções a partir de R$ 1.390/mês.
                      </p>
                      <span className="text-[9px] block text-right text-[#9CA3AF]">22:16</span>
                    </div>
                  </div>

                  {/* Client Response */}
                  <div className="flex justify-end">
                    <div className="bg-[#1f2c34] text-white px-3 py-1.5 rounded-2xl rounded-tr-none text-[11px]">
                      Tenho 45 mil de FGTS pra lance.
                      <span className="text-[9px] ml-2 text-[#9CA3AF]">22:17</span>
                    </div>
                  </div>

                  {/* Agent Follow-up and Qualification */}
                  <div className="flex justify-start">
                    <div className="bg-[#242238]/70 text-white p-2.5 rounded-2xl rounded-tl-none max-w-[92%] border border-[#7C3AED]/20 space-y-1">
                      <p className="text-[11px] leading-relaxed">
                        Excelente! Seu lance fica na média histórica de contemplação rápida. Nosso consultor Roberto pode te apresentar a simulação amanhã às 10h ou 15h?
                      </p>
                      <span className="text-[9px] block text-right text-[#9CA3AF]">22:18</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Metric Card Over Mockup */}
              <div className="float-card absolute -bottom-6 -left-6 bg-[#101018]/95 border border-[#7C3AED]/40 p-3.5 rounded-2xl shadow-glow-purple backdrop-blur-md flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#7C3AED]/20 border border-[#7C3AED]/40 flex items-center justify-center text-[#A855F7]">
                  <TrendingUp className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[11px] text-[#9CA3AF]">Qualificação &amp; Agendamento</p>
                  <p className="text-sm font-bold text-white flex items-center gap-1.5">
                    Lead pronto para fechar
                    <i className="fa-solid fa-check text-[#22C55E] text-xs"></i>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

