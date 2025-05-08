import dynamic from 'next/dynamic';
import React from 'react'

const Sub1 = dynamic(() => import('./Sub1'), {
    loading: () => <p>loader</p>
});

const Sub2 = dynamic(() => import('./Sub2'), {
    loading: () => <p>loader</p>
});

const OrderBtn = dynamic(() => import('./OrderBtn'), {
    loading: () => <p>loader</p>
});


const Main = () => {
    return (
        <div className="max-w-[85%] mx-auto pt-5 pb-5 sm:pt-14 ">
            <div className='grid sm:grid-cols-2'>

                <div className="sm:hidden">
                    <div className="sm:flex items-center ">

                        <div className={`w-full sm:w-4/12 text-[6.5vw] font-extrabold sm:text-[3vw] text-red-600 leading-none text-center sm:mt-3 pe-5`}>
                            नक्कालों से सावधान!
                        </div>
                        <marquee className="-mx-[7.5%]"><span className="text-yellow-300">Horsefire Tablet</span> की बढ़ती लोकप्रियता को देखते हुए मार्केट में कुछ नकली विक्रेता आ गए है। ध्यान से <span className="text-yellow-300">AR Ayurveda</span> ब्रांड देखकर ही प्रोडक्ट खरीदें !</marquee>
                    </div>
                </div>
                <div className="">
                    <Sub1 />
                    <div className="max-w-96 hidden sm:block">
                        <Sub2 />
                    </div>
                </div>

                <div className="">
                    <div className="sm:flex items-center hidden ">

                        <div className={`w-full sm:w-4/12 text-[8vw] font-extrabold sm:text-[3vw] text-red-600 leading-none text-center sm:mt-3 pe-5`}>
                            नक्कालों से सावधान
                        </div>
                        <div className="border-s-2 border-white w-full sm:w-8/12 ps-5 mb-3 sm:my-0">
                            Horsefire Tablet की बढ़ती लोकप्रियता को देखते हुए मार्केट में कुछ नकली विक्रेता आ गए है। ध्यान से AR Ayurveda ब्रांड देखकर ही प्रोडक्ट खरीदें !
                        </div>
                    </div>

                    <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/a66c534c-b31b-465d-80f6-14490f9e1a00/public" alt="pic" height='100%' width='100%' loading='lazy' />
                    <div className="hidden sm:block -mt-10">
                        <OrderBtn />
                    </div>
                </div>

                <div className="max-w-96  sm:hidden">
                    <Sub2 />
                </div>
            </div>
            <div className="sm:hidden">
                <OrderBtn />
            </div>
        </div>
    )
}

export default Main