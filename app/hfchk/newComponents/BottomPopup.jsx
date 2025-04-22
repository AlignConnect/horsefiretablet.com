import { BsArrowRightCircleFill, BsArrowLeftCircleFill } from "react-icons/bs";
import ShiProcket from "@/app/commonUse/Shiprocket";
import { useState, useEffect } from 'react'

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useDispatch, useSelector } from "react-redux";
import { selectProductById } from "@/lib/slice/product.slice";


const BottomPopup = () => {
    // const [seconds, setSeconds] = useState(3600); // 1 hour in seconds

    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         setSeconds((prevSeconds) => prevSeconds - 1);
    //     }, 1000);

    //     return () => clearInterval(interval); // Cleanup the interval on component unmount

    // }, []); // Empty dependency array means this effect will run once after the initial render



    const [age, setAge] = useState('');
    const [open, setOpen] = useState(false);

    const handleChange = (event) => {
        setAge(event.target.value);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleOpen = () => {
        setOpen(true);
    };


    const { productsdata, selectProducts, allVariants } = useSelector(
        (state) => state.productslice
    );

    const [sc, setSc] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setSc(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [sc]);



    const dispatch = useDispatch();

    const [mydata, setmydata] = useState()

    useEffect(() => {

        setmydata(allVariants)


    }, [allVariants])


    return (
        <div className={`w-[90%] sm:hidden poppinsFont bg-white py-1 shadow-black shadow-md fixed z-[10000] ${sc > 50 ? "tt" : 'xx'}`} onClick={() => window.location.href = "#buynow"}>
            <div className='flex justify-center items-center gap-2 text-black'>
                <a href='#buynow' className='text-center decoration-none border-0 rounded-lg pt-1  px-3 font-bold ' >पैक 50% छूट के साथ</a>
            </div>


            <div className="flex items-center gap-2 justify-center">

                <div className="text-center mx-auto">
                    {/* //DROP DOWN */}



                    <select
                        className="border border-gray-400 text-black rounded-sm px-4 py-[8px] w-full sm:w-[140px]"
                        value={selectProducts?.title}
                        onChange={(e) => {


                            const ValueFind = mydata?.find((ele) => ele?.title == e.target.value)

                            console.log(ValueFind)
                            dispatch(selectProductById({ selectProductData: ValueFind }))

                        }}
                    >

                        {
                            mydata?.map((ele, key) => {
                                return <option className="text-sm" key={key} value={ele?.title}>{ele?.title}</option>
                            })
                        }


                    </select>

                </div>

                <div className="w-[180px]">
                    <ShiProcket />
                </div>

            </div>

        </div>
    )
}
export default BottomPopup;