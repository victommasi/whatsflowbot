import React from 'react';
import { TrendingUp, Clock, DollarSign, UserPlus } from 'lucide-react';

const Benefits: React.FC = () => {
  return (
    <section id="benefits" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <span className="bg-blue-100 text-blue-800 text-sm font-medium px-4 py-1.5 rounded-full">Benefícios Comprovados</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-4 mb-4">
            Por que empresários escolhem nosso bot?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Automatize seu atendimento no WhatsApp e veja resultados imediatos em seu negócio.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <img 
              src="https://images.pexels.com/photos/7138759/pexels-photo-7138759.jpeg" 
              alt="Empresário satisfeito com crescimento nos negócios" 
              className="rounded-lg shadow-xl w-full h-auto"
            />
          </div>
          
          <div className="space-y-8">
            <div className="flex items-start">
              <div className="bg-green-100 p-3 rounded-lg mr-4">
                <TrendingUp className="h-6 w-6 text-green-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Aumento nas Vendas</h3>
                <p className="text-gray-600">
                  Empresas relatam um aumento médio de 35% nas vendas após implementar nosso bot de atendimento, 
                  com respostas rápidas que não deixam o cliente esperando.
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-blue-100 p-3 rounded-lg mr-4">
                <Clock className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Economia de Tempo</h3>
                <p className="text-gray-600">
                  Economize até 20 horas semanais em seu negócio ao automatizar perguntas frequentes, 
                  permitindo que você e sua equipe foquem em tarefas estratégicas.
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-purple-100 p-3 rounded-lg mr-4">
                <DollarSign className="h-6 w-6 text-purple-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Redução de Custos</h3>
                <p className="text-gray-600">
                  Reduza custos operacionais em até 60% ao substituir parte do atendimento manual 
                  por nosso sistema automatizado, sem perder qualidade no atendimento.
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-orange-100 p-3 rounded-lg mr-4">
                <UserPlus className="h-6 w-6 text-orange-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Fidelização de Clientes</h3>
                <p className="text-gray-600">
                  Clientes valorizam respostas rápidas e consistentes. Nossos usuários relatam 
                  um aumento de 40% na taxa de retenção de clientes após implementar o bot.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;