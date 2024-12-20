import dynamic from 'next/dynamic'
import React from 'react'
import './Home.css'


const Header = dynamic(() => import('@/app/hfafc/component/Header'))

const page = () => {
  return (
    <div>

      <Header />

      
    </div>
  )
}

export default page
