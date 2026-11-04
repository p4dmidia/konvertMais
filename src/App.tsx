import React from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { ProblemSection } from './components/ProblemSection';
import { MachineSection } from './components/MachineSection';
import { TargetAudienceSection } from './components/TargetAudienceSection';
import { LiveDemoSection } from './components/LiveDemoSection';
import { HowItWorksSection } from './components/HowItWorksSection';
import { PricingSection } from './components/PricingSection';
import { ComparisonSection } from './components/ComparisonSection';
import { FAQSection } from './components/FAQSection';
import { FinalCTASection } from './components/FinalCTASection';
import { Footer } from './components/Footer';
import { TermosPage } from './pages/TermosPage';
import { PrivacidadePage } from './pages/PrivacidadePage';
import { NINA_WHATSAPP_URL } from './data/mockData';

export default function App() {
  const pathname = typeof window !== 'undefined' ? window.location.pathname : '/';

  // Rota: Termos de Uso
  if (pathname === '/termos' || pathname === '/termos/') {
    return <TermosPage />;
  }

  // Rota: Política de Privacidade
  if (pathname === '/privacidade' || pathname === '/privacidade/') {
    return <PrivacidadePage />;
  }

  // Rota: Konvert Academy (legado ou acesso direto)
  const isAcademyPath =
    pathname === '/academy' ||
    pathname === '/academy/' ||
    pathname === '/curso' ||
    pathname === '/curso/';

  React.useEffect(() => {
    if (isAcademyPath) {
      window.location.replace('/academy/index.html' + window.location.hash);
    }
  }, [isAcademyPath]);

  if (isAcademyPath) {
    return (
      <iframe
        src={`/academy/index.html${window.location.hash}`}
        title="Konvert Academy"
        className="w-screen h-screen border-none fixed inset-0 z-50 bg-[#f8f7fc]"
      />
    );
  }

  return (
    <div className="relative min-h-screen bg-[#07070B] text-[#E5E7EB] antialiased selection:bg-[#7C3AED] selection:text-white">
      {/* Background decorative light orbs */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[600px] pointer-events-none -z-10 bg-radial-gradient"></div>
      <div className="fixed -top-40 right-[-100px] w-96 h-96 bg-[#7C3AED]/15 rounded-full blur-[120px] pointer-events-none -z-10"></div>
      <div className="fixed top-[45%] -left-32 w-80 h-80 bg-[#7C3AED]/10 rounded-full blur-[130px] pointer-events-none -z-10"></div>

      {/* Main Header */}
      <Header />

      {/* Main Sections (na ordem exata da especificação) */}
      <main className="pb-24 sm:pb-0">
        {/* Seção 1. Primeira dobra */}
        <HeroSection />

        {/* Seção 2. Para quem já tem leads (#ja-tenho-leads) */}
        <ProblemSection />

        {/* Seção 3. Para quem quer montar a máquina de vendas (#quero-ter-leads) */}
        <MachineSection />

        {/* Seção 4. Para quem é (#para-quem-e) */}
        <TargetAudienceSection />

        {/* Demonstração interativa por nicho com 4 abas */}
        <LiveDemoSection />

        {/* Seção 5. Como funciona (#como-funciona) */}
        <HowItWorksSection />

        {/* Seção 6. Planos e preços (#precos) */}
        <PricingSection />

        {/* Calculadora (A conta) */}
        <ComparisonSection />

        {/* Seção 7. Perguntas frequentes (#faq) */}
        <FAQSection />

        {/* Seção 8. Chamada final (#fechamento) */}
        <FinalCTASection />
      </main>

      {/* Main Footer */}
      <Footer />

      {/* Botão fixo no rodapé no celular */}
      <div className="sm:hidden fixed bottom-0 left-0 right-0 p-3 bg-[#07070B]/95 backdrop-blur-lg border-t border-[#242238] z-50">
        <a
          href={NINA_WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="pulse-btn-green w-full flex items-center justify-center gap-2.5 py-3.5 px-4 rounded-xl bg-gradient-to-r from-[#22C55E] to-emerald-600 text-white font-bold text-sm shadow-glow-green"
        >
          <i className="fa-brands fa-whatsapp text-xl"></i>
          <span>Falar com a Nina no WhatsApp</span>
        </a>
      </div>

      {/* Floating WhatsApp Action Button no desktop */}
      <div className="hidden sm:block fixed bottom-6 right-6 z-40">
        <a
          href={NINA_WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="pulse-btn-green flex items-center gap-2.5 px-4 py-3 rounded-full bg-gradient-to-r from-[#22C55E] to-emerald-600 text-white font-bold text-xs sm:text-sm shadow-glow-green hover:scale-105 transition-all cursor-pointer"
          title="Falar com a Nina no WhatsApp"
        >
          <i className="fa-brands fa-whatsapp text-xl"></i>
          <span>Falar com a Nina no WhatsApp</span>
        </a>
      </div>
    </div>
  );
}
