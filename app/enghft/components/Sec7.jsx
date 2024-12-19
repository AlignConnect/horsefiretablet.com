import dynamic from 'next/dynamic';
import Image from 'next/image'
import React from 'react'

const Order_now = dynamic(() => import('./Order_now'), {
  loading: () => <p>loading</p>
});

const Sec7 = () => {

  const list = [
    "One tablet twice a day after a meal with lukewarm milk/water",
    "For better results, take 1 tablet with a glass of milk",
    "See improvement in sex performance within a month",
  ]

  return (
    <div className=' relative '>
      <div className="relative z-10 py-5 sm:py-10 max-w-4xl mx-auto px-3 sm:px-0">

        <p className="text-center font-bold text-2xl sm:text-4xl">Right Way of Consumption</p>
        <div className="font-semibold italic sm:mb-10">

          {list.map((e, key) => {
            return <div className={`flex  my-5 sm:mt-16 items-center sm:w-8/12 gap-2 sm:gap-5 ${key % 2 !== 0 ? "ms-auto" : ""}`} key={key}>
              <p className="bg-white py-3 px-5 sm:px-6 text-center w-max rounded-full leading-tight h-fit text-2xl sm:text-5xl   font-bold">{key + 1}</p> <p className="  w-10/12 ">{e}</p>
            </div>
          })}
        </div>

        <Order_now/>

      </div>
      <Image fill alt='pic' src='https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/aee9ead8-1134-43d6-8707-0c4ecadee700/public' loading='lazy' />


    </div>
  )
}

export default Sec7