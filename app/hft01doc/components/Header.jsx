import React from 'react'

function Header() {


    const Delivery_Option = (arr) => {
        return arr?.map((e, key) => {
            return <div className="" key={key}>
                <div className='grid grid-cols-12 items-center sm:py-4 py-1'>
                    <img src={e.delivery_icon} className=' col-span-3 sm:w-24 w-16 mx-auto' alt='Delivery_Option_images' loading="lazy" />
                    <div className="text-left col-span-9 ">
                        <div className='fontBebas sm:text-3xl text-xl  text-white'>{e.delivery_title}</div>
                        <div className='fontPoppins sm:text-md text-sm  text-white'>{e.delivery_content}</div>
                    </div>
                </div >
            </div>
        })
    }

    return (
        <section >
            <div className='doctor_header_background'>
                <div className="w-full max-w-7xl text-center mx-auto ">
                    <div className="grid sm:grid-cols-2 items-center">
                        <div className="">
                            <div className="sm:w-10/12 w-9/12 mx-auto sm:mx-0 my-2">
                                <div className="fontPoppins text-[#329bd5] text-left sm:text-xl text-md font-semibold sm:pb-1">
                                    RECOMMENDED BY
                                </div>
                                <div className="fontBebas text-[#194d87] font-semibold  text-[6.5rem] md:text-[12.7rem] text-left mt-3 !leading-[4.4rem] sm:!leading-[8.8rem]">
                                    TRUSTED
                                </div>
                                <div className="fontPoppins text-[#329bd5] text-end sm:text-xl text-md font-semibold">
                                    DOCTORS
                                </div>
                            </div>

                            <div className="bg-white fontPoppins sm:w-1/2 w-72 mx-auto sm:mx-0 text-md py-1 rounded-md my-2 font-semibold">
                                #Sexual Health Comes First
                            </div>

                            <div className="fontNoto text-xl sm:text-4xl sm:text-left font-extrabold sm:py-5 py-2">
                                जाने सेक्स टाइमिंग और लिंग साइज<br /> बढ़ाने की NO.1 औषधि के बारे में
                            </div>

                            <div className=' sm:w-1/2 w-52 sm:mx-0 mx-auto fontPoppins bg-[#2c6cf4] rounded-xl sm:text-2xl text-white py-1'>
                                <a href="#form">Book Appointment</a>
                            </div>
                        </div>
                        <div className="">
                            <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/99aa7de9-4159-472c-fad1-90eb9f74eb00/public" alt="header_doctor" className="md:w-[95%] w-80 mx-auto pt-5" fetchPriority='high' loading='eager' />
                        </div>
                    </div>
                </div>
            </div>

            <div className='bg-[#3660c6] '>
                <div className='w-full max-w-7xl text-center mx-auto grid sm:grid-cols-3 '>
                    {
                        Delivery_Option([
                            {
                                delivery_icon: "https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/ac8143e0-e703-4051-3198-084215312b00/public",
                                delivery_title: "FREE SHIPPING",
                                delivery_content: " On all orders"
                            },
                            {
                                delivery_icon: "https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/578621c1-8453-4575-bf43-dfb7f27fc000/public",
                                delivery_title: "OFFICIAL DISCOUNT",
                                delivery_content: "save big on next purchasing"
                            },
                            {
                                delivery_icon: "https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/89f29230-73ba-4030-b2c1-519611be4600/public",
                                delivery_title: "CUSTOMER SUPPORT",
                                delivery_content: "get instant support"
                            }
                        ])
                    }
                </div>
            </div>
        </section>
    )
}

export default Header