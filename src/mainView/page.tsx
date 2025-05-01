'use client';

import styles from "./page.module.css";
import Home from "@/views/home/page";
import Paragraph from "@/views/paragraph/page";
import Footer from "@/views/footer/page";
import TopMenuBar from "@/views/TopMenuBar/page";
import Header from "@/views/Header/page";

export default function View() {
    return (
        <div className={styles.main}>
            <div className={`${styles.header}`}><Header/></div>
            <div className={styles.topMenuBar}><TopMenuBar/></div>
            <div className={styles.home}><Home/></div>
            <div className={`${styles.paragraph}`}><Paragraph data={{title: 'title1', text: 'text1'}}/></div>
            <div className={`${styles.paragraph}`}><Paragraph data={{title: 'title2', text: 'text2'}}/></div>
            <div className={`${styles.paragraph}`}><Paragraph data={{title: 'title3', text: 'text3'}}/></div>
            <div className={`${styles.footer}`}><Footer/></div>
        </div>
    );
}