import dynamic from 'next/dynamic';

const Ordernow = dynamic(() => import('./Ordernow'), {
    loading: () => <p>load</p>
});

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
        <div className="w-full mb-5 ">

            <div className="max-w-3xl mx-auto text-white px-3 text-xl sm:text-2xl my-5">
                <h1 className="text-3xl sm:text-4xl font-extrabold"><span className="text-[#f4a703] ">साइज सुधारने का </span> जोखिम भरा तरीका</h1>

                <img src='/main/hfk_images/op.png' alt="pic" className="w-8/12 sm:w-1/4 mx-auto mb-5" width='100%' height='100%' loading="lazy" />
                <p className=" pt-4 text-justify">बहुत सारे पुरुष लिंग की साइज सुधारने के लिए सर्जरी का ऑप्शन चुनते है। जबकि बहुत सारे एक्सपर्ट्स इससे बचने की सलाह देते है। यह ऐसा गंभीर मुद्दा है की यह आपकी बची खुची यौन जीवन की खुशिया भी छीन सकता है। चूँकि लिंग नसों का जमावड़ा है अगर सर्जरी सफल न हुआ तो पेनाइल कैविटीस क्षतिग्रस्त हो जाएंगी और लिंग में जीवन पर्यान्त कड़कपन नहीं मिलेगी और पुरुष सेक्स से बंचित रह जायेंगे। </p>


                <div className="grid grid-cols-12 items-center font-extrabold ">


                    <div className="col-span-12 sm:col-span-7 order-last sm:order-first ">
                        <div className="bg-sky-400 pb-2 pt-2 px-3 sm:p-3 shadow-inner shadow-black">
                            <p className=" font-bold mt-3 sm:mt-5 leading-tight text-xl">सर्जरी के मुकाबले Horse Fire Tablet लिंग साइज सुधारने और सेक्स टाइम बढ़ाने का एकमात्र सरल और सुरक्षित तरीका है। इससे नाइट्रिक ऑक्साइड का निर्माण तेजी से होता है। शरीर में रक्त प्रवाह सुधरता है, टेस्टोस्टेरोन का लेवल बढ़ता है शरीर उत्तेजित करके लिंग के नसों को ज्यादा फूलाती है और साइज में सुधार होता है। </p>
                        </div>
                    </div>
                    <img src="/main/hfk_images/dicvk.jpg" alt="pic" className='col-span-12 sm:col-span-5 order-first sm:order-last' width='100%' height='100%' loading="lazy" />
                </div>
            </div>

            <Ordernow />

        </div>
    )
}
export default Section3;