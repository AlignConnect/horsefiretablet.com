import dynamic from 'next/dynamic';
import React from 'react'


const Inquiry = dynamic(() => import('./Inquiry'), {
    loading: () => <p>loader</p>
});


const Header = () => {
    return (
        <section className='fontNoto '>


            <div className='bg-black px-2 py-3'>

                <div className="text-yellow-500 font-extrabold pt-2 text-center sm:text-2xl text-[1.1rem] border border-dashed px-2 border-yellow-400 sm:w-52 w-48  mx-auto ">
                    नक्कालों से सावधान
                </div>

                <marquee className='text-white text-center pt-2 sm:text-[1rem] text-[1rem]'>
                    <span className='text-red-500 font-semibold fontPoppins'>Horsefire Tablet</span> की बढ़ती लोकप्रियता को देखते हुए मार्केट में कुछ नकली विक्रेता आ गए है। ध्यान से <span className='text-yellow-500 font-semibold fontPoppins'>AR Ayurveda</span> ब्रांड देखकर ही प्रोडक्ट खरीदें!
                </marquee>

                <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/c5c5ca81-b439-48bd-ea8d-a138a2658400/public" className='w-full' alt="" />

                <div className=" border border-dashed p-3 border-yellow-400">
                    <p className='text-[#20e5fc] font-semibold text-[1rem] pt-2 sm:text-[1.2rem] text-justify'>
                        दुनियाभर भर में किये गए हजारो सर्वे से ये पता चलता है की पुरुषों में यौन कमजोरी कितनी तेजी से बढ रही है। भारत की बात करे अपने तो यहां लगभग <span className='text-yellow-500 '> 40% शीघ्रपतन</span> और <span className='text-yellow-500 '>30% पुरुष</span> लिंग की नसों में ढीलापन और तनाव की कमी अनुभव करते है। इसके साथ ही कुछ अन्य <span className='text-yellow-500 '>यौन कमजोरियां</span> सेक्स लाइफ में निराशा का कारण बनती है।
                    </p>
                </div>

                <Inquiry />

            </div>


        </section >
    )
}

export default Header