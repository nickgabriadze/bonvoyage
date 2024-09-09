import {ReactNode} from "react";
import layoutStyles from './styles/contact.layout.module.css'

export default function ContactLayout({children}: { children: ReactNode }) {


    return <section
        className={layoutStyles['layoutWrapper']}>{children}</section>
}