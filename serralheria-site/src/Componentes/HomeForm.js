import emailjs from 'emailjs-com';
import { useState } from 'react';

function HomeForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');
  const [servico, setServico] = useState('');
  const [locality, setLocality] = useState('');
  const [message, setMessage] = useState('');

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
    setTelefone('');
    setServico('');
    setLocality('');
    setMessage('');
  };

  return (
    <form onSubmit={handleSubmit} className="pt-6 space-y-4 text-[1rem]">
      <input
        type="text"
        name="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Seu Nome"
        required
        className="w-full p-3 border border-gray-300 rounded-lg"
      />
      <input
        type="email"
        name="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Seu E-mail"
        required
        className="w-full p-3 border border-gray-300 rounded-lg"
      />
      <input
        type="text"
        name="telefone"
        value={telefone}
        onChange={(e) => setTelefone(e.target.value)}
        placeholder="Seu Telefone"
        required
        className="w-full p-3 border border-gray-300 rounded-lg"
      />
      <select
        name="servico"
        value={servico}
        onChange={(e) => setServico(e.target.value)}
        required
        className="w-full p-3 border border-gray-300 rounded-lg"
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
      <input
        type="text"
        name="locality"
        value={locality}
        onChange={(e) => setLocality(e.target.value)}
        placeholder="Sua Localidade"
        className="w-full p-3 border border-gray-300 rounded-lg"
      />
      <textarea
        name="message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Sua Mensagem"
        required
        className="w-full p-3 border border-gray-300 rounded-lg"
      />
      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700"
      >
        Enviar
      </button>
    </form>
  );
}

export default HomeForm;