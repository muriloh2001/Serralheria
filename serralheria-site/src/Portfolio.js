import React from 'react';
import img1 from './assets/Teto.jpeg';
import img2 from './assets/teste3.png';
import img3 from './assets/Portao2.jpeg';
import img4 from './assets/portao3.jpeg';
import img5 from './assets/escada.jpeg';
import img6 from './assets/escada2.jpeg';
import img7 from './assets/janela.jpeg';
import img8 from './assets/Rua.jpeg';

const projects = [
  {
    img: img1,
    title: 'Portão Basculante sob medida',
    desc: 'Instalado com motor eletrônico e acabamento galvanizado para máxima durabilidade.',
  },
  {
    img: img2,
    title: 'Grade de Proteção Residencial',
    desc: 'Estilo e segurança para sua casa. Projeto personalizado de acordo com a fachada.',
  },
  {
    img: img3,
    title: 'Escada Metálica',
    desc: 'Ideal para espaços externos. Reforço estrutural com pintura anticorrosiva.',
  },
  {
    img: img4,
    title: 'Estrutura Metálica',
    desc: 'Cobertura resistente para garagem com calha integrada e acabamento profissional.',
  },
  {
    img: img5,
    title: 'Porta de Aço Comercial',
    desc: 'Modelo enrolável, ideal para comércios com sistema de travamento reforçado.',
  },
  {
    img: img6,
    title: 'Portão de correr automático',
    desc: 'Praticidade no dia a dia com acionamento remoto e sistema silencioso.',
  },
  {
    img: img7,
    title: 'Corrimão Inox',
    desc: 'Sofisticação e segurança para escadas e varandas. Acabamento polido.',
  },
  {
    img: img8,
    title: 'Grades Pantográficas',
    desc: 'Fechamento seguro para vitrines e entradas de lojas, com sistema retrátil.',
  },
];

const Portfolio = () => {
  return (
    <div className="bg-gray-100 pt-[10rem] px-4 md:px-16">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold text-gray-800 mb-4">Transformamos projetos em realidade</h1>
        <p className="text-gray-600 text-[1.8rem] max-w-2xl mx-auto">
          Confira alguns dos nossos trabalhos realizados e veja como podemos entregar qualidade, segurança e estilo em cada detalhe.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition duration-300 "
          >
            <img src={item.img} alt={item.title} className="w-full h-[30rem] object-cover" />
            <div className="p-6">
              <h3 className="text-[2rem] font-semibold text-gray-800 mb-2 ">{item.title}</h3>
              <p className="text-gray-600 text-[1.6rem]">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Gostou do nosso trabalho?</h2>
        <p className="text-gray-600 mb-6">Solicite um orçamento agora mesmo e leve qualidade para o seu projeto.</p>
        <a
          href="/orcamento"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
        >
          Solicitar Orçamento
        </a>
      </div>
    </div>
  );
};

export default Portfolio;
