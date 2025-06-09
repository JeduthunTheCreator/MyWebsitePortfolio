import React, { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";
import "../styles/ScrollToTopButton.css";

const ScrollToTopButton = () => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            setVisible(window.scrollY > 300);
        };

        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    const scrollToTop = () => {
        console.log("Button clicked");
        window.scrollTo({ top: 0 });
        console.log("Scrolling to top...");
    };

    return (
        visible && (
            <button className="scroll-to-top" onClick={scrollToTop} aria-label="Scroll to top">
                <FaArrowUp />
            </button>
        )
    );
};

export default ScrollToTopButton;
