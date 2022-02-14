import React, {ButtonHTMLAttributes} from 'react';

import { Container} from './styles';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

const Header: React.FC<ButtonProps> = ({ children, ...rest }) => (
    <Container className='btn' type="button" {...rest}>
        

    {children}
  </Container>
);

export default Header;
