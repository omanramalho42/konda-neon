'use client'
import { motion } from 'framer-motion'
import { child, container } from "@/constants/variants"
import Services from '@/screens/Services'

const letters = {
  title: 'Impressão 3D de Neon LED para Projetos Personalizados e Rápidos.',
  subtitle: `Dê Vida às suas ideias
  com Konda Neon!
  `,
  paragraph: `Konda Neon, onde transformamos sua visão em luz. 
  Utilizando tecnologia de impressão 3D, tornamos 
  o processo de criação de LEDs Neon personalizados
  mais rápido, acessível e exclusivo para cada cliente.`
}

export default function Home() {
  return (
    <>
      <main className='flex xl:flex-row flex-col-reverse mt-20 justify-center items-center text-center'>
        <div className='2xl:w-[50vw] w-full md:mt-[80px] mt-[35px]'>
          <div className='flex 2xl:mx-32 mx-5 flex-col md:space-y-10 space-y-6'>
            <motion.div
              style={{ overflow: "hidden", display: "flex", fontSize: "2rem", textShadow: '0px 0px 8px #FFC607' }}
              variants={container}
              initial="hidden"
              animate="visible"
              className='flex flex-wrap 2xl:w-[480px]'
            >
              {Array.from(letters.title).map((letter, index) => (
                <motion.p 
                  variants={child} 
                  key={index}
                  className='text-lg uppercase 2xl:text-start text-center shadow-[#FFC607] text-[#FFC607] tracking-[6px]'
                >
                  {letter === " " ? "\u00A0" : letter}
                </motion.p>
              ))}
            </motion.div>
            <motion.div 
              className='flex-wrap py-5'
              style={{ overflow: "hidden", display: "flex", fontSize: "2rem" }}
              variants={container}
              initial="hidden"
              animate="visible"
            >
              {Array.from(letters.subtitle).map((letter, index) => (
                <motion.h1 
                  variants={child} 
                  key={index}
                  className='text-5xl text-[50px] sm:text-[70px] xl:text-[85px] 2xl:text-start text-center uppercase tracking-[6px]'
                >
                  {letter === " " ? "\u00A0" : letter}
                </motion.h1>
              ))}
            </motion.div>
            <motion.div 
              className='flex-wrap'
              style={{ overflow: "hidden", display: "flex", fontSize: "2rem" }}
              variants={container}
              initial="hidden"
              animate="visible"
            >
              {Array.from(letters.paragraph).map((letter, index) => (
                <motion.p 
                  variants={child} 
                  key={index}
                  className='text-gray-100 text-sm 2xl:text-start text-center uppercase tracking-[6px]'
                >
                  {letter === " " ? "\u00A0" : letter}
                </motion.p>
              ))}
            </motion.div>
          </div>
          <div className='flex justify-center my-[75px]'>
            <motion.button 
              className='flex justify-center bg-[#FFC607] shadow-growlight rounded-[50px] w-[247px] p-[28px]'
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <p className='text-black text-center uppercase text-[16px] tracking-[6px]'>
                contato
              </p>
            </motion.button>
          </div>
        </div>
        <motion.div 
          className="2xl:w-[50vw] border-t-4 border-l-4 z-10 w-full sm:h-[93vh] h-[65vh] bg-no-repeat bg-cover 3xl:bg-right-top bg-center bg-origin-content bg-black md:bg-home-pattern bg-home-pattern-mobile" 
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
      <Services />
    </>
  )
}
