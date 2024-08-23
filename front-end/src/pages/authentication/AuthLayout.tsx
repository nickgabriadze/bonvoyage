import {ReactNode} from "react";
import authLayoutStyles from './styles/auth.layout.module.css';

export default function AuthLayout({children}: { children: ReactNode }) {


    return <section className={authLayoutStyles['wrapper']}>
        {children}
    </section>
}