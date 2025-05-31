import HeadSection from "../Components/HeadSection";
import ServicesItems from "./Components/ServicesItems";
import { useDataContext } from "../../../Contexts/DataContext";

function ServicesSection() {

    const { servicesData, isLoading } = useDataContext();

    return (
        <section className="services-section bg-black-color" id="services">
            <div className="container">
                {/* Head Section */}
                <HeadSection
                    title="My Quality Services"
                    description="We put your ideas and thus your wishes in the form of a unique web project that inspires you and you customers."
                />
                {/* Services Items */}
                <ServicesItems
                    isLoading={isLoading}
                    servicesData={servicesData}
                />
            </div>
        </section>
    )
}

export default ServicesSection;