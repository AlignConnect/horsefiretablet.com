import dynamic from 'next/dynamic';
import React from 'react'
import "../components/hftoral69.css"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Image from 'next/image';

const OrderBtn = dynamic(() => import('./OrderBtn'), {
  loading: () => <p>loader</p>
});

const YoutubeFramecu469 = dynamic(() => import('./YoutubeFrame'), {
  loading: () => <p>loader</p>
});

const trustList = [
  {
    image: 'https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/7e6d8b27-c964-494b-2769-c04789428000/public',
    text: '100% मनी बैक गारंटी'
  },
  {
    image: 'https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/10b91eb6-6938-441b-5aa6-345d3fd87800/public',
    text: "India's No.1 यौनवर्धक उत्पाद"
  },
  {
    image: 'https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/c050119a-5a31-476e-a9d5-ea16986b8e00/public',
    text: "COD पेमेंट सुविधा उपलब्ध"
  },
  {
    image: 'https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/4a577b04-d622-4b60-cee8-3e50314eb300/public',
    text: "Flipkart, Amazon पर लिस्टेड"
  },
]

const Sec5 = () => {


  return (
    <div className='relative'>


      <OrderBtn />

      <div className="relative ">
        <div className="relative z-10">
          <p className="text-xl sm:text-[1.6rem] font-bold text-white px-5 py-5 sm:px-14 sm:py-8 leading-snug text-center">Horse Fire के साथ है <span className="text-[yellow]">लाखों पुरुषों का भरोसा</span> और 40 से अधिक विशेषज्ञों की विश्सनीयता।</p>
        </div>
        <Image fill alt='hft' loading='lazy' src='https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/20825b5b-1f27-4fb1-78d9-55049ad89c00/public' />
      </div>
      <div className="p-3 sm:p-5">
        <YoutubeFramecu469 vid='I7RqbSjlptY?si=GtVVZ7qSHDIkBYK6' />
      </div>

      <div className="text-center my-5 sm:my-10">
        <div className="bg-sky-600 p-3 sm:p-5 text-xl sm:text-2xl font-bold inline-block">
          <p className="border-2 border-gray-700 rounded-xl text-white  p-3 pb-1">How Does It Work?</p>
        </div>

        <p className="text-xl sm:text-2xl font-bold mt-8 sm:mb-3 px-3 sm:px-8">
          <span className="text-red-700">Horse Fire Tablet</span> में बेहतरीन क्वालिटी के हर्ब्स मौजूद है जो <span className="text-red-700">टेस्टोस्टेरोन हॉर्मोन बूस्ट करते</span> है और <span className="text-red-700">नाइट्रिक ऑक्साइड</span> का उत्पादन करते है जिससे लिंग में बेहतर इरेक्शन मिलती है, <span className="text-red-700">टाइमिंग बढ़ती</span> है और यौन प्रदर्शन में सुधार होता है। इसके इस्तेमाल से कार्पस कैनर्वस रक्त से अच्छी तरह भरता है। लिंग की तंग चमड़ी खुलने लगती है और साइज में बढ़ोत्तरी होती है। <span className="text-red-700">बेहतर सेक्स</span> का अनुभव करने की लिए इसका इस्तेमाल जरूर करें।
        </p>
        <img src={'https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/7819ccf3-bfb3-4c2b-633c-b263079d8b00/public'} alt="pic" height='100%' width='100%' loading='lazy' className='px-3' />

        <img src={'https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/1f13f35b-5d4f-4833-1448-3194201ff200/public'} alt="pic" height='100%' width='100%' loading='lazy' className='mt-5' />
      </div>

    </div>
  )
}

export default Sec5