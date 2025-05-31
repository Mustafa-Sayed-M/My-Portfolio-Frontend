import HeadSection from "../Components/HeadSection";
import { useDataContext } from "../../../Contexts/DataContext";
import ProjectCard from "./Components/ProjectCard";

function ProjectsSection() {

    const { projectsData, isLoading } = useDataContext();

    return (
        <section className="projects-section" id="projects">
            <div className="container">
                {/* Head Section */}
                <HeadSection
                    title="My Recent Projects"
                    description="Explore some of the recent projects I've built using modern web technologies."
                />
                {/*  */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {
                        isLoading ? (
                            <>Loading...</>
                        ) : (
                            projectsData.projects.map((project, index) => (<ProjectCard
                                projectData={project}
                                index={index}
                                key={index}
                            />))
                        )
                    }
                </div>
            </div>
        </section>
    )
}

export default ProjectsSection;