import dynamic from 'next/dynamic';
import Image from 'next/image'
import React from 'react'

const Order_now = dynamic(() => import('./Order_now'), {
  loading: () => <p>loading</p>
});

const Sec5 = () => {

  const data = [
    {
      title: 'ASHWAGANDHA',
      img: 'https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/a59ed61d-630a-4ebb-02ec-1ba9fbdc3700/public',
      para: 'Ashwagandha is an adaptogen that helps calm the mind and body. It enhances vitality and reduces fatigue.'
    },
    {
      title: 'GOKSHURA',
      img: 'https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/1e813534-43ec-4071-32b6-f75385e41d00/public',
      para: 'It helps improve male fertility and libido, it is known to enhance sexual desire and improve reproductive health.'
    },
    {
      title: 'SAFED MUSLI',
      img: 'https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/4c0034f7-b6fe-472e-5cd1-ce5eec7d4400/public',
      para: 'improves sperm quality, quantity, and motility. It increases sexual desire and stamina.'
    },
    {
      title: 'KESAR',
      img: 'https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/2fb4b68f-d788-4fce-18bc-9040e68a6800/public',
      para: 'Kesar has a calming effect on the mind and body, reducing stress and anxiety. It is believed to increase sexual desire and pleasure.'
    }
  ]

  return (
    <div className=' relative '>
      <div className="relative z-10 py-5 sm:py-10 max-w-[85rem] mx-auto px-3 sm:px-0">
        <p className="text-center text-2xl sm:text-6xl font-bold px-3">KEY INGREDIENTS</p>

        <div className="grid sm:grid-cols-2 my-5 sm:my-16 gap-5 sm:gap-x-10 sm:gap-y-16 text-[0.8rem] sm:text-xl">
          {data.map((e, key) => {
            return <div className="grid grid-cols-12 gap-2 sm:gap-5 items-center" key={key}>
              <div className="col-span-3">
                <img src={e.img} alt="pic2" height='100%' width='100%' loading='lazy' className=''/>
              </div>

              <div className="col-span-9">
                <p className="font-bold text-[1.2rem] sm:text-3xl">{e.title}</p>
                <p className="sm:mt-1">{e.para}</p>
              </div>
            </div>
          })}
        </div>


        <p className="text-[#27a068] text-center font-semibold max-w-6xl mx-auto text-[1rem] sm:text-3xl">Horse Fire Tablet is a unique combination of these quality and effective herbs. Each tablet helps eliminate sexual weakness and brings excitement and romance to marital life.</p>

        <Order_now/>
      </div>
      <Image fill alt='pic' src='https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/54a22aa6-4768-49c0-224b-c7e685001d00/public' loading='lazy' />


    </div>
  )
}

export default Sec5