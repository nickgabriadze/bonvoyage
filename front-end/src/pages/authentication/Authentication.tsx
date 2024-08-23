import {Outlet, useLocation, useNavigate} from "react-router-dom";
import {useEffect} from "react";

export default function Authentication() {
    const loc = useLocation();
    const nav = useNavigate()

    useEffect(() => {
        if (loc.pathname === '/auth') {
            nav('/auth/login')
        }
    }, [nav, loc.pathname])


    return <Outlet/>
}