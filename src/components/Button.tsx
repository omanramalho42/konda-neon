import React, { ButtonHTMLAttributes, FC } from 'react'
import { motion } from 'framer-motion'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  // Adicione suas propriedades personalizadas aqui
  onClick?: () => void;
}

const Button:FC<ButtonProps> = ({ onClick, ...rest }: ButtonProps) => {
  return (
    <motion.button 
        // { ...rest } 
        onClick={onClick}
        className='flex justify-center z-20 bg-[#FFC607] shadow-growlight rounded-[50px] w-[247px] h-[70px] items-center'
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
    >
        <p className='text-black text-center uppercase text-[15px] tracking-[2.7px]'>
            contato
        </p>
    </motion.button>
  )
}

export default Button