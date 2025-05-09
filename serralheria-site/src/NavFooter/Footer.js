import React from 'react';

function Footer() {
  return (
    <footer className="bg-[#6c6f71] text-white pt-10 pb-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between pb-8 gap-6">

          {/* Logo */}
          <div className="w-full md:w-1/2 lg:w-1/4 text-center md:text-left">
            <img
              className="max-w-[160px] mx-auto md:mx-0 mb-2"
              src="https://www.ironart.com.br/views/geral/img/logo-rodape.png"
              alt="Logo IronArt"
            />
            <p className="text-sm text-gray-200">Excelência em estruturas metálicas desde 2006.</p>
          </div>

          {/* Contato */}
          <div className="w-full md:w-1/2 lg:w-1/5">
            <h4 className="text-base font-semibold uppercase mb-3">Contato</h4>
            <ul className="space-y-2 text-sm text-gray-100">
              <li><i className="fa fa-phone mr-2" /> (41) 3274-3554</li>
              <li><i className="fa fa-mobile mr-2" /> (41) 98417-6949</li>
              <li><i className="fa fa-envelope mr-2" /> contato@ironart.com.br</li>
            </ul>
          </div>

          {/* Endereço */}
          <div className="w-full md:w-1/2 lg:w-1/4">
            <h4 className="text-base font-semibold uppercase mb-3">Endereço</h4>
            <p className="text-sm text-gray-100 leading-6">
              R. José Carreiro Lima, 315<br />
              Planta Wagner, Piraquara - PR<br />
              83314-330
            </p>
            <a
              href="https://maps.google.com/maps?q=Rua%20José%20Carreiro%20Lima%20N%C2%B0%20315%20-%20Piraquara%20-%20Curitiba%20%E2%80%93%20PR&t=h&z=18"
              target="_blank"
              rel="noreferrer"
              className="text-sm text-white underline mt-2 inline-block hover:text-gray-300"
            >
              Ver no mapa
            </a>
          </div>

          {/* Redes Sociais */}
          <div className="w-full md:w-1/2 lg:w-1/6">
            <h4 className="text-base font-semibold uppercase mb-3">Redes Sociais</h4>
            <div className="flex space-x-4 mt-2">
              <a href="https://www.facebook.com/serralheriaironart" target="_blank" rel="noreferrer" aria-label="Facebook">
                <i className="fa fa-facebook-square text-2xl hover:text-blue-300" />
              </a>
              <a href="https://www.instagram.com/metalurgica_iron_art/" target="_blank" rel="noreferrer" aria-label="Instagram">
                <i className="fa fa-instagram text-2xl hover:text-pink-300" />
              </a>
            </div>
          </div>
        </div>

        {/* Rodapé inferior */}
        <div className="border-t border-gray-400 pt-4 text-sm text-gray-100 flex flex-wrap justify-between items-center">
          <div className="w-full md:w-1/2 text-center md:text-left mb-2 md:mb-0">
            © {new Date().getFullYear()} IronArt. Todos os direitos reservados.
          </div>
          <div className="w-full md:w-1/2 text-center md:text-right">
            <a href="#topo" aria-label="Voltar ao topo" className="hover:text-white">
              <i className="fa fa-arrow-up mr-1" /> Voltar ao topo
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
