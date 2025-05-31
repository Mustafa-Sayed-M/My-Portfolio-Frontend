import { useDataContext } from "../../../Contexts/DataContext";
import HeadSection from "../Components/HeadSection";
import SkillCard from "./Components/SkillCard";

function SkillsSection() {

    const { skillsData, isLoading } = useDataContext();

    return (
        <section className="skills-section" id="skills">
            <div className="container">
                {/* Head Section */}
                <HeadSection
                    title="My Skills"
                    description="We put your ideas and thus your wishes in the form of a unique web project that inspires you and you customers."
                />
                {/*  */}
                <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5">
                    {
                        isLoading ? (
                            <>Loading...</>
                        ) : (
                            skillsData.skills.map((skill, index) => (<SkillCard
                                index={index}
                                key={index}
                                skillData={skill}
                            />))
                        )
                    }
                </div>
            </div>
        </section>
    )
}

export default SkillsSection;