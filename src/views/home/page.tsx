'use client';

import styles from "./page.module.css";
import Image from "next/image";

export default function Home() {

  const basePath= process.env.BASE_PATH || '';

  return (
    <div className={styles.wrapper}>
      <div>
        HOME
          <Image
              src={`${basePath}default-image.png`}
              alt="Vercel logomark"
              width={200}
              height={200}
          />
      </div>
    </div>
  );
}