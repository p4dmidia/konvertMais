import React, { useState } from 'react';
import { DEMO_NICHES } from '../data/mockData';
import { CheckCheck, Sparkles, Search, MoreVertical, Play, RotateCcw } from 'lucide-react';
import { ChatMessage } from '../types';

export const LiveDemoSection: React.FC = () => {
  const [selectedNicheId, setSelectedNicheId] = useState('consorcio');
  const activeNiche = DEMO_NICHES.find((n) => n.id === selectedNicheId) || DEMO_NICHES[0];

  const [customMessages, setCustomMessages] = useState<ChatMessage[]>(activeNiche.messages);
  const [isTyping, setIsTyping] = useState(false);

  // When changing niche, reset messages
  const handleSelectNiche = (id: string) => {
    setSelectedNicheId(id);
    const target = DEMO_NICHES.find((n) => n.id === id) || DEMO_NICHES[0];
    setCustomMessages(target.messages);
  };

  const handleSendQuickReply = (text: string) => {
    const newClientMsg: ChatMessage = {
      id: Date.now().toString(),
      sender: 'client',
      text,
      time: 'Agora',
    };

    setCustomMessages((prev) => [...prev, newClientMsg]);
    setIsTyping(true);

    setTimeout(() => {
      let replyText = 'Perfeito! Temos exatamente essa condição disponível hoje. Deseja que eu agende seu atendimento ou envie a simulação oficial?';
      if (text.toLowerCase().includes('imóvel') || text.toLowerCase().includes('cota') || text.toLowerCase().includes('parcela')) {
        replyText = 'Temos cotas com parcelas reduzidas até a contemplação e aceitamos lance livre com FGTS! Você gostaria de agendar uma call de 15 min para vermos a tabela completa?';
      } else if (text.toLowerCase().includes('família') || text.toLowerCase().includes('cnpj') || text.toLowerCase().includes('carência')) {
        replyText = 'Pelo CNPJ você garante até 35% de economia e compra de carência para consultas e exames simples imediata! Quer que eu te envie o estudo comparativo?';
      } else if (text.toLowerCase().includes('nacional') || text.toLowerCase().includes('familiar')) {
        replyText = 'A cobertura é 100% nacional com traslado e assistência 24h sem limite de acionamento. Posso separar sua proposta com carência zero?';
      }

      const newAgentMsg: ChatMessage = {
        id: (Date.now() + 1).toString(),
        sender: 'agent',
        text: replyText,
        time: 'Agora',
        meta: '✓ Resposta imediata baseada no roteiro do seu nicho',
      };

      setCustomMessages((prev) => [...prev, newAgentMsg]);
      setIsTyping(false);
    }, 900);
  };

  const handleReset = () => {
    setCustomMessages(activeNiche.messages);
  };

  return (
    <section className="py-24 bg-[#101018]/60 border-y border-[#242238]/60" id="demonstracao">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-10">
          <span className="text-xs uppercase tracking-widest font-semibold text-[#22C55E] bg-[#22C55E]/10 px-3 py-1 rounded-full border border-[#22C55E]/30">
            Demonstração Real Interativa
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Veja como ele atende o seu lead.
          </h2>
          <p className="text-[#9CA3AF] text-base sm:text-lg">
            Sem respostas robotizadas ou menus engessados ("digite 1 para..."). Uma conversa natural, empática, que qualifica e conduz até a call ou venda.
          </p>

          {/* Niche Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
            {DEMO_NICHES.map((niche) => {
              const isActive = niche.id === selectedNicheId;
              return (
                <button
                  key={niche.id}
                  onClick={() => handleSelectNiche(niche.id)}
                  className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer flex items-center gap-2 ${
                    isActive
                      ? 'bg-[#7C3AED] text-white shadow-glow-purple scale-105'
                      : 'bg-[#101018] text-[#9CA3AF] hover:text-white border border-[#242238] hover:border-[#7C3AED]/40'
                  }`}
                >
                  <span>{niche.name}</span>
                  <span className="text-[11px] opacity-75">({niche.category})</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* WhatsApp Conversation Realistic UI Container */}
        <div className="max-w-3xl mx-auto bg-[#0b141a] rounded-3xl border border-[#242238] shadow-2xl overflow-hidden">
          {/* Chat Top Navigation */}
          <div className="bg-[#202c33] px-5 py-4 flex items-center justify-between border-b border-white/5">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-11 h-11 rounded-full bg-[#7C3AED] flex items-center justify-center text-white font-bold shadow-md">
                  {activeNiche.avatarLetter}
                </div>
                <span className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-[#22C55E] border-2 border-[#202c33]"></span>
              </div>
              <div>
                <h4 className="text-white font-semibold text-sm flex items-center gap-2">
                  {activeNiche.name} • {activeNiche.category}
                  <i className="fa-solid fa-circle-check text-[#A855F7] text-xs"></i>
                </h4>
                <p className="text-xs text-[#22C55E] flex items-center gap-1.5 font-medium">
                  Agente IA Konvert Mais • Responde em cerca de 1 min
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4 text-[#9CA3AF]">
              <button
                onClick={handleReset}
                title="Reiniciar demonstração"
                className="hover:text-white transition flex items-center gap-1 text-xs cursor-pointer px-2 py-1 rounded bg-white/5 hover:bg-white/10"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Reiniciar</span>
              </button>
              <Search className="w-4 h-4 cursor-pointer hover:text-white transition" />
              <MoreVertical className="w-4 h-4 cursor-pointer hover:text-white transition" />
            </div>
          </div>

          {/* Chat History */}
          <div className="p-5 sm:p-7 space-y-3.5 bg-[radial-gradient(#1f2c34_1px,transparent_1px)] [background-size:16px_16px] bg-[#0b141a] min-h-[420px] max-h-[580px] overflow-y-auto">
            {/* Timestamp Divider */}
            <div className="flex justify-center">
              <span className="bg-[#182229] text-[#9CA3AF] text-[11px] px-3 py-1 rounded-lg border border-white/5">
                Hoje • Conversa em tempo real
              </span>
            </div>

            {customMessages.map((msg) => {
              if (msg.sender === 'system') {
                return (
                  <div key={msg.id} className="flex items-center justify-center gap-1.5 py-1">
                    <span className="text-[10px] font-semibold text-[#A855F7] bg-[#7C3AED]/20 px-2.5 py-1 rounded-full border border-[#7C3AED]/30 flex items-center gap-1">
                      <Sparkles className="w-3 h-3" />
                      {msg.text}
                    </span>
                  </div>
                );
              }

              if (msg.sender === 'client') {
                return (
                  <div key={msg.id} className="flex justify-end animate-fadeIn">
                    <div className="bg-[#005c4b] text-white p-3.5 rounded-2xl rounded-tr-none max-w-md shadow-sm space-y-1">
                      {msg.isAudio && (
                        <div className="flex items-center gap-2 mb-1">
                          <div className="w-6 h-6 rounded-full bg-[#22C55E] flex items-center justify-center text-white text-[10px]">
                            <Play className="w-3 h-3 ml-0.5" />
                          </div>
                          <div className="w-24 h-3 flex items-center gap-0.5">
                            <span className="w-1 h-2 bg-[#9CA3AF] rounded-full"></span>
                            <span className="w-1 h-4 bg-white rounded-full"></span>
                            <span className="w-1 h-3 bg-[#9CA3AF] rounded-full"></span>
                            <span className="w-1 h-5 bg-[#22C55E] rounded-full"></span>
                            <span className="w-1 h-2 bg-white rounded-full"></span>
                          </div>
                          <span className="text-[9px] text-[#9CA3AF]">{msg.audioDuration}</span>
                        </div>
                      )}
                      <p className="text-sm leading-relaxed">{msg.text}</p>
                      <div className="text-[10px] text-emerald-200/70 text-right mt-1 flex items-center justify-end gap-1">
                        <span>{msg.time}</span>
                        <CheckCheck className="w-3 h-3 text-sky-400" />
                      </div>
                    </div>
                  </div>
                );
              }

              // Agent message
              return (
                <div key={msg.id} className="flex justify-start animate-fadeIn">
                  <div className="bg-[#202c33] text-white p-3.5 rounded-2xl rounded-tl-none max-w-md border border-[#7C3AED]/30 shadow-md space-y-1">
                    <p className="text-sm leading-relaxed">{msg.text}</p>
                    {msg.meta && (
                      <div className="mt-2 pt-2 border-t border-white/10 text-[11px] text-[#22C55E] font-medium flex items-center justify-between">
                        <span>{msg.meta}</span>
                      </div>
                    )}
                    <div className="text-[10px] text-[#9CA3AF] text-right mt-1">{msg.time}</div>
                  </div>
                </div>
              );
            })}

            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-[#202c33] text-white px-4 py-2.5 rounded-2xl rounded-tl-none border border-[#7C3AED]/30 flex items-center gap-1.5">
                  <span className="text-xs text-[#9CA3AF]">Agente está digitando</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#A855F7] animate-bounce"></span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#A855F7] animate-bounce [animation-delay:0.2s]"></span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#A855F7] animate-bounce [animation-delay:0.4s]"></span>
                </div>
              </div>
            )}
          </div>

          {/* Quick Reply Interactivity Bar */}
          <div className="p-3 bg-[#17191f] border-t border-white/5 space-y-2">
            <p className="text-[11px] text-[#9CA3AF] font-medium flex items-center gap-1.5">
              <Sparkles className="w-3 h-3 text-[#A855F7]" />
              <span>Simule uma mensagem do cliente (clique para testar):</span>
            </p>
            <div className="flex flex-wrap gap-2">
              {activeNiche.quickReplies.map((reply, i) => (
                <button
                  key={i}
                  disabled={isTyping}
                  onClick={() => handleSendQuickReply(reply)}
                  className="px-3 py-1.5 rounded-lg bg-[#202c33] hover:bg-[#7C3AED]/30 text-white text-xs border border-white/10 hover:border-[#7C3AED]/50 transition cursor-pointer disabled:opacity-50 text-left"
                >
                  "{reply}"
                </button>
              ))}
            </div>
          </div>

          {/* Highlight Banner Bottom */}
          <div className="bg-[#111b21] p-4 border-t border-[#242238] flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
            <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-white">
              <span className="w-2.5 h-2.5 rounded-full bg-[#22C55E] animate-ping"></span>
              <span>⚡ Roteiro pronto para o nicho, com qualificação e entrega do lead aquecido.</span>
            </div>
            <span className="text-[11px] text-[#9CA3AF]">
              *Demonstração do atendimento Konvert Mais
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

