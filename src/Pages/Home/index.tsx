import React from 'react';
import { Link } from 'react-router-dom';
import ButtonIcon from '../../Core/Components/ButtonIcon';
import Navbar from '../../Core/Components/NavBar';
import './styles.css';

function Home() {
  return (
    <>
      <Navbar />
      <div className="container-text-title">
        Desafio do Capítulo 3, Bootcamp DevSuperior
      </div>
      <div className="container-text-description">
        Bem-vindos ao desafio do capítulo 3 do Bootcamp DevSuperior. <br />
        Favor observar as instruções passadas no capítulo sobre a elaboração deste projeto.<br />
        Este design foi adaptado a partir de Ant Design System for Figma, de
        Mateusz Wierzbicki: antforfigma@gmail.com */
      </div>
      <Link to="/search" className="container-link">
        <div className="container-button">
          <ButtonIcon text="Começar" />
        </div>
      </Link>
    </>
  );
}

export default Home;
