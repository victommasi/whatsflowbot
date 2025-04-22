import React from 'react';
import { ArrowRight, CheckCircle, MessageSquare } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="pt-28 pb-16 md:pt-32 md:pb-24 bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 md:pr-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-4">
              Automatize seu atendimento no 
              <span className="text-green-500"> WhatsApp</span>
            </h1>
            <p className="text-xl text-gray-700 mb-8">
              Transforme seu atendimento com um bot inteligente que trabalha 24/7, 
              aumentando suas vendas e liberando seu tempo para o que realmente importa.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                <p className="text-gray-700">Atendimento automático <span className="font-medium">24 horas por dia</span>, 7 dias por semana</p>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                <p className="text-gray-700">Respostas <span className="font-medium">personalizadas</span> para dúvidas frequentes</p>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                <p className="text-gray-700">Configuração <span className="font-medium">simples</span> e sem conhecimento técnico</p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#cta" 
                className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-8 py-3 rounded-full transition-colors duration-300 text-center flex items-center justify-center"
              >
                Começar Agora
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <a 
                href="#demo" 
                className="bg-white hover:bg-gray-100 text-gray-800 border border-gray-300 font-medium px-8 py-3 rounded-full transition-colors duration-300 text-center"
              >
                Ver Demonstração
              </a>
            </div>
          </div>
          
          <div className="md:w-1/2 mt-12 md:mt-0 relative">
            <div className="bg-white rounded-3xl shadow-xl p-4 max-w-xs mx-auto transform transition-transform hover:scale-105 duration-500">
              <div className="bg-green-100 rounded-2xl p-3">
                <div className="flex items-center mb-3">
                  <MessageSquare className="h-8 w-8 text-green-600 mr-2" />
                  <div>
                    <h3 className="font-bold text-gray-800">WhatsFlow Bot</h3>
                    <p className="text-xs text-gray-500">Online agora</p>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div className="bg-white p-3 rounded-lg rounded-tl-none shadow-sm">
                    <p className="text-sm">Olá! Como posso ajudar sua empresa hoje?</p>
                  </div>
                  
                  <div className="bg-blue-500 p-3 rounded-lg rounded-tr-none shadow-sm text-white ml-auto max-w-[80%]">
                    <p className="text-sm">Quero informações sobre preços e planos</p>
                  </div>
                  
                  <div className="bg-white p-3 rounded-lg rounded-tl-none shadow-sm animate-pulse">
                    <p className="text-sm">Claro! Temos três planos disponíveis...</p>
                    <p className="text-xs text-gray-400 mt-1">Enviando...</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-3 text-center">
                <p className="text-xs text-gray-500">Resposta automática em segundos</p>
              </div>
            </div>
            
            <div className="absolute -top-6 -right-6 bg-yellow-100 rounded-lg p-2 transform rotate-6 shadow-md hidden md:block">
              <p className="text-sm font-medium text-yellow-800">
                Aumente suas vendas em até 40%!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;