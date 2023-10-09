import React from 'react'
import { BallCanvas } from './canvas'
import { SectionWrapper } from '../hoc'
import { technologies } from '../constants'
import { motion } from 'framer-motion'
import { Tilt } from 'react-tilt'

const Tech = () => {
  return (
   
    <div className='flex flex-row flex-wrap justify-center'>
    {technologies.map((tech)=>(
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

className='bg-tertiary border border-green-pink-gradient rounded-[20px] py-8 pl-10  ml-5 mb-4 min-h-[180px] justify-evenly items-center
  '
>
  <img src={tech.icon} alt={tech.name}  className='w-16 h-15 object-contain'/>
<h3 className='text-white text-[20px]'>{tech.name}</h3>

</div>
</div>

</motion.div>
      </Tilt>
    )
    )}
    </div>
  )
}


export default SectionWrapper(Tech,"tech")