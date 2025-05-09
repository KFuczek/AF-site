'use client';

import styles from "./page.module.css";
import PrimaryButton from "@/components/primary-button/page";
import Image from "next/image";
import Carousel from "@/components/carousel/page";
import {DICTIONARY} from "@/dictionary";
import {ParagraphData} from "../../../data/types";

export default function Home({paragraphData}: { paragraphData: ParagraphData }) {
    const basePath = process.env.BASE_PATH || '';

    const {news, history, info, realization, howToOrder, more, contact} = paragraphData;

    return (
        <div id='home' className={styles.wrapper}>
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
                    <PrimaryButton data={info.teaser} buttonId={info.scrollId}/>
                    <PrimaryButton data={news.teaser} buttonId={news.scrollId}/>
                    <PrimaryButton data={history.teaser} buttonId={history.scrollId}/>
                    <PrimaryButton data={realization.teaser} buttonId={realization.scrollId}/>
                </div>
                <div className={styles.column}>
                    <PrimaryButton data={howToOrder.teaser} buttonId={howToOrder.scrollId}/>
                    <PrimaryButton data={more.teaser} buttonId={more.scrollId}/>
                    <PrimaryButton data={contact.teaser} buttonId={contact.scrollId}/>
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