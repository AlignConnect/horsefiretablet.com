import dynamic from 'next/dynamic';
import Image from 'next/image'
import React from 'react'

const Form = dynamic(() => import('./Form'), {
    loading: () => <p>loader</p>
});

function Tab_Exp() {
    return (
        <div className="relative fontPoppins">
            <div className='relative z-10 w-full py-5 sm:py-10'>

                <p className="text-center text-3xl sm:text-4xl font-semibold text-white">बेहतर सेक्स लाइफ के लिए बस ये करें-</p>

                <div className="bg-yellow-400 py-5 my-5">
                    <div className=" max-w-7xl mx-auto text-[1.05rem] sm:text-2xl text-center leading-relaxed px-3">
                        पहला कदम बढाए और निचे दिया फॉर्म भरें !! सेक्सुअल हेल्थ एक्सपर्ट आपको कॉल कर समस्या जानेंगे और कस्टमाइज्ड दवा बनाएंगे। कस्टमाइज्ड पैक के उपयोग से लाखों पुरुष को वो सेक्स पावर मिला है जो वो चाहते थे। बस एक बार खाकर देखें हमारा गारंटी है की आपकी पार्टनर आपके फौलादी लिंग और जोरदार सेक्स टाइमिंग की दीवानी बन जाएगी !!
                    </div>
                </div>
                <h1 className="fontNoto text-2xl sm:text-3xl md:text-4xl text-white text-center mb-2 md:mb-6 font-extrabold px-1 italic">समय व्यर्थ न करें! जोरदार सेक्स लाइफ की तरफ आज ही पहला कदम बढ़ाएं</h1>

                <div className=" max-w-5xl mx-auto px-3">
                    <Form />
                </div>

            </div>
            <Image src='/main/hf99_images/bg2.webp' fill loading='lazy'  alt='pic'/>
        </div>

    )
}

export default Tab_Exp