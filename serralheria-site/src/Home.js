import React, { useState, useEffect, useRef } from 'react';
import WhatsAppPopup from './WhatsAppPopup';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Teto1 from './assets/Teto.jpeg';
import Rua from './assets/Rua.jpeg';
import Portao from './assets/Portao.jpeg';
import Portao3 from './assets/portao3.jpeg';
import Portao2 from './assets/Portao2.jpeg';
import Janela from './assets/janela.jpeg';
import escada from './assets/escada.jpeg';
import escada2 from './assets/escada2.jpeg';
import teste3 from './assets/teste3.png';
import teste5 from './assets/teste5.jpg';
import teste6 from './assets/teste6.jpg';
import HomeForm from './HomeForm'; // se for separado em outro arquivo




function Home() {
  const images = [
  teste3,teste5,teste6
  ];
 
  const trabalhos = [
   Teto1,Rua,Portao,Portao2,Portao3,Janela,escada,escada2
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    const mainCarousel = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(mainCarousel);
  }, []);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const scrollInterval = setInterval(() => {
      const scrollAmount = 1050; // 4 imagens + 3 espaços
      if (container.scrollLeft + container.offsetWidth >= container.scrollWidth) {
        container.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      }
    }, 2500);

    return () => clearInterval(scrollInterval);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 text-gray-800 font-sans flex flex-col">
              <main className="pt-[5.5rem] flex-1">

                {/* Carrossel maior */}
                <section className="w-300px py-[3rem]">
                    <div className="relative w-screen h-[75vh] overflow-cover">
              <img
                src={images[currentIndex]}
                alt={`Imagem do carrossel número ${currentIndex + 1}`}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
                {images.map((_, index) => (
                  <div
                    key={index}
                    className={`w-3 h-3 rounded-full ${index === currentIndex ? 'bg-white' : 'bg-gray-500'}`}
                  ></div>
                ))}
              </div>
            </div>

        </section>

        <section className="w-full px-0 py-8">
  {/* Layout principal com imagem e texto lado a lado */}
  <div className="hidden lg:flex lg:flex-nowrap lg:justify-start max-w-1xl mx-auto pl-0 pr-8 items-center gap-[14rem]">
    {/* Imagem maior */}
    <div className="w-1/2">
      <img
        className="w-full h-auto object-cover rounded-2xl shadow-lg"
        src={Rua}
        alt="Experiência e qualidade nos serviços"
      />
    </div>

    {/* Texto com fonte maior */}
    <div className="w-1/3">
      <h3 className="text-5xl font-semibold border-b-2 border-gray-900 inline-block mb-10">Sobre nós</h3>
      <h2 className="text-6xl font-bold text-gray-800 mb-10 leading-tight">Experiência e qualidade nos serviços</h2>
      <div className="text-gray-700 text-[2rem] leading-relaxed mb-10">
        <p>
        Desde 2006, a Serralheria Equifer vem construindo uma história de dedicação e confiança no setor metalúrgico. 
        Iniciando suas atividades em Curitiba/PR e hoje sediada em Piraquara, somos uma empresa familiar que valoriza o trabalho bem feito e o relacionamento com nossos clientes. 
        Trabalhamos com materiais como aço galvanizado, ferro, inox, entre outros, sempre buscando entregar soluções de qualidade que atendam às necessidades de cada projeto.
        </p>
      </div>
      <a
        href="https://www.ironart.com.br/sobre-nos/"
        className="inline-block bg-black text-white text-base text-[1.4rem] py-4 px-7 rounded hover:bg-gray-800 transition"
      >
        Conheça mais
      </a>
    </div>
  </div>

  {/* Layout mobile (imagem acima do texto) */}
  <div className="lg:hidden max-w-3xl mx-auto px-6 py-10">
    <img
      className="w-full h-auto mb-6 rounded-2xl shadow-lg"
      src={Rua}
      alt="Experiência e qualidade nos serviços"
    />
    <h3 className="text-xl font-semibold border-b-2 border-gray-800 inline-block mb-2">Sobre nós</h3>
    <h2 className="text-3xl font-bold text-gray-800 mb-4 leading-tight">Experiência e qualidade nos serviços</h2>
    <div className="text-gray-700 text-base leading-relaxed mb-6">
      <p>
      Desde 2006, a Serralheria Equifer vem construindo uma história de dedicação e confiança no setor metalúrgico. 
      Iniciando suas atividades em Curitiba/PR e hoje sediada em Piraquara, somos uma empresa familiar que valoriza o trabalho bem feito e o relacionamento com nossos clientes. 
      Trabalhamos com materiais como aço galvanizado, ferro, inox, entre outros, sempre buscando entregar soluções de qualidade que atendam às necessidades de cada projeto.
      </p>
    </div>
    <a
      href="https://www.ironart.com.br/sobre-nos/"
      className="inline-block bg-black text-white py-3 px-6 rounded hover:bg-gray-800 transition"
    >
      Conheça mais
    </a>
  </div>
</section>
          <div className="w-full md:w-6/12 pb-2 py-[10rem] pb-[3rem] px-[6.5rem] text-justify">
            <h3 className="text-5xl font-semibold border-b-2 border-gray-900 inline-block mb-10">Serviços</h3>
            <h2 className="text-6xl font-bold text-gray-800 mb-10 leading-tight">Trabalhamos com diversos produtos em Ferro e Aço Inox de alta qualidade</h2>
          </div>
      <div className="mb-24">
            {/* Carrossel menor com scroll automático */}
            <section className="mb-10 px-[6.5rem]">
            <h4 className="text-4xl font-semibold mb-10">Serviços Efetuados</h4>
              <div
                ref={scrollContainerRef}
                className="flex space-x-6 overflow-x-auto scroll-smooth pb-24 no-scrollbar"
              >
                {trabalhos.map((imgUrl, index) => (
                  <img
                    key={index}
                    src={imgUrl}
                    alt={`Imagem de trabalho de serralheria número ${index + 1}`}
                    className="w-[80vw] max-w-[500px] h-[450px] sm:h-[500px] object-cover flex-shrink-0 rounded-lg shadow-lg"
                    loading="lazy"
                  />
                ))}
              </div>
            </section>
        </div>


        <div class="max-w-1xl mx-auto px-[6.5rem] ">
  <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch min-h-[900px] ">
    
    <div class="h-full w-full ">
      <iframe
        loading="lazy"
        src="https://maps.google.com/maps?q=Rua%20Ernesto%20Germano%20Francisco%20Hannemam%20N%C2%B0%2031%20-%20Tatuquara%20-%20Curitiba%20%E2%80%93%20PR&t=h&z=18&output=embed"
        title="Rua Ernesto Germano Francisco Hannemam"
        class="w-full h-full rounded-xl shadow-lg "
        allowfullscreen
        aria-hidden="false"
      ></iframe>
      
    </div>

    
    <div class="h-full bg-white p-10 rounded-xl shadow-lg flex flex-col justify-start">
        <h3 class="text-[1.8rem] font-semibold text-gray-800 pt-[3rem]">Entre em Contato Agora</h3>
        <h2 class="text-4xl font-bold text-blue-600 pt-[1rem] pb-[3rem]">Agende sua Consulta para Soluções Sob Medida</h2>
      
        <HomeForm className="mt-0 pb-0 max-w-full" />
    </div>
  </div>
</div>
      </main>
    </div>
  );
}

export default Home;
