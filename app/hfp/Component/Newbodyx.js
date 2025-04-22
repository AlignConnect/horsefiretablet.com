import { Noto_Serif_Devanagari } from 'next/font/google';
import React from 'react'



const noto = Noto_Serif_Devanagari({
    subsets: ['devanagari'],
    display: 'swap',
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});


const newbodyx = () => {
    return (
        <section className={noto.className}>

            <div className='thirdback px-3'>

                <div className='grid grid-cols-12 set-backs' >

                    {
                        <div className='h-[220px] block md:hidden'></div>
                    }

                    <div className='col-span-1'></div>

                    <div className='col-span-12 md:col-span-5 offset-sm-1 offset-md-0'>

                        <div className='ps-star' >पोर्न स्टार की तरह सेक्स करने का पावरफुल फार्मूला</div>
                        <div className='ps-indi'>पोर्न इंडस्ट्री के एक्टर जिन तत्वों का सेवन कर धमाकेदार चुदाई करते है उसका फार्मूला है आयुर्वेदिक सत् !</div>

                        <h1 className='sev-ayu text-4xl font-bold'> <span className='text-yellow-400' >17 आयुर्वेदिक</span> तत्व से बना Horse Fire पोर्न इंडस्ट्री सालों से इस्तेमाल हो रहा है। </h1>

                        <h2 className='purush-hlk text-2xl'>हर पुरुष इसका इस्तेमाल कर सकता है। Horse Fire से आपके दिमाग पर सकारात्मक प्रभाव पड़ता है। इससे स्खलन पर कंट्रोल बढ़ता है, सेक्स पावर, कामेच्छा और लिंग में इरेक्शन में जोरदार इजाफा होता है। Horse Fire लम्बे सेक्स टाइम व हाई इरेक्शन का गारन्टीड इलाज है। </h2>

                        <div className='x-button'>
                            <button className='w-50 m-auto text-[17px] md:text-[30px]' onClick={() => window.location.href = "tel:919825251912"}>9825251912 </button>
                            <button className='w-50 m-auto text-[17px] md:text-[30px]' onClick={() => window.location.href = "#form"}>Order Now</button>
                        </div>
                    </div>
                </div>
            </div>


        </section>
    )
}

export default newbodyx