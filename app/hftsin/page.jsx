"use client"
import dynamic from 'next/dynamic';
import './components/Home.css'
import { useEffect } from 'react';


const Header = dynamic(() => import('./components/Header'), {
    loading: () => <p>loader</p>
});



const Steely = dynamic(() => import('./components/Steely'), {
    loading: () => <p>loader</p>
});

const Herbs = dynamic(() => import('./components/Herbs'), {
    loading: () => <p>loader</p>
});


const Timing = dynamic(() => import('./components/Timing'), {
    loading: () => <p>loader</p>
});

const Story_of_success = dynamic(() => import('./components/Story_of_success'), {
    loading: () => <p>loader</p>
});

const HftUse = dynamic(() => import('./components/HftUse'), {
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



function page() {


    useEffect(() => {
        localStorage.setItem("PATH_KEY", "/hftsin");
    }, []);

    return (
        <div className='w-full max-w-2xl text-center mx-auto'>

            <Header />

            <Steely />

            <Herbs />

            <Timing />

            <Story_of_success />

            <HftUse />

            <Form />

            <CustomerReview />

            <Footer />



            <FooterPopup />




        </div >
    )
}

export default page