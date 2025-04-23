import styles from './page.module.css';

export default function ModalMenu({toggleMenu}: {toggleMenu: () => void}) {

    return (
        <div className={styles.modalWrapper}>
            <div className={styles.modal}>
                <div className={styles.modalContent}>
                    <button className={styles.closeButton} onClick={toggleMenu}>
                        &times;
                    </button>
                    <button className={styles.menuButton}>Button 1</button>
                    <button className={styles.menuButton}>Button 2</button>
                    <button className={styles.menuButton}>Button 3</button>
                </div>
            </div>
        </div>
    );
}