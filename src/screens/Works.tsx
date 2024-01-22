'use client'
import React, { 
  ChangeEvent, 
  useEffect, 
  useRef, 
  useState 
} from 'react'
import Image from 'next/image'

import { ArrowLeft, ArrowRight } from '@phosphor-icons/react'

import CardImage from '../assets/img/work.png'
import CardImage2 from '../assets/img/work2.png'
import CardImage3 from '../assets/img/work3.png'

import '../styles/works.css';
import Reveal from '@/components/Reveal'

import { 
  motion, 
  useAnimation, 
  useInView, 
  useScroll, 
  useTransform 
} from 'framer-motion'

import { container } from '@/constants/variants'

import { Swiper, SwiperSlide, useSwiper } from 'swiper/react'
import { A11y, Controller, EffectFade, Navigation, Pagination, Scrollbar, Virtual } from 'swiper/modules'


const cards = [
  { title: 'EXTERIOR', image: CardImage },
  { title: 'INTERIOR', image: CardImage2 },
  { title: 'STUDIOS', image: CardImage3 },
]

const Works:React.FC = () => {
  const swiper = useSwiper();
  // store controlled swiper instance
  const [controlledSwiper, setControlledSwiper] = useState(null);
  const [slidePerView, setSlidePerView] = useState(2);
  
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
    console.log("aplicando efeito")
    function handleResize(){
      if(window.innerWidth < 650) {
        setSlidePerView(1)
      } else {
        setSlidePerView(2)
      }
    }

    handleResize()

    window.addEventListener("resize", handleResize);

    return () => {
      window.addEventListener("resize", handleResize);
    }
  },[]);

  return (
    <section 
      className='grid xl:grid-cols-2 grid-cols-1 xl:mx-20 mx-5 items-start justify-stretch xl:h-[100vh] h-full xl:mb-5'
    > 
      <Reveal>
        <div className='flex flex-col xl:items-start items-center mx-20 justify-between xl:my-40'>
          <div className='flex flex-col xl:space-y-0 space-y-6 justify-center h-full items-center'>
            <h3 
              className='xl:text-start text-white text-center xl:text-[4rem] text-[3rem] color-white tracking-[6px]'
              style={{ textShadow: '0px 0px 4px #FFF', lineHeight: '110%' }}
            >
              Projetos já feitos!
            </h3>
            <p className='2xl:text-start text-center text-md xl:text-[1.5rem] text-[1rem] color-[#A5A5A5] tracking-[2px]'>
              Comece Seu Projeto Personalizado Agora!
            </p>
          </div>
          <div 
            className='flex flex-col-reverse h-full xl:mt-44 w-full justify-center xl:items-start items-center' 
          >
            <div 
              className='flex w-[290px] border-b-[3px]' 
              style={{ 
                borderStyle: 'solid',
                borderRadius: '100%',
                borderImage: 'linear-gradient(to right, #63ABFD, #F6F7A0, #FF5E82) 1'
              }}
            />
            <div className='flex w-full items-center xl:justify-start justify-center space-x-2 xl:mt-[40px] mt-10'>
              <ArrowRight size={32} color={'#63ABFD'} />
              <p 
                className='xl:text-[20px] text-[12px] text-[#FF5E82] uppercase xl:tracking-[3px] tracking-[2px]' 
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
        <div className='flex xl:flex-row flex-col xl:justify-between justify-center items-center xl:space-y-0 space-y-4 xl:mb-10 my-10'>
          <motion.div  
            className="flex flex-row items-center xl:relative right-12"
            variants={container}
            initial="hidden"
            animate="visible"
          >
            <ArrowLeft 
              size={24} 
              color='#fff' 
              className='cursor-pointer z-10'
              onClick={() => {
                console.log("clicando evento");
                // swiper.slideNext();
              }}
            />
            <ArrowRight 
              size={24} 
              color='#fff' 
              className='cursor-pointer z-10' 
              onClick={() => {
                console.log("clicando evento");
                // swiper.slideNext()
              }}
            />
          </motion.div>
          
          <Reveal>
            {/* <input
              type='range'
              className='w-full border-[3px] estilo h-1 z-10 cursor-pointer'
              // @ts-ignore
              value={progress}
              onChange={(event:ChangeEvent<HTMLInputElement>) => {
                console.log('evento', event.target.value);
                setProgress(event.target.value)
              }}
              min={0}
              max={cards.length}
              step={1}
            /> */}
            <div 
              className='flex w-full border-b-[3px]' 
              style={{ 
                borderStyle: 'solid',
                borderRadius: '100%',
                borderImage: 'linear-gradient(to right, #63ABFD, #F6F7A0, #FF5E82) 1'
              }}
            />
          </Reveal>
        </div>
        
        <Reveal>
          <div 
            ref={ref}
            className='flex overflow-x-hidden overflow-y-hidden scroll z-30 flex-row w-full grid-cols-2 gap-[30px]'
          >
            <Swiper
              modules={[Navigation, Pagination, Scrollbar, A11y, Virtual]}
              // effect="fade"
              slidesPerView={slidePerView}
              pagination={{ clickable: true }}
              scrollbar={{ draggable: true }}
              allowSlideNext
              allowSlidePrev
              navigation
              spaceBetween={20}
              virtual
              onSlideChange={() => {
                console.log("Mudando de slide")
              }}
              onSwiper={(swiper) => console.log(swiper)}
            >
              {cards.map(({ image, title }, idx) => {
                return (
                  <SwiperSlide 
                    key={idx} 
                    zoom
                    tag='carousel'
                    virtualIndex={idx}
                  >
                    <motion.div
                      // style={{ x }}
                      className='flex z-10 flex-col items-center' 
                      // key={idx}
                    >
                        <div className='flex flex-1'>
                          <div className='flex bg-white p-2'>
                            <Image 
                              alt={title} 
                              src={image} 
                              className='object-cover h-[450px] xl:w-full w-[50vw]' 
                            />
                          </div>
                        </div>
                        <p className='uppercase text-md text-[24px] text-white text-center'>
                          { title }
                        </p>
                    </motion.div>
                  </SwiperSlide>
                )
              })}
            </Swiper>
          </div>
        </Reveal>

      </div>

    </section>
  )
}

export default Works