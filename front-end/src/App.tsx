import Home from "./pages/home/Home.tsx";
import {Route, Routes} from "react-router-dom";
import Transfers from "./pages/transfer/Transfers.tsx";
import Contact from "./pages/contact/Contact.tsx";
import Login from "./pages/authentication/login/Login.tsx";

export function App() {


    return <>
        <Routes>
            <Route path={'/'} element={<Home/>}>
                <Route path={'contact'} element={<Contact/>}/>
                <Route path={'transfers'} element={<Transfers/>}/>
            </Route>

            <Route path={'/login'} element={<Login />}/>

        </Routes></>

}

export default App;