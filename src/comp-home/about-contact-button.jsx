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

    let handleContactClick = () => {
        setOpen((x) => !!!x);
    };
    return (
        <div className="relative">
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
            </motion.div>
            <AnimatePresence>
                {open && (
                    <motion.div
                        ref={floating}
                        style={{
                            position: strategy,
                            top: 0,
                            left: 0,
                            width: "max-content",
                        }}
                        initial={{ top: 0, left: 0, opacity: 0 }}
                        animate={{ top: y, left: x, opacity: 1 }}
                        exit={{ opacity: 0, top: -200 }}
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
