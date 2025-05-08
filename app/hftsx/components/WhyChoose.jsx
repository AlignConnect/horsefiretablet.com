
function WhyChoose() {

    const list6 = [
        {
            image: 'https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/b6a31ad5-90f3-456c-82c3-f9cd2cb37600/public',
            name: 'कम टेस्टोस्टेरोन हॉर्मोन स्तर',
        },
        {
            image: 'https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/ff70d6bb-729a-44a3-b640-1294ab9cda00/public',
            name: 'टेस्टोस्टेरोन का उच्चतम स्तर',
        },
        {
            image: 'https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/23209956-009d-4c51-3d96-f840adf2fe00/public',
            name: 'कमजोर नसें, छोटा और ढीला लिंग',
        },
        {
            image: 'https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/7fc51a99-0e46-48e9-55b3-ba502412c700/public',
            name: 'मजबूत नसों के साथ फौलादी लिंग',
        },
        {
            image: 'https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/6b4e194d-905c-4c32-bc0b-f42819e75100/public',
            name: 'अधिकतम 2 मिनट सेक्स या कुछ झटको में स्खलन',
        },
        {
            image: 'https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/7ef9fda7-2496-4b84-bbec-6c0f656e4500/public',
            name: 'कम से कम 30-45 मिनट लगातार सेक्स',
        },


    ]

    return (
        <div className='bg-black px-3 text-center py-5 sm:pt-10 sm:pb-5'>

            <h1 className=" sm:w-11/12 mx-auto text-white  text-2xl sm:text-5xl font-bold !leading-tight">Horse Fire Tablet के अद्भुत लाभ जो ग्राहक अनुभव करते है !</h1>
            <div className=" ">

                <div className=" grid grid-cols-2 px-0 sm:px-5 text-[1.2rem] sm:text-3xl gap-y-4 sm:gap-y-5 font-bold mt-3 sm:mt-5">
                    {list6.map((e, key) => {
                        return <div className={`bg-[#d8d8d8] ${key % 2 == 0 ? 'rounded-l-xl' : 'rounded-r-xl'} px-3 py-4 sm:p-5`} key={key}>
                            <img src={e.image} alt="pic" className="" width='100%' height='100%' loading='lazy' />
                            <p className="mt-3 px-2 sm:px-0">{e.name}</p>
                        </div>
                    })}
                </div>
            </div>

            <div className="text-center text-white font-bold mt-3 sm:mt-5 fontPoppins">
                    <a href="#form" className="inline-block text-xl bg-gradient-to-t from-red-500 to-red-700 px-1 rounded-full py-3 pop_imagehfv">
                        <span className=" bg-gradient-to-b from-red-500 to-red-700 px-5 rounded-full py-2">ORDER NOW</span>
                    </a>
                </div>
        </div>

    )
}

export default WhyChoose