import React from 'react';
import { Check, Sparkles, ArrowRight } from 'lucide-react';
import { NINA_WHATSAPP_URL } from '../data/mockData';

export const PricingSection: React.FC = () => {
  return (
    <section className="py-24 relative" id="precos">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Título e Subtítulo */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <span className="text-xs uppercase tracking-widest font-semibold text-[#A855F7] bg-[#7C3AED]/10 px-3.5 py-1.5 rounded-full border border-[#7C3AED]/30 inline-flex items-center gap-2">
            <Sparkles className="w-3.5 h-3.5" />
            Transparência Comercial
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Um plano. Você paga pelo que usa.
          </h2>
          <p className="text-[#9CA3AF] text-base sm:text-lg leading-relaxed">
            Todos os recursos estão no plano. O que muda de uma empresa para outra é quantas conversas a IA atende, e isso você controla com os créditos.
          </p>
        </div>

        {/* Cartão do plano (um só, centralizado) */}
        <div className="max-w-xl mx-auto mb-16">
          <div className="bg-[#101018] rounded-3xl border-2 border-[#7C3AED] shadow-glow-purple p-8 sm:p-10 flex flex-col justify-between transition-all duration-300 relative overflow-hidden">
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white">KonvertMais</h3>
                  <p className="text-xs sm:text-sm text-[#A855F7] font-semibold mt-1">Plano Completo</p>
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#22C55E] bg-[#22C55E]/15 px-3 py-1 rounded-full border border-[#22C55E]/30">
                  7 dias grátis
                </span>
              </div>

              <div className="border-y border-white/5 py-5">
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl sm:text-5xl font-black text-white tabular-nums">R$ 247</span>
                  <span className="text-[#9CA3AF] text-sm font-medium">/mês</span>
                </div>
                <p className="text-xs text-[#22C55E] mt-1 font-medium">Implantação grátis (de R$ 1.000 por R$ 0)</p>
              </div>

              {/* Lista de recursos */}
              <ul className="space-y-3.5 text-sm text-[#E5E7EB]">
                <li className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#22C55E]/20 text-[#22C55E] flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span>Créditos de IA para <strong>cerca de 200 conversas por mês</strong></span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#22C55E]/20 text-[#22C55E] flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span><strong>1 usuário</strong> no painel</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#22C55E]/20 text-[#22C55E] flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span><strong>1 número</strong> de WhatsApp</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#22C55E]/20 text-[#22C55E] flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span>Agente de IA, funil de vendas, caixa de entrada, retornos automáticos e agenda</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#22C55E]/20 text-[#22C55E] flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span>Instagram e Messenger</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#22C55E]/20 text-[#22C55E] flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span>Konvert Academy, com todas as telas explicadas</span>
                </li>
              </ul>

              {/* Destaque */}
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-center">
                <p className="text-xs sm:text-sm font-semibold text-[#E5E7EB] leading-relaxed">
                  7 dias grátis para testar · Sem fidelidade · Implantação grátis (de <span className="line-through text-[#9CA3AF]">R$ 1.000</span> por <strong className="text-[#22C55E]">R$ 0</strong>)
                </p>
              </div>
            </div>

            {/* Botão */}
            <div className="pt-8">
              <a
                href={NINA_WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="pulse-btn-green w-full inline-flex items-center justify-center gap-3 px-6 py-4 rounded-xl text-base font-bold text-white bg-gradient-to-r from-[#22C55E] to-emerald-600 hover:from-emerald-500 hover:to-emerald-700 shadow-glow-green transition-all hover:scale-[1.02] cursor-pointer"
              >
                <i className="fa-brands fa-whatsapp text-xl"></i>
                <span>Falar com a Nina e começar o teste</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Tabelas de Extras e Recarga lado a lado */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-8">
          {/* Extras quando precisar */}
          <div className="bg-[#101018] border border-[#242238] rounded-2xl p-6 space-y-4">
            <h4 className="text-base font-bold text-white">Extras, quando precisar:</h4>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm text-[#E5E7EB] border-collapse min-w-[240px]">
                <thead>
                  <tr className="border-b border-[#242238] text-xs uppercase tracking-wider text-[#9CA3AF]">
                    <th className="py-2.5 px-3">Extra</th>
                    <th className="py-2.5 px-3 text-right">Preço</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#242238]/60">
                  <tr>
                    <td className="py-3 px-3 text-[#E5E7EB]">Usuário a mais</td>
                    <td className="py-3 px-3 text-right font-semibold text-white whitespace-nowrap">R$ 19,90/mês</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-3 text-[#E5E7EB]">Número de WhatsApp a mais</td>
                    <td className="py-3 px-3 text-right font-semibold text-white whitespace-nowrap">R$ 29,90/mês</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Recarga de créditos */}
          <div className="bg-[#101018] border border-[#242238] rounded-2xl p-6 space-y-4">
            <h4 className="text-base font-bold text-white">
              Recarga de créditos <span className="text-xs text-[#9CA3AF] font-normal">(quanto maior a recarga, maior o bônus):</span>
            </h4>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm text-[#E5E7EB] border-collapse min-w-[240px]">
                <thead>
                  <tr className="border-b border-[#242238] text-xs uppercase tracking-wider text-[#9CA3AF]">
                    <th className="py-2.5 px-3">Recarga</th>
                    <th className="py-2.5 px-3 text-right">Bônus</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#242238]/60">
                  <tr>
                    <td className="py-2.5 px-3 text-[#E5E7EB]">R$ 50</td>
                    <td className="py-2.5 px-3 text-right text-[#9CA3AF]">—</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 px-3 text-[#E5E7EB]">R$ 100</td>
                    <td className="py-2.5 px-3 text-right text-[#9CA3AF]">—</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 px-3 text-[#E5E7EB]">R$ 300</td>
                    <td className="py-2.5 px-3 text-right font-semibold text-[#22C55E]">+5%</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 px-3 text-[#E5E7EB]">R$ 500</td>
                    <td className="py-2.5 px-3 text-right font-semibold text-[#22C55E]">+8%</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 px-3 text-[#E5E7EB]">R$ 1.000</td>
                    <td className="py-2.5 px-3 text-right font-semibold text-[#22C55E]">+10%</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 px-3 text-[#E5E7EB]">R$ 3.000</td>
                    <td className="py-2.5 px-3 text-right font-semibold text-[#22C55E]">+15%</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Texto sob as tabelas */}
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-xs sm:text-sm text-[#9CA3AF] leading-relaxed">
            Uma conversa simples usa cerca de R$ 0,30 em créditos. Os créditos que sobram passam para o mês seguinte, e o painel avisa antes do saldo acabar.
          </p>
        </div>
      </div>
    </section>
  );
};
