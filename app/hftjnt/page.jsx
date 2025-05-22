"use client"
import { Skeleton } from '@mui/material';
import './page.css'
import React, { lazy, Suspense, useEffect } from 'react'
import Herbs from './component/Herbs';
import Form from './component/Form';
import Order from './component/OrderNow';
import CustomerReview from '@/app/Hftpro/components/CustomerReview'
import Footer from '@/app/commonUse/Footer'
import FooterPopup from '@/app/commonUse/bottompopup/BottomHandler'
import Youtube from './component/Youtube';
import Last from './component/Last';
const Header = lazy(() => import('./component/Header'));


const page = () => {

    

    useEffect(() => {
        localStorage.setItem("PATH_KEY", "/hftjnt");
    }, []);

    return (
        <div className='w-full sm:w-[568px] mx-auto border bg-black'>

            <Suspense fallback={<Skeleton />}>
                <Header />
            </Suspense>

            <Order />

            <Suspense fallback={<Skeleton />}>
                <Herbs />
            </Suspense>

            <Suspense fallback={<Skeleton />}>
                <Youtube />
            </Suspense>

            <Last />

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
