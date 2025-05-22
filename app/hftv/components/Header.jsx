import React, { useEffect, useState } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Header = () => {
    const [imagesLoaded, setImagesLoaded] = useState(false);
    const [loadedCount, setLoadedCount] = useState(0);

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
    ];

    const settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 5000,
        slidesToShow: 2,
        slidesToScroll: 2,
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

    const handleImageLoad = () => {
        setLoadedCount((prev) => {
            const newCount = prev + 1;
            if (newCount === need.length) {
                setImagesLoaded(true);
            }
            return newCount;
        });
    };

    return (
        <section>
            <div className='relative'>
                <img
                    src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/50418a22-9eca-4969-8b62-0084f33f7e00/public"
                    alt=""
                    className='w-full'
                />

                <div className="absolute sm:-bottom-14 -bottom-28 left-0 right-0 sm:w-5/6 w-4/5 mx-auto">
                    {
                        imagesLoaded ? (
                            <Slider {...settings}>
                                {need.map((e, key) => (
                                    <div key={key}>
                                        <div className="bg-white rounded-xl mx-2">
                                            <img src={e.img} alt="" className="w-[88%] sm:w-1/2 mx-auto" />
                                            <div className="fontNoto text-center font-extrabold sm:text-[1.3vw] text-[4.3vw] leading-tight p-3">
                                                {e.title_text}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </Slider>
                        ) : (
                            <div className="text-center py-6 text-white">Loading ...</div>
                        )
                    }

                    {/* Hidden preload to trigger handleImageLoad */}
                    <div className="hidden">
                        {need.map((item, index) => (
                            <img
                                key={index}
                                src={item.img}
                                alt="preload"
                                onLoad={handleImageLoad}
                            />
                        ))}
                    </div>
                </div>
            </div>

            <p className='text-white sm:mt-32 mt-36 mb-6'>
                पार्टनर के सामने अपनी मर्दानगी साबित करने के लिए यानि की अपने सेक्स प्रदर्शन से उन्हें संतुष्ट करने के लिए ये अनिवार्य कि आपका लिंग फौलादी हो और देर तक सख्त बना रहे साथ ही सेक्स की अवधि भी लम्बी हो।
            </p>
        </section>
    );
};

export default Header;
