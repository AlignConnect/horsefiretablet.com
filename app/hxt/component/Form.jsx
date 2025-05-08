// import AmaFlipDialog from '@/app/commonUse/AmaFlipDialog/AmaFlipDialog';
import { CustomerDataValidator, CustomerDataValue } from '@/app/commonUse/FormDataValidation';
import { useGlobalContext } from '@/app/statemanage/context';
import axios from 'axios';
import dynamic from 'next/dynamic';
import { Poppins } from 'next/font/google'
import { useSearchParams } from 'next/navigation';

const poppins = Poppins({
    subsets: ['latin'],
    display: 'swap',
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});


const FormLoader = dynamic(() => import('@/app/commonUse/loader/FormLoader'), {
    loading: () => <p>loader</p>
});



const Form = () => {

    const searchParams = useSearchParams()

    const { CustomerData, setCustomerData, checkoutDetail, setLoading, remainingSeconds, openPopup, loading } = useGlobalContext();


    const handleChange = async (e) => {
        setCustomerData({ ...CustomerData, [e.target.name]: e.target.value })
    }

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            const getCustomData = CustomerDataValidator.JoiValidator(CustomerData);

            let check = await axios.get('https://api.ipify.org?format=json').then(response => {
                return response.data.ip
            }).catch(error => console.log(error))
            const formdata = new FormData()

            formdata.append("name", getCustomData.name)
            formdata.append("phone", getCustomData.phone)
            formdata.append("address", getCustomData.address)
            formdata.append("post", "Horsefiretablet.com/HXT")
            formdata.append("ip", check ? check : "")
            formdata.append("checkout_toogle", checkoutDetail.checkoutChecked)
            formdata.append("blog_url", process.env.NEXT_APP_URL_HXT ?? "horsefiretablet.com/HXT")

            // let tracker = searchParams.get("krt-tracker");
            const searchParamss_krt = searchParams.get("krt");
            const searchParamss_krttracker = searchParams.get("krttracker");

            searchParamss_krttracker && formdata.append('conversions_tracking', searchParamss_krttracker);
            searchParamss_krt && formdata.append("conversions", searchParamss_krt);

            const searchParamss_hftevadev = searchParams.get("hftevadev");
            searchParamss_hftevadev && formdata.append("hftevadev", searchParamss_hftevadev);

            try {
                const form = await fetch(`https://horsefiretablet.com/submitdata.php`, { body: formdata, method: "POST" })
                const data = await form.json()

                const blogWebId = data.blogWebId ?? null
                if (data.ok) {
                    setLoading(false)
                    // openPopup();
                    let destination = decodeURI(data.destination)
                    let name = destination.split("?name=")[1].split("&")[0]
                    let phone = destination.split("&phone=")[1].split("&")[0]
                    return window.location.href = `${checkoutDetail.checkoutUrl}?source=${blogWebId}&name=${name}&phone=${phone}`
                }
                setLoading(false);
                return window.location.href = `${checkoutDetail.checkoutUrl}?source=${blogWebId}&name=&phone=`
            } catch (err) {
                setLoading(false);
                // openPopup();
                return window.location.href = checkoutDetail.checkoutUrl;
            }
        } catch (error) {
            setLoading(false);
            return alert(error);
        }

    }
    return (
        <div className="bg-[url('/main/hfo_images/background_form.jpg')] bg-cover" id='form'>

            {/* <AmaFlipDialog /> */}


            {
                loading && <FormLoader />
            }

            <div className='w-full max-w-7xl mx-auto '>
                <div className={`${poppins.className} text-2xl md:text-4xl text-center font-extrabold py-2`}>
                    <span className="text-red-700">HORSE FIRE</span> IS PROUD TO BE
                </div>
                <img className='w-48 md:w-80 mx-auto' src="/main/hfo_images/certificate.png" alt='certificate' />
            </div>

            <div className='w-full max-w-2xl mx-auto py-4'>
                <div className='bg-gradient-to-b from-[#df4b4b] via-[#f1b6a8] to-[#f1b6a8] md:p-6 p-4 rounded-xl'>
                    <div className={`${poppins.className} text-white font-extrabold text-2xl py-2`}>अभी ऑर्डर करे<br /> Horse Fire Tablet</div>
                    <form className="space-y-3">
                        {CustomerDataValue?.map((data, key) => {
                            return <div className="flex flex-col" key={key}>
                                <label className="font-semibold text-xl py-1">{data.label}</label>
                                <div className="relative">
                                    <input {...data.inputValue} className={`p-1 py-3 border w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 ${data.icon ? 'pl-[3.5rem]' : ''}`} onChange={handleChange} value={CustomerData[data.inputValue.name]} />
                                    {data.icon && <span className="absolute ransform translate-x-[-50%] translate-y-[-50%] top-1/2 left-5 border-r border-black px-2">{data.icon}</span>}
                                </div>
                            </div>
                        })}

                        <div className="flex justify-center items-center pt-4 ">
                            <button onClick={handleFormSubmit} type="button" className="bg-zinc-900 text-xl font-bold px-3 pb-2 pt-4 md:w-72 w-full rounded-full hover:bg-zinc-950 transition-colors text-white">
                                SUBMIT
                            </button>
                        </div>
                    </form>
                </div>
            </div>

        </div >
    )
};

export default Form;