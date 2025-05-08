import dynamic from 'next/dynamic';
import React from 'react'
const FlipAmazon = dynamic(() => import('./FlipAmazon'), {
    loading: () => <p>Header Loading</p>
});

const CommonCom = () => {
    return (
        <div>
            <div className="bg-black text-white fontPoppins text-center py-3 text-[1.15rem] sm:text-xl">
                <p className="font-bold text-2xl sm:text-3xl text-[#e6d90f] italic">Place your order today!</p>
                <p className="mb-2">Hurry !! suplies are limited!</p>

               <FlipAmazon/>
            </div>
        </div>
    )
}

export default CommonCom