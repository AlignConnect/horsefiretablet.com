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


const AmaFlipDialogEng = dynamic(() => import('@/app/commonUse/AmaFlipDialog/AmaFlipDialogEng'), {
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

            formdata.append("name", getCustomData.name)
            formdata.append("phone", getCustomData.phone)
            formdata.append("address", getCustomData.address)
            formdata.append("post", "Horsefiretablet.com/ENGHFT")
            formdata.append("ip", check ? check : "")
            formdata.append("checkout_toogle", checkoutDetail.checkoutChecked)
            formdata.append("blog_url", process.env.NEXT_APP_URL_ENGHFT ?? "horsefiretablet.com/enghft")

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
                    return window.location.href = `${checkoutDetail.checkoutUrl}?source=${blogWebId}&name=${name}&phone=${phone}`
                    // return openPopup();

                }
                setLoading(false)
                return window.location.href = `${checkoutDetail.checkoutUrl}?source=${blogWebId}&name=&phone=`
                // return openPopup();

            } catch (err) {
                setLoading(false)
                return window.location.href = checkoutDetail.checkoutUrl;
                // return openPopup();

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

            <div className="bg-[#eeca40] fontPoppins">
                
                    <div className="max-w-5xl mx-auto py-5 md:py-24 px-2 lg:px-0">


                        <div className="grid sm:grid-cols-12 m-0 gap-5 lg:gap-20 items-center">
                            <div className=" sm:col-span-6 text-center">

                                    <div className=" p-3 sm:py-10 sm:px-5">
                                        <span className="text-white bg-[red] px-4 sm:px-6 py-1 sm:py-0 text-xl sm:text-5xl rounded-full  font-bold">&#33;</span>
                                        <p className="text-2xl sm:text-3xl font-bold mt-5 sm:mt-10">BEWARE TO DUPLICATES</p>
                                        <p className="text-[0.9rem] sm:text-xl text-justify mt-3">Many fake products are listed online due to the Horse Fire Tablet's popularity. Buy carefully AR Ayurveda brand Horse Fire Tablets for better results!</p>
                                    </div>
                            </div>
                            <div className=" sm:col-span-6 order-1 sm:order-2" id='form'>
                                <h1 className=" uppercase text-[1rem] md:text-2xl text-black fw-bold mb-3 font-extrabold text-center ">Fill out the form for a free On-call doctor consultation!</h1>
                                <div className="form_shaddow " id='formcallhide'>
                                    <div className="mx-auto   bg-white px-4 py-6 border rounded-lg ">
                                        <div>
                                            <div className="text-center mb-12">
                                                <h1 className="text-center text-3xl font-bold inline-block border-bottom border-black"> Contact Us </h1>
                                            </div>
                                            <form className="space-y-3">
                                                {CustomerDataValue?.map((data, key) => {
                                                    return <div className="flex flex-col my-6" key={key}>
                                                        <label className="font-semibold text-sm py-1">{data.label}</label>
                                                        <div className="relative">
                                                            <input {...data.inputValue} className={`p-1 py-3 border border-black w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 ${data.icon ? 'pl-[3.7rem]' : 'pl-2'}`} onChange={handleChange} value={CustomerData[data.inputValue.name]} />
                                                            {data.icon && <span className="absolute ransform translate-x-[-50%] translate-y-[-50%] top-1/2 left-6 border-r border-black px-2">{data.icon}</span>}
                                                        </div>
                                                    </div>
                                                })}
                                                <div className="flex justify-center items-center pt-4 ">
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
            </div>
            <AmaFlipDialogEng type="english"  />
        </div>


    );
};

export default Form;
