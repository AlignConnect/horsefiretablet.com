import dynamic from 'next/dynamic';
import React from 'react'
const OrderBtn = dynamic(() => import('./OrderBtn'), {
  loading: () => <p>loader</p>
});


const Sec6 = () => {

  const list = [
    {
      title: '100% मनी बैक गारंटी',
      image: 'https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/84306d03-b2ab-48aa-b8cd-bf472dc56c00/public',
    },
    {
      title: "India's No.1 शक्तिवर्धक उत्पाद",
      image: 'https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/6903b628-2aa5-482a-78dc-2b1578df1700/public',
    },
    {
      title: 'COD पेमेंट सुविधा उपलब्ध',
      image: 'https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/e26ef5da-f7e0-4fcc-4dcb-09b59ca9e700/public',
    },
    {
      title: 'Flipkart, Amazon पर लिस्टेड',
      image: 'https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/e4c4ab1b-35df-4465-2d39-e31b6de59400/public',
    },
  ]

  return (
    
    <div className="max-w-7xl mx-auto my-5 sm:my-10 xl:mt-16 px-3 xl:px-0">

      <div className='grid grid-cols-12 gap-5 sm:gap-10 xl:gap-20 items-center mb-7'>
        <div className="col-span-12 sm:col-span-6">
          <img src='https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/8d6b56fe-b4cc-4a2e-a11e-32bd38f83900/public' alt="pic" height='100%' width='100%' loading='lazy' />
        </div>
        <div className="col-span-12 sm:col-span-6 justify-center items-center text-center">
          <div className="rounded-3xl bg-[#0e2022] grid grid-cols-2 py-5 sm:py-5 xl:py-10 px-1 sm:px-10 gap-3 sm:gap-10 xl:gap-20 border ">
            {list.map((e, key) => {
              return <div className="flex flex-col justify-center items-center sm:h-[250px]" key={key}>
                <img src={e.image} alt="pic" height='100%' className='w-[30%] mx-auto' loading='lazy' />
                <p className="mt-5 text-xl sm:text-3xl">{e.title}</p>
              </div>
            })}
          </div>
        </div>
      </div>
      <OrderBtn/>
    </div>
  )
}

export default Sec6