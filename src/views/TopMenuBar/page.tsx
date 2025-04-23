'use client';

import styles from "./page.module.css";
import ModalMenu from "@/components/modal-menu/page";
import {useState} from "react";

export default function TopMenuBar() {
    const [menuIsOpen, setMenuIsOpen] = useState(false);

    const toggleMenu = () => {
        setMenuIsOpen(!menuIsOpen);
    }

    return (
      <div className={styles.wrapper}>
        <div className={styles.info}>
          <div className={styles.logo}>PROTECHNIKA</div>
          <div className={styles.tel}>+1234567890</div>
        </div>
        <button className={styles.menu} onClick={toggleMenu}><div></div><div></div></button>
          <div className={styles.modalMenu}>
              { menuIsOpen && <ModalMenu toggleMenu={toggleMenu}/>}
          </div>
      </div>
    );
}