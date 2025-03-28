import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";




const Header = () => {

    const need = [
        {
            img: "https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/41747edc-cae2-4066-8003-bb419c47df00/public",
            title_text: "लम्बा/चट्टान जैसा सख्त लिंग",
        },
        {
            img: "https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/1fdfb4b0-669b-4225-66c7-87a0683b7d00/public",
            title_text: "बिना झड़े लम्बी सेक्स टाइमिंग",
        },
        {
            img: "https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/fb763e43-09cc-4fd5-9783-912b91f1d600/public",
            title_text: "4 राउंड सेक्स बिना थके",
        },
        {
            img: "https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/782394fc-f961-4b1f-fe38-9ace952a4a00/public",
            title_text: "नेक्स्ट राउंड के लिए सख्त लिंग",
        }
    ]

    const settings = {
        dots: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 4000,
        slidesToShow: 2,
        slidesToScroll: 2,
        className: '',
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                },
            },
        ],
    };


    return (
        <section>

            <div className='relative'>

                <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/50418a22-9eca-4969-8b62-0084f33f7e00/public" alt="" className='w-full' />



                <div className="absolute sm:-bottom-24 -bottom-20 left-0 right-0 sm:w-5/6 w-4/5 mx-auto">

                    <Slider {...settings} >
                        {
                            need.map((e, key) => (
                                <div className=" " key={key}>
                                    <div className="bg-white rounded-xl mx-2">

                                        <img src={e.img} alt="" className="w-3/4 mx-auto" />
                                        <div className="fontNoto text-center font-extrabold sm:text-[1.3vw] text-[4.6vw] leading-tight p-2">
                                            {e.title_text}
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </Slider>
                </div>


            </div>
            <p className='text-white sm:mt-32 mt-28 mb-6'>
                पार्टनर के सामने अपनी मर्दानगी साबित करने के लिए यानि की अपने सेक्स प्रदर्शन से उन्हें संतुष्ट करने के लिए ये अनिवार्य कि आपका लिंग फौलादी हो और देर तक सख्त बना रहे साथ ही सेक्स की अवधि भी लम्बी हो।
            </p>




        </section >
    )
}

export default Header