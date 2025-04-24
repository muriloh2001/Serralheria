import React, { useState, useEffect, useRef } from 'react';
import WhatsAppPopup from './WhatsAppPopup';
import '@fortawesome/fontawesome-free/css/all.min.css';

function Home() {
  const images = [
    "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
    "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
    "https://images.unsplash.com/photo-1506744038136-46273834b3fb"
  ];

  const trabalhos = [
    "https://www.ironart.com.br/uploads/content_file/MEDestrutura-metalica19.jpg",
    "https://www.ironart.com.br/uploads/content_file/MEDgrade20.jpg",
    "https://www.ironart.com.br/uploads/content_file/MEDmoveis-metalicos11.jpg",
    "https://www.ironart.com.br/uploads/content_file/MEDmoveis-metalicos11.jpg",
    "https://www.ironart.com.br/uploads/content_file/MEDestrutura-metalica19.jpg",
    "https://www.ironart.com.br/uploads/content_file/MEDgrade20.jpg",
    "https://www.ironart.com.br/uploads/content_file/MEDmoveis-metalicos11.jpg",
    "https://www.ironart.com.br/uploads/content_file/MEDmoveis-metalicos11.jpg"
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
      if (container.scrollLeft + container.offsetWidth >= container.scrollWidth) {
        container.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        container.scrollBy({ left: 360, behavior: 'smooth' });
      }
    }, 2500);

    return () => clearInterval(scrollInterval);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 text-gray-800 font-sans flex flex-col">
      <main className="pt-24 flex-1">

        {/* Carrossel maior */}
        <section className="mb-12">
          <div className="relative w-full h-[60vh] overflow-hidden rounded-lg shadow-lg">
            <img
              src={images[currentIndex]}
              alt={`Imagem do carrossel número ${currentIndex + 1}`}
              className="absolute top-0 left-0 w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
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
        src="https://images.unsplash.com/photo-1506744038136-46273834b3fb"
        alt="Experiência e qualidade nos serviços"
      />
    </div>

    {/* Texto com fonte maior */}
    <div className="w-1/3">
      <h3 className="text-2xl font-semibold border-b-2 border-gray-800 inline-block mb-4">Sobre nós</h3>
      <h2 className="text-4xl font-bold text-gray-800 mb-6 leading-tight">Experiência e qualidade nos serviços</h2>
      <div className="text-gray-700 text-lg leading-relaxed mb-6">
        <p>
          Atuamos desde 1999, na área de serralheria residencial e industrial. Tudo em ferro, aço inox e aço cortén.
          Faz parte de nossa linha de produção: Corrimão, Guarda-corpo, Grade, Portão, Aço Cortén, Mezanino, Muro
          de Vidro, Escada, Estrutura metálica, Executamos projetos especiais.
        </p>
      </div>
      <a
        href="https://www.ironart.com.br/sobre-nos/"
        className="inline-block bg-black text-white text-base py-3 px-6 rounded hover:bg-gray-800 transition"
      >
        Conheça mais
      </a>
    </div>
  </div>

  {/* Layout mobile (imagem acima do texto) */}
  <div className="lg:hidden max-w-3xl mx-auto px-6 py-10">
    <img
      className="w-full h-auto mb-6 rounded-2xl shadow-lg"
      src="https://images.unsplash.com/photo-1506744038136-46273834b3fb"
      alt="Experiência e qualidade nos serviços"
    />
    <h3 className="text-xl font-semibold border-b-2 border-gray-800 inline-block mb-2">Sobre nós</h3>
    <h2 className="text-3xl font-bold text-gray-800 mb-4 leading-tight">Experiência e qualidade nos serviços</h2>
    <div className="text-gray-700 text-base leading-relaxed mb-6">
      <p>
        Atuamos desde 1999, na área de serralheria residencial e industrial. Tudo em ferro, aço inox e aço cortén.
        Faz parte de nossa linha de produção: Corrimão, Guarda-corpo, Grade, Portão, Aço Cortén, Mezanino, Muro
        de Vidro, Escada, Estrutura metálica, Executamos projetos especiais.
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

        {/* Carrossel menor com scroll automático */}
        <section className="mb-10 px-10">
        <h4 className="text-4xl font-semibold mb-10">Nossos Serviços</h4>
          <div
            ref={scrollContainerRef}
            className="flex space-x-6 overflow-x-auto scroll-smooth pb-6 no-scrollbar"
          >
            {trabalhos.map((imgUrl, index) => (
              <img
                key={index}
                src={imgUrl}
                alt={`Imagem de trabalho de serralheria número ${index + 1}`}
                className="w-[80vw] max-w-[500px] h-[300px] sm:h-[400px] object-cover flex-shrink-0 rounded-lg shadow-lg"
                loading="lazy"
              />
            ))}
          </div>
        </section>

        {/* Contato */}
        <section className="mb-12 px-4">
          <h2 className="text-2xl font-semibold mb-4">Contato</h2>
          <p>Entre em contato clicando no botão flutuante no canto inferior direito.</p>
        </section>
      </main>

      {/* WhatsApp flutuante */}
      <WhatsAppPopup />
    </div>
  );
}

export default Home;
