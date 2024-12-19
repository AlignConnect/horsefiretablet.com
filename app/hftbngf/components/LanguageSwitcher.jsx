import { useTranslation } from 'react-i18next';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';
import React from 'react';
import { IoLanguage } from "react-icons/io5";

const LanguageSwitcher = () => {
    const { i18n } = useTranslation();

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };

    // const handleChangeLanguage = (event) => {
    //     const lng = event.target.value;
    //     console.log('lng: ', lng);
    //     i18n.changeLanguage(lng);
    // };

    const handleChangeLanguage = (sub) => {
        // const lng = event.target.value;
        i18n.changeLanguage(sub);
        handleClose()
    };

    return (
        // <div>

        //     <select onChange={handleChangeLanguage} value={i18n.language} className='bg-inherit selectLanguage fontPoppins'>
        //         <option value="en">English</option>
        //         <option value="bn">Bengali</option>
        //     </select>
        // </div>

        <div>
            <Button
                id="fade-button"
                aria-controls={open ? 'fade-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
                sx={{color:"white",fontSize:17}}
            >
             <IoLanguage fontSize='30' className='border border-white rounded-full p-1' />&nbsp;Languages
            </Button>
            <Menu
                id="fade-menu"
                MenuListProps={{
                    'aria-labelledby': 'fade-button',
                    
                }}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                TransitionComponent={Fade}
                // style={{right:5}}
            >
                <MenuItem  onClick={()=>handleChangeLanguage("en")}>English</MenuItem>
                <MenuItem onClick={()=>handleChangeLanguage("bn")}>Bengali</MenuItem>
            </Menu>
        </div>
    );
};

export default LanguageSwitcher;