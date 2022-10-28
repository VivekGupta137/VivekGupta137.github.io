import AboutDescription from "./about-description";
import AboutEducation from "./about-education";
import AboutExperience from "./about-experience";

const About = () => {
    return (
        <div className="min-h-screen ">
            <div className="flex flex-col h-28 bg-yellow-300">
                <div id="line1" className="flex grow text-5xl font-bold gap-5">
                    <div>HTML</div>
                    <div>CSS</div>
                    <div>Javascript</div>
                </div>
                <div id="line2" className="flex grow text-5xl font-bold gap-5">
                    <div>HTML2</div>
                    <div>CSS2</div>
                    <div>Javascript2</div>
                </div>
            </div>
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
