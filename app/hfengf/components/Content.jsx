import dynamic from 'next/dynamic';
import React, { useEffect, useRef, useState } from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { BiSkipNext, BiSkipPrevious } from 'react-icons/bi';


const MostSelling = dynamic(() => import('@/app/commonUse/mostSelling/most_selling_2'));
const YoutubeFrame = dynamic(() => import("@/app/commonUse/Youtubefile/YoutubeFrame"));
const Ordernow = dynamic(() => import("./Ordernow"));





function Content() {



    const [customers, setCustomers] = useState(3258161);
    const [orders, setOrders] = useState(106);

    useEffect(() => {
        const customerInterval = setInterval(() => {
            setCustomers((prev) => prev + Math.floor(Math.random() * 1) + 2);
        }, 10000);

        return () => clearInterval(customerInterval);
    }, []);

    useEffect(() => {
        const orderInterval = setInterval(() => {
            setOrders((prev) => prev + Math.floor(Math.random() * 2) + 1);
        }, 20000);

        return () => clearInterval(orderInterval);
    }, []);


    const sliderRefs = useRef([]);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [totalSlides, setTotalSlides] = useState(0);

    useEffect(() => {
        if (sliderRefs.current[0]) {
            setTotalSlides(sliderRefs.current[0].props.children.length - 1);
        }
    }, []);

    const next = () => {
        sliderRefs.current.forEach(slider => {
            if (slider && typeof slider.slickNext === "function") {
                slider.slickNext();
            }
        });
        setCurrentSlide(prev => Math.min(prev + 1, totalSlides));
    };

    const previous = () => {
        sliderRefs.current.forEach(slider => {
            if (slider && typeof slider.slickPrev === "function") {
                slider.slickPrev();
            }
        });
        setCurrentSlide(prev => Math.max(prev - 1, 0));
    };

    const settings = {
        arrows: false,
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        beforeChange: (_, next) => setCurrentSlide(next)
    };

    const listed_points = [
        {
            l_img: 'https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/b1c16a3e-647c-4b79-8073-8cb50afefe00/public',
            l_content: 'COD Available',
        },
        {
            l_img: 'https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/d4479045-6e28-4be3-7734-37543b7c2900/public',
            l_content: '97.6% Success Rate',
        },
        {
            l_img: 'https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/08ac53cc-f19b-4636-535b-19cb0479c000/public',
            l_content: 'Listed on Flipkart and Amazon',
        },
        {
            l_img: 'https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/6895cac0-afbe-49af-b9c3-d27decd20000/public',
            l_content: 'Over 3 Million Satisfied Customers',
        },
    ]

    return (
        <section>


            <div className="t-b-shdw py-2 " >

                <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/ff8aa766-d92c-493d-6f2a-30ff57ab8900/public" alt="" className='w-5/6 mx-auto my-5 sm:my-10' />

                <p className='text-white sm:pb-4 pb-2'>
                    According to scientific studies, aroused men tend to ejaculate quickly during the first round. Most of them face difficulty in getting an erection for the second round, and in many cases, their erection lacks the required hardness. Even if they somehow manage to get hard, they ejaculate quickly and the erection fades. This leads to disappointment for the female partner during sex.
                </p>

            </div>


            <Ordernow />


            <div className="relative">
                <a href='#form' className=""><img
                    src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/4210d9c4-adde-4942-e6ec-b8d7452c7900/public"
                    alt=""
                    className="w-full sm:my-14 my-10"
                />
                </a>
                <div className="absolute top-[70%] left-[32%] transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
                    <div className="flex items-center leading-tight sm:gap-12 gap-4 ">
                        {/* <div className='text-[#f9d61d] '>
                            <span className='sm:text-2xl text-sm'>{customers.toLocaleString()}</span>
                            +
                            <span className=" text-white sm:text-lg text-[0.6rem]">
                                <br /> Satisfied customers<br /> grow every minute</span></div>

                        <div className='text-[#f9d61d] '>
                            <span className='sm:text-2xl text-sm'>{orders.toLocaleString()}</span>
                            +
                            <span className=" text-white sm:text-lg text-[0.6rem]">
                                <br /> People Ordered it in<br /> the Last 1 Hour</span>
                        </div> */}

                        <div className=' text-white text-[0.6rem] md:text-base'>
                            <strong className='text-[#f9d61d] md:text-2xl text-[0.9rem] '>{customers.toLocaleString()}+</strong><br /> Satisfied customers<br /> grow every minute
                        </div>
                        <div className=' text-white text-[0.6rem] md:text-base'>
                            <strong className='text-[#f9d61d] md:text-2xl text-[0.9rem]'>{orders.toLocaleString()}+</strong> <br /> People Ordered it in<br /> the Last 1 Hour
                        </div>
                    </div>
                </div>
            </div>





            <div className="border-solid border-white border-t-2 border-b-2">

                <p className='text-white py-5'>
                    Each Horse Fire Tablet turns you into a star performer in the game of sex. Since your partner expects more from you, Horse Fire Tablet delivers more stamina, stronger erections, longer duration, and quick, firm erections after every ejaculation—helping you satisfy your partner every time and bring her to climax. This keeps love alive in the relationship with no space for bitterness.
                </p>

            </div>

            <div className="sm:mx-3 mx-0 sm:py-2">

                <div className='fontPoppins text-center text-[#60ff10] text-2xl sm:text-3xl font-extrabold pt-4 my-2'>Experts Opinion</div>

                <Slider
                    ref={el => {
                        if (el) sliderRefs.current[0] = el;
                    }}
                    {...settings}
                >
                    <YoutubeFrame vid={"lGJ_yqR9sfs?si=ITPswfR8YARqgHFd"} />
                    <YoutubeFrame vid={"h-3HVSbQAGA?si=CQpPTBbpa9Uy4Ng_"} />
                </Slider>

                <div className='flex justify-between items-center gap-1 text-xs sm:text-sm text-white px-2'>
                    <button className="button cursor-pointer flex items-center" onClick={previous}>
                        <BiSkipPrevious size={20} />Previous
                    </button>
                    <button className="button cursor-pointer flex items-center" onClick={next}>
                        Next<BiSkipNext size={20} />
                    </button>
                </div>

            </div>

            <div className='my-3'>
                <Ordernow />
            </div>


            <div className="t-b-shdw-ylw  my-10">
                <div className="grid grid-cols-2 bg-gradient-radial  to-black  from-[#3d3d3d] py-6 ">
                    {
                        listed_points.map((e, key) => (
                            <div className="" key={key}>

                                <img src={e.l_img} alt="" className="sm:w-1/2 w-3/4 mx-auto" />
                                <div className=" text-center font-extrabold  sm:text-xl text-md leading-tight p-2 text-white">
                                    {e.l_content}
                                </div>
                            </div>


                        ))
                    }
                </div>
            </div>


            <div className="bg-white  py-3">


                <div className=" text-red-600 sm:text-4xl text-xl font-extrabold pt-5 text-center px-2">
                    💦Specially recommended for men with premature ejaculation
                </div>

                <p className='text-black py-3'>
                    because even men suffering from severe premature ejaculation are now enjoying longer sex with <strong>Horse Fire Tablets</strong>. Earlier, they used to ejaculate before penetration or even at the mere touch of their partner. We are proud to have helped over 3 million Indian men overcome sexual weakness and bring happiness into their lives—and the count is growing every minute.
                </p>

            </div>



            <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/f12c1a9b-852d-48d5-e41d-6d3b6beba300/public" alt="" className='w-full' />

            <Ordernow />
            <div className="bg-white  mb-10">

                <MostSelling />
            </div>






            <div className="fontPoppins text-center text-[#60ff10] text-2xl sm:text-3xl font-extrabold pb-4">
                Success Story
            </div>

            <div className="mx-1  slider-container">

                <Slider
                    ref={el => {
                        if (el) sliderRefs.current[1] = el;
                    }}
                    {...settings}
                >
                    <div key={1}>
                        <YoutubeFrame vid='yFVH97V3J2c?si=h9t-WY0RXjw6XDKZ' />
                    </div>
                    <div key={2}>
                        <YoutubeFrame vid='BnoIvnZh4eY?si=eoJKd3TQaiH4J8WI' />
                    </div>
                    <div key={3}>
                        <YoutubeFrame vid='Ywuqj5x06Jc?si=ujygVAp2KQObyXCC' />
                    </div>

                </Slider>

                <div className='flex justify-between items-center gap-1 text-xs sm:text-sm text-white px-2'>
                    <button className="button cursor-pointer flex items-center" onClick={previous}>
                        <BiSkipPrevious size={20} />Previous
                    </button>
                    <button className="button cursor-pointer flex items-center" onClick={next}>
                        Next<BiSkipNext size={20} />
                    </button>
                </div>
            </div>




        </section>
    )
}

export default Content