import { Noto_Serif_Devanagari } from 'next/font/google';


const noto = Noto_Serif_Devanagari({
    subsets: ['devanagari'],
    display: 'swap',
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});



const Hurbs = () => {

    const hurbs = (arr) => {

        return arr.map((e, key) => {

            return <div className='md:col-span-2 col-span-6 text-center py-md-4 py-2' key={key}>

                <div className='hr-a p-3'>
                    <div className='text-center bg-black d-inline-flex mx-auto py-4 my-3 rounded-[100px] h-[100px] md:h-[200px] w-[100px] md:w-[200px]'>
                        <img src={e.img} alt="no" className='w-[100px] md:w-[300px]' />
                    </div>

                    <h2 className='text-xl text-red-600 font-bold py-sm-1 py-md-3 mb-0'>{e.title}</h2>

                    <p className='hu-con'>{e.content}</p>

                </div>
            </div>
        })


    }

    return (

        <section className={noto.className}>
            <div className='six-x'>

                <h1 className='font-bold text-center text-yellow-500 md:py-5 pt-4 mb-3 h-fire'>Horse Fire</h1>

                <h4 className='text-center text-white text-xl'>को इतना प्रभावी क्या बनाता है?</h4>

                <h5 className='text-white text-center text-xl'>
                    इसको प्रभावी बनाते है अश्वगंधा, शिलाजीत और गोखरू जैसे 17 हर्ब्स और भस्म !
                </h5>

                <h4 className='font-bold text-center text-yellow-500 md:py-4 py-2 text-[30px]' >मुख्य विश्व प्रसिद्ध हर्ब्स-</h4>


                <div className='grid grid-cols-12 w-[90%] my-[10px] mx-auto gap-4' >

                    {
                        hurbs([
                            {
                                img: "/main/hfp_images/a.png",
                                title: "अश्वगंधा",
                                content: "महानतम टेस्टोस्टेरोन और नाइट्रिक ऑक्साइड वर्धक"
                            },
                            {
                                img: "/main/hfp_images/b.png",
                                title: "शिलाजीत",
                                content: "नेचुरल वियाग्रा जो लिंग को कड़क और जोश बढ़ाए "
                            },
                            {
                                img: "/main/hfp_images/c.png",
                                title: "केसर",
                                content: "श्रेष्ठ शक्ति एवं ऊर्जा वर्धक जो बेड पर लम्बा टिकाये "
                            },
                            {
                                img: "/main/hfp_images/d.png",
                                title: "सफ़ेद मूसली",
                                content: "शीघ्रपतन एंव ढीले लिंग की समस्या में कारगर"
                            },
                            {
                                img: "/main/hfp_images/e.png",
                                title: "गोखरू",
                                content: "लिंग मजबूती, व कामोत्तेजना बढ़ाने में अत्यंत असरदार "
                            },
                            {
                                img: "/main/hfp_images/f.png",
                                title: "अभ्रक भस्म",
                                content: "सर्वोत्तम उत्तेजक एवं शक्तिवर्धक, लिंग की सख्ती बढाए "
                            }
                        ])
                    }
                </div>



                <div className='w-full text-center py-2 bg-[#414141]' >
                    <img src="/main/hfp_images/plus.jpg" alt="no" className='px-2 w-[140%] md:w-[50%]  md:mx-auto' />
                </div>



            </div>
        </section>

    )
}

export default Hurbs