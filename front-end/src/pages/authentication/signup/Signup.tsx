import signupStyles from '../styles/signup.module.css'
import SignatureBadgeSVG from '/icons/authentication/signature-badge.svg'
import SignatureBadgeFilledSVG from '/icons/authentication/signature-badge-filled.svg'
import EmailSVG from '/icons/authentication/email.svg'
import EmailFilledSVG from '/icons/authentication/email-filled.svg'
import CallSVG from '/icons/authentication/call.svg'
import CallFilledSVG from '/icons/authentication/call-filled.svg'
import PasscodeSVG from '/icons/authentication/passcode.svg'
import PasscodeFilledSVG from '/icons/authentication/passcode-filled.svg'
import {useState} from "react";

export default function Signup() {
    const [focusedOn, setFocusedOn] = useState<'email' | 'call' | 'passcode' | 'name' | 'none'>('none')

    return <form className={signupStyles['signupFormWrapper']}>
        <h1>Explore the wonders of Georgia!</h1>

        <div className={signupStyles['signupInfo']}>
            <div className={signupStyles['inputWrapper']}>

                <div className={signupStyles['userInfo']}>
                    <div className={signupStyles['inputRow']}>
                        <div className={signupStyles['nameInputWrapper']}>
                            <img src={focusedOn === 'name' ? SignatureBadgeFilledSVG : SignatureBadgeSVG} width={24}
                                 alt={'Signature icon'}/>
                            <div
                                className={`${signupStyles['nameInput']} ${focusedOn === 'name' && signupStyles['focusedOnInput']}`}
                            >
                                <input
                                    tabIndex={1}
                                    onFocus={() => setFocusedOn('name')}
                                    onBlur={() => setFocusedOn('none')}
                                    type={'text'} name={'First Name'} placeholder={'Enter your name'} required/>
                            </div>
                        </div>
                        <div
                            className={`${signupStyles['emailInputWrapper']} ${focusedOn === 'email' && signupStyles['focusedOnInput']}`}>

                            <img src={focusedOn === 'email' ? EmailFilledSVG : EmailSVG} width={24} alt={'Email icon'}/>
                            <input
                                onFocus={() => setFocusedOn('email')}
                                onBlur={() => setFocusedOn('none')}

                                type={'text'} name={'Email'} placeholder={'Enter your email'} required/>
                        </div>
                    </div>

                    <div className={signupStyles['inputRow']}>

                        <div className={`${signupStyles['lastNameInputWrapper']}
                             ${focusedOn === 'name' && signupStyles['focusedOnInput']}`}
                        >
                            <input
                                tabIndex={2}
                                onFocus={() => setFocusedOn('name')}
                                onBlur={() => setFocusedOn('none')}
                                type={'text'} name={'Last Name'} placeholder={'Enter your last name'}/>
                        </div>
                        <div className={`${signupStyles['phoneInputWrapper']}
                             ${focusedOn === 'call' && signupStyles['focusedOnInput']}`}
                        >
                            <img src={focusedOn === 'call' ? CallFilledSVG : CallSVG} width={24}
                                 alt={'Phone call icon'}/>
                            <input

                                onFocus={() => setFocusedOn('call')}
                                onBlur={() => setFocusedOn('none')}
                                type={'tel'} name={'telephone'} placeholder={'Enter your phone number'} required/>
                        </div>
                    </div>

                </div>
                <div className={signupStyles['passwordsContainer']}>
                    <div className={`${focusedOn === 'passcode' && signupStyles['focusedOnInput']}`}>
                        <img src={focusedOn === 'passcode' ? PasscodeFilledSVG : PasscodeSVG} width={24}
                             alt={'PasscodeSVG icon'}/>
                        <input
                            onFocus={() => setFocusedOn('passcode')}
                            onBlur={() => setFocusedOn('none')}
                            type={'password'} name={'password'} placeholder={'Create unique password'} required/></div>

                    <div className={`${focusedOn === 'passcode' && signupStyles['focusedOnInput']}`}>

                        <img src={focusedOn === 'passcode' ? PasscodeFilledSVG : PasscodeSVG} width={24}
                             alt={'PasscodeSVG icon'}/>

                        <input
                            onFocus={() => setFocusedOn('passcode')}
                            onBlur={() => setFocusedOn('none')}
                            type={'password'} name={'password'} placeholder={'Repeat your creation'} required/></div>
                </div>
            </div>

            <button>Sign up</button>
        </div>


    </form>
}