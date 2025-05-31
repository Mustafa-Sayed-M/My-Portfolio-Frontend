import React from "react";
import AppLogo from "./Components/AppLogo";
import NavLinks from "./Components/NavLinks";
import NavUtilities from "./Components/NavUtilities";

function Nav() {

    const [scrollY, setScrollY] = React.useState(0);

    React.useEffect(() => {

        setScrollY(window.scrollY);

        const handleScroll = () => {
            setScrollY(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav
            style={{
                boxShadow: scrollY > 675 ? '0 0 4px #8750f7' : 'none'
            }}
            className={`py-3 md:py-5 lg:py-7 transition duration-300 ease-in-out fixed top-0 left-0 w-full z-50 ${scrollY > 675 ? 'bg-black-color' : scrollY > 100 ? 'backdrop-blur-md' : ''}`}>
            <div className="container flex items-center max-lg:justify-between gap-10">
                {/* App Logo */}
                <AppLogo />
                {/* Nav Links */}
                <NavLinks />
                {/* Nav Utilities */}
                <NavUtilities />
            </div>
        </nav>
    )
}

export default Nav;