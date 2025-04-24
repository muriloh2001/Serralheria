import { useState } from "react";
import { FaWhatsapp, FaUserFriends } from "react-icons/fa";

export default function WhatsAppPopup() {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <div className="fixed bottom-10 right-1 z-50 ">
      {/* BOTÃO Fale Conosco */}
      {!showPopup && (
        <button
          onClick={() => setShowPopup(true)}
          className="bg-green-600 hover:bg-green-700 text-white px-7 py-3 rounded-lg shadow-lg flex items-center gap-3 animate-bounce transition duration-300 ease-in-out"
        >
          <FaWhatsapp size={28} />
          <div className="text-left leading-6">
            <div className="font-semibold text-[1.3rem]">Fale Conosco</div>
            <div className=" text-[1.1rem]">Chamar no WhatsApp</div>
          </div>
        </button>
      )}

      {/* POPUP */}
      {showPopup && (
        <div className="relative">
          <div className="absolute bottom-10 right-0 w-80 bg-white border border-gray-200 shadow-2xl p-6 rounded-xl animate-fade-in">
            <h5 className=" font-bold mb-4 text-center text-gray-800 text-[1.2rem]">
              Escolha um Representante
            </h5>

            {/* Representante 1 */}
            <div className="mb-2">
              <div className="flex items-center gap-2 text-gray-800 text-[1.3rem]">
                <FaUserFriends /> Atendimento 1
              </div>
              <div className="flex items-center gap-2 text-green-600 text-[1.2rem]">
                <FaWhatsapp /> (41) 99903-0437
              </div>
              <a
                href="http://serralheriasemcuritiba.com.br/whatsapp.html"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 block text-center bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 transition text-[1.2rem]"
              >
                Enviar mensagem!
              </a>
            </div>

            <hr className="my-3" />

            {/* Representante 2 */}
            <div>
              <div className="flex items-center gap-2 text-gray-800 text-[1.3rem]">
                <FaUserFriends /> Atendimento 2
              </div>
              <div className="flex items-center gap-2 text-green-600 text-[1.2rem]">
                <FaWhatsapp /> (41) 99703-3726
              </div>
              <a
                href="http://serralheriasemcuritiba.com.br/whatsapp2.html"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 block text-center bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 transition text-[1.2rem]"
              >
                Enviar mensagem!
              </a>
            </div>

            {/* Fechar */}
            <button
              onClick={() => setShowPopup(false)}
              className="mt-4 text-center text-sm text-gray-500 hover:underline block mx-auto text-[1.2rem]"
            >
              [Fechar]
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
 