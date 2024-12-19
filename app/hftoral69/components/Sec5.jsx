import dynamic from 'next/dynamic';
import React from 'react'
import "../components/hftoral69.css"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const OrderBtn = dynamic(() => import('./OrderBtn'), {
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

  var settings = {
    dots: false,
    speed: 1000,
    initialSlide: 0,
    infinite: true,
    className: "center",
    centerMode: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    autoplay: true,
    arrows: false

    // responsive: [
    //     {
    //         breakpoint: 1024,
    //         settings: {
    //             slidesToShow: 2,
    //         }
    //     },
    // ]
  };

  return (
    <div className='relative'>

      <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/049bca68-4276-4e61-7d52-bd4c41135600/public" alt="pic" height='100%' width='100%' loading='lazy' className='-mt-[5%] px-3' />

      <OrderBtn/>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-5 mt-3 sm:mt-5  sm:text-xl text-center font-bold px-3 ">
        {
          trustList.map((e, key) => {
            return <div className="bg-gray-200 rounded-lg py-3" key={key}>
              <img src={e.image} alt="pic" height='100%' width='100%' loading='lazy' className='w-2/4 sm:w-7/12 mx-auto' />
              <p className="mt-3">{e.text}</p>
            </div>
          })
        }
      </div>

      <p className="text-[10vw] sm:text-5xl font-extrabold leading-none pt-5 sm:pt-16 w-[90vw] sm:w-96 mx-auto text-center
        ">ग्राहक को मिले <span className="text-[#f55437]">संतोषजनक परिमाण</span>  </p>


      <div className="text-center -mt-[3%]">
        <Slider {...settings} >
          <div className="">

            <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/39d754da-3065-4cff-cf5c-ce5c56940600/public" alt="pic" height='100%' width='100%' loading='lazy' className='w-1/2 mx-auto' />

            <div className=" cReview talk-bubble tri-right round btm-left rounded-xl mx-5 sm:mx-10 -mt-6  ">
              <div className="talktext">
                <p>यह बेहतरीन दवा है इसे खाने से मेरा कमजोर और ढीला लिंग फौलादी बन गया है। मेरी गर्लफ्रेंड पहले दूर होना चाहती थी पर अब उसे मेरी मेरे फौलादी लिंग की लत लग गयी है। वह हमेशा मिलने के लिए बेकरार रहती है जो पहले बहाने बनाती थी बड़े लिंग और ज्यादा टाइम के साथ अब हम दोनों सेक्स को एन्जॉय करते है। </p>
                <p className="font-extrabold text-2xl sm:text-3xl pt-1 sm:pt-3"> विजेंदर 29 साल </p>
                <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/ea9fbad6-7c1d-472a-e4d1-2322d64e2900/public" alt="pic" height='100%' width='100%' loading='lazy' className='w-36 mx-auto' />

              </div>
            </div>
          </div>
          <div className="">
            <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/90feb7e9-ce18-4e48-6245-a4128c6ec700/public" alt="pic" height='100%' width='100%' loading='lazy' className='w-1/2 mx-auto' />

            <div className=" cReview talk-bubble tri-right round btm-left rounded-xl mx-5 sm:mx-10 -mt-6  ">
              <div className="talktext">
                <p>मेरे लिंग का साइज और मोटाई बढ़ गया है। सेक्स टाइमिंग भी बहुत कम था जो अब बढ गया है। पहले मेरी पार्टनर को मेरे लिंग का असर ही नहीं होता था लेकिन अब हो घुसाते ही सिसकारियां भरने लगती है। पूरा लेने से मना करती है और मुझे पीछे की तरफ धकेलती है। अब वो हर बार पानी पानी हो जाती है, और संतुष्ट भी है। </p>
                <p className="font-extrabold text-2xl sm:text-3xl pt-1 sm:pt-3"> सागर 26 साल </p>
                <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/ea9fbad6-7c1d-472a-e4d1-2322d64e2900/public" alt="pic" height='100%' width='100%' loading='lazy' className='w-36 mx-auto' />

              </div>
            </div>
          </div>

        </Slider>
      </div>
    </div>
  )
}

export default Sec5