import React from "react";
import { TrendingUp, Clock, DollarSign, UserPlus } from "lucide-react";

const Benefits: React.FC = () => {
  return (
    <section id="benefits" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <span className="bg-blue-100 text-blue-800 text-sm font-medium px-4 py-1.5 rounded-full">
            Benefícios Comprovados
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-4 mb-4">
            Por que afiliados estão escolhendo o X1Bot?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Automatize seu atendimento no WhatsApp e veja resultados imediatos
            em seu negócio.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="https://images.pexels.com/photos/840996/pexels-photo-840996.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
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
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  Bot 100% automático
                </h3>
                <p className="text-gray-600">
                  Nada de extensões que dependem de ações manuais. O X1Bot
                  trabalha por você, mesmo com o WhatsApp fechado.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-blue-100 p-3 rounded-lg mr-4">
                <Clock className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  Fácil de configurar
                </h3>
                <p className="text-gray-600">
                  Crie seu fluxo de atendimento com interface simples, só
                  “clicar e arrastar”. Sem precisar de suporte ou instalação
                  técnica.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-purple-100 p-3 rounded-lg mr-4">
                <DollarSign className="h-6 w-6 text-purple-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  Preço justo e transparente
                </h3>
                <p className="text-gray-600">
                  Um dos melhores custo-benefícios do mercado. Automatize sem
                  pesar no bolso.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-orange-100 p-3 rounded-lg mr-4">
                <UserPlus className="h-6 w-6 text-orange-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  Mais conversões, menos esforço
                </h3>
                <p className="text-gray-600">
                  Responda rápido, filtre leads quentes e envie mensagens certas
                  no momento certo.
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
