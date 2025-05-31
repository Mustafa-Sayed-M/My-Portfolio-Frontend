import React from "react";

const HeadSection = React.memo(({ title = '', description = '' }) => {
    return (
        <div className="head-section text-center mb-10">
            <h2 className="text-3xl xl:text-4xl font-bold leading-tight bg-gradient-to-r from-primary-color to-white bg-clip-text text-transparent">
                {title}
            </h2>
            {description && <p className="opacity-75 mt-3 font-medium md:max-w-[750px] mx-auto leading-relaxed">{description}</p>}
        </div>
    )
})

export default HeadSection;