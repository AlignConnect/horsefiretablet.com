import dayjs from 'dayjs';
import Image from 'next/image';
import { MdOutlineSupportAgent } from 'react-icons/md';
const now = dayjs();


function SexProblemHeader() {

    return (
        <section className='w-full max-w-6xl mx-auto'>
            <div className="grid md:grid-cols-12 items-center gap-10 my-5">
                <div className="col-span-6">
                    <Image
                        src="/main/hf69h_images/header_image.webp"
                        width={0}
                        height={0}
                        sizes="100vw"
                        className="md:w-[90%] w-72 mx-auto"
                        loading="lazy"
                        alt='header_image'
                    />

                </div>
                <div className="col-span-6 fontNoto md:text-left text-center">
                    <div className=" text-2xl md:text-5xl font-extrabold md:text-left  md:!leading-normal">
                        सेक्स समस्या से निराश पुरुष मर्दानगी बढ़ाने के लिए इसे आजमाएं!
                    </div>
                    <div className="fontPoppins py-2 ">
                        <span className="text-red-600 font-semibold">Total Views 143k</span> : {now.format('DD-MM-YYYY')}
                    </div>

                    <div className="bg-[#f9d830] flex items-center justify-center md:w-72 w-80 py-1 rounded-2xl mx-auto md:mx-0">
                        <div className="">
                            <MdOutlineSupportAgent className="inline text-5xl  " />
                        </div>
                        <div className="fontKalnia md:text-md text-black  text-center rounded-2xl font-semibold">
                            <a href="#form">
                                Request for expert advice
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <hr />

            <div className="fontNoto text-2xl pt-3 px-2 bg-[#ffe1d4] border border-red-500 rounded-md md:w-1/2 md:text-left text-center font-semibold my-5 ">
                अपने खुशहाल जीवन के लिए सिर्फ 5 मिनट निकालें !
            </div>

            <div className="text-black text-justify fontNoto text-[1.2rem] md:text-xl py-4 px-2">
                सेक्स समस्या मिटाने के लिए कोई शीलाजीत, कोई अश्वगंधा तो कोई गोक्षुरा खाने की सलाह देता है। अवश्य ही यह समस्त विश्व में सर्वश्रेष्ठ कामोत्तेजक और प्राकृतिक यौन वर्धक के रूप में प्रशिद्ध है। हम इस बात से कत्तई इंकार नहीं कर सकते ही इनके सेवन से यौन समस्या में लाभ नहीं मिलेगा परन्तु जरा सोचिये इन जड़ीबूटियों के साथ आयुर्वेद की कुछ अन्य प्रमुख टेस्टोस्टेरोन बूस्टर और कामोत्तेजक बूटियों का मिश्रण हो जाये तो एक यौन रोगी को कितना लाभ मिलेगा।
            </div>
        </section>
    )
}

export default SexProblemHeader