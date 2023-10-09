import React from 'react'
import { motion, spring } from 'framer-motion'
import {Tilt} from 'react-tilt';
import { services } from '../constants/';
import {fadeIn, textVariant} from '../utils/motion.js'
import { SectionWrapper } from '../hoc';
const Servicecard=({index,title,icon})=>{
  return(
    <Tilt className='xs:w-[250px] w-full'>
      <motion.div
      variants={fadeIn('right','spring',0.5* index ,0.75)}
      className='w-full  p-[1px]
      rounded-[20px] shadow-card ml-5 mb-3' 
      >
<div
option={{
  max:45,
  scale:1,
  speed:450
}}
className='bg-tertiary rounded-[20px] py-5 border border-white-100 px-12 mb-3 min-h-[180px] flex justify-evenlyitems-center
flex-col  '
>
  <img src={icon} alt={title}  className='w-16 h-15 object-contain'/>
<h3 className='text-white text-[20px]'>{title}</h3>
</div>
      </motion.div>
    </Tilt>
  )
}

const About = () => {
  return (
    <>
    <motion.div variants={textVariant()}> 
      <p className='text-2xl ml-4 mt-2 font-thin text-white'>Introduction </p>
      <h2 className='text-5xl mt-2 ml-4 font-extrabold text-white'>Overview</h2>
    </motion.div>
    <motion.p variants={fadeIn("","",0.1,1)}
    className='mt-4 ml-4 text-secondary text-[17px]
    max-w-3xl leading-[30pxl]'>
    I am Aman, a passionate Software Developer with a strong foundation in JavaScript frameworks and a knack for competitive programming.
     My journey in the tech industry has been marked by my constant pursuit of knowledge and the application of the latest technologies in my projects. 
     I have honed my skills in various JavaScript frameworks, enabling me to build efficient, scalable, and user-friendly web applications.
      Additionally, my experience in competitive programming has not only improved my problem-solving abilities but also enhanced my understanding of data structures and algorithms.
       This unique combination of skills allows me to approach software development with creativity, efficiency, and precision. 
       I am always ready for new challenges and continually seeking opportunities to grow and innovate.
    </motion.p>
    <div className='mt-20 flex flex-wrap gap-10'>
    {
    // Check if services is populated
    services.map((service, index) => (
      <Servicecard key={service.title} index={index} {...service} />
    ))
    }
    {/* {console.log(services)} */}
    </div>
    </>
  )
}

export default SectionWrapper(About,"about");