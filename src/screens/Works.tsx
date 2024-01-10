import React, { useEffect, useRef } from 'react'
import Image from 'next/image'

import { ArrowLeft, ArrowRight } from '@phosphor-icons/react'

import CardImage from '../assets/img/work.png'
import CardImage2 from '../assets/img/work2.png'
import CardImage3 from '../assets/img/work3.png'

import '../styles/works.css';
import Reveal from '@/components/Reveal'
import { motion, useAnimation, useInView, useScroll, useTransform } from 'framer-motion'

const cards = [
  { title: 'EXTERIOR', image: CardImage },
  { title: 'INTERIOR', image: CardImage2 },
  { title: 'STUDIOS', image: CardImage3 },
]

const Works:React.FC = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
  });
  const x = 
    useTransform(scrollYProgress, [0, 1], ['1%',"-95%"]);

  const isInView = useInView(ref, { once: true });

  const mainControls = useAnimation();
  const slideControls = useAnimation();

  useEffect(() => {
    if(isInView) {
      console.log(scrollYProgress,'x');

      console.log("teste");

      mainControls.start("visible");
      slideControls.start("visible");
    }
  },[isInView]);
  
  useEffect(() => {
      console.log(scrollYProgress,'x');

      console.log("teste");
  },[scrollYProgress])

  return (
    <section 
      className='grid xl:grid-cols-2 grid-cols-1 mx-10 items-center justify-center h-[100vh] mb-[100vh] mt-20'
    >
      
      <Reveal>
        <div className='flex flex-col items-center justify-around'>
          <div className='flex flex-col justify-center h-full items-center'>
            <h3 className='2xl:text-start text-center text-[4rem] color-white tracking-[6px]'>
              Projetos já feitos!
            </h3>
            <p className='2xl:text-start text-center text-md text-[1rem] color-[#A5A5A5] tracking-[2px]'>
              Comece Seu Projeto Personalizado Agora!
            </p>
          </div>
          <div 
            className='flex h-full xl:mt-44 mt-10 w-[290px] border-b-[3px]' 
            style={{ 
              borderStyle: 'solid',
              borderImage: 'linear-gradient(to right, #63ABFD, #F6F7A0, #FF5E82) 1'
            }}
          >
            <div className='flex items-center space-x-6 mb-1'>
              <ArrowRight size={42} color={'#63ABFD'} />
              <p 
                className='text-[20px] text-[#FF5E82] uppercase' 
                style={{ textShadow: '0px 0px 4px #FB8486' }}
              >
                Inicie seu Orçamento Agora!
              </p>
            </div>
            <div />
          </div>
        </div>
      </Reveal>

      <div className='w-full'>
        <div className='flex flex-row justify-between items-center mb-10 relative right-24'>
          <div className="flex flex-row items-center">
            <ArrowLeft size={24} />
            <ArrowRight size={24} />
          </div>
          
          <input
            type='range'
            className='border-[3px] estilo w-full h-1 mx-10'
            // @ts-ignore
            value={scrollYProgress || 0}
            min={0}
            max={cards.length}
            step={0.1}
          />
        </div>
        
        <Reveal>
          <div 
            ref={ref}
            className='flex overflow-x-hidden overflow-y-hidden scroll z-30 flex-row w-full grid-cols-2 gap-[30px]'
          >
            {cards.map(({ image, title }, idx) => {
              return (
                <motion.div
                  style={{ x }}
                  className='flex z-20 flex-col w-full min-w-[350px] items-center' 
                  key={idx}
                >
                  <div className='flex flex-1'>
                    <div className='flex bg-white p-2'>
                      <Image alt={title} src={image} />
                    </div>
                  </div>
                  <p className='uppercase text-md text-white text-center'>
                    { title }
                  </p>
                </motion.div>
              )
            })}
          </div>
        </Reveal>

      </div>

    </section>
  )
}

export default Works