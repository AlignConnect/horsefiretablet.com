import dynamic from 'next/dynamic';
import { Khand } from 'next/font/google';
import '../hflip.css';

const khand = Khand({
    subsets: ['latin'],
    display: 'swap',
    weight: ['300', '400', '500', '600', '700',]
});



const Section1 = () => {
    return (
        <div className={`w-full pb-0 md:pb-3`}>

            <div className="max-w-full min-w-[360px] relative text-white">


                <div className='hidden md:block min-h-[650px]'>
                    <img src={"/main/hflip_images/back1web.jpg"} alt='nop' className='w-full h-full' fetchPriority='high' />
                </div>
                <div className='block md:hidden min-h-[650px]'>
                    <img src={"/main/hflip_images/back1Mob.jpg"} alt='nop' className='w-full h-full' fetchPriority='high' />

                </div>


                <div className={`${khand.className} absolute grid justify-center items-center transform translate-x-[-50%] translate-y-[-50%] left-1/2  top-[18%] md:top-[40%] md:left-1/4 font-bold w-full md:w-fit`}>


                    <div className='text-[12vw] md:text-7xl flex flex-row xl:text-8xl leading-none gap-2 md:gap-6  items-baseline'>इस तरह बढ़ाएं<span className="text-[15vw] md:text-8xl xl:text-[7rem]"> लिंग</span></div>

                    <div className='text-[12vw] md:text-7xl flex flex-row gap-2 md:gap-6 xl:text-8xl pl-5  leading-none items-baseline'>और<span className="text-[15vw] md:text-8xl xl:text-[7rem] my-0 md:my-4">सेक्स टाइमिंग</span>  </div>

                    <div className='text-[12vw] md:text-7xl flex flex-row xl:text-8xl  leading-none'>करें जोरदार सेक्स!</div>
                </div>


            </div>


        </div>
    )
}
export default Section1;