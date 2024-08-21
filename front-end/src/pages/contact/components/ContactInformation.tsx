import contactInfoStyle from './../styles/contact.info.module.css'
import AddressSVG from './../../../assets/icons/pin-drop.svg'
import CallSVG from './../../../assets/icons/call.svg'
import EmailSVG from './../../../assets/icons/email.svg'

export default function ContactInformation() {

    return <section className={contactInfoStyle['contactInfo']}>
        <div className={contactInfoStyle['eachInfoSource']}>
            <div className={contactInfoStyle['eachInfoTitle']}>
                <img src={AddressSVG} alt={'Address icon'} width={24}/>
                <h4>Address</h4>
            </div>
            <div>
                <h2>Bon Voyage LLC</h2>
                <h2>ქუთაისი, 4600 საქართველო</h2>
            </div>
        </div>


        <div className={contactInfoStyle['eachInfoSource']}>

            <div className={contactInfoStyle['eachInfoTitle']}>
                <img src={CallSVG} alt={'Phone call icon'} width={24}/>
                <h4>Phone Number</h4>
            </div>
            <h2>+995 5XX XX XX XX</h2>
        </div>

        <div className={contactInfoStyle['eachInfoSource']}>

            <div className={contactInfoStyle['eachInfoTitle']}>
                <img src={EmailSVG} alt={'Email icon'} width={24}/>

                <h4>Email</h4>
            </div>

            <h2>support@bonvoyage.com</h2>
        </div>

    </section>
}