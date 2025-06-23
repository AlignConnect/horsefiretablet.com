import { useSelector } from "react-redux";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";


const ShiProcket = () => {

    const searchParams = useSearchParams();
    const productInfo = useSelector((state) => state.productslice);



    const [tagsall, settagsall] = useState("");

    const [orderPlaced, setOrderPlaced] = useState(false);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const v = localStorage.getItem("PATH");
        settagsall((vx) => (v ? v : vx));
    }, []);


    const handleShiProcket = async () => {
        const quantity = productInfo?.quantity;
        const selectProducts = productInfo?.selectProducts;

        const products = [
            {
                variantId: selectProducts.id,
                quantity: quantity,
            },
        ];
        const checkoutData = {
            key: "value",
            type: "product",
            products,
            couponCode: "",
            utmParams: "utm_medium=123&utm_source=456",
            cartAttributes: {
                tag: "horsefiretablet.com" + tagsall,
            },
        };

        setLoading(true);

        if (typeof shiprocketCheckoutEvents !== "undefined") {
            try {
                const orderResponse = await shiprocketCheckoutEvents.buyDirect(
                    checkoutData
                );
            } catch (error) {
                console.error("Error placing order:", error);
            } finally {
                setLoading(false);
            }
        } else {

            setLoading(false);
        }
    };

    const handleConfirmPlaceOrder = async () => {

        if (window.conversion_code) {
            window.gtag("event", "conversion", {
                send_to: window.conversion_code,
                event_callback: () => {
                    localStorage.setItem("window.conversion_codess", window.conversion_code)
                    return;
                },
            });
        }

        let trackingUrl = "";

        const exo = searchParams.get("krttracker");
        const ts = searchParams.get("krt");

        if (exo) {
            trackingUrl = `http://syndication.exoclick.com/tag.php?goal=a2231a2d9c3dcd76353a3cb3b061c605&tag=${exo}`;
        } else if (ts) {
            trackingUrl = `https://tsyndicate.com/api/v1/cpa/action?key=DhyxVYbxfoMwi9M6ze0UOsAckPHpuPWYWjmH&clickid=${ts}`;
        }

        try {
            await fetch(trackingUrl, {
                method: "GET",
                mode: "no-cors",
            });
        } catch (error) {
            console.error("Tracking error:", error);
        }
    };

    useEffect(() => {

        const observer = new MutationObserver((mutationsList) => {
            mutationsList.forEach((mutation) => {
                if (mutation.type === "childList") {
                    const addedNodes = mutation.addedNodes;

                    addedNodes.forEach((node) => {
                        if (
                            node.nodeType === 1 &&
                            node.tagName === "FORM" &&
                            node.method.toLowerCase() === "post"
                        ) {
                            handleConfirmPlaceOrder();

                           
                        }
                    });
                }
            });
        });

        observer.observe(document.body, {
            childList: true,
            subtree: true,
        });

        return () => {
            observer.disconnect();
        };
    }, []);

    return (
        <>

            <button
                className="relative w-[11rem] sm:w-[20rem] shoporder  shiprocketbutton "
                onClick={handleShiProcket}
            >
                <div className="relative">
                    <div className="bg-green-700 text-white text-xl font-semibold py-2 my-4 w-full rounded-xl">
                        <div className="flex items-center align-middle justify-center">
                            BUY NOW&nbsp;
                            <img
                                src="https://fastrr-boost-ui.pickrr.com/assets/images/boost_button/upi_options.svg"
                                alt="Google Pay | Phone Pay | UPI"
                                className=""
                            />
                            &nbsp;
                            <img
                                src="https://fastrr-boost-ui.pickrr.com/assets/images/boost_button/right_arrow.svg"
                                className=""
                                alt="right_arrow"
                            />
                        </div>
                    </div>
                </div>
                <img
                    src="https://fastrr-boost-ui.pickrr.com/assets/images/boost_button/powered_by.svg "
                    alt="pic"
                    className="absolute bottom-[1.3rem]  w-20 right-3 sm:w-28"
                />
            </button>
        </>
    );
};

export default ShiProcket;
