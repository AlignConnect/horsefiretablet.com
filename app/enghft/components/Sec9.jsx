import Image from 'next/image'
import React from 'react'

const Sec8 = () => {

  const data = [

  ]

  return (
    <div className=' relative '>
      <div className="relative z-10 py-10 sm:py-20 px-3 sm:px-0 max-w-7xl mx-auto">
        <div className="grid sm:grid-cols-12 gap-5 sm:gap-16 items-center">
          <div className="sm:col-span-6">
            <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/3e5cf371-0a43-487d-973d-2337ba092000/public" alt="pic" className="" width='100%' height='100%' loading='lazy' />

          </div>
          <div className="sm:col-span-5 text-center sm:text-left">
            <p className="sm:text-4xl">If you want them all, step ahead and order the Horse Fire Tablet today.</p>
            <p className="font-bold text-2xl sm:text-4xl mt-2"> You will be able to perform like a star!</p>
            <p className="font-bold text-blue-600 my-5 sm:mt-16 text-2xl sm:text-[1.78rem]"> AVAILABLE ON</p>
            <div className="flex sm:w-full justify-center my-5 items-center sm:justify-start gap-3 sm:gap-5">
                <a href="https://bit.ly/3w4Z8Ds" className=""><img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/1369a0a5-d191-4392-bf47-5c170ecb8600/public" alt="pic" className="w-36 sm:w-40" width='100%' height='100%' /></a>
                <a href="https://www.amazon.in/Ayurveda-HorseFire-Tablet-Men/dp/B0BYJ8KM7S?th=1" className=""><img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/3edacd08-1afb-49b1-9aba-2cdda7681400/public" alt="pic" className="w-36 sm:w-40" width='100%' height='100%' /></a>

            </div>
            <div className="">
              <a href="#form" className="uppercase bg-black px-10  py-3 sm:py-5 sm:px-20 rounded-xl inline-block text-white font-bold">Order now</a>
            </div>
          </div>
        </div>
      </div>
      <Image fill src='https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/e01b7326-06c8-4330-025a-046848600800/public' alt='pic8' loading='lazy' />
    </div>
  )
}

export default Sec8