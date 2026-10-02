import React, { useState } from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { ProblemSection } from './components/ProblemSection';
import { HowItWorksSection } from './components/HowItWorksSection';
import { BenefitsSection } from './components/BenefitsSection';
import { LiveDemoSection } from './components/LiveDemoSection';
import { TargetAudienceSection } from './components/TargetAudienceSection';
import { ComparisonSection } from './components/ComparisonSection';
import { SocialProofSection } from './components/SocialProofSection';
import { PricingSection } from './components/PricingSection';
import { UpsellTrafficSection } from './components/UpsellTrafficSection';
import { FAQSection } from './components/FAQSection';
import { FinalCTASection } from './components/FinalCTASection';
import { Footer } from './components/Footer';
import { CheckoutModal } from './components/CheckoutModal';

export default function App() {
  const [isDiagnosticOpen, setIsDiagnosticOpen] = useState(false);

  const handleOpenDiagnostic = () => {
    setIsDiagnosticOpen(true);
  };

  const handleCloseDiagnostic = () => {
    setIsDiagnosticOpen(false);
  };

  return (
    <div className="relative min-h-screen bg-[#07070B] text-[#E5E7EB] antialiased selection:bg-[#7C3AED] selection:text-white">
      {/* Background decorative light orbs */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[600px] pointer-events-none -z-10 bg-radial-gradient"></div>
      <div className="fixed -top-40 right-[-100px] w-96 h-96 bg-[#7C3AED]/15 rounded-full blur-[120px] pointer-events-none -z-10"></div>
      <div className="fixed top-[45%] -left-32 w-80 h-80 bg-[#7C3AED]/10 rounded-full blur-[130px] pointer-events-none -z-10"></div>

      {/* Main Header */}
      <Header onOpenDiagnostic={handleOpenDiagnostic} />

      {/* Main Sections */}
      <main>
        {/* 1. Topo: Hero */}
        <HeroSection onOpenDiagnostic={handleOpenDiagnostic} />

        {/* 2. A dor & 3. A virada */}
        <ProblemSection />

        {/* 4. Como funciona */}
        <HowItWorksSection onOpenDiagnostic={handleOpenDiagnostic} />

        {/* 5. O que o agente faz */}
        <BenefitsSection />

        {/* Demonstração Real Interativa */}
        <LiveDemoSection />

        {/* 6. Para quem é */}
        <TargetAudienceSection />

        {/* 7. A conta */}
        <ComparisonSection onOpenDiagnostic={handleOpenDiagnostic} />

        {/* 8. Prova (Conversas reais + Programa Clientes Fundadores) */}
        <SocialProofSection onOpenDiagnostic={handleOpenDiagnostic} />

        {/* 9. Os planos (Dois planos: R$ 997 e R$ 1.497 com P4D) */}
        <PricingSection onOpenDiagnostic={handleOpenDiagnostic} />

        {/* 10. Garantia (No ar em até 7 dias ou devolução da 1ª mensalidade) */}
        <UpsellTrafficSection />

        {/* 11. Perguntas frequentes */}
        <FAQSection />

        {/* 12. Fechamento */}
        <FinalCTASection onOpenDiagnostic={handleOpenDiagnostic} />
      </main>

      {/* Main Footer */}
      <Footer />

      {/* Agendamento de Diagnóstico Gratuito Modal */}
      <CheckoutModal isOpen={isDiagnosticOpen} onClose={handleCloseDiagnostic} />

      {/* Floating WhatsApp Action Button */}
      <div className="fixed bottom-6 right-6 z-40">
        <button
          onClick={handleOpenDiagnostic}
          className="pulse-btn-green flex items-center gap-2.5 px-4 py-3 rounded-full bg-gradient-to-r from-[#22C55E] to-emerald-600 text-white font-bold text-xs sm:text-sm shadow-glow-green hover:scale-105 transition-all cursor-pointer"
          title="Agendar diagnóstico gratuito no WhatsApp"
        >
          <i className="fa-brands fa-whatsapp text-xl"></i>
          <span className="hidden sm:inline">Diagnóstico Gratuito</span>
        </button>
      </div>
    </div>
  );
}

