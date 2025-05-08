import React from 'react'

function Extra_offer() {

    const ext_order = (arr) => {
        return arr?.map((e, key) => {
            return <div className='why_choose_clippath sm:my-5 my-4 mx-2' key={key}>
                <div className='fontPoppins md:text-xl text-md py-3 text-left sm:pl-10 pl-6 text-[#244288]'>{e.ext_order_content}</div>
            </div >
        })
    }

    return (
        <section className=''>

            <div className="doctor_header_background">

                <div className="w-full max-w-7xl text-center mx-auto">

                    <div className="fontPoppins text-[#1e4389] sm:text-5xl text-2xl font-extrabold sm:py-10 py-5">
                        We offer extra for you!
                    </div>

                    <div className="grid sm:grid-cols-2 items-center">
                        <div className="">
                            <img
                                src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/d5631109-c278-4cb9-b206-fc2e72c0ee00/public"
                                alt="doctor_second"
                                className="sm:w-96 w-80  mx-auto"
                                fetchPriority='high'
                                loading='eager' />

                        </div>
                        <div className="">
                            <div className=' sm:w-1/3 w-80 sm:mx-0 mx-auto fontPoppins bg-[#1e4389] rounded-full  sm:text-xl text-white py-2 sm:my-10'>
                                <a href="#form">Why choose us?</a>
                            </div>

                            <div className="">
                                {
                                    ext_order([
                                        {
                                            ext_order_content: "अद्भुत, असरदार और अविश्वसनीय"
                                        },
                                        {
                                            ext_order_content: "10 दिनों की मनी बैक गारंटी सुविधा"
                                        },
                                        {
                                            ext_order_content: "100% संतोषजनक परिणाम नहीं तो पैसा वापिस"
                                        },
                                        {
                                            ext_order_content: "अभी आर्डर करें और 50% से ज्यादा बचत करें !"
                                        },
                                        {
                                            ext_order_content: "प्रीपेड खरीदारी पर 10% की अतिरिक्त बचत"
                                        }
                                    ])
                                }

                            </div>
                        </div>



                    </div>
                </div>
            </div>








        </section>
    )
}

export default Extra_offer