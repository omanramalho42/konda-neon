import React from 'react'

const Hero:React.FC = () => {
  return (
    <div className="relative flex flex-col-full w-full h-full z-[0]">
      <video
        autoPlay
        muted
        loop
        className="rotate-180 absolute top-[140px] left-0 z-[0] object-cover"
      >
        <source src="../assets/video/cards-video.webm" type="video/webm"/>
      </video>
    </div>
  )
}

export default Hero;