function ServicesItems({ servicesData, isLoading }) {
    return (
        <ul
            className="space-y-2 "
        >
            {
                isLoading ? (
                    <>Loading...</>
                ) : (
                    servicesData.services.map(({ name, description, icon_url }, index) => (<li
                        key={index}
                        data-aos='zoom-in-up'
                        data-aos-delay={index * 50}
                        className='group'
                    >
                        <div className='flex md:items-center max-md:flex-col gap-5 p-5 rounded-md relative z-10 bg-primary-color/10 transition sm:hover:bg-primary-color duration-300 ease-out group-odd:bg-primary-color'>
                            {/* Number */}
                            <div className="service-num font-bold text-xl max-md:-order-1">
                                {(index + 1).toString().padStart(2, '0')}
                            </div>
                            {/* Name */}
                            <h3 className="font-bold text-2xl md:flex-1">{name}</h3>
                            {/* Description */}
                            <p className="opacity-75 md:flex-1 font-medium">{description}</p>
                            {/* Icon */}
                            <img
                                src={icon_url}
                                width={60}
                                alt={name}
                                className="md:ms-auto max-md:mx-auto max-md:-order-1"
                            />
                        </div>
                    </li>))
                )
            }
        </ul>
    )
}

export default ServicesItems;