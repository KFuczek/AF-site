import styles from './page.module.css';

export default function StandardCard({title, imageUrl, description}: {
    title: string,
    imageUrl: string,
    description: string
}) {
    // const basePath = process.env.BASE_PATH || '';

    return (
        <div className={styles.card}>
            Title: {title}
            Image: {imageUrl}
            Description: {description}
        </div>
    );
}