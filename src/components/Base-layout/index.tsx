import { Outlet } from "react-router-dom";
import Hearder from "./haeder";
import Footer from "./fooder";




export default function BaseLayout() {
    return (
        <>
            <Hearder/>
            <Outlet/>
            <Footer/>
        </>
    );
}