'use client';

import styles from "./page.module.css";

export default function TopMenuBar() {

  return (
      <div className={styles.wrapper}>
        <div className={styles.info}>
          <div className={styles.logo}>PROTECHNIKA</div>
          <div className={styles.tel}>+1234567890</div>
        </div>
        <div className={styles.menu}>MENU</div>
      </div>
  );
}