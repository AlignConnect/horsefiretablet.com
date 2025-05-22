import React from 'react'
import { Noto_Serif_Devanagari } from "next/font/google";
import Order from './Order';
import dynamic from 'next/dynamic';

const noto = Noto_Serif_Devanagari({
    subsets: ['devanagari'],
    display: 'swap',
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});


const MostSelling = dynamic(() => import('@/app/commonUse/mostSelling/most_selling_1'), {
    loading: () => <p>loader</p>
  });


const Sec2 = () => {
    return (
        <div className={noto.className}>

            <h3 className='text-[#fede00]  border-t-2 border-b-2 border-[#fede00] pt-4 text-center text-2xl sm:text-3xl font-semibold'>Proven Sexual Booster Herbs</h3>


            <div className='grid grid-cols-2 text-center my-5 gap-3 px-3'>


                <div className='mx-auto text-white text-xl'>
                    <div>
                        <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/6030dc2e-b710-4e30-d9d3-aa32ff1fb400/public" alt="sdf" loading='lazy' />
                    </div>

                    <p className='py-3'>
                        टेस्टोस्टेरोन व लिंग की सख्ती बढ़ाए
                    </p>
                </div>


                <div className='mx-auto text-white text-xl'>
                    <div>
                        <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/458c72e4-2e47-43db-6ebb-eb1758d07900/public" alt="sdf" loading='lazy' />
                    </div>

                    <p className='py-3'>
                        स्ट्रेस कम करे और स्टैमिना बढाए
                    </p>
                </div>

                <div className='mx-auto text-white text-xl'>
                    <div>
                        <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/19a5bce5-70c9-4b7b-b85d-285c14984500/public" alt="sdf" loading='lazy' />
                    </div>

                    <p className='py-3'>
                        एनर्जी और सेक्स टाइमिंग बढ़ाए
                    </p>
                </div>


                <div className='mx-auto text-white text-xl'>
                    <div>
                        <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/8b30f570-0493-4cec-3b5c-c24b5ddb9100/public" alt="sdf" loading='lazy' />
                    </div>

                    <p className='py-3'>
                        लिंग की नसों और मसल्स को रिलैक्स करे
                    </p>
                </div>

            </div>


            <p className='text-[#ffde00] px-3 text-xl'>
                अन्य +13 जड़ी-बूटियाँ भी जोशवर्धक है जो सेक्सुअल हेल्थ को बेहतर बनाने में मदद करती है!
            </p>


            <div>

                <div>
                    <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/a6a74ee7-ebbc-4c79-b732-9d02a1726b00/public" alt="asd" loading='lazy' className='sm:w-[60%] mx-auto my-5 rounded-xl overflow-hidden' />
                </div>


                <p className='text-white px-3 text-lg'>
                    ज्यादातर पुरुष अपनी बीवी/महिला साथी को सेक्स में अधूरा छोड़ देते है क्यूंकि या तो वे शीघ्रपतन से परेशान है या फिर कमजोर लिंग से। आज के समय में पुरुषों में लो इरेक्शन की समस्या बहुत तेजी से बढ़ रही है जिसकी वजह से जवान पुरुषों को भी इरेक्शन (लिंग की सख्ती) बमुश्किल ही मिलती है। वही परफॉरमेंस प्रेशर की वजह से लिंग में सख्ती मिलना और भी मुश्किल हो जाता है।
                </p>


                <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/de8d8b69-318e-4abb-af97-9c3b6e8dc800/public" alt="sdsd" loading='lazy' className='w-full sm:w-[100%] mx-auto' />

                <div className=' relative -top-8'>
                    <Order />
                </div>


                <p className='bg-[#ffde00] -mt-5 p-2 text-lg font-semibold'>
                    Horse Fire Tablet के प्रत्येक हर्ब्स लिंग की नसों की रिलैक्स करती है। प्रत्येक टेबलेट टेस्टोस्टेरोन और नाइट्रिक ऑक्साइड रिलीज करता है जो लिंग में ब्लड फ्लो को इम्प्रूव करता है। जिससे लिंग की नसें ज्यादा फूलती है और मिलता है हमेशा से ज्यादा लम्बा, मोटा और सख्त लिंग ! फिर ज्यादा कॉन्फिडेंस के साथ पुरुष ज्यादा सेक्स करते है और पार्टनर को चरमानंद देने के काबिल बन पाते है।
                </p>


            </div>


            <div className='text-white bg-[url("https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/491aa912-9b65-4694-3536-11ae55337f00/public")] py-4'>

                <div className='flex gap-5 items-center m-3 text-lg'>

                    <div>
                        <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/37540407-db41-4792-7584-e86e53ee0b00/public" alt="asd" loading='lazy' />
                    </div>

                    <p>
                        COD Payment Available
                    </p>

                </div>


                <div className='flex gap-5 items-center m-3 text-lg'>

                    <div>
                        <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/f1f80f23-b59a-485c-108d-afbe557e7f00/public" alt="asd" loading='lazy' />
                    </div>

                    <p>
                        Big Discount in Festival Season
                    </p>

                </div>


                <div className='flex gap-5 items-center m-3 text-lg'>

                    <div>
                        <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/d865c07e-2784-4b1d-b16c-ad0c11464d00/public" alt="asd" loading='lazy' />
                    </div>

                    <p>
                        Save 10% Extra on Prepaid
                    </p>

                </div>


                <div className='flex gap-5 items-center m-3 text-lg'>

                    <div>
                        <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/14fc20d2-7eee-4d3c-5b5b-96bef54a6e00/public" alt="asd" loading='lazy' />
                    </div>

                    <p>
                        First Choice of men in India
                    </p>

                </div>


                <MostSelling />


            </div>


        </div>
    )
}

export default Sec2
