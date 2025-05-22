"use client"
import { useEffect, useState } from "react"
import { CustomerDataValidator, CustomerDataValue } from "@/app/commonUse/FormDataValidation";
import { useGlobalContext } from "@/app/statemanage/context";
import axios from "axios";
import { useSearchParams } from "next/navigation";
import dynamic from "next/dynamic";
import { Noto_Serif_Devanagari } from "next/font/google";

const FormLoader = dynamic(() => import('@/app/commonUse/loader/FormLoader'), {
    loading: () => <p>loader</p>
});

const noto = Noto_Serif_Devanagari({
    subsets: ['devanagari'],
    display: 'swap',
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});

const hfhForm = () => {

    const searchParams = useSearchParams()

    const { CustomerData, setCustomerData, checkoutDetail, setLoading, loading } = useGlobalContext();



    const [seconds, setseconds] = useState(59)
    const [minuts, setminuts] = useState(59)
    const [hour, sethour] = useState(0)



    const [dyna, setdyna] = useState(417)


    useEffect(() => {
        let Timer = setInterval(() => {
            const minut = new Date().getMinutes();
            const sec = new Date().getSeconds();
            setdyna(() => {
                return 417 + Math.floor((((minut * 60) + sec) * 150 / 3600))
            })


            setseconds(seconds - 1)
            if (seconds === 0) {
                setminuts(minuts - 1)
                setseconds(59)
            } if (minuts === 0) {
                sethour(hour + 1)
                setminuts(59)
                setseconds(59)
            }

            // eslint-disable-next-line 
        }, 1000)
        return () => {
            clearInterval(Timer)
        }
    })


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
            const formdata = new FormData();

            formdata.append("name", getCustomData.name);
            formdata.append("phone", getCustomData.phone);
            formdata.append("address", getCustomData.address);
            formdata.append("post", "Horsefiretablet.com/HFH");
            formdata.append("ip", check ? check : "");
            formdata.append("checkout_toogle", checkoutDetail.checkoutChecked);
            formdata.append("blog_url", process.env.NEXT_APP_URL_HFT ?? "horsefiretablet.com/HFH");

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

                const blogWebId = data.blogWebId ?? null;
                if (data.ok) {
                    setLoading(false);
                    // openPopup();
                    let destination = decodeURI(data.destination)
                    let name = destination.split("?name=")[1].split("&")[0]
                    let phone = destination.split("&phone=")[1].split("&")[0]
                    return window.location.href = `${checkoutDetail.checkoutUrl}?source=${blogWebId}&name=${name}&phone=${phone}`
                }
                setLoading(false);
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

        <section className={`${noto.className} w-full md:w-[768px] mx-auto`}>


            {
                loading && <FormLoader />
            }


            <div className='hurry'>
                HURRY...ONLY A FEW PACKS LEFT
            </div>


            <div className='w-full text-center'>
                <img src={"https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/76524200-84b7-4073-d480-cc37ea8da400/public"} width={300} height={300} loading="lazy" className="mx-auto " />

            </div>

            <div className='text-center pt-4 pb-2 text-xl'>ऑफर ख़त्म होने से पहले ऑर्डर करे </div>

            <h3 className='timing_out'>{"00" + ":" + minuts + ":" + seconds}</h3>


            <div className="my-4" id="form">
                <div className="" id='formcallhide'>
                    <div className="bg-white rounded-md p-5 m-3">
                        <div className="py-4">
                            <div className="text-center">
                                <h1 className="text-xl md:text-4xl text-black font-bold  mb-5"><span className="text-[red]">HORSEFIRE TABLET</span>&nbsp;के बारे में एक्सपर्ट्स से अधिक जानकारी के लिए फॉर्म भरें</h1>
                            </div>
                            <form className="space-y-3">

                                {CustomerDataValue?.map((data, key) => {
                                    return <div className="flex flex-col" key={key}>
                                        <label className="input_label font-black text-xl">{data.label}</label>
                                        <div className="relative">
                                            <input {...data.inputValue} className={`input_ text-lg ${data.icon ? 'pl-[3.5rem]' : 'pl-[10px]'}`} onChange={handleChange} value={CustomerData[data.inputValue.name]} />
                                            {data.icon && <span className="absolute text-black ransform translate-x-[-50%] translate-y-[0%] top-[10px] left-5 border-r border-black px-2">{data.icon}</span>}
                                        </div>
                                    </div>
                                })}

                                <div className="flex justify-center items-center pt-4 ">
                                    <button onClick={handleFormSubmit} type="button" className="Sub_btn">
                                        ORDER NOW
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>


        </section>

    )
}

export default hfhForm;