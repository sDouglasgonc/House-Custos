import React from "react"
import styles from "./Integrantes.module.css"
import { AnimatePresence, motion } from "framer-motion"

function Integrantes(){
    return(
<>
<AnimatePresence>
<div  className={styles.div}>
<motion.foto className={styles.foto}>
</motion.foto>
<h2>Nome da Pessoa</h2>
<h3>Ocupação da pessoa</h3>
<p>Resumo sobre a pessoa Resumo sobre a pessoa Resumo sobre a pessoa Resumo sobre a pessoa
Resumo sobre a pessoa 
</p>
</div>
</AnimatePresence>
</>

    )
}
export default Integrantes