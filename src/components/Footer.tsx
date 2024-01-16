import React from 'react'

const footerInfo = [
    { title: `section 1`, links: [`trending`, `popular`, `news`, `about`] },
    { title: `section 1`, links: [`trending`, `popular`, `news`, `about`] },
    { title: `section 1`, links: [`trending`, `popular`, `news`, `about`] }
]

const Footer = () => {
  return (
    <footer 
        className='border-t-2 xl:mx-20 mx-5 h-[200px]'
        style={{ 
            borderStyle: 'solid',
            borderImage: 'linear-gradient(to right, #63ABFD, #F6F7A0, #FF5E82) 1'
          }}
    >
        <div className='flex flex-row my-[37px] space-y-[17px] justify-around items-center'>
            <h5 className='xl:w-full xl:text-start xl:text-[20px] text-[14px]'>
                Konda neon
            </h5>
            <div className='flex w-full flex-row justify-around items-center'>
                {footerInfo.map(({ title, links }, idx) => {
                    return (
                        <div key={idx} className='flex flex-col'>
                            <span className='xl:text-[20px] text-[16px] tracking-[4px] text-[#545454]'>
                                { title }
                            </span>
                            {Array.from(links).map((item, index) => (
                                <p 
                                    key={index} 
                                    className='text-start tracking-[4px] xl:text-[14px] text-[10px] text-[#ABABAB]'
                                >
                                    { item }
                                </p>
                            ))}
                        </div>
                    )
                })}
            </div>
        </div>
    </footer>
  )
}

export default Footer