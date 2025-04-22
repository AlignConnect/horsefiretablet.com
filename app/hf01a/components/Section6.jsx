import dynamic from 'next/dynamic';

const FormRedirect = dynamic(() => import('./FormRedirect'), {
    loading: () => <p>load</p>
});


const Section6 = () => {

    return (
        <div className='w-full bg-gray-200 py-5 sm:py-10'>

            <div className="max-w-6xl mx-auto px-3 grid grid-cols-12 gap-y-5 sm:gap-10">
                <div className=" rounded-3xl border-sky-500 border-2 col-span-12 sm:col-span-5 py-5 bg-white">
                    <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/1f6de46d-281d-40e5-3bee-7404c3c71600/public" alt="pic" className="w-1/2 mx-auto" width='100%' height='100%' />
                    <div className="sm:hidden">
                        <FormRedirect />
                    </div>
                </div>
                <div className=" col-span-12 sm:col-span-7 space-y-5 ">
                    <div className="grid grid-cols-12 items-center gap-4">
                        <div className="col-span-8 sm:col-span-6">
                            <p className="pt-5  pb-2 px-8 sm:px-16 inline-block border-4 border-blue-500 rounded-tl-[4rem] rounded-br-[4rem] font-bold text-3xl ">विशेष सुविधा</p>
                        </div>
                        <div className="col-span-4 space-y-1 sm:space-y-4">
                            <hr className="bg-gray-600 h-1" />
                            <hr className="bg-gray-600 h-1 w-3/4" />
                            <hr className="bg-gray-600 h-1 w-1/2" />
                        </div>
                    </div>
                    <p className="text-xl sm:text-2xl leading-normal text-justify">इसे बनाने वाली कंपनी पुरुष स्वास्थ्य को प्राथमिकता देती है। समस्या जड़ से मिटाने के लिए एक्सपर्ट्स रोगी से जानकारी लेते है और उनके उम्र, लम्बाई और वजन का आंकलन कर के स्पेशल दवा तैयार करते है जो 100% गारन्टी के साथ असर करता है।  </p>

                    <div className=" bg-white rounded-3xl py-5 col-span-12 px-3">
                        <div className="flex items-center gap-8 justify-center">
                            <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/16e11b0e-122f-4bb8-089c-3eb4841f7d00/public" alt="pic" className="rounded-full w-[6rem] h-[6rem]" loading="lazy" width='100%' height='100%' />
                            <p className="text-3xl font-bold">सेवन विधि-</p>
                        </div>

                        <p className="sm:text-2xl mt-5 text-xl leading-normal text-justify">Horse Fire Tablet का सेवन बहुत ही आसान है। बेहतर सेक्स टाइमिंग, रॉक हार्ड इरेक्शन, जोश-स्टैमिना और शारीरिक शक्ति के लिए 1 टेबलेट सुबह-शाम 1 गिलास गुनगुने दूध या पानी के साथ लें ! बेहतर परिणाम के लिए दूध के साथ इस्तेमाल का सुझाव दिया गया है।</p>

                    </div>
                </div>


            </div>
            <FormRedirect />
        </div>
    )
}
export default Section6;