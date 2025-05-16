'use client';

import styles from "./page.module.css";

export default function header() {

    return (
        <div className={styles.wrapper}>
            <footer className={styles.footer}>
                <div className={styles.footerContent}>
                    <div className={styles.footerSection}>
                        <h3>Contact</h3>
                        <p>
                            ikona

                        </p>
                    </div>
                    <div className={styles.footerSection}>
                        <h3>Follow us</h3>
                        <p>
                            ikona2

                        </p>
                    </div>
                </div>

                <div className={styles.footerWave}></div>

                <div className={styles.footerBottom}>
                    <p>&copy; 2024 PROTECHNIKA — All rights reserved</p>
                </div>
            </footer>
        </div>
    );
}