import dynamic from 'next/dynamic';
import { Noto_Serif_Devanagari } from 'next/font/google';
import React from 'react'

const noto = Noto_Serif_Devanagari({
    subsets: ['devanagari'],
    display: 'swap',
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});

const Order = dynamic(() => import('./OrderNow'));

const Header = () => {
    return (
        <div className='sm:pb-10'>
            <div className={`sm:w-[85%] mx-auto bg-no-repeat bg-cover sm:flex  justify-between sm:pt-10 ${noto.className}`}>

                <div className='sm:w-[45%] mx-auto text-center  sm:pt-20'>

                    <div className='sm:w-[70%] mx-auto text-start'>
                        <h2 className='bg-[#ebab00] inline-block india px-4 sm:px-10 pt-4 pb-2 mb-4 sm:mb-0 text-xl sm:text-2xl font-semibold shadow-2xl'>India's No.1 Penis+Time Booster</h2>
                        <h1 className='text-[#dd0908] font-black  sm:py-7 text-4xl sm:text-7xl text-center sm:text-start '>Horse Fire Tablet</h1>

                        <h4 className='text-3xl text-center sm:text-start sm:text-5xl py-0 sm:py-5'>रोजाना एक गीली लें, बेड पर </h4>

                        <h1 className='font-bold text-center sm:text-start py-2 text-5xl sm:text-7xl'>सुपरमैन बनें </h1>

                        <p className='pt- 5 sm:pt-10 px-2 text-lg sm:text-xl italic text-center sm:text-start'>
                            Say goodbye to your sexual weakness with Horse Fire Tablets, made from the power of Ayurvedic herbs
                        </p>

                    </div>

                </div>



                <div className='w-full sm:w-[55%] overflow-hidden'>
                    <div className='scale-[135%] sm:scale-100 py-10 sm:py-0 ms-14 sm:ms-0  w-full overflow-hidden'>
                        <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/d531bbb1-8f11-4d48-eb30-b30a37e20700/public" alt="dasasd" loading='lazy' className='w-full' />
                    </div>

                </div>
            </div>


            <div className='sm:w-[80%] mx-auto'>

                <div className='flex justify-around bg-[#cb1112] text-white text-xl px-3 py-5 font-bold text-center sm:text-start gap-3'>

                    <div className='flex items-center text-start gap-2'> <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/bd97d4cd-69b4-4dac-97e3-788c01f91f00/public" alt="ad" className='w-[30px] sm:w-[50px]' />
                        <p className='text-[14px] sm:text-xl leading-5'> 100% Ayurvedic </p>
                    </div>
                    <div className='flex items-center text-start gap-2'> <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/bd97d4cd-69b4-4dac-97e3-788c01f91f00/public" alt="ad" className='w-[30px] sm:w-[50px]' />
                        <p className='text-[14px] sm:text-xl  leading-5'> 0 Side Effects</p>
                    </div>
                    <div className='flex items-center text-start gap-2'>  <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/bd97d4cd-69b4-4dac-97e3-788c01f91f00/public" alt="ad" className='w-[30px] sm:w-[50px]' />
                        <p className='text-[14px] sm:text-xl  leading-5'>Ayush Certified</p>
                    </div>

                </div>



            </div>


            <div className='w-[100%] sm:w-[80%] relative sm:aspect-[3/1] mx-auto bg-[url(https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/dac69af1-1da5-4831-2b44-6f14d9082d00/public)] sm:bg-[url(https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/3a3405f8-21f5-4441-7e2c-b594c2dd3700/public)] bg-cover bg-no-repeat min-h-[550px] sm:min-h-[200px] px-2'>

                {/* <div className='absolute w-full'>
                    <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/3a3405f8-21f5-4441-7e2c-b594c2dd3700/public" alt="asdf" loading='lazy' className='w-full' />
                </div> */}

                <div className={`sm:w-[50%]  ms-auto absolute bottom-[0%] z-10 text-white sm:px-5 py-2 sm:transform sm:translate-x-0 sm:left-[50%] sm:translate-y-[-50%] sm:top-[50%] text-xl sm:text-2xl sm:leading-[2.5rem] font-semibold ${noto.className} `}>
                    क्या ख़राब सेक्स प्रदर्शन से आपके लाइफ में मनचाहा रोमांच नहीं है? क्या आपके प्रदर्शन से पार्टनर संतुष्ट नहीं है? अगर ऐसा है तो आज जान लीजिये आखिर ऐसा क्यों होता है और लिंग इरेक्शन, स्टैमिना व <span className='text-red-600'>टाइमिंग बढाकर सम्पूर्ण सेक्स प्रदर्शन सुधारने में Horse Fire Tablet कैसे काम करता है।</span>
                </div>


                <div className='text-white absolute bottom-0 w-full hidden sm:block'>
                    <Order />
                </div>


            </div>


            {/* <div className='text-center sm:pt-6'>
                <div className={`py-2 mb-4 inline-block text-left pop_imagehfv`}>
                    <a className="bg-[#213361] text-xl  font-bold  py-3 px-11 w-full rounded-full hover:bg-[#1e2f5a] shadow-lg shadow-[#213361]/50 transition-colors text-white" href='#form'>
                        ORDER NOW
                    </a>
                </div>
            </div> */}



        </div>
    )
}

export default Header
