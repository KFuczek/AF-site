import styles from './page.module.css';

export default function StandardCard({title, imageUrl, description}: {
    title: string,
    imageUrl: string,
    description: string
}) {
    // const basePath = process.env.BASE_PATH || '';

    return (
        <div className={styles.card}>
            <div className={styles.waveTop}></div>

            <div className={styles.aboutContent}>
                <h2 className={styles.sectionTitle}>{title}</h2>
                <img src={imageUrl} alt="image" className={styles.aboutImage}/>
                <p className={styles.aboutText}>
                    {description}
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.
                </p>
            </div>

            <div className={styles.waveBottom}></div>

        </div>
    );
}