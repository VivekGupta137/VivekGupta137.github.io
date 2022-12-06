import { motion, useScroll, useSpring } from "framer-motion";

const ScrollIndicator = () => {
    const { scrollYProgress, scrollY } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001,
    });

    return (
        <motion.div
            className="fixed left-0 right-0 origin-left bottom-0 h-2 bg-red-500 w-full "
            style={{ scaleX: scaleX }}
        ></motion.div>
    );
};

export default ScrollIndicator;
