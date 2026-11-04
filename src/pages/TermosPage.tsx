import React, { useEffect } from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

export const TermosPage: React.FC = () => {
  useEffect(() => {
    document.title = 'Termos de Uso | KonvertMais';
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="relative min-h-screen bg-[#07070B] text-[#E5E7EB] antialiased selection:bg-[#7C3AED] selection:text-white flex flex-col justify-between">
      <Header />

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 w-full flex-grow">
        <div className="space-y-8 text-[#D1D5DB] leading-relaxed">
          <div className="border-b border-[#242238] pb-6">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
              Termos de Uso do KonvertMais
            </h1>
            <p className="text-sm text-[#9CA3AF] mt-2 italic">
              Última atualização: 4 de novembro de 2026
            </p>
          </div>

          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-white">1. Quem somos</h2>
            <p>
              O KonvertMais é um serviço de atendimento e vendas por WhatsApp com inteligência artificial, oferecido por <strong className="text-white">P4D Mídia LTDA</strong>, CNPJ 49.089.513/0001-00, com sede na Rua Perpétuas, 315, Bairro Emília, Sete Lagoas/MG, CEP 35701-366 ("KonvertMais", "nós").
            </p>
            <p>
              Estes Termos valem para a empresa que contrata o KonvertMais ("Cliente") e para as pessoas que o Cliente cadastra para usar o sistema ("Usuários"). Ao criar a conta ou começar o teste grátis, o Cliente aceita estes Termos e a Política de Privacidade.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-white">2. O que o KonvertMais faz</h2>
            <p>
              O KonvertMais oferece, pelo endereço app.konvertmais.com.br: agentes de inteligência artificial que conversam com os clientes do Cliente pelo WhatsApp e por outros canais conectados; caixa de entrada para a equipe; funil de vendas (CRM); agenda; mensagens de retorno automáticas; relatórios; e a Konvert Academy, com o passo a passo de cada tela.
            </p>
            <p>
              O sistema é baseado em software de código aberto, instalado e operado pela P4D Mídia em servidores contratados por ela. Os autores do software original não participam desta relação.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-white">3. Conta, teste grátis e implantação</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>A conta é liberada depois de uma conversa com o nosso time.</li>
              <li>O primeiro uso tem 7 dias de teste grátis. Se o Cliente não assinar ao fim do teste, a conta é suspensa, sem cobrança.</li>
              <li>O Cliente pode configurar o sistema sozinho, seguindo a Konvert Academy, ou pedir a implantação pelo nosso time, que deixa o agente funcionando em até 48 horas úteis depois de receber o acesso ao número e o material da empresa. A implantação não tem custo enquanto esta condição estiver anunciada no site.</li>
              <li>Cada Usuário tem login pessoal e é responsável por manter a senha em sigilo. O Cliente responde pelo que os seus Usuários fazem no sistema.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-white">4. Plano, créditos e pagamento</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>O plano é mensal e pré-pago. O preço, o que está incluso e o valor dos extras (usuários e números a mais) são os publicados em konvertmais.com.br na data da contratação.</li>
              <li>O uso de inteligência artificial consome <strong className="text-white">créditos</strong>. O plano inclui uma quantidade de créditos por mês, e o Cliente pode comprar recargas. O painel mostra o consumo e avisa antes do saldo acabar. Quando o saldo acaba, o agente de IA para de responder até uma nova recarga; a caixa de entrada e o restante do sistema continuam funcionando.</li>
              <li>Os créditos acumulam: o que sobra de um mês passa para o seguinte, tanto os créditos do plano quanto os de recarga. Créditos não são convertidos em dinheiro nem devolvidos. Se a assinatura for encerrada com saldo, ele continua guardado na conta e volta a valer se o Cliente reativar a assinatura.</li>
              <li>A cobrança é feita pela P4D Mídia, pelo Asaas, por Pix, boleto ou cartão. Se uma mensalidade ficar em aberto por mais de 7 dias depois do vencimento, a conta pode ser suspensa até o pagamento.</li>
              <li>Os preços podem ser reajustados a qualquer momento, com aviso por e-mail pelo menos 30 dias antes de valerem. O Cliente decide se renova com o novo preço ou se cancela, sem multa.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-white">5. Cancelamento</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>Não há fidelidade nem taxa de cancelamento. O Cliente pode cancelar a qualquer momento pelo e-mail de suporte ou pelo WhatsApp do KonvertMais.</li>
              <li>O cancelamento interrompe a próxima renovação. O mês já pago continua ativo até completar os 30 dias do período e, depois disso, o acesso é bloqueado. Por isso o valor pago não é devolvido, salvo no direito de desistência descrito abaixo.</li>
              <li>Se o Cliente pedir, o time de suporte entrega a exportação das informações em até 48 horas úteis. Os dados são apagados 30 dias depois do fim do acesso, salvo o que a lei obrigar a guardar.</li>
            </ul>
            <p className="pt-2">
              <strong className="text-white">Direito de desistência.</strong> Quando a contratação é feita pela internet, o Cliente pode desistir em até 7 dias contados do primeiro pagamento e recebe de volta o valor pago, conforme o artigo 49 do Código de Defesa do Consumidor. Os 7 dias de teste grátis são anteriores ao pagamento e não substituem esse prazo.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-white">6. Uso permitido</h2>
            <p>O Cliente se compromete a:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>usar o KonvertMais só para falar com pessoas que procuraram a sua empresa ou que aceitaram receber mensagens dela;</li>
              <li>atender na hora quem pedir para não receber mais mensagens (o sistema bloqueia novos envios para essa pessoa);</li>
              <li>não enviar mensagens em massa sem pedido, conteúdo ilegal, enganoso ou ofensivo;</li>
              <li>seguir as regras do WhatsApp, da Meta e dos demais canais conectados;</li>
              <li>ter base legal para tratar os dados dos seus clientes, conforme a Lei Geral de Proteção de Dados (LGPD);</li>
              <li>não tentar acessar dados de outras empresas, nem copiar, revender ou desmontar o sistema.</li>
            </ul>
            <p className="pt-1">O descumprimento pode levar à suspensão da conta.</p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-white">7. WhatsApp e serviços de terceiros</h2>
            <p>
              O KonvertMais se conecta ao WhatsApp por QR Code ou pela API oficial da Meta, e usa fornecedores de tecnologia para funcionar. Esses serviços são de terceiros e têm regras próprias. Pela conexão por QR Code, o sistema usa proteções de envio (aquecimento, limite diário e janela de horário), mas <strong className="text-white">não há como garantir que o WhatsApp não bloqueie um número</strong>. O KonvertMais não responde por bloqueios, mudanças ou interrupções causados por esses terceiros.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-white">8. Inteligência artificial</h2>
            <p>
              O agente responde com base nas instruções e no material que o Cliente cadastra. Respostas de inteligência artificial podem conter erros. O Cliente é responsável pelo conteúdo que cadastra, por revisar as configurações do agente e por conferir, com uma pessoa, decisões sobre preço, prazo, contrato, saúde, crédito ou obrigações legais. O sistema permite passar a conversa para uma pessoa a qualquer momento.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-white">9. Dados</h2>
            <p>
              Os dados dos clientes do Cliente pertencem ao Cliente. Em relação a esses dados, o Cliente é o <strong className="text-white">controlador</strong> e a P4D Mídia é a <strong className="text-white">operadora</strong>: tratamos esses dados só para prestar o serviço, seguindo as instruções do Cliente. Os detalhes estão na <a href="/privacidade" className="text-[#A855F7] hover:underline font-semibold">Política de Privacidade</a>.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-white">10. Disponibilidade e responsabilidade</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>Trabalhamos para manter o sistema no ar todos os dias, mas pode haver paradas para manutenção ou por falhas fora do nosso controle. Paradas programadas são avisadas com antecedência sempre que possível.</li>
              <li>O KonvertMais não garante resultado de vendas.</li>
              <li>A P4D Mídia não responde por danos causados por uso do sistema fora destes Termos.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-white">11. Serviços da P4D Mídia</h2>
            <p>
              Gestão de tráfego e assessoria de marketing são serviços separados, contratados à parte, com contrato e nota fiscal próprios. O preço especial para assinantes vale enquanto a assinatura do KonvertMais estiver ativa.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-white">12. Mudanças nestes Termos</h2>
            <p>
              Podemos atualizar estes Termos. Mudanças relevantes são avisadas por e-mail ou dentro do sistema com pelo menos 30 dias de antecedência. Continuar usando o serviço depois desse prazo significa aceitar a nova versão.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-white">13. Contato e foro</h2>
            <p>
              Suporte: <a href="mailto:suporte@konvertmais.com.br" className="text-[#A855F7] hover:underline">suporte@konvertmais.com.br</a> e WhatsApp <a href="https://wa.me/5531995006891" target="_blank" rel="noopener noreferrer" className="text-[#22C55E] hover:underline">(31) 99500-6891</a>, de segunda a sexta, das 8h às 18h.
            </p>
            <p>
              Fica eleito o foro da comarca de Sete Lagoas/MG para resolver questões sobre estes Termos, ressalvado o direito do consumidor de escolher o foro do seu domicílio quando a lei permitir.
            </p>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

