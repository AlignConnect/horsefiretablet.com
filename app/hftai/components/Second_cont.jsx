import dynamic from 'next/dynamic';
import React from 'react'

const OrderNow = dynamic(() => import('./OrderNow'));


const Second_cont = () => {

    const indians_problem = (arr) => {
        return arr?.map((e, key) => {
            return <div className='bg_ing ' key={key}>
                <div className="fontNoto bg-yellow-500  ">
                    <div className='text-black sm:text-[1.3vw] text-lg leading-normal sm:text-justify sm:p-4 p-3'
                        dangerouslySetInnerHTML={{ __html: e.sub_title }}
                    />
                    <div className='bg-white text-black fontBebas  sm:text-[1.7vw] text-2xl text-center sm:py-2 py-1'
                        dangerouslySetInnerHTML={{ __html: e.title }}
                    />
                </div>
            </div >
        })
    }


    return (


        <section className="bg-black">

            <div className="w-full sm:max-w-7xl  mx-auto p-1">

                <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/16b2d8f9-0cc2-48f6-3149-278f75beef00/public" alt="" className='sm:w-4/6 w-full mx-auto sm:p-4 p-1 sm:mt-10 mt-5' />


                <div className="fontRighteous text-white text-center  sm:text-[2.4vw] text-[6vw] py-2">
                    Problems of Up to 70% of Indian's
                </div>

                <div className="sm:max-w-7xl  mx-auto">


                    <div className="grid sm:grid-cols-4 grid-cols-2 items-center  sm:gap-10 gap-5 sm:my-10 my-5 mx-2">
                        {
                            indians_problem([
                                {
                                    sub_title: "भारतीय पुरुषों का पेनिस साइज औसतन 4.9 इंच होता है जो की बहुत कम है।",
                                    title: "PENIS SIZE"
                                },
                                {
                                    sub_title: "उनकी सेक्स अवधि 6 मिनट से भी कम है जो महिलाओं की अपेक्षा काफी कम है।",
                                    title: "SEX TIMING"
                                },
                                {
                                    sub_title: "अफ्रीकन पुरुषो के मुकाबले जोश, उत्तेजना, ताकत तथा स्टैमिना काफी कम है।",
                                    title: "STAMINA"
                                },
                                {
                                    sub_title: "भारतीय पुरुष कम उम्र में ही सेक्स से दूर होने लगते है, यानि कामेच्छा भी कम है।",
                                    title: "VIGOUR"
                                },
                            ])
                        }
                    </div>

                </div>

            </div>

            <OrderNow/>


            <div className="bg_doc_ai fontNoto">

                <div className="w-full  sm:max-w-7xl  mx-auto p-1">

                    <div className=" grid sm:grid-cols-2 items-center py-5 sm:py-14">
                        <div className="">
                            <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/3b5a47bd-5c03-4e87-44bc-3989c0e3a700/public" alt="" className='sm:w-2/3 w-full rounded-lg shadow-md mx-auto' />
                        </div>
                        <div className="">
                            <div className="text-black font-extrabold sm:text-[2.9vw] text-4xl sm:py-0 pt-4 px-2 leading-tight">
                                क्यों कमजोर है भारतीय <br /><span className='text-red-700'>पुरुषों का लिंग?</span>
                            </div>
                            <p>
                                अमेरिका की एक सेक्सुअल हेल्थ संस्था Institute for Advanced Study of Human Sexuality (IASHS) के प्रोफेसर Dr. Ted McIlvenna ने परीक्षण में खुलासा किया है की एशियाई देशों (भारत, पाकिस्तान, चीन, जापान, नेपाल, अन्य ) के आहार में लिंग को पोषण देने वाले तत्वों की कमी है। जिसकी वजह से इनके लिंग का आकार अमेरिका और अफ्रीकन देशों के तुलना में काफी कम और कमजोर होता है। साथ ही शरीर की स्टैमिना और सेक्स टाइमिंग भी बहुत कम होती है।
                            </p>
                        </div>
                    </div>


                </div>


            </div>

            <OrderNow/>

            <div className="bg-black fontNoto">

                <div className="w-full  sm:max-w-7xl  mx-auto">

                    <div className=" grid sm:grid-cols-2 items-center ">

                        <div className=" sm:order-1 order-2">
                            <div className="text-white font-extrabold sm:text-[2.6vw] text-3xl sm:py-0 pt-7 px-3 leading-tight">
                                अफ्रीकन पुरुषों के बड़े लिंग<br /><span className='text-red-500'>का रहस्य क्या है?</span>
                            </div>
                            <p className='text-white'>
                                Dr. McIlvenna ने इनके बड़े फौलादी लिंग का श्रेय प्राकृतिक जड़ीबूटियों को दिया। उन्होंने बताया की पश्चिमी और दक्षिणी देश नेचुरल हर्ब्स पर बहुत भरोसा करते है। नेचुरल हर्ब्स उनके दैनिक जीवन का हिस्सा है। जिसकी वजह से उन्हें यौन समस्या कभी नहीं होती। इतना ही नहीं वो अपने ज्यादातर समस्याओं को हर्ब्स की मदद से ही ठीक कर लेते है।
                            </p>
                        </div>

                        <div className="sm:order-2 order-1">
                            <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/f8eaa7fc-b87b-4497-bbc7-14182a7feb00/public" alt="" className='w-5/6 mx-auto' />
                        </div>

                    </div>


                </div>


            </div>



            <OrderNow/>


            <div className="bg-gray-100 fontNoto">

                <div className="w-full  sm:max-w-7xl  mx-auto sm:py-10 py-8">

                    <div className=" grid sm:grid-cols-2 items-center ">

                        <div className="">
                            <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/aaeb0881-36b0-4f5d-bba3-b27ea6d1ef00/public" alt="" className='w-3/4 mx-auto' />
                        </div>


                        <div className="">
                            <div className="fontPoppins text-green-700 font-extrabold sm:text-[2.3vw] text-3xl sm:py-0 pt-7 pb-2 px-3 leading-tight">
                                BLEND OF <br />POWERFULL HERBS
                            </div>
                            <div className='font-extrabold sm:text-[1.5vw] text-xl fontNoto px-3 leading-tight py-2 text-justify'>
                                अब आपके मन में सवाल आ रहा होगा की आखिर उनके बड़े लिंग और ज्यादा सेक्स पॉवर के पीछे कौन सी जड़ीबूटियां है।
                            </div>
                            <p className='text-left'>
                                Withania Somnifera, Asphaltum, Chlorophytum Borivilianum, Crocus sativus, Tribulus Terrestris ये कुछ खास अफ्रीकन हर्ब्स है जिन्हे भारत में अश्वगंधा, शिलाजीत, सफ़ेद मूसली, केसर, गोक्षुरा के नाम से जाना जाता है। फर्क बस इतना है की वहा के लोग इन हर्ब्स के फायदे को जानते है पर भारतीय पुरुष इतने पावरफुल जड़ीबूटियों के फायदे से अनजान है।
                            </p>
                        </div>



                    </div>


                </div>


            </div>
            <OrderNow/>

        </section>

    )
}

export default Second_cont