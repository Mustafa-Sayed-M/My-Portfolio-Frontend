import { useDataContext } from '../../../../Contexts/DataContext';

function Experience() {

    const { profileData, isLoading } = useDataContext();

    return (
        <div className="experience">
            {/*  */}
            <div className="flex items-center gap-3 mb-7" data-aos='fade' data-aos-delay='100'>
                <i className="fa-solid fa-medal fa-fw text-primary-color text-5xl"></i>
                <h2 className="text-3xl xl:text-4xl font-bold leading-tight bg-gradient-to-r from-primary-color to-white bg-clip-text text-transparent">
                    My Experience
                </h2>
            </div>
            {/*  */}
            <ul className='space-y-3'>
                {
                    isLoading ? (
                        <>location...</>
                    ) : (
                        profileData?.profile?.experience.map(({ year, role, company, location }, index) => (<li key={index}
                            className='group'
                            data-aos='zoom-in-up'
                            data-aos-delay={(index * 50) + 200}
                        >
                            <div className='p-5 rounded-md bg-primary-color/10 shadow-md transition sm:hover:bg-primary-color duration-300 ease-out group group-odd:bg-primary-color'>
                                <h3 className='year text-primary-color font-bold mb-2 sm:group-hover:text-white duration-300 transition ease-out group-odd:text-white'>{year}</h3>
                                <h3 className='font-bold text-xl md:text-3xl mb-2'>{role}</h3>
                                <p className='font-medium'>{company} - {location}</p>
                            </div>
                        </li>))
                    )
                }
            </ul>
        </div>
    )
}

export default Experience;