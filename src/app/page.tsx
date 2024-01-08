export default function Home() {
  return (
    <main className='flex xl:flex-row flex-col-reverse mt-20 justify-center items-center text-center'>
      <div className='2xl:w-[50vw] w-full md:mt-[80px] mt-[35px]'>
        <div className='flex 2xl:mx-32 mx-5 flex-col md:space-y-10 space-y-6'>
          <p 
            className='text-lg uppercase 2xl:text-start text-center 2xl:w-[450px] shadow-[#FFC607] text-[#FFC607] tracking-[6px]' 
            style={{ textShadow: '0px 0px 8px #FFC607' }}
          >
            Impressão 3D de Neon LED para Projetos Personalizados e Rápidos.
          </p>
          <h1 className='text-5xl text-[50px] sm:text-[70px] xl:text-[90px] 2xl:text-start text-center uppercase 3xl:w-[900px] tracking-[6px]'>
            Dê Vida às Suas Ideias com Konda Neon!
          </h1>
          <p className='text-gray-100 text-sm 2xl:text-start text-center uppercase 2xl:w-[660px] tracking-[6px]'>
            Konda Neon, onde transformamos sua visão em luz. 
            Utilizando tecnologia de impressão 3D, tornamos 
            o processo de criação de LEDs Neon personalizados
            mais rápido, acessível e exclusivo para cada cliente.
          </p>
        </div>
        <div className='flex justify-center my-[75px]'>
          <button className='flex justify-center bg-[#FFC607] shadow-growlight rounded-[50px] w-[247px] p-[28px]'>
            <p className='text-black text-center uppercase text-[16px] tracking-[6px]'>
              contato
            </p>
          </button>
          <button>
            <p></p>
          </button>
        </div>
      </div>
      <div className="2xl:w-[50vw] z-10 w-full sm:h-[93vh] h-[65vh] bg-no-repeat bg-cover 3xl:bg-right-top bg-center bg-origin-content bg-black md:bg-home-pattern bg-home-pattern-mobile" />
    </main>
  )
}
