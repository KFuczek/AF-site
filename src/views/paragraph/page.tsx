'use client';

import styles from "./page.module.css";
import StandardCard from "@/components/standard-card/page";
import {ParagraphCard} from "../../../data/types";

export default function Paragraph({data, scrollId}: { data: ParagraphCard, scrollId: string }) {

    const createStandardParagraph = (data: ParagraphCard) => {
        const {title, description, imageUrl} = data;

        return (<StandardCard title={title} description={description} imageUrl={imageUrl}/>)
    }

    const createParagraph = (data: ParagraphCard) => {
        const {type} = data;

        switch (type) {
            case 'standard': {
                return createStandardParagraph(data);
            }
        }

        return createStandardParagraph(data);
    }

    return (
        <div id={scrollId} className={styles.wrapper}>
            {createParagraph(data)}
        </div>
    )
}
