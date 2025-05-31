function ProjectTechs({ techs }) {
    return (
        <ul className="flex items-center gap-2">
            {
                techs.map(({ icon_url, name }, index) => (<li
                    key={index}
                    className=""
                >
                    <img
                        src={icon_url}
                        title={name}
                        width={20}
                        alt={name}
                    />
                </li>))
            }
        </ul>
    )
}

export default ProjectTechs;