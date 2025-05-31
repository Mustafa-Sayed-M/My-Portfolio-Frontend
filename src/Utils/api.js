const api = import.meta.env.VITE_API;

const fetchData = async (endpoint) => {
    try {
        const res = await fetch(`${api}${endpoint}`);
        return await res.json();
    } catch (error) {
        console.log(error);
        return { error };
    }
};

export const getProfileData = async () => {
    return await fetchData('/profile');
};
export const getProjectsData = async () => {
    return await fetchData('/projects');
};
export const getSkillsData = async () => {
    return await fetchData('/skills');
};
export const getServicesData = async () => {
    return await fetchData('/services');
};