import YoutubeFrame from '@/app/commonUse/Youtubefile/YoutubeFrame'
import React from 'react'
import Order from './OrderNow';
import Slider from "react-slick";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


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


const Herbs = () => {
    return (
        <div className='bg-white fontNoto'>

            <div className="problems-container text-black">
                <h2 className="problems-heading font-bold anek  fontAnton">Key Herbs</h2>
            </div>
            <div className='px-3 flex items-center my-2 gap-3'>
                <div className='min-w-[110px] max-h-[110px] ' >
                    <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/a2f15a51-a762-4969-6c7d-dacb14609b00/public" alt="asdsd" loading='lazy' className='max-w-full' />
                </div >
                <div className='anek'>
                    <h1 className='text-green-800 text-2xl sm:text-3xl font-bold anek fontNoto'>अश्वगंधा</h1>
                    <p className=' text-lg'>तनाव कम करता है और सेक्स स्टैमिना बढ़ाता है </p>
                </div>
            </div >

            <div className='px-3 flex items-center my-2 gap-3'>
                <div className='min-w-[110px] max-h-[110px] ' >
                    <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/bb83d800-3547-4462-b3c8-b0de7654b900/public" alt="asdsd" loading='lazy' className='max-w-full' />
                </div>
                <div className='anek'>
                    <h1 className='text-green-800 text-2xl sm:text-3xl font-bold anek fontNoto'>शिलाजीत</h1>
                    <p className=' text-lg'>टेस्टोस्टेरोन और लिंग की मजबूती बढ़ाता है</p>
                </div>
            </div>
            <div className='px-3 flex items-center my-2 gap-3'>
                <div className='min-w-[110px] max-h-[110px] ' >
                    <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/9df7ef3e-d692-405a-cbe6-56866ea9c400/public" alt="asdsd" loading='lazy' className='max-w-full' />
                </div>
                <div className='anek'>
                    <h1 className='text-green-800 text-2xl sm:text-3xl font-bold anek  '>सफेद मूसली</h1>
                    <p className=' text-lg'>जोश और स्टैमिना देर तक मेन्टेन रखता है  </p>
                </div>
            </div>
            <div className='px-3 flex items-center my-2 gap-3'>
                <div className='min-w-[110px] max-h-[110px] ' >
                    <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/79b4b7e3-e2b9-486f-d7f1-c6f30edd0700/public" alt="asdsd" loading='lazy' className='max-w-full' />
                </div>
                <div className='anek'>
                    <h1 className='text-green-800 text-2xl sm:text-3xl font-bold '>गोक्षुरा</h1>
                    <p className=' text-lg'>लिंग के टिश्यूज को स्ट्रांग बनाकर सख्ती बढ़ाता है   </p>
                </div>
            </div>
            <p className='bg-gray-100 fontNoto pt-5 pb-3 text-xl text-red-700 text-center'>
                अन्य जड़ीबूटियां भी सभी प्रकार के यौन कमजोरी मिटाने में अत्यंत असरदार है।
            </p>

            <div className='py-6 w-full overflow-hidden'>
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

            <Order />

            <div className="problems-container text-black">
                <h2 className="problems-heading anek font-bold fontAnton">Key Benefits</h2>
            </div>


            <div className='p-2'>
                <div className='grid grid-cols-2 gap-4 items-center border border-pink-800 border-dashed py-2 px-4 my-2'>
                    <div><h1 className='text-2xl sm:text-4xl font-bold anek sm:px-5 text-[#e90f33]'>मनचाही <br /> सेक्स टाइमिंग</h1></div>
                    <div> <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/1e67efb4-83d4-4445-bb3e-1cacb4767b00/public" alt="sdsdsd" loading='lazy' className='w-full' /></div>
                </div>

                <div className='grid grid-cols-2 gap-4 items-center border border-pink-800 border-dashed py-2 px-4 my-2'>
                    <div> <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/9f664b7e-48a1-40fb-83c3-c7e39edfc300/public" alt="sdsdsd" loading='lazy' className='w-full' /></div>
                    <div><h1 className=' text-2xl sm:text-4xl font-bold anek px-5 text-[#e90f33]'>लम्बा और
                        <br /> सख्त लिंग</h1></div>
                </div>


                <div className='grid grid-cols-2 gap-4 items-center border border-pink-800 border-dashed py-2 px-4 my-2'>
                    <div><h1 className='text-2xl sm:text-4xl font-bold anek  sm:px-5 text-[#e90f33]'>मिनिमम <br />4 राउंड हर बार </h1></div>
                    <div> <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/1829bf4c-3f6d-4e2a-6366-4c120a13a600/public" alt="sdsdsd" loading='lazy' className='w-full' /></div>
                </div>

                <div className='grid grid-cols-2 gap-4 items-center border border-pink-800 border-dashed py-2 px-4 my-2'>
                    <div> <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/c8c80c74-3970-4fa3-9088-ab3035543100/public" alt="sdsdsd" loading='lazy' className='w-full' /></div>
                    <div><h1 className='text-2xl sm:text-4xl font-bold anek sm:px-5  text-[#e90f33]'>जोरदार जोश <br /> और स्टैमिना</h1></div>
                </div>
            </div>


            <div className='bg-[#e90f33] p-3 text-xl text-white'>
                Horse Fire Tablet 100% आयुर्वेदिक, GMP, ISO, FDA और AYUSH सर्टिफाइड उत्पाद है !! यह पुरुष कमजोरी का सबसे प्रभावी समाधान बनकर उभरा है, इसके इस्तेमाल से पुरुष लगातार अपने स्वास्थ्य में सुधार कर रहे है। Horse Fire का सक्सेस रेट 97.6% है जो किसी भी अन्य उत्पाद से कई गुना बेहतर है।
            </div>






            <div className='bg-[#20364b]'>

                <div className='grid grid-cols-2 w-full sm:w-[400px] mx-auto items-center justify-center gap-5 py-5 px-4'>

                    <div className='bg-white w-[160px] rounded-2xl overflow-hidden pt-5'>
                        <div className='w-[120px] mx-auto my-4'>
                            <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/ceb60e31-6690-4bb0-3492-c072968d2d00/public" alt="dsdsdsd" loading='lazy' className='w-full' />
                        </div>

                        <div className='pt-4 bg-[#fcc022] text-center'>
                            <p className='text-xl font-bold py-1'>COD पेमेंट उपलब्ध</p>
                        </div>
                    </div>

                    <div className='bg-white w-[160px] rounded-2xl overflow-hidden pt-5'>
                        <div className='w-[120px] mx-auto my-4'>
                            <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/10937fa3-8792-4840-c5f0-16cf0d85f600/public" alt="dsdsdsd" loading='lazy' className='w-full' />
                        </div>

                        <div className='pt-4 bg-[#fcc022] text-center'>
                            <p className='text-xl font-bold py-1'>97.6% सफलता दर                            </p>
                        </div>
                    </div>


                    <div className='bg-white w-[160px] rounded-2xl overflow-hidden pt-5 my-5'>
                        <div className='w-[120px] mx-auto my-4'>
                            <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/cab30bb7-15e2-4aa2-dc2e-7b83759b1f00/public" alt="dsdsdsd" loading='lazy' className='w-full' />
                        </div>

                        <div className='pt-4 bg-[#fcc022] text-center'>
                            <p className='text-xl font-bold py-1'>पर लिस्टेड</p>
                        </div>
                    </div>


                    <div className='bg-white w-[160px] rounded-2xl overflow-hidden pt-5 my-5'>
                        <div className='w-[120px] mx-auto my-4'>
                            <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/4d3d21d0-4887-4a8f-3c29-dfe05bb03900/public" alt="dsdsdsd" loading='lazy' className='w-full' />
                        </div>

                        <div className='pt-4 bg-[#fcc022] text-center'>
                            <p className='text-lg font-bold py-1'>+30 लाख संतुष्ट ग्राहक</p>
                        </div>
                    </div>

                </div>

            </div>


            <div className='my-4'>
                <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/4b1adbf1-df51-478c-1494-af5982984c00/public" alt="sdsdsd" loading='lazy' className='w-full' />
            </div>
        </div >
    )
}

export default Herbs
