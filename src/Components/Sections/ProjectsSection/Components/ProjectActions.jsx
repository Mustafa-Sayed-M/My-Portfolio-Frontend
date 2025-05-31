import { Link } from "react-router-dom";

function ProjectActions({ projectId, liveDemoUrl }) {

    const sharedStyles = `block py-2 px-4 rounded-md bg-primary-color/50 flex-1 text-center transition sm:hover:bg-primary-color font-medium`;

    return (
        <div className="project-actions flex items-center gap-3 rounded-md">
            {/* Details */}
            <Link
                title="Live Demo"
                to={`/project-details/${projectId}`}
                className={sharedStyles}
            >
                Details
            </Link>
            {/* Demo */}
            <a
                target="_blank"
                title="Live Demo"
                href={liveDemoUrl}
                className={sharedStyles}
            >
                Demo
            </a>
        </div>
    )
}

export default ProjectActions;