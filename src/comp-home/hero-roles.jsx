import { AnimatePresence, LayoutGroup, motion } from "framer-motion";
import { useEffect } from "react";
import { useState } from "react";

const HeroRoles = () => {
    let roles = ["Tech Enthusiast", "Creative Full Stack Developer", "Big Data Engineer", "UI/UX Designer", "SEO Expert"]
    let colors = [""]
    const [showIdx, setShowIdx] = useState(0);

    useEffect(()=>{
        let counter = setInterval(() => {
            setShowIdx((cur)=> (cur+1)%roles.length)

        }, 2000);
        return ()=>{clearInterval(counter)};
    },[])

    let variants = {
        enter: {
            opacity: 0,
            y: -20
        },
        center: {
            opacity: 1,
            y: 0
        },
        exit:{
            opacity: 0,
            y: 20,
            transition: {
                duration: 0.3
            }
        }
    }

    return ( 
        <LayoutGroup>
    <motion.div  className="flex gap-2 text-2xl">
        
            <motion.div layout transition={{type: "spring"}}>Also I'm</motion.div>
            <AnimatePresence mode="wait">
                    {roles.map((role, idx)=>(idx == showIdx && 
                    <motion.div key={idx} 
                        variants={variants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={{
                            y: { type: "spring" }
                        }}
                        className='font-bold font-rounded'
                        >{role}</motion.div>))}
                </AnimatePresence>
        
    </motion.div>
    </LayoutGroup> );
}
 
export default HeroRoles;