import dynamic from 'next/dynamic';
import React from 'react'
const OrderNow = dynamic(() => import('./OrderNow'));


const MostSelling = dynamic(() => import('@/app/commonUse/mostSelling/most_selling_2'), {
    loading: () => <p>loader</p>
});

const Herbs = () => {

    function HerbItem({ img, title, description }) {
        return (
            <div className="fontNoto flex items-center  gap-3 sm:py-3 sm:mx-0 mx-2 my-5 ">
                <img src={img} alt="" className='sm:w-52 w-28 rounded-lg' />
                <div className="">
                    <div className=" sm:text-[1.6vw] text-2xl  font-extrabold ">{title}</div>
                    <div className="sm:text-md text-md pt-1 text-justify">{description}</div>
                </div>
            </div>
        );
    }

    const performance = (arr) => {
        return arr?.map((e, key) => {
            return <div className='sm:py-10 py-4' key={key}>
                <div className="sm:w-44 sm:h-44 h-32 w-32 overflow-hidden rounded-full mx-auto">
                    <img src={e.gif} className="w-[100%] h-[100%] bg-cover" alt="" />
                </div>
                <div className='fontNoto pt-3  text-xl font-bold text-center text-white'>
                    <div
                        dangerouslySetInnerHTML={{ __html: e.title }}
                    />
                </div>
            </div >
        })
    }

    const reasons = (arr) => {
        return arr?.map((e, key) => {
            return <div className='sm:py-10 py-4' key={key}>
                <div className="">
                    <img src={e.icons} className="w-2/5 mx-auto py-2" alt="" />
                </div>
                <div className='fontAnek uppercase pt-3  sm:text-2xl text-xl font-bold text-center text-black '>
                    <div
                        dangerouslySetInnerHTML={{ __html: e.title }}
                    />
                </div>
            </div >
        })
    }

    return (


        <section>
            <div className="bg_herb">
                <div className="w-full sm:max-w-7xl  mx-auto">

                    <div className="py-5">
                        <div className="text-center sm:text-[2.2vw] text-3xl font-extrabold uppercase sm:py-5 py-2">
                            Proven Sexual Booster Herbs
                        </div>
                        <p className="my-2 sm:text-center sm:text-2xl ">
                            <strong>17 </strong>शक्तिशाली जड़ीबूटियों और भस्मों से बना{" "}
                            <strong>HORSE FIRE TABLET</strong> भारत का सबसे ज्यादा बिकने वाला
                            सेक्सवर्धक है। यह नेचुरल तरीके से खोई हुई मर्दाना शक्ति को रिस्टोर
                            करने का काम करता है।
                        </p>
                    </div>


                    <div className=" grid md:grid-cols-3 sm:grid-cols-2 gap-5 ">

                        <div className="">
                            <HerbItem
                                img="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/1b5e1d62-503b-4fa1-f105-c8a72534a400/public"
                                title="अश्वगंधा"
                                description="कई शोधों से प्रमाणित हुआ है कि अश्वगंधा के इस्तेमाल से टेस्टोस्टेरोन और सेक्स स्टेमिना में जोरदार वृद्धि होती है।"
                            />
                            <HerbItem
                                img="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/156d672d-074c-4ff6-4d39-7a46a3545d00/public"
                                title="सफेद मूसली"
                                description="सफेद मूसली बेहतरीन टेस्टोस्टेरोन बूस्टर है। इसके इस्तेमाल से टेस्टोस्टेरोन और स्टेमिना में आसानी से वृद्धि होती है।"
                            />
                        </div>
                        <div className="">
                            <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/accb2cfd-cab7-47ff-c180-d0c07f943d00/public" alt="" className='w-full' />
                        </div>
                        <div className="">
                            <HerbItem
                                img="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/9dff4f31-8a10-4b2f-fefc-bf651c8d5e00/public"
                                title="शिलाजीत"
                                description="शिलाजीत कहें या नेचुरल वियाग्रा, यह पुरुषों में जोश, ऊर्जा, स्टेमिना और सेक्स टाइमिंग बढ़ाने में मदद करता है।"
                            />
                            <HerbItem
                                img="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/ee9e539f-2d20-48f8-302e-97e900f86100/public"
                                title="गोक्षुरा"
                                description="यह मूल अफ्रीकन हर्ब लिंग की नसों और मांसपेशियों को रिलैक्स करके लिंग आकार और स्टेमिना बढ़ाने में अत्यंत फायदेमंद है।"
                            />
                        </div>

                    </div>

                </div>
                <OrderNow />
                <div className="performance_bg">
                    <div className="w-full sm:max-w-7xl mx-auto sm:py-7 py-3">

                        <div className="text-center sm:text-[2.2vw] text-3xl font-extrabold uppercase sm:py-5 py-5 text-white leading-tight">
                            Key Benefits of<br /> Horse Fire Tablet
                        </div>

                        <div className="grid sm:grid-cols-4 grid-cols-2 justify-center items-center">
                            {
                                performance([
                                    {
                                        gif: "https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/5310bcd9-9853-49ee-928b-03ede3cacc00/public",
                                        title: "लिंग कमजोरी मिटाए<br/> आकार सुधारे"
                                    },
                                    {
                                        gif: "https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/dd019f8c-a0e9-451f-1264-7db2c2d6aa00/public",
                                        title: "लम्बी सेक्स अवधि,<br/> जोरदार प्रदर्शन"
                                    },
                                    {
                                        gif: "https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/a621ec64-e827-4b31-406a-59f0268dce00/public",
                                        title: "डिस्चार्ज पश्चात <br/>तुरंत कड़कपन पाएं"
                                    },
                                    {
                                        gif: "https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/f365151f-86fc-4e72-409d-633a897bab00/public",
                                        title: "जोश, स्टैमिना और <br/>एनर्जी लेवल बढाए "
                                    }
                                ])
                            }
                        </div>


                    </div>
                </div>
                <OrderNow />
                <div className="bg_doc_ai">
                    <div className="w-full sm:max-w-7xl mx-auto sm:py-7 py-3">

                        <div className="fontAnek text-center sm:text-3xl text-xl sm:p-2 p-3">
                            <strong>Horse Fire Tablet</strong> शोधित आयुर्वेदिक जड़ीबूटियों और भस्मो से बना हुआ प्राकृतिक और सेवन के लिए पूर्णतः सुरक्षित उत्पाद है! यह <strong>ISO</strong>, <strong>GMP</strong> और <strong>AYUSH</strong> सर्टिफाइड है।
                        </div>

                        <div className="grid sm:grid-cols-4 grid-cols-2 justify-center items-center">
                            {
                                reasons([
                                    {
                                        icons: "https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/e453497e-e61f-42b8-854e-d70983058400/public",
                                        title: "COD Payment <br/> Available"
                                    },
                                    {
                                        icons: "https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/eb3e3433-8137-467f-a7fa-d6b4d2d75c00/public",
                                        title: "Big Discount in<br/> Winter Season"
                                    },
                                    {
                                        icons: "https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/067cf73a-8c58-4eee-3b5b-c4fa9752f800/public",
                                        title: "Save 10% Extra <br/>on Prepaid"
                                    },
                                    {
                                        icons: "https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/8b14b5b7-3225-4e00-fdb9-6d2cc3c70500/public",
                                        title: "First Choice <br/>of men in India"
                                    }
                                ])
                            }
                        </div>


                    </div>
                </div>

            </div>
            <MostSelling />
            <OrderNow />

        </section >

    )
}

export default Herbs