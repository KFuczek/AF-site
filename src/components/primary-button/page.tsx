import styles from './page.module.css';
import Image from "next/image";
import {ParagraphTeaser} from "../../../data/types";

export default function PrimaryButton({data, buttonId}: { data: ParagraphTeaser, buttonId: string }) {
    const basePath = process.env.BASE_PATH || '';
    const {title, description, url} = data;

    return (
        <a href={`#${buttonId}`} className={styles.primaryButton}>
            <div className={styles.titleLine}>
                <Image
                    className={styles.image}
                    src={`${basePath}${url}.svg`}
                    alt="Vercel logomark"
                    width={100}
                    height={100}
                />
                <div className={styles.buttonTitle}>{title}</div>
            </div>
            <div className={styles.buttonDescription}>{description}</div>
        </a>
    );
}