// import Home from "./pages/home/Home.tsx";
// import {Route, Routes} from "react-router-dom";
// import Transfers from "./pages/transfer/Transfers.tsx";
// import Contact from "./pages/contact/Contact.tsx";
// import Authentication from "./pages/authentication/Authentication.tsx";
// import Login from "./pages/authentication/login/Login.tsx";
// import Signup from "./pages/authentication/signup/Signup.tsx";
// import NotFound from "./404.tsx";
import Calendar from "./components/Calendar.tsx";

export function App() {


    return <>
        <Calendar />
        {/*<Routes>*/}


        {/*    <Route path={'/'} element={<Home/>}>*/}
        {/*        <Route path={'contact'} element={<Contact/>}/>*/}
        {/*        <Route path={'transfers'} element={<Transfers/>}/>*/}
        {/*        <Route path={'tours'} element={<h1>Tours</h1>}/>*/}
        {/*        <Route path={'about'} element={<h1>about</h1>}/>*/}
        {/*    </Route>*/}

        {/*    <Route path={'/auth'} element={<Authentication/>}>*/}
        {/*        <Route path={'login'} element={<Login/>}/>*/}
        {/*        <Route path={'signup'} element={<Signup/>}/>*/}
        {/*    </Route>*/}

        {/*    <Route path={'*'} element={<NotFound />}/>*/}
        {/*</Routes>*/}
    </>

}

export default App;