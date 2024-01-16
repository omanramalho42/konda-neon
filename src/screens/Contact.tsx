import { ArrowRight } from '@phosphor-icons/react'

import VectorImage from '../assets/img/vector.png'
import Image from 'next/image'
import React from 'react'
import Reveal from '@/components/Reveal'
import Button from '@/components/Button'

const Contact:React.FC = () => {
  return (
    <div className='xl:grid 2xl:grid-cols-2 flex-col-reverse flex xl:h-[100vh] justify-center items-center xl:mx-20 mx-5 py-10'>
        <Reveal>
            <div className='flex flex-col space-y-[20px] mb-10'>
                <div className='flex flex-col space-y-[28px] xl:justify-start xl:w-[750px] justify-center xl:items-start'>
                    <p 
                        className='text-[40px] xl:text-start text-center tracking-[6px]' 
                        style={{ lineHeight: '110%' }}
                    >
                        Transforme sua Ideia em Realidade
                        Fale Conosco Agora!
                    </p>
                    <p className='text-[#8D8D8D] xl:text-start text-center text-[24px]'>
                        Estamos empolgados para ajudar a transformar sua visão em um deslumbrante LED Neon personalizado. Entre em contato com nossa equipe via WhatsApp para começar o processo de orçamento e iluminar seu espaço de forma única.
                    </p>
                </div>
                <div className='w-full flex xl:justify-start justify-center items-center mt-[18px]'>
                    <Button />
                </div>
            </div>
        </Reveal>
        <Reveal>
            <div className="flex w-full p-4">
                <Image 
                    src={VectorImage} 
                    alt='impresssora 3d' 
                    className='w-full object-contain h-full'
                />
            </div>
        </Reveal>
    </div>
  )         
}

export default Contact