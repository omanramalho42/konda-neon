'use client'

import { motion } from 'framer-motion'

import { child, container } from "@/constants/variants"

// import '../styles/cursor.css';
// import '../scripts/cursor';

import Services from '@/screens/Services'
import StarsCanvas from '@/components/StarBackground'
import TextMotion from '@/components/TextMotion'
import Works from '@/screens/Works'
import Contact from '@/screens/Contact'
import Inspiration from '@/screens/Inspiration'
import Button from '@/components/Button'
import { WhatsappLogo } from '@phosphor-icons/react'
import AnimatedModal from '@/components/Modal'

// import Hero from '@/components/Hero'

const letters = {
  title: `Impressão 3D de Neon LED para Projetos Personalizados e Rápidos.`,
  subtitle: 'Dê Vida às suas ideias',
  secondSubtitle: `com Konda Neon!`,
  paragraph: `Konda Neon, onde transformamos sua visão em luz. Utilizando tecnologia de impressão 3D, tornamos o processo de criação de LEDs Neon personalizados mais rápido, acessível e exclusivo para cada cliente.`
}

export default function Home() {
  return (
    <>
      {/* <Hero /> */}
      <StarsCanvas />
      <div className='fixed bottom-10 right-10 z-50'>
        <AnimatedModal
        title='Mande uma mensagem para nós'
        content={<input className='p-2 bg-gray-800 placeholder:text-white text-white rounded-xl' />}
        onSubmit={() => {}}
        >
        <WhatsappLogo size={32} color='#FFF'/>
        </AnimatedModal>
      </div>
      <main className='flex xl:h-[100vh-75px] mt-[75px] xl:flex-row flex-col-reverse font-normal xl:ml-[80px] justify-center items-center text-center'>
        <section className='3xl:w-[50vw] w-full md:mt-[80px] mt-[35px]'>

          <div className='flex 3xl:mx-32 2xl:mx-20 mx-5 flex-col md:space-y-[37px] mb-[87px] space-y-6 xl:items-start items-center justify-start'>
            <motion.div
              style={{ textShadow: '0px 0px 8px #FFC607' }}
              variants={container}
              initial="hidden"
              animate="visible"
              className='flex overflow-hidden xl:justify-start justify-center flex-wrap 2xl:w-[480px] z-10'
            >
                                               <p 
                                                   style={{ 
                                                    letterSpacing: '98%',
                                                    textShadow: '#0px 0px 8px #FFC607' 
                                                  }}
                                 className='text-lg indent-[1px] text-[16px] uppercase xl:text-start text-center shadow-[#FFC607] text-[#FFC607] xl:tracking-[6px] tracking-[4px]'
                                >
            Impressão 3D de Neon LED para Projetos Personalizados e Rápidos.
          </p>
              {/* {Array.from(letters.title).map((letter, index) => (
                <motion.p 
                  variants={child} 
                  key={index}
                  className='text-lg indent-[1px] text-[16px] uppercase 2xl:text-start text-center shadow-[#FFC607] text-[#FFC607] xl:tracking-[6px] tracking-[4px]'
                  style={{ 
                    letterSpacing: '98%',
                    textShadow: '#0px 0px 8px #FFC607' 
                  }}
                >
                  {letter === " " ? "\u00A0" : letter}
                </motion.p>
              ))} */}
            </motion.div>


            <motion.div 
              className='flex flex-col xl:h-[140px]'
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <motion.div 
                className='flex flex-row z-20 py-2 overflow-hidden xl:justify-start justify-center'
                variants={container}
                initial="hidden"
                animate="visible"
              >
                {Array.from(letters.subtitle).map((letter, index) => (
                  <TextMotion key={index}>
                    {letter === " " ? "\u00A0" : letter}
                  </TextMotion>
                ))}
              </motion.div>
              <motion.div 
                className='flex flex-row z-20 py-2 overflow-hidden xl:justify-start justify-center'
                variants={container}
                initial="hidden"
                animate="visible"
              >
                {Array.from(letters.secondSubtitle).map((letter, index) => (
                  <TextMotion key={index}>
                    {letter === " " ? "\u00A0" : letter}
                  </TextMotion>
                ))}
              </motion.div>
            </motion.div>

            {/* <>
              <motion.div 
                className='flex flex-wrap pt-5 z-20 xl:justify-start justify-center overflow-hidden'
                variants={container}
                initial="hidden"
                animate="visible"
              >
                {Array.from(letters.subtitle).map((letter, index) => (
                  <motion.div 
                    variants={child} 
                    key={index}
                    className='text-5xl 3xl:text-[85px] 2xl:text-[65px] xl:text-[60px] sm:text-[65px] text-[25px] uppercase tracking-[6px]'
                  >
                    {letter === " " ? "\u00A0" : letter}
                  </motion.div>
                ))}
              </motion.div>
              
              <motion.div 
                className='flex flex-wrap z-20 xl:justify-start justify-center overflow-hidden relative xl:bottom-10 bottom-5'
                variants={container}
                initial="hidden"
                animate="visible"
              >
                {Array.from(letters.secondSubtitle).map((letter, index) => (
                  <motion.div 
                    variants={child} 
                    key={index}
                    className='text-5xl 3xl:text-[85px] 2xl:text-[65px] xl:text-[60px] sm:text-[65px] text-[25px] uppercase tracking-[6px]'
                  >
                    {letter === " " ? "\u00A0" : letter}
                  </motion.div>
                ))}
              </motion.div>
            </> */}

            <motion.div 
              className='flex-wrap z-10 mr-4 flex xl:justify-start justify-center'
              style={{ overflow: "hidden", display: "flex", fontSize: "2rem", textShadow: `0px 0px 4px #A5A5A5` }}
              variants={container}
              initial="hidden"
              animate="visible"
            >
                                   <p className='text-gray-100 indent-[1px] mb-4 text-sm text-[23px] xl:text-start text-center uppercase tracking-[3.25px]'>
            Konda Neon, onde transformamos sua visão em luz. Utilizando tecnologia de impressão 3D, tornamos o processo de criação de LEDs Neon personalizados mais rápido, acessível e exclusivo para cada cliente.
          </p>
              {/* {Array.from(letters.paragraph).map((letter, index) => (
                <motion.p 
                  variants={child} 
                  key={index}
                  className='text-gray-100 indent-[1px] mb-4 text-sm text-[23px] 2xl:text-start text-center uppercase tracking-[3.25px]'
                >
                  {letter === " " ? "\u00A0" : letter}
                </motion.p>
              ))} */}
            </motion.div>
          </div>

          <div className='flex justify-center my-[25px]'>
              <Button />
          </div>
        </section>
        <motion.div 
          className="3xl:w-[50vw] border-t-2 border-l-2 z-10 w-full sm:h-[90vh] h-[65vh] bg-no-repeat bg-cover 3xl:bg-right-top bg-center bg-black md:bg-home-pattern bg-home-pattern-mobile" 
          style={{
            borderStyle: 'solid',
            borderImage: 'linear-gradient(to right, #63ABFD, #F6F7A0, #FF5E82) 1'
            // borderImage: 'linear-gradient(90deg, #63ABFD 3.49%, #F6F7A0 28.91%, #FF5E82 75.09%)'
          }}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        />
      </main>
      <div id='services'>
        <Services />
      </div>
      <div id='works'>
        <Works />
      </div>
      <div id='inspirations'>
        <Inspiration />
      </div>
      <div id='contact'>
        <Contact />
      </div>
    </>
  )
}
