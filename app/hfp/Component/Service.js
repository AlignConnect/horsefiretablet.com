import { Noto_Serif_Devanagari } from 'next/font/google';


const noto = Noto_Serif_Devanagari({
    subsets: ['devanagari'],
    display: 'swap',
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});



const Service = () => {
    return (
        <section className={noto.className}>


            <div className='h-dash text-center'>
                <h1 className='dash'>Horse Fire के अद्भुत आंकड़े</h1>
                <div className='w-[75%] text-center m-auto block md:inline-flex text-white font-bold s-sans'>

                    <div className='w--25'>
                        <h1 className='text-2xl c-dash'>99.9%</h1>
                        <h3 className='text-xl'>SATISFACTION</h3>
                    </div>

                    <div className='w--25'>
                        <h1 className='c-dash text-2xl'>0%</h1>
                        <h3 className='text-xl'>RISK</h3>
                    </div>

                    <div className='w--25'>
                        <h1 className='text-2xl c-dash'>4 ROUND</h1>
                        <h3 className='text-xl'>STRONG ERECTION</h3>
                    </div>

                    <div className='w--25'>
                        <h1 className='text-2xl c-dash'>RESULT</h1>
                        <h3 className='text-xl'>WITHIN A WEEK</h3>
                    </div>
                </div>
            </div>


            <div className='nine-back'>




                <div className='spec'>
                    <div>
                        <div className='text-center'>
                            <h1 className='special'>SPECIAL SERVICE !!</h1>
                        </div>

                        <h3 className='text-xl'>
                            उन पुरुषों की लिए जिनकी समस्या गंभीर है और सामान्य गोली असर नहीं कर रही उनके लम्बाई, वजन और उम्र का आंकलन कर हमारे एक्सपर्ट्स द्वारा कस्टमाइज्ड दवा तैयार की जाती है जो समस्या को गारंटी के साथ हल करती है।
                        </h3>
                        <h1 className='text-center py-4 der-n-kare'>"देर न करें आजमा कर असली परिणाम देखें"</h1>
                    </div>

                    <div>
                        <img src="/main/hfp_images/product4.png" alt="no" width={"300px"} />
                    </div>

                </div>

            </div>

            <div className='bg-white'>
                <div className="w-[75%] mx-auto py-4 px-2 text-center">
                    <img src="/main/hfp_images/mar.png" alt="no" className='w-[100%] md:-w-[75%]' />
                </div>
            </div>


        </section>
    )
}

export default Service;