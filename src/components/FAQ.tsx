import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 last:border-b-0">
      <button
        className="flex justify-between items-center w-full py-4 text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="text-lg font-medium text-gray-900">{question}</h3>
        {isOpen ? (
          <ChevronUp className="h-5 w-5 text-gray-500" />
        ) : (
          <ChevronDown className="h-5 w-5 text-gray-500" />
        )}
      </button>
      
      <div 
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-96 opacity-100 pb-4' : 'max-h-0 opacity-0'
        }`}
      >
        <p className="text-gray-600">{answer}</p>
      </div>
    </div>
  );
};

const FAQ: React.FC = () => {
  const faqs = [
    {
      question: "Como funciona a automação de WhatsApp?",
      answer: "Nosso sistema utiliza inteligência artificial para responder automaticamente às mensagens dos seus clientes, seguindo um fluxo de conversação que você configura. Quando um cliente envia uma mensagem, o bot analisa o conteúdo e responde de acordo com as regras que você definiu."
    },
    {
      question: "Preciso ter conhecimento técnico para configurar o bot?",
      answer: "Não! Nossa plataforma foi desenvolvida pensando em empresários sem conhecimento técnico. A interface é intuitiva e você pode configurar fluxos de atendimento através de uma interface visual simples de arrastar e soltar."
    },
    {
      question: "Posso personalizar as respostas do bot?",
      answer: "Sim, todas as respostas são 100% personalizáveis. Você pode criar fluxos de conversação específicos para seu negócio, incluir imagens, vídeos, links e até botões interativos."
    },
    {
      question: "E se o cliente precisar falar com um atendente humano?",
      answer: "Nosso sistema possui um recurso de transferência inteligente. Quando o bot identifica que não consegue resolver a questão do cliente, ou quando o cliente solicita atendimento humano, a conversa é transferida para um dos seus atendentes, mantendo todo o histórico do atendimento."
    },
    {
      question: "Quantas contas de WhatsApp posso conectar?",
      answer: "O número de contas varia conforme o plano escolhido. No plano Iniciante você pode conectar 1 número, no Profissional até 3 números, e no Empresarial até 10 números de WhatsApp."
    },
    {
      question: "Posso integrar com meu sistema atual?",
      answer: "Sim, oferecemos integrações com diversos sistemas como CRMs, plataformas de e-commerce e ERPs. No plano Empresarial, você tem acesso a todas as nossas integrações e API para desenvolvimento personalizado."
    },
    {
      question: "Existe um período de testes?",
      answer: "Sim, oferecemos 7 dias de teste gratuito em todos os planos para que você possa experimentar nossa solução e ver os resultados antes de decidir."
    },
    {
      question: "É possível vender produtos diretamente pelo WhatsApp?",
      answer: "Sim! Nosso sistema permite criar um catálogo de produtos que pode ser apresentado aos clientes durante a conversa, facilitando a venda direta pelo WhatsApp."
    }
  ];

  return (
    <section id="faq" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <span className="bg-orange-100 text-orange-800 text-sm font-medium px-4 py-1.5 rounded-full">Perguntas Frequentes</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-4 mb-4">
            Tire suas dúvidas
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Respondemos às perguntas mais comuns sobre nossa plataforma de automação para WhatsApp.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">Não encontrou sua pergunta?</p>
          <a 
            href="#contact" 
            className="text-blue-600 hover:text-blue-800 font-medium transition-colors"
          >
            Entre em contato com nossa equipe →
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;