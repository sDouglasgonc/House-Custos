import React from "react";
import styles from "./Footer.module.css"

function Footer(){
    return(
<footer className={styles.footer}>
    <ul className={styles.midias_list}>
        <li>
            Github
        </li>
        <li>
            Facebook
        </li>
        <li>
            Linkedn
        </li>
        <p className={styles.copy_right}>
            <span>Nome do Projeto</span> &copy; 2023
         </p>
    </ul>
</footer>
    )
}
export default Footer