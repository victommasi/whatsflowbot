import React from "react";
import { Mail, Phone, Instagram } from "lucide-react";
import logo from "../assets/favicon-32x32.png";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="md:col-span-1">
            <div className="flex items-center mb-4">
              <img src={logo} />
              <span className="text-xl font-bold text-white ml-3">X1Bot</span>
            </div>
            <p className="mb-4">
              Automatize seu atendimento no WhatsApp e transforme seu negócio
              com nossa solução completa.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
              {/* <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
              </a> */}
            </div>
          </div>

          {/* <div>
            <h3 className="text-lg font-semibold text-white mb-4">Empresa</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white transition-colors">Sobre nós</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Carreiras</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Parceiros</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Imprensa</a></li>
            </ul>
          </div> */}

          {/* <div>
            <h3 className="text-lg font-semibold text-white mb-4">Recursos</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white transition-colors">Central de Ajuda</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Tutoriais</a></li>
              <li><a href="#" className="hover:text-white transition-colors">API</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Status</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Comunidade</a></li>
            </ul>
          </div> */}

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contato</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-3 text-gray-400" />
                <a
                  href="mailto:studiosavi18@gmail.com"
                  className="hover:text-white transition-colors"
                >
                  Studio Savi
                </a>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-3 text-gray-400" />
                <a
                  href="https://wa.link/pqhbxy"
                  target="_blank"
                  className="hover:text-white transition-colors"
                >
                  (85) 99192-4570
                </a>
              </li>
            </ul>

            {/* <div className="mt-6">
              <h4 className="text-sm font-semibold text-white mb-2">Assine nossa newsletter</h4>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Seu e-mail"
                  className="bg-gray-800 rounded-l-lg px-4 py-2 w-full focus:outline-none focus:ring-1 focus:ring-green-500"
                />
                <button className="bg-green-500 hover:bg-green-600 text-white rounded-r-lg px-4 transition-colors">
                  Enviar
                </button>
              </div>
            </div> */}
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row md:justify-between items-center">
            <p className="text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} X1Bot. Todos os direitos
              reservados.
            </p>
            <div className="flex space-x-6">
              <a
                href="#"
                className="text-sm hover:text-white transition-colors"
              >
                Termos de Serviço
              </a>
              <a
                href="#"
                className="text-sm hover:text-white transition-colors"
              >
                Política de Privacidade
              </a>
              <a
                href="#"
                className="text-sm hover:text-white transition-colors"
              >
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
