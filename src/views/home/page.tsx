'use client';

import styles from "./page.module.css";
//import Image from "next/image";
import Carousel from "@/components/carousel/page";

export default function Home() {

    //const basePath= process.env.BASE_PATH || '';

    return (
        <div className={styles.wrapper}>
            <div>
                <Carousel/>
                {/*<Image*/}
                {/*    src={`${basePath}default-image.png`}*/}
                {/*    alt="Vercel logomark"*/}
                {/*    width={300}*/}
                {/*    height={400}*/}
                {/*/>*/}
            </div>
        </div>
    );
}