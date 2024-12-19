import React from 'react'

function Order_now() {
    return (
        <div className='w-full max-w-7xl text-center mx-auto sm:my-3 mt-2 mb-6'>
            <div className="text-xl sm:text-2xl font-bold">UPTO <span className="text-red-600 font-extrabold text-3xl">50%</span> DISCOUNT</div>
            <div className=" text-center sm:mb-5 my-4">
                <a className="bg-stone-900 text-xl  font-bold fontPoppins py-2 px-11 w-full rounded-full text-white" href='#form'>
                    INQUIRY NOW
                </a>
            </div>
        </div>
    )
}

export default Order_now