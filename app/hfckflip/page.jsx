"use client"
import dynamic from 'next/dynamic'
import React, { useEffect } from 'react'

const Header = dynamic(() => import("./component/Header"))

const Sec1 = dynamic(() => import('./component/Sec1'));
const Sec2 = dynamic(() => import('./component/Sec2'));
const Sec3 = dynamic(() => import('./component/Sec3'));
const Form = dynamic(() => import('./component/Form'));
const Review = dynamic(() => import('@/app/hfopt/components/CustomerReview'))
const Footer = dynamic(() => import('@/app/commonUse/Footer'));
const Footerpop = dynamic(() => import('@/app/commonUse/bottompopup/BottomHandler'))

const Order = dynamic(() => import('@/app/commonUse/AmaFlipDialog/FlipAmazon'))

const page = () => {





    useEffect(() => {

        localStorage.setItem("PATH_KEY", "/hfckflip")

    }, [])


    return (
        <div className='sm:w-[700px] mx-auto bg-black'>

            <Header />
            <Sec1 />

            <div className='my-4'>
                <Order />
            </div>
            <Sec2 />
            {/* <Order /> */}

            <Sec3 />

            <Form />
            <div className='bg-white'>
                <Review />
            </div>

            <Footer />
            <Footerpop />
        </div>
    )
}

export default page
