import { Noto_Serif_Devanagari } from 'next/font/google';
import React from 'react'


const noto = Noto_Serif_Devanagari({
    subsets: ['devanagari'],
    display: 'swap',
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});


const FirstBanner = () => {
    return (
        <section className={noto.className}>

            <div className='first_back min-h-[60px] w-full overflow-hidden'>
                <div className='paddings'>
                    <div className='first_button'>
                        <button>
                            <a href="tel:+919825251912" className='text-decoration-none text-white'>9825251912</a>

                        </button>
                    </div>

                    <div className='text-white pt-4 text-lg md:text-2xl hidden md:block'>
                        BLOG | BENEFITS
                    </div>
                </div>
                <h1 className='bharat'>भारत की सबसे बेहतरीन खोज</h1>

                <div className='grid grid-cols-12 m-auto w-[90%]'>


                    <div className='col-span-12 md:col-span-6'>
                        <h1 className='text-white bharat-behtrin'>1 महीने के भीतर सुडौल लिंग और लम्बी सेक्स अवधि का वादा !</h1>
                        <h1 className='text-white text-2xl'>सिर्फ 4 सप्ताह में </h1>

                        {
                            <div className='inquiry-horse-fire my-3 hidden md:block'>
                                <button onClick={() => window.location.href = "#form"}> Inquiry For Horse Fire</button>
                            </div>
                        }


                        <ul className='dec'>
                            <li className='font-bold text-white'> <span className='text-yellow-400'>100%</span> Safe </li>
                            <li className='font-bold text-white'> <span className='text-yellow-400'>100%</span> Effective </li>
                            <li className='font-bold text-white'> <span className='text-yellow-400'>0%</span> Side Effects </li>
                        </ul>

                        {
                            <div className='inquiry-horse-fire block md:hidden'>
                                <button onClick={() => window.location.href = "#form"}> Inquiry For Horse Fire</button>
                            </div>
                        }

                    </div>

                    <div className='col-span-6 md:col-span-5 grid grid-cols-12'>

                        <div className='col-span-6 relative top-[-70px] md:top-[150px] left-[130px] md:left-[80px] w-[300px] md:w-full'>
                            <img src="/main/hfp_images/pro.png" alt="no" className='img-sec-prod min-h-[250px] w-full' loading='lazy' />
                        </div>



                        <div className='col-span-12 md:col-span-6 offset-md-8 pt-[40px] md:pt-[300px]' >
                            <h1 className='text-white font-bold text-2xl md:text-2xl'>
                                भारतीय पुरुषों की शान रखे टॉप पर
                            </h1>

                            <div className='w-full'>
                                <img src="/main/hfp_images/marko.png" alt="no" className='w-[75%] min-h-[30px]' loading='lazy' />
                            </div>

                        </div>


                    </div>

                </div>



            </div>



        </section>
    )
}

export default FirstBanner