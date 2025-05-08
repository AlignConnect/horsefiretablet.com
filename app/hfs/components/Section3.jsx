const Section3 = () => {

    const yourBene = [{
        title: 'उनके अंग अंग में तरंग जगाएं',
        image: '/main/hfs_images/1gif.mp4'
    },
    {
        title: 'बिस्तर पर उनकी चीख निकाल दें ',
        image: '/main/hfs_images/2gif.mp4'
    },
    {
        title: 'जिसका लिंग रॉड की भांति लम्बा, मोटा और कड़कदार हो',
        image: '/main/hfs_images/3gif.mp4'
    },
    {
        title: 'अधिक देर तक सेक्स कर सकें',
        image: '/main/hfs_images/4gif.mp4'
    },
    {
        title: 'उन्हें चरम सुख की अनुभूति कराएं ',
        image: '/main/hfs_images/5gif.mp4'
    }]

    return (
        <div className="w-full mb-5 sm:mb-8">
            <div className="mt-5 w-1/2 mx-auto">
                <a href="#form" ><img src="/main/hfs_images/ordernow.gif" alt="pic" width='100%' height='100%' loading="lazy" decoding="async" /></a>
            </div>

            <div className='w-full px-3 text-center text-[1.75rem] sm:text-[2.5rem] font-extrabold sm:px-10 !leading-none'>
                {yourBene.map((e, key) => {
                    return <div className="my-8" key={key}>
                        <h1>{e.title}</h1>
                        {/* <div className="w-10/12 mx-auto">
                            <img src={e.image} alt="pic" className="rounded-2xl" width='100%' height='100%' loading="lazy" />
                        </div> */}


                        <video className='w-10/12 mx-auto rounded-2xl' autoPlay muted loop>
                            <source src={e.image} type="video/mp4" className='h-full ' />
                        </video>

                        {key == 2 && <div className="mt-7 w-1/2 mx-auto">
                            <a href="#form"><img src="/main/hfs_images/ordernow.gif" alt="pic" width='100%' height='100%' /></a>
                        </div>}


                    </div>
                })}

            </div>
            <div className="px-5 sm:px-8">
                <p className="text-xl sm:text-2xl font-semibold text-center mb-1">अपनी सेक्स परेशानियों को ठीक करने के लिए पुरुषों को आयुर्वेदिक औषधि <span className="text-red-500">'Horse Fire Tablet'</span> का इस्तेमाल करने की जरूरत हैं.</p>

                <img src='/main/hfs_images/image3.png' alt="pic" width='100%' height='100%' loading="lazy" />

            </div>

            <div className="mt-5 w-1/2 mx-auto">
                <a href="#form" className=""><img src="/main/hfs_images/ordernow.gif" alt="pic" width='100%' height='100%' /></a>
            </div>
        </div>
    )
}
export default Section3;