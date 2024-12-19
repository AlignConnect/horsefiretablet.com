"use client";
import dynamic from "next/dynamic"
import { useEffect } from "react";
import './components/Home.css'

const Header = dynamic(() => import('./components/Header'), {
    loading: () => <p>loading</p>
});

const SecondContent = dynamic(() => import('./components/secondContent'), {
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

        localStorage.setItem("PATH_KEY", "/hftengf")

    }, [])


    return (
        <section>

            <Header />

            <SecondContent />

            <Form />

            <CustomerReview />

            <Footer />

            <FooterPopup />

        </section>
    )
}

export default page