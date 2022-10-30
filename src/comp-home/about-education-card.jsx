import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import AboutEducationSelect from "./about-education-select";

const AboutEducationCard = () => {
    const [selectedItem, setSelectedItem] = useState(null);

    console.log(selectedItem);
    let education = [
        {
            id: "IIITB",
            college:
                "International Institute of Information Technology, Bangalore",
            start: 2019,
            end: 2021,
            degree: "M.Tech",
            stream: "Computer Science",
            cgpa: 3.46,
            maxcgpa: 4,
            location: "Electronic City, Bengaluru",
        },
        {
            id: "BIT",
            college: "Birsa Institute of Technology, Sindri",
            start: 2015,
            end: 2019,
            degree: "B.Tech",
            stream: "Computer Science",
            cgpa: 8.06,
            maxcgpa: 10,
            location: "Sindri, Dhanbad",
        },
    ];
    return (
        <div className=" mx-2 my-2">
            <div className="text-3xl font-mono">Education</div>
            <div className=" ">
                <motion.div
                    // layoutId="educationlayout"
                    layout
                    className="flex flex-wrap justify-center"
                >
                    {education.map((e) => (
                        <motion.div
                            layoutId={e.id}
                            onClick={() => {
                                // setSelectedItem(null);
                                setSelectedItem(e);
                            }}
                            className="p-5 cursor-pointer rounded-3xl shadow-soft mx-2 my-2 min-w-[150px] bg-[var(--color-bg)]  hover:bg-green-200 transition-colors delay-100 duration-300"
                        >
                            <div className="flex">
                                <div className="text-6xl font-bold font-mono">
                                    {e.end - e.start}
                                </div>
                                <div className="text-3xl self-end">yrs</div>
                            </div>
                            <div className="text-4xl font-sans">{e.degree}</div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
            <AnimatePresence>
                {!!selectedItem && (
                    <AboutEducationSelect
                        {...selectedItem}
                        handleClick={() => setSelectedItem(null)}
                    />
                )}
            </AnimatePresence>
        </div>
    );
};

export default AboutEducationCard;
