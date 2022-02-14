import React from 'react';

import { Container} from './styles';
import Button from '../Button';

const Header: React.FC = () => (
  <Container >
    <main>
       <div className="filme-principal">
            <div className="container">
                <h3 className="titulo">RAW RUN</h3>
                <p className="descricao"> Race Against the Storm</p>
                <div className="botoes">
                    <Button role="button" className="botao">
                        <i className="fas fa-play"></i>
                        ASSISTIR AGORA
                    </Button>
                    <Button role="button" className="botao">
                        <i className="fas fa-info-circle"></i>
                        MAIS INFORMAÇÕES
                    </Button>
                </div>
            </div>
        </div>
        </main>
  </Container>
);

export default Header;
