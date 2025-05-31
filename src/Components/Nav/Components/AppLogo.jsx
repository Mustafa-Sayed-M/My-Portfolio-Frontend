import { useNav } from "../../../Contexts/NavContext";

function AppLogo() {

    const { setActiveSection, manualScrollRef } = useNav();

    const handleClick = (e) => {
        e.preventDefault();
        const headerEle = document.getElementById('header');
        if (headerEle) {
            manualScrollRef.current = true;
            setActiveSection('header')
            headerEle.scrollIntoView({ behavior: 'smooth' });

            const observer = new IntersectionObserver(
                (entries) => {
                    const entry = entries[0];
                    if (entry.isIntersecting) {
                        manualScrollRef.current = false;
                        observer.disconnect();
                    }
                },
                { threshold: 0.7 }
            );

            observer.observe(headerEle);
        }
    };

    return (
        <a
            href={`/`}
            onClick={handleClick}
            data-aos='fade-right'
            data-aos-delay='300'
            className="font-medium text-4xl"
        >
            BA<span className="font-bold text-primary-color">7</span>R
        </a>
    )
}

export default AppLogo;