import { motion } from "framer-motion";
import CloseIcon from "../icons/closeIcon";
import ExternalLinkIcon from "../icons/externalLinkIcon";
import StarIcon from "../icons/starIcon";

const AboutSkillsSelect = ({
    id,
    title,
    whatis,
    tech,
    projects,
    handleClick,
}) => {
    console.log("whatis", whatis);
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
                        {title}
                    </div>
                </div>
                <div className="pt-3">{whatis}</div>
                <div className="mt-2 flex-wrap flex gap-2">
                    <div className="flex flex-col gap-2 basis-[250px]">
                        {projects.map(({ title, tags, description, link }) => (
                            <div className="border-2 border-slate-500 rounded-lg p-2 ">
                                <div className="flex gap-3">
                                    <div className="font-medium text-lg ">
                                        {title}
                                    </div>
                                    {!!link && (
                                        <a
                                            href={link}
                                            target="_blank"
                                            className="cursor-pointer"
                                        >
                                            <ExternalLinkIcon />
                                        </a>
                                    )}
                                </div>
                                <div className="flex gap-2 flex-wrap ">
                                    {tags.map((tag) => (
                                        <div className="border-2 border-green-600 rounded-full px-2 whitespace-nowrap">
                                            {tag}
                                        </div>
                                    ))}
                                </div>
                                <div className="tracking-wide">
                                    {description}
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="flex flex-col gap-5 basis-[350px]">
                        {tech.map(
                            ({ title, stars, shortDescription, icons }) => {
                                return (
                                    <div>
                                        <div className="flex gap-4 ">
                                            <div className="font-medium whitespace-nowrap text-lg border-2 rounded-full border-slate-300 px-2">
                                                {title}
                                            </div>
                                            {!!stars && (
                                                <div className="flex">
                                                    {new Array(stars)
                                                        .fill(0)
                                                        .map((x, idx) => (
                                                            <StarIcon
                                                                key={idx}
                                                            />
                                                        ))}
                                                </div>
                                            )}
                                        </div>

                                        <div className="pt-1">
                                            {shortDescription}
                                        </div>
                                        <div className="flex gap-2">
                                            {!!icons &&
                                                icons.map(
                                                    ({ name, icon }, idx) => (
                                                        <div
                                                            title={name}
                                                            key={idx}
                                                        >
                                                            {icon}
                                                        </div>
                                                    )
                                                )}
                                        </div>
                                    </div>
                                );
                            }
                        )}
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
};

export default AboutSkillsSelect;
