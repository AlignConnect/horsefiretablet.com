import dynamic from 'next/dynamic';
import '../hf01a.css';

const FormRedirect = dynamic(() => import('./FormRedirect'), {
    loading: () => <p>load</p>
});


const Section1 = () => {

    return (
        <div className="">

            <div className='w-full relative'>
                <div className="py-2 sm:py-3 uppercase fontPoppins relative z-10 text-white text-center text-3xl sm:text-5xl font-extrabold">
                    100% All Natural
                </div>
                <img src="/main/hfrush_images/1.jpg" alt="bg1" className="absolute top-0 left-0 h-full" width='100%' height='100%' fetchPriority='high' />
            </div>
            <img src="/main/hfrush_images/7.jpg" alt="bg1" className="hidden sm:block" width='100%' height='100%' fetchPriority='high' />
            <img src="/main/hfrush_images/29.jpg" alt="bg1" className="sm:hidden" width='100%' height='100%' fetchPriority='high' />
            <div className="max-w-7xl py-5 mx-auto px-3">
                <div className="grid grid-cols-3 gap-5 justify-items-center">
                    <img src="/main/hfrush_images/8.png" alt="img1" />
                    <img src="/main/hfrush_images/9.png" alt="img2" />
                    <img src="/main/hfrush_images/10.png" alt="img3" />
                </div>

                <p className="mt-7 max-w-6xl mx-auto sm:text-center text-justify"><span className="text-red-700 font-extrabold uppercase ">"Horse Fire Tablet"</span> पुरुष सेक्स कमजोरी मिटाने का एक सुपर पावर पैक फार्मूला है। यह आयुर्वेद की प्राचीन और विश्वसनीय जड़ीबूटियों और भस्मो की शक्तियों का संयोजन है। इसमें प्रत्येक जड़ीबूटी के उपयोगी हिस्से को आधुनिक तौर से रिसर्च करके उचित मात्रा में इस्तेमाल किया गया है जिसके वजह से <span className="text-red-700 font-extrabold uppercase ">Horse Fire Tablet</span> मार्केट में उपलब्ध अन्य उत्पादों से अलग और असरदार सिद्ध हुआ है। </p>
            <FormRedirect/>
            </div>

        </div>
    )
}
export default Section1;