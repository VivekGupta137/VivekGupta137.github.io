import { motion } from "framer-motion";
import CloseIcon from "../icons/closeIcon";

const AboutExperienceSelect = ({
    id,
    title,
    company,
    description,
    pointers,
    handleClick,
}) => {
    return (
        <motion.div
            layout
            className="absolute h-full w-full top-0 left-0 flex items-center justify-center backdrop-blur"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <motion.div
                layoutId={id}
                className="relative p-5 w-full max-w-[700px]  mx-4 rounded-3xl shadow-inset bg-[var(--color-bg)] "
            >
                <div
                    onClick={() => handleClick()}
                    className="absolute right-9 top-0 translate-x-[50%] translate-y-[-50%] rounded-full cursor-pointer shadow-soft bg-red-300 hover:bg-red-400 transition-colors p-1 "
                >
                    <CloseIcon />
                </div>
                <div className="absolute top-0 translate-y-[-50%] flex gap-2 ">
                    <div className="px-2 text-3xl font-extrabold font-rounded shadow-soft rounded-3xl bg-[var(--color-bg)]">
                        {company}
                    </div>
                </div>
                <div className="pt-3">
                    {description.map((des, idx) => {
                        return <div className="text-left mt-2">{des}</div>;
                    })}
                </div>
            </motion.div>
        </motion.div>
    );
};

export default AboutExperienceSelect;
