"use client";
import { useGlobalContext } from "@/app/statemanage/context";
import { CustomerDataValidator, CustomerDataValue } from "@/app/commonUse/FormDataValidation";
import axios from 'axios';
import { useSearchParams } from "next/navigation";
import { IoWarningSharp } from "react-icons/io5";

import dynamic from "next/dynamic";
import { Noto_Serif_Devanagari } from "next/font/google";

const Load = dynamic(() => import("@/app/commonUse/loader/FormLoader"), {
    loading: () => <p>df</p>
});

const noto = Noto_Serif_Devanagari({
    subsets: ['devanagari'],
    display: 'swap',
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});

const Form = () => {
    const searchParams = useSearchParams();

    const { CustomerData, setCustomerData, checkoutDetail, setLoading, loading } = useGlobalContext();

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
            formdata.append("post", "horsefiretablet.com/HFTPRO")
            formdata.append("ip", check ? check : "")
            formdata.append("checkout_toogle", checkoutDetail.checkoutChecked)
            formdata.append("blog_url", process.env.NEXT_APP_URL_HFTPRO ?? "horsefiretablet.com/hftpro")

            // let tracker = searchParams.get("krt-tracker");
            const searchParamss_krt = searchParams.get("krt");
            const searchParamss_krttracker = searchParams.get("krttracker");

            searchParamss_krttracker && formdata.append('conversions_tracking', searchParamss_krttracker);
            searchParamss_krt && formdata.append("conversions", searchParamss_krt);

            try {
                const form = await fetch(`https://horsefiretablet.com/submitdata.php`, { body: formdata, method: "POST" })
                const data = await form.json()

                const blogWebId = data.blogWebId ?? null;
                if (data.ok) {
                    setLoading(false)
                    let destination = decodeURI(data.destination)
                    let name = destination.split("?name=")[1].split("&")[0]
                    let phone = destination.split("&phone=")[1].split("&")[0]
                    return window.location.href = `${checkoutDetail.checkoutUrl}?source=${blogWebId}&name=${name}&phone=${phone}`
                }
                setLoading(false)
                return window.location.href = `${checkoutDetail.checkoutUrl}?source=${blogWebId}&name=&phone=`
            } catch (err) {
                setLoading(false)
                return window.location.href = checkoutDetail.checkoutUrl;
            }
        } catch (error) {
            setLoading(false)
            return alert(error);
        }


    }

    return (
        <div id="form" className={noto.className}>

            {
                loading && <Load />
            }

            <div
                className="form_bg"
            >
                <div className="max-w-7xl mx-auto py-6 md:py-24 px-3">

                    <h1 className="text-3xl md:text-[3rem] text-yellow-300 text-center font-bold mb-2 md:mb-10">कॉल पर विशेषज्ञ डॉक्टरों से मुफ्त सलाह के लिए फॉर्म भरें!</h1>
                    <div className="grid grid-cols-12 items-center m-0 gap-6">
                        <div className="col-span-12 md:col-span-6 text-white font-nunito mt-2 md:mt-0">
                            <div className="flex items-center gap-3">
                                <IoWarningSharp size={40} color="red" />
                                <h1 className=" font-bold text-3xl md:text-5xl leading-normal fontNoto pt-2">नक्कालों से सावधान</h1>
                            </div>


                            <h1 className="text-xl fontNoto font-semibold md:text-2xl py-4 text-justify">Horsefire Tablet की बढ़ती लोकप्रियता को देखते हुए मार्केट में कुछ नकली विक्रेता आ गए है। ध्यान से AR Ayurveda ब्रांड देखकर ही प्रोडक्ट खरीदें !</h1>
                        </div>
                        <div className="col-span-12 md:col-span-6" id='form'>
                            <div className=" " id='formcallhide'>
                                <div className="mx-auto fontPoppins  bg-white px-4 py-6 border rounded-lg ">
                                    <div>
                                        <div className="text-center mb-12">
                                            <h1 className="text-center text-4xl font-bold inline-block border-bottom border-black"> Contact Us </h1>
                                        </div>
                                        <form className="space-y-3">
                                            {CustomerDataValue?.map((data, key) => {
                                                return <div className="flex flex-col my-6" key={key}>
                                                    <label className="font-semibold fontPoppins text-sm py-1">{data.label}</label>
                                                    <div className="relative">
                                                        <input {...data.inputValue} className={`p-1 py-3 border w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 ${data.icon ? 'pl-[3.5rem]' : ''}`} onChange={handleChange} value={CustomerData[data.inputValue.name]} />
                                                        {data.icon && <span className="absolute ransform translate-x-[-50%] translate-y-[-50%] top-1/2 left-5 border-r border-black px-2">{data.icon}</span>}
                                                    </div>
                                                </div>
                                            })}
                                            <div className="flex justify-center items-center pt-4 ">
                                                <button onClick={handleFormSubmit} type="button" className="bg-[#972737] text-xl font-bold p-3 pt-3 md:w-72 w-full rounded-md hover:bg-[#293a6e]/80 transition-colors text-white">
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

    );
};

export default Form;
