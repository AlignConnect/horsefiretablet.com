import React from 'react'



const Header = () => {


    const listAsk = [
        { title: 'Long & Thick Penis' },
        { title: 'Long-Lasting Sex' },
        { title: 'High-level Stamina and Vigor' },
        { title: 'Nonstop Performance' }

    ]

    return (
        <section className='first_bg'>
            <div className="relative">


                <div className="max-w-5xl mx-auto">

                    <div className=" grid sm:grid-cols-2 items-center justify-center sm:pt-10 hftsback ">


                        <div className="">

                            <div className="textGradiant font-extrabold fontBebas text-[3.5rem] sm:text-[5.4rem] sm:leading-loose pt-3 sm:text-left text-center">
                                HORSEFIRE TABLET
                            </div>

                            <div className="">

                                <div className="text-white fontBebas sm:text-left text-center sm:text-6xl text-3xl pb-5">
                                    <span className='text-yellow-500 tracking-wide'>GET MAXIMUM</span> SEXUAL BENEFITS
                                </div>

                                <div className="header_benifits_ul text-white sm:px-6 px-10 text-sm">
                                    <ul className="">
                                        <li className="">BOOST SEXUAL DESIRE</li>
                                        <li className="">INCREASE YOUR ERECTION STRENGTH</li>
                                        <li className="">LAST LONGER WITH SUPERCHARGED STAMINA</li>
                                        <li className="">SEXUALLY SATISFY YOUR PARTNER</li>
                                    </ul>
                                </div>


                                <div className="py-3 my-3 fontPoppins sm:text-left text-center" >
                                    <a href='#form' className='decoration-0 text-white uppercase bg-red-500 sm:text-xl text-sm font-bold px-10 py-2 rounded-full inline-block '>Order now</a>
                                </div>

                            </div>
                        </div>


                        <div className="">
                            <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/488e8b0b-ef71-46de-c015-c94a2349b600/public" alt="" className='w-full sm:block hidden' />
                        </div>

                    </div>


                    <div className="absolute transform -translate-x-1/2 -translate-y-1/2 sm:top-[105%] sm:left-[62%] top-[96%] left-1/2  bg-yellow-500 rounded-full w-9/12 sm:w-auto ">

                        <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/de123c4b-0ae2-4846-4e7f-f7f3a27d5000/public" alt="" className=' sm:p-7 p-2' />
                    </div>

                </div>

            </div>



            <div className="second_bg fontPoppins ">


                <div className="max-w-5xl mx-auto sm:py-10 py-12">



                    <div className="text-black sm:text-4xl text-2xl font-extrabold py-5 sm:text-left text-center sm:pt-0 pt-20">
                        Do You Want These All?
                    </div>


                    {listAsk.map((e, key) => {
                        return <div className="flex items-center gap-3 py-1 px-3" key={key}>
                            <div className="">
                                <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/57ed09f5-08bf-4ad3-369a-f80e08478100/public" alt="pic" className="w-4" /></div>
                            <p className="font-semibold text-[1.1rem] sm:text-[1.3rem]">
                                {e.title}</p>
                        </div>
                    })}

                </div>
            </div>

        </section>
    )
}

export default Header