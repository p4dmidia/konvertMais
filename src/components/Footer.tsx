import React from 'react';
import { Mail, MessageCircle } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#040407] border-t border-[#242238]/60 py-14" id="rodape">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-[#242238]/50">
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <a href="#" className="flex items-center group">
              <img
                src="/logo.png"
                alt="Konvert Mais - Inteligência Comercial"
                className="h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </a>
            <p className="text-xs text-[#9CA3AF] leading-relaxed max-w-sm">
              Nenhum lead morre no WhatsApp. Agentes de Inteligência Artificial especializados em vendas de consórcios, seguros, planos e assinaturas com implantação completa e acompanhamento do funil.
            </p>
            <div className="flex items-center gap-4 text-[#9CA3AF] text-base pt-1">
              <a href="#" aria-label="Instagram" className="hover:text-[#A855F7] transition">
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a
                href="https://wa.me/5531995006891?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20o%20diagn%C3%B3stico%20gratuito%20com%20o%20Konvert%20Mais."
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="hover:text-[#22C55E] transition"
              >
                <i className="fa-brands fa-whatsapp"></i>
              </a>
              <a href="#" aria-label="LinkedIn" className="hover:text-[#A855F7] transition">
                <i className="fa-brands fa-linkedin-in"></i>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs uppercase font-bold tracking-widest text-white">Navegação</h4>
            <ul className="space-y-2 text-xs text-[#9CA3AF]">
              <li>
                <a className="hover:text-white transition" href="#dor">
                  O Gargalo Comercial
                </a>
              </li>
              <li>
                <a className="hover:text-white transition" href="#como-funciona">
                  Como funciona
                </a>
              </li>
              <li>
                <a className="hover:text-white transition" href="#o-que-faz">
                  O que o agente faz
                </a>
              </li>
              <li>
                <a className="hover:text-white transition" href="#para-quem-e">
                  Para quem é
                </a>
              </li>
              <li>
                <a className="hover:text-white transition" href="#a-conta">
                  A Conta
                </a>
              </li>
              <li>
                <a className="hover:text-white transition" href="#planos">
                  Planos e Valores
                </a>
              </li>
              <li>
                <a className="hover:text-white transition" href="#faq">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Legal */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs uppercase font-bold tracking-widest text-white">Atendimento &amp; Parceria</h4>
            <p className="text-xs text-[#9CA3AF] flex items-center gap-2">
              <MessageCircle className="w-3.5 h-3.5 text-[#22C55E]" />
              <span>Atendimento e Diagnóstico Comercial 24h</span>
            </p>
            <p className="text-xs text-[#9CA3AF] flex items-center gap-2">
              <Mail className="w-3.5 h-3.5 text-[#A855F7]" />
              <span>contato@konvertmais.com.br</span>
            </p>
            <div className="pt-2 text-[11px] text-[#9CA3AF]/70 space-y-1">
              <p>Gestão de Tráfego prestada por P4D Mídia parceira.</p>
              <div className="flex items-center gap-3 pt-1">
                <a className="hover:underline" href="#">
                  Política de Privacidade
                </a>
                <span>•</span>
                <a className="hover:underline" href="#">
                  Termos de Uso
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright Notice */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#9CA3AF] gap-4 text-center sm:text-left">
          <p>Copyright © 2026 Konvert Mais®. Todos os direitos reservados.</p>
          <p className="text-[11px] text-[#9CA3AF]/60">
            Tecnologia de Inteligência Comercial e Conectividade para WhatsApp.
          </p>
        </div>
      </div>
    </footer>
  );
};

