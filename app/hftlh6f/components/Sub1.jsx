import React from 'react'
import { Anton } from "next/font/google";

const anton = Anton({
    subsets: ['latin-ext'],
    display: 'swap',
    weight: ['400']
});

const Sub1 = () => {
    return (    
        <div className="sm:mt-10">
            <div className="w-9/12 mx-auto sm:mx-0 sm:w-7/12">
                <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/909ac3da-cc8b-47cf-77c9-c9649e624000/public" className='sm:hidden' alt="pic" height='100%' width='100%' loading='lazy' />

                <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/12653eef-7db6-4527-0460-88f7ca3fdc00/public" className='hidden sm:block' alt="pic" height='100%' width='100%' loading='lazy' />
            </div>
            <div className="text-center sm:text-left my-5 sm:my-8">
                <p className={`${anton.className} text-[12vw] sm:text-[6vw] leading-none`}>HORSE FIRE TABLET</p>
                <p className={`text-[5vw] mt-2 sm:text-[2vw] leading-none text-[#01dfe9]`}>Doctor Recommended & Trusted</p>

            </div>
        </div>
    )
}

export default Sub1