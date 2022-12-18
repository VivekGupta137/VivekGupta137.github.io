import { useEffect } from "react";
import { useRef } from "react";

const HeroClock = () => {
    const hours = useRef();
    const minutes = useRef();
    const seconds = useRef();

    useEffect(() => {
        clock();
    }, []);

    let clock = () => {
        let today = new Date();
        let h = (today.getHours() % 12) + today.getMinutes() / 59; // 22 % 12 = 10pm
        let m = today.getMinutes(); // 0 - 59
        let s = today.getSeconds(); // 0 - 59

        h *= 30; // 12 * 30 = 360deg
        m *= 6;
        s *= 6; // 60 * 6 = 360deg

        rotation(hours.current, h);
        rotation(minutes.current, m);
        rotation(seconds.current, s);

        // call every second
        setTimeout(clock, 500);
    };

    let rotation = (target, val) => {
        target.style.transform = `rotate(${val}deg)`;
    };

    return (
        <div className="hidden  w-48 h-48 bg-[var(--color-bg)] shadow-soft rounded-full sm:flex  justify-center items-center fixed right-0 scale-50 z-10 ">
            <div
                ref={hours}
                className="absolute origin-bottom bottom-24 rounded-[.2rem] z-10 w-[.4rem] h-[3.2rem] bg-gray-400"
            ></div>
            <div
                ref={minutes}
                className="absolute origin-bottom bottom-24 rounded-[.2rem] z-10 w-[.4rem] h-[4.6rem] bg-gray-500"
            ></div>
            <div
                ref={seconds}
                className="absolute origin-bottom bottom-24 rounded-[.2rem] z-10 w-[.2rem] h-[5.2rem] bg-violet-500"
            ></div>
            <div className="absolute w-[0.8rem] h-[0.8rem] rounded-full bg-violet-500 z-10"></div>
            <div className="w-[95%] h-[95%] rounded-full relative shadow-inset">
                <div className="w-[65%] h-[65%] rounded-full absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] origin-bottom-right shadow-inset"></div>
                <span className="w-[0.2rem] h-[0.6rem] rounded-full absolute left-1/2  bg-slate-400 "></span>
                <span className="w-[0.2rem] h-[0.6rem] rounded-full absolute bottom-0 left-1/2  bg-slate-400"></span>
                <span className="w-[0.6rem] h-[0.2rem] rounded-full absolute top-1/2  bg-slate-400"></span>
                <span className="w-[0.6rem] h-[0.2rem] rounded-full absolute top-1/2 right-0  bg-slate-400"></span>
            </div>
        </div>
    );
};

export default HeroClock;
