function HeaderHero() {
    return (
        <div className="header-hero flex items-center justify-center max-xl:-order-1">
            {/* Image Container */}
            <div className="image-container relative rounded-3xl" data-aos='zoom-in'>
                {/* Image */}
                <img
                    src="/assets/images/header-hero.jpg"
                    width={450}
                    height={450}
                    alt="Header Hero"
                    className="border border-primary-color max-md:w-[300px] max-md:h-[300px] md:w-[450px] md:h-[450px] object-cover rounded-3xl relative z-10"
                />
                {/* Shadow */}
                <div className="w-[200px] h-[300px] bg-primary-color blur-2xl opacity-25 absolute left-[-25px] bottom-[-25px]"></div>
            </div>
        </div>
    )
}

export default HeaderHero;