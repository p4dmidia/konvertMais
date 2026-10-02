import React, { useState } from 'react';
import { FAQ_ITEMS } from '../data/mockData';
import { ChevronDown, HelpCircle, Search } from 'lucide-react';

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [searchQuery, setSearchQuery] = useState('');

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const filteredFaqs = FAQ_ITEMS.filter(
    (item) =>
      item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section className="py-24" id="faq">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-12">
          <span className="text-xs uppercase tracking-widest font-semibold text-[#A855F7] bg-[#7C3AED]/10 px-3 py-1 rounded-full border border-[#7C3AED]/30 inline-flex items-center gap-1.5">
            <HelpCircle className="w-3.5 h-3.5" />
            Tire suas dúvidas
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Perguntas frequentes
          </h2>
          <p className="text-[#9CA3AF] text-base sm:text-lg">
            Tudo o que você precisa saber antes de agendar seu diagnóstico gratuito.
          </p>

          {/* Quick Search */}
          <div className="max-w-md mx-auto pt-2">
            <div className="relative">
              <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-[#9CA3AF]" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Pesquisar dúvida (ex: fidelidade, preço, número)..."
                className="w-full bg-[#101018] border border-[#242238] rounded-xl pl-10 pr-4 py-2.5 text-xs sm:text-sm text-white focus:outline-none focus:border-[#7C3AED]"
              />
            </div>
          </div>
        </div>

        {/* Accordion Items (Copy exata do PDF) */}
        <div className="space-y-3.5">
          {filteredFaqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-[#101018] border border-[#242238] rounded-2xl overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between text-white font-bold text-sm sm:text-base focus:outline-none cursor-pointer gap-4"
                >
                  <span>{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-[#A855F7] shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 text-sm text-[#9CA3AF] leading-relaxed border-t border-[#242238]/40 pt-4 animate-fadeIn">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}

          {filteredFaqs.length === 0 && (
            <div className="text-center py-8 text-[#9CA3AF] text-sm">
              Nenhuma dúvida encontrada para "{searchQuery}". Clique no botão do WhatsApp que nossa equipe responde agora!
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

