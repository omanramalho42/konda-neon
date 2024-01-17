'use client'
import React from 'react'
import { Link } from 'react-scroll'
import { motion } from 'framer-motion'

import Hero from './Hero';
import TextMotion from './TextMotion';

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2
    }
  }
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1
  }
};

const Header:React.FC = () => {
  
  const handleSetActive = () => {

  }
  
  return (
    <div className='bg-[rgba(0,0,0,.5)]'>
      <div className='flex 2xl:ml-20 flex-row px-10 2xl:h-[75px] h-full items-center justify-between p-[10px]'>
        
        <motion.h5 
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          className='uppercase w-full sm:text-[64px] text-[44px] tracking-[6px] text-bold'
          transition={{ duration: 0.5 }}
          style={{
            textShadow: '0px 0px 6px #FFF',
            // backgroundImage: 'linear-gradient(90deg, #63ABFD 3.49%, #F6F7A0 28.91%, #FF5E82 75.09%)',
            // backgroundClip: 'text',
            // color: 'transparent'
          }}
        >
          KONDA
        </motion.h5>
        
        <motion.nav 
          variants={container}
          initial="hidden"
          animate="visible"
          className='flex w-full h-full z-30 justify-between items-center 2xl:space-x-10 space-x-5'
        >
          <Link 
      activeClass="active" 
      to="services" 
      spy={true} 
      smooth={true} 
      offset={50} 
      duration={500} 
      onSetActive={handleSetActive}
    >
          <a href="#services" className='z-20 cursor-pointer'>
            <motion.p 
              variants={item} 
              className='text-[#CFCFCF] uppercase 2xl:text-[20px] sm:text-sm md:visible md:inline hidden transition-all invisible tracking-[.5px]'
            >
                Como solicitar seu orçamento
            </motion.p>
          </a>
    </Link>
    <Link 
      activeClass="active" 
      to="works" 
      spy={true} 
      smooth={true} 
      offset={50} 
      duration={500} 
      onSetActive={handleSetActive}
    >
          <a href="#works" className='z-20 cursor-pointer'>
            <motion.p 
              variants={item} 
              className='text-[#CFCFCF] cursor-pointer z-30 uppercase 2xl:text-[20px] sm:text-sm md:visible md:inline hidden transition-all invisible tracking-[.5px]'
            >
              Projetos já feitos
            </motion.p>
          </a>
    </Link>
    <Link 
      activeClass="active" 
      to="services" 
      spy={true} 
      smooth={true} 
      offset={50} 
      duration={500} 
      onSetActive={handleSetActive}
    >
          <a href="#services" className='z-20 cursor-pointer'>
            <motion.p 
              variants={item} 
              className='text-[#CFCFCF] cursor-pointer uppercase 2xl:text-[20px] sm:text-sm md:visible md:inline hidden transition-all invisible tracking-[.5px]'
            >
              Serviços                                   
            </motion.p>
          </a>
    </Link>
    <Link 
      activeClass="active" 
      to="inspirations" 
      spy={true} 
      smooth={true} 
      offset={50} 
      duration={500} 
      onSetActive={handleSetActive}
    >
          <a href="#inspirations" className='z-20 cursor-pointer'>
            <motion.p 
              variants={item} 
              className='text-[#CFCFCF] cursor-pointer uppercase 2xl:text-[20px] sm:text-sm md:visible md:inline hidden transition-all invisible tracking-[.5px]'
            >
              Inspiração                                          
            </motion.p>
          </a>
    </Link>
    <Link 
      activeClass="active" 
      to="contact" 
      spy={true} 
      smooth={true} 
      offset={50} 
      duration={500} 
      onSetActive={handleSetActive}
    >
          <a href="#contact" className='z-20 cursor-pointer'>
            <motion.p 
              variants={item} 
              className='text-[#CFCFCF] cursor-pointer uppercase 2xl:text-[20px] sm:text-sm sm:visible tracking-[.5px]'>
              Contato
            </motion.p>
          </a>
    </Link>
        </motion.nav>
      </div>
    </div>
  )
}

export default Header