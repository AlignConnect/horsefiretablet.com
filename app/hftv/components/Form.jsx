"use client";
import { useGlobalContext } from "@/app/statemanage/context";
import { CustomerDataValidator, CustomerDataValue } from "@/app/commonUse/FormDataValidation";
import axios from 'axios';
import { useSearchParams } from "next/navigation";
import { MdOutlineSupportAgent } from "react-icons/md";
import dynamic from "next/dynamic";
import { Noto_Serif_Devanagari } from "next/font/google";

const AmaFlipDialog = dynamic(() => import('@/app/commonUse/AmaFlipDialog/AmaFlipDialog'), {
    loading: () => <p>load</p>
});

const FormLoader = dynamic(() => import('@/app/commonUse/loader/FormLoader'), {
    loading: () => <p>loader</p>
});

const noto = Noto_Serif_Devanagari({
    subsets: ['devanagari'],
    display: 'swap',
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});

const Form = () => {
    const searchParams = useSearchParams();

    const { CustomerData, setCustomerData, checkoutDetail, setLoading, loading, openPopup } = useGlobalContext();

    const handleChange = async (e) => {
        setCustomerData({ ...CustomerData, [e.target.name]: e.target.value })
    }

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        setLoading(true)
        try {
            const getCustomData = CustomerDataValidator.JoiValidator(CustomerData);

            let check = await axios.get('https://api.ipify.org?format=json').then(response => {
                return response.data.ip
            }).catch(error => console.log(error))
            const formdata = new FormData();



            formdata.append("name", getCustomData.name)
            formdata.append("phone", getCustomData.phone)
            formdata.append("address", getCustomData.address)
            formdata.append("post", "horsefiretablet.com/hftv")
            formdata.append("ip", check ? check : "")
            formdata.append("checkout_toogle", checkoutDetail.checkoutChecked)
            formdata.append("blog_url", process.env.NEXT_APP_URL_HFTV ?? "horsefiretablet.com/hftv")

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


                const blogWebId = data.blogWebId ?? null;
                if (data.ok) {
                    setLoading(false)
                    // let destination = decodeURI(data.destination)
                    // let name = destination.split("?name=")[1].split("&")[0]
                    // let phone = destination.split("&phone=")[1].split("&")[0]
                    // return window.location.href = `${checkoutDetail.checkoutUrl}?source=${blogWebId}&name=${name}&phone=${phone}`
                    return openPopup();
                }
                setLoading(false)
                // return window.location.href = `${checkoutDetail.checkoutUrl}?source=${blogWebId}&name=&phone=`
                return openPopup();
            } catch (err) {
                setLoading(false)
                // return window.location.href = checkoutDetail.checkoutUrl;
                return openPopup();
            }
        } catch (error) {
            setLoading(false)
            return alert(error);
        }

    }

    return (
        <div id="form" className={noto.className}>

            {
                loading && <FormLoader />
            }

            <div className="">
                <div className=""

                >
                    <div className=" pb-1 flex  bg-white pt-2 mt-10"  >
                        <div className='fontNoto flex gap-1 items-center font-extrabold text-lg md:text-2xl px-2 text-red-600'>
                            सूचना:
                        </div>
                        <marquee className='fontNoto text-lg md:text-xl text-black' direction="left">हॉर्सफायर के बढ़ते लोकप्रियता को देखते हुए आजकल मार्केट में नकली प्रोडक्ट आ गए है तो ध्यानपूर्वक <span className="fontPoppins text-red-600 ">AR Ayurveda</span> ब्रांड देखकर ही आर्डर करें!</marquee >
                    </div>
                    <div className="py-6 md:py-12 px-3 ">

                        <h1 className="fontNoto text-2xl md:text-3xl text-white text-center fw-bold mb-6 md:mb-6 font-extrabold">कॉल पर विशेषज्ञ डॉक्टरों से मुफ्त सलाह के लिए फॉर्म भरें!</h1>
                        <div className="">
                            <div className="" id='form'>
                                <div className="form_shaddow " id='formcallhide'>
                                    <div className="mx-auto font-poppin  bg-white px-4 py-6 border rounded-lg ">
                                        <div>
                                            <div className="text-center mb-12">
                                                <h1 className="text-center text-3xl font-bold inline-block border-bottom border-black"> Contact Us </h1>
                                            </div>
                                            <form className="space-y-3">
                                                {CustomerDataValue?.map((data, key) => {
                                                    return <div className="flex flex-col my-6" key={key}>
                                                        <label className="font-semibold text-sm py-1">{data.label}</label>
                                                        <div className="relative">
                                                            <input {...data.inputValue} className={`p-1 py-3 border w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 ${data.icon ? 'pl-[3.5rem]' : ''}`} onChange={handleChange} value={CustomerData[data.inputValue.name]} />
                                                            {data.icon && <span className="absolute ransform translate-x-[-50%] translate-y-[-50%] top-1/2 left-5 border-r border-black px-2">{data.icon}</span>}
                                                        </div>
                                                    </div>
                                                })}
                                                <div className="flex justify-center items-center pt-4 ">
                                                    <button onClick={handleFormSubmit} type="button" className="bg-red-600 text-xl font-bold p-3 pt-3 md:w-72 w-full rounded-xl  transition-colors text-white">
                                                        SUBMIT
                                                    </button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <AmaFlipDialog />
        </div>


    );
};

export default Form;
