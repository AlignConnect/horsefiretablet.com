import React from 'react'
import { Noto_Serif_Devanagari } from "next/font/google";

const noto = Noto_Serif_Devanagari({
    subsets: ['devanagari'],
    display: 'swap',
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});

const Sec1 = () => {
    return (
        <section className={noto.className}>

            <div className="bg-[url('https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/cf92813e-b1bd-4165-dd07-76b955c49a00/public')] bg-cover bg-no-repeat py-2">

                <p className='text-[#643301] p-2 text-lg font-semibold'>
                    दोस्तों, दशकों से आज तक कई सर्वे होते आ रहे है जिसमे पुरुष भाग लेते है। इस सर्वे में ये पता चला है की पुरुषों में शीघ्रपतन, पार्ट में ढीलापन, स्टैमिना और एनर्जी की कमी जैसी यौन समस्या तेजी से बढ़ रही है। ऐसे में पुरुषों की को चाहिये Horse Fire Tablet जैसी असरदार औषधि जो समस्या पर तेजी से असर करें और इसे जड़ से उखाड़ फेके।
                </p>

            </div>

            <div>



                <div className='w-[95%] sm:w-[80%] mx-auto'>

                    <div>

                        <div className='text-center'>
                            <h2 className='text-white font-bold text-2xl text-center my-4 inline-block border border-dashed pt-2 px-3 rounded-md'>लिंग की लम्बाई-मोटाई में वृद्धि</h2>
                        </div>

                        <div className='w-full'>
                            <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/e8ddc1ec-a116-43ec-6800-7f1af24b8f00/public" alt="asd" loading='lazy' className='w-full rounded-xl border-4 border-[#33a1ff]' />
                        </div>

                    </div>


                    <div className='text-center'>
                        <h2 className='text-white font-bold text-2xl text-center my-4 inline-block border border-dashed pt-2 px-3 rounded-md'>सेक्स समय अवधि में वृद्धि </h2>
                    </div>

                    <div className='w-full'>
                        <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/2250452d-938f-49c5-759d-8d584d0ff900/public" alt="asd" loading='lazy' className='w-full rounded-xl border-4 border-[#33a1ff]' />
                    </div>

                    <div>

                        <div className='text-center'>
                            <h2 className='text-white font-bold text-2xl text-center my-4 inline-block border border-dashed pt-2 px-3 rounded-md'>स्टैमिना में वृद्धि थकान से राहत</h2>
                        </div>

                        <div className='w-full'>
                            <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/a16ba766-e86c-4adb-f259-0257857f5b00/public" alt="asd" loading='lazy' className='w-full rounded-xl border-4 border-[#33a1ff]' />
                        </div>


                    </div>


                    <div>

                        <div className='text-center'>
                            <h2 className='text-white font-bold text-2xl text-center my-4 inline-block border border-dashed pt-2 px-3 rounded-md'>जोश और आत्मविश्वास में वृद्धि </h2>
                        </div>

                        <div className='w-full '>
                            <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/d4f159a6-fcef-4ca9-9d2f-4d1bbe5b0700/public" alt="asd" loading='lazy' className='w-full rounded-xl border-4 border-[#33a1ff]' />
                        </div>


                    </div>
                </div>




            </div>



        </section>
    )
}

export default Sec1