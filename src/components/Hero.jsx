import React from 'react'
import {motion} from 'framer-motion';

import { ComputersCanvas } from './canvas';

const Hero = () => {
  return (
   <section className='relative w-full h-screen mx-auto'>
    <div className='sm:px-16 px-6 absolute
    inset-0 top-[120px] max-w-7xl mx-auto flex
    flex-row items-start gap-5 '>
      <div className="flex flex-col
      justify-center items-center mt-5">
        <div className='w-5 h-5 rounded-full
        bg-[#0e1aff]'>
          <div className="w-1 sm:h-80 h-40
          voilet-gradient"/>
        </div>
      </div>
      <div>
        <h1 className=' text-3xl font-bold text-white'>
          Hello i'm <span className='text-[#0e1aff]'>Aman</span>
        </h1>
        <p className=' text-lg max-w-20 max-h-30 mb-8 pb-8 text-white mt-2'>Welcome! 👋 I'm Aman Tiwari, a passionate and <br /> dedicated software developer with a knack for creating<br /> efficient, user-friendly, and visually appealing applications. </p>
      </div>
    </div>
    <ComputersCanvas/>
    <div className="absolute xs:bottom-10 bottom-32
    w-full flex justify-center
    items-center">
      <a href="#about">
        <div className="w-[35px h-[64px] rounded-3xl
        border-4 border-secondary
        flex justify-center items-start p-2">
          <motion.div 
          animate={{
            y:[0,24,0]
          }}
          transition={{
            duration:1.5,
            repeat:Infinity,
            repeatType:'loop'
          }}
          className="w-3 h-3 rounded-full bg-secondary mb-1"
          />

        </div>
      </a>
    </div>
   </section>
  )
}

export default Hero