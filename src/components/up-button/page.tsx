import styles from './page.module.css';
import {useEffect, useRef} from "react";

export default function UpButton() {
    const button = useRef<HTMLButtonElement>(null);
    let throttleTimeout: NodeJS.Timeout | null = null;

    useEffect(() => {
        handleScroll();
        document.body.addEventListener("scroll", throttledHandleScroll);

        return () => {
            document.body.removeEventListener("scroll", throttledHandleScroll);
        };
    }, []);

    const handleScroll = () => {
        const scrollPosition = document.body.scrollTop || document.documentElement.scrollTop;

        if (button.current) {
            if (scrollPosition > 500) {
                button.current.style.display = "block";
            } else {
                button.current.style.display = "none";
            }
        }
    };

    const throttledHandleScroll = () => {
        if (throttleTimeout) {
            return;
        }

        throttleTimeout = setTimeout(() => {
            handleScroll();
            throttleTimeout = null;
        }, 200);
    };

    const scrollToTop = () => {
        document.body.scrollTo({top: 0, behavior: "smooth"});
    };

    return (
        <button ref={button} className={styles.upButton} onClick={scrollToTop} aria-label="Scroll to top">
            ↑
        </button>
    );
}
