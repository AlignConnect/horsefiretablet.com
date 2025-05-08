import { useGlobalContext } from '@/app/statemanage/context';
import React from 'react'



function Header() {

    const { hours, minutes, remainingSeconds } = useGlobalContext();
    const min = minutes.toString()
    const hour = hours.toString()
    const sec = remainingSeconds
    return (
        <div className='w-full text-white'>
            <div className="flex items-center sm:text-2xl font-semibold gap-2 sm:gap-3">
                <div className="clippathsec w-5/12 flex-grow  bg-red-600 text-center pt-5 pb-3 sm:pt-7 sm:pb-4  max-h-full "><a href="#form" className="">INQUIRY NOW</a></div>
                <div className="sm:pt-3 pt-2 w-7/12 sm:pe-10 text-black">एक्सपर्ट से बात करने के लिए अभी क्लिक करे</div>
            </div>
            <div className="bg-[#160d0e] py-5 px-3 sm:px-16">
                <p className=" text-xl   sm:text-3xl "><span className="text-[#1f9e4b] text-4xl sm:text-5xl float-start leading-[50%] sm:!leading-[90%] font-bold">INDIA'S #1&nbsp;</span><span className=" sm:leading-normal">टाइमिंग और लिंग साइज बढ़ाने वाला प्रोडक्ट</span></p>
                <div className="text-center fontOswald ">
                    <p className="text-[3.8rem] sm:text-[7.2rem] font-semibold leading-none text-[#e8d322]">HORSE FIRE</p>
                    <p className="text-3xl sm:text-5xl tracking-[1rem] sm:tracking-[2rem]">TABLET</p>
                </div>
                <div className="text-center ">
                    <p className="text-2xl sm:text-3xl mt-4 sm:mt-7">ऑफर खत्म होने में शेष समय</p>
                    <p className="inline-block fontNunito bg-white px-5 sm:px-7 text-4xl sm:text-5xl py-1 sm:py-2 text-red-500 font-bold">{hour + " : " + min + " : " + sec}</p>
                </div>
                <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/5e7e82f4-5ba1-43d6-a676-329570caa600/public" alt="pic" width='100%' height='100%' fetchPriority='high' className='my-5' />

                <a href="#form" className=""><p className="fontPoppins bg-red-600 rounded-full  text-center py-3 text-xl font-bold">BUY NOW</p></a>
            </div>
        </div>
    )
}

export default Header