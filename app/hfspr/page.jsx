"use client"
import React from 'react'
import './hfspr.css'
import { Noto_Serif_Devanagari, Poppins } from 'next/font/google';
import dynamic from 'next/dynamic';
import { useEffect } from 'react';

const noto = Noto_Serif_Devanagari({
    subsets: ['devanagari'],
    display: 'swap',
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});


const poppin = Poppins({
    subsets: ['latin'],
    display: 'swap',
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});


const Header = dynamic(() => import('./component/Header'));

const Sec1 = dynamic(() => import('./component/Sec1'));

const Sec2 = dynamic(() => import('./component/Sec2'));

const Checkout = dynamic(() => import('./component/Checkout'));

const Sec3 = dynamic(() => import('./component/Sec3'));

const Sec4 = dynamic(() => import('./component/Sec4'));

const Footer = dynamic(() => import('@/app/commonUse/Footer'));


const Footerpop = dynamic(() => import('@/app/commonUse/bottompopup/BottomHandler'))

const OrderNow = dynamic(() => import('./component/bottompopup/BottomHandler'));

const page = () => {

    useEffect(() => {

        localStorage.setItem("PATH_KEY", "/hfspr")

    }, [])



    return (

        <>
            <div className='bg-[url(https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/c3775860-2a0f-4a6a-2489-a071fb1c9300/public)] bg-no-repeat bg-cover pt-5 sm:pt-10'>

                <Header />

            </div>

            <Sec1 />

            <Sec2 />

            <Checkout />

            <Sec3 />

            <Sec4 />

            {/* <Footer /> */}

            {/* <Footerpop /> */}


            <div className={poppin.className}>
                <div className='text-lg font-semibold pt-4 text-center fontPoppinsgl'>
                    We are Available on
                </div>


                <div className="flex justify-center items-center gap-7 py-3">
                    <a href="https://bit.ly/3yJa2zr">
                        <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/1369a0a5-d191-4392-bf47-5c170ecb8600/public" alt="" className='sm:w-40 w-32 mx-auto' />
                    </a>
                    <a href="https://amzn.to/3QZQiOx">
                        <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/3edacd08-1afb-49b1-9aba-2cdda7681400/public" alt="" className='sm:w-40 w-32 mx-auto ' />
                    </a>
                </div>

            </div>

            <div className="text-center mt-3 sm:pb-5 pb-16 bg-zinc-100">
                <img
                    src="https://www.arayurveda.com/img/logo.gif"
                    alt="Logo"
                    className="w-32 mx-auto"
                    width="100%"
                    height="100%"
                    loading="lazy"
                />
                <p className="text-md mt-2 font-semibold">
                    {"Arayurveda"} Private Limited
                </p>
                <p className="text-sm mt-1">
                    FF 14, Ujala Avenue, Sarkhej Road, Vishala, Ahmedabad Gujarat
                    (INDIA) - 380055
                </p>
            </div>

            <div className='w-full'>
                <OrderNow />

            </div>

        </>
    )
}

export default page
