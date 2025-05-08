import dynamic from 'next/dynamic';
import React from 'react'


const FlipAmazon = dynamic(() => import('./FlipAmazon'), {
    loading: () => <p>loader</p>
});



const Sub3 = () => {
    return (
        <div className="mb-5 sm:my-5">

            <p className="text-3xl sm:text-6xl text-center font-bold lg:-mb-10 xl:-mb-20">पुरुष सेक्स समस्या </p>
            <div className='grid grid-cols-12 items-center'>
                <div className="col-span-3 sm:col-span-2">
                    <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/2e80416a-4ae7-4b55-fd85-da0cc0acae00/public" alt="pic" height='100%' width='100%' loading='lazy' />

                </div>
                <div className="col-span-9 sm:col-span-10 mr-[5vw] sm:mr-[10vw] -ms-[3vw]">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 items-center">
                        <div className={`box-ah py-[2vw] ps-3 pr-2 sm:px-3 text-[#7bdf03] text-[6.4vw] sm:text-[3.5vw]  font-extrabold `}>
                            <div className="grid grid-cols-12 gap-3 sm:gap-5 items-center">
                                <div className="col-span-3 sm:col-span-2 ">
                                    <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/1a78bf7b-efc5-4a37-f741-2199f400ac00/public" alt="pic" height='100%' width='100%' loading='lazy' />
                                </div>
                                <div className="col-span-8 sm:col-span-10 ">
                                    <p ><span className="text-[7.5vw] sm:text-[5vw] fontPoppins">40%</span> शीघ्रपतन</p>
                                </div>
                            </div>
                            <div className="grid grid-cols-12 gap-3 sm:gap-5 items-center mt-1 sm:mt-5">
                                <div className="col-span-3 sm:col-span-2 ">
                                    <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/6bbf388c-8c44-4120-e172-3e735841db00/public" alt="pic" height='100%' width='100%' loading='lazy' />
                                </div>
                                <div className="col-span-8 sm:col-span-10 ">
                                    <p ><span className="text-[7.5vw] sm:text-[5vw] fontPoppins">30% </span>ढीला लिंग</p>
                                </div>
                            </div>
                        </div>
                        <div className="hidden sm:block border-t border-dotted pt-5 leading-relaxed">
                            दुनियाभर भर में किये गए हजारो सर्वे से ये पता चलता है की पुरुषों में यौन कमजोरी कितनी तेजी से बढ रही है। भारत की बात करे अपने तो यहां लगभग 40% शीघ्रपतन और 30% पुरुष लिंग की नसों में ढीलापन और तनाव की कमी अनुभव करते है। इसके साथ ही कुछ अन्य यौन कमजोरियां सेक्स लाइफ में निराशा का कारण बनती है।
                        </div>
                    </div>
                </div>

                <div className="px-3 mt-5 sm:hidden border-t border-dotted pt-5 col-span-12 text-justify">
                    दुनियाभर भर में किये गए हजारो सर्वे से ये पता चलता है की पुरुषों में यौन कमजोरी कितनी तेजी से बढ रही है। भारत की बात करे अपने तो यहां लगभग 40% शीघ्रपतन और 30% पुरुष लिंग की नसों में ढीलापन और तनाव की कमी अनुभव करते है। इसके साथ ही कुछ अन्य यौन कमजोरियां सेक्स लाइफ में निराशा का कारण बनती है।
                </div>

            </div>
            <div className="sm:hidden">

            <FlipAmazon/>

            </div>
        </div>
    )
}

export default Sub3