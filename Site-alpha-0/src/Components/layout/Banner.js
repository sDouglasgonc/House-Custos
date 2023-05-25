import React from "react";
import styles from "../layout/Banner.module.css"
import {Link} from "react-router-dom"
import { motion } from "framer-motion";
function Banner(){


    return(
        <header>
        <div className={styles.banner}>  
           
        <h1>House Custos</h1>
        <p>Um site onde contará com o custo da minha casa, ultilizando uma api e     
        podendo fazer o calculo das despesas, podendo fazer assim uma administração mais concisa.</p>
        <motion.div
        whileHover={{
            scale: [null,1.2,1.1] ,
            transition: {duration: 0.3}
        }}>
            <Link className={styles.btn} to="/custos">Vamos Checar</Link>
            </motion.div>
        </div>
        </header>
    )
}
export default Banner