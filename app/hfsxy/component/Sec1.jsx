import { Anton, Noto_Serif_Devanagari } from 'next/font/google'
import React from 'react'

const anton = Anton({
    subsets: ['latin'],
    display: "swap",
    weight: ['400']
})


const noto = Noto_Serif_Devanagari({
    subsets: ['devanagari'],
    display: 'swap',
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});


const Sec1 = () => {
    return (

        <section className={noto.className}>

            <div className={`${anton.className} uppercase text-4xl sm:text-5xl text-center py-4 text-[#ffd201]`}>Now It's Your Turn</div>


            <div className='w-[320px] rounded-xl mx-auto bg-white text-center font-bold pt-3 text-2xl  text-red-600'>
                गंभीर समस्याएं
            </div>

            <div className='flex items-center justify-center border w-[90%] px-3 md:w-[80%] bg-[#272727] mx-auto my-4  rounded-xl'>
                <div className=''>
                    <img src="/main/hfsxy_images/a1.webp" alt="sdf" loading='lazy' className='w-[120px] py-3 rounded-xl' />
                </div>

                <div className=''>
                    <h2 className='text-[#ffd201] text-start px-5 font-bold text-2xl'>शीघ्रपतन</h2>

                    <p className='text-xl text-white px-5'>
                        2 मिनट से कम, कुछ झटके में स्खलन
                    </p>
                </div>

            </div>


            <div className='flex items-center justify-center border w-[90%] bg-[#272727] px-3 md:w-[80%] mx-auto my-4  rounded-xl'>
                <div className=''>
                    <img src="/main/hfsxy_images/a2.webp" alt="sdf" loading='lazy' className='w-[120px] py-3 rounded-xl' />
                </div>

                <div className='text-start'>
                    <h2 className='text-[#ffd201] text-start px-5 font-bold text-2xl'>कमजोर लिंग</h2>

                    <p className='text-xl text-white px-5'>
                        छोटा/पतला/ढीला लिंग आकार &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    </p>
                </div>

            </div>


            <div className='flex items-center justify-center border w-[90%] bg-[#272727] p-3 md:w-[80%] mx-auto my-4  rounded-xl'>
                <div className=''>
                    <img src="/main/hfsxy_images/a3.webp" alt="sdf" loading='lazy' className='w-[120px] py-3 rounded-xl' />
                </div>

                <div className=''>
                    <h2 className='text-[#ffd201] text-start px-5 font-bold text-2xl'>कमजोरी</h2>

                    <p className='text-xl text-white px-5'>
                        स्ट्रेंथ, स्टैमिना और एनर्जी की कमी
                    </p>
                </div>

            </div>


            <div className='bg-[#f1f1f1]'>

                <div>
                    <img src="/main/hfsxy_images/h1.webp" alt="asd" loading='lazy' className='w-[280px] sm:w-[450px] py-4 mx-auto' />
                </div>

                <div>
                    <img src="/main/hfsxy_images/tested.webp" alt="asd" loading='lazy' className='w-[280px] sm:w-[450px] py-4 mx-auto' />
                </div>

                <div className='px-2 text-lg'>
                    <p className='py-4'>
                        पुरुषों में यौन समस्याये तेजी से बढ़ रही है। ऐसे में उन्हें चाहिये Horse Fire Tablet जैसी असरदार औषधि जो समस्या पर तेजी से असर करें और इसे जड़ से उखाड़ फेके।
                    </p>

                    <p>
                        Horse Fire Tablet एक शुद्ध नेचुरल और आयुर्वेदिक औषधि है। Horse Fire Tablet पुरुष यौन कमजोरी का सबसे प्रभावी समाधान बनकर उभरा है, इसके इस्तेमाल से पुरुष लगातार अपने यौन स्वास्थ्य में सुधार कर रहे है। साल 2023-24 में AR Ayurveda ब्रांड के सिर्फ एक उत्पाद Horse Fire Tablet के 5 लाख नए ग्राहक जुड़े है। इस उत्पाद का सक्सेस रेट 97.6% है जो किसी भी अन्य यौन वर्धक उत्पाद से कई गुना बेहतर है।
                    </p>
                </div>

            </div>


            <div className='bg-[#f5bb1c]'>

                <div className='grid grid-cols-6 text-center gap-3 px-2'>

                    <div className='col-span-2'>

                        <div>
                            <img src="/main/hfsxy_images/f1.webp" alt="ads" loading='lazy' className='mx-auto py-3' />
                        </div>

                        <p className='font-semibold'>20 लाख+ संतुष्ट ग्राहक</p>


                    </div>

                    <div className='col-span-2'>
                        <div>
                            <img src="/main/hfsxy_images/f2.webp" alt="ads" loading='lazy' className='mx-auto py-3' />
                        </div>

                        <p className='font-semibold'>97.6% सफलता दर</p>

                    </div>


                    <div className='col-span-2'>

                        <div>
                            <img src="/main/hfsxy_images/f3.webp" alt="ads" loading='lazy' className='mx-auto py-3' />
                        </div>

                        <p className='font-semibold'>100% प्रामाणिक प्रोडक्ट</p>


                    </div>

                </div>

            </div>



        </section>)
}

export default Sec1