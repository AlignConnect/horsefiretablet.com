"use client"
import dynamic from 'next/dynamic';
import './components/home.css'
import { Suspense, useEffect } from 'react';
import { Skeleton } from '@mui/material';



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




// const Header = dynamic(() => import('@/app/hftprof/component/Header'))

// const Herbs = dynamic(() => import('@/app/hftprof/component/Herbs'))
// const Last = dynamic(() => import('@/app/hftprof/component/Last'))
// const Youtube = dynamic(() => import('@/app/hftprof/component/Youtube'))

// const Form = dynamic(() => import('@/app/hftprof/component/Form'))

const page = () => {


    useEffect(() => {
        localStorage.setItem("PATH_KEY", "/hftprof");
    }, []);

    return (
        <section className=' '>


            <div className="w-full">

                <Header />

                <Chooseus />

                <Reason_to_trust />

                <Customer_satisfied />


                {/* <Suspense fallback={<Skeleton />}>
                    <Header />
                </Suspense>


                <Suspense fallback={<Skeleton />}>
                    <Herbs />
                </Suspense>


                <Last /> */}


                {/* <Suspense fallback={<Skeleton />}>
                    <Youtube />
                </Suspense>


                <div className='w-full'>
                    <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/313e02ad-9686-4059-d794-d6df9016c800/public" alt="sdsd" loading='lazy' />
                </div>

                <div className='w-full text-center'>
                    <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/6cd10f77-06e0-453c-ba50-1bed7247f500/public" alt="sdsd" loading='lazy' className='mx-auto py-10' />
                </div> */}






                <Form />

                <CustomerReview />

                <Footer />

                <FooterPopup />

            </div>


        </section>
    )
}

export default page