import React, { ChangeEvent, useEffect, useRef, useState } from 'react'
import Image from 'next/image'

import { ArrowLeft, ArrowRight } from '@phosphor-icons/react'

import CardImage from '../assets/img/work.png'
import CardImage2 from '../assets/img/work2.png'
import CardImage3 from '../assets/img/work3.png'

import '../styles/works.css';
import Reveal from '@/components/Reveal'
import { motion, useAnimation, useInView, useScroll, useTransform } from 'framer-motion'
import { container } from '@/constants/variants'

const cards = [
  { title: 'EXTERIOR', image: CardImage },
  { title: 'INTERIOR', image: CardImage2 },
  { title: 'STUDIOS', image: CardImage3 },
]

const Works:React.FC = () => {
  const [progress, setProgress] = useState<string>('');
  const [scroll, setScroll] = useState<any>(null);

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

  useEffect(() => {
    setScroll(x);
  },[x]);

  console.log(x,'xs')

  return (
    <section 
      className='grid xl:grid-cols-2 grid-cols-1 xl:mx-20 mx-5 items-center justify-center xl:h-[100vh] h-full xl:mb-5'
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
        <div className='flex xl:flex-row flex-col xl:justify-between justify-center xl:items-baseline items-center space-y-4 xl:mb-10 my-10 xl:relative xl:right-24'>
          <motion.div  
            className="flex flex-row items-center"
            variants={container}
            initial="hidden"
            animate="visible"
          >
            <ArrowLeft size={24} />
            <ArrowRight size={24} />
          </motion.div>
          
          <Reveal>
            <input
              type='range'
              className='border-[3px] estilo w-full z-10 h-1 xl:mx-10 xl:relative bottom-1'
              // @ts-ignore
              value={progress}
              onChange={(event:ChangeEvent<HTMLInputElement>) => {
                console.log('evento', event.target.value);
                setProgress(event.target.value)
              }}
              min={0}
              max={cards.length}
              step={1}
            />
          </Reveal>
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
                  className='flex z-10 flex-col w-full min-w-[350px] items-center' 
                  key={idx}
                >
                  <div className='flex flex-1'>
                    <div className='flex bg-white p-2'>
                      <Image alt={title} src={image} className='object-cover' />
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