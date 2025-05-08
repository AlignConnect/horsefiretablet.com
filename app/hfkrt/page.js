"use client";
import dynamic from 'next/dynamic';
import { useEffect } from 'react';

// -----------------------------------------------------------------------------------------------------------------------


const Loading = dynamic(() => import('../commonUse/loader/Loading'), {
    loading: () => <p>load</p>
});


const Form = dynamic(() => import('./component/Form'), {
    loading: () => <p>load</p>
});

const CustomerReview = dynamic(() => import('../hfo/component/CustomerReview'), {
    loading: () => <p>load</p>
});

const FlipAmazon = dynamic(() => import('./component/FlipAmazon'), {
    loading: () => <p>load</p>
});

// -----------------------------------------------------------------------------------------------------------------------

const Header = dynamic(() => import('../hfo/component/Header'), {
    loading: () => <p>load</p>
});

const SexPower = dynamic(() => import('../hfo/component/SexPower'), {
    loading: () => <p>load</p>
});

const Vishesh_suvidha = dynamic(() => import('../hfo/component/Vishesh_suvidha'), {
    loading: () => <p>load</p>
});

const Turant_order = dynamic(() => import('../hfo/component/Turant_order'), {
    loading: () => <p>load</p>
});

const Sexlife_enjoy = dynamic(() => import('../hfo/component/Sexlife_enjoy'), {
    loading: () => <p>load</p>
});

const Sevan_kare = dynamic(() => import('../hfo/component/Sevan_kare'), {
    loading: () => <p>load</p>
});

const Tenx_powerfull = dynamic(() => import('../hfo/component/Tenx_powerfull'), {
    loading: () => <p>load</p>
});

const Footer = dynamic(() => import('../commonUse/Footer'), {
    loading: () => <p>load</p>
});

const BottomHandler = dynamic(() => import('@/app/commonUse/bottompopup/BottomHandler'), {
    loading: () => <p>load</p>
});


function page() {


    useEffect(() => {
        localStorage.setItem("PATH_KEY", "/hfo");
    }, [])




    return (
        <div className={`bg-[#f7f3ed]`}>

            <Header />

            <SexPower />

            <FlipAmazon />


            <Vishesh_suvidha />

            <Turant_order />

            <FlipAmazon />

            <Sexlife_enjoy />

            <Sevan_kare />

            <FlipAmazon />

            <Tenx_powerfull />

            <Form />

            <CustomerReview />

            <Footer />

            <BottomHandler />

        </div>


    )

}

export default page;