import dynamic from 'next/dynamic';
import React from 'react'
import YoutubeFrameLh6 from './YoutubeFrame';

const OrderBtn = dynamic(() => import('./OrderBtn'), {
  loading: () => <p>loader</p>
});



const Sec9 = () => {



  return (
    <div className=" py-5 sm:py-10 px-3 sm:px-0">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-[#7bdf03] fontPoppins font-extrabold text-2xl sm:text-4xl mb-5 sm:mb-8 ">DOCTOR  RECOMMENDATON</p>
        <YoutubeFrameLh6 vid={'rf51nF8mlb0'} />

        <div className="my-5 sm:my-10 py-5">
          <p className="">अगर आप भी फौलादी लिंग और ज्यादा स्टैमिना, ज्यादा सेक्स से पार्टनर को ख़ुशी देना चाहते है और सेक्सुअल लाइफ का मजा उठाना चाहते है तो Horse Fire Tablet का सेवन जल्द से जल्द शुरू करें !</p>
          <img src='https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/d6d3dd30-8ea0-4469-a98f-1c112e291700/public' alt="pic" height='100%' width='100%' loading='lazy' className='mt-5 sm:mt-10' />

        </div>

        <div className="bg-white text-black pt-5 pb-2 px-3 rounded-xl">
          <div className="sm:flex items-center ">

            <div className={`w-full sm:w-4/12 text-[8vw] font-extrabold sm:text-[3vw] text-red-500 leading-none text-center sm:mt-3 pe-5`}>
              नक्कालों से सावधान
            </div>
            <div className="border-s-2 border-black w-full sm:w-8/12 ps-5 mb-3 sm:my-0">
              <span className="text-green-800 font-bold">Horsefire Tablet</span> की बढ़ती लोकप्रियता को देखते हुए मार्केट में कुछ नकली विक्रेता आ गए है। ध्यान से <span className="text-green-800 font-bold">AR Ayurveda</span> ब्रांड देखकर ही प्रोडक्ट खरीदें !
            </div>
          </div>
        </div>

      </div>

    </div>
  )
}
export default Sec9