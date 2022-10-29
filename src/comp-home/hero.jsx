import { motion } from "framer-motion";
import { useRef } from "react";
import profileimg from "../assets/profile.png";
import handwave from "../assets/waving_hand_sign_512.gif";
import HeroProfile from "./hero-profile";

const Hero = () => {
    const constraintsRef = useRef(null);

    return (
        <div className="h-screen" ref={constraintsRef}>
            <div className="flex h-full flex-col items-center justify-center">
                <HeroProfile />
                <div className="text-5xl leading-normal">
                    <div>
                        <div className="inline-block">Hi</div>
                        <div className="inline-block scale-x-[-1] translate-x-2 translate-y-3">
                            <img
                                src={handwave}
                                className="h-16"
                                draggable="false"
                            />
                        </div>
                    </div>
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
