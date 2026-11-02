import { Outlet, ScrollRestoration } from "react-router";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

const LandingLayout = () => {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
            <ScrollRestoration />
        </>
    )
}

export default LandingLayout;