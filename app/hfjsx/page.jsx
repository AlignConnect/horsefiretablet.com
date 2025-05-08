"use client"
import dynamic from 'next/dynamic'
import React, { useEffect } from 'react'


const Header = dynamic(() => import('./components/Header'));
const FirstProduct = dynamic(() => import('./components/FirstProduct'));
const Second = dynamic(() => import('./components/Second'));
const Third = dynamic(() => import('./components/Third'));
const Fourth = dynamic(() => import('./components/Fourth'));
const Trust = dynamic(() => import('./components/Trust'));

const Form = dynamic(() => import('./components/Form'));
const CReview = dynamic(() => import('./components/CustomerReview'));
const Footer = dynamic(() => import('@/app/commonUse/Footer'));
const FooterPop = dynamic(() => import('@/app/commonUse/bottompopup/BottomHandler'));

const page = () => {

    useEffect(() => {

        localStorage.setItem("PATH_KEY", "/hfjsx")

    }, [])


    return (

        <section className='w-full md:w-[550px] mx-auto border'>

            <Header />
            <FirstProduct />
            <Second />
            <Third />
            <Fourth />
            <Trust />
            <Form />
            <CReview />
            <Footer />
            <FooterPop />

        </section>

    )
}

export default page