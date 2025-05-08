import dynamic from 'next/dynamic';
import React from 'react'
import { FaHandPointRight } from 'react-icons/fa6'


const OrderBtn = dynamic(() => import('./OrderBtn'), {
    loading: () => <p>loader</p>
});

const Doctor_Herbs = () => {


    const experience = (arr) => {

        return arr?.map((e, key) => {

            return <div
                className={`flex justify-center gap-2 bg-[#e5eae4] rounded-md mx-3 my-4 pt-3 pb-1 px-2  
                ${key % 2 == 0 ? "w-[80%] mr-auto" : "w-[80%] ml-auto"}`}
                key={key}>

                <div className="">
                    <FaHandPointRight size={24} />
                </div>

                <p className='fontNoto text-md sm:text-[1.2rem] pl-2  font-semibold'>
                    {e.title}
                </p>


            </div >
        })
    }


    return (
        <section>


            <div className='fontNoto bg-[#fff001] text-red-600 mx-1 rounded-md text-center pt-3 sm:pt-3 pb-1 font-extrabold text-xl sm:text-2xl my-6'>
                <span className='fontPoppins font-extrabold'>HORSEFIRE</span> की मदद से अपने महिला<br /> पार्टनर की चाहत को हकीकत में बदले!!
            </div>

            <img src="/main/hxb_images/herbs_pro.jpg" alt="" className='sm:w-5/6 w-80  mx-auto rounded-md mb-2' />

            <OrderBtn />

            <p className='text-md sm:text-xl text-black fontNoto text-justify px-2 py-3'>
                <span className='fontPoppins font-semibold text-red-600'>HORSEFIRE TABLET</span> में अश्वगंधा, शिलाजीत, गोखरू, सफ़ेद मूसली, जैसी 16 विशेष जड़ीबूटिया और भस्म मौजूद है। ये आयुर्वेदिक तत्व टेस्टोस्टेरोन लेवल बढ़ाने में मदद करते है। लिंग में लोहे की रॉड जैसी सख्ती व सेक्स टाइमिंग बढ़ाकर, शरीर में जोश,और उत्तेजना बढ़ाते है। ये हर्ब्स नामर्दी से निराश पुरुष को भी असली मर्द का अनुभव कराने के लिए जाने जाते है।
            </p>



            <div className="sm:grid grid-cols-2 justify-center items-center border-solid border border-black rounded-md p-2 mx-2 mb-2">

                <div className="">
                    <img src="/main/hxb_images/doc.png" alt="" className='w-5/6 mx-auto' />

                    <div className="bg-[#e5eae4] fontNoto text-2xl w-full sm:w-72 mx-auto text-center pt-3 font-extrabold rounded-md">
                        डॉ.अजीत रायडू
                    </div>

                </div>

                <div className="">
                    <p className='text-md sm:text-xl text-black fontNoto text-justify px-1 py-3 italic'>
                        "<span className='fontPoppins font-semibold text-red-600'>HORSEFIRE TABLET</span> एक बेहतरीन क्वालिटी प्रोडक्ट है, इसमें अश्वगंधा, शिलाजीत, कौचा, गोक्षुरा, सफ़ेद मूसली जैसी जड़ीबूटियां के जोशवर्धक और शक्तिवर्धक गुण मौजूद है जिसके वजह से आप इस पर पूर्णतः भरोसा कर सकते है। ये हर्ब्स टेस्टोस्टेरोन बूस्ट करने, नाइट्रिक ऑक्साइड का उत्पादन करने व शरीर के प्रत्येक हिस्से में रक्त संचरण को बेहतर बनाने में मदद करती है फलस्वरूप प्रदर्शन में सुधार होता है।"
                    </p>
                </div>

            </div>
            <OrderBtn />



            <div className="bg-[#e5eae4] mx-2 rounded-md my-3">

                <div className="fontPoppins sm:text-xl text-md text-black text-center py-2 font-semibold ">
                    TRUSTED FACTORS
                </div>


                <div className="grid grid-cols-3 justify-center items-center py-2">

                    <div className="">
                        <img src="/main/hxb_images/custom-product.png" alt="" className='w-16 mx-auto' />
                        <p className='fontNoto sm:text-xl text-md font-extrabold text-center py-1'>कस्टम उत्पाद</p>
                    </div>

                    <div className="">
                        <img src="/main/hxb_images/money-back.png" alt="" className='w-16 mx-auto' />
                        <p className='fontNoto sm:text-xl text-md font-extrabold text-center py-1'>मनी बैक गारंटी</p>
                    </div>

                    <div className="">
                        <img src="/main/hxb_images/cash-on-delivery.png" alt="" className='w-16 mx-auto' />
                        <p className='fontNoto sm:text-xl text-md font-extrabold text-center py-1'>COD उपलब्ध</p>
                    </div>

                </div>

            </div>


            <div className='fontNoto bg-[#fff001] text-red-600 mx-3 rounded-md text-center pt-3 sm:pt-4 font-extrabold text-2xl sm:text-3xl my-6'>
                उम्र कोई भी असर एक जैसा..!
            </div>


            <div className="">
                <p className='text-md sm:text-xl text-black fontNoto text-justify px-2 py-3'>
                    वैसे तो कोई भी औषधि युवाओं पर असर जल्दी करती है परन्तु हॉर्सफायर को इस तरह से तैयार किया गया है यह 20 साल के युवा से लेकर 65 साल के पुरुष पर सामान प्रभावकारी है। यही वजह है की 35+ उम्र के पुरुष जब उनकी लीबीदो पावर कम होने लगती है और लिंग में ढीलापन आने लगता है तो वे <span className='fontPoppins font-semibold text-red-600'>HORSEFIRE TABLET</span> के इस्तेमाल से अपना लिंग सख्त बना कर सेक्स लाइफ को रोमांचक बनाये रखते है।
                </p>

                <img src="/main/hxb_images/product_tested.png" alt="" className='sm:w-3/4 w-full  mx-auto' />

                <OrderBtn />


                <div className="">
                    <p className='fontSumana md sm:text-2xl pb-4 text-center font-extrabold px-2'>
                        <span className='fontPoppins font-semibold text-red-600'>"HORSEFIRE TABLET</span> एक प्रूवेन फार्मूलेशन है। यह लैब टेस्टेड और आयुष मंत्रालय द्वारा प्रमाणित है जो सेक्स अवधि, शक्ति-स्फूर्ति और लिंग वृद्धि में मदद करता है।"
                    </p>
                </div>
            </div>


            <div className='fontNoto bg-[#fff001] text-red-600 mx-3 rounded-md text-center pt-3 sm:pt-4 font-extrabold text-2xl sm:text-3xl my-6'>
                आजमाए और खुद अनुभव करें
            </div>

            <div className="">
                {
                    experience([
                        {
                            title: "Horsefire tablet के नियमित इस्तेमाल करके परिमाण कुछ ही दिनों में देख सकते है।"
                        },

                        {
                            title: "टेस्टोस्टेरोन में वृद्धि होने लगेगी, जोश और उत्तेजना बढ़ेगा और मर्दानगी का संचार होगा।"
                        },

                        {
                            title: "यह ढीले और कमजोर लिंग को सख्ती से खड़ा करने में मदद करता है, साइज बढ़ाता है।"
                        },
                        {
                            title: "टाइमिंग कई गुना बढ़ सकती है और आप देर तक सेक्स का लुत्फ़ उठा सकते है। "
                        },

                        {
                            title: "आपके साथ सेक्स करने वाली हर महिला खुद को भाग्यशाली समझेगी और चरमसुख का लुत्फ़ उठाएगी।"
                        },

                        {
                            title: "आपकी पार्टनर आपका लिंग बार बार लेना चाहेगी, क्योकि आपने उसे वो सुख दिया जो वो चाहती थी। "
                        }
                    ])
                }
            </div>


            <div className='fontNoto bg-[#fff001] text-red-600 mx-3 rounded-md text-center pt-3 sm:pt-4 font-extrabold text-2xl sm:text-3xl my-3'>
                सेवन विधि
            </div>
            <img src="/main/hxb_images/product_box.webp" alt="" className='sm:w-1/2 w-2/3  mx-auto' />

            <OrderBtn />


            <p className='fontSumana text-md sm:text-xl pb-4 text-justify font-extrabold px-2'>
                <span className='fontPoppins font-semibold text-red-600'>"HORSEFIRE TABLET</span> का सेवन बहुत ही आसान है। बेहतर सेक्स टाइमिंग, रॉक हार्ड इरेक्शन, जोश-स्टैमिना और शारीरिक शक्ति के लिए 1 टेबलेट सुबह-शाम 1 गिलास गुनगुने दूध या पानी के साथ लें ! बेहतर परिणाम के लिए दूध के साथ इस्तेमाल का सुझाव दिया गया है।
            </p>


            <div className='fontNoto bg-[#fff001] text-red-600 mx-3 rounded-md text-center pt-3 sm:pt-4 font-extrabold text-2xl sm:text-3xl my-4'>
                चिंता न करें
            </div>



            <div className="">
                <p className='fontSumana text-xl sm:text-2xl pb-4 text-center font-extrabold'>
                    आयुर्वेद चिकित्सा पद्धति के भरोसे के साथ आगे<br /> बढे और <span className='text-red-600'>सकारात्मक परिणाम पाएं!!</span>
                </p>
            </div>


            <img src="/main/hxb_images/hft_p.jpg" alt="" className='sm:w-5/6 w-80  mx-auto rounded-md mb-2' />

            <OrderBtn />


            <p className='fontSumana text-xl pb-4 sm:text-2xl text-center font-extrabold '>
                <span className="text-red-600">बेझिझक आर्डर करें</span> और पाएं जोशीला अंदाज!
            </p>




        </section>
    )
}

export default Doctor_Herbs