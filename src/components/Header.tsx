import React from 'react'

const Header:React.FC = () => {
  return (
    <div className='flex flex-row 2xl:mx-20 mx-10 2xl:h-[75px] h-full items-center justify-between p-[10px]'>
      <h5 className='uppercase sm:text-[64px] text-[44px] tracking-[6px]'>
        KONDA
      </h5>
      <nav className='flex items-center 2xl:space-x-10 space-x-5'>
        <p className='text-[#CFCFCF] uppercase 2xl:text-[20px] sm:text-sm md:visible md:inline hidden transition-all invisible tracking-[.5px]'>
          Como solicitar seu orçamento
        </p>
        <p className='text-[#CFCFCF] uppercase 2xl:text-[20px] sm:text-sm md:visible md:inline hidden transition-all invisible tracking-[.5px]'>
          Projetos já feitos
        </p>
        <p className='text-[#CFCFCF] uppercase 2xl:text-[20px] sm:text-sm md:visible md:inline hidden transition-all invisible tracking-[.5px]'>
          Inspiração
        </p>
        <p className='text-[#CFCFCF] uppercase 2xl:text-[20px] sm:text-sm sm:visible tracking-[.5px]'>
          Contato
        </p>
      </nav>
    </div>
  )
}

export default Header