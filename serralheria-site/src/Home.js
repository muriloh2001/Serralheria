import React, { useState, useEffect } from 'react';

function Home() {
  // Lista de imagens para o carrossel com URLs de maior resolução
  const images = [
    "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee", // Alta resolução
    "https://images.unsplash.com/photo-1501785888041-af3ef285b470", // Alta resolução
    "https://images.unsplash.com/photo-1506744038136-46273834b3fb" // Alta resolução
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Troca a imagem a cada 3 segundos

    // Limpa o intervalo quando o componente for desmontado
    return () => clearInterval(interval);
  }, []); // O array vazio garante que o efeito só execute uma vez ao montar o componente

  return (
    <div className="min-h-screen bg-gray-100 text-gray-800 font-sans">
      <header className="bg-blue-700 text-white p-6 text-center">
        <h1 className="text-3xl font-bold">Serralheria do João</h1>
        <p className="mt-2">Transformando ferro em arte!</p>
      </header>

      <main className="p-0">
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Nossos Serviços</h2>
          <p>Trabalhamos com portões, grades, estruturas metálicas e muito mais.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Galeria de Trabalhos</h2>
          <div className="relative w-full h-[60vh] overflow-hidden">
            {/* Carrossel de imagens */}
            <img
              src={images[currentIndex]}
              alt={`Carrossel imagem ${currentIndex + 1}`}
              className="absolute top-0 left-0 w-full h-full object-cover rounded-lg"
              loading="lazy" // Carregamento eficiente
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

        <section>
          <h2 className="text-2xl font-semibold mb-4">Contato</h2>
          <p>Entre em contato pelo WhatsApp clicando no botão abaixo:</p>
          <a href="https://wa.me/41984576938" target="_blank" rel="noreferrer">
            <button className="mt-4 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded">
              Falar no WhatsApp
            </button>
          </a>
        </section>
      </main>

      <footer className="bg-blue-700 text-white text-center p-4 mt-12">
        © 2025 Serralheria do João - Todos os direitos reservados.
      </footer>
    </div>
  );
}

export default Home;
