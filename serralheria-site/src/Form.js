import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const Form = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [locality, setLocality] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const templateParams = {
      name: name,
      email: email,
      message: message,
      locality: locality,
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

    // Limpa os campos
    setName('');
    setEmail('');
    setMessage('');
    setLocality('');
  };

  return (
    <div className="mt-20 px-4 py-6 max-w-lg mx-auto">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-lg">
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Seu Nome"
          required
          className="w-full mb-4 p-3 border border-gray-300 rounded-lg"
        />
        <input
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Seu E-mail"
          required
          className="w-full mb-4 p-3 border border-gray-300 rounded-lg"
        />
        <input
          type="text"
          name="locality"
          value={locality}
          onChange={(e) => setLocality(e.target.value)}
          placeholder="Sua Localidade"
          className="w-full mb-4 p-3 border border-gray-300 rounded-lg"
        />
        <textarea
          name="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Sua Mensagem"
          required
          className="w-full mb-4 p-3 border border-gray-300 rounded-lg"
        />
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700"
        >
          Enviar
        </button>
      </form>
    </div>
  );
};

export default Form;
