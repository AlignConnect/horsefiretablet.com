"use client";
import dynamic from "next/dynamic";
import './xhft.css';
import { useEffect } from "react";


const HeaderFile = dynamic(() => import('./Component/Header'), {
    loading: () => <p>loading</p>
});

const Section1 = dynamic(() => import('./Component/Section1'), {
    loading: () => <p>loading</p>
});

const Ulli = dynamic(() => import('./PowerComponent/Ulli'), {
    loading: () => <p>load ul</p>
});

const Section2 = dynamic(() => import('./Component/Section2'), {
    loading: () => <p>load Section2</p>
});

const Carouselfirst = dynamic(() => import('./Component/Carouselfirst'), {
    loading: () => <p>load</p>
});

const Rev = dynamic(() => import('./Component/Rev'), {
    loading: () => <p>load</p>
});


const Bharosa = dynamic(() => import('./Component/Bharosa'), {
    loading: () => <p>load</p>
});

const Docyoutube = dynamic(() => import('./Component/Docyoutube'), {
    loading: () => <p>load timing</p>
});


const CarouselM = dynamic(() => import('./Component/CarouselM'), {
    loading: () => <p>load timing</p>
});


const Leading = dynamic(() => import('./PowerComponent/Leading'), {
    loading: () => <p>load</p>
});

const FormXhft = dynamic(() => import('./PowerComponent/Form'), {
    loading: () => <p>load form</p>
});

const CustomerSpeaks = dynamic(() => import('./Component/CustomerSpeaks'), {
    loading: () => <p>load</p>
});

const ReviewFile = dynamic(() => import('./Component/Review'), {
    loading: () => <p>load reviews</p>
});

const Footer = dynamic(() => import('../commonUse/Footer'), {
    loading: () => <p>load</p>
});
const Popup = dynamic(() => import('../commonUse/bottompopup/BottomHandler'), {
    loading: () => <p>load</p>
});


const page = () => {


    useEffect(() => {
        localStorage.setItem("PATH_KEY", "/hft");
    }, [])



    return (
        <section className="bg-black text-white">
            <HeaderFile />
            <Section1 />
            <Ulli />
            <Section2 />
            <Carouselfirst />
            <Rev />
            <Bharosa />
            <Docyoutube />
            <CarouselM />
            <Leading />
            <FormXhft />
            <CustomerSpeaks />
            <ReviewFile />
            <Footer />
            <Popup />

        </section>
    )
}

export default page;