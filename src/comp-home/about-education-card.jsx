import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const AboutEducationCard = () => {
    const [selectedItem, setSelectedItem] = useState(null) 

    let education = [
        {
            id: "IIITB",
            college: "International Institute of Information Technology, Bangalore",
            start: 2019,
            end: 2021,
            degree: "M.Tech",
            stream: "Computer Science",
        },
        {
            id: "BIT",
            college: "Birsa Institute of Technology, Sindri",
            start: 2015,
            end: 2019,
            degree: "B.Tech",
            stream: "Computer Science",
        },
    ];
    return (
        <div className=" mx-2 my-2 relative">
            <div className="text-3xl font-mono">Education</div>
            <motion.div layoutId="educationlayout"  layout className="flex flex-wrap justify-center">
                {education.map((e) => (
                    <motion.div layout layoutId={e.id} onClick={()=>{
                        setSelectedItem(null);
                        setSelectedItem(e);
                    }} className="p-5 cursor-pointer rounded-3xl shadow-soft mx-2 my-2 min-w-[150px] hover:bg-green-200 transition-all delay-100 duration-300">
                        <div className="flex">
                            <div className="text-6xl font-bold font-mono">
                                {e.end - e.start}
                            </div>
                            <div className="text-3xl self-end">yrs</div>
                        </div>
                        <div className="text-4xl font-sans">{e.degree}</div>
                    </motion.div>
                ))}
                
            </motion.div>
            <AnimatePresence >
                {!!selectedItem && <motion.div layout onClick={()=>setSelectedItem(null)} layoutId={selectedItem.id} className="p-5 my-5 shadow-soft overflow-hidden break-all ">{selectedItem.college}</motion.div>}
            </AnimatePresence>
            
        </div>
    );
};

export default AboutEducationCard;
