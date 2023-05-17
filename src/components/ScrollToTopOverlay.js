import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";
import { animateScroll as scroll } from "react-scroll";

const ScrollToTopOverlay = () => {
    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
        window.removeEventListener("scroll", handleScroll);
    };
}, []);

    const handleScroll = () => {
    if (window.pageYOffset > 400) {
        setShowButton(true);
    } else {
        setShowButton(false);
    }
    };

    const scrollToTop = () => {
    scroll.scrollToTop();
    };

    return (
    <div
        className={`scroll-to-top-overlay ${showButton ? "show" : ""}`}
        onClick={scrollToTop}
    >
        <FaArrowUp className="scroll-to-top-icon" />
    </div>
    );
};

export default ScrollToTopOverlay;
