'use client';

import Image from "next/image";
import styles from "./page.module.css";
import {DICTIONARY} from "@/dictionary";

export default function Header() {
    const basePath = process.env.BASE_PATH || '';

    return (
        <div className={styles.wrapper}>
            <div className={styles.header}>
                <div className={styles.text}>{DICTIONARY.header}</div>
                <div className={styles.imageWrapper}>
                    <Image
                        className={styles.image}
                        src={`${basePath}branch.svg`}
                        alt="Vercel logomark"
                        width={100}
                        height={100}
                    />
                </div>
            </div>
        </div>
    );
}