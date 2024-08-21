import contactFormStyles from '../styles/contact.form.module.css'

export default function ContactForm() {


    return <form className={contactFormStyles['formContainer']}>

        <div className={contactFormStyles['formTitle']}>
            <h1>Have something to say?</h1>
            <h4>Don't hesitate to send us a message!</h4></div>

        <div className={contactFormStyles['nameInputs']}>
            <input type={'text'} required maxLength={255} placeholder={'First Name'}/>
            <input type={'text'} required maxLength={255} placeholder={'Last Name'}/>
        </div>

        <input type={'email'} required placeholder={'Email'}/>
        <textarea placeholder={'Share some feedback...'} required/>

        <button type="submit">Send</button>

    </form>

}