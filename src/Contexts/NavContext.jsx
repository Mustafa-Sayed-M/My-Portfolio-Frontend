import React from "react";

const NavContext = React.createContext();

export const NavContextProvider = ({ children }) => {

    const [menuIsOpen, setMenuIsOpen] = React.useState(false);
    const [activeSection, setActiveSection] = React.useState(() => {
        return sessionStorage.getItem('lastActiveSection') || 'header';
    });
    const manualScrollRef = React.useRef(false);
    React.useEffect(() => {
        sessionStorage.setItem('lastActiveSection', activeSection);
    }, [activeSection]);

    return (
        <NavContext.Provider
            value={{
                menuIsOpen, setMenuIsOpen,
                activeSection, setActiveSection,
                manualScrollRef
            }}
        >
            {children}
        </NavContext.Provider>
    )
};

export const useNav = () => React.useContext(NavContext);