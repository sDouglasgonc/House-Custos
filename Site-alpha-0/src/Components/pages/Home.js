import React from "react";
import Banner from "../layout/Banner";
import style from "./Home.module.css"
import ImgSlide from "../layout/ImgSlide";
import Slides from "../layout/Slides";
function Home(){
    return(<>
    
    <div className={style.home_main}>
    
        <Banner/>
        <ImgSlide/>
        <Inrw/>
        </div>
        </>
    )
}
export default Home