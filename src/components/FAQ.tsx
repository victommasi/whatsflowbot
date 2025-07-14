import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import ButtonCTA from "./ButtonCTA";

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
          isOpen ? "max-h-96 opacity-100 pb-4" : "max-h-0 opacity-0"
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
      answer:
        "Nosso sistema utiliza responde automaticamente às mensagens dos seus clientes, seguindo um fluxo de conversação que você configura. Quando um cliente envia uma mensagem, o bot analisa o conteúdo e responde de acordo com as regras que você definiu.",
    },
    {
      question: "Preciso ter conhecimento técnico para configurar o bot?",
      answer:
        "Não! Nossa plataforma foi desenvolvida pensando em usuários sem conhecimento técnico. A criação dos funis é intuitiva e você pode configurar fluxos de atendimento através de uma interface visual simples de arrastar e soltar.",
    },
    {
      question: "O bot depende de extensões ou navegador?",
      answer:
        "Não! O X1Bot é totalmente independente. Funciona 24h sem depender de navegador aberto.",
    },
    {
      question: "Posso personalizar as respostas do bot?",
      answer:
        "Sim, todas as respostas são 100% personalizáveis. Você pode criar fluxos de conversação específicos para seu negócio, incluir imagens, vídeos, áudios, links, etc.",
    },
    {
      question: "E se o cliente precisar falar com um atendente humano?",
      answer:
        "Nosso sistema possui um recurso de transferência inteligente. Se estiver habilitado, quando o atendente humano responde o cliente, o bot identifica a transferência e interrompe as respostas automáticas, mantendo todo o histórico do atendimento.",
    },
    {
      question: "Quantas contas de WhatsApp posso conectar?",
      answer: "O número de contas varia conforme o plano escolhido.",
    },
    {
      question: "Posso usar com qualquer nicho?",
      answer:
        "Sim! Você personaliza o fluxo conforme seu produto. Funciona com nichos de emagrecimento, renda extra, low tickets, etc.",
    },
    {
      question: "Posso testar antes de pagar?",
      answer:
        "Sim! Você pode explorar a ferramenta antes de contratar. Sem cartão de crédito. (obs: com recursos limitados)",
    },
    {
      question: "Vocês configuram o bot pra mim?",
      answer:
        "A interface é tão simples que você mesmo faz, mas desenvolvemos uma seção de auto-ajuda para te ajudar. Se ainda assim estiver com duvidas, temos uma equipe de suporte para te dar todo o apoio possível.",
    },
  ];

  return (
    <section id="faq" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <span className="bg-orange-100 text-orange-800 text-sm font-medium px-4 py-1.5 rounded-full">
            Perguntas Frequentes
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-4 mb-4">
            Tire suas dúvidas
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Respondemos às perguntas mais comuns sobre nossa plataforma de
            automação para WhatsApp.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">Não encontrou sua pergunta?</p>
          <div className="w-full flex justify-center">
            <ButtonCTA title="Fale com o nosso especialista" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
