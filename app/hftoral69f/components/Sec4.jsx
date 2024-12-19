
import dynamic from 'next/dynamic';
import React from 'react'

const FlipAmazon = dynamic(() => import('./FlipAmazon'), {
  loading: () => <p>loader</p>
});

const Sec4 = () => {

  return (
    <div className='my-5 sm:my-7'>
      <div className="px-3 sm:px-10 " >

        <div className="grid grid-cols-3  gap-3 sm:gap-7 text-white text-[1rem] sm:text-xl text-center font-bold mb-5">
          <div className="bg-zinc-900 px-2 sm:px-6 rounded-2xl pt-4 pb-2">
            <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/6e33ea1c-507e-437f-2938-8ba9d725f300/public" alt="pic" height='100%' width='100%' loading='lazy' className='w-3/4 sm:w-1/2 mx-auto' />
            <p className="mt-2 sm:mt-3">20 लाख+ संतुष्ट ग्राहक </p>
          </div>

          <div className="bg-zinc-900 px-2 sm:px-6 rounded-2xl pt-4 pb-2">
            <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/e7140b40-2323-41a1-79df-2751fa642c00/public" alt="pic" height='100%' width='100%' loading='lazy' className='w-3/4 sm:w-1/2 mx-auto' />
            <p className="mt-2 sm:mt-3">97.6% सफलता दर</p>
          </div>

          <div className="bg-zinc-900 px-2 sm:px-6 rounded-2xl pt-4 pb-2">
            <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/5e3bef9c-bc3a-4189-feaf-8e139c1a2700/public" alt="pic" height='100%' width='100%' loading='lazy' className='w-3/4 sm:w-1/2 mx-auto' />
            <p className="mt-2 sm:mt-3">100% प्रामाणिक प्रोडक्ट</p>
          </div>
        </div>
       <div className="-mx-3">
       <FlipAmazon />
       </div>
        <p className="mt-5 mb-3">17 जड़ीबूटियों और भस्मो से बना "Horse Fire Tablet" सेक्स टाइमिंग, लिंग का साइज और कड़कपन बढ़ाकर पुरुष को निर्दयी बना देता है। औजार में ऐसा बदलाव आ जाता है कि हर शॉट में महिला पार्टनर की चीख निकल जाए। टाइमिंग कई गुना बढ़ जाता है और सेक्स लगातार घंटो तक चलता ही रहता है। </p>

        <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/0459a5a1-2da0-4239-6c88-1a69932ecd00/public" alt="pic" height='100%' width='100%' loading='lazy' className='rounded-3xl ' />
      </div>
    </div>
  )
}

export default Sec4