import dynamic from 'next/dynamic'
import React from 'react'
import './Home.css'


const Header = dynamic(() => import('@/app/hfafc/component/Header'))
const Section1 = dynamic(() => import('@/app/hfafc/component/Section1'))

const page = () => {
  return (
    <div>

      <Header />
      <Section1 />

      
    </div>
  )
}

export default page
