import homeStyles from '../styles/home.module.css'
import {HowTo} from "./components/HowTo.tsx";
import {WhatToExpect} from "./components/WhatToExpect.tsx";

export function Home() {

    document.title = 'Home'
    return <section className={homeStyles['homeWrapper']}>
        <div className={homeStyles['welcome']}>
            <h1>Explore the wonders of Georgia guided by our professional drivers.</h1>
        </div>
        <HowTo/>
        <WhatToExpect/>
    </section>
}