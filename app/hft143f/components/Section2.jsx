import React from 'react'

const Section2 = () => {


    const Women_need = (arr) => {

        return arr?.map((e, key) => {

            return <div className='' key={key}>

                <div className='fontNoto text-xl sm:text-2xl text-black font-extrabold text-center pt-3'>
                    {e.title}
                </div>

                <img src={e.gif} alt="" className='w-5/6 sm:w-4/5 mx-auto rounded-md mb-3 border-solid border border-red-300' />

            </div >
        })
    }


    return (
        <section>

            <div className='fontNoto bg-[#fff001] text-red-600 mx-3 rounded-md text-center pt-3 sm:pt-4 font-extrabold text-2xl sm:text-3xl my-3'>
                महिलाओं की चाहत ये है।
            </div>


            <div className=" grid grid-cols-12 items-center justify-center">


                <div className="col-span-7">

                    {
                        Women_need([
                            {
                                title: "ऊर्जावान और जोशीला मर्द",
                                gif: "/main/hxb_images/gif1.gif"
                            },

                            {
                                title: "दमदार चट्टान जैसा लिंग",
                                gif: "/main/hxb_images/gif2.gif"
                            },

                            {
                                title: "घंटे भर चलने वाला सेक्स",
                                gif: "/main/hxb_images/gif3.gif"
                            }
                        ])
                    }

                </div>

                <div className="col-span-5">

                    <img src="/main/hxb_images/girl_left.png" alt="" className='w-full sm:w-5/6 mx-auto pr-2' />

                </div>
            </div>



            <div className='fontNoto bg-[#fff001] text-red-600 mx-3 rounded-md text-center pt-3 sm:pt-4 font-extrabold text-2xl sm:text-3xl my-6'>
                हकीकत में मिलता ये है।
            </div>



            <div className="  grid grid-cols-12 items-center justify-center">


                <div className="col-span-5">
                    <img src="/main/hxb_images/girl_right.png" alt="" className='w-full sm:w-5/6 mx-auto pl-2' />
                </div>

                <div className="col-span-7">

                    {
                        Women_need([
                            {
                                title: "सेक्सुअली कमजोर मर्द",
                                gif: "/main/hxb_images/gif4.gif"
                            },

                            {
                                title: "छोटा, ढीला और टेढ़ा लिंग",
                                gif: "/main/hxb_images/gif5.gif"
                            },

                            {
                                title: "थोड़े समय का सेक्स",
                                gif: "/main/hxb_images/gif6.gif"
                            }
                        ])
                    }

                </div>

            </div>

        </section>
    )
}

export default Section2