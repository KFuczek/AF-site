'use client';
import Image from "next/image";
import styles from "./page.module.css";

const basePath= process.env.BASE_PATH || '';

export default function Home() {

  return (
      <main>
        <h1>Hej, to Next.js na GitHub Pages 🚀</h1>
        <div className={styles.pin}>guzik</div>
          <Image
              src={`${basePath}default-image.png`}
              alt="Vercel logomark"
              width={200}
              height={200}
          />
      </main>
  );
}