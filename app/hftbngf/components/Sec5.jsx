import dynamic from 'next/dynamic';
import Image from 'next/image'
import React from 'react'
import { useTranslation } from 'react-i18next';

const FlipAmazon = dynamic(() => import('./FlipAmazon'), {
  loading: () => <p>loading</p>
});

const Sec5 = () => {

  const { t } = useTranslation();


  return (
    <div className=' relative fontPoppins'>
      <div className="relative z-10 py-5 sm:py-10 xl:py-20 text-white">
        <div className="max-w-[85rem] mx-auto px-3">
          <div className="grid md:grid-cols-2 gap-5 sm:gap-8 xl:gap-20">
            <div className="">
              <div className="border-b-2 border-dashed border-white pb-5 sm:pb-7 font-bold text-3xl sm:text-6xl">
                <p className="">{t("sec5.para1")}</p>
                <p className="text-red-700">{t("sec5.para2")}</p>
              </div>
              <p className="mt-5 sm:mt-8 xl:mt-16 leading-relaxed text-justify sm:text-start">{t("sec5.para3")}</p>
            </div>
            <div className="">
              <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/85c24db7-010b-419c-6962-7980ee93a800/public" alt="pic2" height='100%' width='100%' loading='lazy' />
            </div>
          </div>
        </div>
      </div>
      <Image fill alt='pic' src='https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/ae4493d7-6eb2-419d-9198-859bd05f8500/public' loading='lazy' />
    </div>
  )
}

export default Sec5