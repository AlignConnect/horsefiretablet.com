import dynamic from 'next/dynamic';

const Ordernow = dynamic(() => import('./Ordernow'), {
    loading: () => <p>load</p>
});

const Section4 = () => {

    const yourBene11 = [{
        title: 'लम्बाई 10 Cm मोटाई 5 Cm',
        image: '/main/hfk_images/1abefore.webp'
    },
    {
        title: 'लम्बाई 17 Cm मोटाई 8 Cm',
        image: '/main/hfk_images/1after.webp'
    },
    {
        title: '2 मिनट से कम व 30 सेकंड तक',
        image: '/main/hfk_images/2abefore.webp'
    },
    {
        title: 'लगातार 22 मिनट से ज्यादा प्रमाणित',
        image: '/main/hfk_images/2after.webp'
    },
    {
        title: 'जल्दी थकान स्टैमिना की कमी',
        image: '/main/hfk_images/3abefore.webp'
    },
    {
        title: 'बिना थके लम्बा सेक्स',
        image: '/main/hfk_images/3after.webp'
    }]


    return (
        <div className="w-full bg-zinc-200 py-5 sm:py-10">
            <div className="max-w-3xl mx-auto mb-5 px-3 text-2xl sm:text-4xl text-center  ">
                <h1 className="fontPoppins   mb-5 sm:mb-10 font-bold">ऐसे दिखते है नतीजे</h1>
                <div className="grid grid-cols-2  font-bold gap-4">
                    <h1>पहले</h1>
                    <h1>बाद में</h1>
                </div>

                <div className="text-[1rem] sm:text-xl grid grid-cols-2  font-bold gap-4">
                    {yourBene11.map((e, key) => {
                        return <div className="p-2 pt-3 pb-1 bg-white rounded-lg" key={key}>
                            <img src={e.image} alt="pic" className="rounded-lg sm:w-10/12 mx-auto" width='100%' height='100%' loading="lazy" />
                            <h1 className="mt-3 leading-tight">{e.title}</h1>
                        </div>
                    })}
                </div>
            </div>

            <Ordernow />
        </div>
    )
}
export default Section4;