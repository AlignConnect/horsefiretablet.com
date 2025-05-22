import { Noto_Serif_Devanagari, Poppins } from 'next/font/google';

const noto = Noto_Serif_Devanagari({
    subsets: ['devanagari'],
    display: 'swap',
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});


const poppin = Poppins({
    subsets: ['latin'],
    display: 'swap',
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});



const Header = () => {
    return (
        <section className={noto.className}>

            <div className='bg-[#fff001] flex items-center'>
                <div className='w-[80px] px-3 pt-3'>  <span className='text-red-500 font-bold'>ध्यान दें</span></div>
                <marquee direction="left">
                    <div className='pt-3 pb-0 text-lg'>
                        हॉर्सफायर के बढ़ते लोकप्रियता को देखते हुए आजकल मार्केट में नकली प्रोडक्ट आ गए है तो ध्यानपूर्वक AR Ayurveda ब्रांड देखकर ही आर्डर करें !
                    </div>
                </marquee>
            </div>

            <section className='bg-[url("https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/923c8ffa-f15c-4a14-b7f3-25e145154300/public")] text-white bg-cover'>

                <div className={`w-[95%] mx-auto py-3 ${poppin.className}`}>
                    <div className='text-white relative inline-block top-5 md:top-7 left-6 md:left-[15%] text-[14px] md:text-[16px]'>India's <span className='text-[#fff001]'>No.1</span> Male Wellness</div>
                    <h1 className='text-[3.4rem] md:text-[5rem] text-center text-white font-semibold'>HORSE FIRE</h1>
                    <h1 className='text-white tracking-[15px] text-2xl relative bottom-2 text-center -top-6'>TABLET</h1>
                </div>

                <p className='italic text-center relative -top-5 md:text-xl'>Permanent Solution of Sex Problems </p>

                <div className='grid grid-cols-2 items-end min-h-[270px]'>

                    <div>
                        <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/b62583d0-0eda-445f-bbe2-b7b71763b600/public" alt="sdf" loading='eager' fetchPriority='high' className='w-full py-2' />
                    </div>

                    <div>
                        <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/80fff03d-df83-4aa9-6009-05e79bf5db00/public" alt="sdf" loading='eager' fetchPriority='high' className='w-full' />
                    </div>

                </div>

            </section>


        </section>
    )
}

export default Header