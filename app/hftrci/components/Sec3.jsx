import dynamic from 'next/dynamic';
import React from 'react'

const OrderBtn = dynamic(() => import('./OrderBtn'), {
  loading: () => <p>loader</p>
});

const Sec3 = () => {

  return (
    <div className="relative z-20 py-5 px-5  m:px-10 bg-black text-white">

      <div className="grid grid-cols-3 items-center sm:text-3xl gap-5 sm:gap-10  font-bold text-center my-5">
        <div className="">
          <img src={'https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/fd2996f7-c422-4c1f-d81b-41400185f000/public'} alt="pic" height='100%' width='100%' loading='lazy' className='mb-3 sm:mb-5' />
          <p className="">Quick Discharge</p>
        </div>

        <div className="">
          <img src={'https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/202b313d-43b8-4492-e615-0abde7d78900/public'} alt="pic" height='100%' width='100%' loading='lazy' className='mb-3 sm:mb-5' />
          <p className="">Small penis</p>
        </div>

        <div className="">
          <img src={'https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/610de6cc-199c-4f60-2a78-84f2bc7ff300/public'} alt="pic" height='100%' width='100%' loading='lazy' className='mb-3 sm:mb-5' />
          <p className="">Low stamina</p>
        </div>
      </div>
      <OrderBtn />

      <div className="my-5 text-2xl sm:text-[1.7rem] font-bold">

        <div className="border border-dashed border-white rounded-tl-3xl rounded-br-3xl text-center">
          <div className="bg-[yellow] border rounded-bl-full h-[3rem] w-1/2 ms-auto border-none"></div>

          <div className="mt-10 mb-7 sm:mt-20 sm:mb-16 px-3 sm:px-5">
            <p className=""><span className="text-[yellow]">सेक्स कमजोरी</span> से पीड़ित पुरुष तो <span className="text-[yellow]">2 मिनट</span> भी नहीं टिक पाते ऊपर से अधिकांश पुरुषों के लिंग में टेढ़ापन है, <span className="text-[yellow]">पतलापन</span> है, <span className="text-[yellow]">छोटा</span> है या <span className="text-[yellow]">ढीला</span> है ऐसे में वो न तो सेक्स का मजा ले पाते है और न ही अपनी पार्टनर को <span className="text-[yellow]">संतुष्ट</span> कर पाते है। </p>
            <p className="mt-7 sm:mt-16">
            अगर आप अपनी पार्टनर को सेक्स का असली मजा नहीं दे पाते तो यकीन मानिये वो आपके साथ खुश नहीं है, और वो <span className="text-[yellow]">बेवफाई कर सकती है</span> ! पर आप चिंतामुक्त हो जाये <span className="text-[yellow]">Horse Fire Tablet</span> लेने के बाद ऐसा नहीं होगा
            </p>
          </div>
          <div className="bg-[yellow] border rounded-tr-full h-[3rem] w-1/2 border-none"></div>
        </div>
      </div>
    </div>
  )
}

export default Sec3