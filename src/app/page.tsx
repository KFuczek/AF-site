import Image from "next/image";
import getConfig from "next/config";
import styles from "./page.module.css";

const { publicRuntimeConfig } = getConfig();

export default function Home() {
  const basePath = publicRuntimeConfig?.basePath || "";

  return (
      <main>
        <h1>Hej, to Next.js na GitHub Pages 🚀</h1>
        <div className={styles.pin}>guzik</div>
          <Image
              src={`${basePath}/default-image.png`}
              alt="Vercel logomark"
              width={200}
              height={200}
          />
      </main>
  );
}