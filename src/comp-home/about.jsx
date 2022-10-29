import AboutDescription from "./about-description";
import AboutEducation from "./about-education";
import AboutExperience from "./about-experience";
import AboutSkills from "./about-skills";

const About = () => {
    return (
        <div className="min-h-screen ">
            <AboutSkills />
            <div className="flex flex-col items-center mt-5">
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
            </div>
        </div>
    );
};

export default About;
