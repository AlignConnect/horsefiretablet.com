"use client";
// import Loading from './commonUse/loader/Loading';
import dynamic from 'next/dynamic';
import './components/home.css'
import { useEffect } from 'react';

const Hftpro = dynamic(() => import("./components/Hftpro"), {
  loading: () => <p>Loading...</p>,
});
const DynamicHowitWork = dynamic(() => import("./components/HowitWork"), {
  loading: () => <p>Loading...</p>,
});

const DynamicHeroSection = dynamic(() => import("./components/HeroSection"), {
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
const Understanding = dynamic(() => import("./components/Understanding"), {
  loading: () => <p>Loading...</p>,
});
const Footer = dynamic(() => import("./components/Footer"), {
  loading: () => <p>Loading...</p>,
});
const FooterPopup = dynamic(() => import("./components/FooterPopup"), {
  loading: () => <p>Loading...</p>,
});





export default function Home() {


  useEffect(() => {
    localStorage.setItem("PATH_KEY", "/");
  }, []);



  return (

    <section className='mb-[5.1rem] sm:mb-0 fontNoto'>
      {/* {loading && <Loading />} */}
      <DynamicHeroSection />
      <DynamicSection2 />
      <DynamicSection3 />
      <DynamicSection4 />
      <Hftpro />
      <DynamicSection5 />
      <DynamicSection6 />
      <DynamicHowitWork />
      <Hftpro />
      <Understanding />
      <Footer />
      <FooterPopup />
    </section>

  )
}
