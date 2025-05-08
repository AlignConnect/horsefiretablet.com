import { Noto_Serif_Devanagari } from 'next/font/google';
import React from 'react'

const noto = Noto_Serif_Devanagari({
    subsets: ['devanagari'],
    display: 'swap',
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

const Sec3 = () => {
    return (

        <section className={noto.className}>

            <div className='text-center'>

                {/* <div className='bg-[#db2d2e] text-white pt-2 mt-7 rounded-tl-md rounded-br-md my-1 px-3 inline-block font-black text-2xl'>
                    HORSE FIRE
                </div> */}

                {/* bg-[url(https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/13c9a247-bb74-4d07-f37b-92f18e1fd500/public)] */}

                <div className=' w-full bg-contain bg-no-repeat md:min-h-[700px]'>

                    <div className='grid grid-cols-2 py-[30px] md:py-[50px] px-5'>

                        <p className='text-white text-lg text-justify col-span-2 md:col-span-1 block md:block'>
                            भारतीय पुरुष हॉर्सफायर से लाभान्वित हो रहे है और सेक्स प्रदर्शन से संतुष्ट है जिसकी वजह से इसकी बिक्री तेजी से बढ़ रही है। हॉर्स फायर टेबलेट बहुत कम समय में भारत का सबसे असरदार और प्रसिद्ध यौन वर्धक प्रोडक्ट बन गया है।
                        </p>

                        <div className='w-full col-span-2 md:col-span-1'>
                            <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/eac46750-e62f-478e-8b93-2e881d1d7200/public" alt="asd" loading='lazy' className='w-[50%] md:w-[80%] mx-auto' />
                        </div>

                    </div>

                    <div className='w-full'>
                        <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/514d33cd-b259-44d4-87ad-1e9aef7b3400/public" alt="asd" loading='lazy' className='w-[90%] md:w-[65%] mx-auto' />
                    </div>




                    <div className='bg-[#fcff00] w-[90%] mx-auto md:py-2 mt-[20px] md:mt-[50px] rounded-md'>
                        <div className='md:px-2'>
                            <p className='md:py-[20px] px-[10px] pt-2  mx-auto font-bold text-md md:text-xl border border-dashed border-black rounded-md'>
                                इसे खाकर उन लाखों पुरुषों में शामिल हो जाएँ जो सुडौल लिंग और लम्बी सेक्स टाइमिंग से महिला पार्टनर की चूत की गर्मी उतार रहे है !
                            </p>
                        </div>
                    </div>

                    {/* <p className='text-white text-lg py-4 px-3 mx-auto block md:hidden'>
                        भारतीय पुरुष हॉर्सफायर से लाभान्वित हो रहे है और सेक्स प्रदर्शन से संतुष्ट है जिसकी वजह से इसकी बिक्री तेजी से बढ़ रही है। हॉर्स फायर टेबलेट बहुत कम समय में भारत का सबसे असरदार और प्रसिद्ध यौन वर्धक प्रोडक्ट बन गया है।
                    </p> */}


                </div>


                <div className='pt-12 relative w-full'>

                    <div className='absolute tranform translate-x-[-50%] translate-y-[-50%] left-[50%] mx-auto w-[250px] md:w-[360px]'>
                        <h3 className='bg-white pt-2 px-4 font-black rounded-xl text-center text-2xl md:text-2xl'>नक्कालों से सावधान!</h3>
                    </div>

                    <div className='bg-[#d13131] text-white font-bold px-2 pt-8 pb-2 text-[1.1rem] text-center'>
                        <span className='text-[#ffdc01]'> Horse Fire Tablet </span> की बढ़ती लोकप्रियता को देखते हुए मार्केट में कुछ नकली विक्रेता आ गए है। ध्यान से <span className='text-[#ffdc01]'>AR Ayurveda</span> ब्रांड देखकर ही प्रोडक्ट खरीदें !
                    </div>
                </div>

            </div>

        </section>

    )
}

export default Sec3