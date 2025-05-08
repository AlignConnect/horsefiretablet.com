"use client";
import dynamic from "next/dynamic"
import { Noto_Serif_Devanagari } from "next/font/google";
import './component/hfuri.css'
import { useEffect } from "react";

const Header = dynamic(() => import('./component/Header'));
const Sec1 = dynamic(() => import('./component/Section1'));
const Sec2 = dynamic(() => import('./component/Section2'));
const Sec3 = dynamic(() => import('./component/Section3'));
const Form = dynamic(() => import('./component/Form'));
const CustomerReview = dynamic(() => import('./component/CustomerReview'));
const Footer = dynamic(() => import('@/app/commonUse/Footer'))
const Footerpop = dynamic(() => import('@/app/commonUse/bottompopup/BottomHandler'))
const Inquiry = dynamic(() => import('./component/Inquiry'));



const noto = Noto_Serif_Devanagari({
    subsets: ['devanagari'],
    display: 'swap',
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});


const page = () => {



    useEffect(() => {
        localStorage.setItem("PATH_KEY", "/hfuri");
    }, [])


            







    return (
        <section className="bg-black">
            <section className={`${noto.className} w-full md:w-[600px] mx-auto`}>


                



                <Header />
                <Sec1 />
                <Sec2 />
                <Sec3 />
                <Form />

                <div className="w-full">
                    <CustomerReview />
                </div>

                <Footer />
                <Footerpop />

            </section>
        </section>
    )
}

export default page