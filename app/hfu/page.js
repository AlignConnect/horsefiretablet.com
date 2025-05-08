"use client";
import { Noto_Serif_Devanagari } from 'next/font/google';
import { useEffect } from 'react';
import './hfu.css';
import dynamic from 'next/dynamic';

const Header = dynamic(() => import('./component/Header'), {
    loading: () => <p>loader</p>
});

const Rashika_story = dynamic(() => import('./component/Rashika_story'), {
    loading: () => <p>loader</p>
});

const Order_kiya = dynamic(() => import('./component/Order_kiya'), {
    loading: () => <p>loader</p>
});

const Sevan_kare = dynamic(() => import('./component/Sevan_kare'), {
    loading: () => <p>loader</p>
});

const Form = dynamic(() => import('./component/Form'), {
    loading: () => <p>loader</p>
});

const CustomerReview = dynamic(() => import('./component/CustomerReview'), {
    loading: () => <p>loader</p>
});

const Footer = dynamic(() => import('../commonUse/Footer'), {
    loading: () => <p>loader</p>
});

const FooterPopup = dynamic(() => import('../commonUse/bottompopup/BottomHandler'), {
    loading: () => <p>loader</p>
})




const noto = Noto_Serif_Devanagari({
    subsets: ['devanagari'],
    display: 'swap',
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});

function page() {


    useEffect(() => {

        localStorage.setItem("PATH_KEY", "/hfu");

    }, [])

    return (
        <div className={`${noto.className}`}>

            <Header />

            <Rashika_story />

            <Order_kiya />

            <Sevan_kare />

            <Form />

            <CustomerReview />

            <Footer />

            <FooterPopup />

        </div>



    )
}

export default page;