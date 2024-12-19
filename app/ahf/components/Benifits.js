import { Noto_Serif_Devanagari } from "next/font/google";

const noto = Noto_Serif_Devanagari({
    subsets: ['devanagari'],
    display: 'swap',
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});

function Benifits() {

    const Benefits = (arr) => {
        return arr?.map((e, key) => {
            return <div className='mih-h-[80px]' key={key}>
                <div className="min-h-[50px]">
                    <img src={e.benefit_icon} className='mx-auto md:w-36 w-20 min-h-[50px]' alt='Benifits_images' loading="eager" fetchPriority="high" />
                </div>
                <div className=' pt-2 md:text-2xl text-md font-semibold text-center text-white'>{e.benefit_title}</div>
            </div>
        })
    }

    return (
        <div className={`${noto.className} bg-black py-4 `}>
            <div className="w-full max-w-7xl text-center mx-auto mih-h-[400px]">
                <div className=''>
                    <div className=" text-center text-[1.1rem] md:text-3xl px-2 py-1 text-white font-semibold italic">इसे आजमाएं, फौलादी लिंग और लम्बी सेक्स अवधि पाएं</div>
                    <div className='grid grid-cols-3 gap-2 '>
                        {
                            Benefits([
                                {
                                    benefit_icon: "https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/64bfe904-8314-4976-d3ac-e8def6c00800/public",
                                    benefit_title: "बड़ा फौलादी लिंग"
                                },
                                {
                                    benefit_icon: "https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/d4a87eb8-5c4e-4613-6d0c-3fbb62eff100/public",
                                    benefit_title: "लम्बी सेक्स अवधि"
                                },
                                {
                                    benefit_icon: "https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/d24d8cae-d3b5-4c7f-722a-a3229881c800/public",
                                    benefit_title: "ज्यादा यौन आनंद "
                                }
                            ])
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Benifits