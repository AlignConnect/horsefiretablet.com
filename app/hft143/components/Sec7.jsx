import dynamic from 'next/dynamic';
import React from 'react'

const OrderBtn = dynamic(() => import('./OrderBtn'), {
  loading: () => <p>loader</p>
});

const MostSelling = dynamic(() => import('@/app/commonUse/mostSelling/most_selling_1'), {
  loading: () => <p>loader</p>
});

const Sec7 = () => {

  const list = [{
    image: 'https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/2a90fdf1-40f5-4a2c-51f1-ddb8f3332700/public',
    text: '10 दिनों की मनी बैक गारंटी'
  },
  {
    image: 'https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/f00cb0c6-cc55-48eb-3bb2-0c2ec3a3a100/public',
    text: 'COD यानि डिलीवरी पर भुगतान'
  },
  {
    image: 'https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/50e352f6-e34b-48f5-5ccd-be0efc373800/public',
    text: 'सिक्योर और गुप्त डिलीवरी'
  },
  {
    image: 'https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/d5e8d8b7-dcbe-4519-aa0a-e57f91b3bc00/public',
    text: 'प्रीपेड आर्डर पर 10% अतिरिक्त बचत'
  }
  ]

  return (
    <div className="bg-black ">
      <div className='relative py-5 sm:pt-10 px-3 sm:px-5 text-center'>
        <div className="flex gap-5 items-center justify-center">
          <img src='https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/6278ce4b-1ce6-4565-47a5-a06512334a00/public' width='100px' height='100px' loading='lazy' alt='pic' />
          <p className="text-[#18dd43] text-3xl sm:text-5xl font-extrabold">भरोसे की वजह?</p>
        </div>
        <p className="text-[#f3d405]  mt-2">भारतीय पुरुष भरोसा करते है क्योंकि हम देते है-</p>

        <div className="grid grid-cols-2 mt-5 sm:grid-cols-4 text-xl text-white items-center justify-center gap-3 mb-5">
          {list.map((e,key) => {
            return <div className="" key={key}>
              <img src={e.image} width='100px' height='100px' loading='lazy' alt='pic' className='mx-auto' />
              <p className="mt-4"> {e.text}</p>

            </div>
          })}

        </div>
        <OrderBtn/>

      </div>


      <MostSelling />

      <div className="bg-[#ffde01] py-5 px-3 sm:px-10 flex items-center gap-3">
        <img src='https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/79494fc8-dfef-4623-5b90-d55c8a2fcb00/public' width='100px' height='100px' loading='lazy' alt='pic' className='mx-auto' />
        <p className="">इतना ही नहीं यह आपके एक सिंगल कॉल पर भी उपलब्ध है। यानि कॉल पर एक्सपर्ट संपर्क करे और पूरी जानकारी के साथ प्रोडक्ट आर्डर करें।</p>

      </div>
    </div>
  )
}

export default Sec7