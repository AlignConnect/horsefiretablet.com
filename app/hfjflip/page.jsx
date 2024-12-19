"use client"
import dynamic from 'next/dynamic';
import React, { useEffect } from 'react'


const Header = dynamic(() => import('@/app/hfjsx/components/Header'));
const FirstProduct = dynamic(() => import('@/app/hfjsx/components/FirstProduct'));
const Second = dynamic(() => import('@/app/hfjsx/components/Second'));
const Third = dynamic(() => import('@/app/hfjsx/components/Third'));
const Fourth = dynamic(() => import('@/app/hfjsx/components/Fourth'));
const Trust = dynamic(() => import('@/app/hfjsx/components/Trust'));

const Form = dynamic(() => import('@/app/hfjflip/Form'));
const CReview = dynamic(() => import('@/app/hfjsx/components/CustomerReview'));
const Footer = dynamic(() => import('@/app/commonUse/Footer'));
const FooterPop = dynamic(() => import('@/app/commonUse/bottompopup/BottomHandler'));

const Amaz = dynamic(() => import('@/app/commonUse/AmaFlipDialog/FlipAmazon'));

const page = () => {


    useEffect(() => {

        localStorage.setItem("PATH_KEY", "/hfjflip")

    }, [])

    return (
        <section className='w-full md:w-[550px] mx-auto border'>

            <Header />
            <FirstProduct />
            <Amaz />

            <Second />
            <Amaz />

            <Third />
            <Amaz />

            <Fourth />
            <Amaz />

            <Trust />
            <Amaz />

            <Form />
            <CReview />
            <Footer />
            <FooterPop />

        </section>
    )
}

export default page