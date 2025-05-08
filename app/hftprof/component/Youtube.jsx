import React from 'react'
import Slider from "react-slick";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
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
const Youtube = () => {
    return (
        <div className='bg-[rgb(32,32,32)] py-4'>
            <div className='sm:pb-6 w-full overflow-hidden'>
                <h1 className='text-white text-2xl sm:text-3xl pt-3 fontPoppins text-center font-bold py-5 uppercase'>Watch Customer's Review</h1>

                <Slider {...settings} className='px-5 w-full'>
                    <div>
                        <YoutubeFrame vid={"Ywuqj5x06Jc?si=CfBS9zrn56FBHv5b"} />
                    </div>
                    <div>
                        <YoutubeFrame vid={"BnoIvnZh4eY?si=zNjN_x9wr6pbRDfJ"} />
                    </div>

                    <div>
                        <YoutubeFrame vid={"Qze5nBXn7kU?si=FkwBAK1RSunYuaxH"} />
                    </div>
                </Slider>
            </div>

        </div>
    )
}

export default Youtube
