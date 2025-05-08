"use client"
import { Skeleton } from '@mui/material';
import '@/app/hftprof/components/home.css'
import React, { lazy, Suspense, useEffect } from 'react'
import Herbs from './component/Herbs';
// import Form from './component/Form';
import Order from './component/OrderNow';
import CustomerReview from '@/app/Hftpro/components/CustomerReview'
import Footer from '@/app/commonUse/Footer'
import FooterPopup from '@/app/commonUse/bottompopup/BottomHandler'
import dynamic from 'next/dynamic';
import Youtube from './component/Youtube';
import Last from './component/Last';
const Header = lazy(() => import('./component/Header'));





const Form = dynamic(() => import('./component/Form'), {
    loading: () => <p>loader</p>
});

const page = () => {



    useEffect(() => {
        localStorage.setItem("PATH_KEY", "/hftsrh");
    }, []);

    return (
        <div className='w-full sm:w-[568px] mx-auto  bg-black'>

            <Suspense fallback={<Skeleton />}>
                <Header />
            </Suspense>



            <Suspense fallback={<Skeleton />}>
                <Herbs />
            </Suspense>


            <Last />


            <Suspense fallback={<Skeleton />}>
                <Youtube />
            </Suspense>


            <div className='w-full'>
                <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/313e02ad-9686-4059-d794-d6df9016c800/public" alt="sdsd" loading='lazy' />
            </div>

            <div className='w-full text-center'>
                <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/6cd10f77-06e0-453c-ba50-1bed7247f500/public" alt="sdsd" loading='lazy' className='mx-auto py-10' />
            </div>







            <Suspense fallback={<Skeleton />}>
                <Form />
            </Suspense>



            <div className='w-full bg-white'>
                <CustomerReview />
            </div>

            <Footer />

            <FooterPopup />

        </div>
    )
}

export default page
