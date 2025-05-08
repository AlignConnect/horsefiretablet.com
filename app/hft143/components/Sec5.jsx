import dynamic from 'next/dynamic';
import Image from 'next/image'
import React from 'react'

const OrderBtn = dynamic(() => import('./OrderBtn'), {
  loading: () => <p>loader</p>
});

const Sec5 = () => {
  return (
    <div className='relative'>
      <div className='relative z-10'>
        <img src='https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/9493fc24-e948-455e-f2cb-50bf7ce1b200/public' width='100%' height='100%' loading='lazy' alt='pic' />
        <div className="text-[#ddb40a] px-3 py-5 sm:pt-8 text-justify">

          <p><span className="text-white font-bold">Horsefire Tablet</span> उपयोग के प्रथम दिन से ही समस्या रिकवरी पर काम करता है। यह टेस्टोस्टेरोन हॉर्मोन और नाइट्रिक ऑक्साइड बढ़ाकर लिंग के कॉर्पस केवरोसोम में रक्त प्रवाह बढ़ाता है और कोशिकाओं का निर्माण करता है जिससे लिंग के नसों का फैलना, साइज का बढ़ना सुनिश्चित होता है।</p>

          <p className="mt-5">जो पुरुष मिनट भर या उससे भी कम समय में डिस्चार्ज हो जाते है या बड़े लिंग की चाहत रखते है हॉर्सफायर टेबलेट उनके लिए एक वरदान के सामान काम करना है। </p>

        </div>
        <div className="pb-5">

          <OrderBtn />
        </div>
      </div>
      <Image src='https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/cf284b23-a076-4024-1eb1-aeec051d2000/public' fill loading='lazy' alt='sock' />
    </div>
  )
}

export default Sec5