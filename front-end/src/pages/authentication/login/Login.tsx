import loginStyles from './../styles/login.module.css'
import EmailSVG from '../../../assets/icons/authentication/email.svg'
import EmailFilledSVG from '../../../assets/icons/authentication/email-filled.svg'
import PasswordLockSVG from '../../../assets/icons/authentication/password-lock.svg'
import PasswordLockFilledSVG from '../../../assets/icons/authentication/password-lock-filled.svg'
import {useState} from "react";


export default function Login() {
    const [focused, setFocused] = useState<string>('')


    return <form className={loginStyles['loginFormWrapper']}>
        <h1>Welcome Back!</h1>

        <div className={loginStyles['inputWrapper']}>
            <div className={loginStyles['inputWithIcon']}
                 style={focused === 'email' ? {'outline': '1px solid var(--color-main-deep-sea-navy) '} : {}}
            >
                <img src={focused === 'email' ? EmailFilledSVG : EmailSVG} width={24} alt={'Email icon'}/>

                <input type='email' name='email' required={true}
                       placeholder={'Email'}
                       onFocus={() => setFocused('email')}
                       onBlur={() => setFocused('')}
                />
            </div>
            <div className={loginStyles['inputWithIcon']}
                 style={focused === 'password' ? {'outline': '1px solid var(--color-main-deep-sea-navy) '} : {}}

            >
                <img src={focused === 'password' ? PasswordLockFilledSVG : PasswordLockSVG} width={24}
                     alt={'Password lock icon'}/>

                <input type='password' name='password' autoComplete={'true'}
                       placeholder={'Password'}
                       onFocus={() => setFocused('password')}
                       onBlur={() => setFocused('')}
                       required={true}/>
            </div>
        </div>

        <button>Start Exploring</button>
    </form>
}