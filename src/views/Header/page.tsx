'use client';

import styles from "./page.module.css";
import {DICTIONARY} from "@/dictionary";

export default function Header() {

  return (
    <div className={styles.wrapper}>{DICTIONARY.header}</div>
  );
}