import { motion } from "framer-motion";
import { useRef } from "react";
import profileimg from "../assets/profile.png";
import handwave from "../assets/waving_hand_sign_512.gif";
import HeroProfile from "./hero-profile";
import HeroRoles from "./hero-roles";

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
                <HeroRoles />
            </div>
        </div>
    );
};

export default Hero;
