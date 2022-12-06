import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import HobbyCodingIcon from "../icons/hobbyCodingIcon";
import HobbyCSGOIcon from "../icons/hobbyCSGOIcon";
import HobbyYoutubeIcon from "../icons/youtubeIcon";
import AboutDescriptionSelect from "./about-description-select";

const AboutDescriptionCard = () => {
    const [selectedItem, setSelectedItem] = useState(null);

    const about = {
        id: "aboutcard",
        name: "Vivek Gupta",
        hobbies: [
            {
                title: "Playing Counter Strike",
                icon: <HobbyCSGOIcon width="64px" />,
            },
            {
                title: "Watching Youtube Videos",
                icon: <HobbyYoutubeIcon width="64px" />,
            },
            {
                title: "Building Amazing Websites",
                icon: <HobbyCodingIcon width="64px" />,
            },
        ],
        description: (
            <div>
                <p>
                    People find me to be an upbeat, self-motivated team player
                    with excellent communication skills. For the past 2 years I
                    have been working in Big Data technologies which include
                    technology like{" "}
                    <b>Hadoop, Spark with Python, Hive, Kafka,Trino, Presto</b>,
                    etc as well as delivered several data analytics projects
                    which include <b>React, Spring boot, Dash</b>, etc tech
                    stack for web layer.
                </p>
                <p>
                    As a part of Agile Development, I have a track record of
                    maintaining consistent delivery and actively interacting
                    with the client.
                </p>
                <p>
                    I'm working at <b>Western Digital</b> with some really
                    amazing people, and I want to make sure it's right for you
                    too. Reach out if you want to talk about emerging tech,
                    creating software products, or cricket.
                </p>
            </div>
        ),
    };

    return (
        <div className="mx-2 my-2 max-w-[390px]">
            <div className="text-3xl font-mono">About Me</div>
            <motion.div
                layoutId={about.id}
                className="mx-2 my-2 p-5 flex flex-col cursor-pointer rounded-3xl shadow-soft hover:bg-orange-200 transition-colors delay-100 duration-300"
                onClick={() => {
                    setSelectedItem(about);
                }}
            >
                <div className="h-32 relative">
                    <div className="w-full absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]">
                        <div className="text-3xl text-center font-rounded w-full">
                            I am Vivek Gupta
                        </div>
                    </div>
                </div>
                <div>
                    I am a Full Stack Java Developer, I have a master degree in
                    Computer science, I have Strong experience working with
                    Python, Java, and Javascript Projects in Agile environments.
                </div>
            </motion.div>
            <AnimatePresence>
                {!!selectedItem && (
                    <AboutDescriptionSelect
                        {...selectedItem}
                        handleClick={() => setSelectedItem(null)}
                    />
                )}
            </AnimatePresence>
        </div>
    );
};

export default AboutDescriptionCard;
