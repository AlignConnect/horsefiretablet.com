"use client";
import { Khand, Poppins } from 'next/font/google';
import { useGlobalContext } from "@/app/statemanage/context";
import { CustomerDataValidator, CustomerDataValue } from "@/app/commonUse/FormDataValidation";
import axios from 'axios';
import { useSearchParams } from "next/navigation";
import dynamic from 'next/dynamic';

const AmaFlipDialog = dynamic(() => import('@/app/commonUse/AmaFlipDialog/AmaFlipDialog'), {
    loading: () => <p>load</p>
});

// const ImageAlert = dynamic(() => import('../PowerComponent/ImageAlert'), {
//     loading: () => <p>load</p>
// });

const FormLoader = dynamic(() => import('@/app/commonUse/loader/FormLoader'), {
    loading: () => <p>loader</p>
});



const poppin = Poppins({
    subsets: ['latin'],
    display: 'swap',
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});

const khand = Khand({
    subsets: ['latin'],
    display: 'swap',
    weight: ['300', '400', '500', '600', '700',]
});

const Form = () => {
    const searchParams = useSearchParams()

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
            }).catch(error => console.log(error))
            const formdata = new FormData()

            formdata.append("name", getCustomData.name)
            formdata.append("phone", getCustomData.phone)
            formdata.append("address", getCustomData.address)
            formdata.append("post", "Horsefiretablet.com/HFLIP")
            formdata.append("ip", check ? check : "")
            formdata.append("checkout_toogle", checkoutDetail.checkoutChecked)
            formdata.append("blog_url", process.env.NEXT_APP_URL_HFLIP ?? "horsefiretablet.com/hflip")

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

                // const blogWebId = data.blogWebId ?? null;

                if (data.ok) {
                    setLoading(false)

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
                setLoading(false);
                openPopup();
                // return window.location.href = checkoutDetail.checkoutUrl;
            }
        } catch (error) {
            setLoading(false);
            return alert(error);
        }

    }

    return (<div className="mt-4 pb-5 bg-black" id="form">

        {
            loading && <FormLoader />
        }


        <div className={`relative ${poppin.className}`}>
            <div className="relative z-[10] font-semibold  text-2xl md:text-4xl text-white py-3 md:py-5 ">
                <div className="flex gap-1 justify-center items-center">
                    <div className={`${khand.className}`}>
                        <h1 className="text-6xl md:text-8xl md:!leading-none" style={{ textShadow: 'black 1px 1px 1px' }}>10%</h1>
                    </div>
                    <div className="">
                        <p className="text-[yellow] !leading-none">DISCOUNT ON</p>
                        <p className="!leading-none">PREPAID ORDER</p>
                    </div>
                </div>
            </div>

            {/* <div className='absolute w-full h-full top-0 left-0'>
                <ImageAlert handleimage={"/main/hflip_images/line.jpg"} />
            </div> */}
            <div className='absolute w-full h-full top-0 left-0'>
                <img src={"/main/hflip_images/line.jpg"} className='h-[70px] md:h-[120px] w-full' />
            </div>

        </div>

        <h1 className="text-2xl md:text-4xl text-center bg-black text-white font-bold px-2 py-5 md:pt-10"><div className=" max-w-xl mx-auto">कॉल पर विशेषज्ञ डॉक्टरों से मुफ्त सलाह के लिए फॉर्म भरें !</div></h1>

        <div className={`pb-4 text-black ${poppin.className}`} id='formcallhide'>
            <div className="max-w-2xl mx-4 md:mx-auto  bg-slate-50 p-3 border border-[#d6c1a5] ">
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
