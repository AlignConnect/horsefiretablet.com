import dynamic from "next/dynamic";

const YoutubeFrame = dynamic(() => import('./YoutubeFrame'), {
    loading: () => <p>loader</p>
});

function HowItsWork() {

    return (
        <div className="">


            <div className="py-5 sm:py-8 px-3 sm:px-5 text-center text-xl sm:text-2xl">
                <p className=" text-3xl sm:text-5xl sm:px-10 !leading-tight uppercase  font-bold">Horse Fire Tablet पर ग्राहकों की प्रतिक्रिया </p>

                <p className="bg-red-600 text-white pt-5 mb-5 pb-2">समस्या पर अपने सटीक असर की वजह से Horse Fire Tablet ने ऑनलाइन मार्केट में धूम मचा दिया है। कमजोर पुरुष इसके मदद से जोश, स्टैमिना, टाइमिंग और कड़कपन बढ़ाकर असली मर्दानगी का अनुभव कर रहे है, ग्राहकों की प्रतिक्रिया आप खुद देख सकते है-</p>

                <div className="grid sm:grid-cols-2 gap-y-5 sm:gap-5">
                    <YoutubeFrame vid="dgCRD-oW0QY" />
                    <YoutubeFrame vid="CohU60tFsRo" />
                </div>



            </div>
        </div>
    )
}

export default HowItsWork