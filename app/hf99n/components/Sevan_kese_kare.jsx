import Image from 'next/image'
import React from 'react'

function Sevan_kese_kare() {

    const sevan = [{
        para: 'Amazon तथा Flipkart जैसी विश्वसनीय प्लेटफार्म पर उपलब्ध',
    },
    {
        para: 'T&C के साथ 10 दिनों की मनी बैक गारंटी सुविधा उपलब्ध',
    },
    {
        para: '1 कॉल में प्रोडक्ट बुकिंग, फ़ास्ट डिलीवरी व COD उपलब्ध',
    },
    {
        para: 'ऑफिसियल वेबसाइट के साथ भारत का श्रेष्ठ यौन वर्धक विक्रेता',
    }
    ]


    return (
        <div className='w-full relative'>
            <div className='relative z-10 max-w-6xl mx-auto pt-10 pb-5 sm:py-10 fontPoppins px-3 '>
                <div className="grid sm:grid-cols-12 gap-5 md:gap-10 xl:gap-20 items-center">

                    <div className="sm:col-span-8">
                        <div className="border-red-700 border-dashed border-2 text-2xl sm:text-3xl p-3 sm:p-5">
                            <div className="text-center relative -top-9 sm:-top-11">
                                <div className="bg-red-700 px-5 py-1 rounded-full text-white font-bold inline-block pt-2 ">भरोसे की वजह</div>
                            </div>
                            <div className="sm:hidden -mt-5 mb-5">
                                <img src="/main/hf99_images/horsefirebox.webp" alt="pic" width='100%' height='100%' className='rouded-xl   w-10/12 mx-auto' loading='lazy' />
                              
                            </div>
                            <div className="text-[1rem] sm:text-xl md:text-2xl grid justify-center gap-2 sm:gap-5 ">
                                {sevan.map((e, key) => {
                                    return <div className="flex flex-grow gap-3 items-center" key={key}>
                                        <img src="/main/hf99_images/true.webp" alt="pic" className="w-8 sm:w-10" width='100%' height='100%' loading='lazy' />
                                        <p className="">{e.para}</p>
                                    </div>
                                })}
                            </div>
                        </div>
                    </div>
                    <div className="sm:col-span-4 hidden sm:block">
                        <img src="/main/hf99_images/pro1.webp" alt="pic" width='100%' height='100%' className='rouded-xl' loading='lazy' />
                        
                    </div>
                </div>
            </div>
            <Image src='/main/hf99_images/bg5.webp' fill loading='lazy'  alt='pic' />
        </div>

    )
}

export default Sevan_kese_kare