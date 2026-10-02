import React, { useState } from 'react';
import { DollarSign, Clock, Users, ArrowRight, ShieldAlert, Sparkles } from 'lucide-react';

interface ComparisonSectionProps {
  onOpenDiagnostic?: () => void;
}

export const ComparisonSection: React.FC<ComparisonSectionProps> = ({ onOpenDiagnostic }) => {
  const [contractValue, setContractValue] = useState<number>(1800);
  const [lostSalesEstimate, setLostSalesEstimate] = useState<number>(4);

  const lostMonthlyRevenue = contractValue * lostSalesEstimate;

  return (
    <section className="py-24 bg-[#101018]/60 border-t border-[#242238]/60" id="a-conta">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <span className="text-xs uppercase tracking-widest font-semibold text-[#22C55E] bg-[#22C55E]/10 px-3.5 py-1.5 rounded-full border border-[#22C55E]/30 inline-flex items-center gap-1.5">
            <DollarSign className="w-3.5 h-3.5" />
            A Conta
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Uma venda a mais por mês já paga o Konvert.
          </h2>
          <p className="text-base sm:text-lg text-[#9CA3AF] max-w-2xl mx-auto leading-relaxed">
            Um atendente custa de <strong className="text-white">R$ 2.500 a R$ 4.000 por mês</strong>, trabalha 8 horas e falta. O agente atende <strong className="text-[#22C55E]">24 horas, todos os dias, a partir de R$ 997</strong>. Se o seu cliente vale o valor do contrato, quantas vendas você perde hoje por demora?
          </p>
        </div>

        {/* Comparison Cards: Atendente Humano vs Agente Konvert */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Card Atendente */}
          <div className="p-8 rounded-3xl bg-[#101018] border border-[#242238] space-y-5">
            <div className="flex items-center justify-between border-b border-white/5 pb-4">
              <div>
                <h3 className="text-lg font-bold text-white">Atendente Humano</h3>
                <p className="text-xs text-[#9CA3AF]">Operação tradicional de atendimento</p>
              </div>
              <span className="text-xs font-semibold text-rose-400 bg-rose-500/10 px-2.5 py-1 rounded-full border border-rose-500/20">
                Custo Elevado
              </span>
            </div>

            <ul className="space-y-3.5 text-sm text-[#9CA3AF]">
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-rose-500 shrink-0"></span>
                <span>Custa de <strong>R$ 2.500 a R$ 4.000/mês</strong> por atendente (salário + encargos)</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-rose-500 shrink-0"></span>
                <span>Trabalha apenas 8h por dia, de segunda a sexta</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-rose-500 shrink-0"></span>
                <span>Está sujeito a faltas, atestados e cansaço</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-rose-500 shrink-0"></span>
                <span>Atende 1 lead por vez, criando filas de espera</span>
              </li>
            </ul>
          </div>

          {/* Card Konvert Mais */}
          <div className="p-8 rounded-3xl bg-gradient-to-br from-[#141422] to-[#101018] border-2 border-[#7C3AED] shadow-glow-purple space-y-5">
            <div className="flex items-center justify-between border-b border-[#7C3AED]/30 pb-4">
              <div>
                <h3 className="text-lg font-bold text-white flex items-center gap-2">
                  Agente Konvert Mais
                  <Sparkles className="w-4 h-4 text-[#A855F7]" />
                </h3>
                <p className="text-xs text-[#22C55E]">Comercial funcionando sozinho</p>
              </div>
              <span className="text-xs font-bold text-white bg-[#7C3AED] px-3 py-1 rounded-full shadow-sm">
                A partir de R$ 997/mês
              </span>
            </div>

            <ul className="space-y-3.5 text-sm text-[#E5E7EB]">
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-[#22C55E] shrink-0"></span>
                <span>Investimento fixo sem encargos trabalhistas</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-[#22C55E] shrink-0"></span>
                <span>Atende <strong>24 horas, todos os dias</strong>, feriados e madrugadas</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-[#22C55E] shrink-0"></span>
                <span>Nunca falta e mantém sempre o roteiro comercial do nicho</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-[#22C55E] shrink-0"></span>
                <span>Atende múltiplos leads simultaneamente em cerca de 1 minuto</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Interactive Contract Value Calculator */}
        <div className="p-6 sm:p-8 rounded-3xl bg-[#141422] border border-[#7C3AED]/30 max-w-4xl mx-auto space-y-6">
          <div className="text-center space-y-1">
            <h4 className="text-base sm:text-lg font-bold text-white">
              Faça a conta para o seu negócio:
            </h4>
            <p className="text-xs text-[#9CA3AF]">
              Quanto vale o seu contrato e quantas vendas você perde por demora no WhatsApp?
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
            <div className="space-y-2">
              <label className="text-xs font-semibold text-[#9CA3AF] flex justify-between">
                <span>Valor médio do contrato / LTV:</span>
                <span className="text-white font-bold">R$ {contractValue.toLocaleString('pt-BR')}</span>
              </label>
              <input
                type="range"
                min="300"
                max="10000"
                step="100"
                value={contractValue}
                onChange={(e) => setContractValue(Number(e.target.value))}
                className="w-full h-2 bg-[#242238] rounded-lg appearance-none cursor-pointer accent-[#7C3AED]"
              />
            </div>

            <div className="space-y-2">
              <label className="text-xs font-semibold text-[#9CA3AF] flex justify-between">
                <span>Vendas perdidas por mês por demora de resposta:</span>
                <span className="text-rose-400 font-bold">{lostSalesEstimate} vendas/mês</span>
              </label>
              <input
                type="range"
                min="1"
                max="20"
                step="1"
                value={lostSalesEstimate}
                onChange={(e) => setLostSalesEstimate(Number(e.target.value))}
                className="w-full h-2 bg-[#242238] rounded-lg appearance-none cursor-pointer accent-rose-500"
              />
            </div>
          </div>

          <div className="pt-4 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
            <div>
              <p className="text-xs text-[#9CA3AF]">Dinheiro deixado na mesa todos os meses:</p>
              <p className="text-2xl sm:text-3xl font-black text-rose-400 tabular-nums">
                R$ {lostMonthlyRevenue.toLocaleString('pt-BR')}/mês
              </p>
            </div>
            {onOpenDiagnostic && (
              <button
                onClick={onOpenDiagnostic}
                className="pulse-btn-green px-6 py-3 rounded-xl bg-gradient-to-r from-[#22C55E] to-emerald-600 text-white text-xs sm:text-sm font-bold shadow-glow-green hover:opacity-95 transition flex items-center gap-2 cursor-pointer"
              >
                <span>Estancar perda no WhatsApp</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

