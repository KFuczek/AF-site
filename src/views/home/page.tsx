'use client';

import styles from "./page.module.css";
import Carousel from "@/components/carousel/page";
import PrimaryButton from "@/components/primary-button/page";

export default function Home() {

    return (
        <div className={styles.wrapper}>
            <div>
                <Carousel/>
                <div className={styles.buttons}>
                    <PrimaryButton text={'text 1'}/>
                    <PrimaryButton text={'text 2'}/>
                    <PrimaryButton text={'text 3'}/>
                    <PrimaryButton text={'text 4'}/>
                </div>
            </div>
        </div>
    );
}