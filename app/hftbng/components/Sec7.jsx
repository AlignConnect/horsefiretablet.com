import dynamic from 'next/dynamic';
import Image from 'next/image'
import React from 'react'
import { useTranslation } from 'react-i18next';

const Order_now = dynamic(() => import('./Order_now'), {
  loading: () => <p>loading</p>
});

const Sec7 = () => {

  const { t } = useTranslation();


  return (
    <div className="">

      <div className="bg-zinc-100 fontPoppins">
        <div className="max-w-5xl mx-auto px-3 gap-3 sm:gap-10 grid md:grid-cols-12 py-5 sm:py-10 lg:py-20 items-center">

          <div className="md:col-span-6">
            <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/4f3c28a4-518e-4582-f422-a08143724900/public" alt="pic" className="" width='100%' height='100%' loading='lazy' />
            <Order_now/>
          </div>
          <div className="md:col-span-6 text-[0.9rem] sm:text-[1rem] ">
            <p className="font-bold text-xl sm:text-3xl">{t("sec7.para1")} <span className="text-red-500">{t("sec7.para1_1")}</span></p>
            <p className="mt-3 sm:mt-5 lg:mt-8">{t("sec7.para2")}</p>
          </div>
        </div>
      </div>

      <div className=' relative fontPoppins'>
        <div className="relative z-10 py-10 sm:py-20 px-3 sm:px-0 max-w-7xl mx-auto">
          <div className="grid sm:grid-cols-12 gap-5 sm:gap-10 items-center">
            <div className="sm:col-span-6">
              <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/3e5cf371-0a43-487d-973d-2337ba092000/public" alt="pic" className="" width='100%' height='100%' loading='lazy' />

            </div>
            <div className="sm:col-span-5 text-center sm:text-left">
              <p className="sm:text-4xl text-red-500 font-bold">{t("sec7.para3")}.</p>
              <p className=" text-2xl text-[1rem] sm:text-xl mt-2 text-justify sm:text-center">{t("sec7.para4")}</p>

              <div className="grid  lg:grid-cols-12 items-center my-5 sm:my-10 ">
                <div className="lg:col-span-5">

                  <p className="font-bold text-blue-600 text-2xl sm:text-[1.78rem]"> AVAILABLE ON</p>
                </div>
                <div className="lg:col-span-7">

                  <div className="flex sm:w-full justify-center  items-center sm:justify-start gap-3  border border-black p-2">
                    <a href="https://www.flipkart.com/r-ayurveda-horse-fire-tablets-ayurvedic-stamina-booster-men/p/itme353eac8ec05d" className=""><img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/1369a0a5-d191-4392-bf47-5c170ecb8600/public" alt="pic" className="w-36 sm:w-40" width='100%' height='100%' /></a>
                    <a href="https://www.amazon.in/Ayurveda-HorseFire-Tablet-Men/dp/B0BYJ8KM7S?th=1" className=""><img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/3edacd08-1afb-49b1-9aba-2cdda7681400/public" alt="pic" className="w-36 sm:w-40" width='100%' height='100%' /></a>

                  </div>
                </div>
              </div>
              <div className="">
                <a href="#form" className="uppercase bg-black px-10  py-3 sm:py-5 sm:px-20 rounded-xl inline-block text-white font-bold">Order now</a>
              </div>
            </div>
          </div>
        </div>
        <Image fill src='https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/e01b7326-06c8-4330-025a-046848600800/public' alt='pic8' loading='lazy' />
      </div>
    </div>
  )
}

export default Sec7