import React from 'react'
import { KeyBenefits, KeyIngrediant } from '../utils/Hfq'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { motion } from "framer-motion"




import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { useSelector } from 'react-redux';
import styled from '@emotion/styled';





function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}


function CustomTabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
        </div>
    );
}

const Section1 = () => {


    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };


    const { productsdata } = useSelector(
        (state) => state.productslice
    );


    const AntTabs = styled(Tabs)({
        // borderBottom: '1px solid #e8e8e8',
        '& .MuiTabs-indicator': {
            backgroundColor: 'green',
        },
    });


    return (
        <div className='poppinsFont'>

            <motion.h1 className='text-center text-4xl font-semibold py-5'

                initial={{ opacity: 0, y: 200 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}


            >Key Benefits</motion.h1>

            <div className='flex flex-wrap items-center sm:gap-5'>

                {
                    KeyBenefits([

                        {
                            img: "https://arayurveda.shop/cdn/shop/files/image_2024_12_11T06_48_31_251Z.png?v=1733899743&width=360",
                            title: "Helpful for Boosting strength, stamina & energy"
                        },
                        {
                            img: "https://arayurveda.shop/cdn/shop/files/hft2.png?v=1719470280&width=360",
                            title: "Helpful in Relieves stress & anxiety"
                        },
                        {
                            img: "https://arayurveda.shop/cdn/shop/files/hft3.png?v=1719470281&width=360",
                            title: "Help to Maximize time duration"
                        },
                        {
                            img: "https://arayurveda.shop/cdn/shop/files/image_2024_12_11T06_48_36_050Z.png?v=1733899774&width=360",
                            title: "Helps to Improve your performance"
                        },
                    ])
                }


            </div>


            <motion.h1
                initial={{ opacity: 0, y: 200 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}

                className='text-center text-4xl font-semibold pt-14 pb-7'>Key Ingrediants</motion.h1>


            <div className='flex flex-wrap justify-center items-center  sm:gap-5'>

                {
                    KeyIngrediant([

                        {

                            t: "Shilajit",
                            img: "https://arayurveda.shop/cdn/shop/files/shilajit.jpg?v=1718857584&width=165",
                            title: "Increases stamina & vitality"
                        },
                        {
                            t: "Ashwagandha",
                            img: "https://arayurveda.shop/cdn/shop/files/ashwagandha.jpg?v=1718857584&width=165",
                            title: "It stimulates the secretion of testosterone"
                        },
                        {
                            t: "Safed Musli",
                            img: "https://arayurveda.shop/cdn/shop/files/safed_musli.jpg?v=1718857584&width=165",
                            title: "Restores immunity & counters weakness"
                        },
                        {
                            t: "Gokshura",
                            img: "https://arayurveda.shop/cdn/shop/files/gokshura-min.jpg?v=1719470161&width=165",
                            title: "Boost your libido, lower blood sugar"
                        },
                    ])
                }


            </div>



            <motion.h1

                initial={{ opacity: 0, y: 200 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}

                className='text-center text-4xl font-semibold pt-14 pb-7'>How to Use</motion.h1>


            <motion.div
                initial={{ opacity: 0, y: 200 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}

                className='grid grid-cols-1 sm:grid-cols-3 w-[90%] mx-auto gap-9'>

                <Card className="bg-[#f6f6f0] border-0 mx-auto  text-lg font-semibold ">

                    <CardHeader className="font-semibold text-xl">
                        1.
                    </CardHeader>
                    <CardContent>
                        <img src="https://arayurveda.shop/cdn/shop/files/hft1_33eb2971-0a94-4a93-a513-8581c87ba4c6.png?v=1719470362&width=360" alt="sdsd" loading='lazy' />
                    </CardContent>
                    <CardFooter className="">
                        <p className=''> Take one Tablet twice a day</p>
                    </CardFooter>

                </Card>



                <Card className="bg-[#f6f6f0] border-0 text-lg  font-semibold">

                    <CardHeader className="font-semibold text-xl text-start">
                        2.
                    </CardHeader>
                    <CardContent>
                        <img src="https://arayurveda.shop/cdn/shop/files/hft2_7a785fbb-2da2-4bb2-a3db-8614ccaa0c7a.png?v=1719470363&width=360" alt="sdsd" loading='lazy' />
                    </CardContent>
                    <CardFooter>
                        With milk or luke warm water, after meals
                    </CardFooter>

                </Card>



                <Card className="bg-[#f6f6f0] border-0  text-lg font-semibold">

                    <CardHeader className="font-semibold text-xl">
                        3.
                    </CardHeader>
                    <CardContent>
                        <img src="https://arayurveda.shop/cdn/shop/files/hft3_af006666-86e4-4cf1-a685-17e74c14b362.png?v=1719470361&width=360" alt="sdsd" loading='lazy' />
                    </CardContent>
                    <CardFooter>
                        For best results, use for min. 3 months
                    </CardFooter>

                </Card>


            </motion.div>


            <motion.div

                initial={{ opacity: 0, y: 200 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}


            >
                <Box sx={{ borderBottom: 1, borderColor: 'divider', display: "flex", justifyContent: "center", textAlign: "center", color: "green" }}>
                    <AntTabs value={value} indicatorColor='secondary' textColor='inherit' onChange={handleChange} aria-label="basic tabs example" className='poppinsFont pt-5'>
                        <Tab label="PRODUCT DESCRIPTION" {...a11yProps(0)} className='poppinsFont !text-[18px]' />
                        <Tab label="BENEFITS" {...a11yProps(1)} className='poppinsFont !text-[18px]' />
                        <Tab label="DOSAGE AND DURATION" {...a11yProps(2)} className='poppinsFont !text-[18px]' />
                        <Tab label="WHO SHOULD TAKE IT?" {...a11yProps(3)} className='poppinsFont !text-[18px]' />
                    </AntTabs>
                </Box>
                <CustomTabPanel value={value} index={0}>

                    <div className='poppinsFont text-[16px] text-gray-700'>


                        <motion.p
                            initial={{ opacity: 0, y: 200 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1 }}
                            viewport={{ once: true }}

                            className='py-3'>

                            Horse Fire Tablet is an Ayurvedic medicine formulated to enhance stamina and provide long-lasting performance. This 100% Ayurvedic product is a potent blend of 17 herbs, including Ashwagandha, Shilajit, Shatavari, Kaunch, Safed Musli, Vidari, Gokshura, and Saffron, among others.

                        </motion.p>

                        <motion.p

                            initial={{ opacity: 0, y: 200 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1 }}
                            viewport={{ once: true }}

                            className='py-3'>
                            To keep your partner happy, you must have more power, energy, and stamina. Horse Fire is an Ayurvedic medicine to increase energy and power. It contains every natural herb that can help solve all men's private problems. The Shilajit present in it is a strength, stamina, and energy booster that relieves weakness and fatigue. Ashwagandha acts like an energy booster tonic, helps reduce stress, and improves desire. Saffron is also a very powerful herb that helps maintain energy for a long time. Safed Musli is highly beneficial in boosting libido, energy, and stamina, as well as prolonging duration & performance, helping men enjoy their married life to the fullest.

                        </motion.p>

                        <motion.p
                            initial={{ opacity: 0, y: 200 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1 }}
                            viewport={{ once: true }}

                            className='py-3'>
                            Most men are unable to enjoy the pleasures of life due to low testosterone levels, low stamina, and lack of enthusiasm. The Horse Fire tablet is the simplest and most natural way to increase power and stamina. It controls early discharge and helps in achieving hardness at the time of performance. This product is certified by Ayush, GMP, and ISO.
                        </motion.p>


                        <motion.div

                            initial={{ opacity: 0, y: 200 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1 }}
                            viewport={{ once: true }}

                            className='flex flex-wrap justify-evenly items-center gap-5  py-5'>

                            <div>
                                <img src="https://cdn.shopify.com/s/files/1/0878/9219/7691/files/brand-icon-1a-ezgif.com-resize.png?v=1719650354" alt="sdsd" loading='lazy' />
                            </div>


                            <div>
                                <img src="https://cdn.shopify.com/s/files/1/0878/9219/7691/files/brand-icon-2copy-ezgif.com-resize.png?v=1719650369" alt="sdsd" loading='lazy' />
                            </div>


                            <div>
                                <img src="https://cdn.shopify.com/s/files/1/0878/9219/7691/files/brand-icon-3a-ezgif.com-resize.png?v=1719650384" alt="sdsd" loading='lazy' />
                            </div>


                            <div>
                                <img src="https://cdn.shopify.com/s/files/1/0878/9219/7691/files/brand-icon-4a-ezgif.com-resize.png?v=1719650415" alt="sdsd" loading='lazy' />
                            </div>


                            <div>
                                <img src="https://cdn.shopify.com/s/files/1/0878/9219/7691/files/brand-icon-6a-ezgif.com-resize.png?v=1719650428" alt="sdsd" loading='lazy' />
                            </div>

                            <div>
                                <img src="https://cdn.shopify.com/s/files/1/0878/9219/7691/files/brand-icon-7a-ezgif.com-resize.png?v=1719650444" alt="sdsd" loading='lazy' />
                            </div>



                        </motion.div>




                        <motion.p

                            initial={{ opacity: 0, y: 200 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1 }}
                            viewport={{ once: true }}

                            className='py-3'>

                            हॉर्स फायर टैबलेट एक आयुर्वेदिक दवा है जो स्टैमिना को बढ़ाने और लॉन्ग लास्टिंग परफॉर्मेंस करने में मदद करती है। यह अश्वगंधा, शिलाजीत, शतावरी, कौंचा, सफ़ेद मूसली, विदारी, गोक्षुरा, और केसर जैसे 17 जड़ीबूटियों का सर्वश्रेष्ठ संयोजन है यह 100% आयुर्वेदिक उत्पाद है और इसका कोई साइड इफ़ेक्ट नहीं है।

                        </motion.p>

                        <motion.p


                            initial={{ opacity: 0, y: 200 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1 }}
                            viewport={{ once: true }}


                            className='py-3'>
                            साथी को खुश रखने के लिए ज्यादा शक्ति, ऊर्जा और स्टैमिना का होना आवश्यक है। हॉर्सफ़ायर जोश बढ़ाने की एक आयुर्वेदिक दवा है इसमें वो प्रत्येक प्राकृतिक तत्व है जो पुरुषों की सभी प्राइवेट समस्याओं के समाधान में मदद कर सकती है। इसमें मौजूद शिलाजीत जोश, स्टैमिना और ताकत वर्धक है कमजोरी और थकान दूर करता है। अश्वगंधा एनर्जी बूस्टर टॉनिक की तरह काम करता है, स्ट्रेस कम करने में मददगार है और इसके उपयोग से काम इच्छा सुधारने में मदद मिलती है। केसर भी अत्यंत शक्तिशाली हर्ब है जो लम्बे समय तक एनर्जी बनाये रखने में मदद करता है। सफ़ेद मूसली जोश, ऊर्जा, और स्टैमिना बढ़ाने और अवधि बढाने में अत्यंत मददगार है। जिनकी मदद से पुरुष अपने वैवाहिक जीवन का भरपूर आनंद उठा सकता है।

                        </motion.p>

                        <motion.p

                            initial={{ opacity: 0, y: 200 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1 }}
                            viewport={{ once: true }}

                            className='py-3'>
                            अधिकांश पुरुष टेस्टोस्टेरोन के निम्न स्तर, कम स्टैमिना और जोश के कारण अपने जीवन के सुखों का आनंद लेने में असमर्थ होते हैं। हॉर्स फायर टैबलेट पावर एवं स्टैमिना बढ़ाने का सरलतम और प्राकृतिक साधन है। यह शीघ्र-पतन को नियंत्रित करता है और प्रवेश के समय सख्त कड़कपन प्राप्त करने में मदद करता है। यह उत्पाद Ayush, GMP और ISO द्वारा प्रमाणित है।
                        </motion.p>



                    </div>


                </CustomTabPanel>
                <CustomTabPanel value={value} index={1}>


                    <motion.ol

                        initial={{ opacity: 0, y: 200 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        viewport={{ once: true }}
                        className='fontNoto text-gray-700 text-[16px] list-decimal' >
                        <li>  यह अश्वगंधा, कौचा, शिलाजीत, श्वेत मुसली, शतावरी और केसर आदि जैसी आयुर्वेदिक जड़ीबूटियों से बना है।</li>
                        <li>  शिलाजीत आपकी ऊर्जा को पुनर्जीवित करता है और शारीरिक बल बढाता है।</li>
                        <li>  अश्वगंधा से नाइट्रिक ऑक्साइड का उत्पादन होता है, तथा  कामेच्छा और संतुष्टि में वृद्धि होती है।</li>
                        <li>  कौंचा कामशक्ति को बढाने में मदद करता है, तथा इरेक्शन बनाये रखता है।</li>
                        <li>  शतावरी के प्रयोग से स्टैमिना और टेस्टोस्टेरोन हार्मोन में वृद्धि होती है।</li>
                        <li>  श्वेत मूसली से टेस्टोस्टेरोन और वीर्य की कमी जैसी समस्याओं में मदद मिलती हैं।</li>
                        <li>  जायफल के प्रयोग से सेरेटोनिन हार्मोन्स का उत्पादन होता है, जो मानसिक स्थिति को मजबूत करता है।</li>
                        <li>  हॉर्सफायर टैबलेट पूर्ण आयुर्वेदिक उत्पाद है जिसका कोई दुष्प्रभाव नहीं है।</li>
                    </motion.ol>



                </CustomTabPanel>
                <CustomTabPanel value={value} index={2}>
                    <motion.ol

                        initial={{ opacity: 0, y: 200 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        viewport={{ once: true }}
                        className='fontNoto text-gray-700 text-[16px] list-disc' >
                        <li>Take one tablet twice a day after meal with lukewarm milk or water.</li>
                        <li>We recommend taking it with milk for the better results.</li>
                        <li>Take it for at least 3-4 months regularly to improve strength, stamina, timing, and strong performance. Once you feel changes in your performance,</li>
                    </motion.ol>
                </CustomTabPanel>

            </motion.div>



            <CustomTabPanel value={value} index={3}>



                <motion.ol

                    initial={{ opacity: 0, y: 200 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                    className='fontNoto text-gray-700 text-[16px] list-disc' >


                    <li> Men who suffer from premature ejaculation and erectile dysfunction </li>
                    <li> Those who want stronger stamina and last longer performance </li>
                    <li> Men who feel lack of stamina and energy. </li>
                    <li> Men who are unable to perform better & satisfy their partners. </li>


                </motion.ol>



            </CustomTabPanel>



        </div >
    )
}

export default Section1
