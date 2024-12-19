"use client";
import dynamic from 'next/dynamic';
import '../ahf/components/home.css'
import { useEffect } from 'react';

function page() {


    const Header = dynamic(() => import('../ahf/components/Header'), {
        loading: () => <p>loader</p>
    });


    const Benifits = dynamic(() => import('../ahf/components/Benifits'), {
        loading: () => <p>loader</p>
    });

    const Problem = dynamic(() => import('../ahf/components/Problem'), {
        loading: () => <p>loader</p>
    });

    const Solution = dynamic(() => import('../ahf/components/Solution'), {
        loading: () => <p>loader</p>
    });

    const Result = dynamic(() => import('./components/Result'), {
        loading: () => <p>loader</p>
    });

    const Winter = dynamic(() => import('../ahf/components/Winter'), {
        loading: () => <p>loader</p>
    });


    const Form = dynamic(() => import('./components/Form'), {
        loading: () => <p>loader</p>
    });

    const OrderNow = dynamic(() => import('../ahf/components/OrderNow'), {
        loading: () => <p>loader</p>
    });

    const CustomerReview = dynamic(() => import("../ahf/components/CustomerReview"), {
        loading: () => <p>loader</p>
    });

    const Footer = dynamic(() => import('@/app/commonUse/Footer'), {
        loading: () => <p>load</p>
    });


    const FooterPopup = dynamic(() => import('@/app/commonUse/bottompopup/BottomHandler'), {
        loading: () => <p>load</p>
    });

    const FlipCart = dynamic(() => import('../commonUse/AmaFlipDialog/FlipAmazon'), {
        loading: () => <p>load</p>
    });

    const Flippro = dynamic(() => import('./components/FlipcardProduct'), {
        loading: () => <p>test</p>
    });

    useEffect(() => {

        localStorage.setItem("PATH_KEY", "/ahfkt");

    }, [])



    return (
        <div>

            <Header />

            <Benifits />

            <FlipCart />

            <Problem />


            <FlipCart />

            <Solution />


            <FlipCart />

            <Result />

            <FlipCart />

            <Winter />

            <Flippro />

            <Form />

            <CustomerReview />

            <Footer />

            <FooterPopup />

        </div>
    )
}

export default page