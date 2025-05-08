"use client"
import dynamic from 'next/dynamic';
import React, { useEffect } from 'react'
import './components/Home.css'


const Header = dynamic(() => import('./components/Header'), {
    loading: () => <p>loader</p>
});

const Section2 = dynamic(() => import('./components/Section2'), {
    loading: () => <p>loader</p>
});


const Doctor_Herbs = dynamic(() => import('./components/Doctor_Herbs'), {
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
        localStorage.setItem("PATH_KEY", "/hxb");
    }, []);

    return (
        <section className='w-full max-w-2xl mx-auto bg-white'>

            <Header />

            <Section2 />

            <Doctor_Herbs />


            <Form />

            <CustomerReview />

            <Footer />



            <FooterPopup />
        </section>
    )
}

export default page