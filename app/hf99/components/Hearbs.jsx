import Image from 'next/image'

function Hearbs() {
    return (
        <div className='relative fontPoppins'>
            <div className="relative z-10">
                <div className="max-w-7xl mx-auto py-5 sm:py-10 grid sm:grid-cols-12 px-3 items-center">
                    <div className="sm:col-span-9">
                        <div className="relative inline-block">
                            <h1 className=" z-10 relative font-extrabold text-4xl sm:text-5xl lg:text-6xl xl:text-8xl leading-none">BLEND OF</h1>
                            <div className="absolute bottom-[0.28rem] sm:bottom-2 xl:bottom-4 bg-yellow-400 h-2/5 left-[1%] w-[98%]"></div>
                        </div>
                        <div className="">
                            <h2 className="inline-block px-5 py-1 bg-red-500 text-white text-2xl lg:text-3xl xl:text-4xl font-bold">POWERFULL HERBS</h2>
                        </div>

                        <div className="fontArya mt-[2.5vw] text-[1.16rem] text-justify sm:text-2xl lg:text-3xl font-bold leading-relaxed">
                            <div className="flex gap-3 sm:gap-5 ">
                                <img src="/main/hf99_images/arrow.webp" alt="pic" width='100%' height='100%' className="w-3 sm:w-5 h-3 sm:h-5 mt-3 sm:mt-5" loading='lazy' />
                               <h1 className=""> <span className="text-red-600">17 जड़ीबूटियों और भस्मो से बने "Horse Fire Tablet "</span> से भारतीय पुरुषों का 3.5-4 इन्च छोटा और ढीला लिंग 8-9 इंच लम्बा और मोटा बन जाता है। जोश और स्टैमिना में अद्भुत बृद्धि होती है, हर वक़्त सेक्स की इच्छा जागृत रहती है।</h1>
                            </div>
                            <div className="flex gap-3 sm:gap-5 mt-5 ">
                                <img src="/main/hf99_images/arrow.webp" alt="pic" width='100%' height='100%' className="w-3 sm:w-5 h-3 sm:h-5 mt-3 sm:mt-5" loading='lazy' />
                               <h1 className="">औजार की <span className="text-red-600">कड़कपन में ऐसा बदलाव आ जाता है</span> कि हर शॉट में महिला पार्टनर की चीख निकल जाए। टाइमिंग कई गुना बढ़ जाता है और सेक्स लगातार घंटो तक चलता ही रहता है।</h1>
                            </div>
                        </div>
                    </div>
                    <div className="sm:col-span-3 mt-5 sm:mt-0">
                        <img src="/main/hf99_images/pro1.webp" alt="pic" width='100%' height='100%' loading='lazy' className='hidden sm:block ' />
                        <img src="/main/hf99_images/horsefirebox.webp" alt="pic" width='100%' height='100%' loading='lazy' className='w-10/12 mx-auto sm:hidden' />

                        <div className="text-center text-white font-bold ">
                            <a href="#form" className="inline-block text-xl bg-gradient-to-t from-red-500 to-red-700 px-1 rounded-full py-3 pop_imagehfv">
                                <span className=" bg-gradient-to-b from-red-500 to-red-700 px-5 rounded-full py-2">ORDER NOW</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <Image src='/main/hf99_images/bg-3.webp' fill fetchPriority='high' loading='lazy'  alt='pic' />
        </div>
    )
}

export default Hearbs