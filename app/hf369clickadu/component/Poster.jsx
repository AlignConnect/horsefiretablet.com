import { Noto_Serif_Devanagari, Poppins } from "next/font/google";
import '../hf369.css'
import Link from "next/link";

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




const Poster = () => {
    return (
        <section className={noto.className}>
            <section className='relative bg-[url("/main/hf369a_images/mobile2.webp")] bg-no-repeat min-h-[1150px] md:min-h-[750px] md:bg-[url("/main/hf369a_images/desk2.webp")] bg-cover'>

                <div className="text-lg w-[95%] md:w-[80%] mx-auto py-3">

                    <p className="text-xl my-3">इसीलिए शिलाजीत, अश्वगंधा गोखरू, केसर, सफ़ेद मूसली, जायफल, शतावरी, विदारी, और अकरकरा जैसी 17 शक्तिशाली और यौनवर्धक जड़ीबूटियों और वांग, एवं अभ्रक जैसे दिव्य भस्मों के निर्माण से तैयार किया गया है Horse Fire Tablet जो बिल्कुल प्राकृतिक तरीके से पुरुष सेक्स हॉर्मोन बढ़ाता है, शक्ति और उत्तेजना में बृद्धि करता है और उदासी भरे सेक्स लाइफ को रोमांचक बनाने का काम करता है। </p>

                    <div className="w-full md:w-[60%] pt-7">
                        <h1 className="horse-tablet-hf369">HORSE FIRE</h1>

                        <div className="text-center text-3xl tracking-tight">
                            <h5 className={`${poppin.className} tracking-[4px] font-semibold`}>TABLET</h5>
                        </div>

                        <div className="text-center my-[10px]">
                            <div className="text-5xl font-bold leading-[60px] md:py-[50px] leading-[40px]">  <p className="tri-gre pt-4">शीघ्रपतन मिटायें </p>   <p className="tri-gre pt-4 text-6xl
                            ">अवधि बढ़ाये</p> </div>
                        </div>

                    </div>

                    <div className="absolute transform translate-y-[10%] translate-x-[10%] md:translate-y-[-100%] md:translate-x-[60%]">

                        <img src="/main/hf369a_images/pro2im.webp" alt="erre" className="md:w-[370px]" />

                    </div>


                </div>

                <div className="absolute w-full md:w-1/2 bottom-0 text-black font-black text-xl poppin text-center my-5">
                    <Link href={"#form"} className="transform translate-x-[50%] left-[50%]  bg-[#f6fe01] pt-3 px-5 rounded-lg">CLAIM YOUR BOTTLE</Link>
                </div>



            </section>
        </section>
    )
}

export default Poster