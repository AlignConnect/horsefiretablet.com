import React from 'react'
import { MdLocalOffer } from "react-icons/md";

const OrderNow = () => {
    return (
        <div className="">
            <div className="bg-[#be3127]  text-white py-5 flex items-center justify-between">

                <div className="w-full sm:max-w-6xl mx-auto grid sm:grid-cols-2 justify-center items-center">

                    <div className="flex items-center gap-1 fontJosefin sm:text-2xl text-[1rem]  font-bold uppercase">
                        <MdLocalOffer size={25} />

                        Save <span className=' sm:text-3xl text-[1.5rem]'>10%</span> Extra on Prepaid Order
                    </div>


                    <a href='#form' className="bg-yellow-400 fontJosefin sm:text-xl text-center text-black font-extrabold pt-2 pb-1 mt-3 sm:mt-0 px-4 rounded w-1/2 mx-auto box_shaddow animate-ease-in">
                        BUY NOW
                    </a>

                </div>

            </div>
        </div>
    )
}

export default OrderNow