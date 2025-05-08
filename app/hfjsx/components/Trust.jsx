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


const Material = ({ img, title }) => {

    return <div className='col-span-2 text-center rounded-[3rem] overflow-hidden border-2'>

        <div className='w-full mx-auto'>
            <img src={img} alt="asd" loading='lazy' className='w-[60px] my-2 mx-auto p-2' />
        </div>

        <div className='text-[14px] w-full overflow-hidden mx-auto font-semibold  min-h-[70px] bg-[#a0dfff]'>
            <p className='w-[80%] overflow-hidden pt-2 text-center mx-auto'>  {title}</p>
        </div>

    </div>



}


const Trust = () => {
    return (
        <section className={noto.className}>

            <div className='bg-[#00a8ff] py-5'>

                <h1 className='text-2xl text-white text-center py-5 font-bold'>Why adsTrust?</h1>

                <h4 className='text-xl font-semibold text-center'>भारतीय पुरुष भरोसा करते है क्योंकि हम देते है</h4>



                <div className='grid grid-cols-6 justify-center items-center gap-3 px-2'>



                    {
                        Material({
                            img: "https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/1e384edf-0f52-4b39-9e5c-35e38bd5de00/public",
                            title: "10 दिनों की मनी बैक गारंटी"
                        })
                    }

                    {
                        Material({
                            img: "https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/4c4ff6d4-068a-4ae9-6060-712150884800/public",
                            title: "COD यानि डिलीवरी पर भुगतान"
                        })
                    }

                    {
                        Material({
                            img: "https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/9c4b6ee1-54a1-4863-bc98-7df85f83c500/public",
                            title: "प्रीपेड आर्डर पर 10% अतिरिक्त बचत"
                        })
                    }


                </div>



            </div>



            <div>
                <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/f9a328b2-ff78-4f19-5bd6-d7e595b30600/public" alt="asd" loading='lazy' />
            </div>

            <div className='bg-[#1c1d1f]'>

                <div className='flex items-center justify-center gap-3'>
                    <img src="/main/hfjsx_images/tir.png" alt="asd" loading='lazy' className='w-[50px] my-5' />
                    <h5 className='text-white font-bold text-xl'>हमारा लक्ष्य</h5>
                </div>

                <p className='px-5 text-lg text-white'>
                    "हम चाहते है सभी
                    <span className='text-[#febf00]'> पुरुष फौलादी </span>
                    लिंग और
                    <span className='text-[#febf00]'> दमदार सेक्स </span>
                    प्रदर्शन से बीवी/प्रेमिका को संतुष्ट रखे, ताकि वैवाहिक जीवन या लव रिलेशनशिप में रोमांच रहे। यौन असंतुष्टि की वजह से रिश्ते में कड़वाहट और दरार न आये!
                </p>


                <div className='w-full'>
                    <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/5442b1f4-9fbc-4838-bb50-7771c8fbbc00/public" alt="asd" loading='lazy' className='w-full' />
                </div>


                <div className=' text-center py-5'>
                    <button className='bg-[#b28909] pt-3 pb-1 px-4 text-xl font-bold rounded-xl'>हॉर्सफायर उपलब्ध है  </button>
                </div>


            </div>


            <div className='bg-[url("https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/55d35b1e-a083-4d8d-5784-fb5bf7cf8c00/public")]'>
                <div className='w-full text-center py-4'>
                    <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/5b74e637-30cc-4355-f378-de01eb699b00/public" alt="asd" loading='lazy' className='w-[11rem] mx-auto' />
                </div>

                <p className='font-bold text-lg w-[90%] mx-auto'>
                    <span className='text-[#900017]'> Flipkart,</span> Amazon और आपके 1 सिंगल कॉल पर यानि एक्सपर्ट से संपर्क करें और सभी जानकारी के साथ प्रोडक्ट आर्डर करें।
                </p>

                <div className='w-full'>
                    <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/a40f6705-07f2-4a82-1e19-3900f149bb00/public" alt="asd" loading='lazy' className='w-full' />
                </div>


            </div>




        </section>
    )
}

export default Trust