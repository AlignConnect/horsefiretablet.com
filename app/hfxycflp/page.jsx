"use client";
import dynamic from 'next/dynamic';
import { useEffect } from 'react';

const Header = dynamic(() => import('./component/Header'))
const Sec1 = dynamic(() => import('./component/Sec1'))
const Sec2 = dynamic(() => import('./component/Sec2'));
const Sec3 = dynamic(() => import('./component/Sec3'));
const Sec4 = dynamic(() => import('./component/Sec4'));
const Form = dynamic(() => import('./component/Form'));
const CustomerReview = dynamic(() => import('./component/CustomerReview'));
const Footer = dynamic(() => import('@/app/commonUse/Footer'))
const Bottompopup = dynamic(() => import('@/app/commonUse/bottompopup/BottomHandler'))
const OrderBtn = dynamic(() => import('@/app/commonUse/AmaFlipDialog/FlipAmazon'));


const page = () => {


    useEffect(() => {
        localStorage.setItem("PATH_KEY", "/hfxycflp");
    }, []);




    return (

        <section className='bg-black'>
            <section className='w-full md:w-[700px] mx-auto '>

                <Header />
                <OrderBtn />
                <Sec1 />
                <OrderBtn />

                <Sec2 />
                <OrderBtn />

                <Sec3 />
                <OrderBtn />

                <Sec4 />
                <Form />
                <CustomerReview />
                <Footer />
                <Bottompopup />

            </section>
        </section>



    )
}

export default page