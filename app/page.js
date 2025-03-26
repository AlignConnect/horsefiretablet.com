"use client";
// import Loading from './commonUse/loader/Loading';
import dynamic from 'next/dynamic';
import './components/home.css'
import { useEffect } from 'react';
import { Noto_Serif_Devanagari } from 'next/font/google';

// const Hftpro = dynamic(() => import("./components/Hftpro"), {
//   loading: () => <p>Loading...</p>,
// });
// const DynamicHowitWork = dynamic(() => import("./components/HowitWork"), {
//   loading: () => <p>Loading...</p>,
// });

// const DynamicHeroSection = dynamic(() => import("./components/HeroSection"), {
//   loading: () => <p>Loading...</p>,
// });
// const DynamicSection2 = dynamic(() => import("./components/Section2"), {
//   loading: () => <p>Loading...</p>,
// });
// const DynamicSection3 = dynamic(() => import("./components/Section3"), {
//   loading: () => <p>Loading...</p>,
// });
// const DynamicSection4 = dynamic(() => import("./components/Section4"), {
//   loading: () => <p>Loading...</p>,
// });
// const DynamicSection5 = dynamic(() => import("./components/Section5"), {
//   loading: () => <p>Loading...</p>,
// });
// const DynamicSection6 = dynamic(() => import("./components/Section6"), {
//   loading: () => <p>Loading...</p>,
// });
// const Understanding = dynamic(() => import("./components/Understanding"), {
//   loading: () => <p>Loading...</p>,
// });




const Newheader = dynamic(() => {
  return import("@/app/hfchk/newComponents/Header")
})


const Section1 = dynamic(() => {
  return import("@/app/hfchk/newComponents/Section1")
})

const Section2 = dynamic(() => {
  return import("@/app/hfchk/newComponents/Section2")
})


const ReviewSection = dynamic(() => {
  return import('@/app/ahf/components/CustomerReview')
})



const BottomPopup = dynamic(() => {
  return import("@/app/hfchk/newComponents/BottomPopup")
})



const Footer = dynamic(() => import('@/app/commonUse/Footer'))



const FooterPopup = dynamic(() => import("./components/FooterPopup"), {
  loading: () => <p>Loading...</p>,
});


const noto = Noto_Serif_Devanagari({
  subsets: ["devanagari"],
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});


export default function Home() {


  useEffect(() => {
    localStorage.setItem("PATH_KEY", "/");
    localStorage.setItem("PATH", "/");
  }, []);



  return (

    <main className={`${noto.className} bg-white`}>
      <title>Horse Fire Tablet</title>
      <section className="sm:w-[65%] mx-auto  text-black text-[1.1rem] sm:text-xl">
        <Newheader />
        <Section1 />
        <Section2 />

        <Footer />
        <BottomPopup />
      </section>
    </main>

    // <section className='mb-[5.1rem] sm:mb-0 fontNoto'>
    // {/* {loading && <Loading />} */ }
    // {/* <DynamicHeroSection />
    //     <DynamicSection2 />
    //     <DynamicSection3 />
    //     <DynamicSection4 />
    //     <Hftpro />
    //     <DynamicSection5 />
    //     <DynamicSection6 />
    //     <DynamicHowitWork />
    //     <Hftpro />
    //     <Understanding /> */}


    // </section>

  )
}
