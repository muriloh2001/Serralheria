import React from 'react';

function Footer() {
  return (
    <footer className="bg-white text-gray-800 pt-10 pb-6 border-t">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between pb-12">

          {/* Logo */}
          <div className="w-full md:w-1/2 lg:w-1/4 px-4 mb-6 text-center md:text-left">
            <img
              className="max-w-[180px] mx-auto md:mx-0"
              src="https://www.ironart.com.br/views/geral/img/logo-rodape.png"
              alt="Logo IronArt"
            />
          </div>

          {/* Contato */}
          <div className="w-full md:w-1/2 lg:w-1/5 px-4 mb-6">
            <h4 className="text-lg font-semibold uppercase mb-3">Fale Conosco</h4>
            <ul className="space-y-1 text-sm">
              <li>(41) 3274-3554</li>
              <li>(41) 98417-6949</li>
              <li>contato@ironart.com.br</li>
            </ul>
          </div>

          {/* Endereço */}
          <div className="w-full md:w-1/2 lg:w-1/4 px-4 mb-6">
            <h4 className="text-lg font-semibold uppercase mb-3">Onde Estamos</h4>
            <p className="text-sm">
              Av. Nossa Senhora Aparecida, 1865<br />
              Seminário, Curitiba - PR
            </p>
            <a
              href="https://goo.gl/maps/1sF3Upaz5HXL8fXU7"
              target="_blank"
              rel="noreferrer"
              className="text-blue-600 hover:underline mt-2 inline-block text-sm"
            >
              Veja como chegar
            </a>
          </div>

          {/* Horário */}
          <div className="w-full md:w-1/2 lg:w-1/4 px-4 mb-6">
            <h4 className="text-lg font-semibold uppercase mb-3">Horário de Atendimento</h4>
            <p className="text-sm">Segunda a Sexta-feira<br />das 8h às 18h</p>
          </div>

          {/* Redes Sociais */}
          <div className="w-full md:w-1/2 lg:w-1/6 px-4 mb-6">
            <h4 className="text-lg font-semibold uppercase mb-3">Acompanhe</h4>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/serralheriaironart"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
              >
                <i className="fa fa-facebook text-2xl text-blue-700 hover:text-blue-900"></i>
              </a>
              <a
                href="https://www.instagram.com/metalurgica_iron_art/"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
              >
                <i className="fa fa-instagram text-2xl text-pink-500 hover:text-pink-700"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Rodapé inferior */}
        <div className="flex flex-wrap items-center border-t pt-4 text-sm text-center md:text-left">
          <div className="w-full md:w-1/3 mb-2 md:mb-0">
            © {new Date().getFullYear()} Ironart. Todos os direitos reservados.
          </div>

          <div className="w-full md:w-1/3 flex justify-center mb-2 md:mb-0">
            <a href="https://www.cgdw.com.br" target="_blank" rel="noreferrer" aria-label="Desenvolvido por CGDW">
              {/* Adicione o logo aqui, se houver */}
              <img src="" alt="CGDW" className="h-8" />
            </a>
          </div>

          <div className="w-full md:w-1/3 md:text-right">
            <a href="#topo" aria-label="Voltar ao topo">
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
