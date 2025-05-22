import React from 'react'

const Sec1 = () => {

    const list = [
        "improves blood flow",
        "It helps raise testosterone levels",
        "increases sexual desire and stamina"
    ]

    return (
        <div className="bg-[#1b1b1b] pb-32 pt-5 sm:py-20  xl:pb-[5%]">
            <div className='max-w-7xl mx-auto px-3 xl:px-0'>

                <div className="grid sm:grid-cols-12 text-center items-end xl:items-start gap-2 sm:text-left">
                    <div className="sm:col-span-7">
                        <p className="text-[#2effa1]  text-5xl sm:text-5xl font-bold italic ">INDIA's #1</p>
                        <p className="text-white sm:text-3xl">Sexual Booster Formula</p>
                        <p className="text-[#f5d34b] text-5xl sm:text-[6.5rem] font-bold uppercase fontBebas leading-snug !tracking-wider">Horse Fire Tablet</p>

                        <div className="max-w-md">
                            <p className="text-[#fe4543] fontNoto font-bold uppercase">Boost Power, Stay Last Longer</p>
                            <p className="text-white text-[1rem] sm:text-xl mt-3 sm:mt-5 sm:mb-10 text-left">blend of premium herbs expertly combined to tackle sexual weakness and reignite passion in your relationship</p>

                            <div className=" text-left text-[1rem] sm:text-xl hidden sm:block">
                                {list.map((e, key) => {
                                    return <div className="bg-white my-5 rounded-full px-2 sm:px-5 py-2 italic text-gray-700" key={key}>
                                        <span className="text-[#02bc7f]">&#10004;</span> &nbsp;{e}
                                    </div>
                                })}
                            </div>
                        </div>
                    </div>
                    <div className="sm:col-span-5 sm:-mb-10 xl:mb-0 ">
                        <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/9a7d124b-fba1-4ff9-9d92-4ad9e90b6700/public" alt="pic" className="" width='100%' height='100%' loading='lazy'/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sec1