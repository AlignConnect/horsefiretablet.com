

import React from "react";
import { useGlobalContext } from "@/app/statemanage/context";
import { CustomerDataValidator, CustomerDataValue } from "@/app/commonUse/FormDataValidation";
import axios from 'axios';
import { useSearchParams } from "next/navigation";
import dynamic from "next/dynamic";

const Load = dynamic(() => import("@/app/commonUse/loader/FormLoader"), {
    loading: () => <p>df</p>
})

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
            formdata.append("post", "Horsefiretablet.com/HFK")
            formdata.append("ip", check ? check : "")
            formdata.append("checkout_toogle", checkoutDetail.checkoutChecked)
            formdata.append("blog_url", process.env.NEXT_APP_URL_HFK ?? "horsefiretablet.com/hfk")

            // let tracker = searchParams.get("krt-tracker");
            const searchParamss_krt = searchParams.get("krt");
            const searchParamss_krttracker = searchParams.get("krttracker");

            searchParamss_krttracker && formdata.append('conversions_tracking', searchParamss_krttracker);
            searchParamss_krt && formdata.append("conversions", searchParamss_krt);

            const searchParamss_hftevadev = searchParams.get("hftevadev");
            searchParamss_hftevadev && formdata.append("hftevadev", searchParamss_hftevadev);

            try {
                setLoading(true)
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

        <div className="py-10">
            {
                loading && <Load />
            }


            <div className="px-3 max-w-3xl mx-auto ">

                {/* <div className="text-center font-bold">
                    <p className="text-red-700 text-2xl">अभी भी सोच में पड़े हैं ?</p>
                    <h1 className="text-4xl my-1">अभी मजे लेना  शुरू करें!</h1>
                    <p className="text-xl mt-3">LIMITED TIME OFFER</p>
                    <p className="bg-gradient-to-t text-2xl rounded-lg pt-3 pb-1 text-white from-[#071930] via-[#0d2950] to-[#133b72]">{`${hours} : ${minutes} : ${remainingSeconds}`}</p>
                </div> */}

                <div className="mx-auto fontPoppins bg-white px-4 pb-6 border border-red-400 rounded-lg " id='formcallhide'>

                    <h1 className="text-xl md:text-2xl text-center mt-5 font-bold">कॉल पर विशेषज्ञ डॉक्टरों से मुफ्त सलाह के लिए फॉर्म भरें !</h1>

                    <form className="space-y-3">
                        {CustomerDataValue?.map((data, key) => {
                            return <div className="flex flex-col my-6" key={key}>
                                <label className="font-semibold text-xl py-1 ">{data.label}</label>
                                <div className="relative">
                                    <input {...data.inputValue} className={`p-1 py-3 border w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 ${data.icon ? 'pl-[3.5rem]' : ''}`} onChange={handleChange} value={CustomerData[data.inputValue.name]} />
                                    {data.icon && <span className="absolute ransform translate-x-[-50%] translate-y-[-50%] top-1/2 left-5 border-r border-black px-2">{data.icon}</span>}
                                </div>
                            </div>
                        })}
                        <div className="flex justify-center items-center pt-4 ">
                            <button onClick={handleFormSubmit} type="button" className="bg-red-500 text-white text-xl font-bold p-3 pt-3 md:w-72 w-full rounded-full">
                                SUBMIT
                            </button>
                        </div>
                    </form>
                </div>

            </div>
        </div >
    );
};

export default Form;
