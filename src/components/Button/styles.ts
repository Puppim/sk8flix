import styled from 'styled-components';


export const Container = styled.button`
  
    background-color: rgba(0,0,0,.50);
    border:none;
    color: white;

    padding:15px 30px;
    margin-right: 15px;
    font-size: 12px;

    cursor: pointer;
    transition: .3s ease all;
    

   :hover{
        background-color:white;
        color:black;
    }

    i{
        margin-right: 8px;
    }
`;
