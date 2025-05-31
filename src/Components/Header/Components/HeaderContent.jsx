import { useDataContext } from '../../../Contexts/DataContext';

function HeaderContent() {

    const { profileData, isLoading } = useDataContext();

    return (
        <div className="header-content">
            <p className="mb-3 font-semibold" data-aos='fade-down'>Hi, I'm {isLoading || !profileData ? (<>Loading...</>) : (profileData.profile.personalInfo.name)}</p>
            <h1
                data-aos='fade-right'
                data-aos-delay='100'
                className="text-xl sm:text-2xl md:text-3xl xl:text-5xl font-bold leading-tight bg-gradient-to-r from-primary-color to-white bg-clip-text text-transparent mb-3"
            >
                {
                    isLoading || !profileData ? (
                        <>Loading...</>
                    ) : (
                        profileData.profile.personalInfo.title
                    )
                }
            </h1>
            <p
                data-aos='fade-up'
                data-aos-delay='200'
                className="font-medium opacity-75 mb-7"
            >
                {
                    isLoading || !profileData ? (
                        <>Loading...</>
                    ) : (
                        profileData.profile.personalInfo.bio
                    )
                }
            </p>
            {/* Actions */}
            <div className="actions flex items-center gap-7 max-md:flex-col">
                {/* Download Cv */}
                <div
                    data-aos='zoom-in'
                    data-aos-delay='300'
                >
                    {
                        isLoading ? (
                            <>Loading...</>
                        ) : (
                            <a
                                target="_blank"
                                href={profileData.profile.personalInfo.cv_url}
                                className="flex items-center gap-2 rounded-full py-2 px-4 text-primary-color border border-primary-color font-medium transition duration-300 ease-in-out sm:hover:bg-primary-color sm:hover:text-white"
                            >
                                <span>Download Cv</span>
                                <i className="fa-solid fa-download fa-fw"></i>
                            </a>
                        )
                    }
                </div>
                {/* Social Profiles */}
                <ul className="flex items-center gap-2">
                    {
                        isLoading || !profileData ? (
                            <>Loading...</>
                        ) : (
                            profileData.profile.personalInfo.socialProfilesData.map(({ name, href, icon }, index) => (<li
                                key={index}
                                data-aos='fade-up'
                                data-aos-delay={(index * 50) + 300}
                            >
                                <a
                                    href={href}
                                    target="_blank"
                                    className="block w-10 h-10 rounded-full text-center leading-10 text-primary-color border border-primary-color transition duration-300 ease-in-out sm:hover:bg-primary-color sm:hover:text-white"
                                >
                                    <i className={`fa-brands fa-${icon} fa-fw text-lg`}></i>
                                    <span className="sr-only">{name}</span>
                                </a>
                            </li>))
                        )
                    }
                </ul>
            </div>
        </div>
    )
}

export default HeaderContent;