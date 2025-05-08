import Image from 'next/image'
import React from 'react'

const Sec3 = () => {
  return (
    <div className='relative'>
      <div className="relative z-10 py-[8vw] text-center max-w-7xl mx-auto">
        <div className="max-w-lg mx-auto fontPoppins pb-3 border-b-2 font-bold border-dotted text-2xl sm:text-3xl">
          <span className="text-green-500">&#9679;</span> About Horse Fire Tablet
        </div>

        <div className="font-extrabold text-[6vw] sm:text-[3vw] py-[6vw] leading-snug px-3 sm:px-0 ">
        पर निराश होने की जरुरत नहीं है। आज के समय में लाखों पुरुष "हॉर्सफायर टेबलेट" के इस्तेमाल से स्टैमिना, पावर, लिंग का आकार और सेक्स अवधि आसानी से बढ़ाकर अपने कॉन्फिडेंस को बूस्ट कर रहे है और सेक्स में कर रहे है धमाकेदार प्रदर्शन !
        </div>
      </div>
      <Image src='https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/ce45f113-e370-49db-fe7c-69945dfa3400/public' loading='lazy' fill alt='pic' />
    </div>
  )
}

export default Sec3