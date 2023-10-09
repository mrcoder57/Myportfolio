import React,{useEffect,useState} from 'react'
import { Link } from 'react-router-dom'

import { navLinks } from '../constants/index.js'
import {logo,menu,close} from '../assets'
const Navbar = () => {
  const [active, setActive]=useState("")
  const [toggle,setToggle]=useState(false);
  return (
    <nav className={
      "sm:px-16 px-6 w-full flex items-center py-5 fixed\
      top-0 z-20 bg-primary"
    }>
      <div className='w-full flex justify-between
      items-center max-w-7xl mx-auto '>
<Link 
to="/"
className='flex items-center gap-2'
onClick={()=>{
  setActive("");
  window.scrollTo(0,0);
}}
>
  <img src={logo} alt="logo" className='w-12 h-13 object-contain rounded-full
  '/>
  <p className="text-white text-[18px] font-bold
  cursor-pointer">AMAN <span className="sm:block hidden">Portfolio</span></p>
</Link>
<ul className="list-none hidden sm:flex flex-row gap-10 text-white-100">
  <li>
    <a href="#about">About</a>
  </li>
  <li>
    <a href="#work">Work</a>
  </li>
  <li>
    <a href="#contact">Contact</a>
  </li>
</ul>
<div className='sm:hidden flex flex-1
justify-end items-center'>
  <img src={toggle ? close :menu} alt="menu" 
  className='w-[28px] h-[28px]
  object-contain  cursor-pointer'
  onClick={()=>setToggle(!toggle)}
  />
  <div className={`${ !toggle ? 'hidden':'flex'} p-6
   black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}>
    <ul className="list-none flex justify-end items-start flex-col gap-4 text-white-100">
  <li className=' text-sm mr-2 mt-2 pr-2 font-poppins'>
    <a href="#about">About</a>
  </li>
  <li className=' text-sm mr-2 mt-2 pr-2 font-poppins'>
    <a href="#work">Work</a>
  </li>
  <li className=' text-sm mr-2 mt-2 pr-2 font-poppins'>
    <a href="#contact">Contact</a>
  </li>
</ul>
   </div>

</div>
      </div>
    </nav>
  )
}

export default Navbar