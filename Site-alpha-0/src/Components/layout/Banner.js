import React from "react";
import styles from "../layout/Banner.module.css"
import {Link} from "react-router-dom"
function Banner(){


    return(
        <header>
        <div className={styles.banner}>  
           
        <h1>House Custos</h1>
        <p>Um site onde contará com o custo da minha casa, ultilizando uma api e podendo fazer o calculo das despesas, podendo fazer assim uma administração mais concisa.</p>
            <Link className={styles.btn} to="/custos">Vamos Checar</Link>
        </div>
        </header>
    )
}
export default Banner