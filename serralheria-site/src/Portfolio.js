import React from 'react';
import img1 from './assets/img1.jpg';
import img2 from './assets/img2.jpg';

const Portfolio = () => {
  return (
    <div>
      <h1>Meu Portfólio</h1>
      <div>
        <img src={img1} alt="Projeto 1" />
        <img src={img2} alt="Projeto 2" />
      </div>
    </div>
  );
}

export default Portfolio;
