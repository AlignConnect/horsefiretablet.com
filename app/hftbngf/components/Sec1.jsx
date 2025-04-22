import i18n from '@/app/hooks/i18n';
import Image from 'next/image'
import React from 'react'
import { useTranslation } from 'react-i18next';

const Sec1 = () => {

    const { t } = useTranslation();

    return (
        <div className="relative">
            <div className="">
                <div className="relative">
                    <div className="relative z-10 max-w-[85rem] pt-5 sm:pt-20 pb-12 mx-auto px-3 xl:px-0">
                        <div className="grid md:grid-cols-2 items-center sm:items-end lg:items-center">
                            <div className="">
                                <div className="text-center sm:text-start">
                                    <p className="fontPoppins text-xl sm:text-3xl text-red-600 font-semibold">{t("sec1.para1")}</p>
                                    <p className="fontBebas text-5xl sm:text-8xl font-bold">{t("sec1.para2")}</p>
                                    <p className="text-[0.95rem] mb-5 fontPoppins sm:text-5xl font-bold text-red-600  sm:my-5">{t("sec1.para3")}</p>
                                </div>

                                {/* <p className=" my-3 sm:my-10 text-xl sm:text-3xl font-semibold fontPoppins"> <span className="text-green-500">{t("sec1.para4")}</span> {t("sec1.para5")}</p> */}

                                <div className="fontBebas">
                                    <p className="my-3 sm:my-10  text-2xl sm:text-4xl"><span className="bg-black text-white rounded-full px-2 py-1 ">{t("sec1.para4")}&nbsp;</span> {t("sec1.para5")}</p>
                                    <p className="my-3 sm:my-10  text-2xl sm:text-4xl"><span className="bg-black text-white rounded-full px-2 py-1 ">{t("sec1.para6")}&nbsp;</span> {t("sec1.para7")}</p>

                                    <div className="grid grid-cols-12">
                                        <div className="col-span-8 sm:col-span-9">

                                            <div className="ps-5">
                                                <ul className='list-disc marker:text-red-500'>
                                                    <li className="">{t("sec1.li1")}</li>
                                                    <li className="">{t("sec1.li2")}</li>
                                                    <li className="">{t("sec1.li3")}</li>
                                                </ul>
                                            </div>
                                        </div>

                                        <div className="col-span-3">
                                            <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/79efa3e0-5559-4886-f211-f512742a0300/public" alt="pic" className="" width='100%' height='100%' />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="">
                                <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/3c6c8cce-c591-4ba7-4a16-ece562506000/public" alt="pic2" height='100%' width='100%' loading='lazy' />

                            </div>
                        </div>
                    </div>
                    <Image fill src='https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/5eaeeec0-a6bc-4d59-0b85-77fb8dfdcf00/public' alt='banner' loading='lazy' />
                </div>

            </div>
            <div className="bg-[#d93830] h-20 md:h-24  px-3 lg:px-0  absolute text-white text-center  z-20 transform -translate-x-1/2 -translate-y-1/2 -bottom-[7%] left-1/2 w-full md:w-[85%]" style={{
                clipPath: "polygon(5% 0%, 100% 0%, 95% 100%, 0% 100%)"
            }}>
                <div className="flex justify-center flex-col h-full">
                    <div className="flex items-center justify-center gap-3 sm:gap-5">
                        <div className=" w-16 sm:w-20">
                            <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/155289df-a6ab-4fa1-3753-b8c755659d00/public" alt="pic2" height='100%' width='100%' loading='lazy' />

                        </div>
                        <div className="italic fontPoppins text-start sm:flex sm:gap-1">
                            <p className="">"{t("sec1.para8")}{i18n.language==="bn" && '"'}</p>
                            <p className={i18n.language==="en"?"block":"hidden"}>{t("sec1.para8_1")}"</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sec1