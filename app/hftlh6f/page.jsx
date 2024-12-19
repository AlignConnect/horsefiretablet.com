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

const Sub3 = dynamic(() => import('./components/Sub3'), {
    loading: () => <p>loader</p>
});

const Sec1 = dynamic(() => import('./components/Sec1'), {
    loading: () => <p>loader</p>
});

const Sec2 = dynamic(() => import('./components/Sec2'), {
    loading: () => <p>loader</p>
});

const Sec3 = dynamic(() => import('./components/Sec3'), {
    loading: () => <p>loader</p>
});

const Sec4 = dynamic(() => import('./components/Sec4'), {
    loading: () => <p>loader</p>
});
const Sec5 = dynamic(() => import('./components/Sec5'), {
    loading: () => <p>loader</p>
});
const Sec6 = dynamic(() => import('./components/Sec6'), {
    loading: () => <p>loader</p>
});

const Sec7 = dynamic(() => import('./components/Sec7'), {
    loading: () => <p>loader</p>
});

const Sec8 = dynamic(() => import('./components/Sec8'), {
    loading: () => <p>loader</p>
});
const Sec9 = dynamic(() => import('./components/Sec9'), {
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
        localStorage.setItem("PATH_KEY", "/hftlh6f");
    }, []);

    return (
        <div className={`relative ${noto.className}`}>

            <section className='w-full bg-[#001415] text-[1.15rem] sm:text-2xl text-white'>

                <Main />

                <Sub3 />

                <Sec1/>

                <Sec2 />

                <Sec3 />

                <Sec4 />

                <Sec5 />

                <Sec6 />

                <Sec7 />

                <Sec8 />

                <Sec9/>


                <Form />

                <CustomerReview />

                <Footer />

                <FooterPopup />
            </section>

        </div>
    )
}

export default page