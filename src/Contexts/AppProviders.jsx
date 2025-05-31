import { DataContextProvider } from "./DataContext";
import { NavContextProvider } from "./NavContext";

const AppProviders = ({ children }) => {
    return (
        <DataContextProvider>
            <NavContextProvider>
                {children}
            </NavContextProvider>
        </DataContextProvider>
    );
};

export default AppProviders;
