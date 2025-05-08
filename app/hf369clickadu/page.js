"use client";
import dynamic from "next/dynamic"
import { useEffect } from "react";


const Header = dynamic(() => import('./component/Header'), {
    loading: () => <p>loading</p>
});

const Titlesection = dynamic(() => import('./component/Titlesection'), {
    loading: () => <p>loading</p>
});

const Poster = dynamic(() => import('./component/Poster'), {
    loading: () => <p>loading</p>
});

const Lii = dynamic(() => import('./component/Lii'), {
    loading: () => <p>loading</p>
});

const Works = dynamic(() => import('./component/Works'), {
    loading: () => <p>loading</p>
});

const Profit = dynamic(() => import('./component/Profit'), {
    loading: () => <p>loading</p>
});

const Customer = dynamic(() => import('./component/Customer'), {
    loading: () => <p>loading</p>
});

const Anubhav = dynamic(() => import('./component/Anubhav'), {
    loading: () => <p>loading</p>
});

const Form = dynamic(() => import('./component/Form'), {
    loading: () => <p>loading</p>
});

// const Footer = dynamic(() => import('@/app/commonUse/Footer'), {
//     loading: () => <p>loading</p>

// })

const Footerx = dynamic(() => import('./component/Footer'), {
    loading: () => <p>loading</p>
});

const FooterPopup = dynamic(() => import('@/app/commonUse/bottompopup/BottomHandler'), {
    loading: () => <p>loading</p>
});

const CustomerReview = dynamic(() => import('@/app/hf369clickadu/component/CustomerReview'), {
    loading: () => <p>loading</p>
});

const OrderButton = dynamic(() => import('./component/OrderButton'), {
    loading: () => <p>loading</p>
});


const page = () => {

    useEffect(() => {

        localStorage.setItem("PATH_KEY", "/hf369clickadu")

    }, [])


    return (

        <section className="w-full md:w-[600px] mx-auto text-white">

            <Header />
            <Titlesection />

            <OrderButton />

            <Poster />

            <Lii />

            <OrderButton />
            <Works />

            {/* <OrderButton /> */}

            <Customer />

            <OrderButton />
            <Profit />

            <Anubhav />



            <Form />

            <div className="text-black w-full mx-auto">
                <CustomerReview />
            </div>

            {/* <Footer /> */}
            <Footerx />
            <FooterPopup />

        </section>


    )
}

export default page