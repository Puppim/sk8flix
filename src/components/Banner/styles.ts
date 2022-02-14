import styled from 'styled-components';

import banner from '../../assets/banner.jpg';

interface BannerContent{

}

export const Container = styled.div`
   
    /*filme principal*/
    .filme-principal{
        font-size:16px;
        background: linear-gradient(rgba(0,0,0,.50),rgba(0,0,0,.50)100%),  url(${banner});

        height:400px;
        background-size:cover;
    

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
    }


    .filme-principal .descricao{
        margin-top: 10px;
        margin-bottom: 40px;
    }


    .filme-principal .titulo{
        margin-top: 15%;
        font-size: 40px;
        font-family: 'Trebuchet MS', Arial, sans-serif;
    }

    .filme-principal .container{
        width: 70%;
    }

    .container{
        margin-left: 20px;
    }
`;
