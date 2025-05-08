import { Noto_Serif_Devanagari, Poppins } from 'next/font/google';
import { CustomerDataValidator, CustomerDataValue } from "@/app/commonUse/FormDataValidation";
import { useGlobalContext } from '@/app/statemanage/context';
import { useSearchParams } from 'next/navigation';
import React, { useState } from 'react'
import axios from 'axios';
import dynamic from 'next/dynamic';

const XFace = dynamic(() => import('@/app/commonUse/loader/FormLoader'), {
    loading: () => <p>loader</p>
});


const noto = Noto_Serif_Devanagari({
    subsets: ['devanagari'],
    display: 'swap',
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});

const poppins = Poppins({
    subsets: ['devanagari'],
    display: 'swap',
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});



const Form = () => {

    const { CustomerData, setCustomerData, checkoutDetail, loading, setLoading, isPopupOpen, openPopup, closePopup } = useGlobalContext();

    const searchParams = useSearchParams();

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
            formdata.append("post", "horsefiretablet.com/HFP")
            formdata.append("ip", check ? check : "")
            formdata.append("checkout_toogle", checkoutDetail.checkoutChecked)
            formdata.append("blog_url", process.env.NEXT_APP_URL_HFP ?? "horsefiretablet.com/hfp")

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
                    // openPopup();
                    let destination = decodeURI(data.destination)
                    let name = destination.split("?name=")[1].split("&")[0]
                    let phone = destination.split("&phone=")[1].split("&")[0]
                    return window.location.href = `${checkoutDetail.checkoutUrl}?source=${blogWebId}&name=${name}&phone=${phone}`
                }
                setLoading(false)
                return window.location.href = `${checkoutDetail.checkoutUrl}?source=${blogWebId}&name=&phone=`
            } catch (err) {
                setLoading(false)
                // openPopup();
                return window.location.href = checkoutDetail.checkoutUrl;
            }
        } catch (error) {
            setLoading(false)
            return alert(error);
        }

    }



    const [sell, setsell] = useState(70);

    const minutes = new Date().getMinutes();
    const secondss = new Date().getSeconds();

    const total = minutes * 60 + secondss;
    const totalhourseconds = 3600;

    setTimeout(() => {
        const x = Math.ceil((total * 15) / totalhourseconds);
        setsell(x + 70);
    }, 1000);


    return (

        <section>

            {
                loading && <XFace />
            }

            <div className='back-ten w-full h-[1020px] md:h-auto'>

                <div className='br-back'>

                    <div className="expert">

                        <h1 className='muft' >एक्सपर्ट्स से मुफ्त परामर्श पाने के लिए फॉर्म भरें !</h1>

                        <div className='text-center grid grid-cols-12 py-[20px]' >

                            <div className='col-span-12 md:col-span-6'>
                            </div>
                            <div className='col-span-12 md:col-span-6 order-last'>


                                <form className="p-form d-inline-block text-start bg-white" id='form'>

                                    <h1 className='text-center py-[30px] font-black text-3xl'>CONTACT US</h1>



                                    {CustomerDataValue?.map((data, key) => {
                                        return <div key={key} className='both-form'>
                                            <div className="relative">
                                                <label htmlFor="text" className={`${noto.className} form-both-label`} >{data.label}</label>
                                                <input {...data.inputValue} id="text" className={`${poppins.className} input_ py-2 ${data.icon ? 'pl-[3.5rem]' : 'pl-[10px]'}`} placeholder="आपका नाम लिखिए..." required onChange={handleChange} value={CustomerData[data.inputValue.name]} />
                                                {data.icon && <span className="absolute transform translate-x-[-50%] translate-y-[10%] md:translate-y-[40%] top-1/2 left-5 border-r border-black px-2">{data.icon}</span>}
                                            </div>

                                        </div>
                                    })}

                                    <div className='both-form text-center'>
                                        <button type="submit" className='sb-btn' onClick={handleFormSubmit}>SUBMIT</button>
                                    </div>


                                    <div className='text-center py-3'>
                                        <div className='text-center my-3 flex justify-center items-center'>

                                            <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/f4f5e12f-c83e-4528-fada-b87270d74100/public" alt="no" width="21px" />
                                            <div className='font-bold text-base md:text-xl' >
                                                &nbsp; {sell} People Ordered Online in Last 1 Hour
                                            </div>
                                        </div>
                                    </div>




                                </form>

                            </div>


                        </div>
                    </div>
                </div>
            </div>



        </section>
    )
}

export default Form;