import headerStyles from './../../styles/header.module.css'
import MenuSVG from '/icons/header/menu.svg'
import CloseMenuSVG from '/icons/header/close-menu.svg'
import {useEffect, useState} from "react";
import {Link, useLocation} from "react-router-dom";

export default function HamburgerMenu({navigation}: { navigation: string[] }) {
    const [menuOpen, setMenuOpen] = useState(false)
    const loc = useLocation()

    useEffect(() => {
        if (menuOpen) {
            document.body.classList.add('preventScroll');
        } else {
            document.body.classList.remove('preventScroll');
        }

        return () => {
            document.body.classList.remove('preventScroll');
        };
    }, [menuOpen]);
    return <section className={headerStyles['hamburgerWrapper']}>
        {!menuOpen && <button onClick={() => setMenuOpen((prev) => !prev)}><img src={MenuSVG} width={32}
                                                                                alt={'Menu icon'}/></button>}

        {menuOpen && <div className={headerStyles['overlay']}></div>}

        {menuOpen &&
            <div className={headerStyles['hamburgerOptions']}>
                <button
                    className={headerStyles['hamburgerMenuOpen']}
                    onClick={() => setMenuOpen((prev) => !prev)}><img src={CloseMenuSVG} width={32}
                                                                      alt={'Menu icon'}/></button>
                <Link to={'/'}
                      className={headerStyles['websiteName']}><h1
                    style={loc.pathname === '/' ? {
                        color: 'var(--color-main-deep-sea-navy)', textShadow: '0 0 1px #002F4E',
                    } : {}}>Bon
                    Voyage</h1></Link>

                <div className={headerStyles['navigation']}>
                    {navigation.map((url, i) => <Link key={i} to={url}
                                                      onClick={() => setMenuOpen(false)}
                                                      style={loc.pathname === url ? {
                                                          color: 'var(--color-main-deep-sea-navy)',
                                                      } : {}}
                    >{url.slice(1,)[0].toUpperCase().concat(url.slice(2,))}</Link>)}
                </div>

                <div className={headerStyles['userLogin']}
                >
                    <div className={headerStyles['authButtons']}>
                        <Link to={'/auth/login'}>LOGIN</Link>
                        <Link to={'/auth/signup'}>SIGNUP</Link>
                    </div>
                </div>
            </div>


        }
    </section>
}