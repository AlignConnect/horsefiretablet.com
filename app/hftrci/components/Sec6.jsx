import dynamic from 'next/dynamic';
import React from 'react'

const OrderBtn = dynamic(() => import('./OrderBtn'), {
  loading: () => <p>loader</p>
});

const Sec6 = () => {

  const data = [
    {
      img: 'https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/27bcc874-5208-4408-8b5b-9b9296696200/public',
      charan: '1 चरण:',
      title: 'टेस्टोस्टेरोन का निर्माण करें ',
      para: 'इस्तेमाल से पहले ही दिन से यह टेस्टिकल्स को मजबूती देना शुरू करता है और टेस्टोस्टेरोन हॉर्मोन के निर्माण को तीव्र करता है। ये हॉर्मोन लिंग में हार्ड इरेक्शन पाने और लिंग बृद्धि के लिए उपयोगी होता है।'
    },
    {
      img: 'https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/2c958f3d-8c76-4aac-270c-f6029eb8db00/public',
      charan: '2 चरण:',
      title: 'पुरानी समस्या से रिकवरी शुरू',
      para: 'यह धीरे-धीरे परन्तु समस्या को जड़ से मिटाने के लिए प्रथम चरण से रिकवरी शुरू करता है। इसके प्रत्येक गुणकारी तत्व कमजोरी मिटाकर शरीर को जोशीला और ताकतवर बनाते है।'
    },
    {
      img: 'https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/24e552a9-da4e-4b11-5f05-ce0768baf700/public',
      charan: '3 चरण:',
      title: 'सेक्स टाइम बढ़ाए',
      para: 'अब सेक्स टाइमिंग बढ़ाने का चरण चालू है। दिमाग मे सेरोटॉनिन रिलीज होना, सेक्स में फोकस बढ़ाना और सेक्स टाइमिंग को निचली स्तर से उच्च स्तर पर ले जाना जिससे पुरुष सेक्स को बेहतर तरीके से एन्जॉय करे।'
    },
    {
      img: 'https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/d06f737e-ffe6-4791-a8fd-069bd822f600/public',
      charan: '4 चरण:',
      title: 'लिंग आकार में वृद्धि',
      para: 'इस चरण तक सभी जरुरी हॉर्मोन बन जाते है। नाइट्रिक ऑक्साइड का लेवल बढ़ता है। लिंग की कमजोर नसे मजबूत होकर ज्यादा फूलती है। लिंग की तंग चमड़ी ग्रो करती है व लिंग का साइज और कड़कपन बढ़ने लगता है।'
    }
  ]

  return (

    <>

      <OrderBtn />
      <div className="my-5 sm:my-10 px-3">

        {data.map((e, key) => {
          return <div className="my-5 sm:mb-14" key={key}>
            <p className="text-2xl sm:text-3xl font-bold text-center"> <span className="text-red-800">{e.charan} </span> {e.title}</p>

            <div className="">
              <img src={e.img} alt="pic" height='100%' width='100%' loading='lazy' className='w-36 sm:w-56 sm:-mt-3  pr-2 float-left' />
              <p className="bg-sky-500 text-white rounded-lg text-justify rounded-tl-[4.2rem] sm:rounded-s-full sm:my-5 sm:ml-2 p-3 py-5">{e.para}</p>

            </div>

          </div>
        })}
      </div>

      <div className="text-xl sm:text-[1.7rem] leading-tight font-bold text-justify px-3 sm:px-10 my-5 sm:my-10">

        <p className=" ">तो इन सभी चरणों के बाद मिलता है <span className="text-red-700">लम्बा, मोटा फौलादी</span> लिंग एवं <span className="text-red-700">जोरदार सेक्स टाइमिंग</span> और आप बन जाते है <span className="text-red-700">दमदार सेक्स परफ़ॉर्मर</span>!! आप यक़ीन नहीं करेंगे इसे खाने के बाद सेक्स प्रदर्शन इतना धांसू होगा की आपकी पार्टनर आपके <span className="text-red-700">सेक्स की दीवानी</span> हो जाएगी वो बार-बार सेक्स की चाहत करेंगी।</p>


        <p className="mt-3">तो हो जाये तैयार प्रीमियम फार्मूलेशन के साथ, प्रीमियम सेक्स प्रदर्शन के लिए !</p>
      </div>


      <img src={'https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/0fb0d336-d08c-4bfd-996b-35a3b3afee00/public'} alt="pic" height='100%' width='100%' loading='lazy' />

      <div className="bg-black px-2 py-3 sm:p-3 text-center text-white text-xl sm:text-[1.6rem] leading-snug">
        <p className="border-[yellow] border-2 px-2 sm:px-5 font-bold py-5 sm:py-10 ">
          <span className="text-[yellow]">Horse Fire Tablet</span> की बढ़ती लोकप्रियता को देखते हुए मार्केट में कुछ नकली विक्रेता आ गए है। ध्यान से <span className="text-green-500">AR Ayurveda</span> ब्रांड देखकर ही प्रोडक्ट खरीदें !
        </p>
      </div>

    </>
  )
}

export default Sec6