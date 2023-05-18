import React from "react";
import Banner from "../layout/Banner";
import style from "./Home.module.css"
import ImgSlide from "../layout/ImgSlide";
function Home(){
    return(<>
    <div className={style.home_main}>
        <Banner/>
        <ImgSlide/>
    </div>
        </>
    )
}
export default Home