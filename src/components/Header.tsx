import React, { useState } from 'react';
import { ArrowRight, Menu, X } from 'lucide-react';
import { NINA_WHATSAPP_URL } from '../data/mockData';

export const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-[#07070B]/85 border-b border-[#242238]/60 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="/" className="flex items-center group">
          <img
            src="/logo.png"
            alt="KonvertMais"
            className="h-10 sm:h-11 w-auto object-contain transition-transform duration-300 group-hover:scale-105 drop-shadow-[0_0_15px_rgba(168,85,247,0.25)]"
          />
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-3.5 xl:gap-5 text-sm font-medium text-[#9CA3AF] whitespace-nowrap">
          <a href="/#ja-tenho-leads" className="hover:text-[#A855F7] transition-colors">
            Já tenho leads
          </a>
          <a href="/#quero-ter-leads" className="hover:text-[#A855F7] transition-colors">
            Quero ter leads
          </a>
          <a href="/#para-quem-e" className="hover:text-[#A855F7] transition-colors">
            Para quem é
          </a>
          <a href="/#como-funciona" className="hover:text-[#A855F7] transition-colors">
            Como funciona
          </a>
          <a href="/#precos" className="hover:text-[#A855F7] transition-colors">
            Preços
          </a>
          <a href="/#faq" className="hover:text-[#A855F7] transition-colors">
            FAQ
          </a>
          <a href="/academy" target="_blank" rel="noopener noreferrer" className="hover:text-[#A855F7] transition-colors">
            Konvert Academy
          </a>
        </nav>

        {/* Header Action Button */}
        <div className="flex items-center gap-3">
          <a
            href="https://app.konvertmais.com.br"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full text-xs font-semibold text-[#9CA3AF] hover:text-white border border-[#242238] hover:border-[#7C3AED]/50 bg-[#101018] transition-all whitespace-nowrap"
          >
            <span>Acessar Sistema</span>
          </a>

          <a
            href={NINA_WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs md:text-sm font-semibold text-white bg-gradient-to-r from-[#22C55E] to-emerald-600 hover:opacity-95 shadow-glow-green transition-all duration-300 hover:scale-[1.02] cursor-pointer whitespace-nowrap"
          >
            <i className="fa-brands fa-whatsapp text-lg"></i>
            <span>Falar com a Nina</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>

          {/* Mobile Menu Trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Abrir menu mobile"
            className="lg:hidden p-2 text-[#9CA3AF] hover:text-white focus:outline-none cursor-pointer"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Nav */}
      {mobileMenuOpen && (
        <div className="lg:hidden px-4 pt-2 pb-6 bg-[#101018] border-b border-[#242238]">
          <div className="flex flex-col space-y-3 pt-2">
            <a
              onClick={() => setMobileMenuOpen(false)}
              className="text-[#9CA3AF] hover:text-white py-1"
              href="/#ja-tenho-leads"
            >
              Já tenho leads
            </a>
            <a
              onClick={() => setMobileMenuOpen(false)}
              className="text-[#9CA3AF] hover:text-white py-1"
              href="/#quero-ter-leads"
            >
              Quero ter leads
            </a>
            <a
              onClick={() => setMobileMenuOpen(false)}
              className="text-[#9CA3AF] hover:text-white py-1"
              href="/#para-quem-e"
            >
              Para quem é
            </a>
            <a
              onClick={() => setMobileMenuOpen(false)}
              className="text-[#9CA3AF] hover:text-white py-1"
              href="/#como-funciona"
            >
              Como funciona
            </a>
            <a
              onClick={() => setMobileMenuOpen(false)}
              className="text-[#9CA3AF] hover:text-white py-1"
              href="/#precos"
            >
              Preços
            </a>
            <a
              onClick={() => setMobileMenuOpen(false)}
              className="text-[#9CA3AF] hover:text-white py-1"
              href="/#faq"
            >
              FAQ
            </a>
            <a
              onClick={() => setMobileMenuOpen(false)}
              className="text-[#9CA3AF] hover:text-white py-1"
              href="/academy" target="_blank" rel="noopener noreferrer"
            >
              Konvert Academy
            </a>

            <a
              href={NINA_WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-2 w-full text-center py-3 rounded-full text-sm font-bold text-white bg-gradient-to-r from-[#22C55E] to-emerald-600 shadow-glow-green transition flex items-center justify-center gap-2"
            >
              <i className="fa-brands fa-whatsapp text-lg"></i>
              <span>Falar com a Nina no WhatsApp</span>
            </a>

            <a
              href="https://app.konvertmais.com.br"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-2.5 rounded-full text-xs font-semibold text-[#9CA3AF] hover:text-white border border-[#242238] hover:border-white/20 transition block"
            >
              Acessar Sistema (app.konvertmais.com.br)
            </a>
          </div>
        </div>
      )}
    </header>
  );
};


