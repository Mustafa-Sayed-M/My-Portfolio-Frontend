import { useDataContext } from '../../../../Contexts/DataContext';

function ContactInfo() {

    const { profileData, isLoading } = useDataContext();

    return (
        <div className="contact-info flex flex-col gap-y-5">
            {/*  */}
            <ul className='space-y-2'>
                {
                    isLoading ? (
                        <>Loading...</>
                    ) : (
                        profileData.profile.personalInfo.contact_info.map(({ href, name, label, icon }, index) => (<li
                            key={index}
                            data-aos='zoom-in-up'
                            data-aos-delay={index * 50}
                        >
                            <a
                                href={href}
                                target='_blank'
                                className='flex items-center gap-3 bg-primary-color/10 p-3 rounded-md transition sm:hover:bg-primary-color group'
                            >
                                <i className={`fa-solid fa-${icon} fa-fw max-md:text-2xl text-4xl text-primary-color sm:group-hover:text-white transition`}></i>
                                <div className='flex-1'>
                                    <p className='mb-1'>{name}</p>
                                    <h3 className='font-semibold sm:text-xl'>{label}</h3>
                                </div>
                                <i className='fa-solid fa-arrow-right fa-fw text-2xl -rotate-45 opacity-50 sm:group-hover:rotate-0 sm:group-hover:opacity-100 transition'></i>
                            </a>
                        </li>))
                    )
                }
            </ul>
            {/*  */}
            <img
                width={'100%'}
                height={'auto'}
                data-aos='zoom-in-up'
                data-aos-delay='500'
                src='/assets/images/contact-hero.webp'
                className='rounded-3xl border border-primary-color opacity-50 max-lg:-order-1'
                alt='Contact Hero'
            />
        </div>
    )
}

export default ContactInfo;