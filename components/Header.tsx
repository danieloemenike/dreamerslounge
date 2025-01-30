"use client";
// import Image from 'next/image'
import Link from 'next/link'
import { usePathname, } from 'next/navigation'
import React from 'react'

type Props = {}

const menus = [
  {
      id: "1",
      title: 'Regular',
      path: '',
      color: "#292929E5"
  },

  {
      id: "2",
      title: 'VIP',
      path: 'vip',
      color: "#31D3C6"
  },
]
function Header() {
  const activeRoute = usePathname();
	// const params = useParams();
  return (
      <main className=' h-[5rem] flex w-full shadow-md dark:shadow-2xl  sticky top-0 z-50 mb-15 py-2  px-4 bg-black'>
          <div className='flex items-center justify-between w-full'>
              <Link href="/" className='flex items-center gap-4'>
          {/* <Image src="/clublogo.jpeg" alt="club logo" width={ 50 } height={ 40 } className='rounded-full object-fill' /> */}
          <h2 className='font-bold tracking-tight md:text-lg text-white  '> DREAMER'S LOUNGE</h2>
              </Link>
        <div className="flex gap-4"> 
            { menus.map((menu) => (
              <Link
							href={`/${menu.path}`}
							className={`flex group items-center cursor-pointer px-3 py-2  transition-colors duration-100 transform rounded-lg  hover:shadow-md ${
								activeRoute === `/${menu.path}`
									? "bg-white text-black"
									: "  hover:text-black grayscale text-white hover:bg-indigo-100 dark:hover:bg-indigo-200 dark:hover:text-black "
							}    `}
                  key={ menu.id }>
                
                  <h2> {menu.title }</h2>
              </Link>
            
          ))}
         
             </div>
          </div>
        
    </main>
  )
}

export default Header