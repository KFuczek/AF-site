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
                    src={`${basePath}zisam.jpg`}
                    alt="Vercel logomark"
                    width={100}
                    height={100}
                />
            </div>
            <div className={styles.buttons}>
                <div className={styles.column}>
                    <PrimaryButton text={'Informacje'} url={'cheese'}
                                   description={'tutaj będize jakiś tekst, więcej tekstu i jeszcze troche'}/>
                    <PrimaryButton text={'Historia'} url={'hamburger'}
                                   description={'tutaj będize jakiś tekst, więcej tekstu i jeszcze troche'}/>
                    <PrimaryButton text={'Jak zamówić'} url={'cheese'}
                                   description={'tutaj będize jakiś tekst, więcej tekstu i jeszcze troche'}/>
                    <PrimaryButton text={'Kontakt'} url={'chef'}
                                   description={'tutaj będize jakiś tekst, więcej tekstu i jeszcze troche'}/>
                </div>
                <div className={styles.column}>
                    <PrimaryButton text={'Nowości'} url={'cheese'}
                                   description={'tutaj będize jakiś tekst, więcej tekstu i jeszcze troche'}/>
                    <PrimaryButton text={'Realizacje'} url={'chef'}
                                   description={'tutaj będize jakiś tekst, więcej tekstu i jeszcze troche'}/>
                    <PrimaryButton text={'Więcej'} url={'cheese'}
                                   description={'tutaj będize jakiś tekst, więcej tekstu i jeszcze troche'}/>
                </div>
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