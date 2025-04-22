"use client";
import { useGlobalContext } from "@/app/statemanage/context";
import { CustomerDataValidator, CustomerDataValue } from "@/app/commonUse/FormDataValidation";
import axios from 'axios';
import { useSearchParams } from "next/navigation";
import { MdOutlineSupportAgent } from "react-icons/md";
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
            formdata.append("post", "Horsefiretablet.com/HF69HCADU")
            formdata.append("ip", check ? check : "")
            formdata.append("checkout_toogle", checkoutDetail.checkoutChecked)
            formdata.append("blog_url", process.env.NEXT_APP_URL_HF69HCADU ?? "horsefiretablet.com/hf69hcadu")

            // let tracker = searchParams.get("krt-tracker");
            const searchParamss_krt = searchParams.get("krt");
            const searchParamss_krttracker = searchParams.get("krttracker");
            const searchParamss_clickadu = searchParams.get("hftadu");

            searchParamss_krttracker && formdata.append('conversions_tracking', searchParamss_krttracker);
            searchParamss_krt && formdata.append("conversions", searchParamss_krt);
            searchParamss_clickadu && formdata.append("hftadu", searchParamss_clickadu);

            const searchParamss_hftevadev = searchParams.get("hftevadev");
            searchParamss_hftevadev && formdata.append("hftevadev", searchParamss_hftevadev);

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

            <div className="bg-[url('/main/hf69h_images/form_bg.webp')] bg-cover">
                <div className=""
                >
                    <div className="max-w-6xl mx-auto py-9 md:py-14 px-3">

                        <h1 className="fontNoto text-3xl md:text-4xl text-black text-center fw-bold mb-2 md:mb-6 font-extrabold">कॉल पर विशेषज्ञ डॉक्टरों से मुफ्त सलाह के लिए फॉर्म भरें!</h1>
                        <div className="grid grid-cols-12 m-0 gap-6 items-center">
                            <div className="col-span-12 md:col-span-6" id='form'>
                                <div className=" " id='formcallhide'>
                                    <div className="mx-auto font-poppin  bg-white px-4 py-6 border rounded-lg ">
                                        <div>
                                            <div className="text-center mb-12">
                                                <h1 className="text-center text-4xl font-bold inline-block border-bottom border-black"> Contact Us </h1>
                                            </div>
                                            <form className="space-y-3">
                                                {CustomerDataValue?.map((data, key) => {
                                                    return <div className="flex flex-col my-6" key={key}>
                                                        <label className="font-semibold text-md py-1">{data.label}</label>
                                                        <div className="relative">
                                                            <input {...data.inputValue} className={`p-1 py-3 border w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 ${data.icon ? 'pl-[3.5rem]' : ''}`} onChange={handleChange} value={CustomerData[data.inputValue.name]} />
                                                            {data.icon && <span className="absolute ransform translate-x-[-50%] translate-y-[-50%] top-1/2 left-5 border-r border-black px-2">{data.icon}</span>}
                                                        </div>
                                                    </div>
                                                })}
                                                <div className="flex justify-center items-center pt-4 ">
                                                    <button onClick={handleFormSubmit} type="button" className="bg-[#d51515] text-xl font-bold p-3 pt-3 md:w-72 w-full rounded-xl hover:bg-[#293a6e]/80 transition-colors text-white">
                                                        SUBMIT
                                                    </button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-span-12 md:col-span-6 fontPoppins text-black font-nunito mt-1 md:mt-0">
                                <h1 className=" font-bold text-2xl md:text-4xl leading-normal">Helping Patients From all Over The India</h1>
                                <div className="md:text-2xl fontKalnia  text-md font-bold md:mt-5 mt-6 text-black bg-[#f9d830] px-4 py-1 rounded-xl inline-block">
                                    <MdOutlineSupportAgent className="inline text-5xl  " /> We Are Available Now
                                </div>
                                <hr className="border-t-2 my-6 md:my-12  opacity-100" />

                                <h1 className="text-xl fontNoto text-justify italic font-semibold md:text-2xl">नोट- अन्य ग्राहकों के लिए <span className="text-red-600">50%  </span>का बम्पर डिस्काउंट और ऑनलाइन पेमेंट पर <span className="text-red-600">50%  </span> अतिरिक्त बचत उपलब्ध है।</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    );
};

export default Form;
