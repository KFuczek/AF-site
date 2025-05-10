import styles from './page.module.css';

export default function ModalMenu({toggleMenu}: { toggleMenu: (event: React.MouseEvent<HTMLElement>) => void }) {

    return (
        <div className={styles.modalWrapper}>
            <div className={styles.modal} onClick={toggleMenu}>
                <div className={styles.modalContent}>
                    <button className={styles.closeButton} onClick={toggleMenu}>
                        &times;
                    </button>
                    <ul>
                        <li><a href="#informacje">Informacje</a></li>
                        <li><a href="#nowosci">Nowości</a></li>
                        <li><a href="#historia">Historia</a></li>
                        <li><a href="#realizacje">Realizacje</a></li>
                        <li><a href="#zamowienie">Jak zamówić</a></li>
                        <li><a href="#wiecej">Więcej</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}