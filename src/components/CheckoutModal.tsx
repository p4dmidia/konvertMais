import React, { useState } from 'react';
import {
  X,
  Sparkles,
  ArrowRight,
  Building,
  User,
  Phone,
  Layers,
  Calendar,
  CheckCircle2,
  Clock,
  ShieldCheck,
} from 'lucide-react';
import { DiagnosticFormState } from '../types';

interface DiagnosticModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CheckoutModal: React.FC<DiagnosticModalProps> = ({ isOpen, onClose }) => {
  const [form, setForm] = useState<DiagnosticFormState>({
    fullName: '',
    phone: '',
    companyName: '',
    productType: 'Consórcio',
    dailyLeads: '20 a 50 leads/dia',
    currentAttendant: 'Equipe de vendas própria',
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  if (!isOpen) return null;

  const handlePhoneChange = (val: string) => {
    const digits = val.replace(/\D/g, '').slice(0, 11);
    let formatted = digits;
    if (digits.length > 2) {
      formatted = `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
    }
    if (digits.length > 7) {
      formatted = `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
    }
    setForm({ ...form, phone: formatted });
    if (errors.phone) setErrors({ ...errors, phone: '' });
  };

  const handleOpenWhatsApp = (e?: React.FormEvent) => {
    if (e) e.preventDefault();

    const name = form.fullName.trim() || 'Olá';
    const text = `Oi! Meu nome é ${name}, da empresa ${form.companyName || 'minha empresa'}. ` +
      `Trabalhamos com ${form.productType} e recebo cerca de ${form.dailyLeads} no WhatsApp. ` +
      `Gostaria de agendar o meu diagnóstico gratuito de 30 minutos com o Konvert Mais! 😊`;

    window.open(`https://wa.me/5531995006891?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/85 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-xl bg-[#101018] border border-[#7C3AED]/50 rounded-3xl shadow-glow-purple-lg overflow-hidden my-auto flex flex-col animate-fadeIn">
        {/* Modal Header */}
        <div className="p-5 sm:p-6 bg-[#141422] border-b border-[#242238] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#7C3AED] to-[#A855F7] flex items-center justify-center text-white font-bold text-base shadow-sm">
              <Calendar className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                Diagnóstico Comercial Gratuito
                <span className="text-[10px] bg-[#22C55E]/20 text-[#22C55E] px-2 py-0.5 rounded-full font-semibold">
                  30 Minutos
                </span>
              </h3>
              <p className="text-xs text-[#9CA3AF]">
                Descubra onde sua empresa perde vendas no WhatsApp
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-[#9CA3AF] hover:text-white rounded-lg hover:bg-white/5 transition cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <form onSubmit={handleOpenWhatsApp} className="p-5 sm:p-7 space-y-5">
          <div className="p-3.5 rounded-xl bg-[#7C3AED]/10 border border-[#7C3AED]/30 text-xs text-[#E5E7EB] flex items-start gap-2.5">
            <Sparkles className="w-4 h-4 text-[#A855F7] shrink-0 mt-0.5" />
            <span>
              Ao clicar no botão, você falará diretamente com nosso agente de IA no WhatsApp para qualificar sua operação e agendar a call de diagnóstico.
            </span>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-white mb-1.5 flex items-center gap-1.5">
                <User className="w-3.5 h-3.5 text-[#A855F7]" />
                Seu Nome
              </label>
              <input
                type="text"
                placeholder="Ex: Carlos Eduardo"
                value={form.fullName}
                onChange={(e) => setForm({ ...form, fullName: e.target.value })}
                className="w-full bg-[#14141e] border border-[#242238] focus:border-[#7C3AED] rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-white mb-1.5 flex items-center gap-1.5">
                  <Building className="w-3.5 h-3.5 text-[#A855F7]" />
                  Nome da Empresa
                </label>
                <input
                  type="text"
                  placeholder="Ex: Nacional Consórcios"
                  value={form.companyName}
                  onChange={(e) => setForm({ ...form, companyName: e.target.value })}
                  className="w-full bg-[#14141e] border border-[#242238] focus:border-[#7C3AED] rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-white mb-1.5 flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-[#22C55E]" />
                  Seu WhatsApp
                </label>
                <input
                  type="tel"
                  placeholder="(11) 98765-4321"
                  value={form.phone}
                  onChange={(e) => handlePhoneChange(e.target.value)}
                  className="w-full bg-[#14141e] border border-[#242238] focus:border-[#7C3AED] rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-white mb-1.5 flex items-center gap-1.5">
                  <Layers className="w-3.5 h-3.5 text-[#A855F7]" />
                  O que a empresa vende?
                </label>
                <select
                  value={form.productType}
                  onChange={(e) => setForm({ ...form, productType: e.target.value })}
                  className="w-full bg-[#14141e] border border-[#242238] focus:border-[#7C3AED] rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none cursor-pointer"
                >
                  <option value="Consórcio (Imóvel / Auto / Pesados)">Consórcio (Imóvel / Auto / Pesados)</option>
                  <option value="Seguros & Planos de Saúde">Seguros &amp; Planos de Saúde</option>
                  <option value="Planos Funerários / Assistenciais">Planos Funerários / Assistenciais</option>
                  <option value="Assinaturas & Contratos Recorrentes">Assinaturas &amp; Contratos Recorrentes</option>
                  <option value="Outro produto por contrato">Outro produto por contrato</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-white mb-1.5 flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-[#A855F7]" />
                  Volume de leads diários
                </label>
                <select
                  value={form.dailyLeads}
                  onChange={(e) => setForm({ ...form, dailyLeads: e.target.value })}
                  className="w-full bg-[#14141e] border border-[#242238] focus:border-[#7C3AED] rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none cursor-pointer"
                >
                  <option value="Menos de 20 leads/dia">Menos de 20 leads/dia</option>
                  <option value="20 a 50 leads/dia">20 a 50 leads/dia</option>
                  <option value="50 a 100 leads/dia">50 a 100 leads/dia</option>
                  <option value="Mais de 100 leads/dia">Mais de 100 leads/dia</option>
                </select>
              </div>
            </div>
          </div>

          <div className="pt-3">
            <button
              type="submit"
              className="pulse-btn-green w-full inline-flex items-center justify-center gap-3 px-6 py-4 rounded-xl text-base font-bold text-white bg-gradient-to-r from-[#22C55E] to-emerald-600 hover:from-emerald-500 hover:to-emerald-700 shadow-glow-green transition hover:scale-[1.02] cursor-pointer"
            >
              <i className="fa-brands fa-whatsapp text-2xl"></i>
              <span>Falar com Agente no WhatsApp</span>
              <ArrowRight className="w-4 h-4 ml-1" />
            </button>
          </div>

          <div className="flex items-center justify-center gap-4 text-xs text-[#9CA3AF] text-center pt-1">
            <span className="flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#22C55E]" /> Diagnóstico 100% Gratuito
            </span>
            <span className="flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-[#22C55E]" /> Sem compromisso
            </span>
          </div>
        </form>
      </div>
    </div>
  );
};

