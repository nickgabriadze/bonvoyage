import homeStyles from '../styles/home.module.css'
import {HowTo} from "./components/HowTo.tsx";
import {WhatToExpect} from "./components/WhatToExpect.tsx";
import MountainViewJPEG from '/icons/homepage/mountain-scene.jpg'

export function Home() {

    document.title = 'Home'
    return <section className={homeStyles['homeWrapper']}>
        <div className={homeStyles['welcome']}>
            <img src={MountainViewJPEG} alt={'Mountains view'}/>
            <h1>Explore the wonders of Georgia guided by our professional drivers.</h1>
        </div>



        <HowTo/>
        <WhatToExpect/>
    </section>
}