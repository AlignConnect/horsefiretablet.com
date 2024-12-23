import dynamic from 'next/dynamic'
import React from 'react'
import './Home.css'


const Header = dynamic(() => import('@/app/hfafc/component/Header'))
const Section1 = dynamic(() => import('@/app/hfafc/component/Section1'))
const Section2 = dynamic(() => import('@/app/hfafc/component/Section2'))
const Section3 = dynamic(() => import('@/app/hfafc/component/Section3'))

const CoUse = dynamic(() => import('@/app/hfafc/component/most_selling_3'))

const Footer = dynamic(() => import('@/app/commonUse/Footer'))

const Footerpop = dynamic(() => import('@/app/commonUse/bottompopup/BottomHandler'))

const page = () => {
  return (
    <div className=''>

      <Header />
      <Section1 />
      <Section2 />
      <Section3 />
      <CoUse />
      <Footer />
      <Footerpop />

    </div>
  )
}

export default page
