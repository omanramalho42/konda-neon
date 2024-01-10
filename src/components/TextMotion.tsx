import React, { useState, FC } from 'react'
import { motion, useAnimationControls } from 'framer-motion'

interface TextMotionProps {
  children: React.ReactNode;
}

const TextMotion:FC<TextMotionProps> = ({ children }: TextMotionProps) => {
  
  const controls = useAnimationControls();
  const [isPlaying, setIsPlaying] = 
    useState<boolean>(false);

  const rubberBand = () => {
    controls.start({
      transform: [
        "scale3d(1,1,1)",
        "scale3d(1.4,.55,1)",
        "scale3d(.75,1.25,1)",
        "scale3d(1.25,.85,1)",
        "scale3d(.9,1.05,1)",
        "scale3d(1,1,1)"
      ],
      transition: {
        times: [0, .4, .6, .7, .8, .9]
      },
      color: ['#63ABFD', '#F6F7A0', '#FF5E82', '#FFF'], // Adicione as cores desejadas aqui
    })
    setIsPlaying(true)
  }

  return (
    <motion.span
      className='text-5xl text-[50px] sm:text-[70px] cursor-pointer xl:text-[85px] 2xl:text-start text-center uppercase tracking-[6px]'
      animate={controls}
      onMouseOver={() => {
        if(!isPlaying) {
          rubberBand()
        }
      }}
      onAnimationComplete={() => setIsPlaying(false)}
    >
      { children }
    </motion.span>
  )
}

export default TextMotion