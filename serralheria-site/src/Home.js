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
      <h3 className="text-5xl font-semibold border-b-2 border-gray-900 inline-block mb-10">Sobre nós</h3>
      <h2 className="text-6xl font-bold text-gray-800 mb-10 leading-tight">Experiência e qualidade nos serviços</h2>
      <div className="text-gray-700 text-[2.3rem] leading-relaxed mb-10">
        <p>
          Atuamos desde 1999, na área de serralheria residencial e industrial. Tudo em ferro, aço inox e aço cortén.
          Faz parte de nossa linha de produção: Corrimão, Guarda-corpo, Grade, Portão, Aço Cortén, Mezanino, Muro
          de Vidro, Escada, Estrutura metálica, Executamos projetos especiais.
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
          <div className="w-full md:w-6/12 pb-2 py-[10rem] pb-[3rem] px-[6.5rem] text-justify">
            <h3 className="text-4xl font-bold border-b-2 border-gray-300 inline-block mb-10">Serviços</h3>
            <h2 className="text-[4rem] text-gray-900">Trabalhamos com diversos produtos em Ferro e Aço Inox de alta qualidade</h2>
          </div>
      <div className="py-20">
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

    
    <div class="h-full bg-white p-8 rounded-xl shadow-lg flex flex-col justify-between">
      <div>
        <h3 class="text-[1.6rem] font-semibold text-gray-800">Entre em Contato Agora</h3>
        <h2 class="text-4xl font-bold text-blue-600 mb-6">Agende sua Consulta para Soluções Sob Medida</h2>

        <form class="space-y-4 text-[1.5rem]">
          <div>
            <input type="text" id="nome" name="nome" placeholder="Nome"
              class="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>

          <div>
            <input type="tel" id="telefone" name="telefone" placeholder="Telefone"
              pattern="[0-9()#&amp;+*-=.]+" required
              class="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>

          <div>
            <input type="email" id="email" name="email" placeholder="Email"
              required
              class="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>

          <div>
            <select id="servico" name="servico" required
              class="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option value="">Selecione um serviço</option>
              <option value="Grades de proteção">Grades de proteção</option>
              <option value="Portões basculantes">Portões basculantes</option>
              <option value="Portas de aço">Portas de aço</option>
              <option value="Grades pantográficas">Grades pantográficas</option>
              <option value="Portões">Portões</option>
              <option value="Consertos e soldas em geral">Consertos e soldas em geral</option>
              <option value="Estruturas metálicas">Estruturas metálicas</option>
            </select>
          </div>

          <div>
            <textarea id="mensagem" name="mensagem" rows="4" placeholder="Mensagem"
              class="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
          </div>

          <button type="submit"
            class="w-full bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-blue-700 transition">
            Enviar Mensagem
          </button>
        </form>
      </div>
    </div>
  </div>
</div>
      </main>

      {/* WhatsApp flutuante */}
      <WhatsAppPopup />
    </div>
  );
}

export default Home;
