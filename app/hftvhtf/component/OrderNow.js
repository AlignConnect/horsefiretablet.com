import FlipAmazon from "@/app/commonUse/AmaFlipDialog/FlipAmazon";
import { Noto_Serif_Devanagari, Poppins } from "next/font/google";

const noto = Noto_Serif_Devanagari({
    subsets: ['devanagari'],
    display: 'swap',
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});

const poppin = Poppins({
    subsets: ['latin'],
    display: 'swap',
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});



function OrderNow() {
    return (
        // <div className="bg-white">
        //     <div className="w-full max-w-2xl mx-auto">
        //         <div className="py-5 text-center">
        //             <div className={`${noto.className} font-extrabold text-xl text-red-500`}>
        //                 50% से भी ज्यादा डिस्काउंट पायें
        //             </div>
        //             <div className={`${poppin.className} py-2 inline-block text-left pop_imagehfv`}>
        //                 <a className="bg-[#213361] text-xl  font-bold  py-3 px-11 w-full rounded-full hover:bg-[#1e2f5a] shadow-lg shadow-[#213361]/50 transition-colors text-white" href='#form'>
        //                     ORDER NOW
        //                 </a>
        //             </div>
        //         </div>
        //     </div>
        // </div>

        <section className='w-full  mx-auto bg-white'>

            {/* <div className="p-3 bg-white text-center">
                <a href="https://www.flipkart.com/r-ayurveda-horse-fire-tablets-ayurvedic-stamina-booster-men/p/itme353eac8ec05d" className="w-full d-grid leading-none">
                    <h5 className="purchaseProduct leading-tight text-center py-2 mb-0">HORSE FIRE TABLET खरीदने के लिए निचे क्लिक करें</h5>
                    <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/e4e0ec8f-b49a-4b0a-2798-6cb6af788800/public" alt="pic" className="w-[200px] md:w-[300px] mx-auto -mt-3" loading='lazy'
                    />
                </a>
            </div> */}




            <div className="p-3 mx-auto text-center">
                <h5 className="purchaseProduct leading-tight text-center pt-2 mb-0">HORSE FIRE TABLET खरीदने के लिए निचे क्लिक करें</h5>
                <div className="grid grid-cols-2 items-center justify-center gap-1 pb-1">
                    <div className="">
                        {/* <a href="https://www.flipkart.com/r-ayurveda-horse-fire-tablets-ayurvedic-stamina-booster-men/p/itme353eac8ec05d" className="w-full d-grid leading-none">
                            <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/cd5c76b5-eacd-44c0-97c8-e26301f37600/public" alt="pic" className="w-[160px] md:w-[300px] mx-auto " loading='lazy' />
                        </a> */}

                        {/* https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/a34e1d92-85ba-4ac6-fc88-b5e2ff6ff000/public */}

                        <a href="https://www.flipkart.com/r-ayurveda-horse-fire-tablets-ayurvedic-stamina-booster-men/p/itme353eac8ec05d" className="w-full d-grid leading-none">
                            <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/a34e1d92-85ba-4ac6-fc88-b5e2ff6ff000/public" alt="pic" className="w-[160px] md:w-[300px] mx-auto " loading='lazy' />
                        </a>

                    </div>
                    <div className="">
                        <a href="https://www.amazon.in/Ayurveda-HorseFire-Tablet-Men/dp/B0BYJ8KM7S/ref=pd_rhf_cr_s_pd_crcd_d_sccl_1_4/259-5652770-9119827?th=1" className="w-full d-grid leading-none">
                            <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/f80384a2-95de-44ba-1509-c69d0d2df500/public" alt="pic" className="w-[164px] md:w-[300px] mx-auto mb-2" loading='lazy' />
                        </a>
                    </div>
                </div>
            </div>



        </section>
    )
}

export default OrderNow