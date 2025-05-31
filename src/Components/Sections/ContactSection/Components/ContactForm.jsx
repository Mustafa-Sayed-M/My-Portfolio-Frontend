import React from 'react';
import emailjs from '@emailjs/browser';

const inputsData = [
    {
        type: 'text',
        required: true,
        id: 'name',
        autoComplete: 'on',
        placeholder: 'Name',
        name: 'from_name'
    },
    {
        type: 'email',
        required: true,
        id: 'email',
        autoComplete: 'on',
        placeholder: 'Email address',
        name: 'from_email'
    },
    {
        type: 'tel',
        id: 'phone',
        autoComplete: 'on',
        placeholder: 'Phone Number',
        name: 'phone'
    }
];

function ContactForm() {

    const [isSubmitting, setIsSubmitting] = React.useState(false);

    const sendEmail = (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        emailjs.sendForm(
            import.meta.env.VITE_EMAILJS_SERVICE_ID,
            import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
            e.target,
            import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        ).then(
            () => {
                console.log('message sent.');
            },
            (error) => {
                console.log(error.text);
                alert('Something went wrong ❌');
            }
        ).finally(() => {
            setIsSubmitting(false);
        })
    };

    return (
        <form onSubmit={sendEmail} className="bg-primary-color/10 p-4 lg:p-10 rounded-3xl">
            <div className="mb-7">
                <h2 className="text-3xl xl:text-4xl font-bold leading-tight bg-gradient-to-r from-primary-color to-white bg-clip-text text-transparent mb-3">
                    Let's work together!
                </h2>
                <p className="opacity-75 font-medium">I design and code beautifully simple things and i love what i do. Just simple like that!</p>
            </div>
            <div className="fields-wrapper space-y-3">
                {/* Inputs Fields */}
                {
                    inputsData.map(({ ...inputData }, index) => (
                        <div
                            key={index}
                            data-aos='zoom-in-up'
                            data-aos-delay={index * 50}
                            className="input-group"
                        >
                            <input
                                {...inputData}
                                className={`w-full rounded-md p-2 bg-black-color placeholder:transition-opacity focus:placeholder:opacity-20 border border-white/10 transition focus:border-primary-color`}
                            />
                        </div>
                    ))
                }
                {/* Textarea */}
                <textarea
                    data-aos='zoom-in-up'
                    data-aos-delay={(inputsData.length * 50) + 50}
                    required
                    style={{
                        resize: 'none'
                    }}
                    id="message"
                    name="message"
                    placeholder="Message"
                    className={`min-h-[180px] w-full rounded-md p-2 bg-black-color placeholder:transition-opacity focus:placeholder:opacity-20 border border-white/10 transition focus:border-primary-color`}
                ></textarea>
                {/* Submit */}
                <button
                    data-aos='zoom-in-up'
                    disabled={isSubmitting}
                    data-aos-delay={(inputsData.length * 50) + 100}
                    className="py-2 px-4 rounded-full bg-primary-color font-semibold max-md:w-full"
                >
                    {
                        isSubmitting ? (
                            <>
                                <i className='fa-solid fa-spinner fa-fw animate-spin me-2'></i>
                                <span>Sending...</span>
                            </>
                        ) : (
                            <>Send Message</>
                        )
                    }
                </button>
            </div>
        </form>
    )
};

export default ContactForm;