"use client"
import dynamic from "next/dynamic"
import { Noto_Serif_Devanagari } from 'next/font/google';
import { useEffect } from "react";

const noto = Noto_Serif_Devanagari({
    subsets: ['devanagari'],
    display: 'swap',
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});


const Header = dynamic(() => import('./component/Header'));
const Second = dynamic(() => import('./component/Second'));
const Third = dynamic(() => import('./component/Third'));
const Form = dynamic(() => import('./component/Form'));
const CustomerReview = dynamic(() => import('./component/CustomerReview'));
const Footer = dynamic(() => import('@/app/commonUse/Footer'));
const Footerpopup = dynamic(() => import('@/app/commonUse/bottompopup/BottomHandler'));

const page = () => {

    useEffect(() => {

        localStorage.setItem("PATH_KEY", "/hftxc")

    }, [])


    return (
        <section className={`w-full md:w-[600px] mx-auto ${noto.className}`}>

            <Header />
            <Second />
            <Third />
            <Form />
            <CustomerReview />
            <Footer />
            <Footerpopup />

        </section>)
}

export default page