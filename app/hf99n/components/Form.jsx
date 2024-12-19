"use client";
import { useGlobalContext } from "@/app/statemanage/context";
import { CustomerDataValidator, CustomerDataValue } from "@/app/commonUse/FormDataValidation";
import axios from 'axios';
import { useSearchParams } from "next/navigation";
import { MdOutlineSupportAgent } from "react-icons/md";
import dynamic from "next/dynamic";

const Load = dynamic(() => import("@/app/commonUse/loader/FormLoader"), {
    loading: () => <p>df</p>
});

const AmaFlipDialog = dynamic(() => import('@/app/commonUse/AmaFlipDialog/AmaFlipDialog'), {
    loading: () => <p>load</p>
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
            formdata.append("post", "Horsefiretablet.com/HF99N")
            formdata.append("ip", check ? check : "")
            formdata.append("checkout_toogle", checkoutDetail.checkoutChecked)
            formdata.append("blog_url", process.env.NEXT_APP_URL_HF99N ?? "horsefiretablet.com/hf99n")

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
                    setLoading(false);
                    openPopup();
                }
                setLoading(false);
                openPopup();
            } catch (err) {
                setLoading(false);
                openPopup();
            }
        } catch (error) {
            setLoading(false)
            return alert(error);
        }

    }

    return (
        <div id="form" >

            {
                loading && <Load />
            }

            <div className="fontNoto"  >

                <div className="grid grid-cols-12 m-0 gap-6 items-center">
                    <div className="col-span-12 md:col-span-6  mt-1 md:mt-0">
                        <img src='/main/hf99_images/pro4.webp' alt="pic" width='100%' height='100%' className='rouded-xl' loading='lazy' />
                    </div>
                    <div className="col-span-12 md:col-span-6" id='form'>
                        <div className=" " id='formcallhide'>

                            <h1 className=" text-3xl md:text-4xl text-yellow-400 text-center fw-bold mb-2 md:mb-6 font-extrabold">कॉल पर विशेषज्ञ डॉक्टरों से मुफ्त सलाह के लिए फॉर्म भरें!</h1>


                            <div className="mx-auto font-poppin  bg-white px-4 py-6 border rounded-lg ">
                                <div>
                                    <div className="text-center mb-5 sm:mb-10">
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

                </div>
            </div>
            <AmaFlipDialog  type="ts" />

        </div>


    );
};

export default Form;
