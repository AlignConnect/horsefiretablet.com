import React from 'react'
import { Noto_Serif_Devanagari } from "next/font/google";
import { FaLongArrowAltRight } from "react-icons/fa";


const noto = Noto_Serif_Devanagari({
    subsets: ['devanagari'],
    display: 'swap',
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});

const Sec2 = () => {
    return (
        <section className={noto.className}>

            <div className='p-3'>
                <p className='bg-white text-lg p-3 border border-dashed rounded-md'>
                    Horse Fire Tablet एक शुद्ध नेचुरल और आयुर्वेदिक औषधि है। आयुर्वेद को सदियों से सबसे सफल और दुष्प्रभाव मुक्त चिकित्सा पद्धति के तौर पर जाना जाता है। आयुर्वेद का अनुसरण और जड़ीबूटियों का रिसर्च कर यह औषधि तैयार की गयी है। Horse Fire Tablet पुरुष यौन कमजोरी का सबसे प्रभावी समाधान बनकर उभरा है, क्योंकि इसमें आयुर्वेद की सबसे मशहूर जड़ीबूटियों की उच्चतम क्वालिटी इस्तेमाल में लिया गया है।
                </p>
            </div>


            <div className='w-[320px] mx-auto my-5'>
                <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/1ceed410-3aef-4066-c208-99aeb63f3700/public" alt="asd" loading='lazy' className='w-full' />
            </div>


            <div>



                <div className='bg-white flex gap-2 items-center px-3 my-2'>
                    <FaLongArrowAltRight size={25} />
                    <div className='text-[18px] mt-2'>अद्भुत, असरदार और अविश्वसनीय</div>

                </div>


                <div className='bg-white flex gap-2 items-center px-3 my-2'>
                    <FaLongArrowAltRight size={25} />
                    <div className='text-[18px] mt-2'>10 दिनों की मनी बैक गारंटी सुविधा</div>

                </div>




                <div className='bg-white flex gap-2 items-center px-3 my-2'>
                    <FaLongArrowAltRight size={25} />
                    <div className='text-[18px] mt-2'>100% संतोषजनक परिणाम नहीं तो पैसा वापिस</div>

                </div>


                <div className='bg-white flex gap-2 items-center px-3 my-2'>
                    <FaLongArrowAltRight size={25} />
                    <div className='mt-2 text-[18px] '>अभी आर्डर करें और 50% से ज्यादा की बचत करें</div>

                </div>


                <div className='bg-white flex gap-2 items-center px-3 my-2'>
                    <FaLongArrowAltRight size={25} />
                    <div className='text-[18px] mt-2'>प्रीपेड खरीदारी पर 10% की अतिरिक्त बचत</div>

                </div>



            </div>



            <div className='relative'>

                <div className='absolute bg-[#fff601] font-bold pt-2 px-4 transform translate-x-[-50%] translate-y-[-50%] left-[50%]'>

                    विशेष:-

                </div>

                <p className='text-white font-semibold px-3 border border-[#fff601] w-[90%] mx-auto border-dashed pt-8 mt-7'>
                    ये सभी कामोत्तेजक जड़ीबूटियां वैज्ञानिक रूप से प्रमाणित है और<span className='text-[#1a9b02]'> HORSE FIRE TABLET</span> भी आयुष मंत्रालय भारत सकरार द्वारा प्रमाणित उत्पाद है।
                </p>

            </div>

            <hr className='border border-green-900 my-5' />

            <div className='grid grid-cols-6 justify-center '>

                <div className='col-span-2 text-center'>

                    <h1 className='text-4xl text-[#1eb800] font-bold'>0%</h1>
                    <p className='text-white'>Side Effects</p>

                </div>

                <div className='col-span-2 text-center'>

                    <h1 className='text-4xl  text-[#1eb800] font-bold'>100%</h1>
                    <p className='text-white'> Benefits</p>

                </div>

                <div className='col-span-2 text-center'>

                    <h1 className='text-4xl  text-[#1eb800] font-bold'>100%</h1>
                    <p className='text-white'>Satisfaction Guarantee </p>

                </div>




            </div>


            <hr className='border border-green-900 my-5' />


            <div className='w-[80%] mx-auto border border-[#fff601]  my-4 border-dashed border-b-0'>
                <h2 className='bg-[#fff601] pt-2 text-center text-xl font-bold'>HORSE FIRE TABLET</h2>
                <p className='text-center text-white pt-3 text-xl'>में मौजूद जड़ीबूटियां</p>
            </div>

            <div className='w-full'>
                <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/5e5c3477-d8bf-4bb4-fc9a-da3a2066a400/public" alt="asdsd" loading='lazy' className='w-full' />
            </div>

                


        </section>)
}

export default Sec2