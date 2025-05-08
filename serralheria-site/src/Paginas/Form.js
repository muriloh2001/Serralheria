import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import BannerImage from '../assets/teste5.jpg';
import { FaPaperPlane } from 'react-icons/fa';

const Form = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [locality, setLocality] = useState('');
  const [telefone, setTelefone] = useState('');
  const [servico, setServico] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const templateParams = {
      nome: name,
      email: email,
      telefone: telefone,
      servico: servico,
      mensagem: message,
    };

    emailjs
      .send('Murilo_teste01', 'template_teste01', templateParams, 'TpQ6DkVAZ7isQsMOW')
      .then((response) => {
        console.log('Mensagem enviada com sucesso!', response);
        alert('Mensagem enviada com sucesso!');
      })
      .catch((error) => {
        console.log('Erro ao enviar a mensagem:', error);
        alert('Erro ao enviar a mensagem. Tente novamente.');
      });

    setName('');
    setEmail('');
    setMessage('');
    setLocality('');
    setTelefone('');
    setServico('');
  };

  return (
    <div
      className="w-full h-screen bg-cover bg-center relative"
      style={{ backgroundImage: `url(${BannerImage})` }}
    >
      {/* camada de escurecimento */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>

      {/* conteúdo centralizado */}
      <div className="relative z-10 flex items-center justify-center h-full px-4">
        <form
          onSubmit={handleSubmit}
          className="bg-white/10 backdrop-blur-md p-10 rounded-3xl shadow-2xl w-full max-w-[800px] space-y-6 border border-white/20"
        >
          <h1 className="text-3xl font-bold text-center text-white drop-shadow mb-6">
            Solicite seu Orçamento
          </h1>

          <div className="grid md:grid-cols-2 gap-4">
            <input
              type="text"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Seu Nome"
              required
              className="input-styled"
            />
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Seu E-mail"
              required
              className="input-styled"
            />
            <input
              type="text"
              name="telefone"
              value={telefone}
              onChange={(e) => setTelefone(e.target.value)}
              placeholder="Seu Telefone"
              required
              className="input-styled"
            />
            <input
              type="text"
              name="locality"
              value={locality}
              onChange={(e) => setLocality(e.target.value)}
              placeholder="Sua Localidade"
              className="input-styled"
            />
            <select
              name="servico"
              value={servico}
              onChange={(e) => setServico(e.target.value)}
              required
              className="input-styled col-span-2"
            >
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

          <textarea
            name="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Sua Mensagem"
            required
            className="input-styled"
            rows={4}
          />

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition flex items-center justify-center gap-2"
          >
            Enviar <FaPaperPlane />
          </button>
        </form>
      </div>

      {/* estilos extras */}
      <style jsx="true">{`
        .input-styled {
          width: 100%;
          padding: 0.75rem 1rem;
          border-radius: 0.75rem;
          border: 1px solid #ccc;
          background-color: rgba(255, 255, 255, 0.8);
          transition: all 0.2s ease;
        }
        .input-styled:focus {
          outline: none;
          border-color: #3b82f6;
          box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.3);
        }
      `}</style>
    </div>
  );
};

export default Form;
