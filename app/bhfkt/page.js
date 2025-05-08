"use client"
import dynamic from "next/dynamic";
import '../bhf/components/bhf.css'
import { useEffect } from "react";

const DynamicSection1 = dynamic(() => import("../bhf/components/Section1"), {
    loading: () => <p>Loading...</p>,
});
const DynamicSection2 = dynamic(() => import("../bhf/components/Section2"), {
    loading: () => <p>Loading...</p>,
});

const DynamicSection3 = dynamic(() => import("../bhf/components/Section3"), {
    loading: () => <p>Loading...</p>,
});
const DynamicSection4 = dynamic(() => import("../bhf/components/Section4"), {
    loading: () => <p>Loading...</p>,
});
const DynamicSection5 = dynamic(() => import("../bhf/components/Section5"), {
    loading: () => <p>Loading...</p>,
});
const DynamicSection6 = dynamic(() => import("../bhf/components/Section6"), {
    loading: () => <p>Loading...</p>,
});
const DynamicSection7 = dynamic(() => import("../bhf/components/Section7"), {
    loading: () => <p>Loading...</p>,
});

const DynamicFormUser = dynamic(() => import("./component/Formbhfkt"), {
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

const Flip = dynamic(() => import('@/app/commonUse/AmaFlipDialog/FlipAmazon'), {
    loading: () => <p>loading</p>
});

const Flippro = dynamic(() => import('./component/FlipcardProduct'), {
    loading: () => <p>test</p>
});


export default function Home() {

    useEffect(() => {
        localStorage.setItem("PATH_KEY", "/bhfkt");
    }, []);


    return (
        <section>
            <DynamicSection1 />
            <Flip />
            <DynamicSection2 />
            <Flip />
            <DynamicSection3 />
            <Flip />
            <DynamicSection4 />
            <DynamicSection5 />
            <Flippro />
            <Flip />
            <DynamicSection6 />
            <Flip />
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