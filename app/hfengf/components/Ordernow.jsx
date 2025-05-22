import React from 'react'

const Ordernow = () => {
    return (
        <section>

            {/* <div className="">
                <div className="bg-red-600  text-white py-5 flex items-center justify-between">

                    <div className="w-full mx-auto grid sm:grid-cols-2 justify-center items-center">

                        <div className="fontJosefin sm:text-2xl text-[1rem] sm:px-3 font-bold sm:text-end text-center">
                            GET EXTRA 10% OFF ON ONLINE PAYMENT
                        </div>


                        <a href='#form' className="order-now-animation bg-yellow-400 fontJosefin sm:text-xl text-center text-black font-extrabold pt-2 pb-1 mt-3 sm:mt-0 px-4 rounded w-1/2 mx-auto box_shaddow">
                            BUY NOW
                        </a>

                    </div>

                </div>
            </div> */}
            <div className="p-3 bg-white  mx-auto text-center">
                <h5 className="purchaseProduct leading-tight text-center py-2 mb-0">HORSE FIRE TABLET खरीदने के लिए निचे क्लिक करें</h5>
                <div className="grid grid-cols-2 items-center justify-center gap-1 py-1">
                    <div className="">
                        <a href="https://www.flipkart.com/r-ayurveda-horse-fire-tablets-ayurvedic-stamina-booster-men/p/itme353eac8ec05d" className="w-full d-grid leading-none">
                            <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/cd5c76b5-eacd-44c0-97c8-e26301f37600/public" alt="pic" className="w-[160px] md:w-[300px] mx-auto " loading='lazy' />
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

export default Ordernow