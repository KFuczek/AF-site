import styles from './page.module.css';
import Image from "next/image";

export default function PrimaryButton({text, url, description}: { text: string, url: string, description?: string }) {
    const basePath = process.env.BASE_PATH || '';

    return (
        <button className={styles.primaryButton}>
            <Image
                className={styles.image}
                src={`${basePath}${url}.svg`}
                alt="Vercel logomark"
                width={100}
                height={100}
            />
            <div className={styles.buttonTitle}>{text}</div>
            <div className={styles.buttonDescription}>{description}</div>
        </button>
    );
}