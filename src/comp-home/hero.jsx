import { motion } from "framer-motion";
import { useRef } from "react";
import profileimg from "../assets/profile.png";

const Hero = () => {
    const constraintsRef = useRef(null);

    return (
        <div className="h-screen" ref={constraintsRef}>
            <div className="flex h-full flex-col items-center justify-center">
                <motion.div
                    className="cursor-move shadow-soft rounded-full overflow-hidden"
                    drag
                    dragConstraints={{
                        left: -100,
                        right: 100,
                        top: -100,
                        bottom: 0,
                    }}
                >
                    <img draggable="false" className="h-40" src={profileimg} />
                </motion.div>
                <div className="text-5xl leading-normal">
                    <div>Hi </div>
                    <div>I'm Vivek Gupta</div>
                </div>
                <div className="text-1xl sm:text-2xl">
                    <div>Tech Enthusiast</div>
                    <div>Creative Full Stack Developer</div>
                    <div>Big Data Engineer</div>
                    <div>UI/UX Designer</div>
                    <div>SEO Expert</div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
