import dynamic from 'next/dynamic';
import Image from 'next/image'


const Flip = dynamic(() => import('./FlipAmazon'), {
    loading: () => <p>loader</p>
});

function WhyChoose() {

    const list6 = [
        {
            image: 'https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/de74095e-9543-4d37-47e8-61a97c952700/public',
            name: 'कम टेस्टोस्टेरोन हॉर्मोन स्तर',
        },
        {
            image: 'https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/c1175dad-76d4-4003-4cf4-b7fe4e64e300/public',
            name: 'टेस्टोस्टेरोन का उच्चतम स्तर',
        },
        {
            image: 'https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/b46f10b9-aa67-4c67-ba29-ef13f2a62d00/public',
            name: 'कमजोर नसें, छोटा और ढीला लिंग',
        },
        {
            image: 'https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/ab793ff0-f37a-49b5-bce6-86607f183d00/public',
            name: 'मजबूत नसों के साथ फौलादी लिंग',
        },
        {
            image: 'https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/b218170d-7ef2-482b-462e-28a76d093600/public',
            name: 'अधिकतम 2 मिनट सेक्स या कुछ झटको में स्खलन',
        },
        {
            image: 'https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/02d75a15-291c-4c06-8edd-fa23ae627600/public',
            name: 'कम से कम 30-45 मिनट लगातार सेक्स',
        },
        {
            image: 'https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/98f32846-968e-4aa2-1ce8-b2ba42628000/public',
            name: 'ऑर्गेज्म तक पहुंचने से पहले थकान लो स्टैमिना',
        },
        {
            image: 'https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/b1ca8c08-9904-427a-fa5e-dc75dfce0200/public',
            name: 'जबरदस्त स्टैमिना थकानमुक्त जोरदार सेक्स',
        },
        {
            image: 'https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/79277c8a-b756-4d8b-6636-67f07626e000/public',
            name: 'पतला वीर्य तथा धात संबधित यौन समस्याएं',
        },
        {
            image: 'https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/f8182217-5326-428a-7a58-3a81dd0c2e00/public',
            name: ' गाढा वीर्य, सभी यौन समस्याओं से राहत',
        },
        {
            image: 'https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/89b0c029-f969-48c4-1b45-5cdd3798e300/public',
            name: 'मानसिक तनाव और सेक्स का प्रेशर',
        },
        {
            image: 'https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/9bdce975-5f0e-408c-8b8e-2e49d5e4a200/public',
            name: 'स्ट्रेस-फ्री और कॉन्फिडेंस के साथ सेक्स  ',
        },
    ]

    return (
        <div className="bg-green-300">
            <div className='w-full relative'>
                <div className='relative z-10 px-3 text-center'>

                    <h1 className=" sm:w-11/12 mx-auto bg-yellow-400 pt-3 pb-1 rounded-b-2xl text-xl sm:text-2xl font-bold ">Horse Fire Tablet के अद्भुत लाभ जो ग्राहक अनुभव करते है !</h1>
                    <div className="py-5 ">
                        <div className="grid grid-cols-2 text-3xl mb-5 font-bold">
                            <div className="">

                                <div className="bg-white inline-block px-5 rounded-lg pt-3 ">पहले</div>
                            </div>
                            <div className="">

                                <div className="bg-white inline-block px-5 rounded-lg pt-3 ">बाद में</div>
                            </div>


                        </div>
                        <div className="text-white grid grid-cols-2 px-0 sm:px-5 text-[1.2rem] sm:text-2xl gap-2 sm:gap-5">
                            {list6.map((e, key) => {
                                return <div className="" key={key}>
                                    <img src={e.image} alt="pic" className="w-20 mx-auto" width='100%' height='100%' loading='lazy' />
                                    <p className="mt-3">{e.name}</p>
                                </div>
                            })}
                        </div>
                    </div>
                </div>
                <Image src='https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/a161f708-38ee-48c9-50bc-f1ec250d9c00/public' fill loading='lazy' alt='pic' />


            </div>
            <Flip />
        </div>

    )
}

export default WhyChoose