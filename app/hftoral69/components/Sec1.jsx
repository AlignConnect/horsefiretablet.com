import dynamic from 'next/dynamic';
import React from 'react'

const OrderBtn = dynamic(() => import('./OrderBtn'), {
    loading: () => <p>loader</p>
  });

const Sec1 = () => {
    return (
        <div>
            <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/1fabef06-1d49-481a-6c4f-4b4b40501e00/public" alt="pic" height='100%' width='100%' loading='lazy' />
            <OrderBtn/>
            {/* <hr className="w-1/2 h-1 mx-auto bg-black" /> */}
            <div className="mx-3  sm:w-3/4 sm:mx-auto">
                <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/c19a92fe-cea1-4cc9-c222-7acf242c1500/public" alt="pic" height='100%' width='100%' loading='lazy' className='border-4 my-5 sm:my-10 border-yellow-500' />
            </div>

            <div className="mx-3 sm:mx-12">
                <p className="">
                शीघ्रपतन, छोटे, टेढे और ढीले लिंग से पुरुष उस तरह का सेक्स नहीं कर पाते है जैसा एक लड़की अपने बॉयफ्रेंड या पति से चाहती है। एक सर्वे के अनुसार ज्यादातर महिलाएं उत्तेजित भी नहीं होती तब तक उनके पुरुष पार्टनर झड़ जाते है यानि की "गरम करके ठंडा ही छोड़ देते है" ये हर दूसरे भारतीय की समस्या है। जबकि हर महिला एक गबरु मर्द ढूंढती है जो उनको चोद कर ठंडा कर सके। 
                </p>
            </div>

        </div>
    )
}

export default Sec1