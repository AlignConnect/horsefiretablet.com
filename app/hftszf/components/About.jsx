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



const About = () => {


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



    const steps = [
        {
            img: 'https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/b622729e-7e7b-44c3-a9ff-dc0eeff19500/public',
            text: 'सुबह और रात्री भोजन के बाद एक टैबलेट दूध/पानी के साथ',
        },
        {
            img: 'https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/06557360-08d5-49da-12b1-c98ead223b00/public',
            text: 'बेहतर परिणाम के लिए 1 गिलास दूध के साथ लें',
        },
        {
            img: 'https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/fc573a47-034d-4ca0-f778-69be5f829800/public',
            text: 'एक महीने के अंदर सेक्स प्रदर्शन में सुधार अनुभव करें',
        },
    ];


    return (
        <section>


            <div className="">

                <div className="w-full sm:max-w-4xl mx-auto sm:py-16 py-10">

                    <div className="fontAlfa text-center py-4 text-3xl sm:text-4xl">
                        Experts Opinion
                    </div>


                    <div className="mx-1 pb-4 sm:pb-7 slider-container">

                        <Slider ref={slider => {
                            sliderRef = slider;
                        }}
                            {...settings}
                        >
                            <div key={1}>
                                <YoutubeFrame vid='lRwX-1q_R5Q' />
                            </div>
                            <div key={2}>
                                <YoutubeFrame vid='fC9s9TOf9pg' />
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


                <div className="fill_the_fire fontNoto">

                    <div className="w-full sm:max-w-7xl mx-auto sm:pt-14 ">

                        <div className="grid sm:grid-cols-2 items-center justify-center gap-5">

                            <div className="order-2 sm:order-1">
                                <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/b13f452c-c9a3-4f48-ea91-ff2b07455800/public" alt="" className='w-full' />
                            </div>

                            <div className="order-1 sm:order-2">
                                <div className="fontAlfa py-6 text-3xl sm:text-5xl px-4 leading-tight">
                                    Feel the Fire,<br /><span className="text-red-600">Rule the Night</span>
                                </div>
                                <p>
                                    "Horse Fire Tablet 100% के इस्तेमाल से पुरुष जोश, स्टैमिना, पावर और बेहतर इरेक्शन महसूस कर रहे है। अब वो भी लम्बा सेक्स एन्जॉय कर रहे है जो शीघ्रपतन के गंभीर रोगी थे। जो पुरुष लिंग को योनि में प्रवेश करने से पहले या महिला के स्पर्श मात्र से झड़ जाते थे। हमें गर्व है की हमने पिछले कुछ सालों में 30 लाख से ज्यादा भारतीय पुरुषों की यौन कमजोरी मिटाकर उनके जीवन में खुशहाली बढ़ाया है और गिनती हर मिनट बढ़ रही है।"

                                </p>
                            </div>

                        </div>

                    </div>

                </div>



                <section className="bg-yellow-400 py-12 px-4 text-center">
                    <h2 className="fontAlfa text-3xl sm:text-4xl  mb-10">
                        Right Way of Consumption
                    </h2>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 max-w-7xl mx-auto fontNoto">
                        {steps.map((step, index) => (
                            <div key={index} className="flex flex-row items-center text-black">
                                <div className="sm:w-full w-3/4 mx-auto">
                                    <img src={step.img} alt={`Step ${index + 1}`} className="sm:w-3/5 w-3/4 mx-auto" />
                                </div>
                                <div className="font-extrabold sm:text-xl text-lg leading-relaxed text-start">{step.text}</div>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="bg-black text-white py-8 px-4">
                    <div className="flex flex-col sm:flex-row items-center justify-between max-w-7xl mx-auto gap-4 text-center sm:text-left">

                        <div className="bg-red-500 text-white px-6 py-3 rounded-full font-semibold text-xl">
                            Honest opinion by our satisfied customers
                        </div>

                        <div className="text-xl">
                            <span className="text-white text-2xl font-bold">0 </span>
                            <span className="text-teal-300 font-semibold">side effects</span>
                            , Complaints from our Customer's
                        </div>

                        <a href='#form' className="order-now-animation bg-yellow-400 fontJosefin sm:text-xl text-center text-black font-extrabold pt-2 pb-1 mt-3 sm:mt-0 px-4 rounded w-1/2 sm:w-36 mx-auto box_shaddow">
                            BUY NOW
                        </a>
                    </div>
                </section>

            </div>



        </section>
    )
}

export default About