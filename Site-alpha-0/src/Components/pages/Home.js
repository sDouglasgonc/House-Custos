import React from "react";
import Banner from "../layout/Banner";
import style from "./Home.module.css"

function Home(){
    return(<>
    <div className={style.home_main}>
    <Banner />
    </div>
        </>
    )
}
export default Home