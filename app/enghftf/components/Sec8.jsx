import Image from 'next/image'
import React from 'react'

const Sec8 = () => {

  const data = [
    {
      img: 'https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/92042074-3867-4bb5-3d87-fef1a16cc400/public',
      title: 'HIGH ENERGY AND STAMINA',
      para: 'Experience a surge in energy and stamina that lasts all night. Fuel your passions and desires.',
    },
    {
      img: 'https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/d5b875ab-cf15-4748-3a7c-1f4c6e0aff00/public',
      title: 'DESIRED SEX TIME DURATION',
      para: 'Horse Fire helps you achieve your desired sex time duration, allowing you to savor every moment of intimacy.',
    },
    {
      img: 'https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/9fb4d4d8-d5e6-4f46-30ec-a2c6e9df3b00/public',
      title: 'STRONGER ERECTIONS FOR LONGER PERIODS',
      para: 'Horse Fire ignites a fiery passion within, fueling stronger erections that last longer. With its potent formula.',
    },
    {
      img: 'https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/0ec32d79-46c7-433b-57e3-c38e47e82800/public',
      title: 'MINIMUM 4 ROUNDS OF SEX EVERY TIME',
      para: 'Powerful blend of herbs, you can enjoy minimum 4 rounds of intense, passionate sex every time.',
    },
  ]

  return (
    <div className=' bg-black '>

      <div className="pt-10 max-w-[90rem] mx-auto px-3 md:px-0">
        <div className="grid md:grid-cols-2">
          <div className="order-2 md:order-1">
            <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/31fd7fe5-b7f9-4c13-6711-073a0dab1d00/public" alt="pic2" height='100%' width='100%' loading='lazy' />

          </div>

          <div className="text-white order-1 md:order-2">
            <p className="uppercase font-bold text-2xl md:text-5xl ">Get these all Guaranteed</p>
            <div className="">
              {
                data.map((e, key) => {
                  return <div className="grid grid-cols-12 gap-3 sm:gap-10 mt-5 md:mt-10 lg:mt-16" key={key}>
                    <div className="col-span-2">
                      <img src={e.img} alt="pic2" height='100%' width='100%' loading='lazy' className='' />
                    </div>
                    <div className="col-span-10">
                      <p className="text-[1.1rem] md::text-4xl text-[#edc941] font-semibold">{e.title}</p>
                      <p className="text-[0.8rem] md:text-xl">{e.para}</p>
                    </div>
                  </div>
                })
              }
            </div>
         
          </div>
        </div>
      </div>

    </div>
  )
}

export default Sec8