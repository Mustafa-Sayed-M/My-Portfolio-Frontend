function LoadingScreen({ isLoading }) {
    return (
        <div className={`loading-screen h-screen flex items-center justify-center bg-black-color text-white fixed w-full z-[9999] transition duration-500 ease-out ${isLoading ? '' : '-translate-y-full'}`}>
            <h1 className="tracking-[1rem] text-xl text-clip-animation">
                LOADING...
            </h1>
        </div>
    )
}

export default LoadingScreen;