import dynamic from 'next/dynamic'
import React from 'react'
import { TiArrowRightThick } from "react-icons/ti";


const Form = dynamic(() => import('./Form'));

const section1 = () => {
    return (
        <div>

            <div className='bg-[url(https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/4a77968d-2294-44a0-ec7e-7ccd8dae7f00/public)] bg-cover'>
                <div className='w-[70%] mx-auto flex items-center py-5'>
                    <div>
                        <Form />
                    </div>
                </div>
            </div>




            <div className=' bg-[url(https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/00712365-111b-4e6e-0dd2-977d0d547000/public)] text-white bg-cover pb-8' >
                <div className='fontNoto text-xl'>
                    <h1 className='w-[60%] text-center font-semibold mx-auto text-2xl py-5'>अध्ययनों से पता चलता है कि विभिन्न क्षेत्रों में लिंग के औसत आकार में बड़ा अंतर होता है। अफ्रीकी देशों की आबादी अक्सर दक्षिण एशिया (भारत सहित) की तुलना में बड़े लिंग आकार की रिपोर्ट करती है।</h1>
                </div>

                <div className='flex items-center text-center text-white justify-center gap-5'>
                    <div>
                        <div>
                            <h1 className='fontAnton text-4xl py-4'>Indian</h1>
                        </div>

                        <div>
                            <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/3e1ebf0a-a630-427b-a6ac-6eb5db038800/public" alt="sdsdsd" loading='lazy' className='rounded-2xl' />
                        </div>
                    </div>



                    <div>
                        <div>
                            <h1 className='fontAnton text-4xl py-4'>AFRICAN</h1>
                        </div>

                        <div>
                            <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/0422a1f9-16ed-4799-ecbf-5e887c508100/public" alt="sdsdsd" loading='lazy' className='rounded-2xl' />
                        </div>
                    </div>

                </div>

            </div>






            <div className='bg-[url(https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/395ee52a-6e8d-4765-13a0-56554b785200/public)] bg-cover py-8'>

                <div className='w-[80%] mx-auto flex items-center justify-center gap-5'>
                    <div>
                        <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/663fb255-bd42-4b5a-7e0d-8f270cdfbc00/public" alt="dsds" loading='lazy' />
                    </div>


                    <div>
                        <h1 className='fontAnton text-5xl text-[#fceb15]'>PROBLEMS OF 70% OF INDIAN</h1>


                        <div className='flex items-center fontNoto text-2xl pt-5 gap-3'>
                            <div><TiArrowRightThick size={"40px"} className='text-[#fceb15]' /></div>
                            <div className='text-white pt-3'>भारतीय पुरुषों का पेनिस साइज औसतन 4.9 इंच होता है जो की बहुत कम है।</div>
                        </div>


                        <div className='flex items-center fontNoto text-2xl pt-5 gap-3'>
                            <div><TiArrowRightThick size={"40px"} className='text-[#fceb15]' /></div>
                            <div className='text-white pt-3'>उनकी सेक्स अवधि 6 मिनट से भी कम है जो महिलाओं की अपेक्षा काफी कम है।</div>
                        </div>


                        <div className='flex items-center fontNoto text-2xl pt-5 gap-3'>
                            <div><TiArrowRightThick size={"40px"} className='text-[#fceb15]' /></div>
                            <div className='text-white pt-3'>अफ्रीकन पुरुषो के मुकाबले जोश, उत्तेजना, ताकत तथा स्टैमिना काफी कम है।</div>
                        </div>


                        <div className='flex items-center fontNoto text-2xl pt-5 gap-3'>
                            <div><TiArrowRightThick size={"40px"} className='text-[#fceb15]' /></div>
                            <div className='text-white pt-3'>भारतीय पुरुष कम उम्र में ही सेक्स से दूर होने लगते है, यानि कामेच्छा भी कम है।</div>
                        </div>



                    </div>


                </div>

            </div>



            <div className='bg-[#fffee7] py-8'>
                <div className='w-[70%] mx-auto flex justify-center items-center gap-5'>


                    <div className='  fontNoto'>
                        <h1 className='text-3xl font-bold'>
                            क्यों कमजोर है भारतीय पुरुषों का लिंग?
                        </h1>

                        <p className='text-xl py-5'>अमेरिका की एक सेक्सुअल हेल्थ संस्था Institute for Advanced Study of Human Sexuality (IASHS) के प्रोफेसर Dr. Ted McIlvenna ने परीक्षण में खुलासा किया है की एशियाई देशों (भारत, पाकिस्तान, चीन, जापान, नेपाल, अन्य ) के आहार में लिंग को पोषण देने वाले तत्वों की कमी है। जिसकी वजह से इनके लिंग का आकार अमेरिका और अफ्रीकन देशों के तुलना में काफी कम और कमजोर होता है। साथ ही शरीर की स्टैमिना और सेक्स टाइमिंग भी बहुत कम होती है। </p>
                    </div>


                    <div>
                        <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/4dc6703c-2c02-4b79-e46f-c0c3082ec200/public" alt="sdsd" loading='lazy' className='min-w-[350px]' />
                    </div>


                </div>






                <div className='w-[70%] mx-auto flex items-center justify-center gap-3 bg-[#fff116] p-5 my-5 rounded-xl'>
                    <div>
                        <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/e0008e08-aac2-4adf-5176-cd47d0f92700/public" alt="sdsd" loading='lazy' className='min-w-[300px] rounded-full' />
                    </div>

                    <div className='  fontNoto'>
                        <h1 className='text-3xl font-bold'>
                            क्यों कमजोर है भारतीय पुरुषों का 
                        </h1>

                        <p className='text-xl py-5'>अमेरिका की एक सेक्सुअल हेल्थ संस्था Institute for Advanced Study of Human Sexuality (IASHS) के प्रोफेसर Dr. Ted McIlvenna ने परीक्षण में खुलासा किया है की एशियाई देशों (भारत, पाकिस्तान, चीन, जापान, नेपाल, अन्य ) के आहार में लिंग को पोषण देने वाले तत्वों की कमी है। जिसकी वजह से इनके लिंग का आकार अमेरिका और अफ्रीकन देशों के तुलना में काफी कम और कमजोर होता है। साथ ही शरीर की स्टैमिना और सेक्स टाइमिंग भी बहुत कम होती है। </p>
                    </div>

                </div>










            </div>




        </div>
    )
}

export default section1
