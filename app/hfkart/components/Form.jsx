

import React from "react";
import { useGlobalContext } from "@/app/statemanage/context";
import { CustomerDataValidator, CustomerDataValue } from "@/app/commonUse/FormDataValidation";
import axios from 'axios';
import { useSearchParams } from "next/navigation";
import dynamic from "next/dynamic";

const AmaFlipDialog = dynamic(() => import('@/app/commonUse/AmaFlipDialog/AmaFlipDialog'), {
    loading: () => <p>loading</p>
});

const FormLoader = dynamic(() => import('@/app/commonUse/loader/FormLoader'), {
    loading: () => <p>loader</p>
});


const Form = () => {
    const searchParams = useSearchParams();

    const { CustomerData, setCustomerData, checkoutDetail, setLoading, openPopup, loading } = useGlobalContext();

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
            formdata.append("post", "Horsefiretablet.com/HFKART");
            formdata.append("ip", check ? check : "");
            formdata.append("checkout_toogle", checkoutDetail.checkoutChecked);
            formdata.append("blog_url", process.env.NEXT_APP_URL_HFKART ?? "horsefiretablet.com/HFKART");

            // let tracker = searchParams.get("krt-tracker");
            const searchParamss_krt = searchParams.get("krt");
            const searchParamss_krttracker = searchParams.get("krttracker");

            searchParamss_krttracker && formdata.append('conversions_tracking', searchParamss_krttracker);
            searchParamss_krt && formdata.append("conversions", searchParamss_krt);

            const searchParamss_hftevadev = searchParams.get("hftevadev");
            searchParamss_hftevadev && formdata.append("hftevadev", searchParamss_hftevadev);

            try {
                const form = await fetch(`https://horsefiretablet.com/submitdata.php`, { body: formdata, method: "POST" })
                const data = await form.json();

                // const blogWebId = data.blogWebId ?? null;
                if (data.ok) {
                    setLoading(false);
                    openPopup();
                    // let destination = decodeURI(data.destination)
                    // let name = destination.split("?name=")[1].split("&")[0]
                    // let phone = destination.split("&phone=")[1].split("&")[0]
                    // return window.location.href = `${checkoutDetail.checkoutUrl}?source=${blogWebId}&name=${name}&phone=${phone}`
                }
                setLoading(false);
                // return window.location.href = `${checkoutDetail.checkoutUrl}?source=${blogWebId}&name=&phone=`
            } catch (err) {
                setLoading(false);
                openPopup();
                // return window.location.href = checkoutDetail.checkoutUrl;
            }
        } catch (error) {
            setLoading(false);
            return alert(error);
        }

    }


    return (<div className=" pb-5 bg-black" id="form">

        {
            loading && <FormLoader />
        }

        <h1 className="text-2xl md:text-4xl text-center  text-white font-bold px-2 py-5 md:pt-10"><div className=" max-w-xl mx-auto">कॉल पर विशेषज्ञ डॉक्टरों से मुफ्त सलाह के लिए फॉर्म भरें !</div></h1>

        <div className={`pb-4 text-black fontPoppins`} id='formcallhide'>
            <div className="max-w-2xl mx-4 md:mx-auto  bg-slate-50 p-3 border border-[#d6c1a5] rounded-2xl">
                <div className="py-4">
                    <div className="text-center">
                        <h1 className=" text-4xl font-bold border-b mb-5 inline-block border-black"> Contact Us </h1>
                    </div>
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
                            <button onClick={handleFormSubmit} type="button" className="bg-zinc-900 text-xl font-bold p-3 pt-3 md:w-72 w-full rounded-full hover:bg-zinc-950 transition-colors text-white">
                                SUBMIT
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>

        <AmaFlipDialog  type="ts" />

    </div>

    );
};

export default Form;
