import { motion } from "framer-motion";
import CloseIcon from "../icons/closeIcon";

const AboutDescriptionSelect = ({ id, description, hobbies, handleClick }) => {
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

                <div className="font-rounded">{description}</div>
                <div className="my-4">
                    <div className="font-bold font-rounded ">
                        During my pastime I like to
                    </div>
                    <div className="flex justify-evenly ">
                        {hobbies.map((hobby) => (
                            <div className="flex flex-col items-center">
                                <div title={hobby["title"]}>
                                    {hobby["icon"]}
                                </div>
                                <div className="hidden md:block font-thin font-rounded">
                                    {hobby["title"]}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="flex items-center gap-1">
                    <div className="font-bold font-rounded">Email:</div>
                    <div>vivekgpt107@gmail.com</div>
                </div>
                <div className="flex items-center gap-1">
                    <div className="font-bold font-rounded">Phone:</div>
                    <div className="oldstyle-nums ">+91 9523629331</div>
                </div>
                <div className="italic">
                    React out if you want to talk about emerging tech, creating
                    software products, or cricket.
                </div>
            </motion.div>
        </motion.div>
    );
};

export default AboutDescriptionSelect;
