import { useState } from 'react'
import * as React from "react";
import { BrowserRouter } from 'react-router-dom';
import { About, Contact, Experience, Navbar, Hero, Tech, Works,StarsCanvas } from './components';



const App = () => {
 

  return (
    <>
      <BrowserRouter>
        <div className='relative z-0 bg-primary'>
          <div className='bg-hero-pattern bg-cover bg-np-repeat bg-center'>
            <Navbar/>
            <Hero/>
          </div>
          <About></About>
          <Experience></Experience>
          <Tech></Tech>
          <Works></Works>
         
          <div className='relative z-0'>
            <Contact></Contact>
            <StarsCanvas></StarsCanvas>
          </div>
        </div>
      </BrowserRouter>
    </>
  )
}

export default App
