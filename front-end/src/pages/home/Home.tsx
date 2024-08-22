import {Outlet} from "react-router-dom";
import Header from "./components/Header/Header.tsx";

export default function Home(){


    return <>
        <Header />
        <Outlet />
    </>
}

