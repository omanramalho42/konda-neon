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

  const gradient = {
    // background: 'linear-gradient(86deg, #63ABFD 3.49%, #F6F7A0 28.91%, #FF5E82 75.09%)',
    backgroundClip: 'text',
    WebkitBackgroundClip: 'text',
    color: 'transparent',
    WebkitTextFillColor: 'transparent'
  };

  
  return (
    <div className='bg-[rgba(0,0,0,.5)] h-full'>
      <div className='flex 2xl:ml-20 flex-row px-10 xl:h-[75px] h-full items-center justify-between p-[10px]'>
        
        <motion.h5 
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          className='uppercase text-white w-full sm:text-[64px] text-[44px] tracking-[6px] text-bold'
          transition={{ duration: 0.5 }}
          style={{
            textShadow: '0px 0px 6px #FFF',
            // ...gradient
          }}
        >
          KONDA
        </motion.h5>
        
        <motion.nav 
          variants={container}
          initial="hidden"
          animate="visible"
          className='flex w-full h-full z-30 justify-end items-center 2xl:space-x-8 space-x-5'
        >
          <Link 
            activeClass="active" 
            to="services" 
            spy={true} 
            smooth={true} 
            offset={50} 
            duration={500} 
            onSetActive={handleSetActive}
            className='z-20 cursor-pointer'
          >
              <motion.p 
                variants={item} 
                className='text-[#CFCFCF] uppercase 2xl:text-[20px] sm:text-sm md:visible md:inline hidden transition-all invisible tracking-[.5px]'
              >
                  Como solicitar seu orçamento
              </motion.p>
          </Link>
          <Link 
            href='#works'
            activeClass="active" 
            to="works" 
            className='z-20 cursor-pointer'
            spy={true} 
            smooth={true} 
            offset={50} 
            duration={500} 
            onSetActive={handleSetActive}
          >
              <motion.p 
                variants={item} 
                className='text-[#CFCFCF] cursor-pointer z-30 uppercase 2xl:text-[20px] sm:text-sm md:visible md:inline hidden transition-all invisible tracking-[.5px]'
              >
                Projetos já feitos
              </motion.p>
          </Link>
          <Link 
            activeClass="active" 
            className='z-20 cursor-pointer'
            to="inspirations" 
            spy={true} 
            smooth={true} 
            offset={50} 
            duration={500} 
            onSetActive={handleSetActive}
          >
              <motion.p 
                variants={item} 
                className='text-[#CFCFCF] cursor-pointer uppercase 2xl:text-[20px] sm:text-sm md:visible md:inline hidden transition-all invisible tracking-[.5px]'
              >
                Inspiração                                          
              </motion.p>
          </Link>
          <Link 
            className='z-20 cursor-pointer'
            activeClass="active" 
            to="contact" 
            spy={true} 
            smooth={true} 
            offset={50} 
            duration={500} 
            onSetActive={handleSetActive}
          >
            <motion.p 
              variants={item} 
              className='text-[#CFCFCF] cursor-pointer uppercase 2xl:text-[20px] sm:text-sm sm:visible tracking-[.5px]'>
              Contato
            </motion.p>
          </Link>
        </motion.nav>
      </div>
    </div>
  )
}

export default Header