import React from 'react';
import { ArrowRight, CheckCircle, Clock } from 'lucide-react';

const CTA: React.FC = () => {
  return (
    <section id="cta" className="py-16 md:py-24 bg-blue-600">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Comece hoje a automatizar seu WhatsApp
            </h2>
            <p className="text-blue-100 text-xl mb-8">
              Libere seu tempo, aumente suas vendas e encante seus clientes com respostas rápidas e personalizadas.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-blue-300 mr-2 flex-shrink-0 mt-0.5" />
                <p className="text-blue-100">Configuração em apenas <span className="font-medium text-white">5 minutos</span></p>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-blue-300 mr-2 flex-shrink-0 mt-0.5" />
                <p className="text-blue-100"><span className="font-medium text-white">7 dias de teste grátis</span> em qualquer plano</p>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-blue-300 mr-2 flex-shrink-0 mt-0.5" />
                <p className="text-blue-100">Suporte <span className="font-medium text-white">especializado</span> para ajudar na configuração</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-2 text-blue-100">
              <Clock className="h-5 w-5" />
              <p>Oferta por tempo limitado: <span className="font-medium text-white">50% de desconto</span> no primeiro mês</p>
            </div>
          </div>
          
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Começar agora</h3>
            
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Nome completo
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-blue-600"
                  placeholder="Seu nome"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  E-mail empresarial
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-blue-600"
                  placeholder="seu@email.com"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  WhatsApp
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-blue-600"
                  placeholder="(00) 00000-0000"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="business" className="block text-sm font-medium text-gray-700 mb-1">
                  Nome da empresa
                </label>
                <input
                  type="text"
                  id="business"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-blue-600"
                  placeholder="Sua empresa"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="plan" className="block text-sm font-medium text-gray-700 mb-1">
                  Plano de interesse
                </label>
                <select
                  id="plan"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-blue-600"
                  required
                >
                  <option value="">Selecione um plano</option>
                  <option value="starter">Iniciante - R$197/mês</option>
                  <option value="professional">Profissional - R$397/mês</option>
                  <option value="business">Empresarial - R$697/mês</option>
                  <option value="custom">Personalizado</option>
                </select>
              </div>
              
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-lg transition-colors duration-300 flex items-center justify-center"
              >
                Começar Meu Teste Grátis
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
            </form>
            
            <p className="text-gray-500 text-sm mt-4 text-center">
              Ao se cadastrar, você concorda com nossos Termos de Serviço e Política de Privacidade.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;