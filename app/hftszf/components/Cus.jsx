import React, { useRef } from "react";
import dynamic from "next/dynamic";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { BiSkipNext } from "react-icons/bi";
import { BiSkipPrevious } from "react-icons/bi";


const YoutubeFrame = dynamic(() => import('./YoutubeFrame'), {
    loading: () => <p>load</p>
});


const Ordernow = dynamic(() => import("./Ordernow"));



const MostSelling = dynamic(() => import('@/app/commonUse/mostSelling/most_selling_2'), {
    loading: () => <p>loader</p>
});

const Cus = () => {

    let sliderRef = useRef(null);
    // console.log('sliderRef: ', sliderRef);

    const next = () => {
        sliderRef.slickNext();
    };

    const previous = () => {
        sliderRef.slickPrev();
    };

    const settings = {
        arrows: false,
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };


    return (
        <section>

            <div className="">
                <div className="w-full sm:max-w-4xl mx-auto sm:py-16 py-6">

                    <div className="fontAlfa text-center py-4 text-3xl sm:text-4xl">
                        Customer's Opinion
                    </div>


                    <div className="mx-1 pb-4 sm:pb-7 slider-container">

                        <Slider ref={slider => {
                            sliderRef = slider;
                        }}
                            {...settings}
                        >
                            <div key={1}>
                                <YoutubeFrame vid='BnoIvnZh4eY?' />
                            </div>
                            <div key={2}>
                                <YoutubeFrame vid='6ZHfxP7C-ek' />
                            </div>
                            <div key={3}>
                                <YoutubeFrame vid='yFVH97V3J2c' />
                            </div>
                        </Slider>

                        <div className='flex justify-between items-center gap-1 text-sm'>
                            <button className="button cursor-pointer flex items-center" onClick={previous}>
                                <BiSkipPrevious size={20} />Previous
                            </button>
                            <button className="button cursor-pointer flex items-center" onClick={next}>
                                Next<BiSkipNext size={20} />
                            </button>
                        </div>
                    </div>

                </div>

                <Ordernow />


                <MostSelling />

            </div>



        </section>
    )
}

export default Cus