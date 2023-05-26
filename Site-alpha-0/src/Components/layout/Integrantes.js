import React from "react"
import styles from "./Integrantes.module.css"
import { AnimatePresence, motion } from "framer-motion"

function Integrantes(){
    return(
<>
<AnimatePresence>
<motion.div  className={styles.div}>
<motion.circle className={styles.circle}>

</motion.circle>
</motion.div>
</AnimatePresence>
</>

    )
}
export default Integrantes