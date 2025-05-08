import dynamic from 'next/dynamic';
import React from 'react'

const FlipAmazon = dynamic(() => import('./FlipAmazon'), {
  loading: () => <p>loader</p>
});

const Sec2 = () => {

  const listdata = [
    {
      title: 'दमदार पुरुष',
      image: 'https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/ee08f2f6-2e2f-436b-a29d-4d4a62784400/public',
    }, {
      title: 'बड़ा-मोटा लिंग',
      image: 'https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/1452e7a4-c194-4148-2b87-b91d9d155900/public',
    },
    {
      title: 'ऑर्गेज़्म तक सेक्स',
      image: 'https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/6b6e9d85-99c1-411a-6191-ba8b2b30e500/public',
    }

  ]

  return (
    <div className="max-w-6xl mx-auto px-3 sm:px-0 my-5 sm:my-10 xl:my-16]">
      <p className="uppercase text-[7.1vw] sm:text-[4vw] text-center text-[#7bdf03] font-extrabold fontPoppins leading-tight ">What Female Likes</p>
      <p className="italic mt-3 sm:mt-5 text-center">" महिलाएं एक ऐसा मर्द पसंद करती है। जिसका लिंग मोटा और लम्बा होता है। जो उन्हें चरम सेक्स की प्रापति करा सके। यह सब क्षमता वाले पुरुष मजिलाओं को आकर्षित करते है। "</p>

      <div className="grid sm:grid-cols-2 my-5 sm:mt-10 xl:mt-16 gap-5 sm:gap-10 xl:gap-20">
        <div className="">

          <img src='https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/4c67947a-8929-471c-6402-80103846bd00/public' alt="pic" height='100%' width='100%' loading='lazy' />

          <div className="-mx-3 sm:hidden">
            <FlipAmazon />
          </div>
        </div>
        <div className="">
          <p className="border-b-2 border-dotted border-white inline text-[#7bdf01] text-2xl sm:text-4xl font-semibold ">महिलाओ की पसंद</p>

          <div className="my-5 sm:my-10 xl:my-16 flex sm:flex-col sm:ml-[3vw] gap-2 sm:gap-10 items-center sm:items-start text-[4.7vw] sm:text-2xl">
            {listdata.map((e, key) => {
              return <div className="" key={key}>
                <p className="mb-1">{e.title}</p>
                <img src={e.image} alt="pic" height='100%' width='100%' className='w-full sm:w-5/12' loading='lazy' />
              </div>
            })}
          </div>
        </div>
      </div>

      <div className="-mx-3 hidden sm:block">
            <FlipAmazon />
          </div>
    </div>
  )
}

export default Sec2