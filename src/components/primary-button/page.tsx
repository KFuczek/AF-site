import styles from './page.module.css';

export default function PrimaryButton({text}: { text: string }) {
    return (
        <button className={styles.primaryButton}>
            <span>{text}</span>
        </button>
    );
}