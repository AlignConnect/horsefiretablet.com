import dynamic from 'next/dynamic';
import React from 'react'

const FlipAmazon = dynamic(() => import('./FlipAmazon'), {
  loading: () => <p>loader</p>
});


const MostSelling = dynamic(() => import('@/app/commonUse/mostSelling/most_selling_2'), {
  loading: () => <p>loader</p>
});

const Sec6 = () => {

  return (

    <>
      <div className="my-5 sm:my-12">

        <MostSelling />

        <div className="mt-3">
          <FlipAmazon />
        </div>

        <p className="mb-2 mt-5 text-center sm:mt-10 px-3 sm:w-8/12 mx-auto font-extrabold text-4xl sm:text-[3.2rem] leading-tight">बेहतर सेक्स लाइफ के <span className="text-[#6b0503]">लिए बस ये करें-</span></p>

        <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/990e1100-902d-4405-35eb-5f2c52754700/public" alt="pic" height='100%' width='100%' loading='lazy' className='' />

        <p className="text-center mx-3 sm:mx-10 my-5 font-semibold sm:my-10">पहला कदम बढाए और निचे दिया फॉर्म भरें !! सेक्सुअल हेल्थ एक्सपर्ट आपको कॉल कर समस्या जानेंगे और उसके हिसाब से दवा बनाएंगे। इस दवा के उपयोग से लाखों कपल को वो सेक्स पावर मिला है जो वो चाहते थे। बस एक बार खाकर देखें हमारा गारंटी है की आपकी पार्टनर आपके फौलादी लिंग और जोरदार सेक्स टाइमिंग की दीवानी बन जाएगी !!</p>

        <p className="text-center text-4xl sm:text-7xl font-extrabold text-[#f55437]">समय व्यर्थ न करें </p>
        <p className="text-center text-2xl sm:text-4xl font-semibold mx-3 sm:mx-16 my-5">जोरदार सेक्स लाइफ की तरफ आज ही पहला कदम बढ़ाएं </p>

        <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/eab54dd2-c2c7-44cd-3579-e0e392a53800/public" alt="pic" height='100%' width='100%' loading='lazy' className='' />


        <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/16c2ef62-df0b-4a14-9545-2e8e8116c700/public" alt="pic" height='100%' width='100%' loading='lazy' className='px-3 sm:px-16 my-5 sm:my-10 ' />

        <p className="text-3xl sm:text-5xl font-extrabold text-center"> नक्कालों से सावधान<span className="text-red-500">!</span></p>
        <p className="text-[1.2rem] sm:text-2xl font-extrabold mt-1 mb-5 px-3 sm:px-16 text-center ">Horse Fire Tablet की बढ़ती लोकप्रियता को देखते हुए मार्केट में कुछ नकली विक्रेता आ गए है। ध्यान से AR Ayurveda ब्रांड देखकर ही प्रोडक्ट खरीदें !</p>


      </div>
    </>
  )
}

export default Sec6