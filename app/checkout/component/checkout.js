import axios from "axios";
import Joi from "joi";
export class CheckoutFile {
  constructor() {}

  static getCheckOutData = async ({
    APP_API_URL,
    get_next_key,
    get_next_url,
  }) => {
    const url =
      process.env.NEXT_APP_API_URL +
      "product/fetch_with_api_key?api_key=" +
      get_next_key;

    const res = await fetch(url, {
      headers: {
        web_site_url: get_next_url,
      },
    });

    if (!res.ok) {
      throw new Error("Interal Server Error Please Try out After some Time");
    }

    return await res.json();
  };

  //this is for joi validation

  static joiValidator = (formdata) => {
    const schema = Joi.object({
      name: Joi.string().trim().required(),
      phone: Joi.string()
        .regex(/^[6-9]\d{9}$/)
        .required()
        .messages({ "string.regex": "Please Fill Correct Value" }),
      email: Joi.string().allow("").default(""),
      pincode: Joi.number().required(),
      city: Joi.string().required(),
      state: Joi.string().required(),
      address: Joi.string(),
    });

    const { error, value } = schema.validate(formdata, {
      allowUnknown: false,
      abortEarly: true,
      stripUnknown: false,
    });

    if (error) {
      throw error.message;
    }
    return value;
  };

  // this is for generate pincode ,city and state

  static PincodeValidation = async (pincodevalue) => {
    const url = "https://api.postalpincode.in/pincode/" + Number(pincodevalue);
    const pinCode = await fetch(url)
      .then((v) => v)
      .then((response) => response.json())
      .catch((err) => err);
    if (pinCode && pinCode[0] && pinCode[0]?.Status === "Success") {
      return {
        pincode: pincodevalue,
        state: pinCode ? pinCode[0]?.PostOffice[0]?.State : "",
        city: pinCode ? pinCode[0]?.PostOffice[0]?.District : "",
        status: true,
      };
    } else {
      return { pincode: pincodevalue, status: false };
    }
  };

  //this is for create order in brahmikalp

  static createOrder = async (formdata) => {
    const orderData = {
      customer_name: formdata.name,
      customer_phone: String(formdata.phone),
      customer_email: "",
      customer_address: formdata.address,
      pincode: String(formdata.pincode),
      state: formdata.state,
      city: formdata.city,
      postOffice: null,
      product: formdata.id,
      product_name: formdata.product_name,
      price: formdata.price,
      discount: formdata.discount,
      totalPrice: formdata.price - formdata.discount,
      payment_mode: formdata.online ? "online" : "cod",
      form_id: null,
    };

    try {
      const { get_next_url, get_next_key } = handleCheckApiKey();

      const url =
        process.env.NEXT_APP_API_URL + "order/create?api_key=" + get_next_key;

      const response = await axios.post(url, orderData, {
        headers: {
          "Content-Type": "application/json",
          web_site_url: get_next_url,
        },
      });

      return response;
    } catch (error) {
      throw error.message;
    }
  };

  static PaymentInitial = (paymentdata, setalertVerify) => {
    const options = {
      key: paymentdata.razorpay_key_id,
      amount: paymentdata.amount,
      name: paymentdata.product_name,
      description: "X - Transaction",
      image: window.location.origin + paymentdata.img,
      order_id: paymentdata.id,
      notes: { merchant_order_id: "SGI-" + paymentdata.OrderId },
      prefill: {
        name: paymentdata.customer_name,
        email: paymentdata.customer_email,
        contact: paymentdata.customer_phone,
      },
      handler: async (response) => {
        response["receipt"] = paymentdata.receipt;

        try {
          const { get_next_url, get_next_key } = handleCheckApiKey();

          const { data } = await axios.post(
            `${process.env.NEXT_APP_API_URL}order/verify?api_key=${get_next_key}`,
            response,
            { headers: { web_site_url: get_next_url } }
          );

          if (data.message === "Payment verified successfully") {
            //  setalertVerify((e) => ({ open: true, message: "Payment Success" }))
            // return alert("PAYMENT SUCCESS")

            return (window.location.href = `${process.env.NEXT_APP_URL}/order-status?orderId=${paymentdata?.OrderId}`);
          } else {
            // return setalertVerify((e) => ({ open: true, message: "Payment Failed" }))
            return alert("PAYMENT FAILED");
          }
        } catch (error) {
          // return setalertVerify((e) => ({ open: true, message: "Something Went Wrong" }))
          return alert("PAYMENT CATCH FAILED");
        }
      },
      theme: {
        color: "#3399cc",
      },
    };

    const rzp1 = new window.Razorpay(options);

    rzp1.on("payment.failed", function (response) {
      options.handler(response);
    });
    rzp1.open();
  };
}

//this function used to checkapi before the order create

export const handleCheckApiKey = () => {
  let get_next_url = "";
  let get_next_key = "";

  const apicheck = localStorage.getItem("PATH_KEY");

  if (!apicheck) {
    get_next_url = process.env.NEXT_APP_URL;
    get_next_key = process.env.NEXT_APP_API_KEY;
  } else {
    switch (apicheck) {
      case "/":
        get_next_url = process.env.NEXT_APP_URL;
        get_next_key = process.env.NEXT_APP_API_KEY;
        break;

      case "/hfo":
        get_next_url = process.env.NEXT_APP_URL_HFO;
        get_next_key = process.env.NEXT_APP_API_KEY_HFO;
        break;

      case "/hftsrh":
        get_next_url = process.env.NEXT_APP_URL_HFTSRH;
        get_next_key = process.env.NEXT_APP_API_KEY_HFTSRH;
        break;

      case "/hfu":
        get_next_url = process.env.NEXT_APP_URL_HFU;
        get_next_key = process.env.NEXT_APP_API_KEY_HFU;
        break;

      case "/hfd":
        get_next_url = process.env.NEXT_APP_URL_HFD;
        get_next_key = process.env.NEXT_APP_API_KEY_HFD;
        break;

      case "/hxt":
        get_next_url = process.env.NEXT_APP_URL_HXT;
        get_next_key = process.env.NEXT_APP_API_KEY_HXT;
        break;

      case "/hft":
        get_next_url = process.env.NEXT_APP_URL_HFT;
        get_next_key = process.env.NEXT_APP_API_KEY_HFT;
        break;

      case "/hfq":
        get_next_url = process.env.NEXT_APP_URL_HFQ;
        get_next_key = process.env.NEXT_APP_API_KEY_HFQ;
        break;

      case "/hfh":
        get_next_url = process.env.NEXT_APP_URL_HFH;
        get_next_key = process.env.NEXT_APP_API_KEY_HFH;
        break;

      case "/hflip":
        get_next_url = process.env.NEXT_APP_URL_HFLIP;
        get_next_key = process.env.NEXT_APP_API_KEY_HFLIP;
        break;

      case "/hfkt":
        get_next_url = process.env.NEXT_APP_URL_HFKT;
        get_next_key = process.env.NEXT_APP_API_KEY_HFKT;
        break;

      case "/hfkrt":
        get_next_url = process.env.NEXT_APP_URL_HFKRT;
        get_next_key = process.env.NEXT_APP_API_KEY_HFKRT;
        break;

      case "/hfkart":
        get_next_url = process.env.NEXT_APP_URL_HFKART;
        get_next_key = process.env.NEXT_APP_API_KEY_HFKART;
        break;

      case "/hkart":
        get_next_url = process.env.NEXT_APP_URL_HKART;
        get_next_key = process.env.NEXT_APP_API_KEY_HKART;
        break;

      case "/hfp":
        get_next_url = process.env.NEXT_APP_URL_HFP;
        get_next_key = process.env.NEXT_APP_API_KEY_HFP;
        break;

      case "/hfb":
        get_next_url = process.env.NEXT_APP_URL_HFB;
        get_next_key = process.env.NEXT_APP_API_KEY_HFB;
        break;

      case "/bhf":
        get_next_url = process.env.NEXT_APP_URL_BHF;
        get_next_key = process.env.NEXT_APP_API_KEY_BHF;
        break;

      case "/bhfkt":
        get_next_url = process.env.NEXT_APP_URL_BHFKT;
        get_next_key = process.env.NEXT_APP_API_KEY_BHFKT;
        break;

      case "/hfs":
        get_next_url = process.env.NEXT_APP_URL_HFS;
        get_next_key = process.env.NEXT_APP_API_KEY_HFS;
        break;

      case "/ahf":
        get_next_url = process.env.NEXT_APP_URL_AHF;
        get_next_key = process.env.NEXT_APP_API_KEY_AHF;
        break;

      case "/ahfkt":
        get_next_url = process.env.NEXT_APP_URL_AHFKT;
        get_next_key = process.env.NEXT_APP_API_KEY_AHFKT;
        break;

      case "/hfe":
        get_next_url = process.env.NEXT_APP_URL_HFE;
        get_next_key = process.env.NEXT_APP_API_KEY_HFE;
        break;

      case "/hfk":
        get_next_url = process.env.NEXT_APP_URL_HFK;
        get_next_key = process.env.NEXT_APP_API_KEY_HFK;
        break;

      case "/hfm":
        get_next_url = process.env.NEXT_APP_URL_HFM;
        get_next_key = process.env.NEXT_APP_API_KEY_HFM;
        break;

      case "/cjhf":
        get_next_url = process.env.NEXT_APP_URL_CJHF;
        get_next_key = process.env.NEXT_APP_API_KEY_CJHF;
        break;

      case "/hf01a":
        get_next_url = process.env.NEXT_APP_URL_HF01A;
        get_next_key = process.env.NEXT_APP_API_KEY_HF01A;
        break;

      // HF369A

      case "/hf369clickadu":
        get_next_url = process.env.NEXT_APP_URL_HF369CLICKADU;
        get_next_key = process.env.NEXT_APP_API_KEY_HF369CLICKADU;
        break;

      case "/hf69h":
        get_next_url = process.env.NEXT_APP_URL_HF69H;
        get_next_key = process.env.NEXT_APP_API_KEY_HF69H;
        break;

      case "/hf69hcadu":
        get_next_url = process.env.NEXT_APP_URL_HF69HCADU;
        get_next_key = process.env.NEXT_APP_API_KEY_HF69HCADU;
        break;

      case "/hf99":
        get_next_url = process.env.NEXT_APP_URL_HF99;
        get_next_key = process.env.NEXT_APP_API_KEY_HF99;
        break;

      case "/hf99n":
        get_next_url = process.env.NEXT_APP_URL_HF99N;
        get_next_key = process.env.NEXT_APP_API_KEY_HF99N;
        break;

      case "/hftsin":
        get_next_url = process.env.NEXT_APP_URL_HFTSIN;
        get_next_key = process.env.NEXT_APP_API_KEY_HFTSIN;
        break;

      case "/hftdel":
        get_next_url = process.env.NEXT_APP_URL_HFTDEL;
        get_next_key = process.env.NEXT_APP_API_KEY_HFTDEL;
        break;

      case "/hf71":
        get_next_url = process.env.NEXT_APP_URL_HF71;
        get_next_key = process.env.NEXT_APP_API_KEY_HF71;
        break;

      case "/hf71n":
        get_next_url = process.env.NEXT_APP_URL_HF71N;
        get_next_key = process.env.NEXT_APP_API_KEY_HF71N;
        break;

      case "/hft01doc":
        get_next_url = process.env.NEXT_APP_URL_HFT01DOC;
        get_next_key = process.env.NEXT_APP_API_KEY_HFT01DOC;
        break;

      case "/hft01fdoc":
        get_next_url = process.env.NEXT_APP_URL_HFT01FDOC;
        get_next_key = process.env.NEXT_APP_API_KEY_HFT01FDOC;
        break;

      case "/hftsx":
        get_next_url = process.env.NEXT_APP_URL_HFTSX;
        get_next_key = process.env.NEXT_APP_API_KEY_HFTSX;
        break;

      case "/hftsxf":
        get_next_url = process.env.NEXT_APP_URL_HFTSXF;
        get_next_key = process.env.NEXT_APP_API_KEY_HFTSXF;
        break;

      case "/hfrush":
        get_next_url = process.env.NEXT_APP_URL_HFRUSH;
        get_next_key = process.env.NEXT_APP_API_KEY_HFRUSH;
        break;

      case "/hftxc":
        get_next_url = process.env.NEXT_APP_URL_HFTXC;
        get_next_key = process.env.NEXT_APP_API_KEY_HFTXC;
        break;

      case "/hfopt":
        get_next_url = process.env.NEXT_APP_URL_HFOPT;
        get_next_key = process.env.NEXT_APP_API_KEY_HFOPT;
        break;

      case "/hxb":
        get_next_url = process.env.NEXT_APP_URL_HXB;
        get_next_key = process.env.NEXT_APP_API_KEY_HXB;
        break;

      case "/hfstar":
        get_next_url = process.env.NEXT_APP_URL_HFSTAR;
        get_next_key = process.env.NEXT_APP_API_KEY_HFSTAR;
        break;

      case "/hftab":
        get_next_url = process.env.NEXT_APP_URL_HFTAB;
        get_next_key = process.env.NEXT_APP_API_KEY_HFTAB;
        break;

      case "/hfuri":
        get_next_url = process.env.NEXT_APP_URL_HFURI;
        get_next_key = process.env.NEXT_APP_API_KEY_HFURI;
        break;

      case "/hfjsx":
        get_next_url = process.env.NEXT_APP_URL_HFJSX;
        get_next_key = process.env.NEXT_APP_API_KEY_HFJSX;
        break;

      case "/hft143":
        get_next_url = process.env.NEXT_APP_URL_HFT143;
        get_next_key = process.env.NEXT_APP_API_KEY_HFT143;
        break;

      case "/hft143f":
        get_next_url = process.env.NEXT_APP_URL_HFT143F;
        get_next_key = process.env.NEXT_APP_API_KEY_HFT143F;
        break;

      case "/hftlh6":
        get_next_url = process.env.NEXT_APP_URL_HFTLH6;
        get_next_key = process.env.NEXT_APP_API_KEY_HFTLH6;
        break;

      case "/hftlh6f":
        get_next_url = process.env.NEXT_APP_URL_HFTLH6F;
        get_next_key = process.env.NEXT_APP_API_KEY_HFTLH6F;
        break;

      case "/hftcheck":
        get_next_url = process.env.NEXT_APP_URL_HFTCHECK;
        get_next_key = process.env.NEXT_APP_API_KEY_HFTCHECK;
        break;

      case "/hftoral69":
        get_next_url = process.env.NEXT_APP_URL_HFTORAL69;
        get_next_key = process.env.NEXT_APP_API_KEY_HFTORAL69;
        break;

      case "/hftoral69f":
        get_next_url = process.env.NEXT_APP_URL_HFTORAL69F;
        get_next_key = process.env.NEXT_APP_API_KEY_HFTORAL69F;
        break;

      case "/hfts":
        get_next_url = process.env.NEXT_APP_URL_HFTS;
        get_next_key = process.env.NEXT_APP_API_KEY_HFTS;
        break;

      case "/hftrx":
        get_next_url = process.env.NEXT_APP_URL_HFTRX;
        get_next_key = process.env.NEXT_APP_API_KEY_HFTRX;
        break;

      case "/hftrci":
        get_next_url = process.env.NEXT_APP_URL_HFTRCI;
        get_next_key = process.env.NEXT_APP_API_KEY_HFTRCI;
        break;

      case "/hftrcif":
        get_next_url = process.env.NEXT_APP_URL_HFTRCIF;
        get_next_key = process.env.NEXT_APP_API_KEY_HFTRCIF;
        break;

      case "/hfteng":
        get_next_url = process.env.NEXT_APP_URL_HFTENG;
        get_next_key = process.env.NEXT_APP_API_KEY_HFTENG;
        break;

      case "/hftengf":
        get_next_url = process.env.NEXT_APP_URL_HFTENGF;
        get_next_key = process.env.NEXT_APP_API_KEY_HFTENGF;
        break;

      case "/enghftf":
        get_next_url = process.env.NEXT_APP_URL_ENGHFTF;
        get_next_key = process.env.NEXT_APP_API_KEY_ENGHFTF;
        break;

      case "/enghft":
        get_next_url = process.env.NEXT_APP_URL_ENGHFT;
        get_next_key = process.env.NEXT_APP_API_KEY_ENGHFT;
        break;

      case "/hftbng":
        get_next_url = process.env.NEXT_APP_URL_HFTBENGAL;
        get_next_key = process.env.NEXT_APP_API_KEY_HFTBENGAL;
        break;

      case "/hftbngf":
        get_next_url = process.env.NEXT_APP_URL_HFTBENGALF;
        get_next_key = process.env.NEXT_APP_API_KEY_HFTBENGALF;
        break;

      case "/hftpro":
        get_next_url = process.env.NEXT_APP_URL_HFTPRO;
        get_next_key = process.env.NEXT_APP_API_KEY_HFTPRO;
        break;

      case "/hftprof":
        get_next_url = process.env.NEXT_APP_URL_HFTPROF;
        get_next_key = process.env.NEXT_APP_API_KEY_HFTPROF;
        break;

      case "/hfxyc":
        get_next_url = process.env.NEXT_APP_URL_HFXYC;
        get_next_key = process.env.NEXT_APP_API_KEY_HFXYC;
        break;

      case "/hfxycflp":
        get_next_url = process.env.NEXT_APP_URL_HFXYCFLP;
        get_next_key = process.env.NEXT_APP_API_KEY_HFXYCFLP;
        break;

      case "/hfsxy":
        get_next_url = process.env.NEXT_APP_URL_HFSXY;
        get_next_key = process.env.NEXT_APP_API_KEY_HFSXY;
        break;

      case "/hfck":
        get_next_url = process.env.NEXT_APP_URL_HFCK;
        get_next_key = process.env.NEXT_APP_API_KEY_HFCK;
        break;

      case "/hfckflip":
        get_next_url = process.env.NEXT_APP_URL_HFCKFLIP;
        get_next_key = process.env.NEXT_APP_API_KEY_HFCKFLIP;
        break;

      case "/hfsxyflip":
        get_next_url = process.env.NEXT_APP_URL_HFSXYFLIP;
        get_next_key = process.env.NEXT_APP_API_KEY_HFSXYFLIP;
        break;

      case "/hftrazf":
        get_next_url = process.env.NEXT_APP_URL_HFTRAZF;
        get_next_key = process.env.NEXT_APP_API_KEY_HFTRAZF;
        break;

      case "/hftraz":
        get_next_url = process.env.NEXT_APP_URL_HFTRAZ;
        get_next_key = process.env.NEXT_APP_API_KEY_HFTRAZ;
        break;

      case "/hftjc":
        get_next_url = process.env.NEXT_APP_URL_HFTJC;
        get_next_key = process.env.NEXT_APP_API_KEY_HFTJC;
        break;

      case "/hftjcf":
        get_next_url = process.env.NEXT_APP_URL_HFTJCF;
        get_next_key = process.env.NEXT_APP_API_KEY_HFTJCF;
        break;

      case "/hftai":
        get_next_url = process.env.NEXT_APP_URL_HFTAI;
        get_next_key = process.env.NEXT_APP_API_KEY_HFTAI;
        break;

      case "/hftnxt":
        get_next_url = process.env.NEXT_APP_URL_HFTNXT;
        get_next_key = process.env.NEXT_APP_API_KEY_HFTNXT;
        break;

      case "/hftnxtf":
        get_next_url = process.env.NEXT_APP_URL_HFTNXTF;
        get_next_key = process.env.NEXT_APP_API_KEY_HFTNXTF;
        break;

      case "/hftjnt":
        get_next_url = process.env.NEXT_APP_URL_HFTJNT;
        get_next_key = process.env.NEXT_APP_API_KEY_HFTJNT;
        break;

      case "/hftv":
        get_next_url = process.env.NEXT_APP_URL_HFTV;
        get_next_key = process.env.NEXT_APP_API_KEY_HFTV;
        break;

      case "/hftvht":
        get_next_url = process.env.NEXT_APP_URL_HFTVHT;
        get_next_key = process.env.NEXT_APP_API_KEY_HFTVHT;
        break;

      case "/hfengf":
        get_next_url = process.env.NEXT_APP_URL_HFENGF;
        get_next_key = process.env.NEXT_APP_API_KEY_HFENGF;
        break;

      case "/hftgf":
        get_next_url = process.env.NEXT_APP_URL_HFTGF;
        get_next_key = process.env.NEXT_APP_API_KEY_HFTGF;
        break;

      case "/hftszf":
        get_next_url = process.env.NEXT_APP_URL_HFTSZF;
        get_next_key = process.env.NEXT_APP_API_KEY_HFTSZF;
        break;

      default:
        get_next_url = process.env.NEXT_APP_URL;
        get_next_key = process.env.NEXT_APP_API_KEY;
        break;
    }
  }

  return { get_next_url, get_next_key };
};
