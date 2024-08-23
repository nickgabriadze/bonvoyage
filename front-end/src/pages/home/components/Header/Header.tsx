import headerStyles from '../styles/header.module.css'
import {Link, useLocation} from "react-router-dom";
import UserSVG from '../../../../assets/icons/header/user.svg'
import UserFilledSVG from '../../../../assets/icons/header/user-filled.svg'
import {useState} from "react";

export default function Header() {
    const URLS = ['/tours', '/transfers', '/contact', '/about']
    const loc = useLocation()
    const [hoverOverLogin, setHoverOverLogin] = useState<boolean>(false)

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
              onMouseOver={() => setHoverOverLogin(true)}
              onMouseOut={() => setHoverOverLogin(false)}
        >
            <img src={hoverOverLogin ? UserFilledSVG : UserSVG} width={24} alt={'User icon'}/>
            <div className={headerStyles['authButtons']}>
                <Link to={'/auth/login'}><button>LOGIN</button></Link>
                <span>/</span>
                <Link to={'/auth/signup'}><button>SIGNUP</button></Link>
            </div>
        </div>
    </header>
}

