import Image from 'next/image';
import '../hfe.css';

const Section1 = () => {

    return (
        <div className='w-full '>
            <div className="py-2 bg-red-500"></div>

            <div className="relative productOrderPara">
                <img src='/main/hfe_images/image1.png' width='100%' height='100%' alt='pic' fetchPriority='high' className='relative z-10 pt-4 ps-1' />
                <Image src='/main/hfe_images/first_bg.jpg' fill alt='pic' loading='lazy' />
                <img src='/main/hfe_images/image2.png' width='100%' height='100%' alt='pic' loading='lazy' className='w-11/12 z-20 sm:w-3/4 absolute -translate-x-1/2 -translate-y-1/2 left-1/2 -bottom-[8.5%] sm:-bottom-[7%]' />
            </div>

        </div>
    )
}
export default Section1;