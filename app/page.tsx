import Hero from '@/components/Hero'
import Menu from '@/components/Menu'
import React from 'react'

type Props = {}

function Home({}: Props) {
  return (
    <>
      <Hero />
      <Menu />
    </>
  )
}

export default Home