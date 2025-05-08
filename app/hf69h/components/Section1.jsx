import React from 'react'
import { MdOutlineSupportAgent } from 'react-icons/md'

function Section1() {
    return (
        <div className='md:py-14 py-7 bg-[#efefef]'>
            <div className=' w-full max-w-6xl mx-auto'>
                <div className="fontNoto text-xl md:text-4xl font-semibold text-center md:text-left py-2 italic">
                    "अगर एक जड़ीबूटी से लाभ मिल सकता है तो संयोजित फॉर्मूले के इस्तेमाल से लाभ कितना बढ़ सकता है, आपकी उम्मीद से भी ज्यादा !"
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

        </div>
    )
}

export default Section1