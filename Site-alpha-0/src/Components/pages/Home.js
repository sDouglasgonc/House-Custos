import React from "react";
import Banner from "../layout/Banner";
import style from "./Home.module.css"
import ImgSlide from "../layout/ImgSlide";
import Integrantes from "../layout/Integrantes";
function Home(){
    return(<>
    
    <div className={style.home_main}>
    <div className={style.img}>
        <Banner/>
        <ImgSlide/>
        <Integrantes/>
        </div>
    </div>
        </>
    )
}
export default Home