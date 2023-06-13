import React from "react";
import Banner from "../layout/Banner";
import style from "./Home.module.css"
import ImgSlide from "../layout/ImgSlide";
import Integrantes from "../layout/Integrantes";
function Home(){
    return(<>
    
    <div className={style.home_main}>
    
        <Banner/>
        <ImgSlide/>
        <Integrantes/>
        </div>
        </>
    )
}
export default Home