import React from 'react'

import Image from 'next/image'

import Image1 from '../assets/img/Play Station Neon Custom Neon Handmade Neon PS Neon Wall Decoration LED Neon ESports Neon Gamer Neon 1.png'
import Image2 from '../assets/img/Travel Map - LED Neon Sign, Wall Decor, Wall Sign, Neon Lights 1.png'
import Image3 from '../assets/img/Cuadro de CR7 - 42cm x 63cm 1.png'

import { ArrowLeft, ArrowRight } from '@phosphor-icons/react'
import Reveal from '@/components/Reveal'

const Inspiration = () => {
    const neonImages = [
        { image: Image1 },
        { image: Image2 },
        { image: Image3 },
    ];

  return (
    <div className='flex flex-col items-center justify-center h-full xl:mx-20 mx-5'>
        <div className='flex w-full flex-row justify-between items-center'>
            <Reveal>
                <div 
                    className='flex justify-start items-start xl:w-[380px] border-b-2' 
                    style={{ 
                        borderStyle: 'solid',
                        borderImage: 'linear-gradient(to right, #63ABFD, #F6F7A0, #FF5E82) 1'
                    }}
                >
                    <p className='uppercase text-white sm:text-[64px] text-[44px] tracking-[6px] text-bold'>
                        Inspiraçao
                    </p>
                </div>

                {/* <div className='flex justify-center items-center'>
                    <div className='flex border-1 rounded-full p-3 opacity-45'>
                        <ArrowLeft size={32} color='#f9f9f9'/>
                    </div>
                    <div className='border-1 rounded-full p-3 opacity-45'>
                        <ArrowRight size={32} color='#F9F9F9'/>
                    </div>
                </div> */}
            </Reveal>
        </div>

        <div className='grid xl:grid-cols-3 grid-cols-1 gap-10 w-full justify-center items-start my-[28px]'>
            { neonImages.map((item, index) => {
                return (
                    <Reveal key={index} mult={index}>
                        <div className='flex w-full h-[465px] '>
                            <Image src={item.image} alt={'foto dw neon'} className='w-full object-cover rounded-xl h-full' />
                        </div>
                    </Reveal>
                )
            })}
        </div>
        
    </div>
  )
}

export default Inspiration