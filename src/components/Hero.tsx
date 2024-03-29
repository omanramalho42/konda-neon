import React from 'react'

const Hero:React.FC = () => {
  return (
    <div className="absolute flex flex-col-full w-full h-full z-[0]">
      <video
        autoPlay
        muted
        loop
        className="rotate-180 absolute xl:top-0 top-[45%] h-full w-[100vw] left-0 z-[0] object-cover"
      >
        <source src="../assets/video/blackhole.webm" type="video/webm"/>
      </video>
    </div>
  )
}

export default Hero;