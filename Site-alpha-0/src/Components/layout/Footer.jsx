import React from "react";
import styles from "./Footer.module.css"
import { GithubOutlined, FacebookOutlined, LinkedinOutlined } from "@ant-design/icons"
import { Link } from "react-router-dom"
function Footer() {
    return (
        <>
            <footer>
                <div className={styles.main_footer}>
                    <ul className={styles.midias_list}>
                        <li>
                            <GithubOutlined /> Github <Link to={"https://github.com/sDouglasgonc"}>  </Link>
                        </li>
                        <li>
                            <FacebookOutlined /> Facebook  <Link to={"https://www.facebook.com/profile.php?id=100005975162268"}>  </Link>
                        </li>
                        <li>
                            <LinkedinOutlined /> Linkedn  <Link to={"https://www.linkedin.com/in/douglas-silva-894065233/"}> </Link>
                        </li>
                    </ul>
                    <p className={styles.copy_right}>
                        <span>House Custos &copy; 2023</span>
                    </p>
                </div>
            </footer>
        </>
    )
}
export default Footer