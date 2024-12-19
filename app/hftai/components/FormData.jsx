"use client";
import { useGlobalContext } from "@/app/statemanage/context";
import { CustomerDataValidator, CustomerDataValue } from "@/app/commonUse/FormDataValidation";
import axios from 'axios';
import { useSearchParams } from "next/navigation";
import { MdOutlineSupportAgent } from "react-icons/md";
import dynamic from "next/dynamic";
import { Noto_Serif_Devanagari } from "next/font/google";
import { IoIosWarning } from "react-icons/io";

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
        setLoading(true);

        try {
            const getCustomData = CustomerDataValidator.JoiValidator(CustomerData);

            let check = await axios.get('https://api.ipify.org?format=json').then(response => {
                return response.data.ip
            }).catch(error => console.log(error));

            const formdata = new FormData();

            formdata.append("name", getCustomData.name);
            formdata.append("phone", getCustomData.phone);
            formdata.append("address", getCustomData.address);
            formdata.append("post", "Horsefiretablet.com/HFTAI");
            formdata.append("ip", check ? check : "");
            formdata.append("checkout_toogle", checkoutDetail.checkoutChecked);
            formdata.append("blog_url", process.env.NEXT_APP_URL_HFTAI ?? "horsefiretablet.com/HFTAI");

            // let tracker = searchParams.get("krt-tracker");
            const searchParamss_krt = searchParams.get("krt");
            const searchParamss_krttracker = searchParams.get("krttracker");

            searchParamss_krttracker && formdata.append('conversions_tracking', searchParamss_krttracker);
            searchParamss_krt && formdata.append("conversions", searchParamss_krt);

            try {
                const form = await fetch(`https://horsefiretablet.com/submitdata.php`, { body: formdata, method: "POST" })
                const data = await form.json();

                const blogWebId = data.blogWebId ?? null;

                if (data.ok) {
                    setLoading(false);
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
        <div id="form" className="fontAnek">

            {
                loading && <Load />
            }

            <div className="bg_form">

                <div className="max-w-4xl mx-auto py-2 md:py-12 px-3">
                    <div className="">
                        <div className="flex items-center justify-center py-2">
                            <IoIosWarning size={45} color="red" />
                            <div className="fontNoto text-[8vw] sm:text-[3vw] text-yellow-400 font-extrabold pt-4">
                                नक्कालों से सावधान
                            </div>
                        </div>
                        <div className="text-white sm:text-xl text-lg">
                            Horse Fire Tablet  की बढ़ती लोकप्रियता को देखते हुए मार्केट में कुछ नकली विक्रेता आ गए है। ध्यान से AR Ayurveda ब्रांड देखकर ही प्रोडक्ट खरीदें!
                        </div>
                        <div className="fontNoto text-[8vw] sm:text-[2vw] text-white font-extrabold py-5 text-center">
                            कॉल पर विशेषज्ञ डॉक्टरों से मुफ्त सलाह के लिए फॉर्म भरें!
                        </div>
                    </div>
                    <div className="">
                        <div className="" id='form'>
                            <div className=" " id='formcallhide'>
                                <div className="mx-auto font-poppin box_shaddow  form_shaddow bg-white px-3 py-8  rounded-md ">
                                    <div>
                                        <div className="text-center mb-8">
                                            <h1 className="text-center text-black text-4xl fontJosefin  font-bold inline-block border-b-2"> Contact Us </h1>
                                        </div>
                                        <form className="sm:space-y-7 space-y-4">
                                            {CustomerDataValue?.map((data, key) => {
                                                return <div className="flex flex-col my-6" key={key}>
                                                    <label className="fontPoppins text-sm text-black py-1">{data.label}</label>
                                                    <div className="relative">
                                                        <input {...data.inputValue} className={`p-1 py-3 border border-solid border-black w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 ${data.icon ? 'pl-[3.5rem]' : ''}`} onChange={handleChange} value={CustomerData[data.inputValue.name]} />
                                                        {data.icon && <span className="absolute ransform translate-x-[-50%] translate-y-[-50%] top-1/2 left-5 border-r border-black px-2">{data.icon}</span>}
                                                    </div>
                                                </div>
                                            })}
                                            <div className="flex justify-center items-center pt-4 ">
                                                <button onClick={handleFormSubmit} type="button" className="bg-yellow-500  text-xl font-bold p-3 pt-3 md:w-72 w-full rounded-md hover:bg-yellow-300 transition-colors text-black">
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
