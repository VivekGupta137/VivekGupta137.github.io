import { AnimatePresence, motion } from "framer-motion";
import AcademicCapIcon from "../icons/academicCapIcon";
import CalculatorIcon from "../icons/calculatorIcon";
import CloseIcon from "../icons/closeIcon";
import LocationIcon from "../icons/locationIcon";

const AboutEducationSelect = ({
    id = null,
    college = null,
    cgpa,
    location,
    start,
    end,
    handleClick,
    degree,
    maxcgpa,
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
                <div className="absolute top-0 translate-y-[-50%] flex gap-2 ">
                    <div className="px-2 text-3xl font-extrabold font-rounded shadow-soft rounded-3xl bg-[var(--color-bg)]">
                        {degree}
                    </div>
                    <div className="px-2 text-xl font-light shadow-soft rounded-3xl bg-[var(--color-bg)] flex items-center">
                        <div>
                            {start} - {end}
                        </div>
                    </div>
                </div>

                <div className="mt-2 flex items-center justify-between">
                    <div className="overflow-hidden font-rounded font-bold break-inside-avoid-page text-2xl flex gap-2">
                        <div className="self-center">
                            <AcademicCapIcon />
                        </div>
                        <div className="">{college}</div>
                    </div>
                    <div
                        onClick={() => handleClick()}
                        className="rounded-full cursor-pointer shadow-soft bg-red-300 hover:bg-red-400 transition-colors p-1 "
                    >
                        <CloseIcon />
                    </div>
                </div>
                <div>
                    <div className="flex gap-2">
                        <div>
                            <CalculatorIcon />
                        </div>
                        <div className="text-lg">
                            cgpa: {cgpa} / {maxcgpa}
                        </div>
                    </div>
                    <div className="flex gap-2">
                        <div>
                            <LocationIcon />
                        </div>
                        <div>{location}</div>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
};

export default AboutEducationSelect;
