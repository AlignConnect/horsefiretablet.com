import dynamic from 'next/dynamic';
import React from 'react'


const FormHead = dynamic(() => import('./FormHead'));

const Header = () => {



    const success_rate = (arr) => {
        return arr?.map((e, key) => {
            return <div className='flex  items-center sm:justify-items-start  sm:gap-3 gap-5 py-2 ' key={key}>
                <div className="">
                    <img src={e.icon} className=" sm:w-2/3 w-14 mx-auto" alt="icons" />
                </div>
                <div className="fontBebas leading-tight">
                    <div className='uppercase text-[#bd3128]  font-extrabold sm:text-[2.4vw] text-[10vw] text-left '>
                        <div
                            dangerouslySetInnerHTML={{ __html: e.title }}
                        />
                    </div>
                    <div className='uppercase text-black sm:text-[1.7vw] text-2xl text-left'>
                        <div
                            dangerouslySetInnerHTML={{ __html: e.sub_title }}
                        />
                    </div>
                </div>
            </div >
        })
    }


    return (

        <section className=''>
            <div>
                <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/d8823efa-9030-4c3a-80cd-d724e28d9600/public" alt="" className='w-full md:block hidden' />
                <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/a3b08d88-6685-4f8b-c0b0-f24b5794b200/public" alt="" className='w-full md:hidden block' />
            </div>

            <div className="w-full sm:max-w-7xl  mx-auto ">
                <div className="grid sm:grid-cols-3 justify-center items-center sm:py-5 py-2">
                    {
                        success_rate([
                            {
                                icon: "https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/77cd3d1e-802c-4580-6dbb-fb10a0c5b300/public",
                                title: "+3500 Units",
                                sub_title: "Sold Per Day in India"
                            },

                            {
                                icon: "https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/77cd3d1e-802c-4580-6dbb-fb10a0c5b300/public",
                                title: "30 Lacks Satisfied",
                                sub_title: " Customers & Counting"
                            },
                            {
                                icon: "https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/77cd3d1e-802c-4580-6dbb-fb10a0c5b300/public",
                                title: "96% Success Rate",
                                sub_title: "in Sexual Problems"
                            },

                        ])
                    }
                </div>


                <FormHead />

            </div>

        </section>

    )
}

export default Header