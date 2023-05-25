import React from "react"
import styles from "./Integrantes.module.css"
import { AnimatePresence, easeOut, motion } from "framer-motion"

function Integrantes(){
    return(
<>
<AnimatePresence>
{styles.div && (
<motion.div  className={styles.div}
animate={{x: [null,100,0]}}
transition={{ease: easeOut , duration: 1}}

 />
)}
</AnimatePresence>
</>

    )
}
export default Integrantes