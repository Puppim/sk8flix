import React from 'react';
import GlobalStyle from '../../styles/global'
import Hearder from '../../components/Header'
import Banner from '../../components/Banner'
import Carrosel from '../../components/Carrosel'

const Dashboard: React.FC = () => {

  return(
    <>
    <Hearder/>
    <Banner/>
    <Carrosel/>
    <GlobalStyle/>
    </>
   
  )
}
export default Dashboard;
