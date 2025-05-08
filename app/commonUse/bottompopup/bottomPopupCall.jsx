import { useGlobalContext } from '@/app/statemanage/context';
import '@/app/commonUse/bottompopup/bottomPopup.css';
import { Oswald } from 'next/font/google';

const oswald = Oswald({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-oswald',
    weight: ['200', '300', '400', '500', '600', '700']
});

const bottomPopupCall = () => {
    const { callDetail } = useGlobalContext();

    return (
        <div className='w-full'>
            <div className={`text-black ${oswald.className} bg-[#1b1b1b]`} >
                <a href={`tel:+91${callDetail.phoneNumber}`} className="relative inline-block" id='hfkCall' >
                    <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/2231b6c0-1a14-4837-1a38-46ce30252e00/public" alt="pic" loading='lazy' className='min-w-[360px] max-w-full' />
                    <div className="absolute top-[0rem] right-[2rem] text-[2.4rem] md:text-[2.6rem] font-semibold">{callDetail.phoneNumber}</div>
                    <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/d8d69c73-2e40-4e0e-7adf-72a9295c0e00/public" alt="pic" className='callicon faa-ring animated' loading='lazy' />
                </a>
            </div>
        </div>
    )
}
export default bottomPopupCall;