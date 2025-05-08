import dynamic from 'next/dynamic';
import React from 'react'
import { FaBahai } from "react-icons/fa";


const OrderNow = dynamic(() => import('./OrderBtn'), {
    loading: () => <p>Content is Loading</p>
});

const MostSelling = dynamic(() => import('@/app/commonUse/mostSelling/most_selling_1'), {
    loading: () => <p>loader</p>
  });

const SecondCont = () => {

    const reason_to_buy = (arr) => {
        return arr?.map((e, key) => {
            return <div className='' key={key}>
                <div className=" ">
                    <img src={e.icons} className="sm:w-52 w-full mx-auto" alt="icons" />
                </div>
                <div className='text-yellow-400 fontBebas sm:text-[1.2vw] text-[1rem] text-center leading-tight'>
                    <div
                        dangerouslySetInnerHTML={{ __html: e.title }}
                    />
                </div>
            </div >
        })
    }


    const Herbs = (arr) => {
        return arr?.map((e, key) => {
            return <div className='fontAnek ' key={key}>
                <div className=" flex items-center  gap-3 py-2">
                    <img src={e.herb_img} className="sm:w-24 " alt="herbs" />

                    <div className="">
                        <div className='text-yellow-400 text-2xl font-semibold'>{e.herbs_name}</div>
                        <p className='p-0 text-[0.9rem] sm:text-xl '>{e.herbs_cont}</p>
                    </div>

                </div>

            </div >
        })
    }


    const Benifits = (arr) => {
        return arr?.map((e, key) => {
            return <div className='fontAnek py-2' key={key}>
                <div className="grid justify-center">
                    <img src={e.benifit_img} className="w-full " alt="herbs" />
                    <div className='text-white sm:text-2xl text-lg font-semibold text-center'>{e.benifit_title}</div>
                </div>
            </div >
        })
    }


    const Right_way_to = (arr) => {
        return arr?.map((e, key) => {
            return <div className='fontAnek' key={key}>
                <div className="flex items-center gap-2 py-1 sm:px-6 px-2">
                    <FaBahai size={20} color='white' />
                    <div className='text-white sm:text-xl text-[1rem] pt-2'>{e.way_title}</div>
                </div>
            </div >
        })
    }


    return (
        <section className='bg-black'>

            <OrderNow />

            <div className="mb-5">
                <div className=" grid grid-cols-3 items-center justify-center">
                    {
                        reason_to_buy([
                            {
                                icons: "https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/145e3b98-d6cb-48ac-eb68-e829c692ef00/public",
                                title: "100% Money<br/> Back Guarantee"
                            },
                            {
                                icons: "https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/dac40d27-d9ad-41b9-0231-801407953d00/public",
                                title: "COD Payment<br/> Available"
                            },
                            {
                                icons: "https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/44910903-a6d2-48b6-186e-75d0b40ec100/public",
                                title: "Save 10% <br/>Extra on Prepaid"
                            }
                        ])
                    }

                </div>
            </div>


            <div className="relative w-full">
                <div className="relative">
                    <img
                        src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/9e7b36c7-66f1-4032-d023-bcfcec09c200/public"
                        alt="Image description"
                        className="w-full object-cover"
                    />
                    <div className=" fontAnek  absolute top-2 left-0 right-0 bottom-0 flex justify-center items-center bg-black bg-opacity-50 text-white px-5 sm:px-10 text-center sm:text-3xl text-[1.1rem] font-extrabold">
                        वैवाहिक जीवन में सालों-साल खुशहाली बरकरार रखना चाहते है तो इन बातों पर ध्यान दें!
                    </div>
                </div>
            </div>

            <div className="">
                <p>
                    महिला सेक्स इच्छा इतना प्रबल है, जो किसी कमजोर मर्द से शांत नहीं होती। औरते इसके लिए बड़े-कठोर लिंग और ज्यादा देर तक चलने वाले सेक्स की उम्मीद करती है। स्त्री में सेक्स की ऊर्जा जागृत करना ही मर्दों की सही अग्नि परीक्षा है, और यही पर हर कमजोर मर्द हर जाता है।
                </p>
                <p>
                    60-65 की उम्र में भी बिस्तर को वीर्य से तर करने वाले पुरुषों पर स्वयं कामदेव की कृपा होती है। आज के समय में एक्सपर्ट्स की नजर में वही सही सच्चा मर्द है, जो बिस्तर पर औरत को अच्छे से निचोड़ पायें, नहीं तो औरत आदमी को सिरदर्द समझने लगती है।
                </p>
                <p>
                    आयुर्वेदिक शास्त्रों में नामर्दी-नपुंसकता से मुक्ति के लिए कुछ कारगर औषधियों का उल्लेख है, जिन्हें <span className='text-yellow-400'>Horse Fire Tablet</span> में विशेष विधि-विधान से समावेश किया है। यह कमजोर कोशिकाओं को ताकत देकर, नसों को रिलैक्स कर और मजबूती देकर लिंग को मजबूत तथा कठोर बनाता है।
                </p>
            </div>



            <div className="bg-[#1a1a1a] sm:mx-20 mx-2 rounded-xl p-2 my-2">
                <div className="p-2 grid justify-center border border-dashed border-white rounded-xl">
                    {
                        Herbs([
                            {
                                herb_img: "https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/c363362a-2a9b-49cd-9019-8caa345e0500/public",
                                herbs_name: "शिलाजीत",
                                herbs_cont: " टेस्टोस्टेरोन व लिंग की सख्ती बढ़ाए"
                            },
                            {
                                herb_img: "https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/d8532d3a-207f-41bc-bde3-6fb96acee200/public",
                                herbs_name: "अश्वगंधा",
                                herbs_cont: " स्ट्रेस कम करे और स्टैमिना बढाए"
                            },
                            {
                                herb_img: "https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/d44515d6-852f-48bc-9e74-de073cefc300/public",
                                herbs_name: "सफ़ेद मूसली",
                                herbs_cont: " एनर्जी और सेक्स टाइमिंग बढ़ाए"
                            },
                            {
                                herb_img: "https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/fa0186a9-5263-41fa-51e4-0a9c61254500/public",
                                herbs_name: "गोक्षुरा",
                                herbs_cont: " लिंग की नसों और मसल्स को रिलैक्स करे"
                            }

                        ])
                    }
                </div>


            </div>

            <p className=''>
                <span className='text-yellow-400 '>Horse Fire Tablet</span> में 17 बेहद असरदार और प्रमाणित हर्ब्स शामिल है, जो आपके यौन प्रदर्शन को शिखर पर ले जाने का काम करती है।
            </p>

            <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/1819dbfc-e963-48ae-e725-5cf81a16b900/public" alt="" className='w-full pb-2' />

            <OrderNow />

            <p className='mt-3'>
                अगर घोड़े या साढ़ जैसी मर्दाना ताकत की ख्वाहिश हो, तो <span className='text-yellow-400 '> AR Ayurveda</span> द्वारा निर्मित <span className='text-yellow-400 '>Horse Fire Tablet</span>  को मात्र 3 महीने नियमित खा लेने से सेक्स पॉवर कभी कम नहीं होगा और आप सेक्स के प्रो प्लेयर बन जायेंगे। जोश और उर्जा इतना हाई होगा की देख कर पार्टनर दंग रह जाएगी और बड़े लिंग के हर शॉट से कराह उठेगी।
            </p>

            <div className="">
                {
                    Benifits([
                        {
                            benifit_img: "https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/af62398e-379d-44c9-0d54-75dd1cd1de00/public",
                            benifit_title: "लम्बी सेक्स अवधि जोरदार प्रदर्शन"
                        },
                        {
                            benifit_img: "https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/597b7a44-4f6a-49b0-5577-d7265a20f600/public",
                            benifit_title: "लिंग की लम्बाई और सख्ती में वृद्धि"
                        },
                        {
                            benifit_img: "https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/ef3654ef-d120-4414-a8d3-a625c4fbc100/public",
                            benifit_title: "बार बार सेक्स करने की उत्तेजना "
                        },
                        {
                            benifit_img: "https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/21272880-bfa9-4c95-a1f0-dedfea306900/public",
                            benifit_title: "दमदार स्टैमिना और भरपूर शक्ति "
                        }
                    ])
                }
            </div>


            <div className="relative w-full">
                <div className="relative">
                    <img
                        src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/740b4d7f-270b-4830-2813-e5a1f09eef00/public"
                        alt="Image description"
                        className="w-full h-[100px]"
                    />
                    <div className=" fontAnek  absolute top-2 left-0 right-0 bottom-0 flex justify-center items-center bg-black bg-opacity-50 text-white px-4 sm:px-10 text-center sm:text-2xl text-[1.1rem] font-semibold">
                        तो देरी किस बात की पार्टनर को सेक्स में संतुष्टि देने के लिए  को अपने लाइफस्टाइल का हिस्सा बनाये।
                    </div>
                </div>
            </div>


            <div className=" text-black  py-4">
              
            <MostSelling />


            </div>

            <div className="bg-white my-3">
                <p className="text-[6.2vw] sm:text-[2vw] fontPoppins font-extrabold text-center text-black py-3 my-1">Right Way of Consumption</p>
            </div>




            <div className='sm:pb-10 pb-6'>
                {
                    Right_way_to([
                        {
                            way_title: "सुबह और रात्रि भोजन के बाद एक टेबलेट दूध/पानी के साथ"
                        },
                        {
                            way_title: "बेहतर परिणाम के लिए 1 गिलास दूध के साथ लें"
                        },
                        {
                            way_title: "एक महीने के अंदर सेक्स प्रदर्शन में सुधार अनुभव करें"
                        }
                    ])
                }


                <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/d6d3dd30-8ea0-4469-a98f-1c112e291700/public" alt="" className='sm:w-3/5 w-full px-2 mx-auto my-6' />

                <OrderNow />


            </div>





        </section>
    )
}

export default SecondCont