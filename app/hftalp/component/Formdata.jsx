"use client"
import React from "react";
import { useGlobalContext } from "@/app/statemanage/context";
import { CustomerDataValidator, CustomerDataValue } from "@/app/commonUse/FormDataValidation";
import axios from 'axios';
import { useSearchParams } from "next/navigation";
import dynamic from "next/dynamic";
import { Poppins } from "next/font/google";

const AmaFlipDialog = dynamic(() => import('@/app/commonUse/AmaFlipDialog/AmaFlipDialog'), {
    loading: () => <p>load</p>
});


const Load = dynamic(() => import("@/app/commonUse/loader/FormLoader"), {
    loading: () => <p>df</p>
})


const poppin = Poppins({
    subsets: ['latin'],
    display: 'swap',
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});

const Formdata = () => {
    const searchParams = useSearchParams();

    const { CustomerData, setCustomerData, checkoutDetail, setLoading, openPopup, loading } = useGlobalContext();

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
            formdata.append("post", "Horsefiretablet.com/HFTALP")
            formdata.append("ip", check ? check : "")
            formdata.append("checkout_toogle", checkoutDetail.checkoutChecked)
            formdata.append("blog_url", process.env.NEXT_APP_URL_HFTALP ?? "horsefiretablet.com/hftalp")

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
                    setLoading(false);
                    openPopup();
                    // let destination = decodeURI(data.destination)
                    // let name = destination.split("?name=")[1].split("&")[0]
                    // let phone = destination.split("&phone=")[1].split("&")[0]
                    // return window.location.href = `${checkoutDetail.checkoutUrl}?source=${blogWebId}&name=${name}&phone=${phone}`
                }
                setLoading(false)
                openPopup();

                // return window.location.href = `${checkoutDetail.checkoutUrl}?source=${blogWebId}&name=&phone=`
            } catch (err) {
                setLoading(false)
                openPopup();

                // return window.location.href = checkoutDetail.checkoutUrl;
            }
        } catch (error) {
            setLoading(false)
            return alert(error);
        }

    }

    return (<div className="py-5" id="form">

        {
            loading && <Load />
        }

        <div>
            <div className="max-w-2xl mx-auto px-3" id='form'>

                <h1 className="text-3xl text-center fw-bold mb-2 md:mb-6 text-white">कॉल पर विशेषज्ञ डॉक्टरों से मुफ्त सलाह के लिए फॉर्म भरें !</h1>
                <div className="" id='formcallhide'>
                    <div className="mx-auto max-w-5xl fontPoppins  bg-gray-100 px-4 py-6 border border-black rounded-lg ">
                        <div>
                            <div className="text-center mb-12">
                                <h1 className="text-center text-3xl font-bold inline-block border-b border-black"> Contact Us </h1>
                            </div>
                            <form className="space-y-3">
                                {CustomerDataValue?.map((data, key) => {
                                    return <div className="flex flex-col my-6" key={key}>
                                        <label className="font-semibold text-lg py-1">{data.label}</label>
                                        <div className="relative">
                                            <input {...data.inputValue} className={`p-1 py-3 border w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 ${data.icon ? 'pl-[3.5rem]' : ''}`} onChange={handleChange} value={CustomerData[data.inputValue.name]} />
                                            {data.icon && <span className={`${poppin.className} absolute transform translate-x-[-50%] translate-y-[-50%] top-1/2 left-5 border-r border-black px-2`}>{data.icon}</span>}
                                        </div>
                                    </div>
                                })}
                                <div className="flex justify-center items-center pt-4">
                                    <button onClick={handleFormSubmit} type="button" className="bg-[#ebc73b] text-xl px-3 pt-3 pb-2 md:w-72 w-full rounded-full hover:bg-black hover:text-white transition-colors font-bold">
                                        SUBMIT
                                    </button>
                                </div>

                            </form>
                        </div>
                    </div>

                </div>
                <AmaFlipDialog  type="ts" />

            </div>
        </div>
    </div>

    );
};

export default Formdata;
