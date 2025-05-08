"use client"
import dynamic from "next/dynamic"
import { useEffect } from "react";

const Header = dynamic(() => import('./components/Header'));
const IMcompo = dynamic(() => import('./components/IMcompo'));
const Second = dynamic(() => import('./components/Second'));
const Third = dynamic(() => import('./components/Third'));
const Formfile = dynamic(() => import('./components/FormFile'));
const CustomerReview = dynamic(() => import('./components/CustomerReview'));
const Footer = dynamic(() => import('@/app/commonUse/Footer'));
const Footerpop = dynamic(() => import('@/app/commonUse/bottompopup/BottomHandler'))

const page = () => {

    useEffect(() => {
        localStorage.setItem("PATH_KEY", "/hfopt")
    }, [])


    return (
        <section className="w-full md:w-[700px] mx-auto">

            <Header />
            <IMcompo />
            <Second />
            <Third />
            <Formfile />
            <CustomerReview />
            <Footer />
            <Footerpop />

        </section>)
}

export default page