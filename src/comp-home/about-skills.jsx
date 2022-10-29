import {motion, useAnimationFrame, useMotionValue, useScroll, useSpring, useTransform, useVelocity } from "framer-motion"
import { useEffect, useRef } from "react"
import { wrap } from "@motionone/utils";

const NewsText = ({children,baseVelocity=10}) => {
    const x = useMotionValue(0)
    const { scrollY } = useScroll();
    const scrollVelocity = useVelocity(scrollY);
    const smoothVelocity = useSpring(scrollVelocity, {
      damping: 50,
      stiffness: 400
    });
    const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
      clamp: false
    });
    const directionFactor = useRef(1);

    const newx = useTransform(x, (v) => `${wrap(0, -20, v)}%`);
    // useEffect(() => x.onChange(latest => {console.log(x.get())}), [])

    useAnimationFrame((time, delta)=>{ 
        let moveBy = directionFactor.current * baseVelocity*(delta/1000);    
        if (velocityFactor.get() < 0) {
            directionFactor.current = -1;
          } else if (velocityFactor.get() > 0) {
            directionFactor.current = 1;
          }
      
        moveBy += directionFactor.current * moveBy * velocityFactor.get();    
        x.set(x.get() + moveBy)  
        // console.log(velocityFactor.get())
    })

    return ( <motion.div className="flex whitespace-nowrap flex-nowrap font-mono text-[64px]" style={{x: newx}}>
    <div>{children}•</div>
    <div>{children}•</div>
    <div>{children}•</div>
    <div>{children}•</div>
    <div>{children}•</div>
</motion.div> );
}
 

const AboutSkills = ()=>{

    return <div className="flex bg-yellow-300 overflow-hidden">
        <NewsText>HTML•CSS•Javascript</NewsText>
        
    </div>

}

export default AboutSkills