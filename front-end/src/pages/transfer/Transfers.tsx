import Dropdown from "./components/Dropdown/Dropdown.tsx";
import TransferLayout from "./TransferLayout.tsx";

export function Transfers(){
    document.title = 'Transfers'



    return <TransferLayout>
        <Dropdown />
    </TransferLayout>
}

export default Transfers;