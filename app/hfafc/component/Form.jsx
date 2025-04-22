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

const Fliama = dynamic(() => import('@/app/hfafc/component/FlipAmazon'));

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
            formdata.append("post", "Horsefiretablet.com/hfafc")
            formdata.append("ip", check ? check : "")
            formdata.append("checkout_toogle", checkoutDetail.checkoutChecked)
            formdata.append("blog_url", process.env.NEXT_APP_URL_HFAFC ?? "horsefiretablet.com/hfafc")

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
                    setLoading(false)
                    let destination = decodeURI(data.destination)
                    let name = destination.split("?name=")[1].split("&")[0]
                    let phone = destination.split("&phone=")[1].split("&")[0]
                    // return window.location.href = `${checkoutDetail.checkoutUrl}?source=${blogWebId}&name=${name}&phone=${phone}`
                    return openPopup();

                }
                setLoading(false)
                // return window.location.href = `${checkoutDetail.checkoutUrl}?source=${blogWebId}&name=&phone=`
                return openPopup();

            } catch (err) {
                setLoading(false)
                // return window.location.href = checkoutDetail.checkoutUrl;
                return openPopup();

            }
        } catch (error) {
            setLoading(false)
            return alert(error);
        }

    }





    return (
        <div>

            {/* {
                loading && <Load />
            } */}

            <div className="fontNoto"  >

                <div className="grid grid-cols-12 m-0 gap-6 items-center">
                    <div className="col-span-12 md:col-span-6  mt-1 md:mt-0">
                        <img src='https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/06983dc6-573d-4939-f688-a9c704964700/public' alt="pic" width='100%' height='100%' className='rouded-xl' loading='lazy' />
                    </div>
                    <div className="col-span-12 md:col-span-6">


                        <div className="block sm:hidden">
                            <Fliama />
                        </div>

                        <div className=" " id='formcallhide'>

                            {/* <h1 className=" text-3xl md:text-4xl text-yellow-400 text-center fw-bold mb-2 md:mb-6 font-extrabold">कॉल पर विशेषज्ञ डॉक्टरों से मुफ्त सलाह के लिए फॉर्म भरें!</h1> */}


                            <div className="mx-auto font-poppin  bg-transparent px-4 py-6  rounded-lg ">
                                <div>
                                    <div className="text-start mb-5 sm:mb-5">
                                        <h1 className=" text-4xl font-bold fontAnton"> Contact Us </h1>
                                        <p className="pt-5 text-xl sm:text-4xl text-gray-700">Provide Your Details and we will get back to you</p>
                                    </div>
                                    <form className="space-y-3">
                                        {CustomerDataValue?.map((data, key) => {
                                            return <div className="flex flex-col my-6" key={key}>
                                                {/* <label className="font-semibold text-md py-1">{data.label}</label> */}
                                                <div className="relative bg-[#ffe401] rounded-2xl">
                                                    <input {...data.inputValue} placeholder={data.label} className={`text-black text-xl fontNoto bg-transparent rounded-md px-4 py-5 w-full  focus:outline-none  ${data.icon ? 'pl-[3.5rem]' : ''}`} onChange={handleChange} value={CustomerData[data.inputValue.name]} />
                                                    {data.icon && <span className="absolute ransform translate-x-[-50%] translate-y-[-50%] top-1/2 left-5 border-r border-black px-2">{data.icon}</span>}
                                                </div>
                                            </div>
                                        })}
                                        <div className="flex items-center pt-4 ">
                                            <button onClick={handleFormSubmit} type="button" className="bg-black text-xl font-bold p-3 pt-3 md:w-72 w-full rounded-xl hover:bg-[#293a6e]/80 transition-colors text-white">
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

            <AmaFlipDialog type={"ts"} />

        </div>


    );
};

export default Form;
