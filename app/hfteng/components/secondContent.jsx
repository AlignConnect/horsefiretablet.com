import dynamic from 'next/dynamic';
import React from 'react'


const Order_now = dynamic(() => import('./Order_now'), {
    loading: () => <p>loader</p>
})


const secondContent = () => {



    const whyHorsefire = [
        { title: 'COD Payment Facility Available' },
        { title: '10 Days Money Back Guarantee' },
        { title: '100% Safe product & clinically approved.' },
        { title: 'Certified by the Ayush Ministry of India.' },
        { title: 'Feel Better Performance in just 7 days.' },
        { title: 'This is on top with 96.6% success rate' }
    ]


    const before = ([
        {
            b_title: "Short & loose penis",
            b_gif: "https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/16dda92a-fbfc-4881-5015-577efdde4600/public"
        },
        {
            b_title: "Premature Ejaculation",
            b_gif: "https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/88f34d97-a0e4-4920-ea2b-2d0fffd17100/public"
        },
        {
            b_title: "Low Stamina",
            b_gif: "https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/9c2f3886-3f4c-4164-c393-5f7dfe971c00/public"
        }
    ]);


    const after = ([
        {
            a_title: "Long & Rock Hard Penis",
            a_gif: "https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/8c55f6e0-3383-4915-3617-fc913b90c100/public"
        },
        {
            a_title: "Long Lasting Sex",
            a_gif: "https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/53d458f4-096a-4b9f-a82f-e8bf4e725b00/public"
        },
        {
            a_title: "High Stamina",
            a_gif: "https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/34590a14-d9c2-4574-054c-505c4d3d7500/public"
        }
    ]);

    const Herbs_list = ([

        {
            name: "Shilajit",
            img: "https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/298e7a95-f5ab-4cd3-7627-4fa78a4a2700/public",
            content: "Shilajit is Stimulate the production of sperm and increase the sperm count signifi- cantly"
        },
        {
            name: "Gokshura",
            img: "https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/0e1cd685-509e-476c-1ea9-9bda4356ad00/public",
            content: "Improve libido in men who have a low sex drive. It also helps boost energy and vitality"
        },
    ]);

    const Herbs_list_2 = ([
        {
            name: "Ashwagandha",
            img: "https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/161e3a68-f70a-40b8-1e05-e9bc46eb4e00/public",
            content: "Ashwagandha is considered an aphro- disiac, or herb used to improve sexual desire, pleasure, or performance."
        },
        {
            name: "Safed Musli",
            img: "https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/41d001cd-cdee-4444-aad9-d5e61d3b9900/public",
            content: "Safed musli generates strong aphrodisi- ac effects that help in reducing anxiety & mental stress and stimulate the sex hormones."
        },
    ])



    return (

        <div className="">

            <Order_now />

            <section className='bg-[#3791c5]'>

                <div className="max-w-5xl mx-auto py-4">


                    <div className='py-5'>
                        <div className="fontPoppins text-white text-center mx-auto border border-dashed border-white py-2 sm:w-3/6 sm:text-2xl text-md">
                            BIGGER, HARDER, LONG-LASTING ERECTION
                        </div>
                    </div>

                    <div className="fontBebas text-white text-center sm:text-7xl text-5xl sm:py-3 py-1">
                        Why Horsefire Tablet?
                    </div>


                    <div className="py-3">
                        {whyHorsefire.map((e, key) => {
                            return <div className="fontPoppins text-white py-2 px-3" key={key}>
                                <ul className=" list-disc pl-4">
                                    <li className='text-[0.9rem] sm:text-[1.1rem]'>
                                        {e.title}
                                    </li>
                                </ul>
                            </div>
                        })}

                    </div>



                </div>

                <div className="bg-gray-200">

                    <div className="max-w-5xl mx-auto">
                        <div className="grid grid-cols-2  mx-auto justify-center items-center">

                            <div className="">
                                <div className="font-extrabold text-red-500 text-center sm:text-5xl text-3xl pt-6">
                                    BEFORE
                                </div>
                                {before.map((e, key) => {
                                    return <div className="fontPoppins text-black py-5 px-3" key={key}>
                                        <img src={e.b_gif} alt="" className='sm:w-48 w-32 mx-auto ' />
                                        <div className="sm:text-2xl text-[1.2rem] font-semibold text-center pt-2">
                                            {e.b_title}
                                        </div>
                                    </div>
                                })}
                            </div>


                            <div className="">
                                <div className="font-extrabold text-green-500 text-center sm:text-5xl text-3xl pt-6">
                                    AFTER
                                </div>
                                {after.map((e, key) => {
                                    return <div className="fontPoppins text-black py-5 px-3" key={key}>
                                        <img src={e.a_gif} alt="" className='sm:w-48 w-32 mx-auto' />
                                        <div className="sm:text-2xl text-[1.2rem] font-semibold text-center pt-2">
                                            {e.a_title}
                                        </div>
                                    </div>
                                })}
                            </div>
                        </div>

                    </div>

                    <div className="bg-black ">
                        <div className="max-w-5xl mx-auto relative mt-[3rem] md:mt-[13rem]">
                            <div className={`flex flex-col md:text-3xl  items-end mr-4 uppercase text-white fontPoppins py-5`}>
                                <h1 className="font-bold text-end"> <span className='text-yellow-400'>10,00,000+</span><br /> satisfied customers </h1>
                                <p className=""> Limited offer !!! </p>
                            </div>
                            <div>
                                <div className="absolute  bottom-1 sm:w-2/5 w-[45%]">
                                    <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/dce3dc81-7301-4566-873d-d9669ff4b500/public" className='' />
                                </div>
                            </div>
                        </div>
                    </div>





                    <div className="fontPoppins uppercase font-semibold sm:py-7 py-4 text-black sm:text-4xl text-2xl  text-center">
                        Expert's Opinions & Recommendations
                    </div>



                    <div className="max-w-5xl mx-auto">


                        <div className="border-2 border-dotted border-black my-2" >
                            <div className="py-4 px-3" >
                                <div className="text-center mb-4 " >
                                    <div className="relative sm:w-[20%] w-[50%] mx-auto">
                                        <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/c4563e46-bd65-4670-c436-437b73813500/public" alt="pic" className=" border border-solid border-black px-3 " />

                                        <div className=" absolute -bottom-7 -right-7">
                                            <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/40aab70e-6b65-4690-00e8-9f0103bec200/public" alt="pic" className="w-[100%]" />
                                        </div>
                                    </div>
                                    <div className="mt-5">
                                        <h4 className="fontBebas text-4xl pt-5">dr. mayur shanke</h4>
                                        <h6 className="text-xl">14 years of experience</h6>
                                        <small>MD - Alternate Medicine, BAMS
                                            Ayurveda, Sexologist</small>
                                    </div>

                                </div>
                                <div className="">
                                    <p className="text-justify">Horsefire Tablet is a Powerful sex timing and penis size booster, Most important, it has no chemical substance and is totally natural formulation. It has all herbs with aphrodisiac properties that help to boost testosterone, produce nitric oxides, and improve blood flow in the penis as a result men get rock-hard erections and sex better. You can trust one and see results yourself.</p>


                                </div>
                            </div>

                        </div>

                    </div>

                    <Order_now />


                    <div className="bg-black">
                        <div className="max-w-5xl mx-auto py-3">

                            <div className="fontPoppins uppercase font-semibold sm:py-7 py-4 text-white sm:text-4xl text-2xl  text-center">
                                <span className='text-red-600'>Maximum</span> strength indredients
                            </div>


                            <div className="grid sm:grid-cols-3 items-center justify-center sm:gap-8 gap-2">
                                {/* 
                            <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/aaeb0881-36b0-4f5d-bba3-b27ea6d1ef00/public" alt="" className='w-5/6 sm:w-full mx-auto block sm:hidden' /> */}


                                <div className="">
                                    {Herbs_list.map((e, key) => {
                                        return <div className="fontPoppins  bg-white text-black my-2 mx-2 rounded-xl py-2 sm:py-1 px-3" key={key}>
                                            <div className="flex  items-center justify-left gap-3">
                                                <img src={e.img} alt="" className=' w-20 ' />
                                                <div className="sm:text-2xl text-[1.4rem] text-red-600 font-semibold text-center pt-2">
                                                    {e.name}
                                                </div>
                                            </div>
                                            <p className='text-sm  text-justify py-2'>
                                                {e.content}
                                            </p>
                                        </div>
                                    })}
                                </div>

                                <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/aaeb0881-36b0-4f5d-bba3-b27ea6d1ef00/public" alt="" className='w-5/6 sm:w-full mx-auto ' />



                                <div className="">
                                    {Herbs_list_2.map((e, key) => {
                                        return <div className="fontPoppins bg-white text-black my-2 mx-2 rounded-xl py-2 sm:py-1 px-3" key={key}>
                                            <div className="flex  items-center justify-left gap-3">
                                                <img src={e.img} alt="" className=' w-20 ' />
                                                <div className="sm:text-2xl text-[1.4rem] text-red-600 font-semibold text-center pt-2">
                                                    {e.name}
                                                </div>
                                            </div>
                                            <p className='text-sm text-justify py-2'>
                                                {e.content}
                                            </p>
                                        </div>
                                    })}
                                </div>

                            </div>




                        </div>
                    </div>



                    <div className="mx-auto second_bg sm:py-5 pt-6 pb-10">

                        <section className="fontNoto">
                            <section className="relative max-w-5xl m-auto z-20 flex justify-center items-center flex-col px-2">
                                <div className="flex flex-col justify-center items-center uppercase pt-7">
                                    <h1 className="font-black text-5xl md:text-7xl text-red-600">
                                        Horse fire
                                    </h1>
                                    <h1 className="font-black text-5xl md:text-7xl">Tablet</h1>
                                    <h2
                                        className="md:text-5xl text-3xl text-center font-black pb-20 py-5  bg-gradient-to-r from-emerald-500 to-emerald-900 bg-clip-text text-transparent fontPoppins"
                                    >
                                        Why do men like Horse Fire so much?
                                    </h2>
                                </div>
                                <div className="relative fontPoppins flex justify-center items-center my-16 md:h-auto h-screen w-full ">
                                    <img
                                        src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/bd468b6f-f7fc-47c7-5dc0-7ef68a89c200/public"
                                        className="w-64 mt-4"
                                        alt="aaa"
                                        loading="eager"
                                        fetchPriority="high"
                                    />

                                    <div className="floating absolute  left-0 md:left-12 -top-28 md:top-10 flex md:w-1/3 items-center bg-white p-2 py-3 shadow-lg rounded-xl">
                                        <div className="flex-none">
                                            <img
                                                src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/a056a3d2-f3c8-47ff-8992-5ace7671a900/public"

                                                alt="bbb"
                                                className="w-16 shrink-none"
                                                loading="eager"
                                                fetchPriority="high"
                                            />
                                        </div>
                                        <div className="ml-2">
                                            <h1 className="font-bold">Arun shetty</h1>
                                            <p className="text-sm">
                                                Good product, using past 4 months. Now, i feel less tired
                                            </p>
                                        </div>
                                    </div>

                                    <div className="floating absolute left-0 hidden  w-2/3 md:flex md:w-1/3 items-center bg-white p-2 py-3 shadow-lg rounded-xl">
                                        <div className="flex-none">
                                            <img
                                                src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/e01d2ad8-ad08-4e49-bc1a-61f1a6c83700/public"
                                                alt="ccc"
                                                className="w-16 shrink-none"
                                                loading="eager"
                                                fetchPriority="high"
                                            />
                                        </div>
                                        <div className="ml-2">
                                            <h1 className="font-bold">Aniruddh shukla</h1>
                                            <p className="text-sm">
                                                2 week ho gye ise khate huye meri timing dheere dheere increase
                                                hone laga
                                            </p>
                                        </div>
                                    </div>

                                    <div className="floating absolute left-10 md:bottom-5 bottom-[3rem] flex md:w-1/3 items-center bg-white p-2 py-3 shadow-lg rounded-xl">
                                        <div className="flex-none">
                                            <img
                                                src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/8b8463fd-96fb-4d63-9a97-ad8b487d5c00/public"
                                                alt="eee"
                                                className="w-16 shrink-none"
                                                loading="eager"
                                                fetchPriority="high"
                                            />
                                        </div>
                                        <div className="ml-2">
                                            <h1 className="font-bold">Lokesh lalvani</h1>
                                            <p className="text-sm">
                                                Best for ED problem Natural nd effective also
                                            </p>
                                        </div>
                                    </div>

                                    <div className="floating absolute flex  -z-10 right-12  md:right-20 md:top-10 -top-4 md:w-1/3 items-center bg-white p-2 py-3 shadow-lg rounded-xl">
                                        <div className="flex-none">
                                            <img
                                                src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/65d862b0-e489-49bb-a60d-24a118150700/public"

                                                alt="fff"
                                                className="w-16 shrink-none"
                                                loading="eager"
                                                fetchPriority="high"
                                            />
                                        </div>
                                        <div className="ml-2">
                                            <h1 className="font-bold">Akshay jha</h1>
                                            <p className="text-sm">Very effective must try👌</p>
                                        </div>
                                    </div>

                                    <div className="floating absolute flex md:right-10 right-2 md:top-auto top-28 w-3/4 md:w-1/3 items-center bg-white p-2 py-3 shadow-lg rounded-xl">
                                        <div className="flex-none">
                                            <img
                                                src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/ea48c203-09b2-44ea-0ae9-7f66cc71e700/public"

                                                alt="ggg"
                                                className="w-16 shrink-none"
                                                loading="eager"
                                                fetchPriority="high"
                                            />
                                        </div>
                                        <div className="ml-2">
                                            <h1 className="font-bold">Afzal rehman</h1>
                                            <p className="text-sm">
                                                Helpful for increasing timing during bedtime
                                            </p>
                                        </div>
                                    </div>

                                    <div className="floating absolute  flex right-5 md:right-12 md:bottom-10 bottom-[-3.8rem] md:w-1/3 items-center bg-white p-2 py-3 shadow-lg rounded-xl">
                                        <div className="flex-none">
                                            <img
                                                src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/e04765ad-c258-4228-6ed6-68babc0dc400/public"
                                                alt="hhh"
                                                className="w-16 shrink-none"
                                                loading="eager"
                                                fetchPriority="high"
                                            />
                                        </div>
                                        <div className="ml-2">
                                            <h1 className="font-bold">Nirav mahant</h1>
                                            <p className="text-sm">Results are good safe and natural</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="absolute -z-20  bg-yellow-400 w-80  h-80 blur-[5rem] opacity-10  "></div>
                                <div className="absolute -z-10  bg-green-400 w-80 right-8 top-10  h-80 blur-[5rem] opacity-15  "></div>
                                <div className="absolute -z-10  bg-violet-400 w-80 left-5 top-10  h-80 blur-[5rem] opacity-10  "></div>
                                <div className="absolute -z-20 md:left-20  left-0 top-1/4">
                                    <img
                                        src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/d080ede2-d318-4651-99f9-8cbbccc41d00/public"
                                        alt="jjj"
                                        className="w-36"
                                        loading="eager"
                                        fetchPriority="high"
                                    />
                                </div>
                                <div className="absolute -z-20 md:right-20 right-0  top-1/2">
                                    <img
                                        src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/d080ede2-d318-4651-99f9-8cbbccc41d00/public"
                                        width={0}
                                        height={0}
                                        alt="kkk"
                                        className="w-36"
                                        loading="eager"
                                        fetchPriority="high"
                                    />
                                </div>
                                <div className="absolute -z-20 md:left-36  left-0 top-3/4">
                                    <img
                                        src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/d080ede2-d318-4651-99f9-8cbbccc41d00/public"
                                        width={0}
                                        height={0}
                                        alt="lll"
                                        className="w-12"
                                        loading="eager"
                                        fetchPriority="high"
                                    />
                                </div>
                            </section>
                        </section>

                    </div>


                    <div className="bg-black">

                        <div className="max-w-5xl mx-auto py-3">


                            <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/348293ed-39ea-45aa-241e-c92efb214000/public" alt="" className='w-full sm:w-3/4 mx-auto' />




                        </div>

                    </div>
                    <Order_now />


                    <div className="second_bg">
                        <div className="max-w-5xl fontPoppins mx-auto py-3 text-center">

                            <div className=" px-3 sm:px-5 py-5 sm:py-10">
                                <div className="border border-red-600 bg-[#ffdcdc] p-3 sm:py-10 sm:px-5 rounded-3xl">
                                    <span className="text-white bg-[red] px-4 sm:px-6 py-1 sm:py-0 text-xl sm:text-5xl rounded-full poppinsFont font-bold">&#33;</span>
                                    <p className="text-2xl sm:text-3xl font-bold mt-5 sm:mt-10">Beware to duplicates</p>
                                    <p className="text-sm sm:text-md mt-3">Many fake products are listed online due to the Horse Fire Tablet's popularity. Buy carefully AR Ayurveda brand Horse Fire Tablets for better results!</p>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>



            </section >
        </div>

    )
}

export default secondContent