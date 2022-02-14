import styled from 'styled-components';


export const Container = styled.div`
    display:flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    .logo{
      margin-left: 5px;
      color: var(--vermelho);
      font-family: 'Arial Black', Times;
      font-size:40px;
  }

  nav a{
      text-decoration:none;
      color:#AAA;
      margin-right: 10px;
  }

  nav a:hover{
    color:#fff;
}

`;
