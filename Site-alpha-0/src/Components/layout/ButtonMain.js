import React from "react";
import './ButtonMain.css'
import { Button, Space } from "antd";
function ButtonMain() {
    return (
        <div className="button">
            <Space >
                <Button style={{ width: "300px", backgroundColor: "green", border: "none" }} >Começar</Button>
            </Space>
        </div>
    )
}
export default ButtonMain