import React from "react";
import { useNav } from "../../../Contexts/NavContext";

function NavUtilities() {

    const { menuIsOpen, setMenuIsOpen } = useNav();
    const menuIsOpenRef = React.useRef(menuIsOpen);

    const handleClick = (e) => {
        e.stopPropagation();
        setMenuIsOpen(prev => !prev)
    };

    React.useEffect(() => {
        menuIsOpenRef.current = menuIsOpen;
    }, [menuIsOpen]);

    React.useEffect(() => {
        const handleClickDocument = () => {
            if (menuIsOpenRef.current) {
                setMenuIsOpen(false);
            }
        }

        document.addEventListener('click', handleClickDocument);
        return () => document.removeEventListener('click', handleClickDocument);
    }, [setMenuIsOpen]);

    return (
        <div className="nav-utilities flex items-center max-sm:gap-2 sm:gap-3">
            {/* Whatsapp Link */}
            <a
                data-aos='zoom-in'
                data-aos-delay='300'
                href="tel:+20 01122124968"
                className="flex items-center max-sm:justify-center gap-1.5 sm:py-2 sm:px-4 rounded-full font-medium bg-primary-color max-sm:w-9 max-sm:h-9"
            >
                <i className="fa-brands fa-whatsapp fa-fw text-2xl"></i>
                <span className="max-sm:hidden">Whatsapp</span>
            </a>
            {/* Nav Menu Toggler */}
            <button
                data-aos='zoom-in'
                data-aos-delay='400'
                type="button"
                onClick={handleClick}
                className="nav-menu-toggler lg:hidden"
            >
                <i className={`fa-solid fa-${menuIsOpen ? 'xmark' : 'bars'} fa-fw text-3xl`}></i>
            </button>
        </div>
    )
}

export default NavUtilities;