import Image from 'next/image'
import { Carousel } from 'react-responsive-carousel'

function WhyChoose() {

    const revCus = [{
        image1: '/main/hf99_images/05.webp',
        image2: '/main/hf99_images/06.webp',
        comment: 'पहले मेरी पार्टनर को मेरे लिंग का असर ही नहीं होता था लेकिन Horse Fire Tablet खाने से अब मेरी लम्बाई और मोटाई में बृद्धि हो गयी है। अब आधा लिंग घुसाते ही वो सिसकारियां भरने लगती है। अब पूरा लेने से मना करती है और मुझे पीछे की तरफ धकेलती है। अब वो हर बार पानी-पानी हो जाती है, और संतुष्ट भी है।',
        name: 'दीपांकर',
        age: '26 साल'
    }, {
        image1: '/main/hf99_images/07.webp',
        image2: '/main/hf99_images/08.webp',
        comment: 'सचमुच, Horse Fire Tablet बेहतरीन यौन शक्तिवर्धक और लिंगवर्धक दवा है। यह सेक्स पावर को कई गुना बढ़ा देता है साथ ही लिंग साइज में भी सुधार करता है। इसके इस्तेमाल से मेरी शीघ्रपतन की कमजोरी जड़ से मिट गयी और लाइफ में सेक्स का मजा बढ़ गया है।',
        name: 'सम्राट',
        age: '29 साल'
    }]

    return (
        <div className='w-full relative'>
            <div className='relative z-10 max-w-6xl mx-auto py-5 sm:py-10 fontPoppins'>
                <div className='text-center font-bold'>
                    <h1 className="text-3xl lg:text-6xl leading-none text-white ">ग्राहक को मिले </h1>
                    <h2 className="text-2xl lg:text-5xl text-yellow-500 sm:mt-1">संतोषजनक परिमाण</h2>
                </div>

                <div className="mt-5 sm:mt-10 px-3 sm:px-0 font-semibold">

                    <div className="hidden gap-5 sm:grid grid-cols-2">
                        {revCus.map((e, key) => {
                            return <div className='rounded-xl p-2 sm:p-5 bg-white' key={key}>
                                <div className="grid grid-cols-2 gap-3">
                                    <img src={e.image1} alt="pic" width='100%' height='100%' className='rouded-xl' loading='lazy' />
                                    <img src={e.image2} alt="pic" width='100%' height='100%' className='rouded-xl' loading='lazy'/>
                                </div>
                                <p className="mt-3">{e.comment}</p>
                                <div className=" w-2/12 ml-auto mt-3">
                                    <h1 className="text-2xl font-extrabold">{e.name}</h1>
                                    <p className="">{e.age}</p>
                                </div>
                            </div>
                        })}
                    </div>
                    <div className="sm:hidden">
                        <Carousel autoPlay interval={4000} infiniteLoop showThumbs={false} showStatus={false} showArrows={false} useKeyboardArrows={true}>
                            {revCus.map((e, key) => {
                                return <div className='rounded-xl m-2 p-2 sm:p-5 bg-white' key={key}>
                                    <div className="grid grid-cols-2 gap-3">
                                        <img src={e.image1} alt="pic" width='100%' height='100%' className='rouded-xl' loading='lazy'/>
                                        <img src={e.image2} alt="pic" width='100%' height='100%' className='rouded-xl' loading='lazy' />
                                    </div>
                                    <p className="mt-3">{e.comment}</p>
                                    <div className=" w-4/12 ml-auto mt-3">
                                        <h1 className="text-2xl font-extrabold">{e.name}</h1>
                                        <p className="">{e.age}</p>
                                    </div>
                                </div>
                            })}
                        </Carousel>
                    </div>

                </div>

            </div>
            <Image src='/main/hf99_images/bg4.webp' fill loading='lazy'  alt='pic' />
        </div>

    )
}

export default WhyChoose