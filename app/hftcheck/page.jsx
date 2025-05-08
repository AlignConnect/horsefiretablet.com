"use client"
import dynamic from 'next/dynamic'
import React, { useEffect } from 'react'

const Header = dynamic(() => import('./components/Header'));
const Sec1 = dynamic(() => import('./components/Sec1'));
const Sec2 = dynamic(() => import('./components/Sec2'));
const Sec3 = dynamic(() => import('./components/Sec3'));
const Form = dynamic(() => import('./components/Form'));
const CustomerReview = dynamic(() => import('./components/CustomerReview'));
const Footer = dynamic(() => import('@/app/commonUse/Footer'));
const Footerp = dynamic(() => import('@/app/commonUse/bottompopup/BottomHandler'));
const OrderNow = dynamic(() => import('./components/OrderNow'));


const page = () => {

    //------------------------------------------



    //-----------------------------------------







    useEffect(() => {
        localStorage.setItem("PATH_KEY", "/hftcheck")
    }, [])





    return (

        <section className='bg-black min-h-[100vh]'>
            <section className='w-full md:w-[600px]  mx-auto'>

                <Header />
                <Sec1 />
                <Sec2 />
                <OrderNow />

                <Sec3 />
                <OrderNow />

                <Form />

                <CustomerReview />
                <Footer />
                <Footerp />

            </section>
        </section>

    )
}

export default page