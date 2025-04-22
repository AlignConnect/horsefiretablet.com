"use client";
import axios from 'axios';
import { useGlobalContext } from "@/app/statemanage/context";
import { CustomerDataValidator } from "@/app/commonUse/FormDataValidation";
import { useSearchParams } from "next/navigation";
import dynamic from 'next/dynamic';


// const Loading = dynamic(() => import('@/app/commonUse/loader/Loading'))

import { Noto_Serif_Devanagari } from "next/font/google";

const noto = Noto_Serif_Devanagari({
    subsets: ['devanagari'],
    display: 'swap',
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});


const FormLoader = dynamic(() => import('@/app/commonUse/loader/FormLoader'), {
    loading: () => <p>loader</p>
});

const AmaFlipDialog = dynamic(() => import('@/app/commonUse/AmaFlipDialog/AmaFlipDialog'), {
    loading: () => <p>async</p>
});





const Formbhfkt = () => {

    const searchParams = useSearchParams();

    const { CustomerData, setCustomerData, checkoutDetail, setLoading, loading, openPopup } = useGlobalContext();

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
            formdata.append("post", "Horsefiretablet.com/BHFKT");
            formdata.append("ip", check ? check : "");
            formdata.append("checkout_toogle", checkoutDetail.checkoutChecked);
            formdata.append("blog_url", process.env.NEXT_APP_URL_BHFKT ?? "horsefiretablet.com/bhfkt");

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

                // const blogWebId = data.blogWebId ?? null;

                if (data.ok) {
                    setLoading(false);

                    openPopup();


                    // let destination = decodeURI(data.destination);
                    // let name = destination.split("?name=")[1].split("&")[0];
                    // let phone = destination.split("&phone=")[1].split("&")[0];
                    // return window.location.href = `${checkoutDetail.checkoutUrl}?source=${blogWebId}&name=${name}&phone=${phone}`;
                }
                setLoading(false);
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

    return (
        <div className={`${noto.className} bg-slate-100`}>

            {
                loading && <FormLoader />
            }

            <div className="w-full md:max-w-3xl m-auto py-2 px-3">



                <form
                    onSubmit={handleFormSubmit}
                    className="bg-white px-10 py-4 rounded-xl shadow-xl" id='form'
                >

                    <div className='text-center'>

                        <div className='font-bold text-center text-2xl my-3 border-b-2 border-grey-500 inline-block'>
                            CONTACT US
                        </div>
                    </div>

                    <div className="flex flex-col">
                        <label htmlFor="name" className="text-xl pt-3">
                            नाम लिखिए
                        </label>
                        <input
                            className="bg-slate-100 pt-4 pb-2 outline-none px-2 focus:ring-2 focus:ring-red-400 rounded-lg "
                            type="text"
                            placeholder="Enter Your Name"
                            id="name"
                            name="name"
                            onChange={handleChange}
                        />

                    </div>
                    <div className="flex flex-col mt-2">
                        <label htmlFor="number" className="text-xl pt-3">
                            फ़ोन नंबर लिखिए
                        </label>
                        <input
                            className="bg-slate-100 pt-4 pb-2 outline-none px-2 focus:ring-2 focus:ring-red-400 rounded-lg "
                            type="text"
                            placeholder="Enter Your number"
                            id="number"
                            name="phone"
                            maxLength={10}
                            minLength={10}
                            onChange={handleChange} />
                    </div>
                    <div className="flex justify-center items-center mt-8">
                        <button
                            type="submit"
                            className="bg-red-600 hover:bg-red-600/90 text-white pt-3 pb-1 rounded-full w-full text-2xl shadow-lg shadow-red-500/60"
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>

            <AmaFlipDialog  type="ts" />

        </div>
    );
};

export default Formbhfkt;
