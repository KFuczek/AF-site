import styles from './page.module.css';

export default function UpButton() {

    return (
        <a href={`#header`} className={styles.upButton}>
            UP
        </a>
    );
}
