// Importando as bibliotecas necessárias
import React, { useState, FC } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface AnimatedModalProps {
    children: React.ReactNode;
    title: string;
    content: React.ReactNode;
    onSubmit: () => void;
}

// Definindo o componente do modal
const AnimatedModal: FC<AnimatedModalProps> = ({ children, title, content, onSubmit }: AnimatedModalProps) => {
  // Estado para controlar se o modal está aberto ou fechado
  const [isOpen, setIsOpen] = useState(false);

  // Função para alternar entre abrir e fechar o modal
  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className=''>
      {/* Botão para abrir o modal */}
      <button onClick={toggleModal}>
        { children }
      </button>

      {/* AnimatePresence para animar a entrada e saída do modal */}
      <AnimatePresence>
        {/* Condição para exibir o modal apenas se estiver aberto */}
        {isOpen && (
          // Modal animado usando Framer Motion
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className='flex flex-col space-y-2'
            transition={{ duration: 0.3 }}
            style={{
              position: 'fixed',
              bottom: '13%',
              right: '12%',
              transform: 'translate(-50%, -50%)',
              padding: '20px',
              background: '#fff',
              borderRadius: '8px',
              boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)',
            }}
          >
            {/* Conteúdo do modal */}
            <h2>{title}</h2>
            <div>{content}</div>

<div className='flex space-x-5 items-center justify-center'>
            {/* Botão para fechar o modal */}
            <button className='p-2 bg-white rounded-md hover:shadow-xl' onClick={toggleModal}>Fechar</button>
            
            {/* Botão para fechar o modal */}
            <button className='bg-green-500 p-2 rounded-md' onClick={onSubmit}>
                Enviar
            </button>
</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AnimatedModal;
