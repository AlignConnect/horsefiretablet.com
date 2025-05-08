"use client";
import dynamic from 'next/dynamic';
import { useEffect } from 'react';

const Header = dynamic(() => import('./component/Header'));
const Sec1 = dynamic(() => import('./component/Sec1'));
const Sec2 = dynamic(() => import('./component/Sec2'));
const Sec3 = dynamic(() => import('./component/Sec3'));
const Sec4 = dynamic(() => import('./component/Sec4'));
const Form = dynamic(() => import('./component/Form'));
const Review = dynamic(() => import('./component/CustomerReview'));
const Footer = dynamic(() => import('@/app/commonUse/Footer'));
const Footerp = dynamic(() => import('@/app/commonUse/bottompopup/BottomHandler'));

const OrderRoom = dynamic(() => import('@/app/commonUse/AmaFlipDialog/FlipAmazon'));


const page = () => {



    useEffect(() => {
        localStorage.setItem("PATH_KEY", "/hfsxyflip");
    }, []);




    return (

        <section className='bg-black'>
            <section className='w-full md:w-[700px] mx-auto '>

                <Header />
                <OrderRoom />
                <Sec1 />
                <OrderRoom />

                <Sec2 />
                <OrderRoom />

                <Sec3 />
                <OrderRoom />

                <Sec4 />
                <Form />
                <Review />
                <Footer />
                <Footerp />

            </section>
        </section>



    )
}

export default page