const AboutEducation = () => {
    let education = [
        {
            title: "education 1",
            start: "2019",
            end: "2021",
            degree: "M.Tech",
            stream: "Computer Science",
        },
        {
            title: "education 2",
            start: "2019",
            end: "2021",
            degree: "M.Tech",
            stream: "Computer Science",
        },
        {
            title: "education 3",
            start: "2019",
            end: "2021",
            degree: "M.Tech",
            stream: "Computer Science",
        },
    ];
    return (
        <div className="flex flex-col h-full gap-5">
            {education.map((ed, idx) => (
                <div
                    key={idx}
                    className="basis-1/3 rounded-lg px-5 py-2 shadow-soft bg-lime-200"
                >
                    {ed.title}
                </div>
            ))}
        </div>
    );
};

export default AboutEducation;
