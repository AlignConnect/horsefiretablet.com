import { Noto_Serif_Devanagari } from 'next/font/google';
import React from 'react'


const noto = Noto_Serif_Devanagari({
    subsets: ['devanagari'],
    display: 'swap',
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});


const Ear = () => {
    return (
        <section className={noto.className}>
            <div className='back-4 px-2'>

                <div className='left-side'>
                    <img src="/main/hfp_images/left.png" alt="no" width={"200px"} />
                </div>


                <div className='right-side'>
                    <img src="/main/hfp_images/right.png" alt="no" width={"400px"} />
                </div>


                <h1 className='p-star'>एक पोर्नस्टार की तरह प्रदर्शन करें !</h1>
                <h2 className='hr-fire text-black'>Horse Fire के काम करने का तरीका </h2>

                <div className='nb-body relative' >
                    <p className='font-semibold relative text-white text-[25px]'> ख़राब लाइफस्टाइल की वजह से आयी कमियों को दरकिनार कर नैचुरली मर्दानगी बढ़ाता है।
                    </p>
                </div>

                <h3 className='text-center text-3xl pt-10 font-black ' style={{ fontFamily: "sans-serif" }}>HORSE FIRE TABLET</h3>


                <div className='grid grid-cols-12 m-auto items-center text-center my-3 w-[100%] md:w-[65%]'>

                    <div className='md:col-span-4 col-span-12 m-0 col-start-1 text-center md:text-end'>
                        <h1 className='font-bold text-4xl text-red-700' >खाने से पहले</h1>


                        <div className='flex justify-center md:justify-end items-center'>
                            {
                                <div className='block md:hidden'>
                                    <img src="/main/hfp_images/left.png" alt="no" width={"150px"} />
                                </div>
                            }


                            <div className='text-start'>
                                <div className='text-2xl'> &#8658; छोटे स्पंज</div>
                                <div className='text-2xl'> &#8658; इरेक्शन की कमी</div>
                                <div className='text-2xl'> &#8658; कम सेक्स अवधि</div>
                                <div className='text-2xl'> &#8658; धीमा रक्त प्रवाह</div>
                                <div className='text-2xl'> &#8658; छोटा लिंग आकार</div>
                                <div className='text-2xl'> &#8658; लो एनर्जी एवं स्टैमिना</div>
                            </div>
                        </div>


                    </div>
                    <div className='md:col-span-4 col-span-12'>
                        <img src="/main/hfp_images/until.png" alt="no" className='w-75' />
                    </div>



                    <div className='md:col-span-4 col-span-12 text-start'>

                        <h1 className='font-bold khane my-4'>खाने के बाद</h1>

                        {
                            <div className='md:col-span-4 col-span-12 text-center my-3 block md:hidden'>
                                <img src="/main/hfp_images/right.png" alt="no" className='w-75' />
                            </div>
                        }

                        <div className='text-2xl'> &#8658; स्पंजी निकायों में जोरदार वृद्धि </div>
                        <div className='text-2xl'> &#8658; लिंग में उच्चतम स्तर का इरेक्शन</div>
                        <div className='text-2xl'> &#8658; 1 घंटे से भी ज्यादा सेक्स अवधि </div>
                        <div className='text-2xl'> &#8658; उच्चतम रक्त प्रवाह</div>
                        <div className='text-2xl'> &#8658; लिंग आकार में 6 CM वृद्धि</div>
                        <div className='text-2xl'> &#8658; एनर्जी, और स्टैमिना का सैलाब</div>
                    </div>
                </div>

                <h1 className='col-span-12  md:col-span-6 offset-md-3 offset-sm-0 text-center text-dark font-bold text-[30px] md:text-[61px]' >बहुत हुआ बर्दाश्त अपना लिंग और सेक्स पावर आज से ही बढ़ाना शुरू करें !</h1>

                <div className='aaj-order-kare py-3'>
                    <button onClick={() => window.location.href = "#form"}>
                        आज ही ऑर्डर करे
                    </button>
                </div>
            </div>
        </section>
    )
}

export default Ear;