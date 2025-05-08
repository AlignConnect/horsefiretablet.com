import Image from 'next/image'
import React from 'react'

const Header = () => {
    return (
        <div>

            {/* <div className='flex justify-center py-3 border border-bottom-xl'>
                <Image src={"https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/17554022-8633-4549-8c43-fc8450a47300/public"} height={100} width={180} alt='no' />
            </div> */}

            <div className='text-center py-3 font-black'>
                <h3 className='text-[#ff0000] text-2xl'>HORSE FIRE TABLET</h3>
                <small className='italic'>Ayurvedic Medicine For Long Lasting In Bed</small>
            </div>

        </div>
    )
}

export default Header