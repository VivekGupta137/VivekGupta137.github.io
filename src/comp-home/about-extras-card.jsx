import { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";
import ContactSmallForm from "./contact-small-form";
import { AnimatePresence, LayoutGroup, motion } from "framer-motion";
import { useFloating } from "@floating-ui/react-dom";
import AboutContactButton from "./about-contact-button";
import AboutDownloadButton from "./about-download-button";
const AboutExtrasCard = () => {
    return (
        <div className="mx-2 my-2 flex flex-col justify-center">
            <div className=" flex flex-col gap-4 justify-end text-lg font-thin ">
                <AboutContactButton />
                {/* <AboutDownloadButton /> */}
            </div>
        </div>
    );
};

export default AboutExtrasCard;
