"use client"
import dynamic from 'next/dynamic';
import React, { useEffect } from 'react'
// import './hft143.scss'

import { Noto_Serif_Devanagari } from "next/font/google";

const noto = Noto_Serif_Devanagari({
    subsets: ['devanagari'],
    display: 'swap',
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});


const Main = dynamic(() => import('./components/Main'), {
    loading: () => <p>loader</p>
});


const Sec4sub1 = dynamic(() => import('./components/Sec4sub1'), {
    loading: () => <p>loader</p>
});

const Sec5 = dynamic(() => import('./components/Sec5'), {
    loading: () => <p>loader</p>
});
const Sec6 = dynamic(() => import('./components/Sec6'), {
    loading: () => <p>loader</p>
});



const Form = dynamic(() => import('./components/Form'), {
    loading: () => <p>loader</p>
});


const CustomerReview = dynamic(() => import('./components/CustomerReview'), {
    loading: () => <p>loader</p>
});

const Footer = dynamic(() => import("@/app/commonUse/Footer"), {
    loading: () => <p>loader</p>
});


const FooterPopup = dynamic(() => import("@/app/commonUse/bottompopup/BottomHandler"), {
    loading: () => <p>loader</p>
});



const page = () => {

    useEffect(() => {
        localStorage.setItem("PATH_KEY", "/hftrci");
    }, []);

    return (
        <div className={`bg-zinc-800 relative  ${noto.className}`}>

            <section className='w-full bg-white max-w-xl mx-auto  overflow-hidden text-[1.15rem] sm:text-xl'>

                <Main />


                <Sec4sub1 />

                <Sec5 />

                <Sec6 />



                <Form />

                <CustomerReview />

                <Footer />

                <FooterPopup />
            </section>
        </div>
    )
}

export default page