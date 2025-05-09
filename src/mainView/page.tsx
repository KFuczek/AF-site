'use client';

import styles from "./page.module.css";
import Home from "@/views/home/page";
import Paragraph from "@/views/paragraph/page";
import Footer from "@/views/footer/page";
import TopMenuBar from "@/views/TopMenuBar/page";
import Header from "@/views/Header/page";
import UpButton from "@/components/up-button/page";
import {paragraphData} from "../../data/cardData";

export default function View() {
    return (
        <>
            <div className={styles.upButton}>
                <UpButton/>
            </div>
            <div className={styles.header}>
                <Header/>
            </div>
            <div className={styles.topMenuBar}>
                <TopMenuBar/>
            </div>
            <div className={styles.home}>
                <Home paragraphData={paragraphData}/>
            </div>
            <div className={styles.paragraph}>
                <Paragraph data={paragraphData.info.card}
                           scrollId={paragraphData.info.scrollId}/>
            </div>
            <div className={styles.paragraph}>
                <Paragraph data={paragraphData.history.card}
                           scrollId={paragraphData.history.scrollId}/>
            </div>
            <div className={styles.paragraph}>
                <Paragraph data={paragraphData.news.card}
                           scrollId={paragraphData.news.scrollId}/>
            </div>
            <div className={styles.footer}>
                <Footer/>
            </div>
        </>
    );
}