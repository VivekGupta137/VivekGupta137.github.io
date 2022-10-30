import { motion } from "framer-motion";
import AboutDescription from "./about-description";
import AboutDescriptionCard from "./about-description-card";
import AboutEducation from "./about-education";
import AboutEducationCard from "./about-education-card";
import AboutExperience from "./about-experience";
import AboutExperienceCard from "./about-experience-card";
import AboutExtrasCard from "./about-extras-card";
import AboutSkills from "./about-skills";
import AboutSkillsCard from "./about-skills-card";

const About = () => {
    const spring = {
        type: "spring",
        stiffness: 700,
        damping: 30,
    };
    return (
        <div className="min-h-screen ">
            {/* <AboutSkills /> */}
            <div className="">
                <motion.div
                    layout
                    transition={spring}
                    className="max-w-[800px] m-auto flex flex-wrap justify-between relative"
                >
                    <AboutDescriptionCard />
                    <AboutEducationCard />
                    <div className="basis-full">
                        <AboutSkillsCard />
                    </div>
                    <AboutExperienceCard />
                    <AboutExtrasCard />
                </motion.div>
            </div>
            {/* <div className="flex flex-col items-center mt-5">
                <div className="flex flex-wrap w-2/3">
                    <div className="basis-1/2 p-2">
                        <AboutDescription />
                    </div>
                    <div className="basis-1/2 p-2">
                        <AboutEducation />
                    </div>
                    <div className="basis-full p-2">
                        <AboutExperience />
                    </div>
                </div>
            </div> */}
        </div>
    );
};

export default About;
