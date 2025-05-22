import React from 'react'

const CommonCom = () => {
    return (
        <div>
            <div className="bg-black text-white fontPoppins text-center py-3 text-[1.15rem] sm:text-xl">
                <p className="font-bold text-2xl sm:text-3xl text-[#e6d90f] italic">Place your order today!</p>
                <p className="">Hurry !! suplies are limited!</p>
                <p className="">order now and avail the offer</p>

                <div className="text-center text-white font-bold mt-2">
                    <a href="#form" className="inline-block text-xl bg-gradient-to-t from-red-500 to-red-700 px-1 rounded-full py-3 pop_imagehfv">
                        <span className=" bg-gradient-to-b from-red-500 to-red-700 px-5 rounded-full py-2">ORDER NOW</span>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default CommonCom