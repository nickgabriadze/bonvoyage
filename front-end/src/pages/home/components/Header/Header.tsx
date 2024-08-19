import headerStyles from '../styles/header.module.css'
import {Link} from "react-router-dom";


export default function Header() {
    const URLS = ['/tours', '/transfers', '/contact', '/about']


    return <header className={headerStyles['homepageHeader']}>
        <h1 className={headerStyles['websiteName']}>Bon Voyage</h1>

        <nav className={headerStyles['navigation']}>
            {URLS.map((url, i) => <Link key={i} to={url}>{url.slice(1,)[0].toUpperCase().concat(url.slice(2,))}</Link>)}
        </nav>
    </header>
}

