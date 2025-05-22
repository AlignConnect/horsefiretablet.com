"use client"
import dynamic from 'next/dynamic';
import './components/home.css'
import { useEffect } from 'react';



const Header = dynamic(() => import('./components/Header'), {
    loading: () => <p>loader</p>
});

const Chooseus = dynamic(() => import('./components/Chooseus'), {
    loading: () => <p>loader</p>
});

const Reason_to_trust = dynamic(() => import('./components/reason_to_trust'), {
    loading: () => <p>loader</p>
});

const Customer_satisfied = dynamic(() => import('./components/Customer_satisfied'), {
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




const page = () => {


    useEffect(() => {
        localStorage.setItem("PATH_KEY", "/hftpro");
    }, []);

    return (
        <section className=' '>


            <div className="">

                <Header />


                <Chooseus />

                <Reason_to_trust />

                <Customer_satisfied />

                <Form />

                <CustomerReview />

                <Footer />

                <FooterPopup />

            </div>


        </section>
    )
}

export default page