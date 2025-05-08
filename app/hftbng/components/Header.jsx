import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./LanguageSwitcher"

const Header = () => {

    const { t } = useTranslation();

    return (
        <div className="sm:py-0 bg-red-600">

            <div className=" text-white  hidden lg:block py-1">
                <div className="px-3 text-center flex items-center justify-center gap-5">
                    <p className="fontPoppins">{t("head_title")}</p>
                </div>
            </div>

            <div className="lg:absolute z-10 right-5 top-0 text-end">
                <LanguageSwitcher />
            </div>
        </div>
    )
}

export default Header