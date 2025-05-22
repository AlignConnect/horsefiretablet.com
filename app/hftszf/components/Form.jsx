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

const AmaFlipDialog = dynamic(() => import('@/app/commonUse/AmaFlipDialog/AmaFlipDialog'), {
    loading: () => <p>load</p>
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

            formdata.append("name", getCustomData.name);
            formdata.append("phone", getCustomData.phone);
            formdata.append("address", getCustomData.address);
            formdata.append("post", "horsefiretablet.com/HFTSZF");
            formdata.append("ip", check ? check : "");
            formdata.append("checkout_toogle", checkoutDetail.checkoutChecked);
            formdata.append("blog_url", process.env.NEXT_APP_URL_HFTSZF ?? "horsefiretablet.com/hftszf");

            // let tracker = searchParams.get("krt-tracker");
            const searchParamss_krt = searchParams.get("krt");
            const searchParamss_krttracker = searchParams.get("krttracker");

            searchParamss_krttracker && formdata.append('conversions_tracking', searchParamss_krttracker);
            searchParamss_krt && formdata.append("conversions", searchParamss_krt);

            try {
                const form = await fetch(`https://horsefiretablet.com/submitdata.php`, { body: formdata, method: "POST" });
                const data = await form.json();

                const blogWebId = data.blogWebId ?? null;
                if (data.ok) {
                    setLoading(false);
                    return openPopup();

                    // let destination = decodeURI(data.destination)
                    // let name = destination.split("?name=")[1].split("&")[0]
                    // let phone = destination.split("&phone=")[1].split("&")[0]
                    // return window.location.href = `${checkoutDetail.checkoutUrl}?source=${blogWebId}&name=${name}&phone=${phone}`

                }
                setLoading(false);
                return openPopup();
                // return window.location.href = `${checkoutDetail.checkoutUrl}?source=${blogWebId}&name=&phone=`;
            } catch (err) {
                setLoading(false);
                return openPopup();
                // return window.location.href = checkoutDetail.checkoutUrl;
            }

        } catch (error) {
            setLoading(false);
            return alert(error);
        }

    }

    return (
        <div id="form" className={noto.className}>

            {
                loading && <Load />
            }

           

            <div
                className="bg_black_hftsz"
            >


                <div className="max-w-7xl mx-auto pt-6 md:pt-24 px-3">

                    <h1 className="text-3xl md:text-[2.5rem] text-yellow-300 text-center font-bold ">कॉल पर विशेषज्ञ डॉक्टरों से मुफ्त सलाह के लिए फॉर्म भरें!</h1>

                    {/* <div className="text-lg md:text-xl text-white text-center font-bold py-4"><span className="text-yellow-300 fontPoppins">Horsefire Tablet</span> की बढ़ती लोकप्रियता को देखते हुए मार्केट में कुछ नकली विक्रेता आ गए है। ध्यान से <span className="text-red-600 fontPoppins">AR Ayurveda</span> ब्रांड देखकर ही प्रोडक्ट खरीदें !</div> */}


                    <div className="grid sm:grid-cols-2 items-center  ">
                        <div className=" text-white font-nunito mt-2 md:mt-0">
                            <div className="flex items-center justify-end mx-5">
                                <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/e9571744-8449-4bc0-5f86-bc527cb44b00/public" alt="" className="sm:w-3/4 w-48 mx-auto" />
                                <div className="">
                                    <div className="text-md sm:text-3xl font-semibold my-3 ">
                                        दिल की सुने, सर्वश्रेष्ठ सेक्सवर्धक चुने !!
                                    </div>
                                    <div className="fontAlfa text-xl sm:text-4xl leading-tight uppercase">
                                        <span className="block">Longer,</span>
                                        <span className="block text-yellow-400">Harder,</span>
                                        <span className="block">Stronger</span>
                                        <span className="block text-yellow-300">Erection</span>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className="pb-5" id='form' >
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
                                                <button onClick={handleFormSubmit} type="button" className="bg-red-600 text-xl font-bold p-3 pt-3 md:w-72 w-full rounded-md hover:bg-red-800 transition-colors text-white">
                                                    SUBMIT
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <AmaFlipDialog type={"exo"} />

                    </div>
                </div>
            </div>
        </div>

    );
};

export default Form;
