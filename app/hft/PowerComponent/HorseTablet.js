import { hft } from './HftClass';
import dynamic from 'next/dynamic';

const ImageAlert = dynamic(() => import('../PowerComponent/ImageAlert'), {
    loading: () => <p>load time</p>
});

const HorseTablet = () => {
    return (
        <section>

            <div className='w-full'>
                <ImageAlert handleimage={"https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/0d069185-7d40-43c1-92cf-f7aa4b5e8100/public"} />
            </div>


            <div className='sidebar'>
                <h3 className='my-3 text-xl'> <span className='knight'>Horse Fire</span> है भरोसेमंद!</h3>
                {
                    hft.ulli_true([
                        "यह 100% सुरक्षित और आरोग्य मंत्रालय भारत सरकार से प्रमाणित है।",
                        "आप इसको COD पेमेंट सुविधा के साथ आर्डर कर सकते है।",
                        "दस दिनों की मनी बैक गारंटी सुविधा उपलब्ध है।",
                        "समस्या ज्यादा गंभीर होने पर कस्टम प्रोडक्ट तैयार किया जाता है।",
                        "भारत का भरोसेमंद उत्पाद जिसका खुद का ऑफिसियल वेबसाइट है।"
                    ])
                }
            </div>

            <div className='text-center'>
                <a href='#form' className='order_blink-a text-2xl'>अभी ऑर्डर करे  </a>
            </div>


        </section>
    )
}

export default HorseTablet;