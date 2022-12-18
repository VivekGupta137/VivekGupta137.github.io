import { AnimatePresence, LayoutGroup, motion } from "framer-motion";
import PaperPlaneIcon from "../icons/paperPlaneIcon";

const AboutContactEmailSending = (props) => {
    let floatingVariant = {
        start: {
            scale: 1,
            rotate: 0,
            x: 0,
            y: 10,
            opacity: 0,
        },
        animating: {
            scale: [1, 1.2, 1.3, 1],
            rotate: [0, 20, 20, 0],
            rotateZ: [0, 0, 0],
            x: [-10, 20, 20, -10],
            y: [10, -20, -20, 10],
            opacity: [1, 1, 0, 0],
            transition: {
                repeat: Infinity,
                duration: 2,
            },
        },
    };

    return (
        <motion.div layout className="flex" {...props}>
            <motion.div
                variants={floatingVariant}
                initial="start"
                animate="animating"
            >
                <PaperPlaneIcon />
            </motion.div>
        </motion.div>
    );
};

export default AboutContactEmailSending;
