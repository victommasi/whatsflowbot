import React from 'react';
import { 
  Clock, 
  MessageCircle, 
  // BarChart, 
  // Users, 
  ShoppingCart, 
  Calendar,
  Settings,
  CheckSquare
} from 'lucide-react';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100">
      <div className="bg-blue-50 w-14 h-14 rounded-full flex items-center justify-center mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const Features: React.FC = () => {
  const features = [
    {
      icon: <Clock className="h-7 w-7 text-blue-600" />,
      title: "Atendimento 24/7",
      description: "Seu negócio nunca fecha. Atenda clientes a qualquer hora, mesmo enquanto você dorme."
    },
    {
      icon: <MessageCircle className="h-7 w-7 text-blue-600" />,
      title: "Respostas Inteligentes",
      description: "Sistema inteligente que aprende com interações e personaliza respostas para cada cliente."
    },
    // {
    //   icon: <BarChart className="h-7 w-7 text-blue-600" />,
    //   title: "Análise de Dados",
    //   description: "Relatórios detalhados sobre conversas, horários de pico e assuntos mais perguntados."
    // },
    // {
    //   icon: <Users className="h-7 w-7 text-blue-600" />,
    //   title: "Atendimento Multiusuário",
    //   description: "Gerencie múltiplas conversas simultaneamente sem comprometer a qualidade."
    // },
    {
      icon: <ShoppingCart className="h-7 w-7 text-blue-600" />,
      title: "Vendas Automáticas",
      description: "Excelente ferramenta para vendas no Modelo X1."
    },
    {
      icon: <Calendar className="h-7 w-7 text-blue-600" />,
      title: "Agendamento Integrado (em breve)",
      description: "Permita que clientes marquem horários diretamente pelo WhatsApp, sem intervenção manual."
    },
    {
      icon: <Settings className="h-7 w-7 text-blue-600" />,
      title: "Sem conhecimento técnico",
      description: "Deixamos o bot pronto para você, fazemos toda a programação necessária."
    },
    {
      icon: <CheckSquare className="h-7 w-7 text-blue-600" />,
      title: "Transição Para Humano",
      description: "Transferência suave para atendente humano quando necessário, sem perder o contexto da conversa."
    }
  ];

  return (
    <section id="features" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Recursos Poderosos para seu Negócio
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Nossa solução de automação para WhatsApp possui todas as ferramentas que você precisa para 
            transformar seu atendimento e impulsionar suas vendas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <FeatureCard 
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;