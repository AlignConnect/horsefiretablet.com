import Image from 'next/image'
import React from 'react'
import { useTranslation } from 'react-i18next';

const Sec8 = () => {

  const { t } = useTranslation();


  const data = [
    {
      img: 'https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/9bda0c80-61d2-4644-e460-ee6ca1b39500/public',
      para: t("sec8.para2"),
    },
    {
      img: 'https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/90c7c953-09ac-46f0-10e8-d625a5060b00/public',
      para: t("sec8.para3")
    },
    {
      img: 'https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/b479162e-90b1-4ee2-6fed-740306973500/public',
      para: t("sec8.para4")
    }
  ]

  return (
    <div className=' relative fontPoppins'>
      <div className="relative z-10 py-5 sm:py-16 px-3">
        <div className="max-w-7xl mx-auto">
          <p className="text-center text-2xl sm:text-5xl font-bold">Right Way of <span className="text-red-500">Consumption</span> </p>

          <div className="grid md:grid-cols-3 gap-5 font-semibold mt-5 sm:mb-5 sm:mt-10">
            {data.map((e, key) => {
              return <div className="grid grid-cols-12 items-center gap-5 " key={key}>
                <div className="col-span-3">
                  <img src={e.img} alt="pic" className="" height='100%' width='100%' loading='lazy' />
                </div>
                <div className="col-span-9">
                  <p className="text-[1rem] sm:text-xl">{e.para}</p>
                </div>
              </div>
            })}
          </div>
        </div>
      </div>
      <Image src='https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/874a790b-3bf9-4f25-2607-c1c26fbb2f00/public' fill loading='lazy' alt='pic' />
    </div>
  )
}

export default Sec8