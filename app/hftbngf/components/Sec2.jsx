import dynamic from 'next/dynamic';
import React from 'react'
import { useTranslation } from 'react-i18next';

const FlipAmazon = dynamic(() => import('./FlipAmazon'), {
  loading: () => <p>loading</p>
});

const Sec2 = () => {
  const { t } = useTranslation();


  return (
    <div className='bg-[#f7e7ea] fontPoppins'>


      <div className="max-w-6xl pt-5 md:pt-20 px-3 mx-auto">
        <div className="sm:hidden mb-3">
          <FlipAmazon />
        </div>

        <div className="grid sm:grid-cols-12 gap-3 sm:gap-10 items-center ">
          <div className="sm:col-span-6 order-2 sm:order-1">
            <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/29445f19-7b36-4964-1bda-ca5059704600/public" alt="pic2" height='100%' width='100%' loading='lazy' />
          </div>
          <div className="sm:col-span-6 space-y-3 sm:space-y-10 order-1 sm:order-2">
            <p className="font-bold text-2xl sm:text-5xl">{t("sec2.para1")}</p>
            <p className="text-[1rem] sm:text-xl text-justify">{t("sec2.para2")}</p>
          </div>
        </div>
        <div className="-mt-5">
          <FlipAmazon />
        </div>
      </div>
    </div>
  )
}

export default Sec2