'use client';

import styles from "./page.module.css";
import PrimaryButton from "@/components/primary-button/page";
import Image from "next/image";
import Carousel from "@/components/carousel/page";
import {DICTIONARY} from "@/dictionary";

export default function Home() {
    const basePath = process.env.BASE_PATH || '';

    return (
        <div className={styles.wrapper}>
            <div className={styles.backgroundImage}>
                <Image
                    className={styles.image}
                    src={`${basePath}zisam.png`}
                    alt="Vercel logomark"
                    width={100}
                    height={100}
                />
            </div>
            <div className={styles.buttons}>
                <PrimaryButton text={'text 1'}/>
                <PrimaryButton text={'text 2'}/>
                <PrimaryButton text={'text 3'}/>
                <PrimaryButton text={'text 4'}/>
                <PrimaryButton text={'text 5'}/>
                <PrimaryButton text={'text 6'}/>
                <PrimaryButton text={'text 7'}/>
            </div>
            <div className={styles.textWrapper}>
                <span className={styles.text}>{DICTIONARY.carouselText}</span>
            </div>
            <div className={styles.carouselWrapper}>
                <Carousel/>
            </div>
        </div>
    );
}