import React from 'react'
import { MdOutlineSupportAgent } from 'react-icons/md'

function HowItsWork() {
    return (
        <div className='bg-[#d51515]'>
            <div className=' w-full max-w-6xl mx-auto'>

                <div className="grid md:grid-cols-12 items-center gap-10 my-5 py-8">
                    <div className="col-span-6">
                        <img
                            className='md:w-[55%] w-2/3 mx-auto'
                            src="/main/hf69h_images/product_hft.png"
                            alt='product_hft'
                        />
                    </div>
                    <div className="col-span-6 fontNoto md:text-left text-center">
                        <div className="fontNoto text-3xl md:text-5xl font-extrabold px-2 py-2 text-white">
                            How it Works
                        </div>
                        <div className="text-white text-justify fontNoto text-[1.2rem] md:text-xl py-4 px-2">
                            प्रत्येक टेबलेट शरीर में टेस्टोस्टेरोन हॉर्मोन और नाइट्रिक ऑक्साइड का उत्पादन करता है जिससे रक्त वाहिकाएं चौड़ी होती है।
                            लिंग की तंग चमड़ी खुलती है और नसों में रक्त का तेजी से बहाव होता है, फलस्वरूप लिंग के कड़कपन में सुधार होता है।
                            इस्तेमाल के पहले दिन से इसके घटक समस्या की रिकवरी करने लगते है, और शरीर को कमजोरी मुक्त कर देते है।
                            जोश, उत्साह, एनर्जी, स्टैमिना बढ़ाने का कार्य करता है पुरुष बिना थके लम्बा सेक्स प्रदर्शन करने में सक्षम बनता है।
                        </div>
                        <div className="bg-[#f9d830] flex items-center justify-center md:w-72 w-80 py-1 rounded-2xl mx-auto md:mx-0">
                            <div className="">
                                <MdOutlineSupportAgent className="inline text-5xl  " />
                            </div>
                            <div className="fontKalnia md:text-md text-black  text-center rounded-2xl font-semibold">
                                <a href="#form">
                                    Talk to health expert
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default HowItsWork