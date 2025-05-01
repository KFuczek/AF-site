"use client";
import styles from './page.module.css';
import {useEffect, useRef} from "react";
import Image from "next/image";

//const BASE_PATH = process.env.BASE_PATH || '';

export default function Carousel() {
    const slides = useRef<HTMLDivElement>(null);
    const sliderNav = useRef<HTMLDivElement>(null);

    let index = 0;

    const slider = () => {

        const numberOfSlides = slides.current?.children?.length as number;

        if (!slides.current?.children || numberOfSlides === 0 || !sliderNav.current?.children) {
            return;
        }

        const isLastImage = index === numberOfSlides - 1;

        sliderNav.current.children[index].classList.remove(styles.slideActive);

        index = isLastImage ? 0 : index + 1;

        sliderNav.current.children[index].classList.add(styles.slideActive);

        const imageWidth = slides.current.children[0].clientWidth;

        const removedElement = slides.current.children[0].cloneNode(true)

        if (removedElement) {
            slides.current.appendChild(removedElement);
            slides.current.scrollBy({left: imageWidth, behavior: 'smooth'});

            setTimeout(() => {
                if (!slides.current) {
                    return;
                }

                slides.current.removeChild(slides.current.firstChild as HTMLDivElement);
                slides.current.scrollTo(0, 0);
            }, 1000)

        }
    };

    useEffect(() => {
        const interval = setInterval(slider, 3000);
        return () => clearInterval(interval);
    }, []);


    return (
        <div className={styles.carousel}>
            <div ref={slides} className={styles.imagesContainer} id="imgs">
                <Image className={styles.image} src="https://picsum.photos/id/1015/500/500" alt="pic1" width={200}
                       height={100}/>
                <Image className={styles.image} src="https://picsum.photos/id/1016/500/500" alt="pic2" width={200}
                       height={100}/>
                <Image className={styles.image} src="https://picsum.photos/id/1018/500/500" alt="pic3" width={200}
                       height={100}/>
                <Image className={styles.image} src="https://picsum.photos/id/1019/500/500" alt="pic4" width={200}
                       height={100}/>
                <Image className={styles.image} src="https://picsum.photos/id/1021/500/500" alt="pic5" width={200}
                       height={100}/>
            </div>
            <div className={styles.sliderNav} ref={sliderNav}>
                <div className={`${styles.sliderNavlink} ${styles.slideActive}`}></div>
                <div className={styles.sliderNavlink}></div>
                <div className={styles.sliderNavlink}></div>
                <div className={styles.sliderNavlink}></div>
                <div className={styles.sliderNavlink}></div>
            </div>
        </div>
    );
}