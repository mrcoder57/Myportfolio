import React from 'react'
import {VerticalTimeline, VerticalTimelineElement} from 'react-vertical-timeline-component'
import { motion } from 'framer-motion'

import 'react-vertical-timeline-component/style.min.css'
import { experiences } from '../constants'
import { SectionWrapper } from '../hoc'
import { textVariant } from '../utils/motion'

const ExperienceCard=({experience})=>{
  return(
    <VerticalTimelineElement contentStyle={{background:'#1d1836',
    color:'#fff'}} 
    currentArrowStyle={{borderRight:'7px solid #232631'}}
    date={experience.date}
    iconStyle={{background:experience.iconBg}}
    icon={
    <div>
    <img src={experience.icon} alt={experience.company_name} 
    className='w-[70%] h-[60%] object-contain pt-1'
    />
    </div>}
    >
    <div>
      <h3 className='text-white text-[24px]'>
        {experience.title}</h3>
    </div>
    <ul className='mt-5 list-disc ml-5 space-y-2'>
      {experience.points.map((point, index)=>(
        <li key={`experience-point-${index}`} className='text-white-100 
        text-[14px] tracking-wider'>{point}</li>
      ))}
    </ul>
    </VerticalTimelineElement>
  )
}

const Experience = () => {
  return (
    <>
    <motion.div
    variants={textVariant}
    >
<p className='text-2xl ml-4 mt-2 font-thin text-white'>What can i do! </p>
      <h2 className='text-4xl mt-2 ml-4 font-extrabold text-white'>Work capabilities</h2>
    </motion.div>
    <div className='mt-20 flex flex-col '>
      <VerticalTimeline>
        { experiences.map((experience , index) => (
            <ExperienceCard key={index} experience={experience}/>
          ) )}
      </VerticalTimeline>
    </div>
    </>
  )
}

export default SectionWrapper(Experience,"work")