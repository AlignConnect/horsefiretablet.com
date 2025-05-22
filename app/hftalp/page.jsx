"use client"
import dynamic from "next/dynamic"
import './hfcalpha.css'
import { useEffect } from "react";


const Header = dynamic(() => import('./component/Header'), {
    loading: () => <p>loading</p>
});

const Freedelivery = dynamic(() => import('./component/Freedelivery'), {
    loading: () => <p>loading</p>
});

const Paraimage = dynamic(() => import('./component/Paraimage'), {
    loading: () => <p>loading</p>
});

const Blends = dynamic(() => import('./component/Blends'), {
    loading: () => <p>loading</p>
});

const Bharosa = dynamic(() => import('./component/Bharosa'), {
    loading: () => <p>loading</p>
});

const CustomerReview = dynamic(() => import('./component/CustomerReview'), {
    loading: () => <p>loading</p>
});

const Footer = dynamic(() => import("@/app/commonUse/Footer"), {
    loading: () => <p>loader</p>
});

const FooterPopup = dynamic(() => import('@/app/commonUse/bottompopup/BottomHandler'), {
    loading: () => <p>loader</p>
})


const FlipAmazondata = dynamic(() => import('./component/FlipAmazon'), {
    loading: () => <p>loader</p>
});

const page = () => {

    useEffect(() => {
        localStorage.setItem("PATH_KEY", "/hftalp")
    }, [])





    return (

        <section className="bg-black">

            <section className="">

                <Header />

                <Freedelivery />

                <Paraimage />
                <FlipAmazondata />

                <Blends />
                <FlipAmazondata />

                <Bharosa />

                <div className="bg-white">
                    <CustomerReview />
                </div>

                <Footer />
                <FooterPopup />

            </section>
        </section>



    )
}

export default page