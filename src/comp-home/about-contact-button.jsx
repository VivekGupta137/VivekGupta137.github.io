import { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";
import ContactSmallForm from "./contact-small-form";
import { AnimatePresence, LayoutGroup, motion } from "framer-motion";
import {
    autoPlacement,
    flip,
    offset,
    shift,
    useFloating,
} from "@floating-ui/react-dom";
import AboutContactEmailSending from "./about-contact-email-sending";
import AboutContactEmailSent from "./about-contact-email-sent";

const AboutContactButton = () => {
    // open the contact form or not
    const [open, setOpen] = useState(false);
    const { x, y, reference, floating, strategy, context } = useFloating({
        open: open,
        onOpenChange: setOpen,
        // placement: "left-start",
        middleware: [
            offset(20),
            autoPlacement({
                alignment: "left-start",
            }),
            shift(),
        ],
    });

    // useEffect(() => {}, [reference, floating]);
    // console.log(reference);

    let handleContactClick = () => {
        setOpen((x) => !!!x);
    };

    return (
        <div>
            <motion.div
                layoutId="contact"
                ref={reference}
                whileHover={{
                    scale: 1.1,
                }}
                whileTap={{ scale: 0.9 }}
                className={`p-5 select-none rounded-full cursor-pointer text-center ${
                    open ? "shadow-inset" : "shadow-soft"
                }`}
                onClick={() => {
                    handleContactClick();
                }}
            >
                Contact
                {/* <AboutContactEmailSending /> */}
            </motion.div>
            <AnimatePresence>
                {open && (
                    <motion.div
                        ref={floating}
                        style={{
                            position: strategy,
                            width: "max-content",
                        }}
                        initial={{
                            opacity: 0,
                        }}
                        animate={{ top: y, left: x, opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{
                            type: "spring",
                            stiffness: 200,
                            duration: 0.45,
                            opacity: {
                                duration: 0.2,
                            },
                        }}
                    >
                        <ContactSmallForm
                            toggleContact={handleContactClick}
                        ></ContactSmallForm>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default AboutContactButton;
