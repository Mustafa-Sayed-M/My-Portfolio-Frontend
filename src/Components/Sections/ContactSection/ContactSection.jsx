import ContactForm from "./Components/ContactForm";
import ContactInfo from "./Components/ContactInfo";

function ContactSection() {
    return (
        <section className="contact-section bg-black-color" id="contact">
            <div className="container grid lg:grid-cols-2 gap-10">
                {/* Contact Form */}
                <ContactForm />
                {/* Contact Info */}
                <ContactInfo />
            </div>
        </section>
    )
}

export default ContactSection;