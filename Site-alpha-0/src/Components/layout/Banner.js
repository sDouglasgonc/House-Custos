import React from "react";
import styles from "../layout/Banner.module.css"


function Banner(){
    return(
        <div className={styles.banner}>  
           
        <h1>Projeto sem nome</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        Ducimus eligendi mollitia repellat delectus voluptates enim
         molestias placeat eveniet animi odit.</p>
        <button className={styles.btn}>Vamos Checar</button>
        </div>
    )
}
export default Banner