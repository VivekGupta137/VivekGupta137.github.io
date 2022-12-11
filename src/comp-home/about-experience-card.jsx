import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import AboutExperienceSelect from "./about-experience-select";

const AboutExperienceCard = () => {
    const [selectedItem, setSelectedItem] = useState(null);

    let experience = [
        {
            id: "experience_wd",
            company: "Western Digital",
            title: "Senior Software Engineer",
            start: new Date("2021-01-11"),
            end: undefined,
            description: [
                `Started my journey here with Full Stack Development of two internal websites in PHP using MVC Architecture. Used AJAX, JavaScript based libraries like jQuery for client-side scripting. Experimented with Plotly.js, a JavaScript library, for user interactive graphical visualization charts, and explored NextJS a react based framework. Data source was Redshift DB.`,

                `Worked on a Data Engineering project for a line of Semiconductor manufacturing test data, responsible for building full stack analytics web app, ensuring end to end data flow (data transfer), structuring of data (table schema design) from raw format (using Python based parser and converter), data collection, storage (Redshift/Object Store) and visualization using Plotly charts.`,

                `Worked on a Big Data project for Hard Drives test data, used Apache Spark for building the big data pipeline capable of handling GBs test data of data every hour. `,

                `Worked on a Big Data project for Hard Drives test data, used Apache Spark for building the big data pipeline capable of handling GBs test data of data every hour. `,
            ],
        },
    ];

    let getNumYears = (start, end) => {
        let res = end.getFullYear() - start.getFullYear();
        // console.log(start.getFullYear(), end.getFullYear());
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
                {experience.map((exp, idx) => {
                    let { company, title, start, end, description, id } = {
                        ...exp,
                        end: new Date(),
                    };
                    console.log(start, end);
                    return (
                        <motion.div
                            layoutId={id}
                            onClick={() => {
                                // setSelectedItem(null);
                                setSelectedItem({
                                    ...exp,
                                    end,
                                });
                            }}
                            className="p-5 cursor-pointer rounded-3xl shadow-soft mx-2 my-2 min-w-[150px] hover:bg-purple-200 transition-colors delay-100 duration-300"
                        >
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
                        </motion.div>
                        // <div className="mx-2 my-2 p-5 shadow-soft rounded-3xl max-w-[350px] ">
                        //     <div className="text-4xl">{company}</div>
                        //     <div className="font-mono">{title}</div>
                        //     <div className="">{description}</div>
                        // </div>
                    );
                })}
            </div>
            <AnimatePresence>
                {!!selectedItem && (
                    <AboutExperienceSelect
                        {...selectedItem}
                        handleClick={() => setSelectedItem(null)}
                    />
                )}
            </AnimatePresence>
        </div>
    );
};

export default AboutExperienceCard;
