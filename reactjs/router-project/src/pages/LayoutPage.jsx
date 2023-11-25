import { Outlet } from "react-router-dom";
import FooterComponent from "../components/FooterComp";
import HeaderComponent from "../components/HeaderComp";

export default function LayoutPage() {
    return (
        <>
            <HeaderComponent />

            <Outlet />

            <FooterComponent />
        </>
    )
}