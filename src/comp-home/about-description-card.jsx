const AboutDescriptionCard = () => {
    return (
        <div className="mx-2 my-2 max-w-[390px]">
            <div className="text-3xl font-mono">About Me</div>
            <div className="mx-2 my-2 p-5 flex flex-col cursor-pointer rounded-3xl shadow-soft hover:bg-orange-200 transition-all delay-100 duration-300">
                <div>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Hic eaque praesentium, adipisci molestias tempore ab modi ut
                    nihil ipsam, quam earum dolores quis eum aliquid, dolore
                    velit rem eos explicabo.
                </div>
                <div className="px-4 py-2 my-2 right-0 rounded-xl self-end border-2 border-orange-300 ">
                    Learn More
                </div>
            </div>
        </div>
    );
};

export default AboutDescriptionCard;
