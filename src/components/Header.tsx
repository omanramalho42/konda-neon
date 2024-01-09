'use client'
import React from 'react'
import { motion } from 'framer-motion'
import Hero from './Hero';

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
  return (
    <div className='bg-[rgba(0,0,0,0.5)]'>
      <div className='flex 2xl:mx-20 flex-row px-10 2xl:h-[75px] h-full items-center justify-between p-[10px]'>
        <motion.h5 
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          className='uppercase sm:text-[64px] text-[44px] tracking-[6px] text-bold'
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
          className='flex items-center 2xl:space-x-10 space-x-5'
        >
          <motion.p variants={item} className='text-[#CFCFCF] uppercase 2xl:text-[20px] sm:text-sm md:visible md:inline hidden transition-all invisible tracking-[.5px]'>
            Como solicitar seu orçamento
          </motion.p>
          <motion.p variants={item} className='text-[#CFCFCF] uppercase 2xl:text-[20px] sm:text-sm md:visible md:inline hidden transition-all invisible tracking-[.5px]'>
            Projetos já feitos
          </motion.p>
          <motion.p variants={item} className='text-[#CFCFCF] uppercase 2xl:text-[20px] sm:text-sm md:visible md:inline hidden transition-all invisible tracking-[.5px]'>
            Inspiração
          </motion.p>
          <motion.p variants={item} className='text-[#CFCFCF] uppercase 2xl:text-[20px] sm:text-sm sm:visible tracking-[.5px]'>
            Contato
          </motion.p>
        </motion.nav>
      </div>
    </div>
  )
}

export default Header