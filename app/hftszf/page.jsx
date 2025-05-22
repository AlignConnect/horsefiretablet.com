"use client";
import dynamic from "next/dynamic"
import React, { useEffect } from 'react'
import './components/home.css'



const Header = dynamic(() => import('./components/Header'), {
    loading: () => <p>loading</p>
});

const Content = dynamic(() => import('./components/Content'), {
    loading: () => <p>loading</p>
});

const About = dynamic(() => import('./components/About'), {
    loading: () => <p>loading</p>
});


const Cus = dynamic(() => import('./components/Cus'), {
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

        localStorage.setItem("PATH_KEY", "/hftszf")

    }, [])

    return (
        <section>

            <div className="">

                <Header />

                <Content />

                <About />

                <Cus />

                <Form />

                <CustomerReview />

                <Footer />

                <FooterPopup />

            </div>

        </section>
    )
}

export default page