import headerStyles from '../styles/header.module.css'
import {Link} from "react-router-dom";


export default function Header(){

    return <header className={headerStyles['homepageHeader']}>
        <h1 className={headerStyles['websiteName']}>Bon Voyage</h1>

        <nav className={headerStyles['navigation']}>
            <Link to={'/tours'}>Tours</Link>
            <Link to={'/transfers'}>Transfers</Link>
            <Link to={'/contact'}>Contact</Link>
            <Link to={'/about'}>About Us</Link>
        </nav>
    </header>
}

