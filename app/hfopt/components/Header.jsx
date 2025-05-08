import { Noto_Serif_Devanagari } from "next/font/google";

const noto = Noto_Serif_Devanagari({
    subsets: ['devanagari'],
    display: 'swap',
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});

const Header = () => {
    return (

        <section className={noto.className}>
            <section className='bg-[url(/main/hfopt_images/35.png)]'>
                <h1 className='text-center md:w-[70%] mx-auto text-white text-2xl md:text-3xl pt-5 pb-2 font-bold' style={{ textShadow: "2px 4px black" }}> <span className="">शीघ्र पतन</span> और <span className=""> मर्दाना कमजोरी</span> दूर कर <span className=""> घंटो करें सेक्स, </span> बस इसे आजमाये !</h1>
            </section>

            <p className="text-lg p-2 italic my-2">
                आज के आधुनिक युग में नामर्दी एक बड़ी समस्या बनकर उभरी है, जिसकी वजह से पुरुष अपनी चाहत के अनुसार सेक्स का मजा नहीं ले पाते है और उनकी चाहत धरी की धरी रह जाती है।
            </p>


            <section className='bg-[url(/main/hfopt_images/35.png)]'>
                <h1 className='text-center md:w-[70%] mx-auto text-white text-3xl md:text-3xl pt-3 font-bold' style={{ textShadow: "2px 4px black" }}> मर्दानगी की निशानी</h1>
            </section>



        </section>

    )
}

export default Header