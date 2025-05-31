function SkillCard({ index, skillData: { icon_url, name, level } }) {
    return (
        <div
            data-aos='zoom-in-up'
            data-aos-delay={index * 50}
        >
            <div className="mb-3 p-5 rounded-3xl bg-primary-color/5 group sm:hover:bg-primary-color/20 border border-transparent sm:hover:border-primary-color transition duration-300 ease-out">
                <img
                    src={icon_url}
                    alt={name}
                    width={60}
                    className="mx-auto mb-3 group-hover:scale-110 transition duration-300 ease-out"
                />
                <h2 className="font-bold text-xl opacity-60 text-center group-hover:opacity-100 group-hover:text-primary-color transition duration-300 ease-out">{level}%</h2>
            </div>
            <h3 className="font-semibold text-primary-color text-center">{name}</h3>
        </div>
    )
}

export default SkillCard;