import ProjectActions from "./ProjectActions";
import ProjectTechs from "./ProjectTechs";

function ProjectCard({ index, projectData: { banner, description, github_repo_url, live_demo_url, name, techs, _id } }) {
    return (
        <div
            data-aos='zoom-in-left'
            data-aos-delay={index * 50}
            className="project-card"
        >
            {/* Banner */}
            <div className="banner mb-3">
                <img
                    src={banner}
                    className="rounded-md"
                />
            </div>
            {/* Info */}
            <div className="project-info p-3 bg-primary-color/10 rounded-md mb-3">
                {/* Name */}
                <h3 className="font-semibold text-xl line-clamp-1 mb-2">{name}</h3>
                {/* Description */}
                <p className="opacity-75 line-clamp-3 font-medium mb-4">{description}</p>
                {/* Info Foot */}
                <div className="project-info-foot flex items-center justify-between">
                    {/* Techs */}
                    <ProjectTechs techs={techs} />
                    {/* Github */}
                    <a
                        href={github_repo_url}
                        title="Github Repo"
                        className="text-2xl transition sm:hover:text-primary-color"
                    >
                        <span className="sr-only">Github Repo</span>
                        <i className="fa-brands fa-github fa-fw"></i>
                    </a>
                </div>
            </div>
            {/* Actions */}
            <ProjectActions
                projectId={_id}
                liveDemoUrl={live_demo_url}
            />
        </div>
    )
}

export default ProjectCard;