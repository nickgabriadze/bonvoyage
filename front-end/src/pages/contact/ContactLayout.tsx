import {ReactNode} from "react";

export default function ContactLayout({children}: { children: ReactNode }) {

    const layoutStyle = {
        display: "flex",
        gap: '60px',
        alignItems: "center",
        justifyContent: 'space-around',
        padding: '10px 10px 10px 10px',
        borderRadius: '8px',

    }
    return <section
        style={layoutStyle}>{children}</section>
}