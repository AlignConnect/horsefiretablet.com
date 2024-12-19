"use client";
import { useEffect } from 'react';
import '../hfu/hfu.css';
import dynamic from 'next/dynamic';

const Header = dynamic(() => import('./com/Header'), {
    loading: () => <p>loader</p>
});

const Rashika_story = dynamic(() => import('../hfu/component/Rashika_story'), {
    loading: () => <p>loader</p>
});

const Order_kiya = dynamic(() => import('../hfu/component/Order_kiya'), {
    loading: () => <p>loader</p>
});

const Sevan_kare = dynamic(() => import('../hfu/component/Sevan_kare'), {
    loading: () => <p>loader</p>
});

const Form = dynamic(() => import('./component/Form'), {
    loading: () => <p>loader</p>
});

const CustomerReview = dynamic(() => import('../hfu/component/CustomerReview'), {
    loading: () => <p>loader</p>
});

const Footer = dynamic(() => import('../commonUse/Footer'), {
    loading: () => <p>loader</p>
});

const FooterPopup = dynamic(() => import('../commonUse/bottompopup/BottomHandler'), {
    loading: () => <p>loader</p>
});




function page() {


    useEffect(() => {
        localStorage.setItem("PATH_KEY", "/hfq");
    }, []);

    return (
        <div>

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