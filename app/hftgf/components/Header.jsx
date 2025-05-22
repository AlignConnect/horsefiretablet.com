import React, { useEffect, useState } from 'react';


const Header = () => {

    const benifits = (arr) => {
        return arr?.map((e, key) => {
            return <div className='flex items-center gap-2 py-2 sm:py-4' key={key}>
                <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/6060eb68-74aa-4aa3-4106-4635814b6c00/public" className='md:w-10 w-6 rounded-2xl' alt='icon' />
                <div className='fontNoto font-extrabold  sm:text-4xl text-[1.4rem]  text-white pt-2'>{e.content}</div>
            </div >

        })
    }


    return (
        <section>

            <div className="bg_header_  fontNoto">



                <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/c9504bbf-327f-45b8-9d8a-44d7ab31ab00/public" alt="" className='w-full p-3' />


                <div className="text-left sm:pl-10 pl-3">
                    {
                        benifits([
                            {
                                content: "लम्बा और चट्टान जैसा सख्त लिंग"
                            },
                            {
                                content: "बिना झड़े लंबी सेक्स टाइमिंग"
                            },
                            {
                                content: "4 राउंड तक सेक्स बिना थके"
                            },
                            {
                                content: "डिस्चार्ज के बाद भी नेक्स्ट राउंड के लिए कड़कपन"
                            }
                        ])
                    }
                </div>


                <div className="relative bg-white py-6 flex items-center justify-center sm:my-8 my-6">

                    <div className="absolute -top-4 sm:-top-6 bg-red-700 text-white text-[1.6rem] sm:text-4xl font-bold px-6 sm:pt-4 pt-2 rounded-md shadow-md text-center ">
                        तो आपकी तलाश अब खत्म हुई!
                    </div>

                    <div className="flex items-center justify-center gap-4 mt-3 sm:mt-6">

                        <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/29c79eeb-dd1f-49f7-da39-ac0b61004d00/public" alt="" className='sm:w-10 w-8 mx-auto' />



                        <div className="border-2 border-red-600 rounded-xl px-6 pt-5 mt-3">
                            <span className="text-red-700 text-4xl sm:text-6xl font-bold">पेश है</span>
                        </div>

                        <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/cbb3afcc-930a-4fa6-44ce-d8b0df86d900/public" alt="" className='sm:w-10 w-8 mx-auto' />
                    </div>
                </div>


                <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/d600bdc9-2367-47d0-b63a-b37207408300/public" alt="" className='w-full'/>
            </div>
        </section>
    );
};

export default Header;
