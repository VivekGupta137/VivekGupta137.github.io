const Footer = () => {
    return (
        <div className="text-slate-500 border-t-[1px] border-slate-300">
            <div className="my-10  ">
                <div className="container m-auto flex justify-center">
                    <div className="basis-1/2 text-slate-600">
                        <div className="w-20 h-20 bg-slate-400"></div>
                        <div className="my-10">
                            <div>Have a question, offers on cooperation?</div>
                            <div>Feel free to contact me</div>
                        </div>
                        <div>:email:Vivekgpt107@gmail.com</div>
                        <div>:phone:+91 95236 29331</div>
                    </div>
                    <div className="basis-1/3">
                        {/* <h4>Email</h4> */}
                        <input
                            className="shadow-inset w-full h-10 p-4 outline-0 block bg-[var(--color-bg)] rounded-lg "
                            type="email"
                            placeholder="example@company.com"
                            name=""
                            id=""
                        />
                        <textarea
                            className="shadow-inset mt-4 w-full h-40 p-4 outline-0 block bg-[var(--color-bg)] rounded-lg "
                            type="email"
                            placeholder="Hi! Would love to meet you"
                            name=""
                            id=""
                        />
                        <button className="shadow-soft mt-4 rounded-lg py-2 w-1/3">
                            Send Message
                        </button>
                    </div>
                </div>
            </div>
            <div className="m-auto h-32 container border-t-[1px] border-slate-300 flex justify-center items-center">
                <div>Copyright © 2022. All rights reserved.</div>
            </div>
        </div>
    );
};

export default Footer;
