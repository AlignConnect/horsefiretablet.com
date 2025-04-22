"use client"
import dynamic from 'next/dynamic';
import React, { useEffect } from 'react'
import './components/style.css'


const Header = dynamic(() => import('./components/Header'), {
    loading: () => <p>Header Loading</p>
});

const Form = dynamic(() => import('./components/Form'), {
    loading: () => <p>Form is Loading</p>
});


const SecondCont_ = dynamic(() => import('./components/SecondCont'), {
    loading: () => <p>Content is Loading</p>
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

        localStorage.setItem("PATH_KEY", "/hftjc")

    }, [])

    return (
        <section className='sm:max-w-2xl w-full mx-auto'>

            <Header />

            <Form />

            <SecondCont_ />

            <Form />

            <CustomerReview />

            <Footer />

            <FooterPopup />


        </section>
    )
}

export default page