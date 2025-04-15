import React, { useState, useEffect } from 'react';

function Home() {
  const images = [
    "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
    "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
    "https://images.unsplash.com/photo-1506744038136-46273834b3fb"
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 text-gray-800 font-sans flex flex-col">
      {/* Espaço para a navbar fixa */}
      <div className="pt-24 flex-1">
        {/* Carrossel */}
        <section className="mb-12">
          <div className="relative w-full h-[60vh] overflow-hidden rounded-lg shadow-lg">
            <img
              src={images[currentIndex]}
              alt={`Carrossel imagem ${currentIndex + 1}`}
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

        {/* Seções de conteúdo fictício */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-2">Nossos Serviços</h2>
          <ul className="list-disc list-inside ml-2">
            <li><strong>Portões de Ferro:</strong> Segurança e durabilidade para sua casa.</li>
            <li><strong>Grades Decorativas:</strong> Design personalizado para ambientes sofisticados.</li>
            <li><strong>Estruturas Metálicas:</strong> Projetos robustos para qualquer necessidade.</li>
            <li><strong>Soldagem Especializada:</strong> Serviços técnicos com precisão e acabamento de qualidade.</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-2">Nossos Serviços</h2>
          <ul className="list-disc list-inside ml-2">
            <li><strong>Portões de Ferro:</strong> Segurança e durabilidade para sua casa.</li>
            <li><strong>Grades Decorativas:</strong> Design personalizado para ambientes sofisticados.</li>
            <li><strong>Estruturas Metálicas:</strong> Projetos robustos para qualquer necessidade.</li>
            <li><strong>Soldagem Especializada:</strong> Serviços técnicos com precisão e acabamento de qualidade.</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-2">Nossos Serviços</h2>
          <ul className="list-disc list-inside ml-2">
            <li><strong>Portões de Ferro:</strong> Segurança e durabilidade para sua casa.</li>
            <li><strong>Grades Decorativas:</strong> Design personalizado para ambientes sofisticados.</li>
            <li><strong>Estruturas Metálicas:</strong> Projetos robustos para qualquer necessidade.</li>
            <li><strong>Soldagem Especializada:</strong> Serviços técnicos com precisão e acabamento de qualidade.</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-2">Nossos Serviços</h2>
          <ul className="list-disc list-inside ml-2">
            <li><strong>Portões de Ferro:</strong> Segurança e durabilidade para sua casa.</li>
            <li><strong>Grades Decorativas:</strong> Design personalizado para ambientes sofisticados.</li>
            <li><strong>Estruturas Metálicas:</strong> Projetos robustos para qualquer necessidade.</li>
            <li><strong>Soldagem Especializada:</strong> Serviços técnicos com precisão e acabamento de qualidade.</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-2">Nossos Serviços</h2>
          <ul className="list-disc list-inside ml-2">
            <li><strong>Portões de Ferro:</strong> Segurança e durabilidade para sua casa.</li>
            <li><strong>Grades Decorativas:</strong> Design personalizado para ambientes sofisticados.</li>
            <li><strong>Estruturas Metálicas:</strong> Projetos robustos para qualquer necessidade.</li>
            <li><strong>Soldagem Especializada:</strong> Serviços técnicos com precisão e acabamento de qualidade.</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-2">Nossos Serviços</h2>
          <ul className="list-disc list-inside ml-2">
            <li><strong>Portões de Ferro:</strong> Segurança e durabilidade para sua casa.</li>
            <li><strong>Grades Decorativas:</strong> Design personalizado para ambientes sofisticados.</li>
            <li><strong>Estruturas Metálicas:</strong> Projetos robustos para qualquer necessidade.</li>
            <li><strong>Soldagem Especializada:</strong> Serviços técnicos com precisão e acabamento de qualidade.</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-2">Nossos Serviços</h2>
          <ul className="list-disc list-inside ml-2">
            <li><strong>Portões de Ferro:</strong> Segurança e durabilidade para sua casa.</li>
            <li><strong>Grades Decorativas:</strong> Design personalizado para ambientes sofisticados.</li>
            <li><strong>Estruturas Metálicas:</strong> Projetos robustos para qualquer necessidade.</li>
            <li><strong>Soldagem Especializada:</strong> Serviços técnicos com precisão e acabamento de qualidade.</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-2">Nossos Serviços</h2>
          <ul className="list-disc list-inside ml-2">
            <li><strong>Portões de Ferro:</strong> Segurança e durabilidade para sua casa.</li>
            <li><strong>Grades Decorativas:</strong> Design personalizado para ambientes sofisticados.</li>
            <li><strong>Estruturas Metálicas:</strong> Projetos robustos para qualquer necessidade.</li>
            <li><strong>Soldagem Especializada:</strong> Serviços técnicos com precisão e acabamento de qualidade.</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-2">Nossos Serviços</h2>
          <ul className="list-disc list-inside ml-2">
            <li><strong>Portões de Ferro:</strong> Segurança e durabilidade para sua casa.</li>
            <li><strong>Grades Decorativas:</strong> Design personalizado para ambientes sofisticados.</li>
            <li><strong>Estruturas Metálicas:</strong> Projetos robustos para qualquer necessidade.</li>
            <li><strong>Soldagem Especializada:</strong> Serviços técnicos com precisão e acabamento de qualidade.</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-2">Nossos Serviços</h2>
          <ul className="list-disc list-inside ml-2">
            <li><strong>Portões de Ferro:</strong> Segurança e durabilidade para sua casa.</li>
            <li><strong>Grades Decorativas:</strong> Design personalizado para ambientes sofisticados.</li>
            <li><strong>Estruturas Metálicas:</strong> Projetos robustos para qualquer necessidade.</li>
            <li><strong>Soldagem Especializada:</strong> Serviços técnicos com precisão e acabamento de qualidade.</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-2">Nossos Serviços</h2>
          <ul className="list-disc list-inside ml-2">
            <li><strong>Portões de Ferro:</strong> Segurança e durabilidade para sua casa.</li>
            <li><strong>Grades Decorativas:</strong> Design personalizado para ambientes sofisticados.</li>
            <li><strong>Estruturas Metálicas:</strong> Projetos robustos para qualquer necessidade.</li>
            <li><strong>Soldagem Especializada:</strong> Serviços técnicos com precisão e acabamento de qualidade.</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Sobre Nós</h2>
          <p className="mb-4">
            Com mais de 20 anos de experiência no mercado, a Serralheria do João tem orgulho em oferecer soluções em metal sob medida para residências e empresas.
          </p>
          <img
            src="https://images.unsplash.com/photo-1604667089433-1efec2d69d17"
            alt="Equipe trabalhando"
            className="rounded-lg w-full max-w-3xl shadow-md"
          />
        </section>

        {/* Contato */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Contato</h2>
          <p>Entre em contato pelo WhatsApp clicando no botão abaixo:</p>
          <a href="https://wa.me/41984576938" target="_blank" rel="noreferrer">
            <button className="mt-4 bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded shadow">
              Falar no WhatsApp
            </button>
          </a>
        </section>
      </div>

      {/* Footer */}
      <footer className="bg-blue-700 text-white text-center p-4 mt-auto">
        © 2025 Serralheria do João - Todos os direitos reservados.
        <p>Nossos Serviços
          Portões de Ferro: Segurança e durabilidade para sua casa.
          Grades Decorativas: Design personalizado para ambientes sofisticados.
          Estruturas Metálicas: Projetos robustos para qualquer necessidade.
          Soldagem Especializada: Serviços técnicos com precisão e acabamento de qualidade.
          Nossos Serviços
          Portões de Ferro: Segurança e durabilidade para sua casa.
          Grades Decorativas: Design personalizado para ambientes sofisticados.
          Estruturas Metálicas: Projetos robustos para qualquer necessidade.
          Soldagem Especializada: Serviços técnicos com precisão e acabamento de qualidade.
          Nossos Serviços
          Portões de Ferro: Segurança e durabilidade para sua casa.
          Grades Decorativas: Design personalizado para ambientes sofisticados.
          Estruturas Metálicas: Projetos robustos para qualquer necessidade.
          Soldagem Especializada: Serviços técnicos com precisão e acabamento de qualidade.
          Nossos Serviços
          Portões de Ferro: Segurança e durabilidade para sua casa.
          Grades Decorativas: Design personalizado para ambientes sofisticados.
          Estruturas Metálicas: Projetos robustos para qualquer necessidade.
          Soldagem Especializada: Serviços técnicos com precisão e acabamento de qualidade.
          </p>
      </footer>
    </div>
  );
}

export default Home;
