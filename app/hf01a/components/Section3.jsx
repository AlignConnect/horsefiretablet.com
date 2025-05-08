import dynamic from 'next/dynamic';

const FormRedirect = dynamic(() => import('./FormRedirect'), {
    loading: () => <p>load</p>
});

const Section3 = () => {

    const listproductBene = [
        { title: 'शुद्ध आयुर्वेदिक और दुष्प्रभाव मुक्त', image: 'https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/08fa437a-cc35-4b17-7eb3-8fa3d81b8100/public' },
        { title: 'COD पेमेंट सुविधा उपलब्ध', image: 'https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/64128c73-bbe5-4533-23ce-eda9849a0200/public' },
        { title: '10 दिनों की मनी बैक गारंटी सुविधा', image: 'https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/c5f8dbcc-3e98-4750-5403-49399a76bb00/public' },
        { title: 'ट्रस्टेड और प्रमाणित ब्रांड', image: 'https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/82d10049-44db-4f79-f00a-91257d08e500/public' },
        { title: 'Amazon और Flipkart पर उपलब्ध', image: 'https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/d96acd32-1eef-428c-be71-41b8b3548600/public' },
    ]

    return (
        <div className='w-full bg-[#daecec] py-5 sm:py-10'>
            <div className="max-w-7xl mx-auto px-1">
                <div className="grid grid-cols-12 items-center">
                    <div className="col-span-1 sm:col-span-2 space-y-1 sm:space-y-2">
                        <hr className="bg-gray-600 h-1" />
                        <hr className="bg-gray-600 h-1" />
                        <hr className="bg-gray-600 h-1" />
                    </div>
                    <p className="fontPoppins col-span-10 sm:col-span-8 font-bold text-center text-[6vw] sm:text-[3vw]"> Why Trust On <span className="text-red-700">Horse Fire</span></p>
                    <div className="col-span-1 sm:col-span-2 space-y-1 sm:space-y-2">
                        <hr className="bg-gray-600 h-1" />
                        <hr className="bg-gray-600 h-1" />
                        <hr className="bg-gray-600 h-1" />
                    </div>
                </div>

                <div className="flex flex-wrap gap-2 md:gap-5 text-white font-bold justify-center text-center mt-[5%] md:mt-[3%]">
                    {listproductBene.map((e, key) => {
                        return <div className={`bg-white w-[48%] md:w-3/12 rounded-2xl ${key === 3 ? 'hidden md:block' : ''}`} key={key}>
                            <div className="w-[23vw] md:w-[7.3vw] h-[26vw] md:h-[8vw] mx-auto py-2">

                                <img src={e.image} alt="pic" width='100%' height='100%' loading='lazy' />
                            </div>
                            <p className="bg-black rounded-b-2xl md:px-2 py-4 text-[3.2vw] md:text-[1vw]">{e.title}</p>
                        </div>
                    })}
                </div>
            </div>
            <FormRedirect />


        </div>
    )
}
export default Section3;