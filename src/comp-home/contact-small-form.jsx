import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { AnimatePresence, LayoutGroup, motion } from "framer-motion";
import AboutContactEmailSending from "./about-contact-email-sending";
import AboutContactEmailSent from "./about-contact-email-sent";
import AboutContactEmailSend from "./about-contact-email-send";

const ContactSmallForm = ({ toggleContact }) => {
    const [sendActiveStatus, setSendActiveStatus] = useState(0);

    const emailButton = useRef();
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();

    useEffect(() => {
        if (sendActiveStatus) {
            emailButton.current.disabled = true;
            emailButton.current.classList.remove("shadow-soft");
            emailButton.current.classList.add("shadow-inset");
        } else {
            emailButton.current.disabled = false;
            emailButton.current.classList.add("shadow-soft");
            emailButton.current.classList.remove("shadow-inset");
        }
    }, [sendActiveStatus]);

    function toParams(data_js) {
        var form_data = [];
        for (var key in data_js) {
            form_data.push(
                encodeURIComponent(key) + "=" + encodeURIComponent(data_js[key])
            );
        }

        return form_data.join("&");
    }

    const onSubmit = (data) => {
        setSendActiveStatus(1); // 1->started sending email
        let baseurl = "https://postmail.invotes.com/send";
        let postdata = {
            access_token: "2m0p3curqx1iesjjfgqon1qf",
            text: "",
            subject: "",
        };
        postdata["text"] = data["body"];
        postdata[
            "subject"
        ] = `${data["email"]} contacted from portfolio website`;

        setTimeout(() => {
            axios
                .post(baseurl, postdata, {
                    headers: {
                        "Content-type": "application/x-www-form-urlencoded",
                    },
                })
                .then((x) => {
                    setSendActiveStatus(x.status);
                    console.log("sent email");
                    setTimeout(() => {
                        toggleContact();
                    }, 2000);
                });
        }, 3000);
    };

    let inputvariants = {
        start: {
            opacity: 0,
            x: 100,
        },
        animating: {
            opacity: 1,
            x: 0,
        },
        end: {
            opacity: 0,
            x: 100,
            transition: {
                opacity: {
                    duration: 0.2,
                },
            },
        },
    };

    let sendbuttonvariantsOpacity = {
        start: {
            opacity: 0,
        },
        animating: {
            opacity: 1,
        },
        end: {
            opacity: 0,
        },
    };
    let sendbuttonvariantsY = {
        start: {
            y: -50,
        },
        animating: {
            y: 0,
        },
        end: {
            opacity: 0,
        },
    };

    return (
        <div className="px-2 py-2 mb-3 shadow-soft bg-[var(--color-bg)] w-[300px] rounded-lg ">
            <form
                className="flex flex-col gap-2 "
                onSubmit={handleSubmit(onSubmit)}
            >
                <LayoutGroup>
                    <motion.div layout>
                        <input
                            className="shadow-inset border-2 required:border-pink-500 w-full h-10 p-4 outline-0 block bg-[var(--color-bg)] rounded-lg "
                            type="email"
                            placeholder="example@company.com"
                            {...register("email", { required: true })}
                            required={errors.email}
                            defaultValue="example@company.com"
                        />
                        <AnimatePresence>
                            {errors.email && (
                                <motion.div
                                    variants={inputvariants}
                                    initial="start"
                                    animate="animating"
                                    exit="end"
                                    className="text-sm italic select-none font-medium text-pink-500"
                                >
                                    Your email is required
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.div>
                    <motion.div layout>
                        <textarea
                            className="shadow-inset w-full h-14 overflow-hidden p-4 outline-0 block bg-[var(--color-bg)] rounded-lg "
                            placeholder="Send me Hi!"
                            defaultValue="Hi Vivek!"
                            {...register("body")}
                        />
                    </motion.div>
                </LayoutGroup>
                <motion.div className="my-1 self-end">
                    <motion.button
                        ref={emailButton}
                        // onClick={handleSendEmail}
                        type="submit"
                        className="shadow-soft rounded-full p-2 whitespace-nowrap ring-0"
                        disabled={sendActiveStatus != 0}
                        whileHover={{
                            scale: 1.1,
                        }}
                        whileTap={{ scale: 0.9 }}
                    >
                        <AnimatePresence>
                            {sendActiveStatus == 0 && (
                                <AboutContactEmailSend
                                    variants={sendbuttonvariantsOpacity}
                                    initial="start"
                                    animate="animating"
                                    exit="end"
                                />
                            )}
                            {sendActiveStatus == 1 && (
                                <AboutContactEmailSending
                                    variants={sendbuttonvariantsOpacity}
                                    initial="start"
                                    animate="animating"
                                    exit="end"
                                />
                            )}
                            {sendActiveStatus == 200 && (
                                <AboutContactEmailSent
                                    variants={sendbuttonvariantsY}
                                    initial="start"
                                    animate="animating"
                                    exit="end"
                                />
                            )}
                        </AnimatePresence>
                    </motion.button>
                </motion.div>
            </form>
        </div>
    );
};

export default ContactSmallForm;
