"use client";
import dynamic from "next/dynamic";
import './components/bhf.css';
import { useEffect } from "react";

const DynamicSection1 = dynamic(() => import("./components/Section1"), {
    loading: () => <p>Loading...</p>,
});
const DynamicSection2 = dynamic(() => import("./components/Section2"), {
    loading: () => <p>Loading...</p>,
});

const DynamicSection3 = dynamic(() => import("./components/Section3"), {
    loading: () => <p>Loading...</p>,
});
const DynamicSection4 = dynamic(() => import("./components/Section4"), {
    loading: () => <p>Loading...</p>,
});
const DynamicSection5 = dynamic(() => import("./components/Section5"), {
    loading: () => <p>Loading...</p>,
});
const DynamicSection6 = dynamic(() => import("./components/Section6"), {
    loading: () => <p>Loading...</p>,
});
const DynamicSection7 = dynamic(() => import("./components/Section7"), {
    loading: () => <p>Loading...</p>,
});

const DynamicFormUser = dynamic(() => import("./components/FormUser"), {
    loading: () => <p>Loading...</p>,
});

const CustomerReview = dynamic(() => import('../hfb/components/CustomerReview'), {
    loading: () => <p>loading</p>
});

const Footer = dynamic(() => import('@/app/commonUse/Footer'), {
    loading: () => <p>loading</p>
});

const FoterPop = dynamic(() => import('@/app/commonUse/bottompopup/BottomHandler'), {
    loading: () => <p>loading</p>
});

const OrderNow = dynamic(() => import('@/app/bhf/components/Precomponent/OrderNow'), {
    loading: () => <p>loading</p>
});


export default function Home() {


    useEffect(() => {
        localStorage.setItem("PATH_KEY", "/bhf");
    }, [])


    return (
        <section>
            <DynamicSection1 />
            {/* <OrderNow /> */}
            <DynamicSection2 />
            <OrderNow />
            <DynamicSection3 />
            <OrderNow />
            <DynamicSection4 />
            <DynamicSection5 />
            <OrderNow />
            <DynamicSection6 />
            <OrderNow />
            <DynamicSection7 />

            <DynamicFormUser />
            <CustomerReview />
            <Footer />
            <FoterPop />
        </section>
    );
}




// const DynamicSection8 = dynamic(() => import("./components/Section8"), {
//     loading: () => <p>Loading...</p>,
// });
{/* <DynamicSection8 /> */ }