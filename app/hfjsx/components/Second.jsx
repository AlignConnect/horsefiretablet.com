import { Noto_Serif_Devanagari, Poppins } from 'next/font/google';
import React from 'react'

const poppin = Poppins({
    subsets: ['latin'],
    display: 'swap',
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});

const noto = Noto_Serif_Devanagari({
    subsets: ['devanagari'],
    display: 'swap',
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});


const im_sex = ({ img, title }) => {

    return <div className='col-span-2'>

        <div>
            <img src={'/main/hfjsx_images/' + img} alt="dfdf" loading='lazy' />
        </div>

        <div className={`${noto.className} py-2 text-xl md:text-2xl`}>
            <span className='text-white p-2 text-center'>{title}</span>
        </div>

    </div>

}


const Second = () => {
    return (
        <section className={noto.className}>

            <section className='bg-[url("https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/17ade953-f0db-43f6-3718-a29931299800/public")] py-4'>

                <p className='bg-[#edb501] text-2xl text-center font-bold pt-2 w-[90%] mx-auto rounded-3xl'>सामान्य या सेक्स पीड़ित पुरुष</p>


                <div className='w-[80%] mx-auto py-3 '>
                    <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/fb983beb-f16b-4483-8604-191da18b3d00/public" alt="asd" loading='lazy' className='border-4 border-blue-600 rounded-3xl' />
                </div>


                <div className='grid grid-cols-4 gap-2 px-2 items-center text-center'>

                    {
                        im_sex({
                            img: "first.webp",
                            title: "कम सेक्स व निराशा"
                        })
                    }

                    {
                        im_sex({
                            img: "second.webp",
                            title: "छोटा-पतला लिंग"
                        })
                    }


                    {
                        im_sex({
                            img: "third.webp",
                            title: "कमजोर इरेक्शन"
                        })
                    }


                    {
                        im_sex({
                            img: "fourth.webp",
                            title: "ऊर्जा की कमी "
                        })
                    }



                </div>



            </section>

        </section>
    )
}

export default Second