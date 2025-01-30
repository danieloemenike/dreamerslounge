import { ArrowUpRightFromSquareIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type Props = {}

function Hero({}: Props) {
  return (
      <>
     <section className='h-[80dvh] md:h-[70dvh] w-full flex flex-col lg:flex-row'>
              <div className='lg:h-full  w-full flex flex-col lg:justify-center justify-end items-center lg:ml-28 lg:mr-4 mx-auto'>
                 
                  <div>
                      <h2 className='text-[2rem] md:text-[4rem] items-center justify-center flex lg:tracking-[-0.1rem] w-full lg:leading-[6rem] font-medium font-sans gap-4 '>
                         DREAMER'S
                        LOUNGE 
                      </h2>
                  </div>
                  <div className='flex items-start text-[1rem]'>
                      <h2 className=' font-medium text-violet-300'>Lets Discover Your Taste</h2>
                  </div>
                  <Link href = "/vip" className='flex items-center gap-4 px-3 py-2 text-[14px]'>
                  Visit Vip Section <ArrowUpRightFromSquareIcon />
                  </Link>
              </div>
              <div className='h-full md:h-[65dvh] w-full mb-4 my-2 px-4 md:my-8 flex items-center justify-center'>
                  <Image src="/hero.jpg" alt="model" height={600} width={600} className='rounded-full border-white border-4 object-cover mx-4' priority />
              </div>
      </section>
      </>
  )
}

export default Hero