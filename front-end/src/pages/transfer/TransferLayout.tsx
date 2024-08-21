import {ReactNode} from "react";

export default function TransferLayout({children}:{children: ReactNode}){

    const transferStyle = {
        width: '70%',
        margin:'auto',
        padding: '50px 10px 0 10px'
    }
    return <section style={transferStyle}>{children}</section>

}