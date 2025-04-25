
import React from 'react';

function Footer() {
  return (
    <footer className="bg-white text-gray-800 pt-10 pb-0">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center pb-12">
          <div className="w-full md:w-1/2 lg:w-1/4 px-4 mb-6">
            <img
              className="w-full max-w-[180px] mx-auto md:mx-0"
              src="https://www.ironart.com.br/views/geral/img/logo-rodape.png"
              alt="Logo IronArt"
            />
          </div>

          <div className="w-full md:w-1/2 lg:w-1/5 px-4 mb-6">
            <h4 className="text-lg font-semibold uppercase mb-2">Fale Conosco</h4>
            <p>(41) 3274-3554</p>
            <p>(41) 98417-6949</p>
            <p>contato@ironart.com.br</p>
          </div>

          <div className="w-full md:w-1/2 lg:w-1/4 px-4 mb-6">
            <h4 className="text-lg font-semibold uppercase mb-2">Onde Estamos</h4>
            <p>Av. Nossa Senhora Aparecida, 1865 <br />Seminário, Curitiba - PR</p>
            <button
              onClick={() => window.open('https://goo.gl/maps/1sF3Upaz5HXL8fXU7', '_blank')}
              className="text-blue-600 hover:underline mt-2 inline-block"
            >
              Veja como chegar
            </button>
          </div>

          <div className="w-full md:w-1/2 lg:w-1/4 px-4 mb-6">
            <h4 className="text-lg font-semibold uppercase mb-2">Horário de Atendimento</h4>
            <p>Segunda-feira a Sexta-feira<br />das 8h - 18h</p>
          </div>

          <div className="w-full md:w-1/2 lg:w-1/6 px-4 mb-6">
            <h4 className="text-lg font-semibold uppercase mb-2">Acompanhe</h4>
            <div className="flex space-x-3">
              <a href="https://www.facebook.com/serralheriaironart" target="_blank" rel="noreferrer">
                <i className="fa fa-facebook text-2xl text-blue-700 hover:text-blue-900"></i>
              </a>
              <a href="https://www.instagram.com/metalurgica_iron_art/" target="_blank" rel="noreferrer">
                <i className="fa fa-instagram text-2xl text-pink-500 hover:text-pink-700"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap items-center border-t pt-4">
          <div className="w-full md:w-1/3 text-center md:text-left text-sm">
            © {new Date().getFullYear()} Ironart. Todos os direitos reservados.
          </div>
          <div className="w-full md:w-1/3 flex justify-center my-2 md:my-0">
            <a href="https://www.cgdw.com.br" target="_blank" rel="noreferrer">
              <img
                src=""
                alt="CGDW"
                className="h-8"
              />
            </a>
          </div>
          <div className="w-full md:w-1/3 text-center md:text-right">
            <a href="#topo">
              <img
                src="https://www.ironart.com.br/views/geral/img/svg/seta.svg"
                alt="Voltar ao topo"
                className="inline h-6"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
