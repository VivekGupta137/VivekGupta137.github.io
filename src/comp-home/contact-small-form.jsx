import { useEffect, useRef, useState } from "react";

const ContactSmallForm = ({ toggleContact }) => {
    const [sendActive, setSendActive] = useState(false);
    const emailButton = useRef();
    useEffect(() => {
        if (sendActive) {
            emailButton.current.innerHTML = "Loading";
            emailButton.current.disabled = true;
            emailButton.current.classList.remove("shadow-soft");
            emailButton.current.classList.add("shadow-inset");
        } else {
            emailButton.current.innerHTML = "Send Email";
            emailButton.current.disabled = false;
            emailButton.current.classList.add("shadow-soft");
            emailButton.current.classList.remove("shadow-inset");
        }
    }, [sendActive]);

    let handleSendEmail = () => {
        setSendActive((x) => !x);
        setTimeout(() => {
            toggleContact();
        }, 1000);
    };
    return (
        <div className="px-2 py-2 mb-3 shadow-soft bg-[var(--color-bg)] w-[300px] rounded-lg flex flex-col gap-2">
            <input
                className="shadow-inset w-full h-10 p-4 outline-0 block bg-[var(--color-bg)] rounded-lg "
                type="email"
                placeholder="example@company.com"
                name=""
                id=""
                // defaultValue="example@company.com"
            />
            <textarea
                className="shadow-inset w-full h-14 overflow-hidden p-4 outline-0 block bg-[var(--color-bg)] rounded-lg "
                type="email"
                placeholder="Send me Hi!"
                name=""
                id=""
                defaultValue="Hi Vivek!"
            />
            <div className="my-1 self-end">
                <button
                    ref={emailButton}
                    onClick={handleSendEmail}
                    className="shadow-soft rounded-full p-2 w-28 whitespace-nowrap"
                >
                    send email
                </button>
            </div>
        </div>
    );
};

export default ContactSmallForm;
