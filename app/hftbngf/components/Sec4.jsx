import dynamic from 'next/dynamic';
import Image from 'next/image'
import React from 'react'
import { useTranslation } from 'react-i18next';

const FlipAmazon = dynamic(() => import('./FlipAmazon'), {
  loading: () => <p>loading</p>
});

const Sec4 = () => {

  const { t } = useTranslation();

  return (
    <div className=' bg-[#f7e7ea] py-10 sm:py-20'>
      <div className="max-w-6xl mx-auto fontPoppins px-3 xl:px-0">

        <div className="bg-white rounded-xl p-3 sm:px-5 sm:py-10 " style={{ clipPath: "polygon(0 0, 100% 0, 100% 65%, 85% 100%, 0 100%, 0 50%)" }}>
          <div className="grid sm:grid-cols-12 gap-3 sm:gap-5 xl:gap-16 items-center">
            <div className="sm:col-span-5">
              <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/a670b8f2-6729-43c2-0933-cbd592924100/public" alt="pic2" height='100%' width='100%' loading='lazy' />
              <div className="-mx-3">

              <FlipAmazon/>
              </div>
            </div>
            <div className="sm:col-span-7 space-y-5 sm:space-y-10">
              <p className="text-3xl sm:text-5xl font-bold">{t("sec4.para1")}</p>
              <p className="leading-relaxed pr-12 sm:pr-16">{t("sec4.para2")}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sec4