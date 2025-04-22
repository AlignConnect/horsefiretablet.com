import dynamic from 'next/dynamic';
import { Noto_Serif_Devanagari } from 'next/font/google';
import React from 'react'
import { CiCircleCheck } from "react-icons/ci";
import { TbCircleCheckFilled } from 'react-icons/tb';


const OrderNow = dynamic(() => import('./FlipAmazon'));

const noto = Noto_Serif_Devanagari({
    subsets: ['devanagari'],
    display: 'swap',
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});

const Sec1 = () => {

    const imTitle = () => {


        const v = [
            {
                title: "सेक्स टाइम 10x बढ़ सकता है",
                im: "https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/d937f52b-d012-4ea4-33a8-00c2e8d26100/public"
            },

            {
                title: "लम्बाई 15 दिनों में 5 CM तक",
                im: "https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/5dc52b7e-a871-4ce4-4d6d-887c8657d300/public"
            },
            {
                title: "कड़कपन 2x बढ़ जाएगी",
                im: "https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/a69f0762-7194-4ea7-8bb8-24e9d14f5800/public"
            },
            // {
            //     title: "मोटाई 1.5 से 2 CM तक",
            //     im: ""
            // },
            {
                title: "4x स्टैमिना और एनर्जी",
                im: "https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/c1b1843c-e851-4aac-d948-c84d06881100/public"
            }
        ]

        return v.map((e, key) => {

            return <div key={key} className='text-black my-2'>

                <div className='flex items-center'>
                    <div className={`${key % 2 === 0 ? 'order-1' : 'order-2'} z-40 `}>
                        <img src={e.im} alt="asd" loading='lazy' className={`${key === 2 && 'rotate-1'} w-[100%] relative  rounded-full}`} />
                    </div>

                    <div className={`${key % 2 === 0 ? 'order-2 right-4' : 'order-1 left-4'} relative z-10`}>
                        <p className='text-[19px] pt-2 w-[255px] text-center bg-white px-4 font-bold '>{e.title}</p>
                    </div>
                </div>

            </div>



        })


    }

    return (


        <section className={`${noto.className} w-full overflow-hidden `}>

            <div className='bg-gradient-to-b from-[#ffdf01] to-[#f5ebd0] '>
                <div className={"py-12 bg-[url(https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/2bd2e3e3-0ad2-4baa-d96e-1a4a41907600/public)] bg-cover bg-no-repeat "}>
                    <ul className='flex flex-col justify-start w-[90%] md:w-[60%] mx-auto gap-1 z-50'>
                        {imTitle()}
                    </ul>
                </div>
            </div>


            <div className='bg-[#f5ebd0] pt-5 pb-3 '>


                <div className=' py-5 bg-[url(https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/1950e9f4-d7e9-4ab1-6e29-715962fd9c00/public)] bg-contain bg-no-repeat text-center text-2xl text-white  font-bold w-[350px] mx-auto'>
                    बेवफाई की सच्चाई !
                </div>

                <p className='text-lg font-bold px-3 italic'>
                    "अगर कोई पुरुष अपनी महिला पार्टनर को संतुष्ट करने में नाकाम है तो वह बेहतर की तलाश तलाश करेगी जो उसकी प्यास बुझा सके !"
                </p>

                <p className='px-2 text-lg'>
                    आज के समय कमजोर पति या बॉयफ्रैंड से तंग आकर महिला दूसरे पुरुष के संपर्क में आ जाती है, ऐसी न्यूज़ या घटना आप सब से सुनी होगी। शादी के बाद  अपने पति को धोखा देना यौन कमजोरी का एक जिवंत उदाहरण है। महिलाये यौन संतुष्टि के लिए अपने पार्टनर से बेवफाई करती है।
                </p>





            </div>

            <div>
                <OrderNow />
            </div>


            <div className='p-2'>
                <h1 className='text-[#ffe900] text-center border border-dashed border-white pt-2 px-3 text-2xl font-black'>साइज या टाइमिंग बढ़ाने का जोखिम भरा तरीका</h1>
            </div>

            <div className='md:flex md:items-center'>
                <div className='md:w-[700px] me-auto my-5'>

                    <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/85743a65-c421-4696-209c-882dfc73bb00/public" alt="asd" loading='lazy' className='w-[210px] hidden md:block' />
                    <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/a2d83618-8761-45f4-5a3e-ccd5f3a44200/public" alt="asd" loading='lazy' className='w-[210px] mx-auto block md:hidden' />

                </div>
                <div className=' text-white p-3'>
                    <p className='text-lg'>
                        कई पुरुष साइज बढ़ाने के लिए सर्जरी का ऑप्शन और टाइमिंग के लिए वायग्रा चुनते है। जबकि एक्सपर्ट्स इससे बचने की सलाह देते है। चूँकि लिंग नसों का जमावड़ा है अगर सर्जरी सफल न हुआ तो पेनाइल कैविटीस क्षतिग्रस्त हो जाएंगी, वही वायग्रा के सेवन से किडनी, दिल और ब्लड प्रेशर की समस्या हो सकती है।
                    </p>
                </div>
            </div>


            <div>
                <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/71cd52ed-4ad5-4a93-2f63-a904cf6d2800/public" alt="asd" loading='lazy' />
            </div>


            <div className='flex items-center py-3 p-2'>
                <div className='w-[50%] text-white'>
                    <p className='pt-3 px-2 md:font-bold text-lg md:text-xl'>
                        सर्जरी और वायग्रा के मुकाबले Horse Fire  लिंग और सेक्स टाइम बढ़ाने का एकमात्र सरल और सुरक्षित तरीका है।
                    </p>
                </div>
                <div className='w-[50%]'>
                    <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/42215e16-4893-4e32-f5a2-f10237627500/public" alt="asd" loading='lazy' className='w-full' />
                </div>
            </div>


            <div className="relative">

                <div className='grid grid-cols-9 items-end relative z-10'>

                    <div className='col-span-9 md:col-span-5'>
                        <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/2b267583-c5ed-4eff-6564-f3e76179b800/public" alt="asd" loading='lazy' className='w-full' />
                    </div>



                    <div className='col-span-9 md:col-span-4'>

                        <p className='text-white py-4 px-2 text-lg'>
                            इससे नाइट्रिक ऑक्साइड और टेस्टोस्टेरोन का निर्माण तेजी से होता है। लिंग के कॉर्पस केवरोसोम में रक्त प्रवाह बढ़ाता है और कोशिकाओं का निर्माण करता है जिससे लिंग के नसों का फैलना, साइज का बढ़ना आसान हो जाता है।
                        </p>
                        <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/8aa30f04-de97-42c9-3fec-1e318a6ae400/public" alt="asd" loading='lazy' className='w-[180px] pb-2 ms-auto hidden md:block' />


                    </div>


                </div>
                <div className="absolute bottom-0 w-full bg-white invisible md:visible h-0 sm:h-14"></div>
            </div>




        </section>


    )
}

export default Sec1