import Home from "./pages/home/Home.tsx";
import {Route, Routes} from "react-router-dom";
import Header from "./pages/home/components/Header/Header.tsx";
import Transfers from "./pages/transfer/Transfers.tsx";

export function App() {


    return <>
        <Header/>
        <Routes>
            <Route path={'/'} element={<Home/>}/>
            <Route path={'/transfers'} element={<Transfers />} />
        </Routes></>

}

export default App;