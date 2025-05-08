"use client";
import dynamic from 'next/dynamic';
import { useEffect } from 'react';
import './component/home.css'
// -----------------------------------------------------------------------------------------------------------------------

// const Loading = dynamic(() => import('../commonUse/loader/Loading'), {
//     loading: () => <p>load</p>
// });


// const Form = dynamic(() => import('./component/Form'), {
//     loading: () => <p>load</p>
// });

// const CustomerReview = dynamic(() => import('./component/CustomerReview'), {
//     loading: () => <p>load</p>
// });

const FlipAmazon = dynamic(() => import('./component/FlipAmazon'), {
    loading: () => <p>load</p>
});

// -----------------------------------------------------------------------------------------------------------------------


const Header = dynamic(() => import('./component/Header'), {
    loading: () => <p>load</p>
});

const HeaderCut = dynamic(() => import('./PowerComponent/HeaderCut'), {
    loading: () => <p>load</p>
})

const Doctor = dynamic(() => import('./component/Doctor'), {
    loading: () => <p>load</p>
});

const Expert_certificate = dynamic(() => import('./component/Expert_certificate'), {
    loading: () => <p>load</p>
});


const Sevan_vidhi = dynamic(() => import('./component/Sevan_vidhi'), {
    loading: () => <p>load</p>
});


const Slider = dynamic(() => import('./component/Slider'), {
    loading: () => <p>load</p>
});

const Dhyan = dynamic(() => import('./component/Dhyan'), {
    loading: () => <p>load</p>
});

const Section4 = dynamic(() => import('./component/Section4'), {
    loading: () => <p>load</p>
});

const Form = dynamic(() => import('./component/Form'), {
    loading: () => <p>load</p>
});

const CustomerReview = dynamic(() => import('../hfo/component/CustomerReview'), {
    loading: () => <p>load</p>
});

const Footer = dynamic(() => import('../commonUse/Footer'), {
    loading: () => <p>load</p>
});

const FooterPopup = dynamic(() => import('../commonUse/bottompopup/BottomHandler'), {
    loading: () => <p>load</p>
});


function page() {

    useEffect(() => {
        localStorage.setItem("PATH_KEY", "/hfkt");
    }, [])


    return (
        <div>

            <Header />
            <FlipAmazon />

            <HeaderCut />

            <Doctor />
            <FlipAmazon />

            <Expert_certificate />
            <FlipAmazon />

            <Sevan_vidhi />

            <Slider />
            <FlipAmazon />

            <Dhyan />

            <Section4 />

            <Form />

            <CustomerReview />

            <Footer />

            <FooterPopup />

        </div>
    )
}

export default page;