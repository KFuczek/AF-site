import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
      <main>
        <h1>Hej, to Next.js na GitHub Pages 🚀</h1>
        <div className={styles.pin}>guzik</div>
          <Image
              src="/vercel.svg"
              alt="Vercel logomark"
              width={20}
              height={20}
          />
      </main>
  );
}