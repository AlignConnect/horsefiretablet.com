"use client"
import dynamic from 'next/dynamic'
import { Noto_Serif_Devanagari } from 'next/font/google'
import React from 'react'
import { useEffect } from 'react'


const Newheader = dynamic(() => {
    return import("./newComponents/Header")
})


const Section1 = dynamic(() => {
    return import("./newComponents/Section1")
})

const Section2 = dynamic(() => {
    return import("./newComponents/Section2")
})


const ReviewSection = dynamic(() => {
    return import('@/app/ahf/components/CustomerReview')
})



const BottomPopup = dynamic(() => {
    return import("./newComponents/BottomPopup")
})



const Footer = dynamic(() => import('@/app/commonUse/Footer'))

const noto = Noto_Serif_Devanagari({
    subsets: ["devanagari"],
    display: "swap",
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});
const page = () => {


    useEffect(() => {

        localStorage.setItem("PATH_KEY", "/hfchk")
        localStorage.setItem("PATH", "/hfchk")

    }, [])


    return (
        <main className={`${noto.className} bg-white`}>
            <title>Horse Fire Tablet</title>
            <section className="sm:w-[65%] mx-auto  text-black text-[1.1rem] sm:text-xl">

                <Newheader />
                <Section1 />
                <Section2 />
                <ReviewSection />
                <Footer />

                <div className='pb-7'>
                    <BottomPopup />
                </div>

            </section>
        </main>
    )
}

export default page
