import dynamic from 'next/dynamic';
import Image from 'next/image'
import React from 'react'

const Order_now = dynamic(() => import('./Order_now'), {
  loading: () => <p>loading</p>
});

const Sec4 = () => {

  const data = [
    "100% money-back guarantee",
    "97.6% success rate",
    "COD payment is available",
    "Passed all lab testing"
  ]

  return (
    <div className=' relative '>
      <div className="relative z-10 py-5 sm:py-10 max-w-7xl mx-auto">
        <p className="text-justify sm:text-center  sm:text-2xl font-semibold  px-3">Not anymore! AR Ayurveda presents the Horse Fire Tablet to solve your problems and make you a star performer in bed. It is not just a product, it is the solution to your problems. Horse Fire Tablet helps boost the testosterone hormone, also known as the male sexual hormone, and this helps to get a better erection during sex.</p>



        <div className="my-5 sm:mt-20 px-3 lg:px-0">
          <div className="grid md:grid-cols-2 gap-5 sm:gap-20">
            <div className="">

            <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/81cc7088-ecf0-4e4f-c7d2-10d614586200/public" alt="pic2" height='100%' width='100%' loading='lazy' />
            <div className="sm:hidden">
              <Order_now />
            </div>
            </div>
            <div className="uppercase">
              <p className="font-bold text-3xl sm:text-5xl">Reasons to trust:</p>

              <div className="text-[1.1rem] sm:text-3xl font-bold">
                {data.map((e, key) => {
                  return <div className="flex items-center gap-2 sm:gap-3 mt-3 sm:mt-10" key={key}>
                    <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/68adf8fe-59ff-4aee-4444-ebc0f050a100/public" alt="pic2" height='100%' width='100%' loading='lazy' className='w-10 sm:w-16' />
                    <p className="">{e}</p>
                  </div>
                })}
              </div>
            </div>
          </div>
        </div>
        <div className="hidden sm:block">
              <Order_now />
            </div>
      </div>
      <Image fill alt='pic' src='https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/aee9ead8-1134-43d6-8707-0c4ecadee700/public' loading='lazy' />


    </div>
  )
}

export default Sec4