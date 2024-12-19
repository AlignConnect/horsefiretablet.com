import { Noto_Serif_Devanagari } from "next/font/google";



const noto = Noto_Serif_Devanagari({
    subsets: ['devanagari'],
    display: 'swap',
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});


const Mahilaye = () => {
    return (
        <section className={noto.className}>
            <section className='secondback border px-3'>
                <div className='grid grid-cols-12 items-center'>

                    <div className='md:col-span-6 col-span-12'>
                        <div className="relative" >
                            <img src="/main/hfp_images/secondim.png" alt="no" width={"100%"} />
                        </div>
                    </div>

                    <div className='md:col-span-4 col-span-12'>

                        <h1 className='bharat-x'>महिलाएं क्यों चाहती है दमदार पुरुष?</h1>

                        <ul className='firstul'>
                            <li>उन्हें <span className="text-yellow-400">बड़े लिंग</span> से <span className="text-yellow-400" > लम्बे समय</span> तक सेक्स चाहिए </li>
                            <li>ताकि उन्हें सेक्स में <span className="text-yellow-400" >संतुष्टि मिल सके</span> </li>
                            <li>वे भी स्खलन तक पहुंचे और जिस्म की <span className="text-yellow-400" > आग बुझे </span></li>
                            <li>महिलाये  <span className="text-yellow-400"> लम्बा लिंग</span> देख बेकाबू हो जाती है</li>
                        </ul>

                        <p className='text-blue-700 text-xl font-bold my-2 md:my-5'>
                            यदि आपका सेक्स कम चलता है और लिंग में दम नहीं है तो आप उसकी नजर में जोकर है। वह आप पर हसेगी और दूसरे मर्द की तलाश करेगी जो उसे अच्छे से संतुष्ट कर सके। जैसे पोर्न फिल्मो में होता है।
                        </p>

                        <div className='fkbtn'>
                            <button onClick={() => window.location.href = "#form"}>Order Now</button>
                        </div>
                    </div>
                </div>
            </section>
        </section>

    )
}

export default Mahilaye