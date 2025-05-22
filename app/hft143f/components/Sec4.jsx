import Image from 'next/image'
import React from 'react'

const Sec4 = () => {
  return (
    <div className='relative'>
      <div className="relative z-10 py-5 sm:py-10">
        <div className="text-center  text-3xl sm:text-5xl">
          <p className="text-[#1c5f02] font-extrabold leading-none">गारंटीड समाधान</p>
          <p className="inline bg-red-700 fontPoppins text-white px-5 sm:px-10 py-1"> <span className="font-bold">HORSE FIRE </span> <span className="text-2xl sm:text-3xl">Tablet</span></p>
        </div>

        <div className="px-3 sm:px-5 mt-5 sm:mt-10">
          <div className="flex gap-3 my-5">
            <span >&#9673;</span>
            <p className="text-xl sm:text-2xl font-bold">हॉर्सफायर एक अनोखा आयुर्वेदिक फार्मूलेशन है जिसके इस्तेमाल से निचे दिए निम्न लाभ गॉरन्टीड मिलते है। </p>
          </div>
          <div className="grid grid-cols-2 text-2xl sm:text-4xl align-middle items-center gap-x-3 font-semibold">
              <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/d5c22ca4-fd9c-49d5-4952-85e1d54ab800/public" alt="pic" height='100%' width='100%' loading='lazy' />
              <p className="text-end">लिंग की <span className="text-red-600">लम्बाई</span> और मोटाई </p>
              <p className="">हर बार <span className="text-red-600">लम्बा-धुआंधार सेक्स</span></p>
              <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/59276eeb-a5ef-4f23-05d3-01917b1a2200/public" alt="pic" height='100%' width='100%' loading='lazy' />
              <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/43e59d4b-35fc-4d02-0e81-2931d7827d00/public" alt="pic" height='100%' width='100%' loading='lazy' />
              <p className="text-end">1 गोली में <span className="text-red-600">4 राउंड</span> बिना थके</p>
              <p className=""><span className="text-red-600">शारीरिक क्षमता</span> में तेज बृद्धि</p>
              <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/585dc372-5499-43d9-958a-ca5610635800/public" alt="pic" height='100%' width='100%' loading='lazy' />
          </div>
        </div>
      </div>
      <Image src='https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/2345b296-772f-4a75-2d08-f96f60b91700/public' fill loading='lazy' alt='sock' />
    </div>
  )
}

export default Sec4