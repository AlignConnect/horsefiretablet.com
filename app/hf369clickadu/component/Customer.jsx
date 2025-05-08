import { Noto_Serif_Devanagari } from "next/font/google";
import Link from "next/link";

const noto = Noto_Serif_Devanagari({
    subsets: ['devanagari'],
    display: 'swap',
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});


const Customer = () => {
    return (
        <section className={noto.className}>
            <section className="bg-[url('/main/hf369a_images/bg7mobile.webp')] md:bg-[url('/main/hf369a_images/bg6large.webp')] bg-no-repeat bg-cover grid grid-cols-12">

                <div className="col-span-12 md:col-span-8">
                    <h2 className="tri-gre text-3xl font-bold w-[70%] mx-auto text-center pt-5 pb-2">Horse Fire के बारे में ग्राहकों के अनुभव</h2>

                    <div className="w-full md:w-[75%] px-4 mx-auto">
                        <p className="first-g   my-[30px]  md:mb-[20px] ms-auto">15 दिनों के अंदर सेक्स अवधि में 10x वृद्धि</p>
                        <p className="last-g   my-[30px]  md:my-[20px] me-auto">लिंग के लम्बाई, मोटाई और कड़कपन में वृद्धि</p>
                        <p className="first-g   my-[30px]  md:my-[20px] ms-auto">जोश, शक्ति और स्टैमिना मे अद्भुत वृद्धि</p>
                        <p className="last-g   my-[30px]  md:my-[20px] me-auto">कामेच्छा में वृद्धि, अन्य गुप्त रोग जड़ से हल</p>
                    </div>
                </div>


                <div className="col-span-12 md:col-span-4 text-center">
                    <img src="/main/hf369a_images/bg6product.webp" alt="sdfsfd" className="w-[200px] mx-auto md:ml-[-20%]" />

                    <div className="relative md:left-[-30px] bottom-[15px]">
                        <Link href={"#form"} className="text-black bg-[#f6fe01] pt-3 pb-2 px-3 font-bold rounded-lg" style={{ fontFamily: "sans-serif" }}>CLAIM YOUR BOTTLE</Link>

                    </div>
                </div>

            </section>






        </section>
    )
}

export default Customer