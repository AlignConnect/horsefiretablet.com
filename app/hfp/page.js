"use client"
import dynamic from "next/dynamic";
import { useEffect } from "react";

const Header = dynamic(() => import('./Component/Header'), {
    loading: () => <p>loading</p>
});

const FirstBanner = dynamic(() => import('./Component/FirstBanner'), {
    loading: () => <p>loading</p>
});

const Importance = dynamic(() => import('./Component/importance'), {
    loading: () => <p>loader</p>
});

const Mahilaye = dynamic(() => import('./Component/Mahilaye'), {
    loading: () => <p>loader</p>
});

const NewBodyx = dynamic(() => import('./Component/Newbodyx'), {
    loading: () => <p>some</p>
});

const Ear = dynamic(() => import('./Component/Ear'), {
    loading: () => <p>loader</p>
});

const Chart = dynamic(() => import('./Component/Chart'), {
    loading: () => <p>loader</p>
});

const Doctor = dynamic(() => import('./Component/Doctor'), {
    loading: () => <p>loader</p>
});

const Hurbs = dynamic(() => import('./Component/Hurbs'), {
    loading: () => <p>loader</p>
});


const Carouseljs = dynamic(() => import('./Component/Carouseljs'), {
    loading: () => <p>loader</p>
});

const QA = dynamic(() => import('./Component/QA'), {
    loading: () => <p>loader</p>
});

const Service = dynamic(() => import('./Component/Service'), {
    loading: () => <p>loader</p>
});


const Form = dynamic(() => import('./Component/Form'), {
    loading: () => <p>load</p>
});

const Footer = dynamic(() => import('./Component/Footer'), {
    loading: () => <p>loader</p>
});

const BottomPopup = dynamic(() => import('@/app/commonUse/bottompopup/BottomHandler'), {
    loading: () => <p>loader</p>
});


const page = () => {


    useEffect(() => {

        localStorage.setItem('PATH_KEY', "/hfp")

    }, [])


    return (
        <div>

            <Header />
            <FirstBanner />
            <Importance />
            <Mahilaye />
            <NewBodyx />
            <Ear />
            <Chart />
            <Doctor />
            <Hurbs />
            <Carouseljs />
            <QA />
            <Service />
            <Form />
            <Footer />
            <BottomPopup />
        </div>
    )
}

export default page;