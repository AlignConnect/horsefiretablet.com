import dynamic from 'next/dynamic';
import './components/home.css'


function page() {


    const Header = dynamic(() => import('./components/Header'), {
        loading: () => <p>loader</p>
    });

    const StrongPenis = dynamic(() => import('./components/StrongPenis'), {
        loading: () => <p>loader</p>
    });

    const Percentage = dynamic(() => import('./components/Percentage'), {
        loading: () => <p>loader</p>
    });

    const Doctor = dynamic(() => import('./components/Doctor'), {
        loading: () => <p>loader</p>
    });

    const Question_Answer = dynamic(() => import('./components/Question_Answer'), {
        loading: () => <p>loader</p>
    });

    const Advantage = dynamic(() => import('./components/Advantage'), {
        loading: () => <p>loader</p>
    });

    const Form = dynamic(() => import('./components/Form'), {
        loading: () => <p>loader</p>
    });

    const CustomerReview = dynamic(() => import('./components/CustomerReview'), {
        loading: () => <p>loader</p>
    });

    const OrderNow = dynamic(() => import('./components/OrderNow'), {
        loading: () => <p>loader</p>
    });

    const Footer = dynamic(() => import("@/app/commonUse/Footer"), {
        loading: () => <p>loader</p>
    });

    const FooterPopup = dynamic(() => import("@/app/commonUse/bottompopup/BottomHandler"), {
        loading: () => <p>loader</p>
    });

    return (
        <div>
            <Header />

            <StrongPenis />

            <OrderNow />

            <Percentage />

            <Doctor />

            <OrderNow />

            <Question_Answer />

            <OrderNow />

            <Advantage />

            <Form />

            <CustomerReview />

            <Footer />

            <FooterPopup />
        </div>
    )
}

export default page;