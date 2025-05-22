"use client";
import '../hooks/i18n';
import dynamic from "next/dynamic"
import { useEffect } from "react";
import './components/Home.css'

import { Noto_Serif_Devanagari } from "next/font/google";

const noto = Noto_Serif_Devanagari({
    subsets: ['devanagari'],
    display: 'swap',
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});

const Header = dynamic(() => import('./components/Header'), {
    loading: () => <p>loading</p>
});

const Sec1 = dynamic(() => import('./components/Sec1'), {
    loading: () => <p>loading</p>
});

const Sec2 = dynamic(() => import('./components/Sec2'), {
    loading: () => <p>loading</p>
});

const Sec3 = dynamic(() => import('./components/Sec3'), {
    loading: () => <p>loading</p>
});

const Order_now = dynamic(() => import('./components/Order_now'), {
    loading: () => <p>loading</p>
});

const Sec4 = dynamic(() => import('./components/Sec4'), {
    loading: () => <p>loading</p>
});

const Sec5 = dynamic(() => import('./components/Sec5'), {
    loading: () => <p>loading</p>
});

const Sec6 = dynamic(() => import('./components/Sec6'), {
    loading: () => <p>loading</p>
});

const Sec7 = dynamic(() => import('./components/Sec7'), {
    loading: () => <p>loading</p>
});

const Sec8 = dynamic(() => import('./components/Sec8'), {
    loading: () => <p>loading</p>
});



const Form = dynamic(() => import('./components/Form'), {
    loading: () => <p>loading</p>
});


const CustomerReview = dynamic(() => import('./components/CustomerReview'), {
    loading: () => <p>loading</p>
});

const Footer = dynamic(() => import("@/app/commonUse/Footer"), {
    loading: () => <p>loader</p>
});

const FooterPopup = dynamic(() => import('@/app/commonUse/bottompopup/BottomHandler'), {
    loading: () => <p>loader</p>
})



const page = () => {



    useEffect(() => {

        localStorage.setItem("PATH_KEY", "/hftbngf")

    }, [])


    return (
        <section className={`bg-white text-black text-[1.1rem] sm:text-2xl ${noto.className}`}>

            
            <Header />

            <Sec1 />

            <Sec2 />

            <Sec3 />

            <Sec4 />

            <Sec5 />

            <Sec6 />

            <Sec7 />

            <Sec8 />

            <Form />

            <CustomerReview />

            <Footer />

            <FooterPopup />

        </section>
    )
}

export default page