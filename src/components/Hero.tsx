import React from "react";
import { CheckCircle } from "lucide-react";
import ButtonCTA from "./ButtonCTA";
import logo from "../assets/favicon-32x32.png";

const Hero: React.FC = () => {
  return (
    <section className="pt-28 pb-16 md:pt-32 md:pb-24 bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 md:pr-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-4">
              Automatize seu <span className="text-green-500">WhatsApp</span> e
              escale suas vendas como{" "}
              <span className="text-green-500"> afiliado digital</span>
            </h1>
            <p className="text-xl text-gray-700 mb-8">
              Chega de perder tempo com respostas manuais ou extensões
              limitadas. Com o X1Bot, você cria seu atendimento automático em
              minutos, só clicar e arrastar.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                <p className="text-gray-700">
                  <span className="font-medium">
                    Atendimento 100% automático -{" "}
                  </span>
                  Esqueça extensões que exigem cliques ou o WhatsApp aberto. O
                  X1Bot responde por você, o tempo todo.
                </p>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                <p className="text-gray-700">
                  <span className="font-medium">Fácil de configurar - </span>
                  Crie seu fluxo de atendimento com interface simples, só
                  “clicar e arrastar”. Sem precisar de suporte ou instalação
                  técnica.
                </p>
              </div>
              {/* <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <p className="text-gray-700">
                    Ideal para vendas no WhatsApp (Método X1){" "}
                  </p>
                </div> */}
              {/* <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                <p className="text-gray-700">
                  <span className="font-medium">Configuração simples,</span> só
                  clicar e arrastar
                </p>
              </div> */}
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                <p className="text-gray-700">
                  <span className="font-medium">
                    Mais conversões, menos esforço –{" "}
                  </span>{" "}
                  Responda rápido, filtre leads quentes e envie mensagens certas
                  no momento certo.
                </p>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                <p className="text-gray-700">
                  <span className="font-medium">
                    Preço justo e transparente –{" "}
                  </span>{" "}
                  Um dos melhores custo-benefícios do mercado. Automatize sem
                  pesar no bolso.
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-6">
              {/* <ButtonCTA
                title="Quero ver uma demonstração"
                link="https://wa.link/5empa5"
              />*/}
              <ButtonCTA />
            </div>
          </div>

          <div className="md:w-1/2 mt-12 md:mt-0 relative">
            <div className="bg-white rounded-3xl shadow-xl p-4 max-w-xs mx-auto transform transition-transform hover:scale-105 duration-500">
              <div className="bg-green-100 rounded-2xl p-3">
                <div className="flex items-center mb-3 gap-2">
                  <img src={logo} width="24px" height="auto" />
                  <div>
                    <h3 className="font-bold text-gray-800">X1Bot</h3>
                    <p className="text-xs text-gray-500">Online agora</p>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="bg-white p-3 rounded-lg rounded-tl-none shadow-sm">
                    <p className="text-sm">
                      Olá! Como posso ajudar sua empresa hoje?
                    </p>
                  </div>

                  <div className="bg-blue-500 p-3 rounded-lg rounded-tr-none shadow-sm text-white ml-auto max-w-[80%]">
                    <p className="text-sm">
                      Quero informações sobre preços e planos
                    </p>
                  </div>

                  <div className="bg-white p-3 rounded-lg rounded-tl-none shadow-sm animate-pulse">
                    <p className="text-sm">
                      Claro! Temos três planos disponíveis...
                    </p>
                    <p className="text-xs text-gray-400 mt-1">Enviando...</p>
                  </div>
                </div>
              </div>

              <div className="mt-3 text-center">
                <p className="text-xs text-gray-500">
                  Resposta automática em segundos
                </p>
              </div>
            </div>

            <div className="absolute -top-6 -right-2 bg-yellow-100 rounded-lg p-2 transform rotate-12 shadow-md hidden md:block">
              <p className="text-sm font-medium text-yellow-800">
                Venda 24/7 e ganhe dinheiro enquanto dorme!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
