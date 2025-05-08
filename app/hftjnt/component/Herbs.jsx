import React from 'react'
import Order from './OrderNow';
import Slider from "react-slick";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Anton } from 'next/font/google';
import YoutubeFrame from '../../components/YoutubeFrame';


const CustomPrevArrow = (props) => {
    const { className, onClick } = props;
    return (
        <div className={`${className} custom-arrow`} onClick={onClick}>
            <FaArrowLeft />
        </div>
    );
};

const CustomNextArrow = (props) => {
    const { className, onClick } = props;
    return (
        <div className={`${className} custom-arrow`} onClick={onClick}>
            <FaArrowRight />
        </div>
    );
};

var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true, // Ensure arrows are enabled
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
};


const anton = Anton({
    subsets: ["latin"],
    weight: ["400"]
})



const Herbs = () => {
    return (
        <div className='bg-[#202020] fontNoto py-1 sm:py-4'>


            <div className='pb-6 w-full overflow-hidden'>
                <h1 className='text-red-700 text-3xl pt-3 fontPoppins text-center font-bold my-5'>See Expert's Opinions</h1>

                <Slider {...settings} className='px-5 '>
                    <div>
                        <YoutubeFrame vid={"lRwX-1q_R5Q?si=pA4mh8Bl1TwM2F3t"} />
                    </div>
                    <div>
                        <YoutubeFrame vid={"h-3HVSbQAGA?si=_sFKMtPi8uoClbJJ"} />
                    </div>
                </Slider>
            </div>


            <div className='w-full my-5'>
                <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/ca6431aa-8831-4d66-a961-7a7ec77b6300/public" alt="sdsds" loading='lazy' className='w-full bg-[#202020] py-5'/>
            </div>



            <div className='w-full sm:p-5'>
                <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/6497f6ad-0755-4811-e197-1539e6335500/public" alt="dsdf" loading='lazy' />
            </div>


            <div className='bg-[url(https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/8919cf6a-55aa-4bd2-3710-4316c45a9200/public)] bg-center bg-contain  bg-no-repeat min-h-[400px] sm:min-h-[450px] relative w-full'>

                <div className='absolute transform translate-x-[-50%] translate-y-[-50%] top-[50%] left-[50%] text-xl sm:text-2xl w-[300px] sm:w-[370px] text-white italic' style={{ textShadow: "1px 1px yellow" }}>
                    "शीघ्रपतन वाले पुरुष के लिए खास प्रस्तावित- क्योंकि Horse Fire Tablets के इस्तेमाल से वे पुरुष भी लम्बा सेक्स एन्जॉय कर रहे है जो किस करने या महिला के स्पर्श मात्र से झड़ जाते थे। हमें गर्व है की हमने पिछले कुछ सालों में 30 लाख से ज्यादा भारतीय पुरुषों की यौन कमजोरी मिटाकर उनके जीवन में खुशहाली बढ़ाया और आगे की तरफ अग्रसर है।"
                </div>

            </div>

            <div className={`bg-[#fbb100] py-3 ${anton.className}`}>

                <h2 className="text-2xl sm:text-5xl text-center uppercase  text-black">Right Way of Consumption
                </h2>



            </div>


            <div className='sm:p-5 py-2'>
                <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/65d83eb1-e405-4210-152f-9fb1fe428a00/public" alt="dfffd" loading='lazy' className='w-full' />
            </div>


        </div >
    )
}

export default Herbs
