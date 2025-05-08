"use client";
import { Noto_Serif_Devanagari } from "next/font/google";
import { useEffect } from "react";

const noto = Noto_Serif_Devanagari({
    subsets: ['devanagari'],
    display: 'swap',
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});

const Section5 = () => {

    useEffect(() => {
        localStorage.setItem("PATH_KEY", "/hfd");
    }, []);



    return (
        <div className={`${noto.className} w-full`}>

            <div className="py-4 bg-[#3851a3]">
                <div className="max-w-7xl mx-auto pb-6 px-2 md:pt-10 fontPoppins">
                    <div className="grid grid-cols-12 m-0 items-center">
                        <div className="col-span-12 md:col-span-5 px-0 md:px-2 ">
                            <h1 className="text-xl text-center px-3 bg-white font-semibold rounded-full py-3 text-gray-500">Honest opinion by our satisfied customers</h1>
                        </div>
                        <div className="col-span-12 md:col-span-4 my-6 md:my-0  px-0 md:px-2">
                            <div className="flex items-center gap-1 ">
                                <h2 className="text-6xl font-bold text-white">0 </h2>
                                <h2 className="md:text-2xl text-xl font-semibold text-white"> <span className="text-[#40d4c8]">side effects,</span> complaints from our customers</h2>
                            </div>
                        </div>
                        <div className="col-span-12 md:col-span-3  px-0 md:px-2 mt-2 md:mt-0">
                            <div className=" text-center md:text-start pop_imagehfv">
                                <a className="bg-[#40d3c9] text-xl  font-bold fontPoppins py-3 px-11 w-full rounded-full hover:bg-[##40d3c9] shadow-lg shadow-[##40d3c9]/50 transition-colors text-white" href='#form'>
                                    INQUIRY NOW
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Section5;