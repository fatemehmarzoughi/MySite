import { Header } from './components/header'
import { SlideShow } from './components/slideShow'
import { Carts } from './components/carts';
import { Portfolio } from './components/portfolio';
import { About } from './components/about';
import {IoIosArrowUp} from 'react-icons/io';
import { Contact } from './components/contact';
import { Footer } from './components/footer'
import React, { useContext, useEffect } from 'react';
import { Loading } from './components/loading';
import context from './context/context';

export function AppRoute(){

    const contexts = useContext(context);
    const isFarsi = contexts.language === 'fa';
    const loading = contexts.loading;
  
    useEffect(() => {
      setTimeout(() => contexts.setLoading(false), 2000)
    })

    return(
        <>
        {loading ? (
        <Loading />
      ) : (

            <div className="" style={isFarsi ? {fontFamily : 'B-Nazanin', fontSize : '20px'} : {}}>
    
              <a href="#top" className="bringToTop">
                <IoIosArrowUp size={22} color={'#fff'} />
              </a>
        
              <Header />
        
              <SlideShow />
        
              <Carts />
        
              <Portfolio />
        
              <About />
        
              <Contact />
        
              <Footer />
        
            </div>
      )}
        </>
    )
}