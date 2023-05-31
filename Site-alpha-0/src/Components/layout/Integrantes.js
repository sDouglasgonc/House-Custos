import React from "react"
import styles from "./Integrantes.module.css"
import { AnimatePresence} from "framer-motion"
import Imagem from "../imgs/homemadulto.png"
function Integrantes(){
    return(
<>
<AnimatePresence>

<div  className={styles.review}>
<div className={styles.box}>
<img className={styles.profile} src={Imagem} alt="img"></img>
<h3>Maluvido JR</h3>
<h3 className={styles.ocupation}>Agiota</h3>
<p>Resumo sobre </p>
</div>
</div>
</AnimatePresence>
</>

    )
}
export default Integrantes