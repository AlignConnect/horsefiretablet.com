import dynamic from 'next/dynamic';
import Image from 'next/image'
import React from 'react'
import { useTranslation } from 'react-i18next';

const FlipAmazon = dynamic(() => import('./FlipAmazon'), {
  loading: () => <p>loading</p>
});

const Sec6 = () => {

  const { t } = useTranslation();


  return (
    <div className='fontPoppins' style={{ backgroundImage: 'linear-gradient(to bottom, #f6f6f6, #f8dce3)' }}>
      <div className="max-w-[90rem] mx-auto">
        <div className="grid lg:grid-cols-12 pt-5 sm:pt-10 xl:pt-16 px-3 text-center lg:text-start">
          <div className="lg:col-span-5 space-y-3 sm:space-y-10 xl:space-y-16 order-2 lg:order-1 pb-5 sm:py-10 md:py-0">
            <div className="text-3xl xl:text-6xl font-bold">
              <p className="">{t("sec6.para1")}</p>
              <p className="text-red-600">{t("sec6.para2")}</p>
            </div>

            <p className="text-justify sm:text-start">{t("sec6.para3")}</p>
            <div className="">
              <a href="#form" className="fontBebas py-2 px-10 sm:px-16 xl:px-20 bg-red-600 inline-block leading-tight text-white rounded-full text-3xl sm:text-5xl tracking-wide">SHOP NOW</a>
            </div>
          </div>
          <div className="lg:col-span-7 order-1 lg:order-2">
            <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/fdb855c2-689b-4afe-6820-4e99c5483100/public" alt="pic2" height='100%' width='100%' loading='lazy' />
            <div className="sm:hidden">
            <FlipAmazon/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sec6