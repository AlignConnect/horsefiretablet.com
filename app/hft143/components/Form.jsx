"use client";
import { Poppins } from 'next/font/google';
import { useGlobalContext } from "@/app/statemanage/context";
import { CustomerDataValidator, CustomerDataValue } from "@/app/commonUse/FormDataValidation";
import axios from 'axios';
import { useSearchParams } from "next/navigation";
import dynamic from 'next/dynamic';


// const Loading = dynamic(() => import('@/app/commonUse/loader/Loading'))

const AmaFlipDialog = dynamic(() => import('@/app/commonUse/AmaFlipDialog/AmaFlipDialog'), {
    loading: () => <p>load</p>
});

const FormLoader = dynamic(() => import('@/app/commonUse/loader/FormLoader'), {
    loading: () => <p>loader</p>
});



const poppin = Poppins({
    subsets: ['latin'],
    display: 'swap',
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
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
            formdata.append("post", "Horsefiretablet.com/HFT143");
            formdata.append("ip", check ? check : "");
            formdata.append("checkout_toogle", checkoutDetail.checkoutChecked);
            formdata.append("blog_url", process.env.NEXT_APP_URL_HFT143 ?? "horsefiretablet.com/hft143");

            // let tracker = searchParams.get("krt-tracker");
            const searchParamss_krt = searchParams.get("krt");
            const searchParamss_krttracker = searchParams.get("krttracker");

            searchParamss_krttracker && formdata.append('conversions_tracking', searchParamss_krttracker);
            searchParamss_krt && formdata.append("conversions", searchParamss_krt);

            const searchParamss_hftevadev = searchParams.get("hftevadev");
            searchParamss_hftevadev && formdata.append("hftevadev", searchParamss_hftevadev);

            try {
                const form = await fetch(`https://horsefiretablet.com/submitdata.php`, { body: formdata, method: "POST" });
                const data = await form.json();

                const blogWebId = data.blogWebId ?? null;
                if (data.ok) {
                    setLoading(false);

                    // openPopup();


                    let destination = decodeURI(data.destination);
                    let name = destination.split("?name=")[1].split("&")[0];
                    let phone = destination.split("&phone=")[1].split("&")[0];
                    return window.location.href = `${checkoutDetail.checkoutUrl}?source=${blogWebId}&name=${name}&phone=${phone}`;
                }
                setLoading(false);
                // openPopup();

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

        <section className='w-full max-w-2xl mx-auto'>

            {
                loading && <FormLoader />
            }
            <div className="bg-[#e5eae4] pb-10 md:px-2" id="form">

                <div className="text-center py-5">
                    <h1 className="text-[1.5rem] md:text-3xl font-bold  text-black">कॉल पर विशेषज्ञ डॉक्टरों से<br /> मुफ्त सलाह के लिए फॉर्म भरें!</h1>
                </div>
                <div className="text-black " id='formcallhide' >
                    <div className="bg-white max-w-2xl mx-2 md:mx-12 md:px-4 px-1 rounded-md" style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}>
                        <div className="py-5">
                            <div className="text-center">
                                <h1 className=" text-3xl md:text-4xl font-bold mb-5 inline-block fontPoppins"> Contact Us </h1>
                            </div>
                            <form className="space-y-3 px-2">

                                {CustomerDataValue?.map((data, key) => {
                                    return <div className="flex flex-col" key={key}>
                                        <label className="font-semibold font text-left  py-1">{data.label}</label>
                                        <div className="relative z-20">
                                            <input {...data.inputValue} className={`px-1 py-3 border border-black w-full rounded-lg  ${data.icon ? 'pl-[3.5rem]' : ''}`} onChange={handleChange} value={CustomerData[data.inputValue.name]} />
                                            {data.icon && <span className="absolute fontPoppins ransform translate-x-[-50%] translate-y-[-50%] top-1/2 left-5 border-r border-black px-2">{data.icon}</span>}
                                        </div>
                                    </div>
                                })}

                                <div className="flex justify-center items-center pt-6 ">
                                    <button onClick={handleFormSubmit} type="button" className="z-20 fontPoppins text-2xl font-bold p-3 pt-2 md:w-72 w-full rounded-md bg-black text-white">
                                        SUBMIT
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

                <AmaFlipDialog />

            </div>
        </section >

    );
};

export default Form;
