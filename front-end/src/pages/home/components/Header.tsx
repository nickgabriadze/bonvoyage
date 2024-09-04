import headerStyles from './styles/header.module.css'
import {Link, useLocation} from "react-router-dom";


export default function Header() {
    const URLS = ['/tours', '/transfers', '/contact', '/about']
    const loc = useLocation()

    return <header className={headerStyles['homepageHeader']}>
        <Link to={'/'}
              className={headerStyles['websiteName']}><h1
            style={loc.pathname !== '/' ? {color: 'var(--color-main-deep-sea-navy-light-5'} : {}}>Bon Voyage</h1></Link>

        <nav className={headerStyles['navigation']}>
            {URLS.map((url, i) => <Link key={i} to={url}
                                        style={loc.pathname === url ? {color: 'var(--color-main-deep-sea-navy)',} : {}}
            >{url.slice(1,)[0].toUpperCase().concat(url.slice(2,))}</Link>)}
        </nav>

        <div className={headerStyles['userLogin']}
        >
            <div className={headerStyles['authButtons']}>
                <Link to={'/auth/login'}>LOGIN</Link>
                <hr/>
                <Link to={'/auth/signup'}>SIGNUP</Link>
            </div>
        </div>
    </header>
}

