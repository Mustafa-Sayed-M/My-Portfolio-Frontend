import React from "react";
import { useQuery } from "@tanstack/react-query";
import LoadingScreen from "../Components/LoadingScreen";
import {
    getProfileData,
    getProjectsData,
    getServicesData,
    getSkillsData,
} from "../Utils/api";

const DataContext = React.createContext();

export const DataContextProvider = ({ children }) => {
    const { data, isLoading, error } = useQuery({
        queryKey: ["all_data"],
        queryFn: async () => {
            const [profile, skills, projects, services] = await Promise.all([
                getProfileData(),
                getSkillsData(),
                getProjectsData(),
                getServicesData(),
            ]);
            return { profile, skills, projects, services };
        },
        refetchOnWindowFocus: false,
    });

    return (
        <DataContext.Provider
            value={{
                profileData: data?.profile,
                skillsData: data?.skills,
                projectsData: data?.projects,
                servicesData: data?.services,
                isLoading,
                error,
            }}
        >
            <LoadingScreen isLoading={isLoading} />
            {!isLoading && children}
        </DataContext.Provider>
    );
};

export const useDataContext = () => React.useContext(DataContext);