import ReactIcon from "../icons/reactIcon";
import { AnimatePresence, motion } from "framer-motion";
import AboutSkillsSelect from "./about-skills-select";
import { useState } from "react";

const AboutSkillsCard = () => {
    const [selectedItem, setSelectedItem] = useState(null);
    let skills = [
        {
            title: "Full Stack",
            whatis: "A full stack web developer is a person who can develop both client and server software.",
            id: "skills_fullstack",
            tech: [
                {
                    title: "UI/UX",
                    shortDescription:
                        "Can design the User-Centered interface for an app or website.",
                    stars: 5,
                    icons: [
                        { name: "Canva", icon: <ReactIcon /> },
                        { name: "Figma", icon: <ReactIcon /> },
                        { name: "Adobe Illustrator", icon: <ReactIcon /> },
                    ],
                },
                {
                    title: "Frontend",
                    shortDescription:
                        "Can code the user interface for website with fluid animations.",
                    icons: [
                        { name: "react", icon: <ReactIcon /> },
                        { name: "NextJS", icon: <ReactIcon /> },
                        { name: "Dash", icon: <ReactIcon /> },
                        { name: "TailwindCSS", icon: <ReactIcon /> },
                        { name: "Material UI", icon: <ReactIcon /> },
                        { name: "ThreeJS", icon: <ReactIcon /> },
                        { name: "Plotly", icon: <ReactIcon /> },
                        { name: "Framer-motion", icon: <ReactIcon /> },
                    ],
                    stars: 5,
                },
                {
                    title: "Backend",
                    shortDescription:
                        "Can develop the backend process necessary for running an app or website from scratch.",
                    icons: [
                        { name: "Spring boot", icon: <ReactIcon /> },
                        { name: "Spring cloud", icon: <ReactIcon /> },
                        { name: "PHP", icon: <ReactIcon /> },
                        { name: "Flask", icon: <ReactIcon /> },
                        { name: "Firebase", icon: <ReactIcon /> },
                    ],
                    stars: 5,
                },
            ],
            projects: [
                {
                    title: "miningtest.tech",
                    link: "https://www.miningtest.tech/",
                    tags: ["UI/UX", "Full-Stack"],
                    description: "Developed Mining Test Tech website.",
                },
                {
                    title: "Building web apps at WD",
                    tags: ["UI/UX", "Full-Stack", "Big Data", "2+ Years"],
                    description: "Developed data intensive web applications.",
                },
            ],
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
            title: "BIG DATA",
            whatis: "A big data engineer is a professional who is responsible for developing, maintaining, testing, analyzing, and evaluating a company's data. Big data refers to extremely large data sets.",
            id: "skills_bigdata",
            tech: [
                {
                    title: "Big Data",
                    shortDescription:
                        "Can design the User-Centered interface for an app or website.",
                    stars: 5,
                    icons: [
                        { name: "Apache Hadoop", icon: <ReactIcon /> },
                        { name: "Apache Spark", icon: <ReactIcon /> },
                        { name: "Hive", icon: <ReactIcon /> },
                        { name: "Presto", icon: <ReactIcon /> },
                        { name: "Elasticsearch", icon: <ReactIcon /> },
                        { name: "MySQL", icon: <ReactIcon /> },
                        { name: "HBase", icon: <ReactIcon /> },
                        { name: "Cassandra", icon: <ReactIcon /> },
                    ],
                },
                {
                    title: "Cloud Computing",
                    shortDescription:
                        "Can design the User-Centered interface for an app or website.",
                    stars: 5,
                    icons: [
                        { name: "AWS EC2", icon: <ReactIcon /> },
                        { name: "AWS S3", icon: <ReactIcon /> },
                        { name: "AWS Lambda", icon: <ReactIcon /> },
                        { name: "Amazon EMR", icon: <ReactIcon /> },
                        { name: "Azure DevOps", icon: <ReactIcon /> },
                        { name: "Virtual Machines", icon: <ReactIcon /> },
                        { name: "Blob Storage", icon: <ReactIcon /> },
                        { name: "Active Directory ", icon: <ReactIcon /> },
                    ],
                },
            ],
            projects: [
                {
                    title: "Building big data pipelines at WD",
                    tags: ["Big Data", "2+ Years"],
                    description: "Developed data intensive web applications.",
                },
            ],
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
                {skills.map((skill) => {
                    let { title, icons, id } = skill;
                    return (
                        <motion.div
                            layoutId={id}
                            onClick={() => {
                                // setSelectedItem(null);
                                setSelectedItem({ ...skill });
                            }}
                            className="mx-2 my-2 p-5 shadow-soft rounded-3xl sm:w-[300px] w-full  cursor-pointer"
                        >
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
                        </motion.div>
                    );
                })}
            </div>
            <AnimatePresence>
                {!!selectedItem && (
                    <AboutSkillsSelect
                        {...selectedItem}
                        handleClick={() => setSelectedItem(null)}
                    />
                )}
            </AnimatePresence>
        </div>
    );
};

export default AboutSkillsCard;
