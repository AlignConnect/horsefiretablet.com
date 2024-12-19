import dayjs from "dayjs";
import { Poppins } from 'next/font/google';

const poppins = Poppins({
    subsets: ['latin'],
    display: 'swap',
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});


function Header() {
    return (
        <div className="bg-[url('/main/hfo_images/header_background.jpg')] bg-cover ">
            <div className="w-full max-w-7xl mx-auto ">
                <div className="py-3 flex items-center justify-between px-2">
                    <div className={`${poppins.className} flex items-center gap-1`}>
                        <img
                            className='w-[50%] md:w-20 h-[70px]'
                            src={"/main/hfo_images/rashika_profile.png"}
                            alt='rashika_profile_image'
                            loading="lazy"
                        />
                        <div className="text-md md:text-xl text-white font-semibold" >Rashika</div>
                    </div>
                    <div className={`${poppins.className} text-sm md:text-xl text-white`}>
                        <div className="font-semibold">True Story</div>
                        <div>Published On {dayjs().format('DD-MM-YYYY')}</div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Header;