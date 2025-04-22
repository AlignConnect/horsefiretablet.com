"use client";
import dynamic from "next/dynamic";
import { useEffect } from "react";

const Header = dynamic(() => import('./component/Header'));
const Sec1 = dynamic(() => import('./component/Sec1'));
const Sec2 = dynamic(() => import('./component/Sec2'));
const Girl = dynamic(() => import('./component/Girl'));
const Senty = dynamic(() => import('./component/Senty'));
const Formdata = dynamic(() => import('./component/Formdata'));
const CRev = dynamic(() => import('./component/CustomerReview'));
const Footer = dynamic(() => import('@/app/commonUse/Footer'));
const Footerpop = dynamic(() => import('@/app/commonUse/bottompopup/BottomHandler'));

function page() {

    useEffect(() => {

        localStorage.setItem("PATH_KEY", "/hftab")

    }, [])

    return (

        <div className="bg-white">
            <div className="w-full ">
                <Header />
                <Sec1 />
                <Sec2 />
                <Girl />
                <Senty />
                <Formdata />
                <CRev />
                <Footer />
                <Footerpop />
            </div>
        </div>
    )
}

export default page