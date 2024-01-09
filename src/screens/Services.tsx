import React from 'react'
import { 
  Package, 
  ClockAfternoon,
  CurrencyDollar 
} from '@phosphor-icons/react'

interface ServicesProps {
  title: String;
  text: String;
  icon?: React.ReactNode;
}

const services:ServicesProps[] = [
  {
    title: 'orçamento',
    text: `
      Envie sua ideia de LED Neon. Aceitamos uma variedade de formatos para garantir que sua visão seja perfeitamente capturada.

      Nossa equipe especializada analisará cuidadosamente seu arquivo.

      Com o arquivo aprovado, nossa equipe preparará um orçamento personalizado para o seu projeto. 
    `,
    icon: <CurrencyDollar size={32} />
  },
  {
    title: 'produção',
    text: `
      Escolhemos os melhores materiais para garantir durabilidade e um brilho vibrante. Nosso compromisso com a qualidade reflete-se em cada etapa da produção.

      Utilizamos tecnologia de impressão 3D de última geração para criar a estrutura do seu LED Neon. Essa abordagem permite uma produção rápida e
      precisa.

      Nossa equipe habilidosa realiza a montagem manual, assegurando que cada componente seja cuidadosamente ajustado para atender às suas especificações.
    `,
    icon: <ClockAfternoon size={32} />
  },
  {
    title: 'Envio',
    text: `
      Após a produção artesanal, cada LED Neon é cuidadosamente embalado com materiais de proteção, assegurando que sua peça chegue impecável em suas mãos.

      Fornecemos informações de rastreamento para que você possa acompanhar a jornada do seu LED Neon desde nosso espaço até o seu. Transparência é fundamental em cada etapa.
    `,
    icon: <Package size={32} />
  }
]

const Services:React.FC = () => {
  return (
    <section className='flex xl:h-[100vh] flex-col justify-center my-10 mx-20 mt-20'>

      <div className='flex flex-col items-center space-y-9'>
        <p className='text-lg uppercase 2xl:text-start text-center shadow-[#FFC607] text-[#FFC607] tracking-[6px]' style={{ textShadow: '0px 0px 8px #FFC607' }}>
          Nosso serviço
        </p>
        <div>
          <h2 className='text-[45px] mx-16 sm:text-[70px] xl:text-[80px] uppercase text-center tracking-[6px]'>
            Processo de pedido
          </h2>
          <div className='w-full h-1 bg-gradient-linear' />
        </div>
        <p className='text-[20px] text-center text-[#A8A6A7] tracking-[4px] xl:w-[630px]'>
          Na Konda Neon, simplificamos o processo de orçamento para tornar sua experiência única desde o início.
        </p>
      </div>

      <div className='flex justify-center mt-20'>
        <div 
          className='grid xl:grid-cols-3 grid-cols-1 gap-14 mt-16 rounded-xl' 
        >
          {services.map(({ text, title, icon }, idx) => {
            return (
              <div 
                key={idx} 
                className='flex flex-col bg-white items-center p-2 space-y-10 h-[400px] rounded-xl w-96'
              >
                <div 
                  className='relative flex justify-center items-center right-32 bottom-10 w-16 h-16 rounded-md bg-gradient-conic'
                >
                  { icon }
                </div>
                <div className='flex flex-col justify-center items-center relative bottom-16 space-y-10'>
                  <h4 className='text-3xl text-black'>
                    { title }
                  </h4>
                  <p className='text-center text-black'>
                    { text }
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Services