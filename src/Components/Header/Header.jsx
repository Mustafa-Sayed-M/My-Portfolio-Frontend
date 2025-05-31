import HeaderContent from "./Components/HeaderContent";
import HeaderHero from "./Components/HeaderHero";

function Header() {
    return (
        <section
            style={{
                backgroundImage: `url(/assets/images/header-bg.svg)`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundAttachment: 'fixed'
            }}
            className="header-section pt-[150px] pb-[50px] min-h-screen flex items-center relative"
            id="header"
        >
            <div className="container grid xl:grid-cols-2 gap-x-32 gap-y-10 items-center">
                {/* Header Content */}
                <HeaderContent />
                {/* Header Hero */}
                <HeaderHero />
            </div>
        </section>
    )
}

export default Header;