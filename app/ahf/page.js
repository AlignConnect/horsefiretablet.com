"use client";
import dynamic from 'next/dynamic';
import './components/Home.css'
import { useEffect } from 'react';

function page() {


    const Header = dynamic(() => import('./components/Header'));


    const Benifits = dynamic(() => import('./components/Benifits'));

    const Problem = dynamic(() => import('./components/Problem'));

    const Solution = dynamic(() => import('./components/Solution'));

    const Result = dynamic(() => import('./components/Result'));


    const Winter = dynamic(() => import('./components/Winter'));


    const Form = dynamic(() => import('./components/Form'));

    const OrderNow = dynamic(() => import('./components/OrderNow'));

    const CustomerReview = dynamic(() => import("@/app/hfo/component/CustomerReview"));

    const Footer = dynamic(() => import('@/app/commonUse/Footer'));


    const FooterPopup = dynamic(() => import('@/app/commonUse/bottompopup/BottomHandler'));


    useEffect(() => {

        localStorage.setItem("PATH_KEY", "/ahf");

    }, [])



    return (
        <div>



            <Header />

            <Benifits />

            <Problem />

            <OrderNow />

            <Solution />

            <OrderNow />

            <Result />

            <Winter />

            <Form />

            <CustomerReview />

            <Footer />

            <FooterPopup />

        </div>
    )
}

export default page