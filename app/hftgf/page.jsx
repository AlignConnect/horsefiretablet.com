"use client";
import dynamic from "next/dynamic"
import React, { useEffect } from 'react'
import './components/home.css'

const Header = dynamic(() => import('./components/Header'), {
    loading: () => <p>loading</p>
});

const Content = dynamic(() => import('./components/Content'));


const Form = dynamic(() => import('./components/Form'));

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

        localStorage.setItem("PATH_KEY", "/hftgf")

    }, [])


    return (
        <section className="sm:max-w-2xl mx-auto ">


            <div className="bg-black">


                <Header />

                <Content />

                <Form />

                <CustomerReview />

                <Footer />

                <FooterPopup />
            </div>





        </section>
    )
}

export default page