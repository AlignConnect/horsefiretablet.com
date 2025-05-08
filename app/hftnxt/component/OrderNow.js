import { Noto_Serif_Devanagari, Poppins } from "next/font/google";

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


function OrderNow() {
    return (
        <div className="bg-white">
            <div className="w-full max-w-2xl mx-auto">
                <div className="py-5 text-center">
                    <div className={`${noto.className} font-extrabold text-xl text-red-500`}>
                        50% से भी ज्यादा डिस्काउंट पायें
                    </div>
                    <div className={`${poppin.className} py-2 inline-block text-left pop_imagehfv`}>
                        <a className="bg-[#213361] text-xl  font-bold  py-3 px-11 w-full rounded-full hover:bg-[#1e2f5a] shadow-lg shadow-[#213361]/50 transition-colors text-white" href='#form'>
                            ORDER NOW
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OrderNow