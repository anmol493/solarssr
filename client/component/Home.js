import React from 'react';
import Services from './services';
import About from './about';
import Footer from './footer';
import GlobalStyle from '../styled/globalStyle';
const Home=()=>{
    return (
        <>
        <GlobalStyle />
        <Services/>
        <About/>
        <Footer/>
        </>
    )
}

export default Home;