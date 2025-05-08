import { Noto_Serif_Devanagari, Poppins } from "next/font/google";
import Image from "next/image"

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



function Header() {
    return (
        <section className={`${noto.className} w-full relative`}>
            <div className="w-full  relative z-10">
                <div className="grid md:grid-cols-12 items-center">
                    <div className="grid justify-center col-span-6 flex-col py-4">
                        <div className={`${poppin.className}  text-6xl md:text-8xl font-black flex`}>
                            HORSE FIRE
                        </div>
                        <div className=" text-3xl md:text-4xl tracking-[.25em] flex justify-center md:justify-normal font-black">
                            TABLETS
                        </div>
                        <div className=" text-3xl md:text-5xl py-5 font-semibold text-center md:text-left">
                            अंग-अंग में दौड़े सेक्स की तरंग
                        </div>

                        <div className="my-2">
                            <div className="md:inline-block text-center" >
                                <a className={`${poppin.className} bg-[#213361] text-md md:text-3xl  font-bold  py-2 px-8 w-full rounded-full hover:bg-[#1e2f5a] shadow-lg shadow-[#213361]/50 transition-colors text-white`} href='#form'>
                                    ORDER NOW
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-6 min-h-[350px]">
                        <img
                            className='w-full h-full py-3 pl-5 min-h-[300px]'
                            loading="eager"
                            fetchPriority="high"

                            src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/675f6074-edd4-45b3-e4f9-c44412d78900/public"
                            alt='horsefire_tablet'
                        />
                    </div>
                </div>
            </div>
            <Image className="hidden md:block min-h-[550px]"
                src='https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/79915de2-660d-488b-5f25-b2f3da482200/public'
                loading="eager"
                fetchPriority="high"
                fill alt="background" />
            <Image className="block md:hidden min-h-[550px]"
                src='https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/3583b041-3400-4a76-d6e3-1b1e5aafe900/public'
                loading="eager"
                fetchPriority="high"
                fill alt="background_mobile" />

        </section>
    )
}

export default Header