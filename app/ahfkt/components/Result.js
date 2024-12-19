import dynamic from 'next/dynamic';

const OrderNow = dynamic(() => import('@/app/ahf/Precomponent/OrderNow'), {
    loading: () => <p>loader</p>
});


function Result() {
    return (
        <section>
            <div className="">
                <div className='bg-black'>
                    <div className='w-full max-w-7xl mx-auto '>
                        <div className='grid grid-cols-12 gap-2 py-6 items-center'>
                            <div className='col-span-5 '>
                                <img
                                    className='md:w-1/2 w-28 mx-auto'
                                    src={"https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/41bc333b-edea-48ca-3986-290a0ab15f00/public"}
                                    alt='penis_img'
                                />
                            </div>
                            <div className='col-span-7'>
                                <div className="w-1/2 text-center border-2 border-white">
                                    <div className='fontPoppins  font-extrabold text-2xl md:text-5xl py-2 md:py-3 text-white '>
                                        धीरेन्द्र
                                    </div>
                                </div>
                                <div className='fontPoppins font-extrabold text-2xl md:text-5xl py-3 text-yellow-400'>
                                    शानदार परिणाम!
                                </div>
                            </div>
                        </div>
                        <div className="fontNoto text-justify text-[1rem] md:text-2xl px-2 py-1 text-white italic">
                            "मेरे पहले और हॉर्सफायर खाने के बाद के सेक्स प्रदर्शन का कोई तुलना ही नहीं है। हॉर्सफायर से वास्तविक परिणाम मिलता है। मैं छोटे लिंग और कम सेक्स अवधि की वजह से निराश था क्योंकि मैं उतना सेक्स नहीं कर पाता था जितना मेरी बीवी चाहती थी। लेकिन हॉर्सफायर से अब मेरा लिंग पहले से ज्यादा देर तक खड़ा रहता है और सेक्स टाइमिंग भी काफी बढ़ गई है। अब उसकी इच्छा से भी ज्यादा देर तक मैं सेक्स कर पाता हूँ। और ये सब मुझे सिर्फ 4 पैक के इस्तेमाल से मिल गया, अब मुझे दवा की जरुरत नहीं पड़ती।"
                        </div>
                    </div>
                </div>

                <div className="bg-white">
                    <div className='w-full max-w-7xl mx-auto py-3'>
                        <div className='fontPoppins font-extrabold text-3xl md:text-4xl px-2 py-4'>अन्य उत्पादों से बेहतर कैसे?</div>

                        <div className="fontNoto text-justify text-[1.2rem] md:text-2xl px-2 py-1">
                            क्योंकि हॉर्स फायर टेबलेट बनाने के लिए सामान्य नहीं प्रीमियम क्वीलिटी जड़ीबूटियों का इस्तेमाल किया जाता है। कस्टमर तक पहुंचने से पहले इसे कई लैब टेस्ट से गुजरना पड़ता है। जिसके पश्चात इसे यौन स्वास्थ्य में उपयोगी उत्पाद की प्रमाणिकता मिलती है। ए आर आयुर्वेदा में समस्या और समाधान को सबसे पहले प्राथमिकता दी जाती है। बस इतना समझ लें, हमने हॉर्स फायर टेबलेट के इस्तेमाल से प्रत्येक पुरुष को यौन कमजोरी से छुटकारा दिलाकर बेहतर सेक्स प्रदर्शन से उनके रिलेशनशिप या दाम्पत्य जीवन को खुशहाल बनाने की पहल की है।
                        </div>
                    </div>
                </div>


                <div className=" bg-[#f7a015]">
                    <div className="w-full max-w-7xl mx-auto py-3">
                        <div className="grid grid-cols-12 items-center  gap-2 py-3">
                            <img
                                className='w-full md:w-40 col-span-4 mx-auto px-2'
                                src={"https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/2135aeed-5686-4ade-9fa7-004bd190b100/public"}
                                alt='hf_product'
                                fetchPriority='high'
                            />
                            <div className="col-span-8">
                                <div className="fontPoppins text-black text-3xl md:text-4xl font-extrabold">विशेष सुविधा-</div>
                                <p className=' fontNoto text-[1.1rem] md:text-[1.4rem] text-justify px-2 py-2'>
                                    कंपनी पुरुष स्वास्थ्य को प्राथमिकता देती है। समस्या जड़ से मिटाने के लिए एक्सपर्ट्स रोगी से जानकारी लेते है और उनके उम्र, लम्बाई और वजन का आंकलन कर के स्पेशल दवा तैयार करते है जो 100% गारन्टी के साथ असर करता है।
                                </p>
                            </div>

                            {/* <div className="col-span-12 block md:hidden">
                                <OrderNow />
                            </div> */}

                        </div>
                    </div>
                </div>

                <div className="w-full max-w-7xl mx-auto">
                    <div className='fontPoppins text-center font-extrabold text-3xl md:text-4xl py-4'>हॉर्सफायर से गारंटीड पाएं</div>

                    <div className="w-full md:w-1/2 mx-auto py-3 border-2 border-gray-300 rounded-md">
                        <video className='w-full h-full' autoPlay muted loop>
                            <source src='/main/ahf_images/poster.mp4' type="video/mp4" className='h-full' />
                        </video>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Result