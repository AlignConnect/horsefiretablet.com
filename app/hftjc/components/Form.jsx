"use client";
import { useGlobalContext } from "@/app/statemanage/context";
import { CustomerDataValidator, CustomerDataValue } from "@/app/commonUse/FormDataValidation";
import axios from 'axios';
import { useSearchParams } from "next/navigation";
import { IoWarningSharp } from "react-icons/io5";

import dynamic from "next/dynamic";
import { Noto_Serif_Devanagari } from "next/font/google";
import { useEffect, useState } from "react";
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

    const [sell, setsell] = useState(52);

    useEffect(() => {
        const interval = setInterval(() => {
            setsell((prevSell) => {
                if (prevSell >= 300) {
                    clearInterval(interval);
                    return 300;
                }


                const increment = Math.floor(Math.random() * 4) + 1;
                return Math.min(prevSell + increment, 300);
            });
        }, 7000);

        return () => clearInterval(interval);
    }, []);


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
            formdata.append("post", "horsefiretablet.com/HFTJC")
            formdata.append("ip", check ? check : "")
            formdata.append("checkout_toogle", checkoutDetail.checkoutChecked)
            formdata.append("blog_url", process.env.NEXT_APP_URL_HFTJC ?? "horsefiretablet.com/hftjc")

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
                className="bg-[black]"
            >

                <h1 className="text-2xl md:text-[2vw] text-green-500 text-center font-bold  mb-4 mx-6 leading-tight sm:px-10">कॉल पर विशेषज्ञ डॉक्टरों से मुफ्त सलाह के लिए फॉर्म भरें!</h1>
                <div className="form_warning_bg">

                    <div className="flex items-center justify-center">
                        <IoIosWarning size={45} color="red" />
                        <div className="fontNoto text-[8vw] sm:text-[2vw] text-yellow-400 font-semibold pt-3">
                            नक्कालों से सावधान
                        </div>
                    </div>


                </div>
                <p className="mt-4">
                    <span className='text-green-500 '>Horsefire Tablet</span>  की बढ़ती लोकप्रियता को देखते हुए मार्केट में कुछ नकली विक्रेता आ गए है। ध्यान से <span className='text-green-500 '>AR Ayurveda</span> ब्रांड देखकर ही प्रोडक्ट खरीदें !
                </p>

                <div className="py-2 md:py-8 px-3">


                    <div className="col-span-12 sm:mx-10" id='form'>
                        <div className=" " id='formcallhide'>
                            <div className="mx-auto fontPoppins  bg-[#1a1a1a]  px-4 py-6 border border-white border-solid rounded-lg ">
                                <div>
                                    <div className="text-center mb-8">
                                        <h1 className="text-yellow-400 text-center text-4xl font-bold inline-block"> Contact Us </h1>
                                    </div>
                                    <form className="space-y-3">
                                        {CustomerDataValue?.map((data, key) => {
                                            return <div className="flex flex-col my-6" key={key}>
                                                <label className=" fontNoto font-semibold fontPoppins text-[1.1rem] py-1 text-white">{data.label}</label>
                                                <div className="relative">
                                                    <input {...data.inputValue} className={`text-[1rem] fontNoto p-1 pt-2 rounded-sm px-2 border w-full  focus:outline-none focus:ring-2 focus:ring-red-500 ${data.icon ? 'pl-[3rem]' : ''}`} onChange={handleChange} placeholder={data.label} value={CustomerData[data.inputValue.name]} />
                                                    {data.icon && <span className="absolute ransform translate-x-[-50%] translate-y-[-50%] top-1/2 left-5 border-r border-black px-2">{data.icon}</span>}
                                                </div>
                                            </div>
                                        })}
                                        <div className="flex justify-center items-center pt-4 ">
                                            <button onClick={handleFormSubmit} type="button" className="bg-black border border-yellow-400  text-xl font-bold p-3 pt-3 md:w-60 w-full  text-white rounded-tl-2xl rounded-br-2xl  hover:bg-red-700">
                                                SUBMIT
                                            </button>
                                        </div>
                                        <div className='text-sm text-center text-white py-2' >
                                            <span className="text-yellow-400">&nbsp; {sell} </span> People Submited Form in Last 1 Hour
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </div >

    );
};

export default Form;
