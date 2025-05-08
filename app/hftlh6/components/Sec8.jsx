import dynamic from 'next/dynamic';
import React from 'react'

const OrderBtn = dynamic(() => import('./OrderBtn'), {
  loading: () => <p>loader</p>
});

const Sec8 = () => {

  const listitems = [
    {
      image: 'https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/b2109213-13fa-4bc1-b1ff-f33f5eff5600/public',
      title: 'ढीला लिंग'
    },
    {
      image: 'https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/6eca0649-2eb7-453b-e1c0-6003a7cd0600/public',
      title: 'बड़ा कठोर लिंग'
    },
    {
      image: 'https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/59c5fde9-fb65-4cad-9440-8feafb0e6600/public',
      title: 'शीघ्रपतन'
    },
    {
      image: 'https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/0fe59da6-ab02-401a-5c7c-8fedd4c6ba00/public',
      title: '+45 मिनट सेक्स'
    },
    {
      image: 'https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/83ab79fd-b9b1-400d-21a0-5c14fb0d1f00/public',
      title: 'एक राउंड सेक्स'
    },
    {
      image: 'https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/67770855-8a6e-4b27-3179-d45ec1a52d00/public',
      title: 'झड़ने के बाद जल्द सख्ती '
    }
  ]

  return (<div className="">
    <div className=" pt-5 sm:py-10  xl:py-16 mb-5 sm:mb-0">
      <div className="max-w-4xl text-center mx-auto px-3 sm:px-0">

        <p className="text-[#7bdf03] font-extrabold text-3xl sm:text-4xl ">आजमाएं और अनुभव करें </p>


        <div className="grid grid-cols-2 items-center gap-0 gap-y-5 sm:gap-10 mt-5 sm:mt-10 xl:mt-16">
          <p className="fontPoppins text-2xl sm:text-4xl font-bold">BEFORE</p>
          <p className="fontPoppins text-2xl sm:text-4xl font-bold">AFTER</p>

          {
            listitems.map((e, key) => {
              return <div className="" key={key}>
                <img src={e.image} alt="pic" height='100%' width='100%' loading='lazy' className='w-32 sm:w-40 mx-auto rounded-full border-white border-4' />
                <p className="mt-3 sm:mt-5 sm:text-3xl">{e.title}</p>

              </div>
            })
          }
        </div>
      </div>
    </div>
    <OrderBtn />
  </div>
  )
}

export default Sec8