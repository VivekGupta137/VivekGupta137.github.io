const AboutExperienceCard = () => {
    let experience = [
        {
            company: "Western Digital",
            title: "Senior Software Engineer",
            start: new Date("2021-01-11"),
            end: undefined,
            description:
                "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus modi ex numquam ipsa accusamus",
        },
    ];

    let getNumYears = (start, end) => {
        let res = end.getFullYear() - start.getFullYear();
        console.log(start.getFullYear(), end.getFullYear());
        return res;
    };
    let getNumMonths = (start, end) => {
        let res = Math.abs(end.getMonth() - start.getMonth()) + 1;
        // console.log(start.getFullYear(), end.getFullYear());
        return res;
    };

    return (
        <div className="mx-2 my-2 ">
            <div className="text-3xl font-mono">Experience</div>
            <div className="flex flex-wrap">
                {experience.map(
                    ({
                        company,
                        title,
                        start,
                        end = new Date(),
                        description,
                    }) => (
                        <div className="p-5 cursor-pointer rounded-3xl shadow-soft mx-2 my-2 min-w-[150px] hover:bg-purple-200 transition-all delay-100 duration-300">
                            <div className="flex">
                                <div className="text-6xl font-bold font-mono">
                                    {getNumYears(start, end)}
                                </div>
                                <div className="text-3xl self-end">yr</div>
                                <div className="text-4xl self-end font-bold font-mono ml-2">
                                    {getNumMonths(start, end)}
                                </div>
                                <div className="text-xl self-end">months</div>
                            </div>
                            <div className="my-2 text-4xl font-semibold font-sans">
                                {company}
                            </div>
                            <div className="text-xl font-mono">{title}</div>
                        </div>
                        // <div className="mx-2 my-2 p-5 shadow-soft rounded-3xl max-w-[350px] ">
                        //     <div className="text-4xl">{company}</div>
                        //     <div className="font-mono">{title}</div>
                        //     <div className="">{description}</div>
                        // </div>
                    )
                )}
            </div>
        </div>
    );
};

export default AboutExperienceCard;
