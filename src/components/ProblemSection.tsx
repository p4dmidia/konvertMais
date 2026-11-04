import React from 'react';
import { Clock, Users, Repeat, UserX, MessageCircle, ShieldAlert, ArrowRight, Sparkles } from 'lucide-react';
import { NINA_WHATSAPP_URL } from '../data/mockData';

export const ProblemSection: React.FC = () => {
  return (
    <section className="py-20 bg-[#101018]/50 border-y border-[#242238]/50" id="ja-tenho-leads">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Topo da seção: A dor */}
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <span className="text-xs uppercase tracking-widest font-semibold text-[#A855F7] bg-[#7C3AED]/15 px-3.5 py-1.5 rounded-full border border-[#7C3AED]/30 inline-block">
            Já tenho leads
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            O anúncio funciona. <span className="text-rose-500">A venda se perde no WhatsApp.</span>
          </h2>
          <p className="text-base sm:text-lg text-[#9CA3AF] max-w-2xl mx-auto leading-relaxed">
            Você paga por cada contato, mas ele chega às 22h e só recebe resposta no dia seguinte. A essa altura, já falou com o concorrente.
          </p>
        </div>

        {/* Quatro cartões de dor */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {/* Dor 1 */}
          <div className="bg-[#101018] border border-[#242238] hover:border-rose-500/40 p-6 rounded-2xl transition duration-300 flex flex-col justify-between group">
            <div>
              <div className="w-12 h-12 rounded-xl bg-rose-500/10 text-rose-400 flex items-center justify-center text-xl mb-4 group-hover:scale-110 transition-transform">
                <Clock className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-white mb-2">Demora no primeiro contato.</h3>
              <p className="text-sm text-[#9CA3AF] leading-relaxed">
                Quem espera horas por resposta compra de quem respondeu primeiro.
              </p>
            </div>
          </div>

          {/* Dor 2 */}
          <div className="bg-[#101018] border border-[#242238] hover:border-rose-500/40 p-6 rounded-2xl transition duration-300 flex flex-col justify-between group">
            <div>
              <div className="w-12 h-12 rounded-xl bg-rose-500/10 text-rose-400 flex items-center justify-center text-xl mb-4 group-hover:scale-110 transition-transform">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-white mb-2">Volume sem triagem.</h3>
              <p className="text-sm text-[#9CA3AF] leading-relaxed">
                O vendedor responde os primeiros da fila e o resto esfria.
              </p>
            </div>
          </div>

          {/* Dor 3 */}
          <div className="bg-[#101018] border border-[#242238] hover:border-rose-500/40 p-6 rounded-2xl transition duration-300 flex flex-col justify-between group">
            <div>
              <div className="w-12 h-12 rounded-xl bg-rose-500/10 text-rose-400 flex items-center justify-center text-xl mb-4 group-hover:scale-110 transition-transform">
                <Repeat className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-white mb-2">Ninguém faz o retorno.</h3>
              <p className="text-sm text-[#9CA3AF] leading-relaxed">
                Quem disse "vou pensar" nunca mais é chamado.
              </p>
            </div>
          </div>

          {/* Dor 4 */}
          <div className="bg-[#101018] border border-[#242238] hover:border-rose-500/40 p-6 rounded-2xl transition duration-300 flex flex-col justify-between group">
            <div>
              <div className="w-12 h-12 rounded-xl bg-rose-500/10 text-rose-400 flex items-center justify-center text-xl mb-4 group-hover:scale-110 transition-transform">
                <UserX className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-white mb-2">Vendedor gastando tempo com curioso.</h3>
              <p className="text-sm text-[#9CA3AF] leading-relaxed">
                Quem só queria saber o preço ocupa o lugar de quem queria comprar.
              </p>
            </div>
          </div>
        </div>

        {/* Frase de fechamento */}
        <div className="mt-8 max-w-2xl mx-auto p-4 rounded-2xl bg-rose-500/10 border border-rose-500/30 text-center">
          <p className="text-base sm:text-lg font-bold text-rose-300">
            Cada contato sem resposta é dinheiro de anúncio jogado fora.
          </p>
        </div>

        {/* A virada: A IA atende primeiro. Seu time fecha. */}
        <div className="mt-20 pt-16 border-t border-[#242238]/60">
          <div className="max-w-4xl mx-auto bg-gradient-to-br from-[#141422] to-[#101018] rounded-3xl border border-[#7C3AED]/40 p-8 sm:p-12 shadow-glow-purple relative overflow-hidden">
            <div className="text-center space-y-4">
              <span className="text-xs uppercase tracking-widest font-semibold text-[#A855F7] bg-[#7C3AED]/20 px-3.5 py-1.5 rounded-full border border-[#7C3AED]/30 inline-flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                A Solução
              </span>
              <h3 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
                A IA atende primeiro. <span className="text-gradient-purple">Seu time fecha.</span>
              </h3>
              <p className="text-base sm:text-lg text-[#E5E7EB] leading-relaxed max-w-3xl mx-auto font-normal">
                Cerca de 80% de quem chama ainda não está pronto para comprar. O KonvertMais conversa com todos, tira as dúvidas com base no material da sua empresa, faz as perguntas certas e passa para o seu vendedor os 20% que querem fechar, com um resumo do que já foi conversado. A IA não substitui o seu time: ela tira os curiosos da frente.
              </p>

              {/* Três cartões */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 text-left">
                <div className="p-5 rounded-xl bg-white/5 border border-white/5 flex flex-col justify-between">
                  <div>
                    <div className="w-10 h-10 rounded-lg bg-[#22C55E]/15 text-[#22C55E] flex items-center justify-center mb-3">
                      <MessageCircle className="w-5 h-5" />
                    </div>
                    <h4 className="text-sm font-bold text-white">Conversa como gente.</h4>
                    <p className="text-xs text-[#9CA3AF] mt-1 leading-relaxed">
                      Entende áudio, responde em mensagens curtas e não tem menu de "digite 1".
                    </p>
                  </div>
                </div>

                <div className="p-5 rounded-xl bg-white/5 border border-white/5 flex flex-col justify-between">
                  <div>
                    <div className="w-10 h-10 rounded-lg bg-[#A855F7]/15 text-[#A855F7] flex items-center justify-center mb-3">
                      <ShieldAlert className="w-5 h-5" />
                    </div>
                    <h4 className="text-sm font-bold text-white">Não inventa.</h4>
                    <p className="text-xs text-[#9CA3AF] mt-1 leading-relaxed">
                      Responde só com o que está no material da empresa. Quando não sabe, chama uma pessoa.
                    </p>
                  </div>
                </div>

                <div className="p-5 rounded-xl bg-white/5 border border-white/5 flex flex-col justify-between">
                  <div>
                    <div className="w-10 h-10 rounded-lg bg-[#22C55E]/15 text-[#22C55E] flex items-center justify-center mb-3">
                      <Sparkles className="w-5 h-5" />
                    </div>
                    <h4 className="text-sm font-bold text-white">Passa na hora certa.</h4>
                    <p className="text-xs text-[#9CA3AF] mt-1 leading-relaxed">
                      Pediu um humano, reclamou ou está pronto para fechar: a conversa vai para o seu time.
                    </p>
                  </div>
                </div>
              </div>

              {/* Botão */}
              <div className="pt-6">
                <a
                  href={NINA_WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="pulse-btn-green inline-flex items-center gap-3 px-8 py-4 rounded-xl text-base font-bold text-white bg-gradient-to-r from-[#22C55E] to-emerald-600 hover:from-emerald-500 hover:to-emerald-700 shadow-glow-green transition hover:scale-105 cursor-pointer"
                >
                  <i className="fa-brands fa-whatsapp text-xl"></i>
                  <span>Ver a IA atendendo no meu WhatsApp</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
