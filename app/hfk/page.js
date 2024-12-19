"use client";
import dynamic from 'next/dynamic';
import { useEffect } from 'react';


const Section1 = dynamic(() => import('./components/Section1'), {
    loading: () => <p>loader</p>
});





const Section2 = dynamic(() => import('./components/Section2'), {
    loading: () => <p>load</p>
});

const Section3 = dynamic(() => import('./components/Section3'), {
    loading: () => <p>load</p>
});

const Section3sub1 = dynamic(() => import('./components/Section3sub1'), {
    loading: () => <p>load</p>
});

const Section3sub2 = dynamic(() => import('./components/Section3sub2'), {
    loading: () => <p>load</p>
});

const Section4 = dynamic(() => import('./components/Section4'), {
    loading: () => <p>load</p>
});

const Section4Sub = dynamic(() => import('./components/Section4Sub'), {
    loading: () => <p>load</p>
});

const Section5 = dynamic(() => import('./components/Section5'), {
    loading: () => <p>load</p>
});




const Section6 = dynamic(() => import('./components/Section6'), {
    loading: () => <p>load</p>
});

const Form = dynamic(() => import('./components/Form'), {
    loading: () => <p>load</p>
});

const CustomerReview = dynamic(() => import('./components/CustomerReview'), {
    loading: () => <p>load</p>
});

const Footer = dynamic(() => import('../commonUse/Footer'), {
    loading: () => <p>load</p>
})

const FooterPoput = dynamic(() => import('../commonUse/bottompopup/BottomHandler'), {
    loading: () => <p>load</p>
});


function page() {

    useEffect(() => {
        localStorage.setItem("PATH_KEY", "/hfk");
    }, []);



    return (

        <div className='w-full fontNoto text-black  bg-black mb-[4rem] sm:mb-0'>

            <Section1 />

            <Form />

            <Section2 />

            <Section3 />

            <Section3sub1 />

            <Section3sub2 />

            <Section4 />

            <Section4Sub />

            <Section5 />

            <div className='bg-white' id="form">
                <Form />
            </div>

            <Section6 />

            <CustomerReview />

            <Footer />

            <FooterPoput />

        </div>

    )
}
export default page;