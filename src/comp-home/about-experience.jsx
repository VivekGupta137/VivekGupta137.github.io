const AboutExperience = () => {
    let experience = [
        { title: "experience 1" },
        { title: "experience 2" },
        { title: "experience 3" },
    ];
    return (
        <div className="flex flex-col h-full gap-5 ">
            {experience.map((ex, idx) => (
                <div
                    key={idx}
                    className="rounded-lg px-5 py-2 shadow-soft bg-cyan-200 "
                >
                    {ex.title}
                </div>
            ))}
        </div>
    );
};

export default AboutExperience;
