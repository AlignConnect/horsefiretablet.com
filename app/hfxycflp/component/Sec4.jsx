import React, { useRef } from 'react'
import { Noto_Serif_Devanagari, Poppins } from "next/font/google";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import dynamic from 'next/dynamic';
import { BiSkipNext, BiSkipPrevious } from 'react-icons/bi';

const noto = Noto_Serif_Devanagari({
    subsets: ['devanagari'],
    display: 'swap',
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});

const YoutubeFrame = dynamic(() => import('./YoutubeFrame'));

const poppin = Poppins({
    subsets: ['latin'],
    display: 'swap',
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});
const Sec4 = () => {

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

        <section className={noto.className}>

            <div>
                <h1 className='font-bold text-center text-white py-4 text-xl'> {">>"} CUSTOMER'S REVIEW VIDEO</h1>
            </div>

            <div className="mx-1 pb-4 sm:pb-7 slider-container">

                <Slider ref={slider => {
                    sliderRef = slider;
                }}
                    {...settings}
                >
                    <div key={1}>
                        <YoutubeFrame vid='yFVH97V3J2c?si=h9t-WY0RXjw6XDKZ?autoplay=1&showinfo=0&controls=0' />
                    </div>
                    <div key={2}>
                        <YoutubeFrame vid='HvnOSO2Vh6U?si=893J9RL4-TO0Zgki?autoplay=1&showinfo=0&controls=0' />
                    </div>
                    <div key={3}>
                        <YoutubeFrame vid='l6HdJFVR1ak?si=baXm1Xs6IMVZXiu8?autoplay=1&showinfo=0&controls=0' />
                    </div>

                </Slider>

                <div className='flex justify-between items-center gap-1 text-sm'>
                    <button className={`button cursor-pointer flex text-white items-center ${poppin.className}`} onClick={previous}>
                        <BiSkipPrevious size={30} />Previous
                    </button>
                    <button className={`button cursor-pointer flex text-white items-center ${poppin.className}`} onClick={next}>
                        Next<BiSkipNext size={30} />
                    </button>
                </div>
            </div>


            <div className='text-white'>

                <h2 className='text-[20px] w-[95%] mx-auto rounded-md  bg-[#ffdc00] px-3 text-black font-bold pt-3 text-center'>HORSE FIRE TABLET के अद्भुत लाभ जो ग्राहक अनुभव करते है !</h2>

                <div className='grid grid-cols-4 py-4 px-2'>

                    <div className='col-span-2'>
                        <div className='text-center'>
                            <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/1a9f9612-7c20-459d-f1ed-a645ee8ef700/public" alt="asd" loading='lazy' className='mx-auto' />
                        </div>
                        <p className='text-center py-3'>टेस्टोस्टेरोन का उच्चतम स्तर </p>
                    </div>

                    <div className='col-span-2'>
                        <div className='text-center'>
                            <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/116db11a-666a-4033-3548-299693b45e00/public" alt="asd" loading='lazy' className='mx-auto' />
                        </div>
                        <p className='text-center py-3'>मजबूत नसों के साथ फौलादी लिंग  </p>
                    </div>

                    <div className='col-span-2'>
                        <div className='text-center'>
                            <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/bcf07718-ffb7-4d2f-0f86-fce9ef619c00/public" alt="asd" loading='lazy' className='mx-auto' />
                        </div>
                        <p className='text-center py-3'>गाढा वीर्य, सभी यौन समस्याओं से राहत</p>
                    </div>


                    <div className='col-span-2'>
                        <div className='text-center'>
                            <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/7def797a-f6e0-4457-64f8-4021b13cff00/public" alt="asd" loading='lazy' className='mx-auto' />
                        </div>
                        <p className='text-center py-3'>कम से कम 30-45 मिनट लगातार सेक्स </p>
                    </div>

                </div>



            </div>


            <div className='bg-[url(https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/3452c861-b426-46c0-4bf4-a8fb6249c900/public)]'>

                <div className='text-center'>
                    <h1 className='bg-[#168600] inline-block text-white pt-3 px-3 rounded-md my-3 font-bold'>सेवन विधि</h1>
                </div>

                <p className='px-3'>
                    <span className='text-red-500 font-bold'> Horse Fire Tablet</span> का सेवन बहुत ही आसान है। बेहतर सेक्स टाइमिंग, रॉक हार्ड इरेक्शन, जोश-स्टैमिना और शारीरिक शक्ति के लिए 1 टेबलेट सुबह-शाम 1 गिलास गुनगुने दूध या पानी के साथ लें ! बेहतर परिणाम के लिए दूध के साथ इस्तेमाल का सुझाव दिया गया है।
                </p>

            </div>


            <div className='rounded-lg border border-yellow-400 w-[97%] text-center mx-auto my-3 pt-3 sm:px-3 text-white text-lg'>
                तो देर किस बात की यौन जीवन में खुशहाली की तरफ अपना पहला कदम बढ़ाएं, एक्सपर्ट से फ्री में सलाह पाए
            </div>




        </section>

    )
}

export default Sec4