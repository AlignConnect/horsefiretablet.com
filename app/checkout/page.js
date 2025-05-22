'use client'
import React, { Suspense, useEffect, useState } from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Header from './component/Header';
import CarouselFile from './component/CarouselFile';
import Material from './component/Material';
import FormFile from './component/FormFile';
import Footer from './component/Footer';
// import FixFooter from './component/FixFooter';



const page = () => {

    // const [isActive, setIsActive] = useState(false);

    // useEffect(() => {
    //     function handleScroll() {
    //         const sectionElement = document.getElementById('formcallhide'); // Replace with the actual ID of your section

    //         if (sectionElement) {
    //             const rect = sectionElement.getBoundingClientRect();
    //             // You can adjust the threshold as needed
    //             const threshold = 100; // Change this value as needed


    //             if (rect.top <= threshold && rect.bottom >= threshold) {
    //                 setIsActive(true);
    //             } else {
    //                 setIsActive(false);
    //             }
    //         }

    //     }

    //     window.addEventListener('scroll', handleScroll);

    //     return () => {
    //         window.removeEventListener('scroll', handleScroll);
    //     };
    // }, [isActive]);


    return (
        <div className='bg-black'>
            <section className='w-full md:w-[500px] mx-auto bg-white relative'>


                <Suspense fallback={<p>Header Wait</p>}>
                    <Header />
                </Suspense>

                <Suspense fallback={<p>Carousel Wait</p>}>
                    <CarouselFile />
                </Suspense>

                <Suspense fallback={<p>Material Wait</p>}>
                    <Material />
                </Suspense>

                <Suspense fallback={<p>Form Wait</p>}>
                    <FormFile />
                </Suspense>

                <Suspense fallback={<p>Footer Wait</p>}>
                    <Footer />
                </Suspense>

                {/* {
                    !isActive && <Suspense fallback={<p>Footer Wait</p>}>
                        <FixFooter />
                    </Suspense>
                } */}


            </section>



        </div>
    )
}

export default page