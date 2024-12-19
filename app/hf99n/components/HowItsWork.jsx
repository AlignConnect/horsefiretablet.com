import dynamic from 'next/dynamic';

const Flip = dynamic(() => import('./FlipAmazon'), {
    loading: () => <p>loader</p>
});


function HowItsWork() {

    const kamalList = [
        {
            image: '/main/hf99_images/01.webp',
            title: 'उठायें सेक्स का असली मजा'
        },
        {
            image: '/main/hf99_images/03.webp',
            title: 'बार-बार सेक्स की चाहत'
        },
        {
            image: '/main/hf99_images/02.webp',
            title: 'लम्बा और फौलादी लिंग '
        },
        {
            image: '/main/hf99_images/04.webp',
            title: 'लॉन्ग लास्टिंग सेक्स टाइमिंग'
        },
    ]

    return (
        <div className='w-full'>
            <div className='max-w-5xl py-5 sm:py-10 mx-auto '>

                <div className="text-center fontPoppins font-bold">
                    <h1 className="inline-block  text-3xl  lg:text-6xl  leading-none bg-red-600 text-white px-5 py-2 ">HORSE FIRE TABLET</h1>
                    <h2 className="  text-3xl lg:text-5xl mt-2 lg:mt-4">का कमाल</h2>
                </div>
                <div className="grid grid-cols-2 fontNoto gap-x-2 sm:gap-5 text-xl sm:text-4xl lg:text-5xl font-bold text-center mt-5 sm:mt-10 px-3">
                    {kamalList.map((e, key) => {
                        return <div className="" key={key}>
                            <img src={e.image} alt="pic" width='100%' height='100%' loading="lazy" className="rounded-xl"/>
                            <h1 className="mt-2 sm:mt-5">{e.title}</h1>
                        </div>
                    })}
                </div>

                <Flip/>
            </div>
        </div>

    )
}

export default HowItsWork