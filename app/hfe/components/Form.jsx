

import React from "react";
import { useGlobalContext } from "@/app/statemanage/context";
import { CustomerDataValidator, CustomerDataValue } from "@/app/commonUse/FormDataValidation";
import axios from 'axios';
import { useSearchParams } from "next/navigation";
import dynamic from "next/dynamic";
import Image from "next/image";

const Load = dynamic(() => import("@/app/commonUse/loader/FormLoader"), {
    loading: () => <p>df</p>
})

const Form = () => {
    const searchParams = useSearchParams();

    const { CustomerData, setCustomerData, checkoutDetail, setLoading, loading, hours, minutes, remainingSeconds, } = useGlobalContext();

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
            formdata.append("post", "Horsefiretablet.com/HFE")
            formdata.append("ip", check ? check : "")
            formdata.append("checkout_toogle", checkoutDetail.checkoutChecked)
            formdata.append("blog_url", process.env.NEXT_APP_URL_HFE ?? "horsefiretablet.com/hfe")

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

    return (<div className=" " id="form">

        {
            loading && <Load />
        }

        <div>
            <div className="">

                <div className="text-center font-bold">
                    <p className="text-red-700 text-2xl">अभी भी सोच में पड़े हैं ?</p>
                    <h1 className="text-4xl my-1">अभी मजे लेना  शुरू करें!</h1>
                    <p className="text-xl mt-3">LIMITED TIME OFFER</p>
                    <p className="bg-red-600 text-2xl pt-4 pb-1  ">{`${hours} : ${minutes} : ${remainingSeconds}`}</p>
                </div>
                <div className="px-4 py-10  text-black relative" id='form'>
                    <div className="relative z-10 sm:w-10/12 mx-auto" id='formcallhide'>
                        <div className=" ">

                            <div className="grid grid-cols-12 items-center font-bold text-2xl sm:text-[2.15rem] leading-tight">
                                <div className="col-span-8">
                                    <h1 className="commonhft ">Horse Fire Tablet</h1>
                                    <h1 className="text-yellow-400">की मदद से सेक्स करें भरपूर, पार्टनर हो जाएगी चूर चूर !</h1>
                                </div>
                                <div className="col-span-4">
                                    <img src="/main/hfe_images/bcouple.png" alt="pic" width='100%' height='100%' loading="lazy" />
                                </div>
                            </div>

                            <div className="fontPoppins formContainer px-4 pb-6 border rounded-lg ">

                                <h1 className="pt-5 text-center font-bold text-xl">प्रोडक्ट के बारे में अधिक जानकारी के लिए एक्सपर्ट्स से संपर्क करें !</h1>

                                <form className="space-y-3">
                                    {CustomerDataValue?.map((data, key) => {
                                        return <div className="flex flex-col my-6" key={key}>
                                            <label className="font-semibold text-xl py-1 text-white">{data.label}</label>
                                            <div className="relative">
                                                <input {...data.inputValue} className={`p-1 py-3 border w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 ${data.icon ? 'pl-[3.5rem]' : ''}`} onChange={handleChange} value={CustomerData[data.inputValue.name]} />
                                                {data.icon && <span className="absolute ransform translate-x-[-50%] translate-y-[-50%] top-1/2 left-5 border-r border-black px-2">{data.icon}</span>}
                                            </div>
                                        </div>
                                    })}
                                    <div className="flex justify-center items-center pt-4 ">
                                        <button onClick={handleFormSubmit} type="button" className="orderBtnLayer text-xl font-bold p-3 pt-3 md:w-72 w-full rounded-full">
                                            SUBMIT
                                        </button>
                                    </div>
                                </form>
                            </div>

                        </div>
                    </div>
                    <Image src='/main/hfe_images/first_bg.jpg' fill alt='pic' loading='lazy' />
                </div>

            </div>
        </div>
    </div >

    );
};

export default Form;
