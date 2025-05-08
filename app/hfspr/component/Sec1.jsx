import { Noto_Serif_Devanagari } from 'next/font/google';
import React from 'react'
import { Medicine, Purush } from './Helper';
import dynamic from 'next/dynamic';

const noto = Noto_Serif_Devanagari({
    subsets: ['devanagari'],
    display: 'swap',
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});


const Order = dynamic(() => import('./OrderNow'));

const Sec1 = () => {
    return (

        <div className={noto.className}>





            <div className='bg-[url(https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/4cb1f500-c131-4615-40dd-0f2c97e8ee00/public)] '>

                <h1 className={`text-white text-3xl sm:text-5xl font-semibold py-10 leading-tight sm:py-20 text-center ${noto.className} `}>पुरुष की प्रमुख <span className=' text-red-600'>सेक्स कमजोरियां</span></h1>

                <div className='grid grid-cols-2 sm:grid-cols-4 sm:w-[80%] mx-auto gap-5 rounded-xl px-2'>

                    {
                        Purush(
                            [
                                {
                                    img: "https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/f68a645e-6ed6-4823-44c8-eb1cedb99500/public",
                                    title: "लो टेस्टोस्टेरोन, लो स्टैमिना"
                                },
                                {
                                    img: "https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/65bd6f9d-f2bd-4578-82ad-e974b43e0300/public",
                                    title: "छोटा, ढीला व कमजोर लिंग"
                                },
                                {
                                    img: "https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/3cef2e63-a073-40db-1419-8e92fe893b00/public",
                                    title: "शीघ्रपतन, 2-4 मिनट टाइमिंग"
                                },
                                {
                                    img: "https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/14bfca3d-51c7-4e5f-a889-f08094cb3500/public",
                                    title: "जोश और उत्तेजना की कमी"
                                },
                            ]
                        )}

                </div>



                <h1 className='text-5xl sm:text-6xl text-white text-center font-bold pt-8'>विस्तार से समझे !</h1>

                <div className='grid grid-cols-1 sm:grid-cols-2 sm:w-[70%] mx-auto items-center pb-4'>

                    <div className='w-full'>
                        <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/1eab9520-938f-478e-5d2e-5a387279b000/public" alt="asd" loading='lazy' className='sm:w-[90%] mx-auto' />
                    </div>

                    <div className='text-xl sm:text-2xl text-white sm:my-10 px-2'>
                        <p>
                            टेस्टोस्टेरोन पुरुष का प्रमुख सेक्सुअल हॉर्मोन है जिसकी कमी होने से लो लीबीदो, और लो इरेक्शन (लिंग ढीलापन) की समस्या होती है। दरअसल टेस्टोस्टेरोन के रिलीज होने ने पेनाइल एरिया में रक्त प्रवाह बढ़ जाता है और लिंग जो नसों का जत्था है वो रक्त से भर के पूर्ण इरेक्शन प्राप्त करता है।
                        </p>

                        <p className='py-5'>
                            सेक्सुअली कमजोर पुरुष की जब शादी होती है तो वे स्ट्रेस फील करते है की वो सुहागरात पर अपनी मर्दानगी कैसे साबित करेंगे? जिसे परफॉरमेंस प्रेशर की तौर पर जाना जाता है। ऐसे में लिंग सही से सख्त नहीं होता है और पुरुष बहुत जल्दी स्खलित हो जाते है और शर्मिंदगी महसूस करते है।
                        </p>

                        <p>
                            जब पुरुष सेक्स से पहले तनाव महसूस करता है तो कॉर्टिसोल नामक नकारात्मक हॉर्मोन रिलीज होता है जो लिंग इरेक्शन को बाधित करता है और साथ ही सेक्स टाइमिंग को और ज्यादा कम कर देता है।
                        </p>
                    </div>

                </div>




            </div>




            <div className='bg-[url(https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/d695f9ec-ec8d-4bb4-1228-c5c3c2725000/public)] bg-center bg-no-repeat bg-cover'>





                <p className='sm:w-[70%] mx-auto text-xl py-5 sm:py-10 px-5 font-semibold'>
                    इन समस्याओं को ध्यान में रखते हुए 17 शक्तिशाली जड़ीबूटियों के मिश्रण से HORSE FIRE TABLET बना है, जो सेक्स टाइमिंग और लिंग की मजबूती बढ़ाएगा और जीवन से निराशा मिटाएगा। प्रत्येक जड़ीबूटी सेक्स पावर बूस्ट करने के लिए वैज्ञानिकी परीक्षण में सिद्ध है। इसका फार्मूलेशन लेवल और सफलता दर अविश्वसनीय है जो इसे दूसरो से अलग बनाता है।
                </p>




                <div className='grid grid-cols-1 sm:grid-cols-6 items-center w-[90%] sm:w-[70%] mx-auto  sm:gap-10 sm:py-10 pb-5'>

                    <div className='col-span-2 order-1 sm:order-1 grid grid-cols-2 sm:block mb-5'>

                        {
                            Medicine("अश्वगंधा", "https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/26ee61f6-495e-41aa-8389-670e22172f00/public", "स्ट्रेस कम करे, स्ट्रेंथ और स्टैमिना बढाए")
                        }

                        {
                            Medicine("शिलाजीत", "https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/3fd4e78b-eec7-45a5-f3db-867d7f224100/public", "टेस्टोस्टेरोन व लिंग की सख्ती बढ़ाए")
                        }


                    </div>
                    <div className='col-span-2 order-1 sm:order-2'>
                        <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/8743d3c9-3b11-4db3-daf7-91f70e9b6e00/public" alt="sdf" loading="lazy" />
                    </div>



                    <div className='col-span-2 order-3 sm:order-3 grid grid-cols-2 sm:block'>

                        {
                            Medicine("सफ़ेद मूसली", "https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/7546beca-f562-4507-7c02-a7f2b67c3f00/public", "एनर्जी और सेक्स टाइमिंग बढ़ाए")
                        }

                        {
                            Medicine("गोक्षुरा", "https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/49585af3-e5cd-47ba-b8d9-a31e0594bf00/public", "लिंग की नसों और मसल्स को रिलैक्स करे")
                        }


                    </div>

                </div>



                <div className='text-center text-black'>
                    <Order />
                </div>

            </div>






        </div>


    )
}

export default Sec1
