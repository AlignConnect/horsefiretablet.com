"use client"
import dynamic from 'next/dynamic';
import React, { useEffect } from 'react';
import './components/style.css'

const Header = dynamic(() => import('./components/Header'));

const Second = dynamic(() => import('./components/Second_cont'));

const Herbs = dynamic(() => import('./components/Herbs'));

const RightWay = dynamic(() => import('./components/RightWayOfConsumption'));

const Form = dynamic(() => import('./components/FormData'));

const CustomerReview = dynamic(() => import('./components/CustomerReview'));

const Footer = dynamic(() => import("@/app/commonUse/Footer"));

const FooterPopup = dynamic(() => import('@/app/commonUse/bottompopup/BottomHandler'));



const page = () => {


    useEffect(() => {

        localStorage.setItem("PATH_KEY", "/hftai");

    }, [])

    return (

        <section>
            <div>
                <Header />
                <Second />
                <Herbs />
                <RightWay />
                <Form />
                <CustomerReview />
                <Footer />
                <FooterPopup />
            </div>
        </section>
    )
}

export default page