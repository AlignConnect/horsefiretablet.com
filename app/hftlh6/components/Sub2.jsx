import React, { useEffect, useState } from 'react'
import { MdGroups } from "react-icons/md";

const Sub2 = () => {

    const [namesArray, setNamesArray] = useState([
        "Chatresh", "Aryan", "Daksh", "Jeet", "Gautam",
        "Brijesh", "Azad", "Rachit", "Devansh", "Vedant",
        "Nitesh", "Harsh", "Tejas", "Reyansh", "Kevin"
    ]);
    const [currentNames, setCurrentNames] = useState(["Jay", "Pravin","Mitesh","Jaimin","Savan"]);
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            const nextNames = namesArray.slice(index, index + 5);
            setCurrentNames(nextNames);

            setIndex(prevIndex => (prevIndex + 5) % namesArray.length);
        }, 5000);

        return () => clearInterval(interval); 
    }, [namesArray, index]);



    return (
        <div className="fontPoppins text-sm sm:text-md">

            <div className='border-4 border-gray-300 rounded-2xl p-5 ps-0  bg-[#0e2022]'>
                <div className="flex gap-3 ps-5  font-semibold  items-center">
                    <MdGroups className='text-xl' /> OUR RECENTLY BUYER
                </div>

                <ul className='my-3 sm:my-5'>
                    {currentNames.map((name, idx) => (
                        <li key={idx} className='flex justify-between items-center py-3 px-2 sm:px-5 border-b-2  '>
                            <div className="">
                                <span className="text-[#6bc30f]">recently baught by</span> {name}
                            </div>
                            <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/202b6583-3b21-43a8-d8ec-b509f2899200/public" alt="pic" height='100%' width={18} loading='lazy' />
                        </li>
                    ))}
                </ul>

            </div>

            <p className="font-bold text-lg sm:text-xl mt-3 sm:mt-5 ms-5">
                {parseInt((Date.now() - parseInt(Date.now() / 2)) / 100000000)} bottles sold last week
            </p>
        </div>
    )
}

export default Sub2