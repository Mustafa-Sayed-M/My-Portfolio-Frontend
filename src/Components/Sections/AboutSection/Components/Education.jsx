import { useDataContext } from '../../../../Contexts/DataContext';

function Education() {

    const { profileData, isLoading } = useDataContext();

    return (
        <div className="education">
            {/*  */}
            <div className="flex items-center gap-3 mb-7" data-aos='fade' data-aos-delay='100'>
                <i className="fa-solid fa-graduation-cap fa-fw text-primary-color text-5xl"></i>
                <h2 className="text-3xl xl:text-4xl font-bold leading-tight bg-gradient-to-r from-primary-color to-white bg-clip-text text-transparent">
                    My Education
                </h2>
            </div>
            {/*  */}
            <ul className='space-y-3'>
                {
                    isLoading ? (
                        <>location...</>
                    ) : (
                        profileData.profile.education.map(({ year, course, institution }, index) => (<li key={index}
                            data-aos='zoom-in-up'
                            data-aos-delay={(index * 50) + 200}
                            className='group'
                        >
                            <div className='p-5 rounded-md bg-primary-color/10 shadow-md transition sm:hover:bg-primary-color duration-300 ease-out group group-even:bg-primary-color'>
                                <h3 className='year text-primary-color font-bold mb-2 sm:group-hover:text-white duration-300 transition ease-out group-even:text-white'>{year}</h3>
                                <h3 className='font-bold text-xl md:text-3xl mb-2'>{course}</h3>
                                <p className='font-medium'>{institution}</p>
                            </div>
                        </li>))
                    )
                }
            </ul>
        </div>
    )
}

export default Education;