import React from 'react'

function Section1() {
    return (
        <div className='  '>
            <div className="max-w-4xl mx-auto bg-white py-5 sm:py-10">
                <img src="/main/hf99_images/lol.webp" alt="pic" width='100%' height='100%' loading='lazy' className='hidden sm:block'/>
                <img src="/main/hf99_images/lol-mob.webp" alt="pic" width='100%' height='100%' loading='lazy' className='sm:hidden'/>
                <div className="grid sm:grid-cols-2 pt-5 sm:pt-10 px-5 sm:px-10">
                    <img src="/main/hf99_images/pro3.webp" alt="pic" width='100%' height='100%' loading='lazy'/>
                    <div className="bg-[#fef3d5] outline-dashed outline-1  p-5 -outline-offset-8 ">
                        <p className="fontArya text-2xl sm:text-3xl md:text-4xl font-bold text-center !leading-snug">अब मोटे और फौलादी लिंग के साथ देर तक सेक्स करना <span className="text-red-600"> एकदम आसान है, बस इसे आजमाए और कमाल देखें!</span>  </p>

                        <div className="text-center text-white font-bold mt-[7%]">
                            <a href="#form" className="inline-block bg-gradient-to-t from-red-500 to-red-700 px-1 rounded-full py-3 pop_imagehfv">
                                <span className=" bg-gradient-to-b from-red-500 to-red-700 px-5 rounded-full py-2">ORDER NOW</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Section1