import React from 'react';
import { Mail, MessageCircle, Phone } from 'lucide-react';
import { NINA_WHATSAPP_URL } from '../data/mockData';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#040407] border-t border-[#242238]/60 py-14" id="rodape">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-[#242238]/50">
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <a href="/" className="flex items-center group">
              <img
                src="/logo.png"
                alt="KonvertMais"
                className="h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </a>
            <p className="text-xs text-[#9CA3AF] leading-relaxed max-w-sm">
              KonvertMais é um produto operado por P4D Mídia LTDA · CNPJ 49.089.513/0001-00
            </p>
            <div className="flex items-center gap-4 text-[#9CA3AF] text-base pt-1">
              <a
                href={NINA_WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp da Nina"
                className="hover:text-[#22C55E] transition"
              >
                <i className="fa-brands fa-whatsapp"></i>
              </a>
              <a
                href="https://www.p4dmidia.com.br/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="P4D Mídia"
                className="hover:text-[#A855F7] transition text-xs font-semibold"
              >
                p4dmidia.com.br
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs uppercase font-bold tracking-widest text-white">Navegação</h4>
            <ul className="space-y-2 text-xs text-[#9CA3AF]">
              <li>
                <a className="hover:text-white transition" href="/#ja-tenho-leads">
                  Já tenho leads
                </a>
              </li>
              <li>
                <a className="hover:text-white transition" href="/#quero-ter-leads">
                  Quero ter leads
                </a>
              </li>
              <li>
                <a className="hover:text-white transition" href="/#para-quem-e">
                  Para quem é
                </a>
              </li>
              <li>
                <a className="hover:text-white transition" href="/#como-funciona">
                  Como funciona
                </a>
              </li>
              <li>
                <a className="hover:text-white transition" href="/#precos">
                  Planos e Preços
                </a>
              </li>
              <li>
                <a className="hover:text-white transition" href="/#faq">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Links Legais & Contato */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs uppercase font-bold tracking-widest text-white">Contato &amp; Links</h4>
            <p className="text-xs text-[#9CA3AF] flex items-center gap-2">
              <Phone className="w-3.5 h-3.5 text-[#22C55E]" />
              <a
                href={NINA_WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition"
              >
                WhatsApp: (31) 99500-6891
              </a>
            </p>
            <p className="text-xs text-[#9CA3AF] flex items-center gap-2">
              <Mail className="w-3.5 h-3.5 text-[#A855F7]" />
              <a href="mailto:suporte@konvertmais.com.br" className="hover:text-white transition">
                suporte@konvertmais.com.br
              </a>
            </p>
            <div className="pt-2 text-xs text-[#9CA3AF] space-y-2">
              <div className="flex flex-wrap items-center gap-3">
                <a className="hover:text-white transition" href="#">
                  Konvert Academy
                </a>
                <span>•</span>
                <a className="hover:text-white transition" href="/privacidade">
                  Política de privacidade
                </a>
                <span>•</span>
                <a className="hover:text-white transition" href="/termos">
                  Termos de uso
                </a>
                <span>•</span>
                <a
                  className="hover:text-white transition"
                  href="https://www.p4dmidia.com.br/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  P4D Mídia
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright Notice */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#9CA3AF] gap-4 text-center sm:text-left">
          <p>KonvertMais é um produto operado por P4D Mídia LTDA · CNPJ 49.089.513/0001-00</p>
          <p className="text-[11px] text-[#9CA3AF]/60">
            WhatsApp: (31) 99500-6891
          </p>
        </div>
      </div>
    </footer>
  );
};
