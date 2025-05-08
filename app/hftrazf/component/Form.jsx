"use client";
import { Noto_Serif_Devanagari, Poppins } from "next/font/google";
import { useGlobalContext } from "@/app/statemanage/context";
import {
  CustomerDataValidator,
  CustomerDataValue,
} from "@/app/commonUse/FormDataValidation";
import axios from "axios";
import { useSearchParams } from "next/navigation";
import dynamic from "next/dynamic";
import Image from "next/image";

const noto = Noto_Serif_Devanagari({
  subsets: ["devanagari"],
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

// const Loading = dynamic(() => import('@/app/commonUse/loader/Loading'))

const AmaFlipDialog = dynamic(
  () => import("@/app/commonUse/AmaFlipDialog/AmaFlipDialog"),
  {
    loading: () => <p>load</p>,
  }
);

const FormLoader = dynamic(() => import("@/app/commonUse/loader/FormLoader"), {
  loading: () => <p>loader</p>,
});

const poppin = Poppins({
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const Form = () => {
  const searchParams = useSearchParams();

  const {
    CustomerData,
    setCustomerData,
    checkoutDetail,
    setLoading,
    openPopup,
    loading,
  } = useGlobalContext();

  const handleChange = async (e) => {
    setCustomerData({ ...CustomerData, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const getCustomData = CustomerDataValidator.JoiValidator(CustomerData);

      let check = await axios
        .get("https://api.ipify.org?format=json")
        .then((response) => {
          return response.data.ip;
        })
        .catch((error) => console.log(error));
      const formdata = new FormData();

      formdata.append("name", getCustomData.name);
      formdata.append("phone", getCustomData.phone);
      formdata.append("address", getCustomData.address);
      formdata.append("post", "Horsefiretablet.com/hftrazf");
      formdata.append("ip", check ? check : "");
      formdata.append("checkout_toogle", checkoutDetail.checkoutChecked);
      formdata.append(
        "blog_url",
        process.env.NEXT_APP_URL_HFTRAZF ?? "horsefiretablet.com/hftrazf"
      );

      // let tracker = searchParams.get("krt-tracker");
      const searchParamss_krt = searchParams.get("krt");
      const searchParamss_krttracker = searchParams.get("krttracker");

      searchParamss_krttracker &&
        formdata.append("conversions_tracking", searchParamss_krttracker);
      searchParamss_krt && formdata.append("conversions", searchParamss_krt);

      const searchParamss_hftevadev = searchParams.get("hftevadev");
      searchParamss_hftevadev &&
        formdata.append("hftevadev", searchParamss_hftevadev);

      try {
        const form = await fetch(
          `https://horsefiretablet.com/submitdata.php`,
          { body: formdata, method: "POST" }
        );
        const data = await form.json();

        const blogWebId = data.blogWebId ?? null;

        if (data.ok) {
          setLoading(false);

          openPopup();

          // let destination = decodeURI(data.destination);
          // let name = destination.split("?name=")[1].split("&")[0];
          // let phone = destination.split("&phone=")[1].split("&")[0];
          // return window.location.href = `${checkoutDetail.checkoutUrl}?source=${blogWebId}&name=${name}&phone=${phone}`;
        }
        // setLoading(false);
        openPopup();

        // return window.location.href = `${checkoutDetail.checkoutUrl}?source=${blogWebId}&name=&phone=`
      } catch (err) {
        // setLoading(false);
        openPopup();
        // return window.location.href = checkoutDetail.checkoutUrl;
      }
    } catch (error) {
      setLoading(false);
      return alert(error);
    }
  };

  return (
    <div className={noto.className}>
      <div className="" id="form">
        {loading && <FormLoader />}

        <div className="relative">
          <div className="relative z-10 max-w-7xl mx-auto py-7 sm:py-16 px-3">
            <p className="text-2xl sm:text-[2.7rem] text-white max-w-3xl mx-auto leading-tight text-center">
              बस पहला कदम बढ़ाए एक्सपर्ट से संपर्क करें बाकि सब कुछ आसान हो
              जायेगा !
            </p>

            <div className="grid sm:grid-cols-12 items-center gap-5 sm:gap-10 mt-5">
              <div className="sm:col-span-5">
                <div className="grid grid-cols-3 gap-5">
                  <img
                    src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/764d7a7f-9d20-4207-5147-992e0d75fd00/public"
                    width="100%"
                    height="100%"
                    loading="lazy"
                  />

                  <img
                    src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/6c1e8795-5b5c-4940-9c65-757e78389800/public"
                    width="100%"
                    height="100%"
                    loading="lazy"
                  />

                  <img
                    src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/b742eccb-ddaa-49f5-d3e0-afd8e7e7c500/public"
                    width="100%"
                    height="100%"
                    loading="lazy"
                  />
                </div>
                <h1 className="text-2xl md:text-[2.8rem] text-center text-white font-bold !leading-snug mt-5">
                  <span className="text-white">
                    कॉल पर विशेषज्ञ डॉक्टरों से
                  </span>{" "}
                  मुफ्त सलाह के लिए फॉर्म भरें !
                </h1>
                {/* <div className="inline-block bg-white rounded-full">
                  <div className=" py-2 px-3 fontAnton text-2xl sm:text-2xl font-bold text-red-600 flex gap-3 items-center ">
                    <img
                      src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/a5b7232d-b403-4321-8f23-ce516f5e9e00/public"
                      width="40px"
                      height="100%"
                      loading="lazy"
                    />
                    We Are Available Now
                  </div>
                </div> */}
              </div>

              <div className="sm:col-span-7">
                <div
                  className={`pb-4 text-black fontPoppins`}
                  id="formcallhide"
                >
                  <div className="max-w-2xl  md:mx-auto  bg-slate-50 p-3 border border-[#d6c1a5] rounded-2xl">
                    <div className="py-4">
                      <div className="text-center">
                        <h1 className=" text-4xl font-bold border-b mb-5 inline-block border-black">
                          {" "}
                          Contact Us{" "}
                        </h1>
                      </div>
                      <form className="space-y-3">
                        {CustomerDataValue?.map((data, key) => {
                          return (
                            <div className="flex flex-col" key={key}>
                              <label className="font-semibold text-xl py-1">
                                {data.label}
                              </label>
                              <div className="relative">
                                <input
                                  {...data.inputValue}
                                  className={`p-1 py-3 border border-black w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 ${
                                    data.icon ? "pl-[3.5rem]" : ""
                                  }`}
                                  onChange={handleChange}
                                  value={CustomerData[data.inputValue.name]}
                                />
                                {data.icon && (
                                  <span className="absolute ransform translate-x-[-50%] translate-y-[-50%] top-1/2 left-5 border-r border-black px-2">
                                    {data.icon}
                                  </span>
                                )}
                              </div>
                            </div>
                          );
                        })}

                        <div className="flex justify-center items-center pt-4 ">
                          <button
                            onClick={handleFormSubmit}
                            type="button"
                            className="bg-red-900 text-xl font-bold p-3 pt-3 md:w-72 w-full rounded-full hover:bg-red-950 transition-colors text-white"
                          >
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

          <Image
            src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/b6938457-3346-4dd7-be28-780fe00bb500/public"
            fill
            loading="lazy"
            fetchPriority="high"
          />
        </div>
        <AmaFlipDialog type="ts" />
      </div>
    </div>
  );
};

export default Form;
