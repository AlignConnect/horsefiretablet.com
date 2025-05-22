import CommonImg from '@/app/components/CommonImg';
import dynamic from 'next/dynamic';
import React from 'react'
import { FaQuestion } from "react-icons/fa";
import { MdDoubleArrow } from "react-icons/md";


const Inquiry = dynamic(() => import('./Inquiry'), {
    loading: () => <p>loader</p>
});

const MostSelling = dynamic(() => import('@/app/commonUse/mostSelling/most_selling_1'), {
    loading: () => <p>loader</p>
  });

const Second_cont = () => {


    const problems = (arr) => {

        return arr?.map((e, key) => {

            return <div className='mx-5 sm:mx-24 grid grid-cols-12 items-center justify-center' key={key}>

                <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/13e96ad9-c5de-4b8e-f6a0-080cf929de00/public" alt="" className='col-span-2 w-1/2 sm:w-10 mx-auto' />

                <div className='col-span-10 border border-solid border-white pt-2 text-xl sm:text-2xl text-white font-semibold text-center my-2'>{e.problem_title}</div>
            </div >
        })
    }



    const Women_need = (arr) => {

        return arr?.map((e, key) => {

            return <div className='' key={key}>

                <div className='fontNoto text-xl sm:text-2xl text-white font-extrabold text-center pt-4'>
                    {e.title}
                </div>

                <img src={e.gif} alt="" className='w-2/3 sm:w-4/5 mx-auto rounded-md mb-3' />

            </div >
        })
    }



    const why_choose_us = (arr) => {

        return arr?.map((e, key) => {

            return <div className='' key={key}>

                <img src={e.icon} className='mx-auto sm:w-1/3 w-1/2 ' alt='img' loading="lazy" />

                <div className="pt-3">

                    <div className='fontPoppins md:text-2xl text-[1.1rem] font-extrabold text-center text-yellow-500'>{e.first_title}</div>

                    <div className=' md:text-xl text-md font-semibold text-center text-white'>{e.second_content}</div>

                </div>

            </div >
        })
    }




    const why_trust_us = (arr) => {

        return arr?.map((e, key) => {

            return <div className='bg-[#fff0d3] rounded-xl sm:h-[100%] my-3' key={key}>

                <img src={e.img_trust} alt="" className='w-1/2 sm:w-[30%] h-[60%] py-5 mx-auto' />

                <div className="">

                    <div className='sm:text-2xl text-xl font-extrabold text-center'>{e.title_trust}</div>

                    <div className='sm:text-2xl text-xl font-extrabold text-center'>{e.second_title_trust}</div>
                </div>

            </div >
        })
    }



    return (
        <section className='fontNoto'>

            <div className=' bg-black px-2 py-4'>

                <div className="grid grid-cols-2 gap-2 items-center justify-center bg-[#363636] rounded-2xl border border-solid border-white">

                    <div className=" px-2 pb-2">
                        <p className='text-white font-semibold text-[1.1rem] pt-2 sm:text-[1.5rem] text-center '>
                            क्या आप भी उन पुरुषों में से है जो ये <span className='text-[#20e5fc] font-semibold'>यौन समस्याए</span> महसूस करते है सेक्स से बीवी या गर्लफ्रेंड को संतुष्टि नहीं दे पाते और सेक्स लाइफ में <span className='text-[#20e5fc] font-semibold'>निराश है।</span>
                        </p>
                        <FaQuestion color='#20e5fc' className='question_mark' />
                    </div>

                    <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/b2df97cf-f770-4cfd-5b3e-85f2e4f49e00/public" alt="" className='w-full h-[240px] sm:h-full' />

                </div>

            </div>


            <div className='fontNoto bg-[#363636] px-2 py-6'>

                {
                    problems([
                        {
                            problem_title: 'छोटा लिंग और ढीलापन'
                        },
                        {
                            problem_title: 'शीघ्रपतन, टाइमिंग की समस्या'
                        },
                        {
                            problem_title: 'जोश, स्टेमिना,और उर्जा की कमी'
                        },
                        {
                            problem_title: 'लो लीबीडो, कामेच्छा की कमी'
                        },
                        {
                            problem_title: 'या फिर अन्य धातु रोग की समस्या'
                        },
                        {
                            problem_title: 'सेक्स से पहले परफॉरमेंस प्रेशर'
                        }
                    ])
                }

                <Inquiry />

            </div>

            <div className='fontNoto bg-[#363636] px-2 py-2'>

                <div className="bg-black rounded-xl">



                    <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/fa8324f0-8d68-444e-d2e0-da7a35e44400/public" alt="" className='w-full p-5' />


                    <p className='text-white font-semibold text-[1rem] py-4 sm:text-[1.4rem] text-justify px-3  '>
                        अगर इन समस्याओं से परेशान है तो समझिये आप बेड पर एक <span className='text-yellow-500 font-semibold'>नाकाम पति/प्रेमी</span> है। ऐसे में आप उसे सेक्स में संतुष्ट नहीं कर सकते। उनके दिल में आपके लिए प्यार कम जो सकता है और वो  <span className='text-yellow-500 font-semibold'>आपका ऑप्शन</span> ढूंढ सकती है। जो आजकल रिलेशनशिप में होता भी है, बस बहाना कुछ और होता है।
                    </p>
                </div>

            </div>


            <div className="bg-black py-4">

                <div className=" grid grid-cols-12 px-2 items-center justify-center ">


                    <div className="col-span-6">

                        <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/7009fa05-1ae6-4375-f77b-cf704d8c4500/public" alt="" className='w-full ' />

                        <div className="fontBona sm:text-3xl text-[1.3rem] bg-yellow-500 text-center py-1 font-extrabold ">
                            Female Like's
                        </div>
                    </div>

                    <div className="col-span-6">

                        {
                            Women_need([
                                {
                                    title: "दमदार पुरुष",
                                    gif: "https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/13734a96-206a-4f9e-265b-940265509900/public"
                                },

                                {
                                    title: "बड़ा-मोटा लिंग",
                                    gif: "https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/c9ac4f3b-03ba-40bf-84f2-4975380e1f00/public"
                                },

                                {
                                    title: "ऑर्गेज़्म तक सेक्स",
                                    gif: "https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/8a42302f-8ee1-4ce7-21c5-a30fc5114700/public"
                                }
                            ])
                        }

                    </div>

                </div>

                <Inquiry />
            </div>



            <div className="px-2 bg-black py-2">
                <div className="  border border-dashed p-3 border-yellow-400  ">

                    {/* <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/7b3e6326-8160-428d-c23e-0521f1821200/public" alt="" className='w-full sm:w-3/4 mx-auto py-3' /> */}

                    <p className='text-white font-semibold text-[1rem] pt-2 sm:text-[1.2rem] text-justify'>
                        पर निराश होने की जरुरत नहीं है। आज के समय में लाखों पुरुष <span className='text-[#20e5fc]'>"हॉर्सफायर टेबलेट"</span> के इस्तेमाल से <span className='text-[#20e5fc]'>स्टैमिना, पावर, लिंग का आकार</span> और <span className='text-[#20e5fc]'>सेक्स अवधि</span> आसानी से बढ़ाकर अपने कॉन्फिडेंस को बूस्ट कर रहे है और सेक्स में कर रहे है धमाकेदार प्रदर्शन !
                    </p>
                </div>
            </div>

            <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/aab6456c-62b5-4b3d-e31b-30999daacb00/public" alt="" className='w-full' />


            <div className='bg-[#363636] py-4'>
                <div className='grid grid-cols-3 gap-2 items-center justify-center'>
                    {
                        why_choose_us([
                            {
                                icon: "https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/d2e620ee-1632-40a4-46c1-3c9ea86bcb00/public",
                                first_title: "20 लाख +",
                                second_content: "संतुष्ट ग्राहक"
                            },
                            {
                                icon: "https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/99b01a30-73b6-4b0f-0dcc-10f2f8d54c00/public",
                                first_title: "10 DAYS",
                                second_content: "मनी बैक गारंटी"
                            },
                            {
                                icon: "https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/e3dedb07-b22b-4712-c725-41b11492b100/public",
                                first_title: "100%",
                                second_content: "प्रामाणिक प्रोडक्ट"
                            },
                        ])
                    }
                </div>
            </div>

            <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/5735984a-874f-4069-b7ed-82ae4a4ee000/public" alt="" className='w-full' />


            <div className="bg-black">

                <Inquiry />


                <div className="grid grid-cols-2 gap-2 items-center justify-center py-5 px-2">

                    {
                        why_trust_us([
                            {
                                img_trust: "https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/7c39f320-679c-408d-ebd8-6c12164a0600/public",
                                title_trust: "100% ",
                                second_title_trust: "मनी बैक गारंटी"
                            },
                            {
                                img_trust: "https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/6ff5d469-e0ae-4505-181a-6ec20bab4600/public",
                                title_trust: "India's No.1 ",
                                second_title_trust: "शक्तिवर्धक उत्पाद"
                            },
                            {
                                img_trust: "https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/7031792d-1f91-4c15-392f-588ddec64900/public",
                                title_trust: "COD पेमेंट ",
                                second_title_trust: " सुविधा उपलब्ध"
                            },
                            {
                                img_trust: "https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/bfa96a52-3efe-4431-1f64-bed718f07400/public",
                                title_trust: "Amazon, Flipkart ",
                                second_title_trust: "पर लिस्टेड"
                            }
                        ])
                    }
                </div>

            </div>

            <div className="bg-gray-600 ">

            <MostSelling />


                <Inquiry />
            </div>



            <div className="mx-auto bg-gray-600 py-5">

                <div className="text-xl text-yellow-400 uppercase py-2 font-extrabold fontPoppins text-center">
                    doctor recommendation
                </div>

                <iframe className="mx-auto w-[345px] h-[200px] md:w-[650px] md:h-[350px] rounded-xl" src="https://www.youtube.com/embed/rf51nF8mlb0?si=tDzf7BVE3IyUZwr" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
            </div>

            <div className='bg-black py-3'>
                <div className=" border border-dashed p-3 border-yellow-400">
                    <p className='text-[#20e5fc] font-semibold text-[1rem] pt-2 sm:text-[1.2rem] text-center'>
                        अगर आप भी फौलादी लिंग और ज्यादा स्टैमिना, ज्यादा सेक्स से पार्टनर को ख़ुशी देना चाहते है और सेक्सुअल लाइफ का मजा उठाना चाहते है तो <span className='text-yellow-500 '>Horsefire Tablet</span> का सेवन जल्द से जल्द शुरू करें!
                    </p>
                </div>

                <div className="bg-gray-400 ">
                    <div className="max-w-3xl mx-auto relative mt-[5rem] md:mt-[12rem] px-2">
                        <div className={`flex flex-col md:text-3xl text-[1.1rem] items-end mr-4 uppercase text-black fontPoppins py-5`}>
                            <h1 className="font-bold "> upto 50% off </h1>
                            <p className=""> Limited offer!!! </p>
                        </div>
                        <div>
                            <div className="absolute bottom-0 w-2/4 px-2">
                                <CommonImg imglink="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/7e66a9c3-60ab-44b7-80cf-27bbe2096800/public" />
                            </div>
                        </div>
                    </div>
                </div>

            </div>





        </section>
    )
}

export default Second_cont