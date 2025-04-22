"use client"
import { number } from 'joi';
import React from 'react'
import { FaStar } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux';
import { FaRupeeSign } from "react-icons/fa";
import { selectProductById } from '@/lib/slice/product.slice';
import ShiProcket from '@/app/commonUse/shiprocket';
import { Poppins } from 'next/font/google';

import { IoMdStar, IoMdStarHalf } from "react-icons/io";
import { reasons } from './Helper';
import { useGetShopifyDataQuery } from '@/lib/service/product.service';



const poppin = Poppins({
    subsets: ['latin'],
    display: 'swap',
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});


const Checkout = () => {
  const { data } = useGetShopifyDataQuery({ id: "9565083402555" });
    const { allVariants, selectProducts } = useSelector(store => store.productslice);

    const dispatch = useDispatch();

 
    

    const imageSrc = data?.images?.find((x) => String(x?.id) === String(selectProducts?.image_id))?.src;
    // console.log(allVariants, selectProducts)




    return (
        <div className='bg-[url(https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/bb098966-328c-4987-81a0-e7429f4c5e00/public)]'>


            <div className='grid grid-cols-1 sm:grid-cols-2 sm:w-[70%] mx-auto items-center'>
                <div>
                    <img src={imageSrc} alt="asd" loading='lazy' className='w-[70%] mx-auto py-10' />
                </div>

                <div className={poppin.className}>
                    <h1 className='font-black text-4xl sm:text-6xl text-center sm:text-start' id='form'>Horse Fire Tablet</h1>
                    <h3 className=' text-[17px] sm:text-3xl py-2 text-center sm:text-start text-gray-700'>An ayurvedic secret for better sexual life</h3>

                    <div className='flex items-center text-3xl sm:pb-10 sm:pt-5 gap-3 sm:gap-5 px-2'>
                        <p className='text-2xl sm:text-4xl font-semibold'>4.3</p>
                        <div className='flex items-center '>

                            <IoMdStar className='grendiant text-[30px] sm:text-[40px]' />
                            <IoMdStar className='grendiant text-[30px] sm:text-[40px]' />
                            <IoMdStar className='grendiant text-[30px] sm:text-[40px]' />
                            <IoMdStar className='grendiant text-[30px] sm:text-[40px]' />
                            <IoMdStarHalf className='grendiant text-[30px] sm:text-[40px]' />

                        </div>
                        <p className='text-lg sm:text-xl text-blue-600'>881+ Reviews</p>
                    </div>


                    <div className='hidden sm:flex items-center gap-4'>
                        <strike className="flex items-center text-xl sm:text-3xl font-semibold text-gray-600">
                            <FaRupeeSign />
                            {Number(selectProducts?.compare_at_price).toFixed()}
                            {/* {Currency(selectProducts?.compare_at_price)} */}
                        </strike>
                        <p className='flex items-center text-3xl sm:text-5xl font-bold'>
                            <FaRupeeSign />
                            {Number(selectProducts?.price).toFixed()}
                            {/* {Currency(selectProducts?.price)} */}
                        </p>
                        <p className='flex items-center text-xl font-semibold bg-[#ca1211] text-white px-3 py-1'>{100 - ((selectProducts?.price * 100) / selectProducts?.compare_at_price).toFixed()} % OFF </p>


                    </div>

                    <div className='py-5 flex items-center gap-5 px-2'>
                        <h2 className='text-3xl sm:text-4xl font-bold'>Size : </h2>
                        <h3 className='font-medium text-2xl sm:text-3xl sm:pt-2'>{selectProducts?.title}</h3>
                    </div>


                    {/* ----------------------------------- */}


                </div>





            </div>

            <div className='bg-white text-center p-5 sm:py-2 hidden sm:block w-[70%] mx-auto mb-5 rounded-xl'>
                <h1 className='text-green-700 sm:py-3 font-bold text-2xl '>Get extra 10% discount on online payment</h1>
            </div>




            <div className='grid grid-col-1 sm:grid-cols-2 sm:max-w-6xl mx-auto items-center sm:gap-16 px-2'>

                {
                    allVariants?.map(((e, key) => {

                        return <div className='py-2 sm:py-5 relative w-[95%] ms-auto' key={key}>


                            <div className='absolute transform translate-x-[-50%] translate-y-[-50%] top-[50%]'>

                                {/* <div className={`border rounded-full ${e.id === selectProducts?.id ? "bg-red-600 border-red-600" : "bg-white"}`}> */}
                                <img src={"https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/ec00d3fa-0dae-4f52-5cb5-de651bc29000/public"} alt="sadsd" loading='lazy' className={`${e.id === selectProducts?.id ? "block" : "hidden"} w-[60%] mx-auto`} />

                                <div className={`border-2 border-gray-500  p-4 bg-white rounded-full ${e.id !== selectProducts?.id ? "block" : "hidden"}`}>

                                </div>

                                {/* </div> */}

                            </div>


                            <div className={`${poppin.className} rounded-3xl px-5 sm:px-10 ${e.id === selectProducts?.id ? "border-2 border-red-700 bg-[#f7e227]" : "border-2"}`} onClick={() => dispatch(selectProductById({ selectProductData: e }))}>

                                <h1 className={`${poppin.className} text-xl sm:text-[25px] font-bold py-3 sm:py-8`}>{e?.title} ({100 - ((e?.price * 100) / e?.compare_at_price).toFixed()}% Off) </h1>

                                <div>
                                    <div className='flex items-center gap-2 sm:gap-4'>
                                        <strike className="flex items-center text-md sm:text-3xl font-semibold text-gray-600"><FaRupeeSign />
                                            {Number(e?.compare_at_price).toFixed()}
                                            {/* {Currency(e?.compare_at_price)} */}
                                        </strike>
                                        <p className='flex items-center text-3xl sm:text-5xl font-bold'><FaRupeeSign />
                                            {/* {Currency(e?.price)} */}

                                            {Number(e?.price).toFixed()}
                                        </p>
                                    </div>
                                </div>


                                <h1 className='py-2 sm:py-5 text-sm sm:text-xl font-medium	 text-gray-700'>(extra 10% discount on online payment)</h1>


                            </div>


                        </div>


                    }))}


            </div>


            <div className='text-center'>
                <ShiProcket />
            </div>

            <div className="text-lg font-semibold text-center">We are Available on</div>

            <div className="flex items-center gap-7 py-3 justify-center">
                <a href="https://bit.ly/3yJa2zr">
                    <img
                        src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/1369a0a5-d191-4392-bf47-5c170ecb8600/public"
                        alt=""
                        className="sm:w-40 w-32 mx-auto"
                    />
                </a>
                <a href="https://amzn.to/3QZQiOx">
                    <img
                        src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/3edacd08-1afb-49b1-9aba-2cdda7681400/public"
                        alt=""
                        className="sm:w-40 w-32 mx-auto "
                    />
                </a>
            </div>


            <img
                src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/e87c6e29-6fc5-41dd-cde9-912aca28dc00/public"
                sizes="560px"
                alt="checkout "
                loading="lazy"
                className="mx-auto mt-2 mb-5 sm:mt-5 sm:mb-10"
                width="560"
                height="326"
            />


            <div className=" grid grid-cols-4 gap-5  mx-auto w-full sm:w-[40%] my-5">
                {reasons([
                    {
                        reason_img:
                            "https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/dfdd2c54-e5f0-47af-d805-a440a3cd4a00/public",
                        reason_title: "ISO Certified",
                    },
                    {
                        reason_img:
                            "https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/c27825f6-1dea-48f7-cb9b-c8b2309c2300/public",
                        reason_title: "FDA approved",
                    },
                    {
                        reason_img:
                            "https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/56e95e80-2ee4-45fc-ce12-fcfd650e7100/public",
                        reason_title: "Pure Ayurvedic",
                    },
                    {
                        reason_img:
                            "https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/b0480c36-7e8d-4968-db61-7c5fd2249500/public",
                        reason_title: "GMP Certified",
                    },
                ])}
            </div>



        </div>
    )
}

export default Checkout
