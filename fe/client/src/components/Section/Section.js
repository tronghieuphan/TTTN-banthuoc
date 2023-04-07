import { useRef } from "react";
import { useInView } from "framer-motion";
import "./Section.scss";

function Section({ children }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        <section ref={ref}>
            <span className="text"
                style={{
                    transform: isInView ? "none" : "translateX(-200px)",
                    opacity: isInView ? 1 : 0,
                    transition: "all 2s cubic-bezier(0.17, 0.55, 0.55, 1) 1s",
                }}
            >
                {children}
            </span>
        </section>
    );
}

export default Section;
