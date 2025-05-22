
import React from 'react'
import Slider from "react-slick";


import { Noto_Sans_Devanagari, Alfa_Slab_One, Gotu } from "next/font/google";
import { cn } from '@/lib/utils';
import Youtube from './Youtube';
import YoutubeFrame from '@/app/components/YoutubeFrame';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import dynamic from 'next/dynamic';
import OrderNow from './OrderNow';

const devanagariFont = Noto_Sans_Devanagari({
    subsets: ["devanagari", "latin"],
    weight: ["400", "700"],
    variable: "--font-devanagari",
});

const slab = Alfa_Slab_One({
    subsets: ["vietnamese"],
    // variable: "--font-slab",
    weight: ["400"],
})


const gotu = Gotu({
    subsets: ["vietnamese"],
    // variable: "--font-slab",
    weight: ["400"],
})


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

const Form = dynamic(() => import('./Form'), { ssr: false });



const Header = () => {

    return (
        <div className={devanagariFont.variable}>

            {/* https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/a3b7f056-d216-4c72-29b0-923d75ffd200/public */}

            {/* ,url("https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/0d9a4e6b-7d2d-4026-7fff-6f1225cfe000/public") */}
            <div className='relative bg-[url("https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/49ea2552-9c95-4d46-feb4-9595b5c84400/public")]  bg-no-repeat bg-cover' style={{ backgroundPosition: "0px -50px", zIndex: "20" }}>


                <div className='flex flex-col sm:flex-row items-center text-center mx-auto justify-center sm:pt-5 w-full gap-2'>
                    <div className={cn('text-[#f7fe25] text-center text-5xl sm:text-3xl uppercase font-black pt-4 sm:pt-0',
                        slab.className)}>
                        horse fire
                    </div>


                    <div className={cn(slab.className, 'text-white sm:text-[#f7fe25] text-2xl  sm:text-3xl text-center uppercase pb-4 sm:pb-0 block sm:inline tracking-[7px] sm:tracking-normal')}>
                        tablets
                    </div>
                </div>

                <div>
                    <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/42226438-99e2-427b-5db5-5358a7aeeb00/public" alt="sdsds" loading='la
                    ' className='w-[90%] sm:w-[90%] mx-auto sm:py-3' />
                </div>


                <div className={cn(gotu.className, "text-white text-lg sm:text-xl pt-3 pb-2  text-center")}>
                    हर टेबलेट में है 17 पॉवरफुल जड़ी बूटियों की शक्ति जो जोश जगाए, पावर बढ़ाए!
                </div>



                <div className='pb-4 relative top-5 sm:top-8'>
                    <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/d5b7d1de-3bb5-4896-69e2-c1f0d6bfa800/public" alt="sdsd" loading='lazy' className='w-[100%] mx-auto' />
                </div>
            </div>

            <div className='bg-[url(https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/abbb11ff-1d18-4ea9-38f8-a74f593a8100/public)] relative  bg-cover bg-no-repeat -mt-40' style={{ zIndex: "10" }}>
                <div className=' pt-40'>
                    <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/582ea367-f0f2-42b6-1886-412d9b6f6c00/public" alt="sdsds" loading='lazy' className='w-[80%] mx-auto' />
                </div>

                <div className='p-5'>
                    <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/a563bfe4-b827-4d7a-ccb6-5133ce9b0900/public" alt="sdsdsd" loading='lazy' className='w-auto mx-auto' />
                </div>

                <div className=''>
                    <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/6fd06d7c-3bbf-49e9-4853-1ee764c0d700/public" alt="sdsdsd" loading='lazy' className='w-auto mx-auto' />
                </div>


                <OrderNow />


                <p className='text-white pb-5 pt-4 px-2 text-lg fontNoto'>
                    एक गोली रोजना लें और हर रात पार्टनर को अपना दमखम दिखायें ! क्योंकि अगर आपका लिंग ढीला है, टाइमिंग कम है और आप सेक्स के समय 1 से 4 मिनट के अंदर डिस्चार्ज हो जाते है तो आप उनके लिए एक नाकाम पुरुष है। ऐसे में आपको धोखा देकर दूसरा विकल्प ढूंढा जा सकता है और आप ऐसी घटनाओं से अनजान नहीं है, रिश्ते में ब्रेकअप होते है बस बहाना कुछ और होता है और सच्चाई कुछ और !!
                </p>

                <p className='text-white pb-5 px-2 text-lg fontNoto'>
                    ये सिर्फ प्यार करने वाले जोड़ो तक ही सीमित नहीं है दाम्पत्य जीवन में भी सेक्स कमजोरी का बहुत बुरा असर पड़ता है। हर रोज अख़बार के के पन्नो पर, सोशल मिडिया पर तलाक, बेवफाई और अन्य गंभीर घटनाएं देखने-सुनने को मिलती रहती है।
                </p>


            </div>






            <div className='bg-[url(https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/539736ca-5137-4be3-f014-6007b2f68c00/public)] pt-5 '>


                <div className={cn('bg-[#ecc424] mx-auto px-3  sm:w-[70%] text-center text-2xl font-bold  pt-3 pb-2  rounded-full', slab.className)}>
                    WE PROUDLY SAY
                </div>



                <div className='px-2 sm:w-[85%] mx-auto'>

                    <div className='flex items-center gap-3 my-4'>
                        <div>
                            <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/158ade91-e4f5-4d03-a8f4-9bf660fb9b00/public" alt="ddfd" loading='lazy' className='w-[60px]' />
                        </div>

                        <div className='bg-[url(https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/3c62f758-6903-4669-3d92-d95aabeef300/public)] bg-cover fontNoto text-white text-lg bg-no-repeat px-4 sm:px-5 pt-2'>
                            पुरुषों के सेक्स टाइमिंग में बृद्धि होती है।
                        </div>
                    </div>


                    <div className='flex items-center gap-3  my-4'>
                        <div>
                            <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/79d07540-8e86-401e-ddfb-736df54c8600/public" alt="ddfd" loading='lazy' className='w-[60px]' />
                        </div>

                        <div className='bg-[url(https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/3c62f758-6903-4669-3d92-d95aabeef300/public)] bg-cover fontNoto text-white text-lg bg-no-repeat px-5 pt-2'>
                            को लिंग में भरपूर कड़कपन मिलती है।
                        </div>
                    </div>

                    <div className='flex items-center gap-3 my-4'>
                        <div>
                            <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/5f5b748a-10cb-4f43-bb06-c239d6741900/public" alt="ddfd" loading='lazy' className='w-[60px]' />
                        </div>
                        <div className='bg-[url(https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/3c62f758-6903-4669-3d92-d95aabeef300/public)] bg-cover fontNoto text-white text-lg bg-no-repeat px-3 sm:px-5 pt-2'>
                            साल तक के पुरुष लिंग में सख्ती पा सके
                        </div>
                    </div>
                </div>


                <div className='fontNoto px-2 py-5 text-2xl sm:text-4xl font-bold'>
                    <h5>कुल मिलाकर <span className={cn('font-bold uppercase bg-[#fceb27] px-2 ', slab.className)}>Horse Fire Tablet</span> का सेक्स समस्या में 97.6 सफलता दर है।</h5>
                </div>

                <div className=''>
                    <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/aef5054a-dcf3-4b8a-6e19-b12c9e786000/public" alt="sdsd" loading='lazy' className='w-full' />
                </div>
            </div>

            <OrderNow />


            <div className="bg-gradient-to-b from-[#000000] to-[#2d2d2d] min-h-full">


                <div className={cn(slab.className, 'p-2')}>
                    <span className='uppercase text-[#ecc425] text-3xl font-[400] pt-2 text-center block'>horse fire tablet </span>
                    <span className='text-white text-3xl fontNoto block pt-2 text-center'>दुसरो से अलग क्यों है?</span>
                </div>


                <p className='text-lg text-white fontNoto px-2'>
                    क्योंकि इसे बनाते समय यौन कमजोरी के सभी फैक्टर पर ध्यान दिया जाता है और उन जड़ीबूटियाँ को चुना जाता है जो सेक्सवर्धक और शक्तिवर्धक प्रमाणित है। Horse Fire में अश्वगंधा, शिलाजीत, गोक्षुरा, सफ़ेद मूसली और केसर जैसी 17 जड़ीबूटियां और भस्म शामिल है।  Horse Fire Tablet आयुष, FDA, और GMP प्रमाणित है। सबसे बड़ी बात हम ग्राहक संतुष्टि पर काम करते है, कस्टमर फीडबैक लेते है और हर रोज Horse Fire Tablet को और बेहतर बनाने के लिए रिसर्च करते है।
                </p>



                <div className='my-4'>
                    <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/f69459a8-e5cd-4c06-46a7-b37d77f10800/public" alt="sdssd" loading='lazy' />
                </div>



                <div className='text-center'>
                    <div className='text-[#ecc425] uppercase fontalfa text-2xl sm:text-3xl '>horse fire tablets</div>
                    <div className='text-[#ffffff] uppercase fontalfa text-3xl '>KNOWN  to do this</div>
                </div>



                <div className='p-2 sm:p-5'>
                    <div className=' bg-[#454545] rounded-xl overflow-hidden'>
                        <div className='p-7'>
                            <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/eb805d36-3419-4150-7168-f83c7490bb00/public" alt="asd" loading='lazy' className='w-full rounded-xl' />
                        </div>
                        <div className=''>
                            <div className='text-xl fontNoto relative'>
                                <div className={cn('bg-yellow-400 pt-2 transform translate-x-[-50%] translate-y-[-50%] left-[50%] -top-2 my-2 w-[360px] text-center absolute !font-black inline-block rounded-full ', gotu.className)}>सख्त और तगड़ा लिंग देर तक</div>
                                <p className='text-xl bg-white pt-8 px-2 pb-0 rounded-xl'>
                                    इसमें मौजूद प्राकृतिक जड़ीबूटिया शरीर में नाइट्रिक ऑक्साइड के स्तर को बढ़ाते हैं, जिससे खून का बहाव लिंग में बेहतर होता है। यही बढ़ा हुआ रक्त प्रवाह इरेक्शन को न केवल जल्दी लाता है, बल्कि उसे ज़्यादा समय तक बनाए रखता है।
                                </p>
                            </div>
                        </div>
                    </div>
                </div>


                <div className='p-2 sm:p-5'>
                    <div className=' bg-[#454545] rounded-xl overflow-hidden'>
                        <div className='p-7'>
                            <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/039ff150-e078-4651-88f9-de877ab1ca00/public" alt="asd" loading='lazy' className='w-full rounded-xl' />
                        </div>
                        <div className=''>
                            <div className='text-xl fontNoto relative'>
                                <div className={cn('bg-yellow-400 pt-2 transform translate-x-[-50%] translate-y-[-50%] left-[50%] -top-2 my-2 w-[360px] text-center absolute !font-black inline-block rounded-full ', gotu.className)}>45 Min+ लम्बी सेक्स टाइमिंग</div>
                                <p className='text-xl bg-white pt-8 px-2 pb-0 rounded-xl'>
                                    इस फॉर्मूले में शामिल जड़ी-बूटियाँ और शक्तिवर्धक तत्व शरीर की एनर्जी को नेचुरली बूस्ट करते हैं, जिससे सेक्स के दौरान थकावट महसूस नहीं होती और परफॉर्मेंस लगातार बनी रहती है।
                                </p>
                            </div>
                        </div>
                    </div>
                </div>


                <div className='px-2 rounded-xl overflow-hidden'>
                    <OrderNow />
                </div>

                <div className='p-2 sm:p-5'>
                    <div className=' bg-[#454545] rounded-xl overflow-hidden'>
                        <div className='p-7'>
                            <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/0f7e3403-a4b9-4286-b194-959321a2b200/public" alt="asd" loading='lazy' className='w-full rounded-xl' />
                        </div>
                        <div className=''>
                            <div className='text-xl fontNoto relative'>
                                <div className={cn('bg-yellow-400 pt-2 transform translate-x-[-50%] translate-y-[-50%] left-[50%] -top-2 my-2 w-[360px] text-center absolute !font-black inline-block rounded-full ', gotu.className)}>एक्स्ट्रा राउंड के लिए एक्स्ट्रा स्टैमिना</div>
                                <p className='text-xl bg-white pt-8 px-2 pb-0 rounded-xl'>
                                    अब सेकंड राउंड के लिए रुकना नहीं पड़ेगा। यह फॉर्मूला शरीर को तुरंत रिकवर करने की ताकत देता है, जिससे एनर्जी बनी रहती है – और आप फिर से तैयार हो जाते हैं।
                                </p>
                            </div>
                        </div>
                    </div>
                </div>





                <div className='p-2 sm:p-5'>
                    <div className=' bg-[#454545] rounded-xl overflow-hidden'>
                        <div className='p-7'>
                            <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/1a40f384-b618-4dd0-b29c-224b0493b500/public" alt="asd" loading='lazy' className='w-full rounded-xl' />
                        </div>
                        <div className=''>
                            <div className='text-xl fontNoto relative'>
                                <div className={cn('bg-yellow-400 pt-2 transform translate-x-[-50%] translate-y-[-50%] left-[50%] -top-2 my-2 w-[360px] text-center absolute !font-black inline-block rounded-full ', gotu.className)}>जोश और उत्तेजना में अद्भुत बृद्धि</div>
                                <p className='text-xl bg-white pt-8 px-2 pb-2 rounded-xl'>
                                    सेक्स सिर्फ शरीर का नहीं, दिमाग का भी खेल है। यह प्रोडक्ट फोकस बढ़ाने और बेड पर आत्मविश्वास बढ़ाने में मदद करता है, जिससे हर बार परफॉर्मेंस बनती है ज़बरदस्त।
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>







            <div className='bg-[#c9c9c9] pt-3'>

                <p className='text-xl fontNoto p-3 text-[#c22222] font-bold'>
                    आज से ही भारत के इस सर्वश्रेष्ठ उत्पाद का सेवन शुरू कर दें ताकि अगली पारी तक आप जोश, स्टैमिना और पावर से भर जाएँ, सख्त औजार के साथ देर तक साथ निभा पाएं !
                </p>

                <div className='text-center'>
                    <div className={cn(' mx-auto bg-[#ecc424] inline-block  text-2xl font-bold text-center uppercase pt-2 pb-1 rounded-full px-5 my-3', slab.className)}>
                        Expert opinion
                    </div>
                    <div>
                        <div className='py-6 w-full overflow-hidden'>

                            <Slider {...settings} className=' sm:px-5 '>
                                <div>
                                    <YoutubeFrame vid={"lRwX-1q_R5Q?si=pA4mh8Bl1TwM2F3t"} />
                                </div>
                                <div>
                                    <YoutubeFrame vid={"h-3HVSbQAGA?si=_sFKMtPi8uoClbJJ"} />
                                </div>
                            </Slider>
                        </div>
                    </div>

                    <div className='pb-3'>
                        <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/0670a499-ad40-4c3e-9093-7ed902132300/public" alt="sdsdsd" loading='lazy' className='w-full' />
                    </div>


                    <div className='p-1 sm:p-3'>
                        <p className=' text-lg fontNoto px-2 text-start'>
                            "Horse Fire Tablet 100% के इस्तेमाल से पुरुष जोश, स्टैमिना, पावर और बेहतर इरेक्शन महसूस कर रहे है। अब वो भी लम्बा सेक्स एन्जॉय कर रहे है जो शीघ्रपतन के गंभीर रोगी थे। जो पुरुष लिंग को योनि में प्रवेश करने से पहले या महिला के स्पर्श मात्र से झड़ जाते थे। हमें गर्व है की हमने पिछले कुछ सालों में 30 लाख से ज्यादा भारतीय पुरुषों की यौन कमजोरी मिटाकर उनके जीवन में खुशहाली बढ़ाया है और गिनती हर मिनट बढ़ रही है।"
                        </p>
                    </div>
                </div>
            </div>




            <OrderNow />




            <div className='bg-[url(https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/939f70b2-442e-4833-0fe6-e2d1878c1d00/public)] text-center bg-size-[100%] px-2'>

                <div className={cn(' mx-auto bg-[#ecc424] inline-block  text-2xl font-bold text-center uppercase pt-2 pb-1 rounded-full px-5 my-3', slab.className)}>
                    right way of consumption
                </div>


                <div className='relative  sm:w-[90%] mx-auto sm:min-h-[130px] '>
                    <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/0cb8b5b2-2a99-4549-ce2a-ecaf4c24c900/public" alt="sdsdsd" loading='lazy' className='absolute py-2' />
                    <div className='w-[55%] ms-auto z-10 relative fontNoto flex items-center h-full min-h-[100px] sm:min-h-[130px] px-2'>
                        <div className='text-3xl sm:text-5xl pr-3 pt-3'>1</div>
                        <p className='ps-2 border-l-2 border-black text-start'>
                            सुबह और रात्रि भोजन के बाद एक टेबलेट दूध/पानी के साथ
                        </p>

                    </div>
                </div>


                <div className='relative  sm:w-[90%] mx-auto sm:min-h-[130px] '>
                    <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/6b560713-4497-41f0-b2ac-3bb80f7ad400/public" alt="sdsdsd" loading='lazy' className='absolute py-2' />
                    <div className='w-[55%] ms-auto z-10 relative fontNoto flex items-center h-full min-h-[100px] sm:min-h-[130px] px-2'>
                        <div className='text-3xl sm:text-5xl pr-3 pt-3'>2</div>
                        <p className='ps-2 border-l-2 border-black text-start'>
                            बेहतर परिणाम के लिए 1 गिलास दूध के साथ लें
                        </p>

                    </div>
                </div>


                <div className='relative  sm:w-[90%] mx-auto sm:min-h-[130px] '>
                    <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/9a271946-f0d9-4c17-1dcf-9c026b0c9300/public" alt="sdsdsd" loading='lazy' className='absolute py-2' />
                    <div className='w-[55%] ms-auto z-10 relative fontNoto flex items-center h-full min-h-[100px] sm:min-h-[130px] px-2'>
                        <div className='text-3xl sm:text-5xl pr-3 pt-3'>3</div>
                        <p className='ps-2 border-l-2 border-black text-start'>
                            एक महीने के अंदर सेक्स प्रदर्शन में सुधार अनुभव करें
                        </p>

                    </div>
                </div>







                <div className={cn(slab.className, "text-3xl text-start py-5 px-2 uppercase text-white")}>
                    success stories...
                </div>

                <Youtube />


                <div className='p-2 text-start'>
                    <span className={cn(slab.className, 'text-2xl sm:text-3xl text-[#f9d511] uppercase')}>horse fire tablet</span>
                    <span className='text-2xl sm:text-3xl text-white fontNoto'>&nbsp; की बढ़ती लोकप्रियता को देखते हुए मार्केट में कुछ नकली विक्रेता आ गए है। ध्यान से<span className={cn(slab.className, 'text-2xl sm:text-3xl text-[#f9d511] uppercase')}> AR Ayurveda</span> ब्रांड देखकर ही प्रोडक्ट खरीदें !</span>

                </div>


                <div className='p-2'>
                    <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/771da063-0f28-4d36-77f9-50782b043700/public" alt="dsdsd" loading='lazy' className='w-full' />
                </div>

                <div className='py-2'>
                    <Form />
                </div>


            </div>



























        </div>
    )
}

export default Header
