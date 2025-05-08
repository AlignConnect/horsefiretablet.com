import dynamic from 'next/dynamic';
import React from 'react'

const OrderBtn = dynamic(() => import('@/app/commonUse/AmaFlipDialog/FlipAmazon'));

const Chooseus = () => {
    return (
        <section>

            <div className="chooseus_bg">

                <div className="w-full sm:max-w-[80%] mx-auto">

                    <div className="">

                        <div className="grid sm:grid-cols-2 items-center justify-center">

                            <div className="pt-5">
                                <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/5cc87fb3-d7de-41db-ded3-a85eb138d800/public" alt="" className='w-3/4 mx-auto' />
                            </div>


                            <div className="">



                                <div className="sm:bg-inherit bg-white">

                                    <div className='block sm:hidden'>
                                        <OrderBtn />

                                    </div>

                                    <div className="uppercase fontBebas sm:text-[4vw] text-[3rem] font-extrabold sm:text-left text-center pt-2">
                                        Choose <span className='text-[#e83a53]'>Us</span>
                                    </div>

                                    <div className="fontNoto text-[#e83a53] sm:text-[4.5vw] text-[2.4rem] font-extrabold sm:text-left text-center">
                                        आजमाए और पाएं
                                    </div>



                                </div>



                                <div className="grid items-center justify-center sm:justify-normal py-3">
                                    <ul className='fontNoto text-black sm:text-[1.8vw] list-disc text-[1.3rem] font-extrabold ml-7'>
                                        <li>टेस्टोस्टेरोन का उच्च स्तर </li>
                                        <li>ज्यादा शक्ति, ज्यादा जोश</li>

                                        <li>45 मिनट से ज्यादा सेक्स</li>
                                        <li>बड़ा-मोटा व सख्त लिंग</li>

                                    </ul>
                                </div>

                            </div>


                        </div>

                    </div>


                </div>

            </div>



        </section>

    )
}

export default Chooseus