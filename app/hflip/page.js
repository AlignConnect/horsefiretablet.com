"use client";
import dynamic from 'next/dynamic';
import { useEffect } from 'react';


const Section1 = dynamic(() => import('./components/Section1'), {
    loading: () => <p>loader</p>
});

const FirstPowerSection = dynamic(() => import('./PowerComponent/FirstSection'), {
    loading: () => <p>load</p>
});

const FlipAmazon = dynamic(() => import('./components/FlipAmazon'), {
    loading: () => <p>load</p>
});

const Section2 = dynamic(() => import('./components/Section2'), {
    loading: () => <p>load</p>
});

const Section3 = dynamic(() => import('./components/Section3'), {
    loading: () => <p>load</p>
});

const Section4 = dynamic(() => import('./components/Section4'), {
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

const FooterPoput = dynamic(() => import('./components/FooterPopup'), {
    loading: () => <p>load</p>
});


function page() {

    useEffect(() => {
        localStorage.setItem("PATH_KEY", "/hflip");
    }, []);



    return (

        // <div className={`${noto.className}`}>
        <div>

            <div className='w-full bg-white text-black mb-[4rem] sm:mb-0'>



                <Section1 />

                <FirstPowerSection />

                <FlipAmazon />

                <Section2 />

                <Section3 />

                <FlipAmazon />

                <Section4 />

                <FlipAmazon />

                <Section5 />

                <FlipAmazon />

                <Section6 />

                <Form />

                <CustomerReview />

                <Footer />

            </div>


            <FooterPoput />


        </div>

    )
}
export default page;