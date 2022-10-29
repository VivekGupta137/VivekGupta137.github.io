import ReactIcon from "../icons/reactIcon";

const AboutSkillsCard = () => {
    let skills = [
        {
            title: "Full Stack",
            icons: [
                {
                    name: "react",
                    icon: <ReactIcon />,
                },
                {
                    name: "react",
                    icon: <ReactIcon />,
                },
                {
                    name: "react",
                    icon: <ReactIcon />,
                },
                {
                    name: "react",
                    icon: <ReactIcon />,
                },
                {
                    name: "react",
                    icon: <ReactIcon />,
                },
                {
                    name: "react",
                    icon: <ReactIcon />,
                },
                {
                    name: "react",
                    icon: <ReactIcon />,
                },
                {
                    name: "react",
                    icon: <ReactIcon />,
                },
                {
                    name: "react",
                    icon: <ReactIcon />,
                },
                {
                    name: "react",
                    icon: <ReactIcon />,
                },
                {
                    name: "react",
                    icon: <ReactIcon />,
                },
                {
                    name: "react",
                    icon: <ReactIcon />,
                },
            ],
        },
        {
            title: "Big Data",
            icons: [
                {
                    name: "react",
                    icon: <ReactIcon />,
                },
                {
                    name: "react",
                    icon: <ReactIcon />,
                },
                {
                    name: "react",
                    icon: <ReactIcon />,
                },
            ],
        },
        {
            title: "DevOps",
            icons: [
                {
                    name: "react",
                    icon: <ReactIcon />,
                },
                {
                    name: "react",
                    icon: <ReactIcon />,
                },
                {
                    name: "react",
                    icon: <ReactIcon />,
                },
            ],
        },
    ];
    return (
        <div className="mx-2 my-2 ">
            <div className="text-3xl font-mono">Skills</div>
            <div className="flex flex-wrap justify-center md:justify-start">
                {skills.map(({ title, icons }) => (
                    <div className="mx-2 my-2 p-5 shadow-soft rounded-3xl w-[300px] md:w-[200px] ">
                        <div className="text-4xl">{title}</div>
                        <div className="flex flex-wrap mt-5">
                            {icons.map(({ name, icon }) => (
                                <div className="w-8 h-8 ">
                                    <div title={name} className=" ">
                                        {icon}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AboutSkillsCard;
