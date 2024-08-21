import ContactForm from "./components/ContactForm.tsx";
import ContactInformation from "./components/ContactInformation.tsx";
import ContactLayout from "./ContactLayout.tsx";

export default function Contact() {
    document.title = 'Contact'

    return <ContactLayout>
        <ContactForm/>

        <ContactInformation/>
    </ContactLayout>
}