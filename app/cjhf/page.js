"use client";
import dynamic from 'next/dynamic';
import React, { useEffect } from 'react'
import './components/Home.css'



const Header = dynamic(() => import('./components/Header'), {
    loading: () => <p>loader</p>
});

const Sad_Women = dynamic(() => import('./components/Sad_Women'), {
    loading: () => <p>loader</p>
});

const Bhul = dynamic(() => import('./components/Bhul'), {
    loading: () => <p>loader</p>
});


const Doctor = dynamic(() => import('./components/Doctor'), {
    loading: () => <p>loader</p>
});

const Sevan_vidhi = dynamic(() => import('./components/Sevan_vidhi'), {
    loading: () => <p>loader</p>
});

const Fashtest_solution = dynamic(() => import('./components/Fashtest_solution'), {
    loading: () => <p>loader</p>
});


const Dhyan_de = dynamic(() => import('./components/Dhyan_de'), {
    loading: () => <p>loader</p>
});


const Form = dynamic(() => import('./components/Form'), {
    loading: () => <p>loader</p>
});

const CustomerReview = dynamic(() => import('./components/CustomerReview'),
    {
        loading: () => <p>loader</p>
    });

const Footer = dynamic(() => import('./../../app/commonUse/Footer'), {
    loading: () => <p>loader</p>
});

const FooterP = dynamic(() => import('../commonUse/bottompopup/BottomHandler'), {
    loading: () => <p>loader</p>
});

const Inquiry = dynamic(() => import('./components/Inquiry'), {
    loading: () => <p>loader</p>
});

function page() {

    useEffect(() => {

        localStorage.setItem("PATH_KEY", "/cjhf")

    }, [])

    return (
        <div className='bg-[#f3f3f3]'>
            <Header />
            <Inquiry />

            <div className='bg-white '>
                <div className='w-full max-w-6xl mx-auto'>
                    <Sad_Women />
                </div>
            </div>
            <div className='w-full max-w-6xl mx-auto'>
                <Bhul />
                <Inquiry />


                <Doctor />

                <Sevan_vidhi />

                <Inquiry />


                <Fashtest_solution />

            </div>
            <Dhyan_de />

            <div className='w-full mx-w-6xl mx-auto'>
                <Form />
            </div>

            <CustomerReview />
            <Footer />
            <FooterP />

        </div>
    )
}

export default page