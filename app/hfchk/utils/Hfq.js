import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card"
import { FaStar, FaStarHalf } from "react-icons/fa6"
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
// import ArrowDownwardIcon from '@mui/icons-material/ArrowDownwardIcon';
// import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { ArrowDown } from 'lucide-react';
import { RiArrowDownSLine } from "react-icons/ri";
import { motion } from 'framer-motion'


const reactStarIcon = (Value) => {
    let Arr = new Array(parseInt(Value)).fill(true)
    return <div className="flex items-center tracking-widest gap-1">
        {
            Arr.map((e, key) => {
                return <div className="gap-5" key={key}>
                    <FaStar color="#F79131" size={"25px"} />
                </div>
            })
        }
    </div>
}



const KeyBenefits = (arr) => {
    return arr?.map((e, key) => (
        <motion.div
            initial={{ opacity: 0, y: 200 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            key={key}
            className="bg-[#f6f6f0] text-center sm:p-5 my-2 min-h-[240px] max-w-[170px] sm:max-h-[260px] sm:max-w-[280px] mx-auto rounded-lg">
            <div>
                <motion.img
                    src={e?.img} alt="sdfsd" loading="lazy" className="max-h-[150px] max-w-[150px] mx-auto" />
            </div>
            <div className="text-[13px] sm:text-[16px] py-5 font-semibold ">
                {e?.title}
            </div>
        </motion.div>
    ))
}



const KeyIngrediant = (arr) => {
    return arr?.map((e, key) => (
        <motion.div

            initial={{ opacity: 0, y: 200 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            key={key}
            className="bg-[#f6f6f0] text-center my-2 sm:p-5  sm:max-h-[300px] max-w-[170px] sm:max-w-[280px] mx-auto rounded-lg">
            <h5 className="text-center font-semibold text-lg sm:text-xl py-2 sm:pb-5">{e?.t}</h5>
            <div>
                <img src={e?.img} alt="sdfsd" loading="lazy" className="sm:max-h-[150px] sm:max-w-[150px] mx-auto" />
            </div>
            <div className="text-[13px] sm:text-[16px] py-2 sm:py-5 font-semibold ">
                {e?.title}
            </div>
        </motion.div>
    ))
}


const OurPromises = (arr) => {
    return arr?.map((e, key) => {
        return <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            key={key}
        >
            <Card className="bg-[#f6f6f0] border-0 mx-auto max-w-[170px] sm:max-w-none sm:max-h-[150px] text-lg py-2 font-semibold sm:px-9">
                {/* <CardHeader className="font-semibold text-xl">
                1.
            </CardHeader> */}
                <CardContent>
                    <img src={e.img} alt="sdsd" loading='lazy' className="mx-auto p-0" />
                </CardContent>
                <CardFooter className="py-2">
                    <p className='text-sm'> {e.title}</p>
                </CardFooter>
            </Card>
        </motion.div>
    })
}


const Accordian = (arr) => {

    return arr?.map((e, key) => (
        <motion.div
            initial={{ opacity: 0, y: 290 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            key={key}
            className="my-4"
        >
            <Accordion className="!bg-[#edf3f2] poppinsFont border-0 shadow-none rounded-xl border-l-8 border-green-800">
                <AccordionSummary
                    expandIcon={<RiArrowDownSLine />}
                    aria-controls="panel2-content"
                    id="panel2-header"
                    className="my-2 text-xl font-bold text-black shadow-none border-r-2 border-green-800"

                >
                    <Typography component="span" className="!font-semibold text-start sm:text-lg poppinsFont ">{e?.que}</Typography>
                </AccordionSummary>
                <AccordionDetails className="text-start text-gray-700 shadow-none">
                    <Typography className="poppinsFont">
                        {e?.ans}
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </motion.div>
    ))


}


export {
    reactStarIcon,
    KeyBenefits,
    KeyIngrediant,
    OurPromises,
    Accordian
}

import React from 'react'

const Hfq = () => {
    return (
        <div>
            div
        </div>
    )
}

export default Hfq
