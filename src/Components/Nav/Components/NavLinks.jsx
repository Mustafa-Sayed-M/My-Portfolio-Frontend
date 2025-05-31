import React from "react";
import { useNav } from "../../../Contexts/NavContext";

const linksData = [
    { label: 'Home', href: '#header', sectionId: 'header' },
    { label: 'Services', href: '#services', sectionId: 'services' },
    { label: 'Projects', href: '#projects', sectionId: 'projects' },
    { label: 'About', href: '#about', sectionId: 'about' },
    { label: 'Skills', href: '#projects', sectionId: 'skills' },
    { label: 'Contact', href: '#contact', sectionId: 'contact' },
];

function NavLinks() {

    const { menuIsOpen, setMenuIsOpen, activeSection, setActiveSection, manualScrollRef } = useNav();
    const navLinksRef = React.useRef(null);
    const navLinksUlRef = React.useRef(null);

    const handleClick = (e, sectionId) => {
        e.preventDefault();
        const sectionEle = document.getElementById(sectionId);
        if (sectionEle) {
            manualScrollRef.current = true;
            sectionEle.scrollIntoView({ behavior: 'smooth' });
            setActiveSection(sectionId);

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

            observer.observe(sectionEle);

        }
        setMenuIsOpen(false);
    };

    React.useEffect(() => { // Handle Resize For Anchors Links.
        const handleResize = () => {
            if (navLinksUlRef.current) {
                const anchorsEle = document.querySelectorAll('a');
                anchorsEle.forEach(a => {
                    a.classList.remove('transition');
                })
            }
        }

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    React.useEffect(() => { // Handle Resize For Nav Links.
        const handleResize = () => {
            if (navLinksRef.current) {
                navLinksRef.current.classList.remove('transition');
            }
            if (window.innerWidth > 1024) {
                setMenuIsOpen(false);
            }
        }

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [setMenuIsOpen]);

    React.useEffect(() => { // Handle Scroll Spy.
        const sections = document.querySelectorAll('section[id]');
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.5,
        };

        const observerCallback = (entries) => {
            if (manualScrollRef.current) return;
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                }
            });
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions);

        sections.forEach(section => observer.observe(section));

        return () => observer.disconnect();
    }, [setActiveSection, manualScrollRef]);

    return (
        <div
            ref={navLinksRef}
            className={`nav-links lg:ms-auto max-lg:absolute max-lg:z-50 max-lg:mt-3 max-lg:top-full max-lg:left-0 max-lg:w-full transition ${menuIsOpen ? 'max-lg:scale-x-100 max-lg:opacity-100' : 'max-lg:scale-x-75 max-lg:opacity-0 max-lg:pointer-events-none'}`}
        >
            <div className="max-lg:container">
                <ul
                    ref={navLinksUlRef}
                    onClick={e => e.stopPropagation()}
                    className="flex lg:items-center gap-x-1 gap-y-2 max-lg:flex-col max-lg:rounded-md max-lg:shadow-md"
                >
                    {
                        linksData.map(({ label, href, sectionId }, index) => (<li
                            key={index}
                            data-aos='fade-left'
                            data-aos-delay={index * 50}
                            className="max-lg:w-full"
                        >
                            <a
                                href={href}
                                onClick={e => handleClick(e, sectionId)}
                                className={`block font-medium sm:text-lg lg:text-xl transition p-2 relative lg:before:bg-gradient-to-r lg:before:from-black-color lg:before:via-primary-color lg:before:to-black-color lg:before:shadow-md lg:before:shadow-primary-color lg:before:w-full lg:before:scale-x-0 ${activeSection === sectionId ? 'lg:before:scale-x-100' : ''} lg:before:h-0.5 lg:before:absolute lg:before:z-10 lg:before:bottom-0 lg:before:left-0 lg:before:rounded lg:before:transition ${activeSection === sectionId ? 'max-lg:bg-primary-color' : 'max-lg:bg-primary-color/10 max-lg:backdrop-blur-md'} max-lg:rounded-md`}
                            >{label}</a>
                        </li>))
                    }
                </ul>
            </div>
        </div>
    )
}

export default NavLinks;