import React from 'react'

const OrderBtn = () => {
    return (
        <section className="">


            {/* <div className='fontPoppins'><div className="text-center text-white font-bold fontPoppins">
                <a href="#form" className="inline-block bg-gradient-to-t from-red-500 to-red-700 px-1 rounded-full py-2 my-2 pop_imagehfv">
                    <span className=" bg-gradient-to-b from-red-500 to-red-700 px-5 rounded-full py-2">ORDER NOW</span>
                </a>
            </div></div> */}

            <div className="p-3 bg-white  mx-auto text-center">
                <h5 className="purchaseProduct leading-tight text-center py-2 mb-0">HORSE FIRE TABLET खरीदने के लिए निचे क्लिक करें</h5>
                <div className="grid grid-cols-2 items-center justify-center gap-1 py-1">
                    <div className="">
                        <a href="https://bit.ly/3w4Z8Ds" className="w-full d-grid leading-none">
                            <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/cd5c76b5-eacd-44c0-97c8-e26301f37600/public" alt="pic" className="w-[160px] md:w-[300px] mx-auto " loading='lazy' />
                        </a>
                    </div>
                    <div className="">
                        <a href="https://amzn.to/4aKP4yD" className="w-full d-grid leading-none">
                            <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/f80384a2-95de-44ba-1509-c69d0d2df500/public" alt="pic" className="w-[164px] md:w-[300px] mx-auto mb-2" loading='lazy' />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default OrderBtn