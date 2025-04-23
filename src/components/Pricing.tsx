import React from 'react';
import { Check, X } from 'lucide-react';
import ButtonCTA from './ButtonCTA';

interface PricingPlanProps {
  title: string;
  price: string;
  description: string;
  features: Array<{text: string; included: boolean}>;
  ctaText: string;
  ctaLink: string;
  popular?: boolean;
}

const PricingPlan: React.FC<PricingPlanProps> = ({
  title,
  price,
  description,
  features,
  ctaText,
  ctaLink,
  popular = false
}) => {
  return (
    <div className={`
      bg-white rounded-2xl shadow-md overflow-hidden transition-transform duration-300 hover:shadow-xl
      ${popular ? 'border-2 border-blue-500 transform md:-translate-y-4' : 'border border-gray-200'}
    `}>
      {popular && (
        <div className="bg-blue-500 py-2 text-center">
          <span className="text-white text-sm font-medium">Mais Popular</span>
        </div>
      )}
      
      <div className="p-6 md:p-8">
        <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600 mb-6">{description}</p>
        
        <div className="mb-6">
          <span className="text-4xl font-bold text-gray-900">{price}</span>
          {price !== 'Personalizado' && <span className="text-gray-600">/mês</span>}
        </div>
        
        <ul className="space-y-3 mb-8">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              {feature.included ? (
                <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
              ) : (
                <X className="h-5 w-5 text-gray-400 mr-2 flex-shrink-0 mt-0.5" />
              )}
              <span className={feature.included ? 'text-gray-700' : 'text-gray-400'}>
                {feature.text}
              </span>
            </li>
          ))}
        </ul>
        
        <a
          href={ctaLink}
          className={`
            block w-full py-3 text-center rounded-lg font-medium transition-colors duration-300
            ${popular 
              ? 'bg-blue-600 hover:bg-blue-700 text-white' 
              : 'bg-white border border-blue-600 text-blue-600 hover:bg-blue-50'}
          `}
        >
          {ctaText}
        </a>
      </div>
    </div>
  );
};

const Pricing: React.FC = () => {
  const pricingPlans = [
    {
      title: "Básico",
      price: "R$69,90",
      subprice: "+ Instalação (a consultar)",
      description: "Ideal para pequenos negócios começando com automação",
      features: [
        { text: "Até 2000 mensagens/mês", included: true },
        { text: "Atendimento automático 24/7", included: true },
        { text: "Respostas para FAQs", included: true },
        { text: "Transferência para humano", included: true },
        { text: "Integrações com sistemas", included: false },
        { text: "Suporte prioritário", included: false },
        // { text: "1 número de WhatsApp", included: true },
        // { text: "Relatórios básicos", included: true },
      ],
      ctaText: "Começar Agora",
      ctaLink: "#cta",
      popular: false
    },
    {
      title: "Avançado",
      price: "R$89,90",
      subprice: "+ Instalação (a consultar)",
      description: "Perfeito para empresas em crescimento com maior volume",
      features: [
        { text: "Mensagens ilimitadas", included: true },
        { text: "Atendimento automático 24/7", included: true },
        { text: "Respostas para FAQs", included: true },
        // { text: "3 números de WhatsApp", included: true },
        // { text: "Relatórios avançados", included: true },
        { text: "Transferência para humano", included: true },
        { text: "Integrações com sistemas", included: true },
        { text: "Suporte prioritário", included: true },
      ],
      ctaText: "Escolher Profissional",
      ctaLink: "#cta",
      popular: true
    },
    // {
    //   title: "Empresarial",
    //   price: "R$697",
    //   description: "Solução completa para empresas estabelecidas",
    //   features: [
    //     { text: "Mensagens ilimitadas", included: true },
    //     { text: "Atendimento automático 24/7", included: true },
    //     { text: "Respostas para FAQs", included: true },
    //     { text: "10 números de WhatsApp", included: true },
    //     { text: "Relatórios avançados", included: true },
    //     { text: "Transferência para humano", included: true },
    //     { text: "Integrações com sistemas", included: true },
    //     { text: "Suporte prioritário", included: true },
    //   ],
    //   ctaText: "Escolher Empresarial",
    //   ctaLink: "#cta",
    //   popular: false
    // }
  ];

  return (
    <section id="pricing" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <span className="bg-purple-100 text-purple-800 text-sm font-medium px-4 py-1.5 rounded-full">Planos & Preços</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-4 mb-4">
            Escolha o plano ideal para seu negócio
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Temos opções para empresas de todos os tamanhos. Comece hoje mesmo e veja resultados imediatos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <PricingPlan key={index} {...plan} />
          ))}
        </div>
        
        <div className="mt-12 text-center mx-auto">
          <p className="text-gray-600 mb-4">Precisa de um plano personalizado para sua empresa?</p>
          <div className="w-full flex justify-center">
            <ButtonCTA />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;