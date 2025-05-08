const Section3 = () => {

    const yourBene = [{
        title: 'आपकी सेक्सुअल टाइमिंग को परफेक्ट बनाएं',
        image: '/main/hfe_images/1.webp'
    },
    {
        title: 'जोश और उत्तेजना का संचार करें',
        image: '/main/hfe_images/2.webp'
    },
    {
        title: 'लिंग को मोटा और सख्त बनाएं',
        image: '/main/hfe_images/3.webp'
    },
    {
        title: 'बिस्तर पर देर तक टिकाएं ',
        image: '/main/hfe_images/4.webp'
    }]

    return (
        <div className="w-full mb-8 text-yellow-400">
            <div className="mt-5 w-1/2 mx-auto">
                <a href="#form" className=""><img src="/main/hfe_images/ordernow.gif" alt="pic" width='100%' height='100%' /></a>
            </div>

            <h1 className="text-3xl sm:text-[2.7rem] font-extrabold mt-8 text-center px-5 leading-tight">आपको चाहिए कुछ ऐसी प्राकृतिक जड़ी बूटियां जो</h1>

            <div className='w-full px-3 text-center text-[1.75rem] sm:text-[2.3rem] font-extrabold sm:px-8 !leading-none'>
                {yourBene.map((e, key) => {
                    return <div className="my-8" key={key}>
                        <h1 className="">{e.title}</h1>
                        <div className="w-10/12 mx-auto">
                            <img src={e.image} alt="pic" className="rounded-2xl" width='100%' height='100%' loading="lazy" />
                        </div>


                        {key == 1 && <div className="mt-7 w-1/2 mx-auto">
                            <a href="#form" className=""><img src="/main/hfe_images/ordernow.gif" alt="pic" width='100%' height='100%' loading="lazy" /></a>
                        </div>}


                    </div>
                })}

            </div>


            <div className="mt-5 w-1/2 mx-auto">
                <a href="#form" className=""><img src="/main/hfe_images/ordernow.gif" alt="pic" width='100%' height='100%' loading="lazy" /></a>
            </div>
        </div>
    )
}
export default Section3;