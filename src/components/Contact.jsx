import React from 'react'
import { useState,useRef } from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'

import { EarthCanvas } from './canvas'
import { SectionWrapper } from '../hoc'
import { slideIn } from '../utils/motion'

const Contact = () => {
  const formRef=useRef()
const [form ,setForm]=useState({
  name:'',
  email:'',
  message:'',
})
const [loading,setLoding]=useState(false)
const handleChange=(e)=>{
const {name,value} =e.target;

setForm({...form,[name]:value})
}
const handleSubmit=(e)=>{
e.preventDefault();

setLoding(true)
//template_u0qtfz3
//service_c9h0e8i
//7gKS2vrOo5E6xM8wa
emailjs.send('service_c9h0e8i','template_u0qtfz3',
{
  form_name:form.name,
  to_name:'Aman',
  from_email:form.email,
  to_email:'tiwariji2300@gmail.com',
  message:form.message
},
'7gKS2vrOo5E6xM8wa'
).then(()=>{
  setLoding(false)
  alert('Thank You.I will get back to you as soon as possible')
  setForm({
    name:'',
    email:'',
    message:''
  })
,(error)=>{
  setLoding(false)

  console.log(error)
  alert('something went wrong')
}})
}
  return (
    <div className=' xl:mt-12 xl:flex-row flex-row-reverse
     gap-10 overflow-hidden 
    '>
      <motion.div variants={slideIn('right',"tween",0.2,1)}
      className='xl:flex-1 xl:h-[600px] md:h-[900px] h-[800px] mb-8 sm:ml-6 sm:mr-6 '
      > 
      <EarthCanvas/>
      </motion.div>
      <motion.div
      variants={slideIn('left',"tween",0.2,1)}
      className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
      >
    <p className='text-white-100 font-thin'>Reach out to me</p>
    <h3 className='text-white text-3xl font-extrabold mt-0.5'>Contact</h3>
    <form ref={formRef}
    onSubmit={handleSubmit}
    className='mt-12 flex flex-col gap-4'
    >
      <label className='flex flex-col'>
        <span className='ml-2 mt-3 text-white-100 font-medium '>Your Name</span>
      </label>
      <input type="text" name="name" value={form.name} 
      onChange={handleChange} 
      placeholder='May I know your name?'
      className='bg-black-200 rounded-lg py-4 px-6 placeholder:text-secondary text-white outline-none'required 
      />
      <label className='flex flex-col'>
        <span className='ml-2 mt-3 text-white-100 font-medium '>Your Email</span>
      </label>
      <input type="email" name="email" value={form.email} 
      onChange={handleChange} 
      placeholder='Please provide your Email'
      className='bg-black-200 rounded-lg py-4 px-6 placeholder:text-secondary text-white outline-none' required
      />
      <label className='flex flex-col'>
        <span className='ml-2 mt-3 text-white-100 font-medium '>Your Message</span>
      </label>
      <textarea rows={5} type="text" name="message" value={form.message} 
      onChange={handleChange} 
      placeholder='How may I help you?'
      className='bg-black-200 rounded-lg py-4 px-6 placeholder:text-secondary text-white outline-none' required
     />
     <button type="submit" className='bg-tertiary py-3 px-8 outline-none w-fit font-semibold rounded-xl shadow-md shadow-primary'>{loading?'Sending':'Send'}</button>
    </form>
      </motion.div>

      
    </div>
  )
}

export default SectionWrapper(Contact,"contact");