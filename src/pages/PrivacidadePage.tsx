import React, { useEffect } from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

export const PrivacidadePage: React.FC = () => {
  useEffect(() => {
    document.title = 'Política de Privacidade | KonvertMais';
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="relative min-h-screen bg-[#07070B] text-[#E5E7EB] antialiased selection:bg-[#7C3AED] selection:text-white flex flex-col justify-between">
      <Header />

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 w-full flex-grow">
        <div className="space-y-8 text-[#D1D5DB] leading-relaxed">
          <div className="border-b border-[#242238] pb-6">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
              Política de Privacidade do KonvertMais
            </h1>
            <p className="text-sm text-[#9CA3AF] mt-2 italic">
              Última atualização: 4 de novembro de 2026
            </p>
          </div>

          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-white">1. Quem somos</h2>
            <p>
              O KonvertMais é oferecido por <strong className="text-white">P4D Mídia LTDA</strong>, CNPJ 49.089.513/0001-00, Rua Perpétuas, 315, Bairro Emília, Sete Lagoas/MG, CEP 35701-366. Esta política explica como tratamos dados pessoais no site konvertmais.com.br e no sistema app.konvertmais.com.br, conforme a Lei Geral de Proteção de Dados (Lei 13.709/2018, LGPD).
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-white">2. Nosso papel em cada tipo de dado</h2>
            {/* Tabela com scroll horizontal protegido no mobile */}
            <div className="overflow-x-auto -mx-2 sm:mx-0 rounded-2xl border border-[#242238] bg-[#101018]">
              <table className="w-full text-left text-sm text-[#E5E7EB] border-collapse min-w-[500px]">
                <thead>
                  <tr className="border-b border-[#242238] text-xs uppercase tracking-wider text-[#9CA3AF] bg-white/5">
                    <th className="py-3 px-4">Dados</th>
                    <th className="py-3 px-4">Quem decide sobre eles</th>
                    <th className="py-3 px-4">Nosso papel</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#242238]/60">
                  <tr>
                    <td className="py-3.5 px-4 text-[#E5E7EB]">
                      Dados de quem contrata e usa o KonvertMais (empresa cliente e seus usuários)
                    </td>
                    <td className="py-3.5 px-4 text-[#9CA3AF]">P4D Mídia</td>
                    <td className="py-3.5 px-4 font-semibold text-white">Controladora</td>
                  </tr>
                  <tr>
                    <td className="py-3.5 px-4 text-[#E5E7EB]">
                      Dados de quem visita o site ou fala com a Nina, nossa atendente de IA
                    </td>
                    <td className="py-3.5 px-4 text-[#9CA3AF]">P4D Mídia</td>
                    <td className="py-3.5 px-4 font-semibold text-white">Controladora</td>
                  </tr>
                  <tr>
                    <td className="py-3.5 px-4 text-[#E5E7EB]">
                      Dados dos clientes atendidos pelas empresas que usam o KonvertMais
                    </td>
                    <td className="py-3.5 px-4 text-[#9CA3AF]">A empresa cliente</td>
                    <td className="py-3.5 px-4 font-semibold text-[#22C55E]">
                      Operadora: tratamos só para prestar o serviço, seguindo as instruções dela
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-sm text-[#9CA3AF]">
              Se você conversou com uma empresa que usa o KonvertMais, pedidos sobre os seus dados devem ir primeiro a essa empresa. Se ela não responder, fale com a gente pelo contato do item 9.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-white">3. Que dados tratamos</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <strong className="text-white">De quem contrata e usa:</strong> nome, e-mail, telefone, razão social, CNPJ, cargo, dados de cobrança e registros de acesso e de ações no sistema.
              </li>
              <li>
                <strong className="text-white">De quem visita o site ou fala com a Nina:</strong> nome, telefone, e-mail quando informado, conteúdo da conversa e dados de navegação (páginas, origem do anúncio, dispositivo).
              </li>
              <li>
                <strong className="text-white">Dos clientes das empresas que usam o KonvertMais:</strong> nome, telefone, e-mail quando informado, conteúdo das conversas, arquivos enviados (imagens, áudios, documentos), agendamentos e histórico de negociações.
              </li>
            </ul>
            <p className="pt-1">
              Não pedimos dados sensíveis. Se uma empresa cliente atende na área de saúde ou em outra área com dados sensíveis, cabe a ela ter base legal para isso.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-white">4. Para que usamos</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>prestar o serviço contratado: responder conversas, organizar o funil, a agenda e os relatórios;</li>
              <li>cobrar a assinatura e emitir notas fiscais;</li>
              <li>dar suporte e avisar sobre mudanças no serviço;</li>
              <li>manter a segurança, prevenir fraudes e cumprir obrigações legais;</li>
              <li>atender e apresentar o KonvertMais a quem nos procura pelo site ou pelo WhatsApp.</li>
            </ul>
            <p className="pt-1">
              <strong className="text-white">Não vendemos dados pessoais</strong> e não usamos os dados dos clientes das empresas para treinar modelos de inteligência artificial nem para publicidade própria.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-white">5. Com quem compartilhamos</h2>
            <p>Só com os fornecedores necessários para o serviço funcionar:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong className="text-white">WhatsApp e Meta</strong> (e Instagram e Messenger, se conectados), para enviar e receber mensagens;</li>
              <li><strong className="text-white">fornecedores de tecnologia</strong> que processam o texto e o áudio das conversas, para que o agente do KonvertMais entenda cada mensagem e gere a resposta;</li>
              <li><strong className="text-white">hospedagem e banco de dados</strong>, onde o sistema e os dados ficam guardados;</li>
              <li><strong className="text-white">Asaas</strong>, meio de pagamento usado na cobrança da assinatura;</li>
              <li><strong className="text-white">Google</strong>, quando a empresa conecta a agenda ou o Google Meet;</li>
              <li><strong className="text-white">serviço de voz</strong>, quando a empresa liga as respostas em áudio;</li>
              <li>autoridades, quando a lei ou uma ordem judicial exigir.</li>
            </ul>
            <p className="pt-1">
              Alguns desses fornecedores guardam dados fora do Brasil, como nos Estados Unidos. Nesses casos, a transferência segue o que a LGPD permite para a execução do contrato.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-white">6. Por quanto tempo guardamos</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>Dados da conta e das conversas: enquanto a assinatura estiver ativa.</li>
              <li>Depois do fim do acesso: a exportação pode ser pedida ao suporte e é entregue em até 48 horas úteis; os dados são apagados 30 dias depois.</li>
              <li>Dados fiscais e de cobrança: pelo prazo exigido pela lei (em geral, 5 anos).</li>
              <li>Registros de acesso ao sistema: pelo menos 6 meses, conforme o Marco Civil da Internet.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-white">7. Seus direitos</h2>
            <p>
              Você pode pedir: confirmação de que tratamos seus dados, acesso, correção, anonimização ou exclusão do que for desnecessário, cópia dos dados, informação sobre com quem compartilhamos e revisão de decisões tomadas só por meios automáticos. Para parar de receber mensagens, basta responder pedindo isso na própria conversa. Respondemos em até 15 dias.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-white">8. Segurança</h2>
            <p>
              Acesso por login pessoal e papel de cada usuário, verificação em duas etapas opcional, separação dos dados entre empresas, chaves de integração guardadas cifradas, conexão protegida (HTTPS) e cópias de segurança. Se houver um incidente que possa causar risco relevante, avisamos os afetados e a Autoridade Nacional de Proteção de Dados (ANPD).
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-white">9. Encarregado e contato</h2>
            <p>
              Encarregado pelo tratamento de dados: P4D Mídia LTDA, pelo e-mail <a href="mailto:privacidade@konvertmais.com.br" className="text-[#A855F7] hover:underline font-semibold">privacidade@konvertmais.com.br</a>.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-white">10. Cookies</h2>
            <p>
              O site usa cookies para funcionar e para medir os anúncios que trazem visitantes (como o Pixel da Meta e o Google). Você pode bloquear cookies no seu navegador.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-white">11. Mudanças</h2>
            <p>
              Podemos atualizar esta política. A data no topo mostra a versão em vigor, e mudanças relevantes são avisadas aos clientes por e-mail ou dentro do sistema.
            </p>
            <p className="pt-2">
              Veja também os <a href="/termos" className="text-[#A855F7] hover:underline font-semibold">Termos de Uso</a>.
            </p>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

