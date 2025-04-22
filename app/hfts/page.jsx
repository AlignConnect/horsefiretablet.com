"use client"
import dynamic from 'next/dynamic';
import './components/home.css'
import React, { useEffect } from 'react'


const Header = dynamic(() => import('./components/Header'), {
    loading: () => <p>loader</p>
});


const Second_cont = dynamic(() => import('./components/Second_cont'), {
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
        localStorage.setItem("PATH_KEY", "/hfts");
    }, []);


    return (
        <section className='w-full sm:max-w-2xl mx-auto'>
            <Header />

            <Second_cont />

            <Form />

            <CustomerReview />

            <Footer />



            <FooterPopup />

        </section>
    )
}

export default page