'use client';

import styles from "./page.module.css";

export default function Paragraph({data}: {data: any}) {

  const { text, title } = data;

  return (
    <div className={styles.wrapper}>
      <div>{text}</div>
      <div>{title}</div>
    </div>
  );
}