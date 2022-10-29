const AboutEducationCard = () => {
    let education = [
        {
            title: "education 1",
            start: 2019,
            end: 2021,
            degree: "M.Tech",
            stream: "Computer Science",
        },
        {
            title: "education 2",
            start: 2015,
            end: 2019,
            degree: "B.Tech",
            stream: "Computer Science",
        },
    ];
    return (
        <div className=" mx-2 my-2">
            <div className="text-3xl font-mono">Education</div>
            <div className="flex flex-wrap justify-center">
                {education.map(({ start, end, degree, stream }) => (
                    <div className="p-5 cursor-pointer rounded-3xl shadow-soft mx-2 my-2 min-w-[150px] hover:bg-green-200 transition-all delay-100 duration-300">
                        <div className="flex">
                            <div className="text-6xl font-bold font-mono">
                                {end - start}
                            </div>
                            <div className="text-3xl self-end">yrs</div>
                        </div>
                        <div className="text-4xl font-sans">{degree}</div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AboutEducationCard;
