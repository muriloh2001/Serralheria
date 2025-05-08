import React from 'react';
import img1 from '../assets/Teto.jpeg';
import img2 from '../assets/teste3.png';
import img3 from '../assets/Portao2.jpeg';
import img4 from '../assets/portao3.jpeg';
import img5 from '../assets/escada.jpeg';
import img6 from '../assets/escada2.jpeg';
import img7 from '../assets/janela.jpeg';
import img8 from '../assets/Rua.jpeg';
import { motion } from 'framer-motion';
import bannerImage from '../assets/teste6.jpg';
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
  {
    img: img8,
    title: 'Grades Pantográficas',
    desc: 'Fechamento seguro para vitrines e entradas de lojas, com sistema retrátil.',
  },
];

const Portfolio = () => {
  return (
    <div className='py-[0.05rem] bg-gray-100'>
      <div
  className="relative h-[60vh] rounded-xl overflow-hidden mb-10 w-full"
  style={{ backgroundImage: `url(${bannerImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
>
        <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col justify-center items-center text-center px-4">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.08, repeat: Infinity, repeatDelay: 30 }}
            className="text-white text-4xl md:text-5xl font-extrabold mb-4 drop-shadow-lg"
          >
            Transformamos projetos em realidade
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, repeat: Infinity, repeatDelay: 30 }}
            className="text-gray-200 text-lg md:text-xl max-w-2xl drop-shadow-md"
          >
            Conheça nossos trabalhos e veja como unimos segurança, design e durabilidade em cada estrutura metálica.
          </motion.p>
        </div>
      </div>
    <div className="bg-gray-100 pt-[0.05rem] px-1 md:px-16">
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition duration-300 "
          >
            <img src={item.img} alt={item.title} className="w-full h-[30rem] object-cover" />
            <div className="p-6">
              <h3 className="text-[1.4rem] font-semibold text-gray-800 mb-2 ">{item.title}</h3>
              <p className="text-gray-600 text-[1.2rem]">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
        

    </div>

    <motion.div
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true }}
  className="mt-10 bg-gradient-to-r from-gray-900 to-gray-800 py-20 px-6 rounded-2xl shadow-xl text-white text-center"
>
  {/* Título com efeito digitando */}
  <h2
  className="text-4xl md:text-5xl font-extrabold mb-4 tracking-wide
             overflow-hidden whitespace-nowrap border-r-4 border-white
             animate-typing-blink max-w-full leading-[1.2] h-[calc(1em*1.2)]"
>
  Vamos realizar o seu projeto juntos?
</h2>


  {/* Texto explicativo */}
  <motion.p
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.4, duration: 0.8}}
    className="text-lg md:text-xl max-w-2xl mx-auto mb-10 text-gray-300 leading-relaxed"
  >
    Na <span className="text-white font-semibold">Serralheria Equifer</span>, entregamos mais que estruturas: oferecemos
    confiança, durabilidade e um atendimento que entende suas necessidades do início ao fim.
  </motion.p>

  {/* Botão animado */}
  <motion.a
    href="/orcamento"
    whileHover={{
      scale: 1.1,
      boxShadow: '0 0 20px rgba(255,255,255,0.6)',
    }}
    whileTap={{ scale: 0.95 }}
    animate={{
      scale: [1, 1.05, 1],
      boxShadow: [
        '0 0 0 rgba(255,255,255,0)',
        '0 0 10px rgba(255,255,255,0.5)',
        '0 0 0 rgba(255,255,255,0)',
      ],
    }}
    transition={{
      duration: 2,
      repeat: Infinity
    }}
    className="inline-flex items-center gap-3 bg-white text-gray-900 font-bold text-lg px-8 py-4 rounded-full"
  >
    <i className="fas fa-paper-plane animate-ping text-blue-600"></i>
    Solicitar Orçamento
  </motion.a>
</motion.div>


        </div>
  );
};

export default Portfolio;
