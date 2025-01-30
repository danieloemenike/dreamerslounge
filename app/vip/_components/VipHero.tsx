import Image from 'next/image'
import React from 'react'

function VipHero() {
  return (

     <section className='h-dvh w-full flex flex-col lg:flex-row'>
              <div className='lg:h-full  w-full flex flex-col lg:justify-center justify-end items-center lg:ml-28 lg:mr-4 mx-auto  h-[30vh]'>
                 
                  <div>
                      <h2 className='text-[2rem] md:text-[4rem] items-center justify-center flex lg:tracking-[-0.1rem] w-full lg:leading-[8rem] font-semibold gap-4 '>
                         DREAMER'S
                          LOUNGE <br />
                          
                      </h2>
                      {/* <p className='text-center text-[1.5rem]'> VIP SECTION </p> */}
                  </div>
                  <div className='flex items-start text-[1.5rem]'>
                      <h2 className='font-semibold rounded py-2 px-4 bg-blue-600 text-white'>THE VIP SECTION</h2>
                  </div>
              </div>
              <div className='h-[60vh] md:h-dvh w-full mb-4 my-2 px-4 md:my-8 flex items-center justify-center'>
              <Image src="/vipHero1.jpg" alt="model" height={ 1400 } width={ 1000 } quality={100 } className='rounded-full object-contain mx-4' priority />
              </div>
      </section>
  )
}

export default VipHero