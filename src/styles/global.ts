import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

:root {
  --vermelho:#E50914;
  --preta:#141414;
}


  * {
    margin:0;
    padding:0;
    box-sizing: border-box;
  }

  body {
    background: var(--preta);
    font-family: 'Arial', Times, serif;
    color:white;
  }

  body, input, button {
    /* font-family: 'Roboto', serif; */
    font: 500 1.6rem Roboto;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 500;
  }

  button {
    cursor: pointer;
  }


  @media ( min-width: 700px) {
    :root {
      font-size: 80.5%;
    }
  }



`;
