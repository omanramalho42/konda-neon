'use client'
import React, { 
  ChangeEvent, 
  useEffect, 
  useRef, 
  useState 
} from 'react'
import Image from 'next/image'

import { ArrowLeft, ArrowRight } from '@phosphor-icons/react'

import CardImage from '../assets/img/walpaper2.jpeg'
import CardImage2 from '../assets/img/walpapper.jpeg'
import CardImage3 from '../assets/img/walpaper3.jpeg'

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
      mainControls.start("visible");
      slideControls.start("visible");
    }
  },[isInView]);
  
  useEffect(() => {
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

  const handleWhatsAppClick = () => {
    const phoneNumber = '85999930319';
    const message = 'Gostaria de fazer um orçamento.';
    
    const whatsappLink = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;

    window.open(whatsappLink, '_blank');
  };


  return (
    <section 
      className='grid xl:grid-cols-2 grid-cols-1 xl:mx-20 mx-5 items-center 2xl:h-[100vh] h-full xl:mb-5'
    > 
      <div className=' flex h-full flex-col xl:items-start items-center mx-auto'>
        <div className='flex flex-col xl:space-y-0 space-y-6 justify-center h-full items-center'>
          <Reveal>
          <h3 
            className='xl:text-start text-white text-center xl:text-[4rem] text-[3rem] color-white tracking-[6px]'
            style={{ textShadow: '0px 0px 4px #FFF', lineHeight: '110%' }}
          >
            Projetos já feitos!
          </h3>
          <p className='2xl:text-start text-white text-center text-md xl:text-[1.5rem] text-[1rem] color-[#A5A5A5] tracking-[2px]'>
            Comece Seu Projeto Personalizado Agora!
          </p>
          </Reveal>
        </div>
        <div 
          className='flex flex-col-reverse h-full xl:mt-44 w-full justify-center xl:items-start items-center' 
        >
          <Reveal>
            <motion.div 
              className='w-100 xl:mr-24 border-b-[3px] sm:flex hidden sm:visible invisible'
              animate={{ translateX: 0 }}
              style={{ 
                borderStyle: 'solid',
                borderRadius: '100%',
                borderImage: 'linear-gradient(to right, #63ABFD, #F6F7A0, #FF5E82) 1'
              }}
            />
          </Reveal>
          <Reveal>
            <button 
              onClick={handleWhatsAppClick} 
              className='w-full sm:flex cursor-pointer hidden sm:visible invisible items-center xl:justify-start justify-center space-x-2 xl:mt-[40px] mt-10'
            >
              <ArrowRight 
                size={42} 
                color={'#63ABFD'} 
                className='z-20' 
              />
              <p 
                className='2xl:text-[24px] xl:text-[20px] z-20 text-[12px] text-[#FF5E82] uppercase xl:tracking-[3px] tracking-[2px]' 
                style={{ textShadow: '0px 0px 4px #FB8486' }}
              >
                Inicie seu Orçamento Agora!
              </p>
            </button>
          </Reveal>
        </div>
      </div>

      <div className=' w-full h-auto justify-center items-center'>
        <div className='flex xl:flex-row flex-col xl:justify-between justify-center items-center xl:space-y-0 space-y-4 xl:mb-10 xl:my-0 my-10'>
          {/* <motion.div  
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
          </motion.div> */}
          
          {/* <Reveal> */}
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
            {/* <div 
              className='flex w-full border-b-[3px]' 
              style={{ 
                borderStyle: 'solid',
                borderRadius: '100%',
                borderImage: 'linear-gradient(to right, #63ABFD, #F6F7A0, #FF5E82) 1'
              }}
            /> */}
          {/* </Reveal> */}
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
                    className='py-5'
                  >
                    <motion.div
                      // style={{ x }}
                      className='flex z-10 flex-col items-center' 
                      // key={idx}
                    >
                        <div className='flex flex-1'>
                          <div className='flex bg-white p-2'>
                            <Reveal mult={idx}>
                            <Image 
                              alt={title} 
                              src={image} 
                              className='object-cover h-[550px] xl:w-full  w-[55vw]' 
                            />
                            </Reveal>
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

      <div className='flex mb-10 mx-auto flex-col-reverse h-full xl:mt-44 justify-center items-center sm:hidden visible sm:invisible'>
        <Reveal>
          <motion.div 
            className='flex w-full xl:mr-24 border-b-[3px] sm:hidden visible sm:invisible'
            animate={{ translateX: 0 }}
            style={{ 
              borderStyle: 'solid',
              borderRadius: '100%',
              borderImage: 'linear-gradient(to right, #63ABFD, #F6F7A0, #FF5E82) 1'
            }}
          />
        </Reveal>
        <Reveal>
          <button 
            onClick={handleWhatsAppClick} 
            className='w-full flex sm:hidden visible sm:invisible items-center xl:justify-start justify-center space-x-2 xl:mt-[40px] mt-10'
          >
            <ArrowRight 
              size={42} 
              color={'#63ABFD'} 
              className='z-20'
            />
            <p 
              className='2xl:text-[24px] z-20 xl:text-[20px] text-[12px] text-[#FF5E82] uppercase xl:tracking-[3px] tracking-[2px]' 
              style={{ textShadow: '0px 0px 4px #FB8486' }}
            >
              Inicie seu Orçamento Agora!
            </p>
          </button>
        </Reveal>
      </div>

    </section>
  )
}

export default Works