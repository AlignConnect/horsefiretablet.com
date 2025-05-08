import React from 'react'

function Header() {
    return (
        <div className=''>
            <div className='bg-black'>
                <div className='w-full max-w-7xl mx-auto'>
                    <div className="pt-2 pb-1 flex">
                        <div className='fontNoto flex gap-1 items-center font-semibold text-md md:text-xl px-2 text-yellow-300'>
                            सूचना:
                        </div>
                        <marquee className='fontNoto text-md md:text-xl text-white' direction="left">हॉर्सफायर के बढ़ते लोकप्रियता को देखते हुए आजकल मार्केट में नकली प्रोडक्ट आ गए है तो ध्यानपूर्वक <span className="fontPoppins text-red-600 font-extrabold">AR Ayurveda</span> ब्रांड देखकर ही आर्डर करें!</marquee >
                    </div>
                </div>
            </div>

            <div className="bg-[url('https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/37488c45-9226-4bef-35ab-8db660f35e00/public')] bg-cover">
                <div className="py-3">
                    <div className="fontPoppins text-red-600 font-extrabold md:text-7xl text-5xl">
                        HORSE FIRE
                    </div>
                    <div className="fontPoppins font-semibold tracking-[1rem] md:text-3xl text-xl">
                        TABLET
                    </div>
                </div>

                <div className="fontNoto text-2xl md:text-2xl font-extrabold py-3">
                    पुरुष यौन शक्तिवर्धक औषधि!
                </div>


                <div className="fontPoppins bg-[#1dbd3f] md:w-1/3 w-1/2 mx-auto py-1 text-white font-extrabold text-xl md:text-2xl 
                outline-2 outline-offset-1 outline-dotted outline-[#1dbd3f]">
                    UPTO 50% OFF
                </div>

                <div className="relative overflow-hidden">
                    <div className="pt-10 pb-4 relative z-10">
                        <img
                            className='w-80 md:w-3/4 mx-auto'
                            src={"https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/765b5153-4a15-40fa-b46a-0af6c6939000/public"}
                            alt='header_img'
                            fetchPriority='high'
                        />
                    </div>
                    <div className="bg-black absolute bottom-0 z-2 h-[60%] md:w-[110%] md:-left-[5%] w-[130%] -left-[15%]  rounded-t-full mx-auto">
                    </div>
                </div>


            </div>
        </div>
    )
}

export default Header