import dynamic from 'next/dynamic';
import React from 'react'

const OrderBtn = dynamic(() => import('./OrderBtn'), {
  loading: () => <p>loader</p>
});


const Sec4 = () => {
  return (
    <div className="">

      <div className='max-w-[90rem] mx-auto py-5 sm:py-10 xl:pt-20 '>
        <div className="grid sm:grid-cols-12 ">

          <div className="sm:col-span-8">
            <img src='https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/d977718e-be4f-411c-a581-082bfa2b9c00/public' alt="pic" height='100%' width='100%' loading='lazy' />
          </div>
          <div className="sm:col-span-4">
            <div className="text-2xl sm:text-4xl px-3 sm:px-0 grid gap-3 sm:gap-5 lg:-ml-[20%] sm:mt-[25%]">
              <div className="flex gap-5 items-center">
                <img src='https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/354e9ab3-4edf-46ca-377b-03d321d63100/public' alt="pic" height='100%' width='100%' loading='lazy' className='w-10' />
                <p className=""><span className="fontAnton italic font-black text-3xl sm:text-5xl ">10</span>&nbsp; लाख + संतुष्ट ग्राहक</p>
              </div>
              <div className="flex gap-5 items-center">
                <img src='https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/354e9ab3-4edf-46ca-377b-03d321d63100/public' alt="pic" height='100%' width='100%' loading='lazy' className='w-10' />
                <p className="">ऑफिसियल वेबसाइट</p>
              </div>
              <div className="flex gap-5 items-center">
                <img src='https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/354e9ab3-4edf-46ca-377b-03d321d63100/public' alt="pic" height='100%' width='100%' loading='lazy' className='w-10' />
                <p className=""><span className="fontAnton italic font-black text-3xl sm:text-5xl ">10 DAYS</span>&nbsp; मनी बैक गारंटी</p>
              </div>
              <div className="flex gap-5 items-center">
                <img src='https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/354e9ab3-4edf-46ca-377b-03d321d63100/public' alt="pic" height='100%' width='100%' loading='lazy' className='w-10' />
                <p className="">कैश ऑन डिलीवरी सुविधा</p>
              </div>
              <div className="flex gap-5 items-center">
                <img src='https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/354e9ab3-4edf-46ca-377b-03d321d63100/public' alt="pic" height='100%' width='100%' loading='lazy' className='w-10' />
                <p className=""><span className="fontAnton italic font-black text-3xl sm:text-5xl ">100%</span>&nbsp;  प्रामाणिक प्रोडक्ट</p>
              </div>
            </div>

          </div>

        </div>
      </div>
      <OrderBtn />
    </div>

  )
}

export default Sec4