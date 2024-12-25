import dynamic from 'next/dynamic';
import React from 'react'
import { MdKeyboardDoubleArrowRight } from "react-icons/md";


const Header = () => {



    const success_rate = (arr) => {
        return arr?.map((e, key) => {
            return <div className='flex items-center justify-start sm:justify-center sm:gap-3 gap-5 py-2 ' key={key}>
                <div className="">
                    <img src={e.icon} className=" sm:w-2/3 w-14 mx-auto" alt="icons" />
                </div>
                <div className="fontBebas leading-tight">
                    <div className='uppercase text-[#bd3128]  font-extrabold sm:text-[2.4vw] text-[10vw] text-left '>
                        <div
                            dangerouslySetInnerHTML={{ __html: e.title }}
                        />
                    </div>
                    <div className='uppercase text-black sm:text-[1.7vw] text-2xl text-left'>
                        <div
                            dangerouslySetInnerHTML={{ __html: e.sub_title }}
                        />
                    </div>
                </div>
            </div >
        })
    }



    return (

        <div className=''>
            <div className="bg-[url(https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/hfarc2/public)] bg-cover text-white">

                <div className='grid sm:w-[80%] mx-auto grid-cols-1 sm:grid-cols-2 items-center '>

                    <div className='fontAnton'>
                        <h1 className='text-[28px] sm:text-4xl mt-5 text-center sm:text-start'>#1 Selling Sex Booster in India</h1>


                        <div className=' uppercase text-7xl mb-4 bg-gradient-to-b to-[#ef3803] from-[#fee600] text-transparent bg-clip-text'>
                            <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/f9804568-0bdf-484f-6f78-9d08940af700/public" alt="sdsd" loading='lazy' className='sm:w-3/2 sm:relative -left-2 hidden sm:block' />

                            <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/708f5fa1-82e2-4e1b-f157-7809bbdb3000/public" alt="sdsd" loading='lazy' className='sm:w-3/2 sm:relative -left-2 block sm:hidden' />


                        </div>

                        <div className='text-[22px] sm:text-6xl font-[700] fontNoto leading-none px-2'>
                            <p className='inline sm:block'>
                                Get Big Penis,
                            </p>
                            <p className='inline sm:block'>
                                Do Last Long Sex
                            </p>
                        </div>

                        <div className='text-[18px] text-center sm:text-start sm:text-3xl fontNoto my-3 sm:my-5 leading-tight px-2'>
                            <p className='inline sm:block'> "सेक्स टाइम और सख्ती बढ़ाएं</p>
                            <p className='inline sm:block'> 100% गारंटी के साथ"</p>
                        </div>

                        <div className='fontPoppins text-[16px] sm:text-xl px-2 sm:px-0 font-semibold'>
                            <p className='flex items-center  '> <MdKeyboardDoubleArrowRight size={"35px"} />  GET HARD ROCK ERECTIONS</p>
                            <p className='flex items-center '> <MdKeyboardDoubleArrowRight size={"35px"} /> GET LONG LASTING TIMING</p>
                        </div>

                        <div className='hidden sm:block'>
                            <button className='bg-[#fdfe58] text-black px-16 rounded-full py-2 text-3xl my-5 pt-3'>BUY NOW</button>
                        </div>

                    </div>





                    <div>

                        <div>
                            <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/hfarc1/public" alt="dssdsd" loading='lazy' />
                        </div>

                    </div>

                </div>



            </div>



            <div className="grid sm:grid-cols-3 justify-center items-center sm:py-5 py-2">
                {
                    success_rate([
                        {
                            icon: "https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/77cd3d1e-802c-4580-6dbb-fb10a0c5b300/public",
                            title: "+3500 Units",
                            sub_title: "Sold Per Day in India"
                        },

                        {
                            icon: "https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/77cd3d1e-802c-4580-6dbb-fb10a0c5b300/public",
                            title: "30 Lacks Satisfied",
                            sub_title: " Customers & Counting"
                        },
                        {
                            icon: "https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/77cd3d1e-802c-4580-6dbb-fb10a0c5b300/public",
                            title: "96% Success Rate",
                            sub_title: "in Sexual Problems"
                        },

                    ])
                }
            </div>


            {/* <div className='bg-[#ffe401] flex items-center flex-wrap justify-evenly text-xl sm:text-2xl'>
                <h1 className='font-semibold  w-[270Px] py-2 sm:py-5  border-b sm:border-0 border-black'>+3500 Units Sold Per Day in India</h1>
                <h1 className='font-semibold  w-[270Px] py-2 sm:py-5  border-b sm:border-0 border-black'>30 Lacks Satisfied Customers & Counting</h1>
                <h1 className='font-semibold  w-[270Px] py-2 sm:py-5  '>96% Success Rate in Sexual Problems</h1>
            </div> */}





        </div>

    )
}

export default Header
