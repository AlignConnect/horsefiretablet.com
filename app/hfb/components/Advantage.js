"use client";
import { Noto_Serif_Devanagari } from "next/font/google";
import { useEffect } from "react";
import { CiDeliveryTruck, CiDiscount1 } from "react-icons/ci"
import { GiTakeMyMoney } from "react-icons/gi"
import { TbMoneybag } from "react-icons/tb"

const noto = Noto_Serif_Devanagari({
    subsets: ['devanagari'],
    display: 'swap',
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});
function Advantage() {

    const advantage_of_horsefire = (arr) => {
        return arr?.map((e, key) => {
            return <div className='mx-auto md:w-full w-80 fontPoppins bg-[#006600] text-[1.1rem] py-1 my-2 text-center text-white font-semibold' key={key}>
                {e.advantage_title}
            </div >
        })
    }

    useEffect(() => {
        localStorage.setItem("PATH_KEY", "/hfb")
    }, [])



    return (
        <div className={noto.className}>
            <div className="w-full max-w-2xl mx-auto">
                <div className="bg-[#0198e1] ">
                    <div className='fontPoppins text-xl md:text-2xl text-center text-white font-semibold py-3 md:py-5'>
                        इसे खाये और पाए-
                    </div>
                </div>

                <img
                    className='w-full py-2 min-h-[250px]'
                    src={"/main/hfb_images/sex_gif.gif"}
                    alt='sex_gif'
                    loading="lazy"
                />

                <div>
                    {
                        advantage_of_horsefire([
                            {
                                advantage_title: "दमदार सेक्स स्टैमिना"
                            },
                            {
                                advantage_title: "लॉन्ग लास्टिंग टाइमिंग"
                            },
                            {
                                advantage_title: "रॉक हार्ड और लम्बा लिंग"
                            },
                            {
                                advantage_title: "जोश और उत्तेजना में वृद्धि"
                            },
                            {
                                advantage_title: "अन्य गुप्त रोगों से राहत"
                            }
                        ])
                    }
                </div>

                <img
                    className='w-full py-2 min-h-[200px]'
                    src={"/main/hfb_images/der_hft.webp"}
                    alt='der_hft'
                    loading="lazy"
                />

                <div>
                    <div className="grid grid-cols-12 items-center  gap-2 py-3">
                        <img
                            className='w-full md:w-64 col-span-4 min-h-[100px]'
                            src={"/main/hfb_images/hf_product.webp"}
                            alt='hf_product'
                            loading="lazy"
                        />
                        <div className="col-span-8">
                            <div className="fontNoto text-[#952121] text-3xl md:text-4xl font-extrabold">विशेष सुविधा-</div>
                            <p className=' fontNoto text-[1.1rem] md:text-[1.4rem] text-justify px-1 py-2'>
                                पुरुषों की समस्या के हिसाब से उनकी उम्र, हाइट और वजन का आंकलन करके Horse Fire कस्टमाइज्ड भी तैयार किया जाता है जिससे यह समस्या पर सटीक असर करता है।
                            </p>
                        </div>
                    </div>
                </div>


                <div className={`border border-[#ea8622] grid grid-cols-2 gap-y-3 justify-center py-3 px-2 rounded-lg mt-4`}>
                    <div className="flex gap-2 items-center justify-center">
                        <CiDeliveryTruck className='text-5xl' />
                        <div>
                            <h6 className="font-bold text-[0.8rem] md:text-[1rem]">FREE SHIPPING</h6>
                            <p className="text-[0.7rem] md:text-[0.8rem]">Shipping on all prepaid orders</p>
                        </div>
                    </div>

                    <div className="flex gap-2 items-center justify-center">
                        <GiTakeMyMoney className='text-5xl' />
                        <div>
                            <h6 className="font-bold text-[0.8rem] md:text-[1rem]">COD Available</h6>
                            <p className="text-[0.7rem] md:text-[0.8rem]">Pay after recieving your pack</p>
                        </div>
                    </div>
                    <div className="flex gap-2 items-center justify-center">
                        <TbMoneybag className='text-5xl' />
                        <div>
                            <h6 className="font-bold text-[0.8rem] md:text-[1rem]">Money Back Guarantee</h6>
                            <p className="text-[0.7rem] md:text-[0.8rem]">10 days money back guarantee</p>
                        </div>
                    </div>
                    <div className="flex gap-2 items-center  justify-center">
                        <CiDiscount1 className='text-5xl' />
                        <div>
                            <h6 className="font-bold text-[0.8rem] md:text-[1rem]">Prepaid Offer</h6>
                            <p className="text-[0.7rem] md:text-[0.8rem]">Save 10% on prepaid orders</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Advantage;
