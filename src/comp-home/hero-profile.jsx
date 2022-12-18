import profileimg from "../assets/lowresprofile.jpg";
import { motion } from "framer-motion";

const HeroProfile = () => {
    return (
        <motion.div
            className="cursor-move shadow-soft rounded-full overflow-hidden"
            drag
            dragConstraints={{
                left: -100,
                right: 100,
                top: -100,
                bottom: 0,
            }}
            whileHover={{ scale: [null, 1.2, 1.1] }}
            whileTap={{ scale: 1 }}
            animate={{ y: [-50, 0, -50] }}
            transition={{
                scale: {
                    duration: 0.3,
                },
            }}
        >
            <img draggable="false" className="h-40" src={profileimg} />
        </motion.div>
    );
};

export default HeroProfile;
