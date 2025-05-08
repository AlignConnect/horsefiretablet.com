import { Noto_Serif_Devanagari } from "next/font/google";
import Link from "next/link";

const noto = Noto_Serif_Devanagari({
    subsets: ['devanagari'],
    display: 'swap',
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});


const Header = () => {
    return (

        <section className={noto.className}>
            <section className="bg-[url('/main/hf369a_images/mobile1.webp')] text-center py-2">

                <h1 className="text-3xl font-bold py-5 w-[80%] md:w-[70%] mx-auto">
                    सेक्स समस्या से निराश पुरुष मर्दानगी बढ़ाने के लिए इसे आजमाएं!
                </h1>

                <Link href={"#form"} className="bg-[#f6ff02] text-black font-bold py-2 px-4 mb-3 font-poppin rounded-sm">
                    TRY IT TODAY
                </Link>


            </section>
        </section>
    )
}

export default Header