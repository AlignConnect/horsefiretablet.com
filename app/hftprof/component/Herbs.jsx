import React from 'react'
// import Order from './OrderNow';
import Slider from "react-slick";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Anton } from 'next/font/google';
import YoutubeFrame from '../../components/YoutubeFrame';
import Order from '@/app/hfck/component/Order';

import FlipAmazon from '@/app/hftnxtf/component/OrderNow';


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
        <div className='bg-[#000000] fontNoto py-3 sm:py-4'>



            <div>
                <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/942a5c31-705f-45e8-0eae-46ad21053f00/public" alt="asdasd" loading='lazy' className='w-full sm:w-[80%] mx-auto' />
            </div>

            <div className='w-full py-4'>
                <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/921f36fb-8448-4633-3c9f-323a8e304d00/public" alt="sdsd" loading='lazy' className='w-full' />
            </div>



            <ul className='text-white text-xl w-full sm:w-[80%] mx-auto space-y-3 p-4'>
                <li className='flex items-start sm:items-center gap-3'>
                    <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/8fc8d6b8-b112-424e-ac6b-c566ba3c2200/public" alt="asd" className='w-8' />
                    <p>17 शक्तिशाली आयुर्वेदिक जड़ीबूटियों से बना</p>
                </li>
                <li className='flex items-center gap-3'>
                    <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/8fc8d6b8-b112-424e-ac6b-c566ba3c2200/public" alt="asd" className='w-8' />
                    <p>असर दिखे सिर्फ 15 दिनों में</p>
                </li>
                <li className='flex items-center gap-3'>
                    <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/8fc8d6b8-b112-424e-ac6b-c566ba3c2200/public" alt="asd" className='w-8' />
                    <p>100% प्राकृतिक, बिना साइड इफेक्ट</p>
                </li>
            </ul>



            <div className='py-4'>
                <FlipAmazon />
            </div>


            <div className='sm:w-[90%] mx-auto flex justify-center items-center gap-1 sm:gap-5 py-5'>

                <div className='flex items-center font-bold gap-3 bg-[#f1dd02] px-4 pt-3 pb-2 rounded-lg sm:rounded-3xl'>
                    <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/8fc8d6b8-b112-424e-ac6b-c566ba3c2200/public" alt="asd" className='w-[30px]' />
                    <p className='text-[16px] sm:text-lg'>वैज्ञानिक समाधान</p>
                </div>

                <div className='flex items-center font-bold gap-3 bg-[#f1dd02] px-4 pt-3 pb-2 rounded-lg sm:rounded-3xl'>
                    <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/8fc8d6b8-b112-424e-ac6b-c566ba3c2200/public" alt="asd" className='w-[30px]' />
                    <p className='text-[16px] sm:text-lg'>आयुर्वेदिक फॉर्मूला</p>
                </div>

            </div>






            <div className='bg-gradient-radial to-green-800/15 from-[#024124] py-3'>

                <div className='sm:w-[80%] justify-center mx-auto mt-5 flex items-center text-white gap-5 py-5'>
                    <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/8c252632-7f29-4b3b-02e3-a51fb2197e00/public" alt="sdsd" loading='lazy' className='w-16' />
                    <div className='text-3xl'>मुख्य जड़ीबूटियाँ </div>
                    <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/8c252632-7f29-4b3b-02e3-a51fb2197e00/public" alt="sdsd" loading='lazy' className='w-16' />
                </div>


                <div className='grid grid-cols-3 items-center '>

                    <div className='text-center'>
                        <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/e635a1fa-b1a8-4888-fa0d-6aa4fc14c300/public" alt="asd" loading='lazy' />
                        <h1 className='text-[#f0dc01] text-2xl text-center font-bold'>अश्वगंधा</h1>
                        <p className='text-white text-[16px]'>तनाव घटाए, <br /> स्टैमिना बढ़ाए</p>
                    </div>

                    <div className='text-center'>
                        <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/ef75225f-0f89-430c-98a8-f7ba52c39a00/public" alt="asd" loading='lazy' />
                        <h1 className='text-[#f0dc01] text-2xl text-center font-bold'>शिलाजीत</h1>
                        <p className='text-white text-[16px]'>टेस्टोस्टेरोन लेवल <br /> और पेनिस की मजबूती </p>
                    </div>

                    <div className='text-center'>
                        <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/a36230a6-9d16-4a23-cd13-c0c0c0b86600/public" alt="asd" loading='lazy' />
                        <h1 className='text-[#f0dc01] text-2xl text-center font-bold'>सफेद मूसली</h1>
                        <p className='text-white text-[16px]'>जोश और यौन<br />ऊर्जा बनाए रखे</p>
                    </div>




                </div>


                <div className='border border-dashed text-white pt-2 w-[95%] sm:w-[80%] mx-auto text-center my-4'>
                    अन्य <span className='text-[#01ff8b]'>13 असरदार जड़ीबूटियाँ</span> जो हर प्रकार की सेक्स कमजोरी में कारगर हैं।
                </div>


            </div>






        </div>
    )
}

export default Herbs
