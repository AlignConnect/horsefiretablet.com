import dynamic from 'next/dynamic';
import React from 'react'

const CommonImg = dynamic(() => import("./CommonImg"), {
    loading: () => <p>Loading...</p>,
});

const HowitWork = () => {
    return (
        <div>
            <div className='max-w-xl mx-auto mt-4'>

                <h1 className='text-center bg-red-600 font-extrabold  text-3xl md:text-[2.5rem] py-3 pt-6 text-white'>
                    How It Works
                </h1>

                <div className='space-y-7 pt-6'>

                    <div className='flex justify-center items-center'>

                        <div className='!w-28 mx-auto'>
                            <CommonImg imglink="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/a8dc46b2-a3cb-4c82-9f02-8c30b308ed00/public" />
                        </div>
                        <h1 className='md:text-xl font-medium md:ml-3 ml-2'>प्रत्येक टेबलेट शरीर में टेस्टोस्टेरोन हॉर्मोन और नाइट्रिक ऑक्साइड का उत्पादन करता है जिससे रक्त वाहिकाएं चौड़ी होती है। </h1>

                    </div>


                    <div className='flex justify-center items-center'>

                        <div className='!w-28 mx-auto'>
                            <CommonImg imglink="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/f25b59e4-9353-492a-d132-2a2f9ffebe00/public" />
                        </div>
                        <h1 className='md:text-xl font-medium md:ml-3 ml-2'>लिंग की तंग चमड़ी खुलती है और नसों में रक्त तेजी से बहाव होता है, फलस्वरूप लिंग कड़कपन में सुधार होता है।  </h1>

                    </div>


                    <div className='flex justify-center items-center'>

                        <div className='!w-28 mx-auto'>
                            <CommonImg imglink="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/106c301f-e3ad-47d0-1c32-3c9779cba800/public" />
                        </div>
                        <h1 className='md:text-xl font-medium md:ml-3 ml-2'>इस्तेमाल के पहले दिन से इसके घटक समस्या की रिकवरी करने लगते है, और शरीर को कमजोरी मुक्त कर देते है।   </h1>

                    </div>



                    <div className='flex justify-center items-center'>

                        <div className='!w-28 mx-auto'>
                            <CommonImg imglink="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/d085f3f2-3506-4f2b-2e6d-c0e8d28abc00/public" />  </div>
                        <h1 className='md:text-xl font-medium md:ml-3 ml-2'>जोश, उत्साह, एनर्जी, स्टैमिना बढ़ाने का कार्य करता है जिससे पुरुष बिना थके लम्बा सेक्स प्रदर्शन करने में सक्षम बनता है।  </h1>

                    </div>


                </div>
            </div>
        </div>
    )
}

export default HowitWork