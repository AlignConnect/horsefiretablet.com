import dynamic from 'next/dynamic';
import Image from 'next/image'
import React from 'react'
import { useTranslation } from 'react-i18next';

const FlipAmazon = dynamic(() => import('./FlipAmazon'), {
  loading: () => <p>loading</p>
});

const Sec3 = () => {
  const { t } = useTranslation();

  const data = [
    {
      img: "https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/f5630c07-ffae-4114-9b73-6147557afc00/public",
      para: t("sec3.para2")
    },
    {
      img: "https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/ff277c3d-14c3-4d70-fde5-6d5637b06200/public",
      para: t("sec3.para3")
    },
    {
      img: "https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/5f03ef2c-e4ec-48d3-0fd0-c2f9800fcc00/public",
      para: t("sec3.para4")
    }
  ]

  return (
    <div className="relative fontPoppins">
      <div className="relative z-10 pt-5 sm:pt-20 px-3 ">
        <div className="max-w-[90rem] mx-auto">

          <div className="grid md:grid-cols-2 gap-5 sm:gap-10 md:gap-16 xl:gap-32  md:items-end xl:items-center">
            <div className="">
              <div className="font-bold text-3xl sm:text-6xl text-white uppercase">

                <p className="">{t("sec3.para1")}</p>
                <p className="text-red-600">{t("sec3.para1_1")}</p>
              </div>

              <div className="text-[1rem] sm:text-xl">
                {data.map((e, key) => {
                  return <div className="my-5 sm:my-10 grid grid-cols-12 gap-3 sm:gap-8 xl:gap-16 items-center" key={key}>
                    <div className="col-span-8 lg:col-span-7">
                      <p className="bg-white rounded-2xl p-3 sm:p-5">{e.para}</p>
                    </div>
                    <div className="col-span-4 lg:col-span-3">
                      <img src={e.img} alt="pic" className="" height='100%' width='100%' loading='lazy' />
                    </div>
                  </div>
                })}
              </div>
            </div>

            <div className="">
              <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/a627f363-0d21-4e05-e42a-c3bd7d5d9400/public" alt="pic2" height='100%' width='100%' loading='lazy' />
            </div>
          </div>
        </div>
      </div>
      <Image fill src='https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/e599ac59-046f-401c-2c3b-cedb1a0da000/public' alt='banner' loading='lazy' />
    </div>
  )
}

export default Sec3