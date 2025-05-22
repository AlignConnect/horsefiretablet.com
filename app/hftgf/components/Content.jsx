import dynamic from 'next/dynamic';
import React, { useEffect, useRef, useState } from 'react'
import { BiSkipNext, BiSkipPrevious } from 'react-icons/bi';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const MostSelling = dynamic(() => import('@/app/commonUse/mostSelling/most_selling_2'));
const YoutubeFrame = dynamic(() => import("@/app/commonUse/Youtubefile/YoutubeFrame"));
const Ordernow = dynamic(() => import("./Ordernow"));





function Content() {

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


    const issue_of_sex = [
        {
            work_content: "क्या आपका लिंग जोश में भी ढीला पड़ जाता है?",
            work_image: 'https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/e988ed55-669d-48a8-8260-5c1b2da23500/public'
        },
        {
            work_content: "क्या आप पहले राउंड में ही डिस्चार्ज हो जाते हैं और नेक्स्ट राउंड के लिए खड़े ही नहीं हो पाते?",
            work_image: 'https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/e72979dc-fc2c-497e-b288-9d559f0aa500/public'
        },
        {
            work_content: "क्या पार्टनर बार-बार असंतुष्ट रहती हैं?",
            work_image: 'https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/5dbd81ce-325c-4f8e-1cce-050b56889c00/public'
        }
    ]

    const issue = (arr) => {
        return arr?.map((e, key) => {
            return <div className='flex items-center gap-2 py-2 sm:py-5' key={key}>
                <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/6060eb68-74aa-4aa3-4106-4635814b6c00/public" className='md:w-10 w-6 rounded-2xl' alt='icon' />
                <div className='fontNoto font-extrabold  sm:text-xl text-[1.1rem]  text-white pt-2'>{e.content}</div>
            </div >

        })
    }


    const issue_fixed_of_sex = [
        {
            sex_work_content: "फौलादी लिंग की गारंटी",
            sex_work_image: 'https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/d07dd98b-63ef-43be-33ef-5bfbff9a7e00/public'
        },
        {
            sex_work_content: "लंबा समय तक टिके रहने की क्षमता",
            sex_work_image: 'https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/0dd5a5e5-170e-49ff-1f25-242cda23f000/public'
        },
        {
            sex_work_content: "हर राउंड में भरपूर स्टैमिना",
            sex_work_image: 'https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/be1a06b0-350e-497a-cf2a-3a94a1455400/public'
        },
        {
            sex_work_content: "सेक्स लाइफ में आत्मविश्वास और संतुष",
            sex_work_image: 'https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/7ff2235b-416b-4c19-564b-79e3a9c15b00/public'
        },
    ]


    const herbs = [
        {
            herbs_content: "अश्वगंधा",
            herbs_image: "https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/52d2ced6-77f8-43e7-698a-9e5e8ae2f400/public"
        },
        {
            herbs_content: "शिलाजीत",
            herbs_image: "https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/a6d3d5a2-5844-4a6a-85fd-4ad123033700/public"
        },
        {
            herbs_content: "सफेद मूसली ",
            herbs_image: "https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/97a4567b-1125-45a9-06aa-58b9e83cfb00/public"
        },
        {
            herbs_content: "गोक्षुरा ",
            herbs_image: "https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/4423fc02-59a7-4391-4c26-fbd10dc87200/public"
        },

    ];


    const benefits = [
        "100% SAFE & CERTIFIED",
        "PURE AYURVEDIC",
        "AYUSH CERTIFIED",
        "GMP, ISO, FDA APPROVED",
        "कोई साइड इफेक्ट नहीं"
    ];


    const listed_points = [
        {
            l_img: 'https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/b1c16a3e-647c-4b79-8073-8cb50afefe00/public',
            l_content: 'COD पेमेंट उपलब्ध',
        },
        {
            l_img: 'https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/d4479045-6e28-4be3-7734-37543b7c2900/public',
            l_content: '97.6% सफलता दर',
        },
        {
            l_img: 'https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/08ac53cc-f19b-4636-535b-19cb0479c000/public',
            l_content: 'Flipkart, Amazon पर लिस्टेड',
        },
        {
            l_img: 'https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/6895cac0-afbe-49af-b9c3-d27decd20000/public',
            l_content: '3258161+ संतुष्ट ग्राहक',
        },
    ]

    const instructions = [
        {
            icon: "⏰",
            text: "सुबह और रात खाने के बाद 1 टैबलेट",
        },
        {
            icon: "🥛",
            text: "दूध या पानी के साथ लें",
        },
        {
            icon: "🗓️",
            text: "एक महीने में असर दिखने लगेगा",
        },
    ];

    return (
        <section>


            <Ordernow />

            <div className="relative w-[90%] mx-auto fontNoto mt-7">
                {/* Image */}
                <img
                    src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/03463454-8bab-44b4-75fb-b10cb8c53100/public"
                    alt="Background"
                    className="w-full h-auto"
                />


                {/* Centered Text */}
                <div className="absolute inset-0 flex items-center justify-center mt-3">
                    <span className="text-black font-bold text-3xl sm:text-5xl drop-shadow-md">
                        सेक्स कमजोरी से जूझ रहे हैं?
                    </span>
                </div>
            </div>



            <div className='px-3 py-6'>
                {issue_of_sex.map((e, key) => {
                    return <div className="flex justify-center items-center py-2" key={key}>
                        <div className="sm:w-1/2 w-3/4 mx-auto">
                            <img className='w-80'
                                src={e.work_image}
                            />
                        </div>
                        <div className="w-full px-4">
                            <div className="text-white  fontNoto text-[1.1rem] md:text-2xl font-semibold">{e.work_content}</div>
                        </div>
                    </div>
                })}
            </div>



            <div className="flex items-center justify-center gap-3 bg-white rounded-xl fontNoto py-2 mx-2">

                <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/cc921dfb-6106-4cb5-2900-0f786dece700/public" alt="" className='w-10 ' />

                <div className="text-[#025f09] font-extrabold text-2xl sm:text-4xl pt-3">
                    सेक्स कमजोरी से जूझ रहे हैं?
                </div>
            </div>


            <div className="px-2 text-left">
                {
                    issue([
                        {
                            content: "ज्यादातर पुरुष पहले राउंड के बाद लिंग में कड़कपन नहीं ला पाते।"
                        },
                        {
                            content: "कई पुरुषों में लिंग में सख्ती ही नहीं आती – और सेक्स अधूरा रह जाता है।"
                        }
                    ])
                }
            </div>


            <div className=" flex justify-center bg-black py-4 fontNoto mb-4">
                <div className="border border-green-500 px-6 pt-4">
                    <h2 className="text-[#c7ff1d] text-3xl sm:text-4xl font-bold text-center ">
                        इसका एक ही समाधान है
                    </h2>
                </div>
            </div>

            <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/2f5573c2-ae28-466d-08e8-acd944f36400/public" alt="" className='w-full' />


            <Ordernow />

            <div className='px-3 py-6'>
                {issue_fixed_of_sex.map((e, key) => {
                    return <div className="py-4" key={key}>
                        <div className="sm:w-1/2 w-3/4 mx-auto">
                            <img className=''
                                src={e.sex_work_image}
                            />
                        </div>
                        <div className="w-full px-4 pt-4 ">
                            <div className="text-white  fontNoto text-[1.4rem] md:text-3xl font-extrabold text-center">{e.sex_work_content}</div>
                        </div>
                    </div>
                })}
            </div>

            <Ordernow />

            <div className=" p-4 flex justify-center items-center ">
                <div className="bg-[#f5e8c7] border-2 border-red-700 shadow-red-600 shadow-lg px-6 py-4 rounded-lg">
                    <h1 className="fontNoto text-2xl sm:text-3xl font-extrabold text-center text-gray-800 ">
                        17 प्राचीन <strong className='text-[#025f09]'>आयुर्वेदिक जड़ीबूटियों </strong>का असरदार मिश्रण:
                    </h1>
                </div>
            </div>




            <div className="grid grid-cols-1 gap-4 border-2 border-dashed border-white m-2">
                {herbs.map((herb, index) => (
                    <div key={index} className="relative bg-black text-white p-5">
                        <img
                            src={herb.herbs_image}
                            alt={herb.herbs_content}
                            className="w-full rounded-full"
                        />
                        <div className="absolute sm:right-1/4 right-20 bottom-20 top-20 sm:top-36 sm:bottom-1/2 text-black fontNoto font-extrabold sm:text-4xl text-2xl">
                            {herb.herbs_content}
                        </div>
                    </div>
                ))}

                <div className="fontNoto font-extrabold sm:text-3xl text-xl bg-white m-2 pt-2 px-2">
                    अन्य <strong className='text-[#025f09]'>13 असरदार जड़ीबूटियाँ</strong> जो पुरुष की यौन कमजोरी का समाधान करती हैं
                </div>
            </div>


            <div className="space-y-3 p-4 bg-white">
                {benefits.map((text, index) => (
                    <div
                        key={index}
                        className="flex items-center bg-[#0a6801] text-white font-bold px-4 py-3 rounded-md shadow-md"
                    >
                        <span className="text-2xl mr-3">▶</span>
                        <span className="text-base sm:text-lg">{text}</span>
                    </div>
                ))}
            </div>

            <Ordernow />

            <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/dd3c6f84-ea66-4323-a1cd-45bca7a85a00/public" alt="" className='w-full' />


            <div className="t-b-shdw-ylw  ">
                <div className="grid grid-cols-2 bg-white py-6 ">
                    {
                        listed_points.map((e, key) => (
                            <div className="" key={key}>

                                <img src={e.l_img} alt="" className="sm:w-1/2 w-3/4 mx-auto" />
                                <div className="fontNoto text-center font-extrabold  sm:text-2xl text-lg leading-tight p-2 text-black">
                                    {e.l_content}
                                </div>
                            </div>


                        ))
                    }
                </div>
            </div>
            <Ordernow />


            <div className="sm:mx-3 mx-0 sm:py-2 my-3">

                <div className="relative w-full">
                    <img
                        src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/da6b674d-25ee-4b34-c892-9c81c51dab00/public"
                        alt=""
                        className="w-full"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                        <h2 className="text-white text-xl sm:text-3xl font-bold fontPoppins text-center">
                            ग्राहक क्या कहते हैं?
                        </h2>
                    </div>
                </div>
                <Slider
                    ref={el => {
                        if (el) sliderRefs.current[0] = el;
                    }}
                    {...settings}
                >
                    <YoutubeFrame vid={"ENd3ADBXxfo?si=XlME5A7OjO_qUyti"} />
                    <YoutubeFrame vid={"Ywuqj5x06Jc?si=zw3sQFX2cDaROuTa"} />
                </Slider>

                <div className='flex justify-between items-center gap-1 text-xs sm:text-sm text-white px-2 pt-3'>
                    <button className="button cursor-pointer flex items-center" onClick={previous}>
                        <BiSkipPrevious size={20} />Previous
                    </button>
                    <button className="button cursor-pointer flex items-center" onClick={next}>
                        Next<BiSkipNext size={20} />
                    </button>
                </div>

            </div>



            <div className="bg-black text-white p-6 rounded-lg w-full  mx-auto fontPoppins">
                {/* Header */}
                <div className="relative w-full">
                    <img
                        src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/e3c3145a-369a-455a-04d7-ca5a47b15a00/public"
                        alt=""
                        className="w-full sm:w-3/4 mx-auto"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                        <h2 className="text-black text-xl sm:text-3xl font-bold fontPoppins text-center">
                            सही सेवन विधि
                        </h2>
                    </div>
                </div>


                {/* Instructions */}
                <div className="space-y-4 mt-4">
                    {instructions.map((item, index) => (
                        <div key={index} className="flex items-center border-t border-yellow-500 pt-4">
                            <span className="text-2xl mr-4">{item.icon}</span>
                            <span className="text-base sm:text-lg font-medium">{item.text}</span>
                        </div>
                    ))}
                </div>
            </div>

            <Ordernow />

            <div className="bg-white">
                <MostSelling />
            </div>


        </section>
    )
}

export default Content