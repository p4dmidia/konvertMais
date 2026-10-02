import React, { useState } from 'react';
import { Calculator, ArrowRight, DollarSign, Users } from 'lucide-react';

interface RoiCalculatorSectionProps {
  onOpenCheckout: () => void;
}

export const RoiCalculatorSection: React.FC<RoiCalculatorSectionProps> = ({ onOpenCheckout }) => {
  const [dailyLeads, setDailyLeads] = useState<number>(20);
  const [ticketPrice, setTicketPrice] = useState<number>(250);

  // Math
  const monthlyLeads = dailyLeads * 30;
  // Estimated 35% of leads arrive off-hours or go cold due to delay
  const lostLeads = Math.round(monthlyLeads * 0.35);
  // Estimated 15% conversion of recovered leads
  const recoveredSales = Math.max(1, Math.round(lostLeads * 0.15));
  const recoveredRevenue = recoveredSales * ticketPrice;

  return (
    <section className="py-20 bg-[#101018]/30 border-t border-[#242238]/60" id="calculadora">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-[#101018] via-[#141422] to-[#0c0c14] border border-[#7C3AED]/40 rounded-3xl p-6 sm:p-10 shadow-2xl relative overflow-hidden">
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-10">
            <span className="text-xs uppercase tracking-widest font-semibold text-[#A855F7] bg-[#7C3AED]/10 px-3 py-1 rounded-full border border-[#7C3AED]/30 inline-flex items-center gap-1.5">
              <Calculator className="w-3.5 h-3.5" />
              Simulador de Retorno Comercial
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
              Calcule quanto dinheiro você pode resgatar todo mês
            </h2>
            <p className="text-sm text-[#9CA3AF]">
              Ajuste seus números e veja o impacto financeiro de responder cada cliente em menos de 15 segundos.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Sliders */}
            <div className="space-y-6 bg-black/30 p-6 rounded-2xl border border-white/5">
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-sm font-semibold text-white flex items-center gap-2">
                    <Users className="w-4 h-4 text-[#A855F7]" />
                    Leads recebidos por dia no WhatsApp:
                  </label>
                  <span className="text-lg font-bold text-[#A855F7] tabular-nums">{dailyLeads} leads/dia</span>
                </div>
                <input
                  type="range"
                  min="5"
                  max="150"
                  step="5"
                  value={dailyLeads}
                  onChange={(e) => setDailyLeads(Number(e.target.value))}
                  className="w-full h-2 bg-[#242238] rounded-lg appearance-none cursor-pointer accent-[#7C3AED]"
                />
                <div className="flex justify-between text-[11px] text-[#9CA3AF] mt-1">
                  <span>5/dia</span>
                  <span>75/dia</span>
                  <span>150/dia</span>
                </div>
              </div>

              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-sm font-semibold text-white flex items-center gap-2">
                    <DollarSign className="w-4 h-4 text-[#22C55E]" />
                    Ticket médio do seu produto ou serviço:
                  </label>
                  <span className="text-lg font-bold text-[#22C55E] tabular-nums">
                    {ticketPrice.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
                  </span>
                </div>
                <input
                  type="range"
                  min="50"
                  max="2500"
                  step="50"
                  value={ticketPrice}
                  onChange={(e) => setTicketPrice(Number(e.target.value))}
                  className="w-full h-2 bg-[#242238] rounded-lg appearance-none cursor-pointer accent-[#22C55E]"
                />
                <div className="flex justify-between text-[11px] text-[#9CA3AF] mt-1">
                  <span>R$ 50</span>
                  <span>R$ 1.250</span>
                  <span>R$ 2.500+</span>
                </div>
              </div>

              <div className="pt-2 text-xs text-[#9CA3AF] border-t border-white/5 space-y-1">
                <p>• Total mensal de oportunidades: <strong className="text-white">{monthlyLeads} contatos</strong></p>
                <p>• Oportunidades que esfriam sem resposta 24/7: <strong className="text-rose-400">~{lostLeads} leads</strong></p>
              </div>
            </div>

            {/* Result Box */}
            <div className="bg-[#101018] border-2 border-[#7C3AED] p-6 sm:p-8 rounded-2xl text-center space-y-5 shadow-glow-purple">
              <span className="text-xs uppercase tracking-wider font-semibold text-[#A855F7]">
                Estimativa de Faturamento Resgatado
              </span>
              <div>
                <p className="text-4xl sm:text-5xl font-black text-white tabular-nums tracking-tight">
                  {recoveredRevenue.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
                </p>
                <p className="text-xs text-[#22C55E] font-medium mt-1">
                  + ~{recoveredSales} vendas recuperadas no mês
                </p>
              </div>

              <p className="text-xs text-[#9CA3AF] leading-relaxed">
                Um único cliente recuperado à noite já paga a mensalidade da plataforma e gera lucro líquido direto para a sua operação.
              </p>

              <button
                onClick={onOpenCheckout}
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-[#7C3AED] to-[#A855F7] hover:opacity-95 shadow-glow-purple transition cursor-pointer"
              >
                <span>Descobrir o plano e começar agora</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
