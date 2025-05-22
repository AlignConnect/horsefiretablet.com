import dynamic from 'next/dynamic';
import React from 'react'


const Ordernow = dynamic(() => import("./Ordernow"));


const Content = () => {



    const Proudly_say = [
        {
            img: 'https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/da147b04-0545-4f24-555e-b4a31cfc6400/public',
            content: 'को लिंग में भरपूर कड़कपन मिलती है।',
        },
        {
            img: 'https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/9e2d1eb3-4cdb-4a42-a713-52d65912ac00/public',
            content: 'पुरुषों के सेक्स टाइमिंग में बृद्धि होती है।',
        },
        {
            img: 'https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/f6050fb2-bb7e-4ebc-1c6a-ea96b0353600/public',
            content: 'पुरुष लिंग में सख्ती और उत्तेजना पा रहे है।',
        }
    ]



    const need_women = (arr) => {
        return arr?.map((e, key) => {
            return <div className='grid grid-cols-12 items-center py-2' key={key}>

                <img src={e.gif} className="col-span-5 rounded-full sm:w-32 sm:h-32 w-28 h-28 mx-auto" alt="" />


                <div className='col-span-7 fontNoto text-white sm:text-2xl text-lg font-semibold pr-3'>
                    <div
                        dangerouslySetInnerHTML={{ __html: e.title }}
                    />
                </div>

            </div >
        })
    }




    const list = [
        {
            title: 'COD PAYMENT AVAILABLE',
            image: 'https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/6b084984-f03a-4abd-aee5-37b5409c0a00/public',
        },
        {
            title: "97.6% SUCCESS RATE",
            image: 'https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/303d7498-d4b9-41e1-b88e-5b210a2b8500/public',
        },
        {
            title: 'LISTED ON FLIPKART, AMAZON',
            image: 'https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/23998f42-2fda-4331-2bd1-bc609129b600/public',
        },
        {
            title: '+30 LAKH SATISFIED CUSTOMER',
            image: 'https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/a04cf07a-6d6c-4d8a-70b6-a77a1e50f000/public',
        },
    ]


    return (
        <section>

            <div className="sm:hidden block">
                <Ordernow />

            </div>

            <div className="fontNoto ">

                <div className="proud_hftsz_bg">


                    <div className="fontAlfa text-center py-8 text-4xl sm:text-4xl">
                        We Proudly Say
                    </div>


                    <div className="max-w-6xl mx-auto">
                        <div className="grid sm:grid-cols-3 sm:gap-8 px-2">
                            {
                                Proudly_say.map((e, key) => (
                                    <div className="flex items-center justify-center gap-3 sm:py-7 py-4 px-1" key={key}>

                                        <img src={e.img} alt="" className="w-28 mx-auto" />
                                        <div className=" font-extrabold sm:text-2xl text-xl italic ">
                                            {e.content}
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>


                    <div className="text-center py-7 font-extrabold sm:text-[1.5vw] text-xl px-3  leading-tight italic">
                        कुल मिलाकर Horse Fire Tablet का सेक्स समस्या में 97.6 सफलता दर है।
                    </div>

                </div>



                <div className="sm:hidden block">

                    <Ordernow />

                </div>



                <div className="bg-[#f1f1f1]">

                    <div className=' max-w-7xl mx-auto'>



                        <div className="grid sm:grid-cols-2 items-center gap-5 sm:py-14 py-5">

                            <div className="">
                                <div className="text-center sm:text-left  font-extrabold sm:text-[2.5vw] text-3xl px-3 py-3 leading-tight">
                                    <strong className='text-[#a72d30]'>Horse Fire Tablet</strong> दुसरो से अलग क्यों है?
                                </div>
                                <p>
                                    क्योंकि इसे बनाते समय यौन कमजोरी के सभी फैक्टर पर ध्यान दिया जाता है और उन जड़ीबूटियाँ को चुना जाता है जो सेक्सवर्धक और शक्तिवर्धक प्रमाणित है। Horse Fire में अश्वगंधा, शिलाजीत, गोक्षुरा, सफ़ेद मूसली और केसर जैसी 17 जड़ीबूटियां और भस्म शामिल है।  Horse Fire Tablet आयुष, FDA, और GMP प्रमाणित है। सबसे बड़ी बात हम ग्राहक संतुष्टि पर काम करते है, कस्टमर फीडबैक लेते है और हर रोज Horse Fire Tablet को और बेहतर बनाने के लिए रिसर्च करते है।
                                </p>
                            </div>
                            <div className="">
                                <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/4d2575b2-ea9a-43e4-7125-adaeef37f100/public" alt="" className='sm:w-5/6 w-full mx-auto px-2' />
                            </div>

                        </div>


                    </div>


                </div>


                <Ordernow />


                <div className='bg_black_hftsz'>

                    <div className="w-full sm:max-w-6xl mx-auto sm:py-7 py-6">


                        <div className=" grid sm:grid-cols-2 items-center justify-center sm:py-6 py-2 gap-10">

                            <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/aab426fd-fac6-432f-0cea-8b6dcbdcd900/public" alt="" className='w-full px-2 mx-auto' />


                            <div className="">
                                {
                                    need_women([
                                        {
                                            gif: "https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/5310bcd9-9853-49ee-928b-03ede3cacc00/public",
                                            title: "सख्त और तगड़ा लिंग देर तक"
                                        },
                                        {
                                            gif: "https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/f365151f-86fc-4e72-409d-633a897bab00/public",
                                            title: "45 Min+ लम्बी सेक्स टाइमिंग"
                                        },
                                        {
                                            gif: "https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/23069d82-d803-4fce-3993-651c4bc14600/public",
                                            title: "एक्स्ट्रा राउंड के लिए एक्स्ट्रा स्टैमिना"
                                        },
                                        {
                                            gif: "https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/dd019f8c-a0e9-451f-1264-7db2c2d6aa00/public",
                                            title: "जोश और उत्तेजना में अद्भुत बृद्धि"
                                        },
                                    ])
                                }
                            </div>

                        </div>

                    </div>
                </div>

                <Ordernow />


                <div className="bg-[#420f0f]">

                    <div className="w-full sm:max-w-7xl mx-auto sm:py-16 py-10">

                        <div className="grid sm:grid-cols-2 items-center justify-center gap-5">

                            <div className="">
                                <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/91d2ae7a-894a-4724-ce73-03066b5d3f00/public" alt="" className='w-full px-2' />
                            </div>

                            <div className="">
                                <div className="text-justify text-white py-7 font-extrabold sm:text-[1.7vw] text-xl px-3  leading-tight">
                                    आज से ही भारत के इस सर्वश्रेष्ठ उत्पाद का सेवन शुरू कर दें ताकि अगली पारी तक आप जोश, स्टैमिना और पावर से भर जाएँ, सख्त औजार के साथ देर तक साथ निभा पाएं !
                                </div>
                            </div>

                        </div>

                    </div>

                </div>



                <div className="proud_hftsz_bg">



                    <div className="w-full sm:max-w-6xl mx-auto sm:py-16 py-10">

                        <div className="grid sm:grid-cols-4 grid-cols-2 sm:gap-8 gap-4 px-2">
                            {
                                list.map((e, key) => (
                                    <div className="" key={key}>

                                        <img src={e.image} alt="" className="w-28 mx-auto" />
                                        <div className=" font-extrabold sm:text-[1.3vw] text-lg sm:pt-4 pt-2 text-center fontPoppins leading-tight">
                                            {e.title}
                                        </div>
                                    </div>
                                ))
                            }
                        </div>

                    </div>

                </div>




            </div>


        </section>
    )
}

export default Content