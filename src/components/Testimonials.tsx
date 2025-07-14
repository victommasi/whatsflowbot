import React from "react";
import { Star } from "lucide-react";

interface TestimonialProps {
  quote: string;
  name: string;
  position: string;
  company: string;
  image: string;
  stars: number;
  metrics?: string;
}

const Testimonial: React.FC<TestimonialProps> = ({
  quote,
  name,
  position,
  company,
  image,
  stars,
  metrics,
}) => {
  return (
    <div className="bg-white p-6 md:p-8 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow duration-300">
      <div className="flex items-center mb-4">
        {Array(5)
          .fill(0)
          .map((_, i) => (
            <Star
              key={i}
              className={`w-5 h-5 ${
                i < stars ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
              }`}
            />
          ))}
      </div>

      <p className="text-gray-700 mb-6 italic">"{quote}"</p>

      {metrics && (
        <div className="bg-blue-50 p-3 rounded-lg mb-6">
          <p className="text-blue-800 font-medium text-sm">{metrics}</p>
        </div>
      )}

      <div className="flex items-center">
        <img
          src={image}
          alt={name}
          className="w-12 h-12 rounded-full object-cover mr-4"
        />
        <div>
          <h4 className="font-bold text-gray-900">{name}</h4>
          <p className="text-gray-600 text-sm">
            {position}, {company}
          </p>
        </div>
      </div>
    </div>
  );
};

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      quote:
        "Era cético no começo, mas em minutos o bot já estava rodando 100% sozinho. Muito melhor que as extensões que eu usava antes.",
      name: " Bruno Tomé",
      position: "Afiliado",
      company: "Low Ticket",
      image: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg",
      stars: 5,
      metrics: "Configurou o bot em minutos!",
    },
    {
      quote:
        "Estava perdendo clientes por não conseguir responder rapidamente. Agora, o bot responde 24/7 e meu negócio fatura até enquanto durmo.",
      name: "Carlos Mendes",
      position: "Infoprodutor",
      company: "",
      image:
        "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg",
      stars: 5,
      metrics: "Vende enquanto dorme!",
    },
    // {
    //   quote:
    //     "Inicialmente fiquei cético, mas os resultados falam por si. Os clientes adoram a rapidez nas respostas e nossa taxa de conversão disparou.",
    //   name: "Roberto Almeida",
    //   position: "Diretor",
    //   company: "Restaurante Sabor & Vida",
    //   image: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg",
    //   stars: 4,
    //   metrics: "Aumento de 28% em pedidos online",
    // },
    {
      quote:
        "Com o X1Bot automatizei o funil inteiro. Hoje, enquanto gero tráfego, o bot qualifica os leads. Dobrei minhas conversões.",
      name: "Camila S.",
      position: "Afiliada",
      company: "PLR",
      image: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg",
      stars: 5,
      metrics: "Dobrou as conversões!",
    },
  ];

  return (
    <section
      id="testimonials"
      className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <span className="bg-green-100 text-green-800 text-sm font-medium px-4 py-1.5 rounded-full">
            Depoimentos
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-4 mb-4">
            O que nossos clientes dizem
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Afiliados transformaram seus negócios com nossa solução de automação
            para WhatsApp.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Testimonial key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
