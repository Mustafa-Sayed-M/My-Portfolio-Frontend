import Education from './Components/Education';
import Experience from './Components/Experience';

function AboutSection() {
    return (
        <section className="about-section bg-black-color" id="about">
            <div className="container grid lg:grid-cols-2 gap-10">
                {/* Experience */}
                <Experience />
                {/* Education */}
                <Education />
            </div>
        </section>
    )
}

export default AboutSection;