import { Noto_Serif_Devanagari } from "next/font/google";

const noto = Noto_Serif_Devanagari({
    subsets: ['devanagari'],
    display: 'swap',
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});

function Vishesh_suvidha() {
    return (
        <div className={`${noto.className} bg-[#0075a1] md:bg-[#ffa901]`}>
            <div className='w-full max-w-4xl mx-auto px-1 md:px-0 py-5'>
                <div className='text-3xl md:text-5xl font-extrabold text-white md:text-[black] py-1'>
                    विशेष सुविधा है उपलब्ध
                </div>
                <p className='text-md md:text-xl text-justify text-white md:text-[black] font-semibold'>
                    निक्स ने आगे कहा उन पुरुषों की लिए जिनकी समस्या गंभीर है और सामान्य गोली असर नहीं कर रही उनके लम्बाई, वजन और उम्र का आंकलन कर एक्सपर्ट्स द्वारा कस्टमाइज्ड दवा तैयार की जाती है जिससे गारंटीड लाभ मिलता है।
                </p>
            </div>
        </div>
    )
}

export default Vishesh_suvidha;