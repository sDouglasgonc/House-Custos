import React from "react";
import Imagem from "../imgs/homemadulto.png"
import styles from "./Box.module.css"

function Box(){
    return(
        <>
<img className={styles.profile} src={Imagem} alt="img"></img>
<h3>José Denison</h3>
<h3 className={styles.ocupation}>Estudante de Radiologia</h3>
<p>integrante da casa, filho de Luciana e Genival e irmão de Douglas.</p>
</>
    )
}
export default Box