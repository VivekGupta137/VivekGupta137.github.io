import ReactIcon from "../icons/reactIcon";
import { AnimatePresence, motion } from "framer-motion";
import AboutSkillsSelect from "./about-skills-select";
import { useState } from "react";
import CanvaIcon from "../icons/canvaIcon";
import FigmaIcon from "../icons/figmaIcon";
import AdobeIllustratorIcon from "../icons/adobeIllustrator";
import dashIcon from "../assets/dash-logo-stripe.svg";
import nextjsIcon from "../assets/icons8-next.js.svg";
import threejsIcon from "../assets/icons8-3ds-max.svg";
import framerIcon from "../assets/icons8-framer.svg";
import muiIcon from "../assets/icons8-material-ui.svg";
import tailwindcssIcon from "../assets/icons8-tailwindcss.svg";
import plotlyIcon from "../assets/plotly.png";
import webpackIcon from "../assets/icons8-webpack.svg";
import firebaseIcon from "../assets/icons8-firebase.svg";
import viteIcon from "../assets/vite.svg";
import flaskIcon from "../assets/flask.svg";
import springCloudIcon from "../assets/spring-cloud-logo.png";
import springBootIcon from "../assets/icons8-spring-boot.svg";

import azureIcon from "../assets/icons8-azure.svg";
import awsIcon from "../assets/icons8-amazon-web-services.svg";
import cassandraIcon from "../assets/cassandra.png";
import hbaseIcon from "../assets/toppng.com-hbase-logo-649x512.png";
import sqlIcon from "../assets/icons8-sql.svg";
import elasticsearchIcon from "../assets/icons8-elasticsearch.svg";
import prestoIcon from "../assets/prestodb_logo_icon_169838.svg";
import hiveIcon from "../assets/Apache_Hive_logo.svg";
import sparkIcon from "../assets/apache_spark.png";
import hadoopIcon from "../assets/icons8-hadoop-distributed-file-system.svg";
// import azblobstoreIcon from "../assets/icons8-azure-storage-blob.svg";

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
                        {
                            name: "Canva",
                            icon: <CanvaIcon className="w-8 h-8" />,
                        },
                        {
                            name: "Figma",
                            icon: <FigmaIcon className="w-8 h-8" />,
                        },
                        {
                            name: "Adobe Illustrator",
                            icon: <AdobeIllustratorIcon className="w-8 h-8" />,
                        },
                    ],
                },
                {
                    title: "Frontend",
                    shortDescription:
                        "Can code the user interface for website with fluid animations.",
                    icons: [
                        {
                            name: "react",
                            icon: <ReactIcon className="w-6 h-6" />,
                        },
                        {
                            name: "NextJS",
                            icon: (
                                <img
                                    className="h-8"
                                    src={nextjsIcon}
                                    alt="Dash"
                                />
                            ),
                        },
                        {
                            name: "Dash",
                            icon: (
                                <img
                                    className="h-8"
                                    src={dashIcon}
                                    alt="Dash"
                                />
                            ),
                        },
                        {
                            name: "TailwindCSS",
                            icon: (
                                <img
                                    className="h-8"
                                    src={tailwindcssIcon}
                                    alt="TailwindCSS"
                                />
                            ),
                        },
                        {
                            name: "Material UI",
                            icon: (
                                <img className="h-8" src={muiIcon} alt="MUI" />
                            ),
                        },
                        {
                            name: "ThreeJS",
                            icon: (
                                <img
                                    className="h-8"
                                    src={threejsIcon}
                                    alt="ThreeJS"
                                />
                            ),
                        },
                        {
                            name: "Plotly",
                            icon: (
                                <img
                                    className="h-6 w-6"
                                    src={plotlyIcon}
                                    alt="Plotly"
                                />
                            ),
                        },
                        {
                            name: "Framer-motion",
                            icon: (
                                <img
                                    className="h-8"
                                    src={framerIcon}
                                    alt="Framer-motion"
                                />
                            ),
                        },
                        {
                            name: "Vite",
                            icon: (
                                <img
                                    className="h-8"
                                    src={viteIcon}
                                    alt="Vite"
                                />
                            ),
                        },
                        {
                            name: "Webpack",
                            icon: (
                                <img
                                    className="h-8"
                                    src={webpackIcon}
                                    alt="Webpack"
                                />
                            ),
                        },
                    ],
                    stars: 5,
                },
                {
                    title: "Backend",
                    shortDescription:
                        "Can develop the backend process necessary for running an app or website from scratch.",
                    icons: [
                        {
                            name: "Spring boot",
                            icon: (
                                <img
                                    className="h-8"
                                    src={springBootIcon}
                                    alt="Spring boot"
                                />
                            ),
                        },
                        {
                            name: "Spring cloud",
                            icon: (
                                <img
                                    className="h-6"
                                    src={springCloudIcon}
                                    alt="Spring cloud"
                                />
                            ),
                        },
                        // { name: "PHP", icon: <ReactIcon className="h-6" /> },
                        {
                            name: "Flask",
                            icon: (
                                <img
                                    className="h-8"
                                    src={flaskIcon}
                                    alt="Flask"
                                />
                            ),
                        },
                        {
                            name: "Firebase",
                            icon: (
                                <img
                                    className="h-8"
                                    src={firebaseIcon}
                                    alt="Firebase"
                                />
                            ),
                        },
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
                        {
                            name: "Apache Hadoop",
                            icon: (
                                <img
                                    className="h-8"
                                    src={hadoopIcon}
                                    alt="Apache Hadoop"
                                />
                            ),
                        },
                        {
                            name: "Apache Spark",
                            icon: (
                                <img
                                    className="h-8"
                                    src={sparkIcon}
                                    alt="Apache Spark"
                                />
                            ),
                        },
                        {
                            name: "Hive",
                            icon: (
                                <img
                                    className="h-8"
                                    src={hiveIcon}
                                    alt="Hive"
                                />
                            ),
                        },
                        {
                            name: "Presto",
                            icon: (
                                <img
                                    className="h-8"
                                    src={prestoIcon}
                                    alt="Presto"
                                />
                            ),
                        },
                        {
                            name: "Elasticsearch",
                            icon: (
                                <img
                                    className="h-8"
                                    src={elasticsearchIcon}
                                    alt="Elasticsearch"
                                />
                            ),
                        },
                        {
                            name: "SQL",
                            icon: (
                                <img className="h-8" src={sqlIcon} alt="SQL" />
                            ),
                        },
                        {
                            name: "HBase",
                            icon: (
                                <img
                                    className="h-8"
                                    src={hbaseIcon}
                                    alt="HBase"
                                />
                            ),
                        },
                        {
                            name: "Cassandra",
                            icon: (
                                <img
                                    className="h-8"
                                    src={cassandraIcon}
                                    alt="Cassandra"
                                />
                            ),
                        },
                    ],
                },
                {
                    title: "Cloud Computing",
                    shortDescription:
                        "Can design the User-Centered interface for an app or website.",
                    stars: 5,
                    icons: [
                        {
                            name: "AWS",
                            icon: (
                                <img className="h-8" src={awsIcon} alt="AWS" />
                            ),
                        },
                        {
                            name: "Azure",
                            icon: (
                                <img
                                    className="h-8"
                                    src={azureIcon}
                                    alt="Azure"
                                />
                            ),
                        },
                        // { name: "AWS EC2", icon: <ReactIcon /> },
                        // { name: "AWS S3", icon: <ReactIcon /> },
                        // { name: "AWS Lambda", icon: <ReactIcon /> },
                        // { name: "Amazon EMR", icon: <ReactIcon /> },
                        // { name: "Azure DevOps", icon: <ReactIcon /> },
                        // { name: "Virtual Machines", icon: <ReactIcon /> },
                        // { name: "Blob Storage", icon: <ReactIcon /> },
                        // { name: "Active Directory ", icon: <ReactIcon /> },
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
                    let { title, id, tech } = skill;
                    let iconList = [];
                    tech.forEach(({ icons }) => {
                        iconList = [...iconList, ...icons];
                    });
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
                            <div className="flex flex-wrap gap-1 mt-5">
                                {iconList.map(({ name, icon }) => (
                                    <div title={name} className="">
                                        {icon}
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
