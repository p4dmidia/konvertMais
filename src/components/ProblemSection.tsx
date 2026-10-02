import React from 'react';
import { Moon, Users, Clock, AlertCircle, Sparkles, MessageCircle, UserCheck } from 'lucide-react';

export const ProblemSection: React.FC = () => {
  return (
    <section className="py-20 bg-[#101018]/50 border-y border-[#242238]/50" id="dor">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 2. A dor */}
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <span className="text-xs uppercase tracking-widest font-semibold text-rose-500 bg-rose-500/10 px-3 py-1 rounded-full border border-rose-500/20">
            A Dor Comercial
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            O anúncio funciona. <span className="text-rose-500">A venda morre no WhatsApp.</span>
          </h2>
        </div>

        {/* 4 Pain Points Grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {/* Pain 1 */}
          <div className="bg-[#101018] border border-[#242238] hover:border-rose-500/40 p-6 rounded-2xl transition duration-300 group">
            <div className="w-12 h-12 rounded-xl bg-rose-500/10 text-rose-400 flex items-center justify-center text-xl mb-4 group-hover:scale-110 transition-transform">
              <Moon className="w-6 h-6" />
            </div>
            <h3 className="text-base font-bold text-white mb-2">Demora no primeiro contato</h3>
            <p className="text-sm text-[#9CA3AF] leading-relaxed">
              O lead chega às 22h e só recebe resposta no dia seguinte. A essa altura, já falou com o concorrente.
            </p>
          </div>

          {/* Pain 2 */}
          <div className="bg-[#101018] border border-[#242238] hover:border-rose-500/40 p-6 rounded-2xl transition duration-300 group">
            <div className="w-12 h-12 rounded-xl bg-rose-500/10 text-rose-400 flex items-center justify-center text-xl mb-4 group-hover:scale-110 transition-transform">
              <Users className="w-6 h-6" />
            </div>
            <h3 className="text-base font-bold text-white mb-2">Volume sem triagem</h3>
            <p className="text-sm text-[#9CA3AF] leading-relaxed">
              O vendedor responde os 10 primeiros e esquece o resto.
            </p>
          </div>

          {/* Pain 3 */}
          <div className="bg-[#101018] border border-[#242238] hover:border-rose-500/40 p-6 rounded-2xl transition duration-300 group">
            <div className="w-12 h-12 rounded-xl bg-rose-500/10 text-rose-400 flex items-center justify-center text-xl mb-4 group-hover:scale-110 transition-transform">
              <Clock className="w-6 h-6" />
            </div>
            <h3 className="text-base font-bold text-white mb-2">Falta de follow-up</h3>
            <p className="text-sm text-[#9CA3AF] leading-relaxed">
              Ninguém chama de volta quem disse "vou pensar" ou "só no dia 5".
            </p>
          </div>

          {/* Pain 4 */}
          <div className="bg-[#101018] border border-[#242238] hover:border-rose-500/40 p-6 rounded-2xl transition duration-300 group">
            <div className="w-12 h-12 rounded-xl bg-rose-500/10 text-rose-400 flex items-center justify-center text-xl mb-4 group-hover:scale-110 transition-transform">
              <AlertCircle className="w-6 h-6" />
            </div>
            <h3 className="text-base font-bold text-white mb-2">Abandono no checkout</h3>
            <p className="text-sm text-[#9CA3AF] leading-relaxed">
              O lead recebe o link de pagamento, trava no cadastro e ninguém pergunta o que aconteceu.
            </p>
          </div>
        </div>

        {/* Fecho: Cada lead perdido é dinheiro de anúncio jogado fora. */}
        <div className="mt-8 max-w-2xl mx-auto p-4 rounded-2xl bg-rose-500/10 border border-rose-500/30 text-center">
          <p className="text-base sm:text-lg font-bold text-rose-300">
            Fecho: Cada lead perdido é dinheiro de anúncio jogado fora.
          </p>
        </div>

        {/* 3. A virada */}
        <div className="mt-20 pt-16 border-t border-[#242238]/60">
          <div className="max-w-4xl mx-auto bg-gradient-to-br from-[#141422] to-[#101018] rounded-3xl border border-[#7C3AED]/40 p-8 sm:p-12 shadow-glow-purple relative overflow-hidden">
            <div className="text-center space-y-4">
              <span className="text-xs uppercase tracking-widest font-semibold text-[#A855F7] bg-[#7C3AED]/20 px-3.5 py-1.5 rounded-full border border-[#7C3AED]/30 inline-flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                A Virada
              </span>
              <h3 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
                Não é um robô de respostas prontas. <br className="hidden sm:inline" />
                <span className="text-gradient-purple">É o seu comercial funcionando sozinho.</span>
              </h3>
              <p className="text-base sm:text-lg text-[#E5E7EB] leading-relaxed max-w-3xl mx-auto font-normal">
                O agente conversa como uma pessoa, entende áudio, tira as dúvidas de sempre e conduz o lead até o pagamento ou até o seu vendedor. Quando alguém pede um humano, ele passa a conversa na hora.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 text-left">
                <div className="p-4 rounded-xl bg-white/5 border border-white/5 flex items-start gap-3">
                  <MessageCircle className="w-5 h-5 text-[#22C55E] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-white">Conversa como pessoa</h4>
                    <p className="text-xs text-[#9CA3AF] mt-0.5">Entende áudios e responde com linguagem natural.</p>
                  </div>
                </div>
                <div className="p-4 rounded-xl bg-white/5 border border-white/5 flex items-start gap-3">
                  <Sparkles className="w-5 h-5 text-[#A855F7] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-white">Conduz à venda</h4>
                    <p className="text-xs text-[#9CA3AF] mt-0.5">Tira dúvidas e entrega quem está pronto.</p>
                  </div>
                </div>
                <div className="p-4 rounded-xl bg-white/5 border border-white/5 flex items-start gap-3">
                  <UserCheck className="w-5 h-5 text-sky-400 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-white">Transbordo imediato</h4>
                    <p className="text-xs text-[#9CA3AF] mt-0.5">Pediu um humano? Passa a conversa na hora.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

