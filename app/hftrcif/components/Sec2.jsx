import dynamic from 'next/dynamic';
import Image from 'next/image';
import React from 'react'

const OrderBtn = dynamic(() => import('./OrderBtn'), {
  loading: () => <p>loader</p>
});

const data = [
  {
    image: 'https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/89380dca-29ff-447f-8369-65c442c49700/public',
    para: 'लम्बा और मोटा लिंग'
  },
  {
    image: 'https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/568ed344-3b89-4080-637f-b6d6a8326200/public',
    para: 'लम्बा सेक्स और ऑर्गज़्म'
  },
  {
    image: 'https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/b51fcdcb-0a7f-4d5c-2b4d-1d24f468f900/public',
    para: 'छोटा और पतला लिंग'
  },
  {
    image: 'https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/eb434123-9f26-49ac-5a43-475bf50e8400/public',
    para: '1-2 मिनट का सेक्स'
  },

]

const Sec2 = () => {
  return (
    <div className=' '>
      <div className="bg-black py-5 sm:py-16 relative px-3 sm:px-5  z-20 text-xl sm:text-2xl">

        <div className="relative z-10 border border-red-800 p-3 pb-1 font-extrabold sm:text-2xl text-center">
          ध्यान दें Horse Fire Tablet की क्यों है जरूरत?
        </div>
        <Image fill alt='hft' loading='lazy' src='https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/8c031bed-52fd-475d-c82c-9a1653074600/public' />
      </div>



      <div className="relative">

        <div className="relative z-10 pb-10" style={{ background: 'rgba(0, 0, 0, 0.8)' }}>
          <div className="border-8 border-[yellow] rounded-full w-32 h-32 relative -left-10 -top-10"></div>
          <div className="px-3 sm:px-5 text-white sm:text-2xl">
            <p className="">दोस्तों, सेक्स उतना आसान है नहीं जितना आप ब्लू फिल्मो में देखते है। सेक्स एक बहुत ही मुश्किल और मेहनत भरी प्रक्रिया होती है ऊपर से महिला पार्टनर को संतुष्ट करने का प्रेशर! महिला को सेक्स सुख देना बड़ा ही मुश्किल है। महिलाओं का पानी निकालने में पुरुषों का तेल निकल जाता है। </p>
            <img src={'https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/edf30eec-7fbe-44d2-b0d7-aec02ae66700/public'} alt="pic" height='100%' width='100%' loading='lazy' className='my-5 sm:my-10' />
            <p className="border border-dashed text-2xl sm:text-3xl p-5 pb-2 font-bold">ये तो उन <span className="text-[yellow]">औसत पुरुषों</span> की बात है, जो सेक्स कमजोरी पीड़ित नहीं है चिंता के विषय है <span className="text-[yellow]">यौन रूप से कमजोर</span> पुरुष!!</p>
          </div>
          <div className="border-8 border-[yellow] ms-auto rounded-full w-32 h-32 absolute -right-10 -bottom-10"></div>
        </div>
        <Image fill alt='hft' loading='lazy' src='https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/18063110-6c7d-4b6a-2bad-ba4660c10e00/public' />

      </div>
    </div>
  )
}

export default Sec2