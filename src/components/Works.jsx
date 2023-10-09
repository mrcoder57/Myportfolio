import React from 'react'
import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion'
import { SectionWrapper } from '../hoc'
import { projects } from '../constants'
import { textVariant } from '../utils/motion'
import { github } from '../assets'
const Works = () => {
  return (
   <>
    <motion.div
    variants={textVariant}
    >
<p className='text-2xl ml-4 mt-2 font-thin text-white'>My works </p>
      <h2 className='text-4xl mt-2 ml-4 font-extrabold text-white'>Projects.</h2>
    </motion.div>
    <motion.p variants={textVariant}
     className='text-xl font-thick ml-4 mt-2  text-white'>
Welcome to the Projects section of my portfolio! This is where I showcase my best work and demonstrate the breadth of my skills and experience. Each project here is a testament to my ability to solve complex problems and deliver high-quality results.

    </motion.p>
    <div className="mt-20  flex flex-wrap gap-7">
      {projects.map((project)=>(
       <Tilt className='xs:w-[250px] w-full'>
       <motion.div
       whileHover={{ rotate: 0.25 }}
       transition={{ duration: 0.25 }}
       className='w-full gap-5 white shadow-card p-[1px]
       rounded-[20px]  mb-3' 
       >
        <div className='ml-4'>
      <div
option={{
  max:45,
  scale:1,
  speed:450
}}

className='bg-tertiary w-full border border-green-pink-gradient rounded-[20px] py-3 pl-3 px-3 ml-5 mb-4  items-center
  '
>
  <div className='w-full max-h-56'>
  <img src={project.image} alt={project.name}  className='w-[200%] max-h-[150px] object-cover rounded-[20px]' />
  <div onClick={()=>window.open(project.source_code_link)}
  className='black-gradient w-10 h-10 rounded-full flex
  justif-center cursor-pointer mt-1'
  >
<img src={github} alt="vercel"  className=' object-contain'/>
  </div>
  </div>
  <h3 className='text-white text-[20px] mt-1'>{project.name}</h3>
<p className='text-white-300 text-[16px] mt-1'>{project.description.slice(0,87)}</p>
</div>
</div>
</motion.div>
      </Tilt> 
      ))}


    </div>
   </>
  )
}

export default SectionWrapper(Works,"")