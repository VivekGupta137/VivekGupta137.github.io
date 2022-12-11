import { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";
import ContactSmallForm from "./contact-small-form";
import { AnimatePresence, LayoutGroup, motion } from "framer-motion";
import { useFloating } from "@floating-ui/react-dom";
import AboutContactButton from "./about-contact-button";
const AboutExtrasCard = () => {
    const [cv, setCv] = useState(false);

    // let reference = useRef();
    let cvref = useRef();
    // const click = useClick(context);

    useEffect(() => {
        if (cv) {
            cvref.current.classList.remove("shadow-soft");
            cvref.current.classList.add("shadow-inset");
        } else {
            cvref.current.classList.add("shadow-soft");
            cvref.current.classList.remove("shadow-inset");
        }
    }, [cv]);

    let handleCVClick = () => {
        setCv((x) => !!!x);
    };

    return (
        <div className="mx-2 my-2 ">
            <div className=" flex flex-col gap-4 justify-end text-lg font-thin">
                <AboutContactButton />
                <motion.div
                    ref={cvref}
                    onClick={() => {
                        handleCVClick();
                    }}
                    className="p-5 select-none shadow-soft rounded-full cursor-pointer text-center"
                    layout
                >
                    Download CV
                </motion.div>
            </div>
        </div>
    );
};

export default AboutExtrasCard;
