import React from 'react';

import { Container} from './styles';


const Header: React.FC = () => (
  <Container >
      <h2 className="logo">SK8FLIX</h2>
      <nav>
          <a href="#">Inicio</a>
          <a href="#">Manobras</a>
          <a href="#">Campeonatos</a>
          <a href="#">Documentários</a>
      </nav>
  </Container>
);

export default Header;
