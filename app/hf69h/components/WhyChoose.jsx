import React from 'react'
import { MdOutlineSupportAgent } from 'react-icons/md'

function WhyChoose() {
    return (
        <div className='bg-white'>
            <div className=' w-full max-w-6xl mx-auto'>

                <div className="grid md:grid-cols-12 items-center gap-10 my-5 py-5">
                    <div className="col-span-6 fontNoto md:text-left text-center order-2 md:order-none">
                        <div className="fontNoto text-3xl md:text-5xl font-extrabold px-2 text-black md:!leading-normal">
                            भारतीय पुरुष <span className="text-[#d51515]">Horse Fire</span> क्यों चुनते है
                        </div>
                        <div className="text-black text-justify fontNoto text-[1.2rem] md:text-xl py-4 px-2">
                            सबसे ज्यादा ध्यान देने वाली बात ये है कि कोई भी दवा प्रत्येक व्यक्ति की बॉडी पर अलग- अलग तरीके से रियेक्ट करता है। इसलिए जरुरी नहीं की किसी एक दवा से प्रत्येक पुरुष को लाभ मिले इसलिए हमारे एक्सपर्ट्स प्रत्येक पुरुष के बॉडी, हाइट, उम्र तथा वर्तमान स्वास्थ्य का आंकलन कर उनके लिए स्पेशल पैक तैयार करते है।
                        </div>
                        <div className="text-black text-justify fontNoto text-[1.2rem] md:text-xl py-4 px-2">
                            यही वजह है की पुरुष को 100% लाभ मिलता है शीघ्रपतन की समस्या मिटती है, लिंग साइज बढ़ता है, यौन प्रदर्शन में सुधार होता है और Horse fire के लाभ का प्रचार होता है और पुरुष Horse Fire पर भरोसा कर इसे चुनते है और लाभान्वित होते है।
                        </div>
                        <div className="bg-[#f9d830] flex items-center justify-center md:w-72 w-80 py-1 rounded-2xl mx-auto md:mx-0">
                            <div className="">
                                <MdOutlineSupportAgent className="inline text-5xl  " />
                            </div>
                            <div className="fontKalnia md:text-md text-black  text-center rounded-2xl font-semibold">
                                <a href="#form">
                                    स्वास्थ्य विशेषज्ञ से बात करें
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-6 ">
                        <img
                            className='w-full mx-auto'
                            src="/main/hf69h_images/people.png"
                            alt='people'
                        />
                    </div>
                </div>
            </div>
        </div>

    )
}

export default WhyChoose