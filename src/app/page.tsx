'use client';

import View from "@/mainView/page";
import {useEffect, useState} from "react";

export default function Home() {
    const [isSSR, setIsSSR] = useState(true);

    useEffect(() => {
        setIsSSR(false);
    }, []);

    return isSSR ? null : (
        <View/>
    );
}